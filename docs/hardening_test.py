import json
import os
import time
import urllib.request
from websocket import create_connection

PORT = 9222
BASE = os.environ.get("HARDENING_BASE", "https://portfolio-omar-babayev.vercel.app")


def cdp(ws, method, params=None):
    cdp.counter += 1
    ws.send(json.dumps({"id": cdp.counter, "method": method, "params": params or {}}))
    while True:
        msg = json.loads(ws.recv())
        if msg.get("id") == cdp.counter:
            return msg


cdp.counter = 0

def run(ws, expression, await_promise=False):
    result = cdp(ws, "Runtime.evaluate", {"expression": expression, "returnByValue": True, "awaitPromise": await_promise})
    return result.get("result", {}).get("result", {}).get("value")


tabs = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json"))
ws = create_connection(tabs[0]["webSocketDebuggerUrl"])
cdp(ws, "Page.enable")
cdp(ws, "Runtime.enable")

results = []
paths = ["/", "/projects", "/contact"]
if BASE.startswith("http://127.0.0.1") or BASE.startswith("http://localhost"):
    paths = ["/index.html", "/projects.html", "/contact.html"]
for path in paths:
    cdp(ws, "Page.navigate", {"url": BASE + path})
    time.sleep(1)
    results.append({
        "path": path,
        "title": run(ws, "document.title"),
        "description": run(ws, "document.querySelector('meta[name=description]')?.content || ''"),
        "ogImage": run(ws, "document.querySelector(\"meta[property='og:image']\")?.content || ''"),
        "bodyWidth": run(ws, "document.body.scrollWidth"),
        "viewportWidth": run(ws, "window.innerWidth"),
        "scriptLoads": run(ws, "performance.getEntriesByType('resource').filter(x => x.name.includes('script.js')).length"),
    })

contact_path = "/contact.html" if "html" in paths[-1] else "/contact"
cdp(ws, "Page.navigate", {"url": BASE + contact_path})
time.sleep(1)
empty = run(ws, "document.querySelector('#contact-form').requestSubmit(); ({status: document.querySelector('#form-status').textContent, invalid: [...document.querySelectorAll('[aria-invalid=true]')].map(x => x.id)})")
garbage = run(ws, "document.querySelector('#name').value='@@@'; document.querySelector('#email').value='not-an-email'; document.querySelector('#message').value='   '; document.querySelector('#contact-form').requestSubmit(); ({status: document.querySelector('#form-status').textContent, invalid: [...document.querySelectorAll('[aria-invalid=true]')].map(x => x.id)})")

run(ws, "document.querySelector('#name').value='Omar'; document.querySelector('#email').value='omar@example.com'; document.querySelector('#message').value='Test message'; document.querySelector('#contact-form').requestSubmit(); document.querySelector('#contact-form').dispatchEvent(new Event('submit', {cancelable:true})); true")
time.sleep(.15)
double = run(ws, "({status: document.querySelector('#form-status').dataset.state, disabled: document.querySelector('button[type=submit]').disabled})")

print(json.dumps({"pages": results, "emptyForm": empty, "garbageForm": garbage, "doubleSubmit": double}, ensure_ascii=False, indent=2))
ws.close()

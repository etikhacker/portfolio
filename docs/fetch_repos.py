"""Fetch repos for a GitHub user via the public REST API."""
import json
import urllib.request
import sys

USER = "etikhacker"
URL = f"https://api.github.com/users/{USER}/repos?per_page=100&sort=updated"

req = urllib.request.Request(URL, headers={
    "Accept": "application/vnd.github+json",
    "User-Agent": "omar-portfolio-script",
})

try:
    with urllib.request.urlopen(req, timeout=30) as resp:
        body = resp.read().decode("utf-8")
        data = json.loads(body)
except Exception as e:
    print(f"Request failed: {e}", file=sys.stderr)
    sys.exit(1)

print(f"Total repos: {len(data)}\n")
for r in data:
    if r.get("fork"):
        continue
    print(f"Name:        {r['name']}")
    print(f"  Description: {r.get('description') or '(none)'}")
    print(f"  Language:    {r.get('language')}")
    print(f"  Stars:       {r.get('stargazers_count')}  Forks: {r.get('forks_count')}")
    print(f"  Size:        {r.get('size')} KB")
    print(f"  Homepage:    {r.get('homepage') or '(none)'}")
    print(f"  URL:         {r.get('html_url')}")
    print(f"  Updated:     {r.get('updated_at')}")
    print(f"  Pushed:      {r.get('pushed_at')}")
    print(f"  Archived:    {r.get('archived')}")
    print()

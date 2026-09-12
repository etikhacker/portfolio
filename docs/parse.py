"""Parse the concatenated GitHub API JSON and summarize repos."""
import json
import re
import sys

with open(r'D:\portfolio\docs\repos-raw.json', 'r', encoding='utf-8-sig') as f:
    raw = f.read()

# Strip raw control characters (newlines/tabs) inside the JSON string values
# but keep the structural whitespace outside. The simplest fix is to remove
# any control char (0x00-0x1F) that is NOT a tab, LF, or CR. Since GitHub's
# output has no embedded raw newlines, this should normalize it.
cleaned = re.sub(r'[\x00-\x08\x0b\x0c\x0e-\x1f]', '', raw)

try:
    data = json.loads(cleaned)
except json.JSONDecodeError as e:
    print(f"Still failed: {e}", file=sys.stderr)
    # Show a window around the error
    pos = e.pos
    print(repr(cleaned[max(0, pos-80):pos+80]), file=sys.stderr)
    sys.exit(1)

print(f"Total repos: {len(data)}\n")
for r in data:
    print(f"Name: {r['name']}")
    print(f"  Description: {r.get('description')}")
    print(f"  Language: {r.get('language')}")
    print(f"  Stars: {r.get('stargazers_count')}  Forks: {r.get('forks_count')}")
    print(f"  Size: {r.get('size')} KB")
    print(f"  Homepage: {r.get('homepage')}")
    print(f"  URL: {r.get('html_url')}")
    print(f"  Updated: {r.get('updated_at')}")
    print(f"  Pushed: {r.get('pushed_at')}")
    print(f"  Archived: {r.get('archived')}")
    print()

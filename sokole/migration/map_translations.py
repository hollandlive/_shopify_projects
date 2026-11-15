"""Fill Greek translations into the new store's export CSV.

Usage: python3 map_translations.py <new_export.csv>
Matches rows by (Type, Field, Default content) against the Greek CSV imported
into the old store (translations/sokole-el-import-2026-10-11.csv); falls back to
(Type, Field) + handle-like keys where English text is identical.
Writes migration/sokole-el-import-new-store.csv and prints a summary.
"""
import csv, sys, collections, html, re
from pathlib import Path

base = Path(__file__).resolve().parent
old = base.parent / 'translations' / 'sokole-el-import-2026-10-11.csv'
new = Path(sys.argv[1])

def norm(s):
    s = html.unescape(s or '')
    s = re.sub(r'<meta[^>]*>', '', s)
    return re.sub(r'\s+', ' ', s).strip()

old_rows = list(csv.DictReader(open(old, encoding='utf-8-sig')))
by_full, by_text = {}, collections.defaultdict(set)
for r in old_rows:
    if r['Locale'] != 'el' or not r['Translated content'].strip():
        continue
    by_full[(r['Type'], r['Field'], norm(r['Default content']))] = r['Translated content']
    by_text[norm(r['Default content'])].add(r['Translated content'])

new_rows = list(csv.DictReader(open(new, encoding='utf-8-sig')))
fields = list(new_rows[0].keys())
stats = collections.Counter()
for r in new_rows:
    if r['Locale'] != 'el':
        continue
    key = (r['Type'], r['Field'], norm(r['Default content']))
    t = by_full.get(key)
    if t is None and len(by_text.get(key[2], ())) == 1 and key[2]:
        t = next(iter(by_text[key[2]]))
        stats['matched_by_text'] += 1
    elif t is not None:
        stats['matched'] += 1
    if t is not None:
        r['Translated content'] = t
    else:
        stats['unmatched_' + r['Type']] += 1

out = base / 'sokole-el-import-new-store.csv'
w = csv.DictWriter(open(out, 'w', newline='', encoding='utf-8'), fieldnames=fields)
w.writeheader(); w.writerows(new_rows)
print(out)
for k, v in sorted(stats.items()):
    print(f'{k}: {v}')

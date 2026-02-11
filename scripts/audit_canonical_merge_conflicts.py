"""
Audit canonical merge conflicts:
Find canonical entries whose Alias references foods from different Categories.

Inputs (defaults in repo root):
  - DANH-MUC-THUC-PHAM-CANONICAL.csv
  - DANH-MUC-THUC-PHAM-HOP-NHAT_CLEAN.csv

Output:
  - conflict_report.csv
    Fields: CanonicalId | Name | Categories_found | Alias_ids
"""

from __future__ import annotations

import argparse
import csv
from pathlib import Path
from typing import Dict, List, Set


def read_id_to_category(path: Path) -> Dict[str, str]:
    out: Dict[str, str] = {}
    with path.open("r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        for r in reader:
            rid = (r.get("Id") or "").strip()
            cat = (r.get("Category") or "").strip()
            if rid:
                out[rid] = cat
    return out


def parse_alias_ids(alias: str) -> List[str]:
    """
    Alias format from normalize_food_catalog.py:
      id:name|id:name|...
    We only need ids.
    """
    alias = (alias or "").strip()
    if not alias:
        return []
    ids: List[str] = []
    for part in alias.split("|"):
        part = part.strip()
        if not part:
            continue
        rid = part.split(":", 1)[0].strip()
        if rid:
            ids.append(rid)
    return ids


def main() -> int:
    p = argparse.ArgumentParser(description="Audit canonical merge conflicts by Category")
    p.add_argument("--canonical", default="DANH-MUC-THUC-PHAM-CANONICAL.csv")
    p.add_argument("--source", default="DANH-MUC-THUC-PHAM-HOP-NHAT_CLEAN.csv")
    p.add_argument("--out", default="conflict_report.csv")
    args = p.parse_args()

    canonical_path = Path(args.canonical)
    source_path = Path(args.source)
    out_path = Path(args.out)

    id_to_cat = read_id_to_category(source_path)

    conflicts: List[dict] = []
    with canonical_path.open("r", encoding="utf-8", newline="") as f:
        reader = csv.DictReader(f)
        for r in reader:
            canon_id = (r.get("CanonicalId") or r.get("Id") or "").strip()
            name = (r.get("Name") or "").strip()
            alias_ids = parse_alias_ids(r.get("Alias") or "")

            cats: Set[str] = set()
            if canon_id:
                cats.add(id_to_cat.get(canon_id, (r.get("Category") or "").strip()))
            for aid in alias_ids:
                cats.add(id_to_cat.get(aid, ""))

            cats = {c for c in cats if c}
            if len(cats) > 1:
                conflicts.append(
                    {
                        "CanonicalId": canon_id,
                        "Name": name,
                        "Categories_found": "|".join(sorted(cats)),
                        "Alias_ids": "|".join(alias_ids),
                    }
                )

    with out_path.open("w", encoding="utf-8", newline="") as f:
        fieldnames = ["CanonicalId", "Name", "Categories_found", "Alias_ids"]
        w = csv.DictWriter(f, fieldnames=fieldnames)
        w.writeheader()
        for row in conflicts:
            w.writerow(row)

    print(f"Conflicts found: {len(conflicts)}")
    print(f"Wrote: {out_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


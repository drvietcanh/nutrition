"""
Normalize and canonicalize the unified food catalog CSV for the clinical nutrition app.

Input:
  - DANH-MUC-THUC-PHAM-HOP-NHAT_CLEAN.csv

Outputs:
  - DANH-MUC-THUC-PHAM-CANONICAL.csv
  - food_alias_map.json

Rules implemented (per task):
  1) Canonical foods
     - Group by normalized Name (whitespace-collapsed, Unicode NFC, case-insensitive)
     - Prefer rows with non-empty Code
     - If multiple Codes: keep smallest numeric code
     - Non-canonical Ids are recorded into Alias

  2) Add columns:
     - DisplayName (pretty, for UI)
     - Alias (pipe-separated list of merged variants)
     - FoodGroup (carb/protein/fat/vegetable/fruit/mixed/snack/beverage)

  3) Text normalization:
     - Name: trim, collapse whitespace, Unicode NFC, capitalize words (preserving acronyms)
     - DisplayName: like Name, but attempts to remove technical suffixes (updated, vietxx…)

  4) Validation:
     - No duplicate canonical Name
     - No data loss: every input row either becomes canonical or is referenced in Alias
     - Alias map includes every merged alias Id -> canonical Id
"""

from __future__ import annotations

import argparse
import csv
import json
import re
import sys
import unicodedata
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple


INPUT_DEFAULT = "DANH-MUC-THUC-PHAM-HOP-NHAT_CLEAN.csv"
OUTPUT_CANONICAL_DEFAULT = "DANH-MUC-THUC-PHAM-CANONICAL.csv"
OUTPUT_ALIAS_MAP_DEFAULT = "food_alias_map.json"


ALLOWED_FOOD_GROUPS = {
    "carb",
    "protein",
    "fat",
    "vegetable",
    "fruit",
    "mixed",
    "snack",
    "beverage",
}


@dataclass(frozen=True)
class FoodRow:
    id: str
    code: str
    name: str
    category: str
    raw: Dict[str, str]


def _nfc(s: str) -> str:
    return unicodedata.normalize("NFC", s)


_WS_RE = re.compile(r"\s+")


def normalize_whitespace(s: str) -> str:
    s = _nfc(s)
    s = s.strip()
    s = _WS_RE.sub(" ", s)
    return s


_CODE_FLOAT_RE = re.compile(r"^(\d+)\.0+$")
_COMBINING_MARK_RE = re.compile(r"[\u0300-\u036f]")
_MOJIBAKE_HINT_CHARS = ("Ã", "Â", "Æ", "¦", "¤", "¶", "·", "¸", "º", "»")


def normalize_code(code: str) -> str:
    """
    Codes should be stable string identifiers.
    Some CSV exports may coerce codes into floats like '20080.0' -> normalize to '20080'.
    """
    code = normalize_whitespace(code)
    if not code:
        return ""
    m = _CODE_FLOAT_RE.match(code)
    if m:
        return m.group(1)
    return code


def strip_diacritics(s: str) -> str:
    """
    Remove Vietnamese diacritics for accentless search/slug.
    """
    s = _nfc(s)
    decomposed = unicodedata.normalize("NFD", s)
    without_marks = _COMBINING_MARK_RE.sub("", decomposed)
    return unicodedata.normalize("NFC", without_marks)


def fix_mojibake_if_needed(s: str) -> str:
    """
    Nếu chuỗi có các ký tự mojibake điển hình (Ã, Â, Æ, ...),
    thử sửa bằng cách diễn giải lại như Latin-1 -> UTF-8.
    Idempotent: chuỗi đã đúng sẽ không bị đổi.
    """
    if not s:
        return s
    if not any(ch in s for ch in _MOJIBAKE_HINT_CHARS):
        return s
    try:
        fixed = s.encode("latin1", errors="ignore").decode("utf-8", errors="ignore")
        return fixed if fixed and fixed != s else s
    except Exception:
        return s


def is_acronym_token(token: str) -> bool:
    # Keep tokens like "MSG", "GI", "ABV", "CKD", "Omega-3", "B12", "µg"
    if any(ch.isdigit() for ch in token):
        return True
    letters = [ch for ch in token if ch.isalpha()]
    if letters and all(ch.isupper() for ch in letters):
        return True
    if any(ch in token for ch in ["%", "µ", "°"]):
        return True
    return False


_TOKEN_SPLIT_RE = re.compile(r"(\s+)")


def titleize_name(name: str) -> str:
    """
    Capitalize words while preserving acronyms and tokens with digits.
    Works reasonably for Vietnamese without forcing everything to lowercase.
    """
    name = normalize_whitespace(name)
    parts: List[str] = []
    for part in _TOKEN_SPLIT_RE.split(name):
        if not part or part.isspace():
            parts.append(part)
            continue

        # Preserve punctuation around the token
        leading = re.match(r"^\W+", part)
        trailing = re.search(r"\W+$", part)
        lead = leading.group(0) if leading else ""
        trail = trailing.group(0) if trailing else ""
        core = part[len(lead) : len(part) - len(trail)] if trail else part[len(lead) :]

        if not core:
            parts.append(part)
            continue

        if is_acronym_token(core):
            parts.append(f"{lead}{core}{trail}")
            continue

        # Vietnamese-friendly: capitalize first letter, keep rest lowercase
        first = core[0].upper()
        rest = core[1:].lower() if len(core) > 1 else ""
        parts.append(f"{lead}{first}{rest}{trail}")
    return "".join(parts)


_TECH_SUFFIX_RE = re.compile(
    r"""
    (?:\s*[-_]\s*)?
    (?:
        updated|
        viet\d+|
        veg\d+|
        fr\d+|
        fish\d+|
        meat\d+
    )
    \s*$
    """,
    re.IGNORECASE | re.VERBOSE,
)

_TECH_PAREN_RE = re.compile(
    r"""\s*\((?:updated|viet\d+|veg\d+|fr\d+|fish\d+|meat\d+)[^)]*\)\s*$""",
    re.IGNORECASE,
)

_ENTRY_PAREN_RE = re.compile(r"""\s*\(entry[^)]*\)\s*$""", re.IGNORECASE)


def make_display_name(name: str) -> str:
    dn = titleize_name(name)
    dn = _TECH_PAREN_RE.sub("", dn)
    dn = _ENTRY_PAREN_RE.sub("", dn)
    dn = _TECH_SUFFIX_RE.sub("", dn)
    dn = normalize_whitespace(dn)
    return dn


def name_key(name: str) -> str:
    # Key for grouping: normalized whitespace + Unicode NFC + casefold
    return normalize_whitespace(name).casefold()


def parse_code(code: str) -> Tuple[int, str]:
    """
    Return a sortable representation of code. Prefer numeric ordering.
    Empty code sorts last.
    """
    code = normalize_whitespace(code)
    if not code:
        return (sys.maxsize, "")
    try:
        return (int(code), code)
    except ValueError:
        return (sys.maxsize - 1, code)


def choose_canonical(rows: List[FoodRow]) -> FoodRow:
    with_code = [r for r in rows if normalize_whitespace(r.code)]
    if with_code:
        # pick smallest numeric code; if tie, stable by id
        return sorted(with_code, key=lambda r: (parse_code(r.code), r.id))[0]
    return sorted(rows, key=lambda r: r.id)[0]


def map_food_group(category: str, display_name: str) -> str:
    """
    Map Category -> FoodGroup with safe defaults for categories not listed explicitly.
    """
    cat = normalize_whitespace(category).lower()
    dn = display_name.casefold()

    if cat in ("meat", "seafood", "freshwater"):
        return "protein"
    if cat == "rice-noodles":
        return "carb"
    if cat == "vegetables":
        return "vegetable"
    if cat == "fruits":
        return "fruit"
    if cat == "snacks":
        return "snack"
    if cat == "soups":
        return "mixed"
    if cat in ("beverages", "drinks"):
        return "beverage"

    # Reasonable defaults for remaining categories:
    if cat == "desserts":
        return "snack"
    if cat == "legumes":
        return "protein"
    if cat == "dairy":
        # milk/cheese/yogurt = protein; butter/oils handled below by keyword
        return "protein"
    if cat == "condiments":
        # Oils/fats -> fat; otherwise mixed
        if any(k in dn for k in ["dầu", "mỡ", "lard", "oil", "shortening", "bơ "]):
            return "fat"
        return "mixed"

    # Keyword-based fallback for fat group
    if any(k in dn for k in ["dầu", "mỡ", "shortening", "lard"]):
        return "fat"
    return "mixed"


def read_csv(path: Path) -> List[FoodRow]:
    # Try UTF-8 first; fall back to UTF-8-SIG
    data: List[FoodRow] = []
    last_err: Optional[Exception] = None
    for encoding in ("utf-8", "utf-8-sig"):
        try:
            with path.open("r", encoding=encoding, newline="") as f:
                reader = csv.DictReader(f)
                for row in reader:
                    rid = normalize_whitespace(row.get("Id", ""))
                    code = normalize_code(row.get("Code", ""))
                    name_raw = row.get("Name", "") or ""
                    name = normalize_whitespace(fix_mojibake_if_needed(name_raw))
                    cat = normalize_whitespace(row.get("Category", ""))
                    if not rid or not name:
                        continue
                    data.append(FoodRow(id=rid, code=code, name=name, category=cat, raw=row))
            if data:
                return data
        except Exception as e:
            last_err = e
            data = []
            continue
    raise RuntimeError(f"Failed to read CSV {path}: {last_err}")


def canonicalize(rows: List[FoodRow]) -> Tuple[List[Dict[str, Any]], Dict[str, str]]:
    # Group by Name (normalized key)
    groups: Dict[str, List[FoodRow]] = {}
    for r in rows:
        groups.setdefault(name_key(r.name), []).append(r)

    alias_map: Dict[str, str] = {}
    canonical_rows: List[Dict[str, Any]] = []

    for _, grp in sorted(groups.items(), key=lambda kv: kv[0]):
        canon = choose_canonical(grp)
        canon_name = titleize_name(canon.name)
        display_name = make_display_name(canon.name)
        food_group = map_food_group(canon.category, display_name)
        if food_group not in ALLOWED_FOOD_GROUPS:
            food_group = "mixed"

        aliases: List[str] = []
        for r in sorted(grp, key=lambda x: x.id):
            if r.id == canon.id:
                continue
            # Store both id and name (for auditability)
            aliases.append(f"{r.id}:{titleize_name(r.name)}")
            alias_map[r.id] = canon.id

        canonical_rows.append(
            {
                "CanonicalId": canon.id,
                "Id": canon.id,  # keep Id as the canonical id for app usage
                "Code": canon.code,
                "Name": canon_name,
                "DisplayName": display_name,
                "Category": canon.category,
                "FoodGroup": food_group,
                "Alias": "|".join(aliases),
            }
        )

    # Second pass: ensure no duplicate canonical Name after normalization/titleization
    # If duplicates exist, merge them with the same rules and extend Alias.
    by_final_name: Dict[str, List[Dict[str, Any]]] = {}
    for r in canonical_rows:
        by_final_name.setdefault(name_key(r["Name"]), []).append(r)

    if any(len(v) > 1 for v in by_final_name.values()):
        merged: List[Dict[str, Any]] = []
        for _, entries in sorted(by_final_name.items(), key=lambda kv: kv[0]):
            if len(entries) == 1:
                merged.append(entries[0])
                continue

            # Pick best canonical by Code rule (prefer non-empty code, smallest)
            def _entry_sort_key(e: Dict[str, Any]) -> Tuple[Tuple[int, str], str]:
                return (parse_code(e.get("Code", "")), e.get("Id", ""))

            entries_sorted = sorted(entries, key=_entry_sort_key)
            primary = entries_sorted[0]
            for other in entries_sorted[1:]:
                # Move other canonical id to alias map + alias list
                other_id = other["Id"]
                alias_map[other_id] = primary["Id"]
                other_alias = other.get("Alias", "")
                extra = [f"{other_id}:{other.get('Name','')}"]
                if other_alias:
                    extra.append(other_alias)
                combined = "|".join([x for x in [primary.get("Alias", ""), *extra] if x])
                primary["Alias"] = combined
            merged.append(primary)
        canonical_rows = merged

    # Final validation: uniqueness
    final_names = [name_key(r["Name"]) for r in canonical_rows]
    dups = {k for k in final_names if final_names.count(k) > 1}
    if dups:
        raise RuntimeError(f"Duplicate canonical Name after merge: {sorted(list(dups))[:10]}")

    # Enrich with derived columns for search & UI / AI
    for r in canonical_rows:
        display_name = r.get("DisplayName", "") or r.get("Name", "")
        display_name = normalize_whitespace(display_name)
        accentless = strip_diacritics(display_name)

        # ShortName: max 24 chars, prefer cutting at word boundary
        max_len = 24
        short = display_name
        if len(short) > max_len:
            cut = short.rfind(" ", 0, max_len)
            if cut == -1:
                cut = max_len
            short = short[:cut].rstrip()

        # Extract alias names (drop id prefixes)
        alias_field = r.get("Alias", "") or ""
        alias_names: List[str] = []
        for part in alias_field.split("|"):
            part = part.strip()
            if not part:
                continue
            if ":" in part:
                _, n = part.split(":", 1)
                alias_names.append(n.strip())
            else:
                alias_names.append(part)

        # SearchKeywords: Name + DisplayName + alias names (deduped)
        kw_parts: List[str] = []
        for v in [r.get("Name", ""), display_name] + alias_names:
            v = normalize_whitespace(v)
            if v and v not in kw_parts:
                kw_parts.append(v)
        search_keywords = " | ".join(kw_parts)

        # Slug: kebab-case from DisplayName (accentless)
        slug_src = strip_diacritics(display_name).lower()
        slug = re.sub(r"[^a-z0-9]+", "-", slug_src)
        slug = re.sub(r"-{2,}", "-", slug).strip("-")

        r["AccentlessName"] = accentless
        r["ShortName"] = short
        r["Slug"] = slug
        r["SearchKeywords"] = search_keywords

        # FoodGroupLocked: by default true to prevent accidental changes
        r["FoodGroupLocked"] = "true"

        # Clinical columns (prepared, left empty unless populated from trusted data)
        r.setdefault("GI", "")
        r.setdefault("GL", "")
        r.setdefault("PurineLevel", "")
        r.setdefault("FODMAPLevel", "")
        r.setdefault("ClinicalNotes", "")

    return canonical_rows, alias_map


def validate_no_data_loss(input_rows: List[FoodRow], canonical_rows: List[Dict[str, Any]], alias_map: Dict[str, str]) -> None:
    input_ids = {r.id for r in input_rows}
    canonical_ids = {r["Id"] for r in canonical_rows}
    alias_ids = set(alias_map.keys())

    # Every input id must be either canonical or alias
    missing = input_ids - canonical_ids - alias_ids
    if missing:
        raise RuntimeError(f"Data loss detected. Missing IDs: {sorted(list(missing))[:20]}")

    # Alias must not map canonical id to itself
    bad = [k for k, v in alias_map.items() if k == v]
    if bad:
        raise RuntimeError(f"Invalid alias_map entries (self-mapping): {bad[:20]}")


def write_csv(path: Path, rows: List[Dict[str, Any]]) -> None:
    fieldnames = [
        "Id",
        "CanonicalId",
        "Code",
        "Name",
        "DisplayName",
        "AccentlessName",
        "ShortName",
        "Slug",
        "SearchKeywords",
        "Category",
        "FoodGroup",
        "FoodGroupLocked",
        "Alias",
        "GI",
        "GL",
        "PurineLevel",
        "FODMAPLevel",
        "ClinicalNotes",
    ]
    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        for r in rows:
            writer.writerow({k: r.get(k, "") for k in fieldnames})


def write_json(path: Path, obj: Dict[str, str]) -> None:
    with path.open("w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2, sort_keys=True)
        f.write("\n")


def main(argv: Optional[List[str]] = None) -> int:
    p = argparse.ArgumentParser(description="Normalize and canonicalize food catalog CSV")
    p.add_argument("--input", default=INPUT_DEFAULT, help="Input CSV file path")
    p.add_argument("--output", default=OUTPUT_CANONICAL_DEFAULT, help="Output canonical CSV path")
    p.add_argument("--alias-map", default=OUTPUT_ALIAS_MAP_DEFAULT, help="Output alias map JSON path")
    args = p.parse_args(argv)

    in_path = Path(args.input)
    out_path = Path(args.output)
    alias_path = Path(args.alias_map)

    rows = read_csv(in_path)
    canonical_rows, alias_map = canonicalize(rows)
    validate_no_data_loss(rows, canonical_rows, alias_map)

    write_csv(out_path, canonical_rows)
    write_json(alias_path, alias_map)

    print(f"Input rows: {len(rows)}")
    print(f"Canonical rows: {len(canonical_rows)}")
    print(f"Alias mappings: {len(alias_map)}")
    print(f"Wrote: {out_path}")
    print(f"Wrote: {alias_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


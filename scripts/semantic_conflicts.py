import json
import pandas as pd
from pathlib import Path


def norm_key(s: str) -> str:
    if s is None:
        return ""
    return str(s).strip().lower()


def main():
    canonical_csv = Path("DANH-MUC-THUC-PHAM-CANONICAL.csv")
    source_clean_csv = Path("DANH-MUC-THUC-PHAM-HOP-NHAT_CLEAN.csv")
    alias_map_json = Path("food_alias_map.json")
    out_csv = Path("semantic_conflicts.csv")

    can = pd.read_csv(canonical_csv, dtype=str).fillna("")
    src = pd.read_csv(source_clean_csv, dtype=str).fillna("")
    alias_map = json.loads(alias_map_json.read_text(encoding="utf-8"))

    # build id -> category from source clean (original categories)
    id_to_cat = dict(zip(src["Id"], src["Category"]))

    # -----------------------
    # R1: same DisplayName but FoodGroup different
    # key by accentless+lower if available, else display_name
    key_col = "AccentlessName" if "AccentlessName" in can.columns else "accentless_name"
    dn_col = "DisplayName" if "DisplayName" in can.columns else "display_name"
    fg_col = "FoodGroup" if "FoodGroup" in can.columns else "food_group"
    cid_col = "CanonicalId" if "CanonicalId" in can.columns else "canonical_id"
    cat_col = "Category" if "Category" in can.columns else "category"

    can["_key"] = can[key_col].map(norm_key)
    r1_groups = (
        can.groupby("_key")
        .agg(
            CanonicalIds=(cid_col, lambda x: sorted(set(x))),
            DisplayNames=(dn_col, lambda x: sorted(set(x))),
            FoodGroups=(fg_col, lambda x: sorted(set(map(norm_key, x)))),
        )
        .reset_index()
    )
    r1_conf = r1_groups[r1_groups["FoodGroups"].map(len) > 1].copy()

    # -----------------------
    # R2: same CanonicalId but categories across canonical+alias are "khác bản chất"
    # Build canonical -> alias_ids list from alias_map
    canon_to_alias = {}
    for alias_id, canon_id in alias_map.items():
        canon_to_alias.setdefault(canon_id, []).append(alias_id)

    def get_categories_for_canonical(canon_id: str) -> set:
        cats = set()
        # canonical's own category
        row = can[can[cid_col] == canon_id]
        if not row.empty:
            cats.add(norm_key(row.iloc[0][cat_col]))
        # alias categories from source
        for aid in canon_to_alias.get(canon_id, []):
            cats.add(norm_key(id_to_cat.get(aid, "")))
        # remove empty
        cats = {c for c in cats if c}
        return cats

    # define "khác bản chất" groups (tối thiểu, bạn có thể mở rộng)
    # Rule: nếu set categories chứa đồng thời >=2 nhóm trong những nhóm loại trừ nhau
    mutually_exclusive_sets = [
        {"meat", "vegetables", "fruits"},
        {"meat", "rice-noodles", "vegetables", "fruits"},
        {"drinks", "meat", "vegetables", "fruits", "rice-noodles"},
        {"snacks", "meat"},  # tùy bạn, có thể bỏ nếu thấy quá chặt
    ]

    r2_rows = []
    for canon_id in can[cid_col].unique():
        cats = get_categories_for_canonical(canon_id)
        if not cats:
            continue

        flag = False
        for s in mutually_exclusive_sets:
            inter = cats.intersection(s)
            if len(inter) >= 2:
                flag = True
                break

        if flag:
            row = can[can[cid_col] == canon_id].iloc[0]
            r2_rows.append({
                "CanonicalId": canon_id,
                "DisplayName": row[dn_col],
                "FoodGroups_found": row[fg_col],
                "Categories_found": " | ".join(sorted(cats)),
                "Alias_ids": " | ".join(sorted(canon_to_alias.get(canon_id, []))),
            })

    r2_conf = pd.DataFrame(r2_rows)

    # -----------------------
    # Merge output (R1 + R2)
    out = []
    # from R1
    for _, r in r1_conf.iterrows():
        out.append({
            "Rule": "R1",
            "CanonicalId": " | ".join(r["CanonicalIds"]),
            "DisplayName": " | ".join(r["DisplayNames"]),
            "FoodGroups_found": " | ".join(r["FoodGroups"]),
            "Categories_found": "",
            "Alias_ids": "",
        })
    # from R2
    if not r2_conf.empty:
        r2_conf.insert(0, "Rule", "R2")
        out.extend(r2_conf.to_dict(orient="records"))

    out_df = pd.DataFrame(out, columns=[
        "Rule","CanonicalId","DisplayName","FoodGroups_found","Categories_found","Alias_ids"
    ])

    out_df.to_csv(out_csv, index=False, encoding="utf-8")
    print(f"Written: {out_csv} | rows={len(out_df)}")


if __name__ == "__main__":
    main()


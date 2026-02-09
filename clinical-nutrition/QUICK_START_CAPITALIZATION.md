# Quick Start: Sửa Lỗi Viết Hoa Tiếng Việt

Hướng dẫn nhanh để sửa lỗi viết hoa tiếng Việt trong codebase.

## 3 Bước Nhanh

### 1. Quét và Xem Pattern
```bash
cd clinical-nutrition
python fix-vietnamese-capitalization.py --scan
```

### 2. Tự Động Sửa
```bash
python fix-vietnamese-capitalization.py
```

### 3. Commit
```bash
git add .
git commit -m "Fix Vietnamese capitalization errors"
git push
```

## Khi Phát Hiện Pattern Mới

### Cách 1: Thêm Pattern Cố Định (Khuyến nghị)

1. Mở `fix-vietnamese-capitalization.py`
2. Tìm hàm `fix_file()` → danh sách `replacements`
3. Thêm pattern:
   ```python
   (r'Pattern Mới Cần Sửa', 'pattern mới cần sửa'),
   ```
4. Chạy lại script

### Cách 2: Thêm vào Whitelist (Nếu Cần Giữ Nguyên)

1. Mở `fix-vietnamese-capitalization.py`
2. Tìm `PROPER_NOUNS_WHITELIST`
3. Thêm từ:
   ```python
   'Từ', 'Cần', 'Giữ', 'Nguyên',
   ```

## Kiểm Tra Kết Quả

```bash
# Xem file đã sửa
git status

# Xem thay đổi
git diff

# Test build
npm run build
```

## Troubleshooting

**Q: Script không tìm thấy pattern?**
- Kiểm tra xem có ít nhất một từ tiếng Việt (có dấu) không
- Kiểm tra xem có phải đầu câu không

**Q: Script sửa nhầm?**
- Thêm vào `PROPER_NOUNS_WHITELIST`
- Hoặc thêm exception trong logic

**Q: Cần thêm nhiều pattern?**
- Thêm vào danh sách `replacements` trong hàm `fix_file()`

## Tài Liệu Chi Tiết

- `VIETNAMESE_CAPITALIZATION_FIX.md`: Hướng dẫn chi tiết
- `CAPITALIZATION_PATTERNS.md`: Danh sách pattern đã xử lý

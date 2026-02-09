# Mục lục: Sửa lỗi viết Hoa Tiếng Việt

Tài liệu tổng hợp về hệ thống tự động sửa lỗi viết hoa tiếng Việt.

## 📚 Tài liệu

### 1. [QUICK_START_CAPITALIZATION.md](./QUICK_START_CAPITALIZATION.md)
**Hướng dẫn nhanh** - Bắt đầu ngay trong 3 bước
- Quét pattern
- Tự động sửa
- Commit

### 2. [VIETNAMESE_CAPITALIZATION_FIX.md](./VIETNAMESE_CAPITALIZATION_FIX.md)
**Hướng dẫn chi tiết** - Tài liệu đầy đủ
- Quy tắc viết hoa tiếng Việt
- Cấu trúc script
- Logic tự động phát hiện
- Cách thêm pattern mới
- Troubleshooting

### 3. [CAPITALIZATION_PATTERNS.md](./CAPITALIZATION_PATTERNS.md)
**Danh sách pattern** - Tất cả pattern đã xử lý
- Pattern từ ghép cơ bản
- Pattern phức tạp
- Danh từ riêng (whitelist)

## 🔧 File Script

**File chính**: [`fix-vietnamese-capitalization.py`](./fix-vietnamese-capitalization.py)

### Cấu trúc:
- `PROPER_NOUNS_WHITELIST`: Danh sách từ cần giữ nguyên
- `is_vietnamese_word()`: Kiểm tra từ tiếng Việt
- `is_proper_noun()`: Kiểm tra danh từ riêng
- `auto_detect_capitalization_patterns()`: Tự động phát hiện
- `fix_file()`: Sửa file với pattern cố định

## 🚀 Sử dụng Nhanh

```bash
# 1. Quét pattern (không sửa)
python fix-vietnamese-capitalization.py --scan

# 2. Tự động sửa
python fix-vietnamese-capitalization.py

# 3. Commit
git add . && git commit -m "Fix Vietnamese capitalization"
```

## 📋 Quy Tắc Cơ bản

1. **Chỉ viết hoa đầu câu**: Trong tiếng Việt, chỉ từ đầu câu mới viết hoa
2. **Từ ghép không viết hoa**: Các từ trong cụm từ không viết hoa (trừ đầu câu)
3. **Danh từ riêng giữ nguyên**: Tên riêng, địa danh, tổ chức giữ nguyên

## 🔍 Ví dụ

| ❌ Sai | ✅ Đúng |
|--------|---------|
| `Nhu cầu Dinh dưỡng` | `nhu cầu dinh dưỡng` |
| `Khoảng giá trị Quan trọng` | `khoảng giá trị quan trọng` |
| `Vì sao Nhu cầu Là ước tính` | `Vì sao nhu cầu là ước tính` |

## 🛠️ Thêm Pattern Mới

### Cách 1: Pattern Cố Định thêm vào `replacements` trong `fix_file()`:
```python
(r'Pattern Mới', 'pattern mới'),
```

### Cách 2: Whitelist
Thêm vào `PROPER_NOUNS_WHITELIST`:
```python
'Từ', 'Cần', 'Giữ', 'Nguyên',
```

## ⚠️ Lưu Ý

- Luôn chạy `--scan` trước để xem pattern
- Review thay đổi trước khi commit
- Test build sau khi sửa
- Thêm vào whitelist nếu sửa nhầm

## 📞 Hỗ trợ

Xem chi tiết trong:
- [VIETNAMESE_CAPITALIZATION_FIX.md](./VIETNAMESE_CAPITALIZATION_FIX.md) - Troubleshooting section

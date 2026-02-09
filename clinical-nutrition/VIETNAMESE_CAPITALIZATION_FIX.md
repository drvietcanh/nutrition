# Hướng dẫn Sửa Lỗi Viết Hoa Tiếng Việt

## Tổng quan

Tài liệu này mô tả logic và cách sử dụng script tự động sửa lỗi viết hoa tiếng Việt trong codebase.

## Quy tắc Viết Hoa Tiếng Việt

### Nguyên tắc cơ bản:
1. **Chỉ viết hoa chữ cái đầu câu**: Trong tiếng Việt, chỉ từ đầu câu mới viết hoa chữ cái đầu.
2. **Từ ghép không viết hoa**: Các từ trong cụm từ tiếng Việt không viết hoa chữ cái đầu (trừ đầu câu).
3. **Danh từ riêng giữ nguyên**: Tên riêng, địa danh, tổ chức giữ nguyên viết hoa.

### Ví dụ lỗi thường gặp:
- ❌ "Nhu cầu Dinh dưỡng" → ✅ "nhu cầu dinh dưỡng" (hoặc "Nhu cầu dinh dưỡng" nếu đầu câu)
- ❌ "Khoảng giá trị Quan trọng" → ✅ "khoảng giá trị quan trọng"
- ❌ "Vì sao Nhu cầu Là Ước tính" → ✅ "Vì sao nhu cầu là ước tính"
- ✅ "Việt Nam" (giữ nguyên - danh từ riêng)
- ✅ "American College" (giữ nguyên - tên tổ chức)

## File Script

**File chính**: `fix-vietnamese-capitalization.py`

### Cấu trúc Script

#### 1. Whitelist Danh Từ Riêng
```python
PROPER_NOUNS_WHITELIST = {
    # Tên địa danh Việt Nam
    'Việt', 'Nam', 'Hà', 'Nội', 'Sài', 'Gòn', 'Đà', 'Nẵng', 'Huế', 'Châu', 'Âu',
    # Tên tổ chức, hiệp hội
    'American', 'College', 'Diabetes', 'Association', 'Heart', 'Institute', 'World', 'Health', 'Organization',
    # Thuật ngữ y khoa
    'BMI', 'IBW', 'ABW', 'BSA', 'BMR', 'REE', 'TEE', 'GERD', 'IBS', 'CKD', 'COPD',
    # Tên riêng khác
    'Du', 'Bois', 'St', 'Jeor', 'Harris', 'Benedict',
}
```

#### 2. Hàm Kiểm Tra
- `is_vietnamese_word(word)`: Kiểm tra từ có phải tiếng Việt (có dấu)
- `is_proper_noun(word)`: Kiểm tra từ có phải danh từ riêng

#### 3. Hàm Tự Động Phát Hiện
- `auto_detect_capitalization_patterns(content)`: Tự động tìm pattern viết hoa sai
  - Pattern 1: "Từ1 Từ2" (cả hai viết hoa)
  - Pattern 2: "Từ1 Từ2 Từ3" (nhiều từ viết hoa liên tiếp)

#### 4. Danh Sách Pattern Cố Định
Script có danh sách các pattern cụ thể đã được xác định trước trong hàm `fix_file()`.

## Cách Sử Dụng

### 1. Quét và Xem Pattern (Không Sửa)
```bash
cd clinical-nutrition
python fix-vietnamese-capitalization.py --scan
```

Lệnh này sẽ:
- Quét toàn bộ file `.tsx` và `.ts` trong `app/` và `lib/`
- Hiển thị danh sách các pattern viết hoa sai tìm thấy
- **KHÔNG** sửa file

### 2. Tự Động Sửa Tất Cả Lỗi
```bash
cd clinical-nutrition
python fix-vietnamese-capitalization.py
```

Lệnh này sẽ:
- Tự động phát hiện các pattern mới
- Áp dụng các pattern cố định đã có
- Sửa tất cả file có lỗi
- Hiển thị danh sách file đã sửa

### 3. Sửa File Cụ Thể (Tùy Chỉnh)
Mở file `fix-vietnamese-capitalization.py` và thêm pattern vào danh sách `replacements` trong hàm `fix_file()`:

```python
replacements = [
    # Pattern mới
    (r'Pattern Mới Cần Sửa', 'pattern mới cần sửa'),
    # ... các pattern khác
]
```

## Logic Tự Động Phát Hiện

### Cách Hoạt Động:

1. **Tìm Pattern**: Regex tìm các pattern "Từ1 Từ2" hoặc "Từ1 Từ2 Từ3" trong đó các từ đều viết hoa chữ cái đầu.

2. **Kiểm Tra Context**:
   - Bỏ qua nếu là đầu câu (sau dấu `.`, `!`, `?`, `:`, `\n`)
   - Bỏ qua nếu là danh từ riêng (trong whitelist)
   - Bỏ qua nếu là từ tiếng Anh không có dấu (trừ các từ phổ biến)

3. **Kiểm Tra Tiếng Việt**:
   - Chỉ sửa nếu ít nhất một từ là tiếng Việt (có dấu)
   - Điều này tránh sửa nhầm các cụm từ tiếng Anh

4. **Tạo Replacement**:
   - Giữ nguyên từ đầu
   - Viết thường các từ sau (trừ đầu câu)

## Thêm Pattern Mới

### Cách 1: Thêm vào Danh Sách Cố Định

Mở `fix-vietnamese-capitalization.py`, tìm hàm `fix_file()`, thêm vào danh sách `replacements`:

```python
replacements = [
    # ... các pattern hiện có
    
    # Pattern mới
    (r'Cụm Từ Cần Sửa', 'cụm từ cần sửa'),
]
```

### Cách 2: Thêm vào Whitelist (Nếu Cần Giữ Nguyên)

Thêm vào `PROPER_NOUNS_WHITELIST`:

```python
PROPER_NOUNS_WHITELIST = {
    # ... các từ hiện có
    'Từ', 'Cần', 'Giữ', 'Nguyên',
}
```

## Các Pattern Đã Được Xử Lý

### Pattern Phổ Biến:
- `Nhu cầu Dinh dưỡng` → `nhu cầu dinh dưỡng`
- `Khoảng giá trị Quan trọng` → `khoảng giá trị quan trọng`
- `Vì sao Nhu cầu Là Ước tính` → `Vì sao nhu cầu là ước tính`
- `Tầm quan trọng của Khoảng giá trị` → `Tầm quan trọng của khoảng giá trị`
- `Không phải Con số Đơn lẻ` → `Không phải con số đơn lẻ`

### Pattern Từ Ghép:
- `Lành mạnh`, `Thực hành`, `Phổ biến`, `Hạn chế`
- `Điều chỉnh`, `Cải thiện`, `Cân bằng`, `Cân nặng`
- `Bữa ăn`, `Bữa trưa`, `Bữa tối`, `Bữa sáng`
- `Nấu ăn`, `Ăn uống`, `Thức ăn`

### Pattern Phức Tạp:
- `Ước tính Nhu cầu Dinh dưỡng` → `Ước tính nhu cầu dinh dưỡng`
- `Vì sao Khoảng giá trị Quan trọng Hơn Con số Chính xác` → `Vì sao khoảng giá trị quan trọng hơn con số chính xác`

## Lưu Ý Quan Trọng

### 1. Kiểm Tra Trước Khi Sửa
Luôn chạy `--scan` trước để xem các pattern sẽ được sửa:
```bash
python fix-vietnamese-capitalization.py --scan
```

### 2. Commit Riêng
Sau khi sửa, commit riêng để dễ theo dõi:
```bash
git add .
git commit -m "Fix Vietnamese capitalization errors"
```

### 3. Review Thay Đổi
Kiểm tra các thay đổi để đảm bảo không sửa nhầm:
```bash
git diff
```

### 4. Test Build
Đảm bảo build vẫn hoạt động sau khi sửa:
```bash
npm run build
```

## Xử Lý False Positive

Nếu script sửa nhầm một pattern (false positive):

1. **Thêm vào Whitelist**: Nếu là danh từ riêng, thêm vào `PROPER_NOUNS_WHITELIST`

2. **Thêm Exception**: Thêm logic đặc biệt trong hàm `auto_detect_capitalization_patterns()`:

```python
# Bỏ qua pattern đặc biệt
if word1 == 'Từ' and word2 == 'Đặc Biệt':
    continue
```

3. **Sửa Thủ Công**: Nếu cần, sửa thủ công và thêm vào whitelist để tránh sửa lại.

## Cải Thiện Script

### Thêm Pattern Mới Tự Động
Script tự động phát hiện pattern mới. Nếu muốn thêm pattern cụ thể, thêm vào danh sách `replacements`.

### Cải Thiện Logic Phát Hiện
Sửa hàm `auto_detect_capitalization_patterns()` để:
- Thêm pattern mới
- Cải thiện logic kiểm tra context
- Thêm exception cho các trường hợp đặc biệt

### Mở Rộng Whitelist
Thêm các từ cần giữ nguyên vào `PROPER_NOUNS_WHITELIST` khi phát hiện false positive.

## Ví Dụ Sử Dụng

### Tình Huống 1: Phát Hiện Pattern Mới
```bash
# 1. Quét để xem pattern mới
python fix-vietnamese-capitalization.py --scan

# 2. Xem kết quả, nếu hợp lý thì sửa
python fix-vietnamese-capitalization.py

# 3. Review và commit
git diff
git commit -m "Fix new Vietnamese capitalization patterns"
```

### Tình Huống 2: Sửa Pattern Cụ Thể
1. Mở `fix-vietnamese-capitalization.py`
2. Tìm hàm `fix_file()`
3. Thêm pattern vào `replacements`:
   ```python
   (r'Pattern Cụ Thể', 'pattern cụ thể'),
   ```
4. Chạy script để áp dụng

### Tình Huống 3: Thêm Danh Từ Riêng
1. Mở `fix-vietnamese-capitalization.py`
2. Tìm `PROPER_NOUNS_WHITELIST`
3. Thêm từ cần giữ nguyên:
   ```python
   'Tên', 'Riêng', 'Mới',
   ```

## Troubleshooting

### Script không tìm thấy pattern
- Kiểm tra xem pattern có trong whitelist không
- Kiểm tra xem có ít nhất một từ tiếng Việt không
- Kiểm tra context (có phải đầu câu không)

### Script sửa nhầm
- Thêm vào whitelist
- Thêm exception trong logic phát hiện
- Sửa thủ công và thêm vào whitelist

### Script chạy chậm
- Giảm số lượng file quét (thêm filter)
- Tối ưu regex pattern
- Cache kết quả nếu cần

## Tài Liệu Tham Khảo

- Quy tắc viết hoa tiếng Việt: [Tiêu chuẩn Việt Nam về chính tả]
- Regex Python: https://docs.python.org/3/library/re.html
- Unicode Vietnamese: https://en.wikipedia.org/wiki/Vietnamese_alphabet

## Lịch Sử Cập Nhật

- **2024**: Tạo script tự động phát hiện và sửa lỗi viết hoa
- **2024**: Thêm whitelist cho danh từ riêng
- **2024**: Cải thiện logic chỉ áp dụng cho tiếng Việt
- **2024**: Thêm chế độ scan để xem trước

# So sánh chuẩn dinh dưỡng quốc tế và Việt Nam

## 1. Chuẩn Việt Nam - Thông tư 29/2023/TT-BYT

### Các chỉ tiêu bắt buộc (tối thiểu 5 chỉ tiêu):
- ✅ **Năng lượng** (kcal) - `calories`
- ✅ **Chất đạm** (g) - `protein`
- ✅ **Chất béo** (g) - `fat`
- ✅ **Carbohydrat** (g) - `carbs`
- ✅ **Natri** (mg) - `sodium`

### Các chỉ tiêu bổ sung (theo nhóm sản phẩm):
- ⚠️ **Đường tổng số** (g) - `sugars` - Bắt buộc cho:
  - Nước giải khát
  - Sữa chế biến
  - Thực phẩm có đường
- ⚠️ **Chất béo bão hòa** (g) - `saturatedFat` - Bắt buộc cho:
  - Thực phẩm chiên rán

## 2. Chuẩn quốc tế - USDA FoodData Central / Codex Alimentarius

### Macronutrients (đã có):
- ✅ Calories
- ✅ Protein
- ✅ Carbohydrates
- ✅ Total Fat
- ✅ Fiber
- ✅ Sugars
- ✅ Water

### Vitamins (hiện có):
- ✅ Vitamin A
- ✅ Vitamin C
- ✅ Vitamin B1 (Thiamine)
- ✅ Vitamin B2 (Riboflavin)
- ✅ Vitamin B6 (Pyridoxine)
- ✅ Folate (Vitamin B9)
- ✅ Vitamin B12 (Cobalamin)
- ✅ Vitamin D

### Vitamins (thiếu):
- ❌ **Vitamin E** (Tocopherol) - mg/100g
- ❌ **Vitamin K** (Phylloquinone/Menaquinone) - µg/100g
- ❌ **Niacin** (Vitamin B3) - mg/100g
- ❌ **Pantothenic Acid** (Vitamin B5) - mg/100g
- ❌ **Biotin** (Vitamin B7) - µg/100g
- ❌ **Choline** - mg/100g

### Minerals (hiện có):
- ✅ Sodium
- ✅ Potassium
- ✅ Calcium
- ✅ Iron
- ✅ Phosphorus
- ✅ Magnesium
- ✅ Zinc

### Minerals (thiếu):
- ❌ **Selenium** - µg/100g
- ❌ **Copper** - mg/100g
- ❌ **Manganese** - mg/100g
- ❌ **Iodine** - µg/100g

### Fatty Acids (thiếu):
- ❌ **Trans Fat** - g/100g (quan trọng cho tim mạch)
- ❌ **Monounsaturated Fat** (MUFA) - g/100g
- ❌ **Polyunsaturated Fat** (PUFA) - g/100g
- ❌ **Omega-3 Fatty Acids** - g/100g
- ❌ **Omega-6 Fatty Acids** - g/100g

## 3. Vấn đề cấu trúc dữ liệu hiện tại

### Trùng lặp dữ liệu:
1. **Potassium & Phosphorus:**
   - Xuất hiện trong base `FoodItem` interface
   - Cũng xuất hiện trong `kidney.diseaseSpecificInfo`
   - **Giải pháp:** Chỉ lưu trong `kidney.diseaseSpecificInfo` để tránh trùng lặp

2. **Cholesterol:**
   - Xuất hiện trong base `FoodItem` interface
   - Cũng xuất hiện trong `cardiovascular.diseaseSpecificInfo`
   - **Giải pháp:** Chỉ lưu trong `cardiovascular.diseaseSpecificInfo` để tránh trùng lặp

### Thiếu tính nhất quán:
- Một số mục có đầy đủ vitamin B, một số không
- Một số mục có `water`, một số không
- Một số mục có `sugars`, một số không

## 4. Kế hoạch bổ sung

### Ưu tiên cao (tuân thủ chuẩn VN):
1. Đảm bảo tất cả mục có 5 trường bắt buộc
2. Bổ sung `sugars` cho nước giải khát, sữa chế biến
3. Bổ sung `saturatedFat` cho thực phẩm chiên rán

### Ưu tiên trung bình (chuẩn quốc tế):
1. Bổ sung các vitamin còn thiếu (E, K, B3, B5, B7, Choline)
2. Bổ sung các khoáng chất còn thiếu (Selenium, Copper, Manganese, Iodine)
3. Chuẩn hóa cấu trúc (loại bỏ trùng lặp)

### Ưu tiên thấp (có thể thêm dần):
1. Phân tích chất béo chi tiết (trans fat, MUFA, PUFA, omega-3, omega-6)

## 5. Nguồn dữ liệu tham khảo

- **USDA FoodData Central:** https://fdc.nal.usda.gov/
- **Codex Alimentarius:** https://www.fao.org/fao-who-codexalimentarius/
- **Bộ Nông nghiệp và Phát triển Nông thôn Việt Nam**
- **Viện Dinh dưỡng Quốc gia**
- **Thông tư 29/2023/TT-BYT:** Quy định về ghi nhãn dinh dưỡng

## 6. Lưu ý quan trọng

Theo Thông tư 29/2023/TT-BYT:
- Dữ liệu dinh dưỡng **không được tự ước tính**
- Phải dựa trên kết quả thử nghiệm từ phòng thí nghiệm có đủ năng lực
- Phòng thí nghiệm phải có hệ thống quản lý chất lượng phù hợp
- Toàn bộ dữ liệu phải được lưu hồ sơ để chứng minh tính hợp pháp

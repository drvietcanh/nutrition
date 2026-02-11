# Cấu trúc dữ liệu dinh dưỡng thực phẩm Việt Nam

## Tổng quan

File dữ liệu chính: [`lib/vietnamese-food-extended.ts`](../lib/vietnamese-food-extended.ts)

Database này mở rộng từ `food-db.ts` với thông tin bổ sung về:
- Thành phần dinh dưỡng theo chuẩn quốc tế (USDA, Codex Alimentarius)
- Thông tin bệnh lý đặc biệt (đái tháo đường, gút, bệnh thận, tim mạch)
- Đơn vị đo lường Việt Nam

## Cấu trúc Interface

### ExtendedFoodItem

Interface chính mở rộng từ `FoodItem` (loại bỏ `code`, `potassium`, `phosphorus`, `cholesterol` để tránh trùng lặp).

### Các trường bắt buộc (theo chuẩn VN - Thông tư 29/2023/TT-BYT)

1. **calories** (number) - Năng lượng (kcal/100g)
2. **protein** (number) - Chất đạm (g/100g)
3. **carbs** (number) - Carbohydrat (g/100g)
4. **fat** (number) - Chất béo (g/100g)
5. **sodium** (number) - Natri (mg/100g)

### Các trường tùy chọn - Macronutrients

- **sugars** (number) - Đường tổng số (g/100g) - *Bắt buộc cho nước giải khát, sữa chế biến*
- **fiber** (number) - Chất xơ (g/100g)
- **water** (number) - Nước (g/100g)

### Các trường tùy chọn - Khoáng chất

- **calcium** (number) - Canxi (mg/100g)
- **iron** (number) - Sắt (mg/100g)
- **magnesium** (number) - Magie (mg/100g)
- **zinc** (number) - Kẽm (mg/100g)
- **selenium** (number) - Selen (µg/100g) - *Mới thêm*
- **copper** (number) - Đồng (mg/100g) - *Mới thêm*
- **manganese** (number) - Mangan (mg/100g) - *Mới thêm*
- **iodine** (number) - Iốt (µg/100g) - *Mới thêm*

**Lưu ý:** `potassium` và `phosphorus` chỉ xuất hiện trong `kidney.diseaseSpecificInfo`, không có trong base fields.

### Các trường tùy chọn - Vitamin

- **vitaminA** (number) - Vitamin A (IU hoặc µg/100g)
- **vitaminC** (number) - Vitamin C (mg/100g)
- **vitaminB1** (number) - Thiamine (mg/100g)
- **vitaminB2** (number) - Riboflavin (mg/100g)
- **vitaminB3** (number) - Niacin (mg/100g) - *Mới thêm*
- **vitaminB5** (number) - Pantothenic acid (mg/100g) - *Mới thêm*
- **vitaminB6** (number) - Pyridoxine (mg/100g)
- **vitaminB7** (number) - Biotin (µg/100g) - *Mới thêm*
- **folate** (number) - Folate/Vitamin B9 (µg/100g)
- **vitaminB12** (number) - Cobalamin (µg/100g)
- **vitaminD** (number) - Vitamin D (IU/100g)
- **vitaminE** (number) - Tocopherol (mg/100g) - *Mới thêm*
- **vitaminK** (number) - Phylloquinone/Menaquinone (µg/100g) - *Mới thêm*
- **choline** (number) - Choline (mg/100g) - *Mới thêm*

### Các trường tùy chọn - Phân tích chất béo

- **transFat** (number) - Chất béo chuyển hóa (g/100g) - *Mới thêm*
- **monounsaturatedFat** (number) - Chất béo không bão hòa đơn (g/100g) - *Mới thêm*
- **polyunsaturatedFat** (number) - Chất béo không bão hòa đa (g/100g) - *Mới thêm*
- **omega3FattyAcids** (number) - Axit béo Omega-3 (g/100g) - *Mới thêm*
- **omega6FattyAcids** (number) - Axit béo Omega-6 (g/100g) - *Mới thêm*

**Lưu ý:** `cholesterol` và `saturatedFat` chỉ xuất hiện trong `cardiovascular.diseaseSpecificInfo`, không có trong base fields.

### DiseaseSpecificInfo

Thông tin đặc biệt cho các bệnh lý:

#### diabetes (Đái tháo đường)
```typescript
diabetes?: {
  glycemicIndex?: number;      // GI
  glycemicLoad?: number;         // GL cho khẩu phần thông thường
  carbPerPortion: number;        // g carb trong khẩu phần thông thường
}
```

#### gout (Bệnh gút)
```typescript
gout?: {
  purine: number;                // mg/100g
  purineLevel: 'very-high' | 'high' | 'medium' | 'low';
}
```

#### kidney (Bệnh thận)
```typescript
kidney?: {
  potassium: number;             // mg/100g
  phosphorus: number;            // mg/100g
}
```

#### cardiovascular (Tim mạch)
```typescript
cardiovascular?: {
  cholesterol: number;           // mg/100g
  saturatedFat: number;          // g/100g - *Bắt buộc cho thực phẩm chiên rán*
}
```

### vietnameseUnits

Đơn vị đo lường Việt Nam:
```typescript
vietnameseUnits?: {
  unit: 'bat' | 'thia-canh' | 'thia-ca-phe' | 'dia' | 'to' | 'cai' | 'qua' | 'mieng' | 'bo' | 'goi' | 'o' | 'con' | 'mo' | 'mui' | 'nam' | 'nhanh' | 'tep';
  weight: number;                // grams
  description: string;
}[]
```

## Nguyên tắc thiết kế

### 1. Tránh trùng lặp dữ liệu

- `potassium` và `phosphorus`: Chỉ lưu trong `kidney.diseaseSpecificInfo`
- `cholesterol`: Chỉ lưu trong `cardiovascular.diseaseSpecificInfo`
- `saturatedFat`: Chỉ lưu trong `cardiovascular.diseaseSpecificInfo`

### 2. Tuân thủ chuẩn Việt Nam

Theo Thông tư 29/2023/TT-BYT:
- Tất cả mục phải có 5 trường bắt buộc: calories, protein, carbs, fat, sodium
- `sugars` bắt buộc cho: nước giải khát, sữa chế biến, thực phẩm có đường
- `saturatedFat` bắt buộc cho: thực phẩm chiên rán

### 3. Mở rộng theo chuẩn quốc tế

Các trường mới được thêm để đáp ứng chuẩn USDA FoodData Central và Codex Alimentarius:
- Vitamin E, K, B3, B5, B7, Choline
- Khoáng chất: Selenium, Copper, Manganese, Iodine
- Phân tích chất béo chi tiết

## Nguồn dữ liệu

Theo Thông tư 29/2023/TT-BYT, dữ liệu dinh dưỡng:
- **Không được tự ước tính**
- Phải dựa trên kết quả thử nghiệm từ phòng thí nghiệm có đủ năng lực
- Phòng thí nghiệm phải có hệ thống quản lý chất lượng phù hợp
- Toàn bộ dữ liệu phải được lưu hồ sơ để chứng minh tính hợp pháp

### Nguồn tham khảo

- **USDA FoodData Central:** https://fdc.nal.usda.gov/
- **Codex Alimentarius:** https://www.fao.org/fao-who-codexalimentarius/
- **Bộ Nông nghiệp và Phát triển Nông thôn Việt Nam**
- **Viện Dinh dưỡng Quốc gia**
- **Thông tư 29/2023/TT-BYT:** Quy định về ghi nhãn dinh dưỡng

## Cảnh báo và giới hạn

1. **Dữ liệu chưa đầy đủ:** Nhiều mục chưa có đầy đủ các trường tùy chọn (vitamin, khoáng chất mới thêm)
2. **Cần bổ sung dần:** Các trường mới (vitamin E, K, B3, B5, B7, Choline, selenium, copper, etc.) cần được bổ sung dần khi có nguồn dữ liệu đáng tin cậy
3. **Kiểm tra tính nhất quán:** Sử dụng script validation để kiểm tra tính nhất quán của dữ liệu
4. **Đơn vị đo lường:** Chú ý đơn vị khác nhau (mg, µg, IU, g) khi sử dụng dữ liệu

## Scripts hỗ trợ

1. **validate-nutrition-data.ts** - Kiểm tra tính nhất quán và đầy đủ của dữ liệu
2. **standardize-nutrition-data.ts** - Chuẩn hóa cấu trúc dữ liệu (loại bỏ trùng lặp)

## Ví dụ sử dụng

```typescript
import { extendedFoodDatabase } from './lib/vietnamese-food-extended';

// Tìm thực phẩm
const rice = extendedFoodDatabase.find(item => item.id === 'com-trang');

// Truy cập thông tin dinh dưỡng cơ bản
console.log(rice.calories);      // 130
console.log(rice.protein);       // 2.7

// Truy cập thông tin bệnh lý
console.log(rice.diabetes?.glycemicIndex);        // 73
console.log(rice.kidney?.potassium);              // 30
console.log(rice.cardiovascular?.cholesterol);    // 0
```

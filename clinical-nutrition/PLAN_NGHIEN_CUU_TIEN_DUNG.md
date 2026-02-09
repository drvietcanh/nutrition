# Kế hoạch Nghiên cứu Bổ sung Công cụ Tiện dụng cho Người Việt

## Mục tiêu

Nghiên cứu và phát triển các công cụ tương tác, tiện dụng để người Việt có thể:
- Tra cứu nhanh thành phần thực phẩm theo bệnh
- Tính toán và đánh giá bữa ăn
- Lập thực đơn phù hợp với bệnh lý
- Chuyển đổi đơn vị Việt Nam (bát, thìa, đĩa...)
- So sánh và lựa chọn thực phẩm

## Phân tích hiện trạng

### Các công cụ hiện có:
1. ✅ Malnutrition screening
2. ✅ Energy/protein calculator
3. ✅ Intake vs needs
4. ✅ BMI/body composition
5. ✅ Fluid requirements
6. ✅ Refeeding syndrome risk
7. ✅ Micronutrient assessment
8. ✅ Food database (cơ bản)
9. ✅ Meal planner (cơ bản)

### Dữ liệu đã có:
- ✅ Bảng GI/GL cho thực phẩm Việt Nam (đái tháo đường)
- ✅ Bảng purin cho thực phẩm Việt Nam (bệnh gút)
- ✅ Bảng kali/phốt pho cho thực phẩm Việt Nam (bệnh thận)
- ✅ Bảng natri cho thực phẩm Việt Nam (tăng huyết áp)
- ✅ Bảng cholesterol/chất béo bão hòa (bệnh tim mạch)

## Kế hoạch Nghiên cứu và Phát triển

### Phase 1: Công cụ Tra cứu Nhanh (Quick Lookup Tools)

#### 1.1. Tra cứu Thành phần Thực phẩm theo Bệnh

**Mục đích**: Người dùng có thể tra cứu nhanh thành phần dinh dưỡng của thực phẩm theo từng bệnh.

**Tính năng**:
- Tìm kiếm thực phẩm (có autocomplete)
- Hiển thị thông tin theo bệnh:
  - Đái tháo đường: GI, GL, carbohydrate
  - Bệnh gút: Hàm lượng purin, phân loại
  - Bệnh thận: Kali, phốt pho
  - Tăng huyết áp: Natri
  - Tim mạch: Cholesterol, chất béo bão hòa
- Hiển thị màu sắc phân loại (đỏ/vàng/xanh)
- Gợi ý thực phẩm thay thế

**File đề xuất**: `app/tools/food-lookup-by-disease/page.tsx`

**Dữ liệu cần**:
- Database thực phẩm Việt Nam với đầy đủ thành phần
- Phân loại theo bệnh

**Ưu tiên**: Cao

---

#### 1.2. Tra cứu Món Ăn Việt Nam

**Mục đích**: Tra cứu thành phần dinh dưỡng của các món ăn Việt Nam phổ biến.

**Tính năng**:
- Tìm kiếm món ăn (phở, bún, cơm, canh chua...)
- Hiển thị thành phần theo khẩu phần thực tế
- Phân loại theo bệnh (có phù hợp không?)
- Gợi ý cách điều chỉnh để phù hợp với bệnh

**File đề xuất**: `app/tools/vietnamese-dish-lookup/page.tsx`

**Dữ liệu cần**:
- Database món ăn Việt Nam
- Thành phần dinh dưỡng của từng món

**Ưu tiên**: Cao

---

### Phase 2: Công cụ Tính toán (Calculation Tools)

#### 2.1. Tính toán GL cho Bữa Ăn (Đái tháo đường)

**Mục đích**: Tính tổng GL của một bữa ăn để đánh giá ảnh hưởng đến đường huyết.

**Tính năng**:
- Chọn thực phẩm từ danh sách
- Nhập khẩu phần (bát, thìa, đĩa...)
- Tự động tính GL tổng
- Hiển thị cảnh báo nếu GL quá cao
- Gợi ý điều chỉnh để giảm GL

**File đề xuất**: `app/tools/gl-calculator/page.tsx`

**Công thức**: GL = (GI × lượng carb trong khẩu phần) ÷ 100

**Ưu tiên**: Cao

---

#### 2.2. Tính toán Purin trong Bữa Ăn (Bệnh gút)

**Mục đích**: Tính tổng lượng purin trong bữa ăn để tránh vượt quá ngưỡng.

**Tính năng**:
- Chọn thực phẩm từ danh sách
- Nhập khẩu phần
- Tự động tính tổng purin
- Phân loại: Rất cao/Cao/Trung bình/Thấp
- Cảnh báo nếu vượt ngưỡng
- Gợi ý thực phẩm thay thế

**File đề xuất**: `app/tools/purine-calculator/page.tsx`

**Ưu tiên**: Cao

---

#### 2.3. Tính toán Kali/Phốt pho (Bệnh thận)

**Mục đích**: Tính tổng kali và phốt pho trong bữa ăn cho người bệnh thận.

**Tính năng**:
- Chọn thực phẩm từ danh sách
- Nhập khẩu phần
- Tự động tính tổng kali và phốt pho
- So sánh với nhu cầu (theo giai đoạn CKD)
- Cảnh báo nếu vượt ngưỡng
- Gợi ý cách giảm (luộc bỏ nước, ngâm...)

**File đề xuất**: `app/tools/kidney-minerals-calculator/page.tsx`

**Ưu tiên**: Trung bình

---

#### 2.4. Tính toán Natri trong Bữa Ăn (Tăng huyết áp)

**Mục đích**: Tính tổng natri trong bữa ăn để kiểm soát huyết áp.

**Tính năng**:
- Chọn thực phẩm từ danh sách
- Nhập khẩu phần
- Tự động tính tổng natri
- So sánh với khuyến nghị (< 3g muối/ngày)
- Cảnh báo nếu vượt ngưỡng
- Gợi ý cách giảm muối

**File đề xuất**: `app/tools/sodium-calculator/page.tsx`

**Ưu tiên**: Cao

---

#### 2.5. Tính toán Cholesterol/Chất béo Bão hòa (Tim mạch)

**Mục đích**: Tính tổng cholesterol và chất béo bão hòa trong bữa ăn.

**Tính năng**:
- Chọn thực phẩm từ danh sách
- Nhập khẩu phần
- Tự động tính tổng cholesterol và chất béo bão hòa
- So sánh với khuyến nghị
- Cảnh báo nếu vượt ngưỡng
- Gợi ý thực phẩm thay thế

**File đề xuất**: `app/tools/cholesterol-calculator/page.tsx`

**Ưu tiên**: Trung bình

---

### Phase 3: Công cụ Đánh giá Bữa Ăn (Meal Assessment Tools)

#### 3.1. Đánh giá Bữa Ăn theo Bệnh

**Mục đích**: Đánh giá tổng thể một bữa ăn có phù hợp với bệnh lý không.

**Tính năng**:
- Nhập các món ăn trong bữa
- Chọn bệnh lý (đái tháo đường, gút, thận, tăng huyết áp, tim mạch)
- Tự động đánh giá:
  - Điểm số phù hợp (0-100)
  - Các thành phần vượt ngưỡng
  - Các thành phần thiếu
- Gợi ý cải thiện
- So sánh với khuyến nghị

**File đề xuất**: `app/tools/meal-assessment/page.tsx`

**Ưu tiên**: Cao

---

#### 3.2. Đánh giá Thực đơn Một Ngày

**Mục đích**: Đánh giá tổng thể thực đơn một ngày (3 bữa chính + bữa phụ).

**Tính năng**:
- Nhập thực đơn cả ngày
- Chọn bệnh lý
- Tự động đánh giá:
  - Tổng năng lượng, đạm, carb, chất béo
  - Các thành phần đặc biệt (GI/GL, purin, kali, natri...)
  - Phân bổ theo bữa
- Gợi ý điều chỉnh
- Xuất báo cáo

**File đề xuất**: `app/tools/daily-menu-assessment/page.tsx`

**Ưu tiên**: Trung bình

---

### Phase 4: Công cụ Lập Thực đơn (Meal Planning Tools)

#### 4.1. Lập Thực đơn theo Bệnh

**Mục đích**: Tự động gợi ý thực đơn phù hợp với bệnh lý.

**Tính năng**:
- Chọn bệnh lý
- Nhập nhu cầu (năng lượng, đạm...)
- Nhập sở thích/thực phẩm không thích
- Tự động gợi ý thực đơn:
  - 3 bữa chính + bữa phụ
  - Đảm bảo đủ dinh dưỡng
  - Phù hợp với bệnh lý
- Cho phép điều chỉnh
- Xuất thực đơn (PDF/ảnh)

**File đề xuất**: `app/tools/disease-specific-meal-planner/page.tsx`

**Ưu tiên**: Cao

---

#### 4.2. Lập Thực đơn Tuần

**Mục đích**: Lập thực đơn cho cả tuần, đảm bảo đa dạng.

**Tính năng**:
- Chọn bệnh lý
- Nhập nhu cầu
- Tự động gợi ý thực đơn 7 ngày
- Đảm bảo đa dạng, không lặp lại
- Phù hợp với bệnh lý
- Cho phép điều chỉnh từng ngày
- Xuất thực đơn tuần

**File đề xuất**: `app/tools/weekly-meal-planner/page.tsx`

**Ưu tiên**: Trung bình

---

### Phase 5: Công cụ Hỗ trợ (Utility Tools)

#### 5.1. Chuyển đổi Đơn vị Việt Nam

**Mục đích**: Chuyển đổi giữa các đơn vị Việt Nam (bát, thìa, đĩa...) và gram.

**Tính năng**:
- Chọn thực phẩm
- Chọn đơn vị nguồn (bát, thìa canh, thìa cà phê, đĩa, tô...)
- Nhập số lượng
- Tự động chuyển đổi sang gram
- Hiển thị khẩu phần tương đương

**File đề xuất**: `app/tools/unit-converter/page.tsx`

**Dữ liệu cần**:
- Bảng chuyển đổi đơn vị Việt Nam:
  - 1 bát cơm = ~150g
  - 1 thìa canh = ~15ml (nước mắm, dầu...)
  - 1 thìa cà phê = ~5ml
  - 1 đĩa bánh cuốn = ~100g
  - 1 tô phở = ~200-250g

**Ưu tiên**: Cao

---

#### 5.2. So sánh Thực phẩm

**Mục đích**: So sánh 2-3 thực phẩm về thành phần dinh dưỡng.

**Tính năng**:
- Chọn 2-3 thực phẩm
- Chọn bệnh lý (để so sánh thành phần liên quan)
- Hiển thị bảng so sánh:
  - Thành phần dinh dưỡng
  - Thành phần đặc biệt (GI, purin, kali...)
  - Phân loại (tốt/trung bình/xấu)
- Gợi ý lựa chọn tốt hơn

**File đề xuất**: `app/tools/food-comparison/page.tsx`

**Ưu tiên**: Trung bình

---

#### 5.3. Tìm Thực phẩm Thay thế

**Mục đích**: Tìm thực phẩm thay thế phù hợp hơn với bệnh lý.

**Tính năng**:
- Nhập thực phẩm hiện tại
- Chọn bệnh lý
- Tự động gợi ý thực phẩm thay thế:
  - Cùng nhóm (thịt, cá, rau...)
  - Tốt hơn về thành phần liên quan
  - Dễ tìm ở Việt Nam
- Hiển thị so sánh

**File đề xuất**: `app/tools/food-substitution/page.tsx`

**Ưu tiên**: Trung bình

---

### Phase 6: Công cụ Tích hợp (Integration Tools)

#### 6.1. Tra cứu Nhanh từ Bài viết

**Mục đích**: Tích hợp tra cứu nhanh trực tiếp trong các bài viết về bệnh.

**Tính năng**:
- Widget tra cứu nhỏ trong bài viết
- Click vào tên thực phẩm → hiển thị thông tin nhanh
- Không cần chuyển trang

**File đề xuất**: Component `app/components/QuickFoodLookup.tsx`

**Ưu tiên**: Thấp

---

#### 6.2. Lưu và Quản lý Thực đơn

**Mục đích**: Cho phép người dùng lưu thực đơn yêu thích, tạo thư viện.

**Tính năng**:
- Lưu thực đơn đã tạo
- Đặt tên, ghi chú
- Phân loại theo bệnh
- Chia sẻ (nếu có tài khoản)
- Tải lại và chỉnh sửa

**File đề xuất**: `app/tools/saved-menus/page.tsx`

**Ưu tiên**: Thấp

---

## Cấu trúc Dữ liệu Cần Xây dựng

### 1. Database Thực phẩm Việt Nam

**File**: `app/lib/data/vietnamese-foods.ts`

```typescript
export interface VietnameseFood {
  id: string;
  name: string;
  vietnameseName: string;
  category: 'grain' | 'meat' | 'fish' | 'vegetable' | 'fruit' | 'dairy' | 'other';
  
  // Basic nutrition (per 100g)
  calories: number;
  protein: number;
  carb: number;
  fat: number;
  fiber: number;
  
  // Disease-specific
  diabetes?: {
    glycemicIndex?: number;
    glycemicLoad?: number; // for common portion
    carbPerPortion: number;
  };
  
  gout?: {
    purine: number; // mg/100g
    purineLevel: 'very-high' | 'high' | 'medium' | 'low';
  };
  
  kidney?: {
    potassium: number; // mg/100g
    phosphorus: number; // mg/100g
  };
  
  hypertension?: {
    sodium: number; // mg/100g
  };
  
  cardiovascular?: {
    cholesterol: number; // mg/100g
    saturatedFat: number; // g/100g
  };
  
  // Vietnamese units
  portions: {
    unit: 'bat' | 'thia-canh' | 'thia-ca-phe' | 'dia' | 'to' | 'cai' | 'qua';
    weight: number; // grams
    description: string;
  }[];
  
  notes?: string;
}
```

### 2. Database Món Ăn Việt Nam

**File**: `app/lib/data/vietnamese-dishes.ts`

```typescript
export interface VietnameseDish {
  id: string;
  name: string;
  category: 'pho-noodles' | 'rice-dishes' | 'soups' | 'stir-fried' | 'steamed' | 'other';
  
  // Ingredients (simplified)
  ingredients: {
    foodId: string;
    amount: number; // grams
  }[];
  
  // Nutrition (per common portion)
  nutrition: {
    calories: number;
    protein: number;
    carb: number;
    fat: number;
  };
  
  // Disease-specific assessment
  diseaseAssessment: {
    diabetes?: 'good' | 'moderate' | 'poor';
    gout?: 'good' | 'moderate' | 'poor';
    kidney?: 'good' | 'moderate' | 'poor';
    hypertension?: 'good' | 'moderate' | 'poor';
    cardiovascular?: 'good' | 'moderate' | 'poor';
  };
  
  // Common portion
  commonPortion: {
    description: string;
    weight: number; // grams
  };
  
  // Tips for adjustment
  adjustmentTips?: {
    [disease: string]: string[];
  };
}
```

### 3. Conversion Tables

**File**: `app/lib/data/unit-conversions.ts`

```typescript
export interface UnitConversion {
  foodCategory: string;
  units: {
    [unit: string]: {
      toGrams: number;
      description: string;
    };
  };
}
```

## Thứ tự Ưu tiên Thực hiện

### Sprint 1 (Ưu tiên cao - 2-3 tuần):
1. ✅ Chuyển đổi đơn vị Việt Nam
2. ✅ Tra cứu thành phần thực phẩm theo bệnh
3. ✅ Tính toán GL cho bữa ăn (đái tháo đường)
4. ✅ Tính toán natri trong bữa ăn (tăng huyết áp)

### Sprint 2 (Ưu tiên cao - 2-3 tuần):
1. ✅ Tính toán purin trong bữa ăn (bệnh gút)
2. ✅ Đánh giá bữa ăn theo bệnh
3. ✅ Lập thực đơn theo bệnh
4. ✅ Tra cứu món ăn Việt Nam

### Sprint 3 (Ưu tiên trung bình - 2-3 tuần):
1. ✅ Tính toán kali/phốt pho (bệnh thận)
2. ✅ Tính toán cholesterol/chất béo bão hòa (tim mạch)
3. ✅ Đánh giá thực đơn một ngày
4. ✅ So sánh thực phẩm

### Sprint 4 (Ưu tiên thấp - 1-2 tuần):
1. ✅ Lập thực đơn tuần
2. ✅ Tìm thực phẩm thay thế
3. ✅ Tra cứu nhanh từ bài viết
4. ✅ Lưu và quản lý thực đơn

## Nguyên tắc Thiết kế

1. **Đơn giản, dễ dùng**: Giao diện trực quan, không phức tạp
2. **Tiếng Việt hoàn toàn**: Tất cả giao diện và dữ liệu bằng tiếng Việt
3. **Đơn vị Việt Nam**: Sử dụng bát, thìa, đĩa... thay vì chỉ gram
4. **Thực phẩm Việt Nam**: Tập trung vào thực phẩm và món ăn phổ biến ở Việt Nam
5. **Mobile-friendly**: Responsive, dùng được trên điện thoại
6. **Offline-capable**: Có thể cache dữ liệu để dùng offline (PWA)
7. **Giáo dục**: Mỗi tool có giải thích, không chỉ tính toán

## Nghiên cứu Cần Thực hiện

### 1. Nghiên cứu Đơn vị Việt Nam
- Khảo sát kích thước bát, thìa phổ biến ở Việt Nam
- Đo lường thực tế khẩu phần các món ăn
- Tạo bảng chuyển đổi chính xác

### 2. Nghiên cứu Thực phẩm Việt Nam
- Thu thập dữ liệu dinh dưỡng từ:
  - Bảng thành phần thực phẩm Việt Nam (Bộ Y tế)
  - Nghiên cứu khoa học
  - Phân tích thực phẩm
- Xác minh độ chính xác
- Bổ sung thực phẩm còn thiếu

### 3. Nghiên cứu Món Ăn Việt Nam
- Phân tích thành phần các món ăn phổ biến
- Tính toán dinh dưỡng dựa trên công thức
- Đánh giá phù hợp với từng bệnh

### 4. Nghiên cứu Người Dùng
- Khảo sát nhu cầu người dùng
- Test usability
- Thu thập feedback
- Cải thiện dựa trên phản hồi

## Kết quả Mong đợi

Sau khi hoàn thành, người dùng Việt Nam sẽ có:
- ✅ Công cụ tra cứu nhanh, tiện lợi
- ✅ Tính toán chính xác thành phần dinh dưỡng
- ✅ Đánh giá và cải thiện bữa ăn
- ✅ Lập thực đơn phù hợp với bệnh lý
- ✅ Hiểu rõ hơn về dinh dưỡng và bệnh tật

## Timeline Tổng thể

- **Tháng 1-2**: Sprint 1 (Công cụ cơ bản)
- **Tháng 3-4**: Sprint 2 (Công cụ tính toán và đánh giá)
- **Tháng 5-6**: Sprint 3 (Công cụ nâng cao)
- **Tháng 7**: Sprint 4 (Công cụ bổ sung) + Testing & Refinement

**Tổng thời gian**: 6-7 tháng

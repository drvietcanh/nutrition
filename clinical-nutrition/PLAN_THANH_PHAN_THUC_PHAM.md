# Kế hoạch Bổ sung Thành phần Thực phẩm cho Bệnh Đặc biệt

## Mục tiêu

Bổ sung thông tin chi tiết về thành phần thực phẩm (GI, GL, carbohydrate, purin, kali, phốt pho, natri, cholesterol...) cho các bệnh mạn tính, với trọng tâm là thực phẩm Việt Nam.

## Phân tích hiện trạng

### Các bài viết hiện có:

1. **Đái tháo đường** (`diabetes-nutrition/page.tsx`)
   - ✅ Đã có: Bảng carbohydrate trong món ăn Việt Nam
   - ✅ Đã có: Giải thích GI và GL
   - ❌ Thiếu: Bảng GI/GL chi tiết cho từng thực phẩm Việt Nam
   - ❌ Thiếu: Bảng GL cho các món ăn phổ biến

2. **Bệnh gút** (`dinh-duong-trong-benh-gut-va-tang-acid-uric/page.tsx`)
   - ✅ Đã có: Liệt kê thực phẩm có purin cao/thấp
   - ❌ Thiếu: Bảng hàm lượng purin chi tiết (mg/100g) cho thực phẩm Việt Nam
   - ❌ Thiếu: Phân loại rõ ràng: rất cao, cao, trung bình, thấp

3. **Bệnh thận** (`ckd-nutrition/page.tsx`)
   - ❌ Cần kiểm tra và bổ sung: Bảng kali, phốt pho, natri, protein

4. **Tăng huyết áp** (`dinh-duong-tang-huyet-ap/page.tsx`)
   - ✅ Đã có: Hướng dẫn giảm muối
   - ❌ Thiếu: Bảng hàm lượng natri trong thực phẩm Việt Nam

5. **Bệnh tim mạch** (`cardiovascular-disease-nutrition/`)
   - ❌ Cần kiểm tra và bổ sung: Bảng cholesterol, chất béo bão hòa

## Kế hoạch thực hiện

### Phase 1: Bổ sung cho Đái tháo đường (Ưu tiên cao)

#### 1.1. Bảng GI/GL chi tiết cho thực phẩm Việt Nam

**File**: `app/knowledge/diabetes-nutrition/page.tsx`

**Nội dung cần bổ sung**:

1. **Bảng GI cho thực phẩm tinh bột Việt Nam**:
   - Gạo trắng: GI ~73 (cao)
   - Gạo lứt: GI ~55 (trung bình)
   - Bánh mì trắng: GI ~75 (cao)
   - Bánh mì nguyên cám: GI ~53 (trung bình)
   - Khoai lang: GI ~54 (trung bình)
   - Khoai tây: GI ~78 (cao)
   - Bún: GI ~53 (trung bình)
   - Phở: GI ~40-50 (trung bình)
   - Bánh cuốn: GI ~50 (trung bình)

2. **Bảng GL cho các món ăn Việt Nam**:
   - Cơm trắng (1 bát): GL ~33 (cao)
   - Cơm gạo lứt (1 bát): GL ~25 (trung bình)
   - Phở (1 tô): GL ~9-11 (thấp-trung bình)
   - Bún bò (1 tô): GL ~13 (trung bình)
   - Bánh mì (1 ổ): GL ~15 (trung bình)

3. **Bảng trái cây Việt Nam theo GI**:
   - GI thấp: Táo, ổi, cam, bưởi
   - GI trung bình: Xoài, chuối chín vừa, đu đủ
   - GI cao: Chuối chín nẫu, dưa hấu, mít

**Vị trí thêm**: Sau phần "GI & GL – Hiểu đúng để dùng đúng", trước phần "Chất xơ"

#### 1.2. Hướng dẫn sử dụng GI/GL trong thực tế

**Nội dung**:
- Cách kết hợp thực phẩm để giảm GL tổng thể
- Ví dụ: Ăn cơm với nhiều rau và đạm → GL thấp hơn
- Mẹo: Thứ tự ăn (rau trước, cơm sau) ảnh hưởng đến đường huyết

### Phase 2: Bổ sung cho Bệnh gút (Ưu tiên cao)

#### 2.1. Bảng hàm lượng Purin chi tiết

**File**: `app/knowledge/dinh-duong-trong-benh-gut-va-tang-acid-uric/page.tsx`

**Nội dung cần bổ sung**:

1. **Bảng phân loại theo hàm lượng purin** (mg/100g):

   **Rất cao (>200mg/100g) - Nên tránh hoàn toàn**:
   - Nội tạng: Gan lợn (~300mg), thận lợn (~210mg), tim lợn (~180mg)
   - Cá cơm khô (~400mg), cá mòi (~210mg)
   - Nước dùng thịt đậm đặc

   **Cao (150-200mg/100g) - Hạn chế nghiêm ngặt**:
   - Thịt bò (~160mg), thịt lợn nạc (~150mg)
   - Cá thu (~180mg), cá hồi (~170mg)
   - Tôm (~150mg), cua (~150mg)

   **Trung bình (50-150mg/100g) - Ăn vừa phải**:
   - Thịt gà (~140mg), thịt vịt (~138mg)
   - Cá trắng (cá lóc, cá rô): ~100-120mg
   - Đậu phụ (~50mg), đậu các loại (~50-100mg)

   **Thấp (<50mg/100g) - Ăn tự do**:
   - Hầu hết rau củ quả
   - Sữa, sữa chua
   - Trứng
   - Ngũ cốc

2. **Bảng món ăn Việt Nam theo hàm lượng purin**:
   - Canh xương: Rất cao (nước dùng đậm đặc)
   - Thịt kho tàu: Cao (thịt lợn + nước dùng)
   - Cá kho: Trung bình-cao (tùy loại cá)
   - Canh chua cá: Trung bình (nếu dùng cá trắng)
   - Đậu phụ sốt cà chua: Thấp-trung bình

**Vị trí thêm**: Sau phần "Nguyên tắc Dinh dưỡng", thêm section mới "Bảng Hàm lượng Purin trong Thực phẩm Việt Nam"

#### 2.2. Hướng dẫn thực tế

**Nội dung**:
- Cách chế biến để giảm purin (luộc, bỏ nước luộc)
- Thực đơn mẫu cho người bị gút
- Mẹo: Uống nhiều nước khi ăn thực phẩm có purin trung bình

### Phase 3: Bổ sung cho Bệnh thận (Ưu tiên trung bình)

#### 3.1. Bảng Kali, Phốt pho, Natri

**File**: `app/knowledge/ckd-nutrition/page.tsx` (cần kiểm tra nội dung hiện có)

**Nội dung cần bổ sung**:

1. **Bảng Kali (mg/100g) - Quan trọng cho bệnh thận**:

   **Rất cao (>300mg/100g) - Hạn chế nghiêm ngặt**:
   - Chuối (~358mg), đu đủ (~182mg nhưng ăn nhiều)
   - Khoai tây (~421mg), khoai lang (~337mg)
   - Rau muống (~100mg nhưng ăn nhiều), rau ngót (~457mg)
   - Đậu các loại (~400-600mg)
   - Cà chua (~237mg)

   **Cao (200-300mg/100g) - Hạn chế**:
   - Cam (~181mg), bưởi (~216mg)
   - Cà rốt (~320mg)
   - Một số loại cá

   **Trung bình (100-200mg/100g) - Ăn vừa phải**:
   - Thịt, cá (khoảng 150-200mg)
   - Gạo, bánh mì

   **Thấp (<100mg/100g) - Ăn tự do**:
   - Bắp cải, dưa chuột
   - Táo, lê
   - Gạo trắng

2. **Bảng Phốt pho (mg/100g)**:

   **Rất cao (>300mg/100g) - Hạn chế nghiêm ngặt**:
   - Sữa, sữa chua (~100-200mg nhưng uống nhiều)
   - Đậu các loại (~400-600mg)
   - Hạt, ngũ cốc nguyên hạt
   - Cá nhỏ ăn cả xương

   **Cao (200-300mg/100g) - Hạn chế**:
   - Thịt, cá (~200-250mg)
   - Trứng

   **Thấp (<100mg/100g) - Ăn tự do**:
   - Rau củ quả (hầu hết)
   - Gạo trắng

3. **Bảng Natri** (đã có trong bài tăng huyết áp, có thể tham khảo)

**Vị trí thêm**: Thêm section mới "Thành phần Thực phẩm Quan trọng" sau phần nguyên tắc

### Phase 4: Bổ sung cho Tăng huyết áp (Ưu tiên trung bình)

#### 4.1. Bảng Natri chi tiết

**File**: `app/knowledge/dinh-duong-tang-huyet-ap/page.tsx`

**Nội dung cần bổ sung**:

1. **Bảng Natri (mg/100g) trong thực phẩm Việt Nam**:

   **Rất cao (>1000mg/100g) - Tránh hoàn toàn**:
   - Nước mắm (~8000mg/100ml)
   - Nước tương (~6000mg/100ml)
   - Mì tôm gói (~1500-2000mg/gói)
   - Dưa muối, cà muối (~1000-1500mg)
   - Thịt nguội, xúc xích (~1000-1500mg)

   **Cao (500-1000mg/100g) - Hạn chế nghiêm ngặt**:
   - Đồ hộp (~500-800mg)
   - Bánh mì (~400-600mg)
   - Phô mai (~600-800mg)

   **Trung bình (100-500mg/100g) - Ăn vừa phải**:
   - Thịt, cá tươi (~100-200mg)
   - Trứng (~140mg)
   - Sữa (~50mg nhưng uống nhiều)

   **Thấp (<100mg/100g) - Ăn tự do**:
   - Hầu hết rau củ quả tươi
   - Gạo, ngũ cốc chưa chế biến
   - Trái cây tươi

2. **Bảng món ăn Việt Nam theo hàm lượng natri**:
   - Canh chua cá: Trung bình-cao (nếu nấu mặn)
   - Thịt kho tàu: Cao (nhiều nước mắm, muối)
   - Cá hấp: Thấp (nếu không chấm nhiều nước mắm)
   - Rau luộc: Thấp (nếu không nêm muối)

**Vị trí thêm**: Sau phần "Cách Giảm Muối trong Ăn uống", thêm section "Bảng Hàm lượng Natri trong Thực phẩm Việt Nam"

### Phase 5: Bổ sung cho Bệnh tim mạch (Ưu tiên thấp)

#### 5.1. Bảng Cholesterol và Chất béo

**File**: `app/knowledge/cardiovascular-disease-nutrition/` (cần kiểm tra)

**Nội dung cần bổ sung**:

1. **Bảng Cholesterol (mg/100g)**:
   - Nội tạng: Rất cao (300-500mg)
   - Trứng: Cao (~370mg/lòng đỏ)
   - Tôm, cua: Trung bình (~150-200mg)
   - Thịt mỡ: Cao
   - Thịt nạc: Thấp-trung bình

2. **Bảng Chất béo bão hòa**:
   - Mỡ động vật: Rất cao
   - Dầu dừa: Cao
   - Thịt mỡ: Cao
   - Dầu thực vật: Thấp

## Cấu trúc dữ liệu đề xuất

### Tạo file data chung cho thành phần thực phẩm

**File mới**: `app/knowledge/shared-data/food-composition.ts`

```typescript
export interface FoodComposition {
  name: string;
  vietnameseName: string;
  portion: string;
  // Đái tháo đường
  carbohydrate?: number; // g
  glycemicIndex?: number;
  glycemicLoad?: number;
  fiber?: number; // g
  // Gút
  purine?: number; // mg/100g
  purineLevel?: 'very-high' | 'high' | 'medium' | 'low';
  // Bệnh thận
  potassium?: number; // mg/100g
  phosphorus?: number; // mg/100g
  sodium?: number; // mg/100g
  protein?: number; // g
  // Tim mạch
  cholesterol?: number; // mg/100g
  saturatedFat?: number; // g
  // Ghi chú
  notes?: string;
}

export const vietnameseFoods: FoodComposition[] = [
  // ... dữ liệu thực phẩm
];
```

## Thứ tự ưu tiên thực hiện

1. **Ưu tiên cao**: 
   - Phase 1: Bổ sung GI/GL chi tiết cho đái tháo đường
   - Phase 2: Bổ sung bảng purin cho bệnh gút

2. **Ưu tiên trung bình**:
   - Phase 3: Bổ sung kali, phốt pho cho bệnh thận
   - Phase 4: Bổ sung bảng natri chi tiết cho tăng huyết áp

3. **Ưu tiên thấp**:
   - Phase 5: Bổ sung cholesterol, chất béo cho tim mạch

## Nguyên tắc thiết kế

1. **Dễ hiểu**: Sử dụng phân loại rõ ràng (rất cao, cao, trung bình, thấp) thay vì chỉ số
2. **Thực tế Việt Nam**: Tập trung vào thực phẩm và món ăn phổ biến ở Việt Nam
3. **Có ví dụ**: Mỗi bảng nên có ví dụ cụ thể về món ăn
4. **Có hướng dẫn**: Giải thích cách sử dụng bảng trong thực tế
5. **Cảnh báo**: Rõ ràng về mục đích giáo dục, không thay thế tư vấn y tế

## Lưu ý kỹ thuật

- Sử dụng component `Card` và `Callout` hiện có
- Tạo bảng responsive với `overflow-x-auto`
- Thêm màu sắc phân biệt (đỏ cho cao, xanh cho thấp)
- Đảm bảo metadata và SEO cho mỗi phần bổ sung
- Liên kết với các bài viết liên quan

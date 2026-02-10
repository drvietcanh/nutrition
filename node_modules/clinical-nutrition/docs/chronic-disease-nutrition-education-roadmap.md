# Lộ trình Viết bài giáo dục Dinh dưỡng cho Bệnh mạn tính

## Tổng quan

Tài liệu này trình bày lộ trình và cấu trúc để phát triển các bài viết giáo dục về dinh dưỡng lâm sàng cho các bệnh mạn tính phổ biến. Mục tiêu là cung cấp nội dung giáo dục chất lượng cao, dựa trên bằng chứng, phù hợp với triết lý giáo dục của nền tảng.

## 1. Phân tích Hiện trạng

### 1.1 Cấu trúc Knowledge Base Hiện tại

**Các bài viết hiện có:**
- Hiểu lầm & Quan niệm Sai trong Dinh dưỡng Lâm sàng
- Đánh giá Dinh dưỡng Lâm sàng: Quy trình
- Ước tính Nhu cầu Dinh dưỡng
- Vì sao Lượng Ăn Thường thiếu
- Đánh giá Lượng Ăn

**Đặc điểm:**
- Tập trung vào các khái niệm cơ bản và quy trình chung
- Không có nội dung chuyên biệt cho bệnh mạn tính cụ thể
- Sử dụng components tái sử dụng (Callout, Card, Section)
- Cấu trúc rõ ràng với headings, explanations, clinical notes

### 1.2 Khoảng trống Cần lấp đầy

- Thiếu nội dung về dinh dưỡng cho bệnh mạn tính cụ thể
- Chưa có hướng dẫn về điều chỉnh dinh dưỡng theo bệnh lý
- Thiếu thông tin về tương tác giữa dinh dưỡng và thuốc
- Chưa có nội dung về quản lý biến chứng dinh dưỡng trong bệnh mạn tính

## 2. Danh sách Bệnh mạn tính Ưu tiên

### 2.1 Tiêu chí Ưu tiên

1. **Tần suất cao trong thực hành lâm sàng**
2. **Tác động dinh dưỡng rõ ràng**
3. **Có hướng dẫn dựa trên bằng chứng**
4. **Phù hợp với đối tượng giáo dục (bác sĩ, điều dưỡng, sinh viên)**

### 2.2 Danh sách Bệnh Ưu tiên (theo thứ tự)

#### Nhóm 1: Bệnh Tim mạch & Chuyển hóa (Ưu tiên cao)
1. **Tăng huyết áp (Hypertension)**
   - Tác động: Natri, kali, DASH diet
   - Tần suất: Rất cao
   - Độ phức tạp: Trung bình

2. **Đái tháo đường (Diabetes Mellitus)**
   - Tác động: Carbohydrate, glycemic control, protein
   - Tần suất: Rất cao
   - Độ phức tạp: Cao

3. **Suy tim (Heart Failure)**
   - Tác động: Natri, dịch, năng lượng
   - Tần suất: Cao
   - Độ phức tạp: Cao

4. **Rối loạn Lipid máu (Dyslipidemia)**
   - Tác động: Chất béo, cholesterol
   - Tần suất: Cao
   - Độ phức tạp: Trung bình

#### Nhóm 2: Bệnh thận (Ưu tiên cao)
5. **Bệnh thận mạn (Chronic Kidney Disease - CKD)**
   - Tác động: Protein, phosphorus, potassium, natri, dịch
   - Tần suất: Cao
   - Độ phức tạp: Rất cao

6. **Lọc máu (Dialysis)**
   - Tác động: Protein, phosphorus, potassium, dịch
   - Tần suất: Trung bình
   - Độ phức tạp: Rất cao

#### Nhóm 3: Bệnh Gan & Tiêu hóa (Ưu tiên trung bình)
7. **Bệnh gan mạn (Chronic Liver Disease)**
   - Tác động: Protein, natri, dịch, vi chất
   - Tần suất: Trung bình
   - Độ phức tạp: Cao

8. **Bệnh viêm ruột (Inflammatory Bowel Disease - IBD)**
   - Tác động: Năng lượng, protein, vi chất, chế độ ăn đặc biệt
   - Tần suất: Trung bình
   - Độ phức tạp: Cao

#### Nhóm 4: Bệnh khác (Ưu tiên thấp hơn)
9. **Bệnh phổi tắc nghẽn mạn (COPD)**
   - Tác động: Năng lượng, protein, cân nặng
   - Tần suất: Trung bình
   - Độ phức tạp: Trung bình

10. **Ung thư (Cancer)**
    - Tác động: Năng lượng, protein, vi chất, quản lý triệu chứng
    - Tần suất: Cao
    - Độ phức tạp: Rất cao (cần nhiều bài riêng)

## 3. Cấu trúc Bài viết Chuẩn

### 3.1 Template Cấu trúc

Mỗi bài viết về bệnh mạn tính nên tuân theo cấu trúc sau:

```markdown
# [Tên bệnh]: Dinh dưỡng Lâm sàng

## 1. Giới thiệu & Tổng quan
- Tại sao dinh dưỡng quan trọng trong bệnh này
- Tác động của bệnh lên tình trạng dinh dưỡng
- Tác động của dinh dưỡng lên tiến triển bệnh

## 2. Nguyên tắc Dinh dưỡng Cơ bản
- Nhu cầu năng lượng (điều chỉnh nếu cần)
- Nhu cầu protein (điều chỉnh nếu cần)
- Nhu cầu vi chất (điều chỉnh nếu cần)

## 3. Điều chỉnh Dinh dưỡng Theo Bệnh lý
- Hạn chế hoặc tăng các chất dinh dưỡng cụ thể
- Lý do khoa học cho các điều chỉnh
- Phạm vi điều chỉnh (không phải quy tắc cứng nhắc)

## 4. Quản lý Biến chứng Dinh dưỡng
- Các vấn đề dinh dưỡng phổ biến trong bệnh này
- Cách nhận biết và quản lý
- Khi nào cần tham khảo chuyên gia

## 5. Tương tác Dinh dưỡng-Thuốc
- Các tương tác quan trọng
- Thời điểm ăn uống liên quan đến thuốc
- Bổ sung vi chất và thuốc

## 6. Theo dõi & Đánh giá lại
- Các chỉ số cần theo dõi
- Tần suất đánh giá lại
- Dấu hiệu cần điều chỉnh kế hoạch

## 7. Các cạm bẫy Lâm sàng Phổ biến
- Những sai lầm thường gặp
- Hiểu lầm cần tránh
- Cảnh báo quan trọng

## 8. Tài liệu Tham khảo & Hướng dẫn
- Hướng dẫn chính thức (nếu có)
- Nguồn bằng chứng
- Khi nào cần tham khảo chuyên gia dinh dưỡng

## 9. Nhắc nhở An toàn
- Đây là giáo dục, không phải kê đơn
- Cần phán đoán lâm sàng
- Hợp tác đa ngành
```

### 3.2 Components Tái sử dụng

Sử dụng các components hiện có:
- `Callout` - cho warnings, info, success
- `Card` - cho sections quan trọng
- `Breadcrumb` - cho navigation
- Typography classes đã chuẩn hóa

Tạo components mới nếu cần:
- `DiseaseSpecificCallout` - cho cảnh báo đặc biệt
- `NutrientAdjustmentTable` - cho bảng điều chỉnh dinh dưỡng
- `MedicationInteractionCard` - cho tương tác thuốc

## 4. Lộ trình Triển khai

### Phase 1: Bệnh Tim mạch & Chuyển hóa (Tháng 1-2)

**Tuần 1-2: Tăng huyết áp**
- Nghiên cứu DASH diet, hướng dẫn natri
- Viết bài về tăng huyết áp
- Tạo components cần thiết

**Tuần 3-4: Đái tháo đường**
- Nghiên cứu carbohydrate counting, glycemic control
- Viết bài về đái tháo đường type 2
- Có thể tách type 1 và type 2 nếu cần

**Tuần 5-6: Suy tim**
- Nghiên cứu hạn chế natri và dịch
- Viết bài về suy tim
- Tích hợp với fluid calculator

**Tuần 7-8: Rối loạn Lipid máu**
- Nghiên cứu chất béo, cholesterol
- Viết bài về dyslipidemia
- Review và polish Phase 1

### Phase 2: Bệnh thận (Tháng 3-4)

**Tuần 9-10: Bệnh thận mạn (CKD)**
- Nghiên cứu protein restriction, phosphorus, potassium
- Viết bài về CKD theo giai đoạn
- Tích hợp với micronutrient calculator

**Tuần 11-12: Lọc máu**
- Nghiên cứu dinh dưỡng trong dialysis
- Viết bài về hemodialysis và peritoneal dialysis
- Review Phase 2

### Phase 3: Bệnh Gan & Tiêu hóa (Tháng 5-6)

**Tuần 13-14: Bệnh gan mạn**
- Nghiên cứu protein, natri, vi chất trong bệnh gan
- Viết bài về bệnh gan mạn
- Tích hợp với refeeding risk assessment

**Tuần 15-16: Bệnh viêm ruột (IBD)**
- Nghiên cứu chế độ ăn đặc biệt, vi chất
- Viết bài về Crohn và UC
- Review Phase 3

### Phase 4: Bệnh khác & Hoàn thiện (Tháng 7-8)

**Tuần 17-18: COPD**
- Nghiên cứu dinh dưỡng trong COPD
- Viết bài về COPD

**Tuần 19-20: Ung thư (tổng quan)**
- Nghiên cỡu dinh dưỡng trong ung thư
- Viết bài tổng quan về dinh dưỡng ung thư
- Có thể mở rộng thành nhiều bài theo loại ung thư

**Tuần 21-22: Review & Polish**
- Review tất cả bài viết
- Đảm bảo consistency
- Cập nhật navigation
- SEO optimization

## 5. Nguyên tắc Viết

### 5.1 Triết lý Giáo dục

1. **Không kê đơn, chỉ giáo dục**
   - Luôn nhấn mạnh đây là giáo dục
   - Khuyến khích phán đoán lâm sàng
   - Tham khảo chuyên gia khi cần

2. **Dựa trên bằng chứng**
   - Tham chiếu hướng dẫn chính thức
   - Trích dẫn nguồn khi có thể
   - Thừa nhận khi bằng chứng không rõ ràng

3. **Thực tế lâm sàng**
   - Nhấn mạnh khoảng, không phải số chính xác
   - Điều chỉnh dựa trên bối cảnh
   - Theo dõi và đánh giá lại

4. **Tránh hiểu lầm**
   - Làm rõ các quan niệm sai
   - Giải thích lý do khoa học
   - Cảnh báo các cạm bẫy

### 5.2 Tone & Style

- **Professional nhưng accessible**
- **Vietnamese language** - rõ ràng, dễ hiểu
- **Structured** - headings, lists, callouts
- **Visual** - tables, cards, icons khi phù hợp

### 5.3 Độ dài & Độ sâu

- **Mỗi bài: 2000-4000 từ**
- **Đủ sâu để hữu ích, không quá chi tiết**
- **Có thể chia nhỏ nếu cần (ví dụ: CKD theo giai đoạn)**

## 6. Tích hợp với Tools

### 6.1 Tools Hiện có

- **Energy-Protein Calculator**: Sử dụng cho tất cả bệnh mạn tính
- **Fluid Calculator**: Tích hợp với suy tim, bệnh thận
- **Micronutrient Calculator**: Tích hợp với bệnh thận, gan
- **Refeeding Risk**: Tích hợp với bệnh gan, ung thư

### 6.2 Tools Mới Có thể Cần

- **Sodium Calculator**: Cho tăng huyết áp, suy tim
- **Carbohydrate Counter**: Cho đái tháo đường
- **Protein Adjustment Tool**: Cho bệnh thận
- **Phosphorus/Potassium Tracker**: Cho bệnh thận

## 7. Metrics & Success Criteria

### 7.1 Metrics

- Số bài viết hoàn thành
- Độ dài trung bình mỗi bài
- Số components tái sử dụng
- Số tools được tích hợp

### 7.2 Success Criteria

- Mỗi bài viết:
  - Có cấu trúc đầy đủ
  - Dựa trên bằng chứng
  - Có educational disclaimers
  - Tích hợp với tools khi phù hợp
  - Không có lỗi linter
  - Responsive và accessible

## 8. Tài liệu Tham khảo

### 8.1 Hướng dẫn Quốc tế

- **KDIGO**: Bệnh thận
- **ADA**: Đái tháo đường
- **AHA/ACC**: Tim mạch
- **ESPEN**: Dinh dưỡng lâm sàng tổng quát
- **ASPEN**: Dinh dưỡng lâm sàng

### 8.2 Hướng dẫn Việt Nam

- Hướng dẫn của Bộ Y tế (nếu có)
- Hướng dẫn của các hiệp hội chuyên khoa
- Guidelines địa phương

## 9. Next Steps

1. **Review và approve roadmap này**
2. **Bắt đầu Phase 1 với bài về Tăng huyết áp**
3. **Tạo template và components cần thiết**
4. **Thiết lập quy trình review và quality control**
5. **Bắt đầu viết bài đầu tiên**

## 10. Notes

- Roadmap này là linh hoạt và có thể điều chỉnh
- Ưu tiên chất lượng hơn số lượng
- Mỗi bài nên được review bởi chuyên gia (nếu có thể)
- Cập nhật roadmap khi cần

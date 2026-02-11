# BÁO CÁO TOÀN DIỆN DANH MỤC THỰC PHẨM

## TÓM TẮT TỔNG QUAN

### Số lượng thực phẩm

| File | Số lượng | Mô tả |
|------|----------|-------|
| **food-db.ts** | 461 | File gốc với mã số (code), được dùng trong food-database và meal-planner tools |
| **vietnamese-food-extended.ts** | 303 | File mở rộng với thông tin bệnh lý chi tiết, được dùng trong hầu hết các tools khác |
| **Thực phẩm chung** | 114 | Có trong cả 2 file |
| **Chỉ có trong Extended** | 189 | Chỉ có trong vietnamese-food-extended.ts |
| **Chỉ có trong Original** | 364 | Chỉ có trong food-db.ts (THIẾU trong Extended) |
| **Tổng thực phẩm duy nhất** | 667 | Tổng số thực phẩm khác nhau giữa 2 file |

### Phân bố thực phẩm thiếu theo nhóm

| Nhóm | Số lượng thiếu | Ghi chú |
|------|----------------|---------|
| **Thịt (meat)** | 111 | Nhiều nhất, bao gồm các phần khác nhau của gà, heo, bò |
| **Món canh/súp (soups)** | 56 | Nhiều món ăn truyền thống Việt Nam |
| **Hải sản (seafood)** | 33 | Các loại cá biển, tôm, cua, ghẹ |
| **Rau củ (vegetables)** | 34 | Nhiều loại rau, củ, quả |
| **Đồ ăn vặt (snacks)** | 19 | Bánh mì, bánh bao, mì gói, etc. |
| **Đồ uống (beverages)** | 23 | Nước cam, trà, bia, rượu |
| **Trái cây (fruits)** | 19 | Nho, thanh long, mâm xôi, dâu tây, etc. |
| **Đậu (legumes)** | 16 | Đậu đỏ, lạc, đậu trắng, etc. |
| **Ngũ cốc & Mì (rice-noodles)** | 14 | Bún chả, bún gà, bánh mì, mì, etc. |
| **Gia vị (condiments)** | 13 | Muối, đường, bột ngọt, dầu ăn, etc. |
| **Sữa (dairy)** | 11 | **QUAN TRỌNG: Bao gồm trứng gà, vịt, cút, ngỗng** |
| **Cá nước ngọt (freshwater)** | 11 | Cá rô, cá trê, cá chép, etc. |
| **Đồ ngọt (desserts)** | 4 | Chè đậu xanh, kem, etc. |

## CÁC THỰC PHẨM QUAN TRỌNG THIẾU

### 1. TRỨNG (Dairy) - ƯU TIÊN CAO

Các loại trứng cơ bản **THIẾU** trong extended:

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `trung-ga` | Trứng gà | 80005 | **THIẾU** - Thực phẩm phổ biến nhất |
| `trung-vit` | Trứng vịt | 80009 | **THIẾU** - Phổ biến ở Việt Nam |
| `trung-cut` | Trứng cút | 80010 | **THIẾU** - Nhỏ, giàu cholesterol |
| `trung-ngong` | Trứng ngỗng | 80011 | **THIẾU** - Lớn, cholesterol rất cao |

**Đã có:**
- `trung-cut-lon` - Trứng cút lộn ✅
- `trung-vit-lon` - Trứng vịt lộn ✅

### 2. CÁC MÓN ĂN CÓ TRỨNG (Snacks/Soups)

| ID | Tên | Mã số | Nhóm |
|----|-----|-------|------|
| `banh-mi-trung` | Bánh mì trứng | 10018 | snacks |
| `com-thit-kho-trung` | Cơm thịt kho trứng | 11008 | soups |
| `trung-chien-nuoc-mam` | Trứng chiên nước mắm | - | soups |
| `trung-xao-ca-chua` | Trứng xào cà chua | - | soups |
| `com-rang-trung` | Cơm rang trứng | - | rice-noodles |

### 3. CÁC PHẦN THỊT GÀ CHI TIẾT (Meat) - ƯU TIÊN CAO

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `dui-toi-ga` | Đùi tỏi gà | 20096 | Phần cẳng đùi |
| `dui-goc-tu-ga` | Đùi góc tư gà | 20097 | Kết hợp đùi + tỏi |
| `canh-giua-ga` | Cánh giữa gà | 20099 | Phần giữa cánh |
| `canh-dau-ga` | Cánh đầu gà | 20100 | Phần đầu cánh |
| `co-ga` | Cổ gà | 20101 | Phần cổ |
| `long-ga` | Lòng gà | 20102 | Nội tạng |
| `gan-ga` | Gan gà | 20103 | Nội tạng, giàu vitamin A |
| `me-ga` | Mề gà | 20104 | Nội tạng |
| `tim-ga` | Tim gà | 20105 | Nội tạng |
| `chan-ga` | Chân gà | 20106 | Phần chân |
| `dau-ga` | Đầu gà | 20107 | Phần đầu |

### 4. CÁC MÓN ĂN PHỔ BIẾN (Rice-noodles/Soups)

| ID | Tên | Mã số | Nhóm |
|----|-----|-------|------|
| `bun-cha` | Bún chả | 10003 | rice-noodles |
| `bun-ga` | Bún gà | 10004 | rice-noodles |
| `banh-mi` | Bánh mì | 10005 | rice-noodles |
| `mien` | Miến | 10006 | rice-noodles |
| `com-ga` | Cơm gà | 10007 | rice-noodles |
| `banh-cuon` | Bánh cuốn | 10008 | rice-noodles |
| `canh-chua` | Canh chua | 11001 | soups |
| `pho-ga` | Phở gà | 11002 | soups |
| `canh-kho-qua` | Canh khổ qua | 11003 | soups |
| `chao-trang` | Cháo trắng | 11004 | soups |
| `chao-ga` | Cháo gà | 11005 | soups |

### 5. HẢI SẢN (Seafood)

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `cua` | Cua | 30001 | Cua biển |
| `ca-ngu` | Cá ngừ | 30002 | Cá biển lớn |
| `ca-hui` | Cá hồi | 30003 | Giàu omega-3 |
| `ca-chem` | Cá chẽm | 30004 | Cá biển |
| `ca-nuc` | Cá nục | 30005 | Cá biển nhỏ |
| `than-ca-ngu` | Thân cá ngừ | 30006 | Phần thân |
| `bung-ca-ngu` | Bụng cá ngừ | 30007 | Phần bụng, nhiều mỡ |
| `thit-lung-ca-ngu` | Thịt lưng cá ngừ | 30008 | Phần lưng |
| `ma-ca-ngu` | Mã cá ngừ | 30009 | Phần đuôi |

### 6. RAU CỦ (Vegetables)

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `rau-mui` | Rau mùi | 40001 | Gia vị |
| `rau-ram` | Rau răm | 40002 | Gia vị |
| `thi-la` | Thì là | 40003 | Gia vị |
| `sa-cay` | Sa cay | 40004 | Gia vị |
| `ca-rot-rau` | Cà rốt (rau) | 40005 | Rau củ |
| `bi-do` | Bí đỏ | 40006 | Rau củ |
| `rau-lang` | Rau lang | 40007 | Rau lá |
| `rau-diep` | Rau diếp | 40008 | Rau lá |
| `dau-bao` | Đậu bắp | 40009 | Rau quả |
| `su-su` | Su su | 40010 | Rau củ |

### 7. TRÁI CÂY (Fruits)

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `nho` | Nho | 50001 | Trái cây nhập khẩu |
| `thanh-long` | Thanh long | 50002 | Trái cây nhiệt đới |
| `mam-xoi` | Mâm xôi | 50003 | Trái cây nhập khẩu |
| `dau-tay` | Dâu tây | 50004 | Trái cây nhập khẩu |
| `xoai-chin` | Xoài chín | 50005 | Trái cây nhiệt đới |
| `du-du-updated` | Đu đủ | 50006 | Trái cây nhiệt đới |
| `dua` | Dừa | 50007 | Trái cây nhiệt đới |
| `mit-chin` | Mít chín | 50008 | Trái cây nhiệt đới |
| `chom-chom-updated` | Chôm chôm | 50009 | Trái cây nhiệt đới |

### 8. ĐỒ UỐNG (Beverages)

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `nuoc-cam` | Nước cam | 90001 | Nước ép trái cây |
| `tra-xanh` | Trà xanh | 90002 | Trà |
| `bia-lager-5` | Bia lager 5% | 90003 | Đồ uống có cồn |
| `bia-lager-45` | Bia lager 4.5% | 90004 | Đồ uống có cồn |
| `bia-strong-7` | Bia strong 7% | 90005 | Đồ uống có cồn |
| `bia-khong-con` | Bia không cồn | 90006 | Đồ uống không cồn |
| `ruou-vang-do-13` | Rượu vang đỏ 13% | 90007 | Đồ uống có cồn |
| `ruou-vang-trang-12` | Rượu vang trắng 12% | 90008 | Đồ uống có cồn |
| `ruou-vodka-40` | Rượu vodka 40% | 90009 | Đồ uống có cồn |
| `ruou-whisky-40` | Rượu whisky 40% | 90010 | Đồ uống có cồn |

### 9. GIA VỊ (Condiments)

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `muoi-an` | Muối ăn | 60001 | Gia vị cơ bản |
| `duong-cat-trang` | Đường cát trắng | 60002 | Gia vị ngọt |
| `bot-ngot-msg` | Bột ngọt (MSG) | 60003 | Gia vị umami |
| `dau-an-thuc-vat` | Dầu ăn thực vật | 60004 | Chất béo |
| `xi-dau` | Xì dầu | 60005 | Nước tương |
| `dau-hao` | Dầu hào | 60006 | Gia vị |
| `nuoc-mam-pha` | Nước mắm pha | 60007 | Nước mắm pha loãng |
| `bot-nem` | Bột nêm | 60008 | Gia vị tổng hợp |
| `mo-heo-thang` | Mỡ heo thắng | 60009 | Chất béo động vật |
| `tuong-ca` | Tương cà | 60010 | Gia vị chua ngọt |

### 10. ĐẬU (Legumes)

| ID | Tên | Mã số | Ghi chú |
|----|-----|-------|---------|
| `dau-do` | Đậu đỏ | 70001 | Đậu đỏ |
| `lac` | Lạc | 70002 | Đậu phụng |
| `dau-trang` | Đậu trắng | 70003 | Đậu trắng |
| `dau-co-ve` | Đậu cô ve | 70004 | Đậu cô ve |
| `dau-nanh-kho` | Đậu nành khô | 70005 | Đậu nành khô |
| `dau-xanh-kho` | Đậu xanh khô | 70006 | Đậu xanh khô |
| `dau-den-kho` | Đậu đen khô | 70007 | Đậu đen khô |
| `dau-do-kho` | Đậu đỏ khô | 70008 | Đậu đỏ khô |
| `dau-lang-kho` | Đậu lăng khô | 70009 | Đậu lăng khô |
| `dau-phong-kho` | Đậu phụng khô | 70010 | Đậu phụng khô |

## PHÂN TÍCH CHI TIẾT THEO NHÓM

### A. THỊT (Meat) - 111 thực phẩm thiếu

**Các phần thịt gà chi tiết:**
- Đùi tỏi gà, đùi góc tư gà
- Cánh giữa gà, cánh đầu gà
- Cổ gà, lòng gà, gan gà, mề gà, tim gà, chân gà, đầu gà

**Các phần thịt heo:**
- Nhiều phần khác nhau của heo

**Các phần thịt bò:**
- Nhiều phần khác nhau của bò

**Các món ăn từ thịt:**
- Nhiều món ăn chế biến từ thịt

### B. MÓN CANH/SUP (Soups) - 56 thực phẩm thiếu

Bao gồm:
- Canh chua, canh khổ qua
- Cháo trắng, cháo gà
- Cơm thịt kho trứng
- Nhiều món canh truyền thống Việt Nam

### C. HẢI SẢN (Seafood) - 33 thực phẩm thiếu

Bao gồm:
- Cua biển
- Cá ngừ (nhiều phần khác nhau)
- Cá hồi, cá chẽm, cá nục
- Nhiều loại cá biển khác

### D. RAU CỦ (Vegetables) - 34 thực phẩm thiếu

Bao gồm:
- Rau gia vị: rau mùi, rau răm, thì là, sa cay
- Rau củ: cà rốt, bí đỏ, su su
- Rau lá: rau lang, rau diếp
- Rau quả: đậu bắp

### E. TRÁI CÂY (Fruits) - 19 thực phẩm thiếu

Bao gồm:
- Trái cây nhiệt đới: thanh long, xoài, đu đủ, dừa, mít, chôm chôm
- Trái cây nhập khẩu: nho, mâm xôi, dâu tây

### F. ĐỒ UỐNG (Beverages) - 23 thực phẩm thiếu

Bao gồm:
- Nước ép: nước cam
- Trà: trà xanh
- Đồ uống có cồn: bia, rượu vang, rượu mạnh
- Đồ uống không cồn: bia không cồn

### G. GIA VỊ (Condiments) - 13 thực phẩm thiếu

Bao gồm:
- Gia vị cơ bản: muối, đường, bột ngọt
- Chất béo: dầu ăn, mỡ heo
- Nước chấm: xì dầu, dầu hào, nước mắm pha, tương cà

### H. ĐẬU (Legumes) - 16 thực phẩm thiếu

Bao gồm:
- Đậu đỏ, đậu trắng, đậu đen
- Lạc (đậu phụng)
- Đậu cô ve
- Các loại đậu khô

### I. NGŨ CỐC & MÌ (Rice-noodles) - 14 thực phẩm thiếu

Bao gồm:
- Bún chả, bún gà
- Bánh mì, bánh cuốn
- Mì, miến
- Cơm gà, cơm rang trứng

### J. ĐỒ ĂN VẶT (Snacks) - 19 thực phẩm thiếu

Bao gồm:
- Bánh mì trứng, bánh mì ốp la
- Bánh bao thịt
- Mì gói
- Khoai tây chiên
- Bánh quy

### K. SỮA (Dairy) - 11 thực phẩm thiếu

**QUAN TRỌNG:**
- Trứng gà, trứng vịt, trứng cút, trứng ngỗng
- Sữa bò tươi, sữa chua, sữa đậu nành
- Phô mai, sữa đặc, sữa chua ướp lạnh

### L. CÁ NƯỚC NGỌT (Freshwater) - 11 thực phẩm thiếu

Bao gồm:
- Cá rô, cá trê, cá chép
- Cá trắm cỏ, cá trôi, cá điêu hồng
- Cá rô đồng, cá rô phi
- Ốc bươu

### M. ĐỒ NGỌT (Desserts) - 4 thực phẩm thiếu

Bao gồm:
- Chè đậu xanh, chè khoai môn
- Kem
- Sữa chua nếp cẩm

## ĐỀ XUẤT ƯU TIÊN BỔ SUNG

### ƯU TIÊN CAO (Bổ sung ngay)

1. **Trứng (Dairy)**
   - Trứng gà (trung-ga) - **QUAN TRỌNG NHẤT**
   - Trứng vịt (trung-vit)
   - Trứng cút (trung-cut)
   - Trứng ngỗng (trung-ngong)

2. **Các món ăn phổ biến (Rice-noodles/Soups)**
   - Bún chả (bun-cha)
   - Bún gà (bun-ga)
   - Bánh mì (banh-mi)
   - Canh chua (canh-chua)
   - Cháo gà (chao-ga)

3. **Các phần thịt gà chi tiết (Meat)**
   - Đùi tỏi gà (dui-toi-ga)
   - Cánh gà (canh-ga)
   - Gan gà (gan-ga) - Giàu vitamin A
   - Tim gà (tim-ga)

### ƯU TIÊN TRUNG BÌNH

4. **Hải sản (Seafood)**
   - Cua biển (cua)
   - Cá ngừ (ca-ngu)
   - Cá hồi (ca-hui) - Giàu omega-3

5. **Rau củ (Vegetables)**
   - Rau gia vị: rau mùi, rau răm, thì là
   - Rau củ: cà rốt, bí đỏ

6. **Trái cây (Fruits)**
   - Thanh long (thanh-long)
   - Xoài chín (xoai-chin)
   - Đu đủ (du-du-updated)

### ƯU TIÊN THẤP

7. **Đồ uống (Beverages)**
   - Nước cam (nuoc-cam)
   - Trà xanh (tra-xanh)
   - Bia, rượu (nếu cần cho bệnh nhân)

8. **Gia vị (Condiments)**
   - Muối, đường, bột ngọt
   - Dầu ăn, mỡ heo

9. **Đậu (Legumes)**
   - Đậu đỏ, đậu trắng, đậu đen
   - Lạc (đậu phụng)

## KẾT LUẬN

1. **Tổng số thực phẩm thiếu: 364** (chỉ có trong food-db.ts, không có trong vietnamese-food-extended.ts)

2. **Các thực phẩm quan trọng nhất cần bổ sung ngay:**
   - Trứng gà, vịt, cút, ngỗng (4 loại)
   - Các món ăn phổ biến: bún chả, bún gà, bánh mì, canh chua, cháo gà
   - Các phần thịt gà chi tiết: đùi, cánh, gan, tim

3. **Phân bố không đều:**
   - Nhóm thịt (meat) thiếu nhiều nhất: 111 thực phẩm
   - Nhóm món canh/súp (soups) thiếu: 56 thực phẩm
   - Nhóm hải sản (seafood) thiếu: 33 thực phẩm

4. **Khuyến nghị:**
   - Ưu tiên bổ sung các thực phẩm phổ biến và quan trọng cho người bệnh
   - Bổ sung đầy đủ các thành phần dinh dưỡng mở rộng (vitamin B3, B5, choline, selenium, etc.)
   - Đảm bảo tính nhất quán với các thực phẩm đã có trong extended

## GHI CHÚ

- File `food-db.ts` được sử dụng trong: food-database tool, meal-planner tool
- File `vietnamese-food-extended.ts` được sử dụng trong: hầu hết các tools khác (purine-calculator, meal-assessment, quick-reference, food-lookup-by-disease, etc.)
- Cần đảm bảo cả 2 file đều có đầy đủ thực phẩm để người dùng có thể tìm kiếm và sử dụng

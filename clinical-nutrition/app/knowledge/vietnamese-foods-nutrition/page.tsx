import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Apple, Fish, Wheat, Carrot, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Việt Nam: Nguồn Dinh dưỡng Tốt",
  description:
    "Giới thiệu các thực phẩm Việt Nam giàu dinh dưỡng - rau củ, protein, carbohydrate, trái cây với ví dụ thực tế và giá trị dinh dưỡng.",
  keywords: [
    "thực phẩm Việt Nam",
    "vietnamese food",
    "rau củ Việt Nam",
    "món ăn Việt Nam",
    "dinh dưỡng",
    "phở",
    "bánh mì",
    "canh chua",
  ],
};

export default function VietnameseFoodsNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực phẩm Việt Nam: Nguồn Dinh dưỡng Tốt" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Apple className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Việt Nam: Nguồn Dinh dưỡng Tốt</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Việt Nam có nhiều thực phẩm giàu dinh dưỡng, từ rau củ tươi ngon đến protein chất lượng cao. 
          Hiểu về giá trị dinh dưỡng của các thực phẩm Việt Nam giúp bạn xây dựng chế độ ăn lành mạnh 
          với những gì quen thuộc và dễ tìm.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Rau củ Việt Nam</strong> giàu vitamin, khoáng chất, và chất xơ (rau muống, rau cải, đậu bắp)
          </li>
          <li>
            <strong>Protein Việt Nam</strong> đa dạng: cá, tôm, cua, đậu phụ, chả, giò
          </li>
          <li>
            <strong>Carbohydrate Việt Nam</strong> phong phú: cơm, bún, phở, bánh cuốn, khoai lang
          </li>
          <li>
            <strong>Trái cây Việt Nam</strong> giàu vitamin và chất chống oxy hóa (xoài, ổi, thanh long)
          </li>
          <li>
            Thực phẩm Việt Nam tươi sống thường <strong>ít chế biến</strong>, giữ được dinh dưỡng tự nhiên
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Thực phẩm Việt Nam Tốt cho Sức khỏe?</h2>
        <div className="space-y-4">
          <p className="text-body">
            Thực phẩm Việt Nam truyền thống thường <strong>tươi sống, ít chế biến</strong>, và được nấu 
            với phương pháp lành mạnh như luộc, hấp, kho. Điều này giúp giữ được nhiều dinh dưỡng tự nhiên 
            và ít chất béo không tốt.
          </p>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Một bát canh chua cá với rau muống, cà chua, đậu bắp cung cấp protein từ cá, 
              vitamin từ rau củ, và chất xơ - tất cả trong một món ăn quen thuộc của người Việt Nam.
            </p>
          </ExampleBox>

          <Card>
            <h3 className="heading-4 mb-3">Đặc điểm Thực phẩm Việt Nam Tốt cho Sức khỏe</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Ưu điểm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nhiều rau củ tươi, giàu vitamin</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Protein đa dạng từ cá, tôm, đậu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Phương pháp nấu lành mạnh (luộc, hấp, kho)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ít thực phẩm chế biến sẵn</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lưu ý:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Một số món có nhiều muối (nước mắm, mắm tôm)</li>
                  <li>• Một số món có nhiều đường (chè, nước ngọt)</li>
                  <li>• Cần chú ý khẩu phần (đặc biệt cơm, bánh mì)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Rau củ Việt Nam: Nguồn Vitamin và Chất xơ</h2>
        <div className="space-y-4">
          <p className="text-body">
            Rau củ Việt Nam rất đa dạng và giàu dinh dưỡng. Chúng cung cấp vitamin, khoáng chất, 
            và chất xơ quan trọng cho sức khỏe.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Rau Xanh Phổ biến</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Rau Xanh Việt Nam (100g)"
              rows={[
                { nutrient: "Rau muống", amount: "20", unit: "calo", highlight: "good", note: "Giàu vitamin A, C, sắt" },
                { nutrient: "Rau cải", amount: "25", unit: "calo", highlight: "good", note: "Giàu vitamin K, canxi" },
                { nutrient: "Rau lang", amount: "30", unit: "calo", highlight: "good", note: "Giàu vitamin A, chất xơ" },
                { nutrient: "Rau dền", amount: "23", unit: "calo", highlight: "good", note: "Giàu sắt, canxi" },
                { nutrient: "Bông cải xanh", amount: "34", unit: "calo", highlight: "good", note: "Giàu vitamin C, K" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Rau Củ Khác</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Rau Củ Việt Nam (100g)"
              rows={[
                { nutrient: "Đậu bắp", amount: "33", unit: "calo", highlight: "good", note: "Giàu chất xơ, vitamin K" },
                { nutrient: "Mướp", amount: "20", unit: "calo", highlight: "good", note: "Giàu vitamin C, chất xơ" },
                { nutrient: "Bầu", amount: "14", unit: "calo", highlight: "good", note: "Ít calo, giàu nước" },
                { nutrient: "Cà chua", amount: "18", unit: "calo", highlight: "good", note: "Giàu lycopene, vitamin C" },
                { nutrient: "Ớt chuông", amount: "31", unit: "calo", highlight: "good", note: "Giàu vitamin C, A" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Món Ăn">
            <p className="mb-2">
              <strong>Canh rau muống:</strong> Rau muống luộc hoặc nấu canh cung cấp vitamin A, C, sắt, 
              và chất xơ. Một bát canh rau muống (200g) chỉ có khoảng 40 calo nhưng rất giàu dinh dưỡng.
            </p>
            <p>
              <strong>Đậu bắp luộc:</strong> Đậu bắp là nguồn chất xơ tuyệt vời, giúp tiêu hóa tốt. 
              Có thể ăn kèm với cơm hoặc làm món ăn kèm.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Protein Việt Nam: Đa dạng và Chất lượng</h2>
        <div className="space-y-4">
          <p className="text-body">
            Việt Nam có nhiều nguồn protein tốt, từ cá, tôm, cua đến đậu phụ và các loại chả, giò.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Protein từ Cá và Hải sản</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Cá và Hải sản Việt Nam (100g)"
              rows={[
                { nutrient: "Cá thu", amount: "200", unit: "calo, 25g protein", highlight: "good", note: "Giàu omega-3" },
                { nutrient: "Cá hồi", amount: "200", unit: "calo, 25g protein", highlight: "good", note: "Giàu omega-3" },
                { nutrient: "Cá basa", amount: "150", unit: "calo, 20g protein", highlight: "good", note: "Protein nạc" },
                { nutrient: "Tôm", amount: "100", unit: "calo, 24g protein", highlight: "good", note: "Protein nạc, ít chất béo" },
                { nutrient: "Cua", amount: "87", unit: "calo, 18g protein", highlight: "good", note: "Giàu canxi, ít chất béo" },
                { nutrient: "Ốc", amount: "90", unit: "calo, 16g protein", highlight: "good", note: "Protein nạc" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Protein từ Đậu và Chế phẩm</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Đậu và Chế phẩm (100g)"
              rows={[
                { nutrient: "Đậu phụ", amount: "80", unit: "calo, 8g protein", highlight: "good", note: "Protein thực vật, ít chất béo" },
                { nutrient: "Đậu nành", amount: "173", unit: "calo, 17g protein", highlight: "good", note: "Protein hoàn chỉnh" },
                { nutrient: "Đậu đen", amount: "132", unit: "calo, 9g protein", highlight: "good", note: "Giàu chất xơ, protein" },
                { nutrient: "Chả cá", amount: "150", unit: "calo, 20g protein", highlight: "moderate", note: "Chế biến, có thể nhiều muối" },
                { nutrient: "Giò lụa", amount: "200", unit: "calo, 18g protein", highlight: "moderate", note: "Chế biến, có thể nhiều muối" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Món Ăn">
            <p className="mb-2">
              <strong>Cá kho tộ:</strong> Cá thu hoặc cá basa kho với nước mắm, đường, tỏi, ớt. 
              Cung cấp protein chất lượng cao và omega-3. Lưu ý: có thể nhiều muối, nên ăn vừa phải.
            </p>
            <p className="mb-2">
              <strong>Canh chua cá:</strong> Cá nấu với cà chua, dứa, đậu bắp. Protein từ cá kết hợp 
              với vitamin từ rau củ, tạo món ăn cân bằng dinh dưỡng.
            </p>
            <p>
              <strong>Đậu phụ sốt cà chua:</strong> Đậu phụ là nguồn protein thực vật tốt, ít chất béo. 
              Kết hợp với cà chua giàu lycopene tạo món ăn lành mạnh.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Carbohydrate Việt Nam: Nguồn Năng lượng</h2>
        <div className="space-y-4">
          <p className="text-body">
            Carbohydrate là nguồn năng lượng chính trong bữa ăn Việt Nam. Từ cơm trắng đến bún, phở, 
            mỗi loại có đặc điểm dinh dưỡng khác nhau.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Carbohydrate Phổ biến</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Carbohydrate Việt Nam (100g nấu chín)"
              rows={[
                { nutrient: "Cơm trắng", amount: "130", unit: "calo, 28g carb", highlight: "moderate", note: "Năng lượng chính" },
                { nutrient: "Cơm gạo lứt", amount: "111", unit: "calo, 23g carb", highlight: "good", note: "Nhiều chất xơ hơn" },
                { nutrient: "Bún", amount: "110", unit: "calo, 25g carb", highlight: "moderate", note: "Từ gạo" },
                { nutrient: "Phở (bánh phở)", amount: "100", unit: "calo, 22g carb", highlight: "moderate", note: "Từ gạo" },
                { nutrient: "Bánh cuốn", amount: "120", unit: "calo, 25g carb", highlight: "moderate", note: "Từ gạo" },
                { nutrient: "Khoai lang", amount: "86", unit: "calo, 20g carb", highlight: "good", note: "Giàu beta-carotene, chất xơ" },
                { nutrient: "Khoai mì", amount: "112", unit: "calo, 27g carb", highlight: "moderate", note: "Năng lượng cao" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Món Ăn">
            <p className="mb-2">
              <strong>Phở bò:</strong> Bánh phở (carbohydrate) + thịt bò (protein) + rau thơm (vitamin) 
              tạo món ăn cân bằng. Một tô phở trung bình có khoảng 400-500 calo.
            </p>
            <p className="mb-2">
              <strong>Bún bò Huế:</strong> Bún (carbohydrate) + thịt bò (protein) + rau sống (vitamin) 
              + nước dùng. Món ăn đầy đủ dinh dưỡng, nhưng có thể nhiều muối từ nước dùng.
            </p>
            <p>
              <strong>Bánh cuốn:</strong> Bánh cuốn (carbohydrate) + thịt (protein) + nước mắm. 
              Món ăn nhẹ, dễ tiêu, phù hợp bữa sáng.
            </p>
          </ExampleBox>

          <Callout variant="warning" title="Lưu ý">
            <p className="text-sm">
              Cơm trắng, bún, phở là nguồn carbohydrate tốt, nhưng nên ăn vừa phải. 
              Người đái tháo đường nên chọn gạo lứt, khoai lang thay vì cơm trắng để có nhiều chất xơ hơn.
            </p>
          </Callout>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Trái cây Việt Nam: Vitamin và Chất chống Oxy hóa</h2>
        <div className="space-y-4">
          <p className="text-body">
            Việt Nam có nhiều loại trái cây nhiệt đới giàu vitamin, khoáng chất, và chất chống oxy hóa.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Trái cây Phổ biến</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Trái cây Việt Nam (100g)"
              rows={[
                { nutrient: "Xoài", amount: "60", unit: "calo", highlight: "good", note: "Giàu vitamin A, C" },
                { nutrient: "Ổi", amount: "68", unit: "calo", highlight: "good", note: "Giàu vitamin C (gấp 4 lần cam)" },
                { nutrient: "Thanh long", amount: "60", unit: "calo", highlight: "good", note: "Giàu chất xơ, vitamin C" },
                { nutrient: "Chôm chôm", amount: "82", unit: "calo", highlight: "good", note: "Giàu vitamin C" },
                { nutrient: "Nhãn", amount: "60", unit: "calo", highlight: "good", note: "Giàu vitamin C" },
                { nutrient: "Mít", amount: "95", unit: "calo", highlight: "moderate", note: "Năng lượng cao hơn" },
                { nutrient: "Dưa hấu", amount: "30", unit: "calo", highlight: "good", note: "Nhiều nước, ít calo" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Ví dụ">
            <p className="mb-2">
              <strong>Ổi:</strong> Một quả ổi (100g) cung cấp gấp 4 lần vitamin C so với một quả cam. 
              Ăn ổi giúp tăng cường miễn dịch và chống oxy hóa.
            </p>
            <p>
              <strong>Thanh long:</strong> Giàu chất xơ, giúp tiêu hóa tốt. Có thể ăn như snack lành mạnh.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Thực phẩm Việt Nam vs Phương Tây</h2>
        <ComparisonCard
          title="Ví dụ So sánh"
          items={[
            {
              label: "Bữa Trưa",
              good: "Cơm + canh chua cá + rau muống luộc = Cân bằng dinh dưỡng, nhiều rau củ, protein từ cá",
              bad: "Hamburger + khoai tây chiên = Nhiều chất béo, ít rau củ, nhiều calo",
              note: "Bữa ăn Việt Nam truyền thống thường cân bằng hơn với nhiều rau củ"
            },
            {
              label: "Bữa Sáng",
              good: "Phở bò + rau thơm = Carbohydrate + protein + rau, cân bằng",
              bad: "Bánh mì kẹp thịt + nước ngọt = Nhiều chất béo, đường, ít dinh dưỡng",
              note: "Phở có thể lành mạnh nếu chọn nước dùng ít muối và nhiều rau"
            },
            {
              label: "Snack",
              good: "Ổi, thanh long, nhãn = Trái cây tươi, giàu vitamin, ít calo",
              bad: "Bánh kẹo, snack = Nhiều đường, chất béo, ít dinh dưỡng",
              note: "Trái cây Việt Nam là snack lành mạnh, giàu dinh dưỡng"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên thực phẩm tươi:</strong> Mua rau củ, thịt cá tươi ở chợ thay vì thực phẩm chế biến sẵn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng thực phẩm:</strong> Kết hợp nhiều loại rau củ, protein khác nhau trong bữa ăn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn phương pháp nấu lành mạnh:</strong> Luộc, hấp, kho thay vì chiên nhiều dầu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý khẩu phần:</strong> Ăn đủ cơm, bún, phở nhưng không quá nhiều. 
                Tăng rau củ, giảm carbohydrate tinh chế nếu cần.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Trái cây tươi:</strong> Ăn trái cây Việt Nam như snack thay vì bánh kẹo.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm Việt Nam không đủ dinh dưỡng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thực phẩm Việt Nam tươi sống rất giàu dinh dưỡng. 
                Vấn đề là cách chọn lựa và chế biến, không phải bản thân thực phẩm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cơm trắng không tốt, phải ăn gạo lứt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Cơm trắng vẫn là nguồn năng lượng tốt. Gạo lứt tốt hơn vì có nhiều chất xơ, 
                nhưng cơm trắng vẫn có thể là một phần của chế độ ăn lành mạnh nếu ăn vừa phải.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Món ăn Việt Nam quá nhiều muối"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Một số món có nhiều muối (nước mắm, mắm tôm), nhưng có thể điều chỉnh. 
                Nhiều món Việt Nam như canh, luộc có thể ít muối nếu nấu đúng cách.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Hiểu về protein trong thực phẩm Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu về carbohydrate trong cơm, bún, phở
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-cooking-methods">
            <h3 className="heading-5 mb-2">Cách Nấu Ăn Lành mạnh Kiểu Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Phương pháp nấu ăn truyền thống Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-family-meals">
            <h3 className="heading-5 mb-2">Bữa Ăn Gia đình Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cách tổ chức bữa ăn gia đình kiểu Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Giá trị dinh dưỡng có thể khác nhau tùy theo 
          cách chế biến và nguồn thực phẩm. Nếu bạn có bệnh lý đặc biệt hoặc cần chế độ ăn đặc biệt, 
          hãy tham khảo chuyên gia dinh dưỡng để được tư vấn phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

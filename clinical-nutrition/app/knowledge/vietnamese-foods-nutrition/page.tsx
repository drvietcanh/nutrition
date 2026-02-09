import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Leaf, Fish, Apple, Wheat } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Việt Nam: Nguồn dinh dưỡng Tốt",
  description:
    "Khám phá giá trị dinh dưỡng của thực phẩm truyền thống Việt Nam - rau củ, protein, carbohydrate, và trái cây. Hướng dẫn cách chọn và sử dụng thực phẩm Việt Nam để có chế độ ăn lành mạnh.",
  keywords: [
    "thực phẩm Việt Nam",
    "dinh dưỡng Việt Nam",
    "ẩm thực Việt",
    "rau củ Việt Nam",
    "protein Việt Nam",
    "trái cây Việt Nam",
  ],
};

export default function VietnameseFoodsNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực phẩm Việt Nam: Nguồn dinh dưỡng Tốt" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Việt Nam: Nguồn dinh dưỡng Tốt</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Việt Nam có nền ẩm thực phong phú với nhiều thực phẩm giàu dinh dưỡng. 
          Từ rau củ tươi ngon đến hải sản đa dạng, từ gạo lứt đến trái cây nhiệt đới, 
          thực phẩm Việt Nam có thể cung cấp đầy đủ chất dinh dưỡng cần thiết cho sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Thực phẩm Việt Nam <strong>đa dạng và giàu dinh dưỡng</strong>
          </li>
          <li>
            <strong>Rau củ:</strong> Rau muống, rau cải, rau lang, đậu bắp, mướp - giàu vitamin, khoáng chất, chất xơ
          </li>
          <li>
            <strong>Protein:</strong> Cá, tôm, cua, ốc, đậu phụ, chả, giò - nguồn protein tốt
          </li>
          <li>
            <strong>Carbohydrate:</strong> Cơm, bún, phở, bánh cuốn, khoai lang - nguồn năng lượng
          </li>
          <li>
            <strong>Trái cây:</strong> Xoài, ổi, thanh long, chôm chôm, nhãn - giàu vitamin và chất chống oxy hóa
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Rau củ Việt Nam</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Rau củ Việt Nam rất đa dạng và giàu dinh dưỡng. Chúng cung cấp vitamin, khoáng chất, và chất xơ.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Rau củ Việt Nam (100g)"
            rows={[
              { nutrient: "Rau muống", amount: "2.5", unit: "g chất xơ", note: "Giàu vitamin A, C, sắt" },
              { nutrient: "Rau cải", amount: "2.0", unit: "g chất xơ", note: "Giàu vitamin K, folate" },
              { nutrient: "Rau lang", amount: "3.0", unit: "g chất xơ", note: "Giàu vitamin A, beta-carotene" },
              { nutrient: "Đậu bắp", amount: "3.2", unit: "g chất xơ", note: "Giàu vitamin C, folate" },
              { nutrient: "Mướp", amount: "1.0", unit: "g chất xơ", note: "Giàu vitamin C, nước" },
            ]}
          />
          <ExampleBox variant="tip" title="Cách sử dụng">
            <p className="text-sm">
              Rau củ Việt Nam có thể luộc, xào, nấu canh. Luộc hoặc nấu canh giúp giữ nhiều dinh dưỡng hơn. 
              Ví dụ: Canh rau muống, canh mướp, rau cải luộc.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Protein Việt Nam</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Việt Nam có nhiều nguồn protein tốt, từ hải sản đến đậu phụ, từ thịt đến chả giò.
          </p>
          <NutrientTable
            title="Giá trị Protein trong Thực phẩm Việt Nam (100g)"
            rows={[
              { nutrient: "Cá (cá basa, cá tra)", amount: "20-25", unit: "g protein", note: "Protein hoàn chỉnh, ít béo" },
              { nutrient: "Tôm", amount: "24", unit: "g protein", note: "Protein hoàn chỉnh, giàu selenium" },
              { nutrient: "Cua", amount: "19", unit: "g protein", note: "Protein hoàn chỉnh, giàu kẽm" },
              { nutrient: "Đậu phụ", amount: "8-10", unit: "g protein", note: "Protein thực vật, giàu calcium" },
              { nutrient: "Chả, giò", amount: "15-20", unit: "g protein", note: "Chú ý natri và chất béo" },
            ]}
          />
          <ExampleBox variant="info" title="Món ăn Việt Nam giàu Protein">
            <p className="mb-2 text-sm">
              <strong>Ví dụ món ăn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li><strong>Cá kho tộ:</strong> Cá + gia vị - giàu protein, omega-3</li>
              <li><strong>Tôm rang me:</strong> Tôm + me - giàu protein, vitamin C</li>
              <li><strong>Đậu phụ sốt cà chua:</strong> Đậu phụ + cà chua - protein thực vật, lycopene</li>
              <li><strong>Chả cá:</strong> Cá + gia vị - protein, ít béo</li>
            </ul>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Carbohydrate Việt Nam</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Carbohydrate là nguồn năng lượng chính trong bữa ăn Việt Nam, từ cơm đến bún, phở.
          </p>
          <NutrientTable
            title="Giá trị Carbohydrate trong Món ăn Việt Nam (1 phần)"
            rows={[
              { nutrient: "Cơm trắng (1 bát)", amount: "45-50", unit: "g carb", note: "năng lượng chính" },
              { nutrient: "Bún (1 tô)", amount: "50-60", unit: "g carb", note: "Từ gạo" },
              { nutrient: "Phở (1 tô)", amount: "60-70", unit: "g carb", note: "Từ bánh phở" },
              { nutrient: "Bánh cuốn (1 đĩa)", amount: "40-50", unit: "g carb", note: "Từ bột gạo" },
              { nutrient: "Khoai lang (100g)", amount: "20", unit: "g carb", note: "Giàu chất xơ, beta-carotene" },
            ]}
          />
          <ExampleBox variant="tip" title="Chọn carbohydrate Tốt">
            <p className="text-sm">
              Chọn <strong>gạo lứt</strong> thay vì gạo trắng để có nhiều chất xơ và vitamin B hơn. 
              Khoai lang là lựa chọn tốt vì giàu chất xơ và beta-carotene.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Trái cây Việt Nam</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Trái cây Việt Nam rất đa dạng, từ trái cây nhiệt đới đến trái cây theo mùa.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Trái cây Việt Nam (100g)"
            rows={[
              { nutrient: "Xoài", amount: "1.6", unit: "g chất xơ", note: "Giàu vitamin C, A, beta-carotene" },
              { nutrient: "Ổi", amount: "5.4", unit: "g chất xơ", note: "Giàu vitamin C (gấp 4 lần cam)" },
              { nutrient: "Thanh long", amount: "1.0", unit: "g chất xơ", note: "Giàu vitamin C, nước" },
              { nutrient: "Chôm chôm", amount: "0.9", unit: "g chất xơ", note: "Giàu vitamin C" },
              { nutrient: "Nhãn", amount: "1.1", unit: "g chất xơ", note: "Giàu vitamin C, kali" },
            ]}
          />
          <ExampleBox variant="info" title="Lợi ích Trái cây Việt Nam">
            <p className="text-sm">
              Trái cây Việt Nam giàu <strong>vitamin C</strong> (ổi, xoài, thanh long) giúp tăng cường miễn dịch, 
              và <strong>chất chống oxy hóa</strong> giúp bảo vệ tế bào. Ăn trái cây tươi tốt hơn nước ép vì có nhiều chất xơ.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Thực phẩm Việt Nam vs Phương tây</h2>
        <ComparisonCard
          title="Ưu điểm Thực phẩm Việt Nam"
          goodTitle="Thực phẩm Việt Nam"
          goodItems={[
            "Đa dạng rau củ tươi",
            "Hải sản phong phú (cá, tôm, cua)",
            "Trái cây nhiệt đới giàu vitamin C",
            "Gia vị tự nhiên (gừng, nghệ, sả)",
            "Phương pháp nấu lành mạnh (luộc, hấp, kho)",
          ]}
          badTitle="Thực phẩm Phương tây (một số)"
          badItems={[
            "Ít rau củ tươi hơn",
            "Nhiều thịt đỏ, ít hải sản",
            "Trái cây nhập khẩu có thể kém tươi",
            "Nhiều gia vị chế biến sẵn",
            "Nhiều phương pháp chiên, nướng",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Món ăn Việt Nam</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExampleBox variant="info" title="Phở gà">
            <p className="text-sm mb-2">
              <strong>Thành phần:</strong> Bánh phở, thịt gà, rau thơm, hành, giá
            </p>
            <p className="text-sm mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (bánh phở), Protein (thịt gà), Vitamin (rau thơm)
            </p>
            <p className="text-sm">
              <strong>Tips:</strong> Chọn phở gà thay vì phở bò để ít béo hơn. Thêm nhiều rau thơm.
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Bánh mì">
            <p className="text-sm mb-2">
              <strong>Thành phần:</strong> Bánh mì, thịt/chả, rau, pate
            </p>
            <p className="text-sm mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (bánh mì), Protein (thịt/chả), Rau
            </p>
            <p className="text-sm">
              <strong>Tips:</strong> Chọn bánh mì ít pate, nhiều rau. Thịt nạc tốt hơn thịt mỡ.
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Canh chua Cá">
            <p className="text-sm mb-2">
              <strong>Thành phần:</strong> Cá, cà chua, dứa, đậu bắp, rau thơm
            </p>
            <p className="text-sm mb-2">
              <strong>Dinh dưỡng:</strong> Protein (cá), Vitamin C (cà chua, dứa), Chất xơ (đậu bắp)
            </p>
            <p className="text-sm">
              <strong>Tips:</strong> Canh chua là món ăn lành mạnh, giàu dinh dưỡng. Ít dầu mỡ.
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Cơm + Thịt kho + Rau luộc">
            <p className="text-sm mb-2">
              <strong>Thành phần:</strong> Cơm, thịt kho, rau luộc
            </p>
            <p className="text-sm mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (cơm), Protein (thịt), Vitamin (rau)
            </p>
            <p className="text-sm">
              <strong>Tips:</strong> Chọn thịt nạc, ít mỡ. Rau luộc giữ nhiều dinh dưỡng hơn rau xào.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Leaf className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đa dạng:</strong> Kết hợp rau củ, protein, carbohydrate, trái cây trong bữa ăn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Fish className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên hải sản:</strong> Cá, tôm, cua là nguồn protein tốt, ít béo.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Apple className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Trái cây tươi:</strong> Ăn trái cây tươi tốt hơn nước ép vì có nhiều chất xơ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Wheat className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn gạo lứt:</strong> Gạo lứt có nhiều chất xơ và vitamin B hơn gạo trắng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              chi tiết về protein trong thực phẩm Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate trong món ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan Dinh dưỡng Đa lượng</h3>
            <p className="text-sm text-gray-600">
              Hiểu về các chất dinh dưỡng đa lượng
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-breakfast-options">
            <h3 className="heading-5 mb-2">Lựa chọn Bữa sáng Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Bữa sáng với thực phẩm Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Giá trị dinh dưỡng có thể thay đổi tùy theo 
          cách chế biến và nguồn thực phẩm. Để có chế độ ăn lành mạnh, hãy ăn đa dạng thực phẩm và 
          tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}

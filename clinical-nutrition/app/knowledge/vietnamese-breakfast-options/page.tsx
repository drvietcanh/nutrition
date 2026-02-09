import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Coffee, UtensilsCrossed, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lựa chọn Bữa sáng Việt Nam",
  description:
    "Các lựa chọn bữa sáng phổ biến ở Việt Nam - cháo, phở, bánh mì, xôi. Cách chọn bữa sáng lành mạnh với món ăn Việt Nam.",
  keywords: [
    "bữa sáng Việt Nam",
    "vietnamese breakfast",
    "cháo",
    "phở",
    "bánh mì",
    "xôi",
    "bữa ăn sáng",
  ],
};

export default function VietnameseBreakfastOptionsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Lựa chọn Bữa sáng Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Coffee className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Lựa chọn Bữa sáng Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Bữa sáng Việt Nam rất đa dạng và ngon miệng. Từ cháo nóng hổi đến phở thơm lừng, 
          bánh mì giòn tan đến xôi dẻo thơm - mỗi món đều có thể là bữa sáng lành mạnh nếu bạn biết cách chọn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Bữa sáng Việt Nam</strong> đa dạng: cháo, phở, bún, bánh mì, xôi
          </li>
          <li>
            <strong>Chọn lành mạnh:</strong> Thêm nhiều rau, chọn thịt nạc, hạn chế dầu mỡ
          </li>
          <li>
            <strong>Cháo</strong> - dễ tiêu, tốt cho sức khỏe, có thể có đủ dinh dưỡng
          </li>
          <li>
            <strong>Phở, bún</strong> - có thể lành mạnh nếu có nhiều rau và thịt nạc
          </li>
          <li>
            <strong>Bánh mì</strong> - tiện lợi, có thể cân bằng với rau và protein
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Các lựa chọn Bữa sáng Phổ biến ở Việt Nam</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">1. Cháo (Porridge)</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Cháo là bữa sáng phổ biến và lành mạnh ở Việt Nam. Dễ tiêu, ấm bụng, và có thể có đủ dinh dưỡng.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại cháo phổ biến:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Cháo thịt gà:</strong> Gà nạc + gạo + rau thơm - protein tốt</li>
                  <li>• <strong>Cháo cá:</strong> Cá nạc + gạo + rau thơm - protein + omega-3</li>
                  <li>• <strong>Cháo đậu xanh:</strong> Đậu xanh + gạo - protein thực vật</li>
                  <li>• <strong>Cháo lòng:</strong> Lòng heo + gạo - nhiều cholesterol, nên hạn chế</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Lợi ích:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Dễ tiêu, tốt cho dạ dày</li>
                  <li>✓ Có thể có đủ carbohydrate, protein, và rau</li>
                  <li>✓ Ấm bụng, phù hợp buổi sáng</li>
                  <li>✓ Có thể nấu sẵn, hâm nóng nhanh</li>
                </ul>
              </div>
              <ExampleBox variant="tip" title="Mẹo cho Cháo lành mạnh">
                <p className="text-sm">
                  Chọn cháo với thịt nạc (gà, cá) thay vì lòng hoặc thịt mỡ. 
                  Thêm nhiều rau thơm (hành, ngò, rau răm) để có vitamin. 
                  Có thể thêm trứng luộc để tăng protein.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">2. Phở (Pho)</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Phở là món ăn nổi tiếng của Việt Nam. Có thể là bữa sáng lành mạnh nếu chọn đúng.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại phở:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Phở bò:</strong> Bánh phở + thịt bò + nước dùng + rau</li>
                  <li>• <strong>Phở gà:</strong> Bánh phở + thịt gà + nước dùng + rau</li>
                  <li>• <strong>Phở tái:</strong> Thịt bò tái (ít mỡ hơn thịt chín)</li>
                </ul>
              </div>
              <ComparisonCard
                title="Phở lành mạnh vs Nên cải thiện"
                items={[
                  {
                    label: "Phở lành mạnh",
                    good: "Nhiều rau sống (rau thơm, giá, hành) + thịt nạc (tái, gà) + ít bánh phở + nước dùng ít mỡ",
                    bad: "Ít rau + thịt mỡ + nhiều bánh phở + nước dùng nhiều mỡ",
                    note: "Yêu cầu nhiều rau, thịt nạc, và có thể yêu cầu ít bánh phở nếu muốn giảm carbohydrate"
                  },
                ]}
              />
              <ExampleBox variant="tip" title="Mẹo cho Phở lành mạnh">
                <p className="text-sm mb-2">
                  <strong>Yêu cầu nhiều rau sống:</strong> Rau thơm, giá, hành, chanh - cung cấp vitamin và chất xơ.
                </p>
                <p className="text-sm mb-2">
                  <strong>Chọn thịt nạc:</strong> Phở tái (thịt bò tái) hoặc phở gà thay vì thịt chín nhiều mỡ.
                </p>
                <p className="text-sm">
                  <strong>Yêu cầu ít bánh phở:</strong> Nếu muốn giảm carbohydrate, có thể yêu cầu ít bánh phở, 
                  nhiều rau và thịt hơn.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <h3 className="heading-4 mb-3 text-amber-900">3. Bánh mì (Vietnamese baguette)</h3>
            <p className="text-body-sm text-amber-900 mb-3">
              Bánh mì là bữa sáng tiện lợi, có thể mang đi, và rất phổ biến ở Việt Nam.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại bánh mì phổ biến:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Bánh mì thịt nướng:</strong> Bánh mì + thịt nướng + rau + pate</li>
                  <li>• <strong>Bánh mì chả:</strong> Bánh mì + chả lụa + rau</li>
                  <li>• <strong>Bánh mì trứng:</strong> Bánh mì + trứng ốp la + rau</li>
                  <li>• <strong>Bánh mì xíu mại:</strong> Bánh mì + thịt viên + rau</li>
                </ul>
              </div>
              <ComparisonCard
                title="Bánh mì lành mạnh vs Nên cải thiện"
                items={[
                  {
                    label: "Bánh mì lành mạnh",
                    good: "Bánh mì + thịt nạc/chả/trứng + nhiều rau (rau thơm, dưa chuột, cà rốt) + ít pate/mayonnaise",
                    bad: "Bánh mì + nhiều pate/mayonnaise + ít rau + thịt mỡ",
                    note: "Yêu cầu nhiều rau, ít pate/mayonnaise để có bữa sáng cân bằng hơn"
                  },
                ]}
              />
              <ExampleBox variant="tip" title="Mẹo cho Bánh mì lành mạnh">
                <p className="text-sm mb-2">
                  <strong>Yêu cầu nhiều rau:</strong> Rau thơm, dưa chuột, cà rốt, hành - cung cấp vitamin và chất xơ.
                </p>
                <p className="text-sm mb-2">
                  <strong>Chọn protein nạc:</strong> Thịt nướng nạc, chả, trứng thay vì thịt mỡ.
                </p>
                <p className="text-sm">
                  <strong>Hạn chế pate/mayonnaise:</strong> Pate và mayonnaise nhiều chất béo và calo. 
                  Có thể yêu cầu ít hoặc không có.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">4. Xôi (Sticky rice)</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Xôi là món ăn sáng phổ biến, làm từ gạo nếp. Có thể lành mạnh nếu chọn đúng loại.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại xôi:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Xôi đậu xanh:</strong> Gạo nếp + đậu xanh - có protein thực vật</li>
                  <li>• <strong>Xôi gấc:</strong> Gạo nếp + gấc - có vitamin A</li>
                  <li>• <strong>Xôi ngọt:</strong> Gạo nếp + đường, đậu phộng - nhiều đường</li>
                  <li>• <strong>Xôi mặn:</strong> Gạo nếp + thịt/chả - có protein</li>
                </ul>
              </div>
              <ComparisonCard
                title="Xôi lành mạnh vs Nên hạn chế"
                items={[
                  {
                    label: "Xôi lành mạnh",
                    good: "Xôi đậu xanh, xôi gấc, xôi mặn với thịt nạc - có protein, ít đường",
                    bad: "Xôi ngọt với nhiều đường, đậu phộng rang muối - nhiều đường và natri",
                    note: "Chọn xôi có protein (đậu, thịt) và ít đường hơn"
                  },
                ]}
              />
              <ExampleBox variant="warning" title="Lưu ý về Xôi">
                <p className="text-sm">
                  Xôi chủ yếu là carbohydrate (gạo nếp), nên kết hợp với protein (thịt, đậu) và 
                  hạn chế xôi ngọt quá nhiều đường. Xôi có thể là bữa sáng tốt nếu có đủ protein.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">5. Bún (Rice noodles)</h3>
            <p className="text-body-sm mb-3">
              Bún là món ăn sáng phổ biến, tương tự phở nhưng dùng bún thay vì bánh phở.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Bún bò:</strong> Bún + thịt bò + nước dùng + rau</p>
              <p>• <strong>Bún riêu:</strong> Bún + cua + nước dùng chua + rau</p>
              <p>• <strong>Bún chả:</strong> Bún + thịt nướng + rau sống</p>
            </div>
            <ExampleBox variant="tip" title="Mẹo cho Bún lành mạnh">
              <p className="text-sm">
                Tương tự phở: yêu cầu nhiều rau sống, chọn thịt nạc, và có thể yêu cầu ít bún 
                nếu muốn giảm carbohydrate. Bún chả với nhiều rau sống là lựa chọn tốt.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh giá trị Dinh dưỡng</h2>
        <NutrientTable
          title="giá trị Dinh dưỡng Bữa sáng Việt Nam (Ước tính)"
          rows={[
            { nutrient: "Cháo thịt gà (1 bát)", amount: "~250", unit: "calo", note: "Protein: 15g, Carb: 35g, Rau: có" },
            { nutrient: "Phở bò (1 tô, nhiều rau)", amount: "~400", unit: "calo", note: "Protein: 20g, Carb: 50g, Rau: nhiều" },
            { nutrient: "Bánh mì thịt nướng (1 ổ, nhiều rau)", amount: "~350", unit: "calo", note: "Protein: 15g, Carb: 45g, Rau: nhiều" },
            { nutrient: "Xôi đậu xanh (1 phần)", amount: "~300", unit: "calo", note: "Protein: 8g, Carb: 60g, Rau: ít" },
            { nutrient: "Bún chả (1 phần, nhiều rau)", amount: "~400", unit: "calo", note: "Protein: 20g, Carb: 50g, Rau: nhiều" },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips chọn Bữa sáng lành mạnh</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Luôn yêu cầu nhiều rau:</strong> Rau sống, rau thơm cung cấp vitamin, khoáng chất, chất xơ. 
                Yêu cầu thêm rau khi mua phở, bún, bánh mì.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn thịt nạc:</strong> Thịt gà, thịt bò tái, cá thay vì thịt mỡ, lòng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế dầu mỡ:</strong> Yêu cầu ít dầu mỡ khi có thể. Tránh đồ chiên nhiều dầu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Điều chỉnh khẩu phần:</strong> Có thể yêu cầu ít bánh phở/bún nếu muốn giảm carbohydrate, 
                nhiều rau và thịt hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp:</strong> Có thể kết hợp các món. Ví dụ: 1 bánh mì nhỏ + 1 bát cháo nhỏ = 
                đủ dinh dưỡng mà không quá nhiều.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa sáng Việt Nam lành mạnh</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng 1: Cháo + Bánh mì</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>1 bát cháo thịt gà</strong> (protein + carb) + 
              <strong> 1 bánh mì nhỏ</strong> (carb) + <strong>rau thơm</strong> (vitamin)
            </p>
            <p className="text-xs text-gray-600">
              ~400 calo, đủ protein, carbohydrate, và rau
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng 2: Phở với Nhiều rau</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>1 tô phở bò tái</strong> với <strong>nhiều rau sống</strong> (rau thơm, giá, hành) + 
              <strong> thịt nạc</strong>
            </p>
            <p className="text-xs text-gray-600">
              ~400 calo, đủ protein, carbohydrate, và nhiều rau
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng 3: Bánh mì Cân bằng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>1 ổ bánh mì</strong> với <strong>thịt nướng nạc</strong> + 
              <strong> nhiều rau</strong> (rau thơm, dưa chuột, cà rốt) + <strong>ít pate</strong>
            </p>
            <p className="text-xs text-gray-600">
              ~350 calo, đủ protein, carbohydrate, và rau
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng 4: Xôi + Protein</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>1 phần xôi đậu xanh</strong> (carb + protein thực vật) + 
              <strong> 1 quả trứng</strong> (protein) + <strong>rau</strong>
            </p>
            <p className="text-xs text-gray-600">
              ~400 calo, đủ protein, carbohydrate
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/breakfast-importance">
            <h3 className="heading-5 mb-2">Tầm quan trọng của Bữa sáng</h3>
            <p className="text-sm text-gray-600">
              Tại sao bữa sáng quan trọng và lợi ích
            </p>
          </Card>
          <Card href="/knowledge/street-food-vietnam">
            <h3 className="heading-5 mb-2">Thực phẩm Đường phố Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cách chọn đồ ăn đường phố lành mạnh
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người bận rộn</h3>
            <p className="text-sm text-gray-600">
              Quick tips cho bữa sáng khi bận rộn
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Bữa sáng Việt Nam có thể lành mạnh nếu bạn biết cách chọn. 
          Quan trọng là đảm bảo có đủ protein, carbohydrate, và rau củ. Nếu bạn có bệnh lý đặc biệt 
          (như đái tháo đường, tăng huyết áp), hãy tham khảo chuyên gia dinh dưỡng về cách điều chỉnh 
          bữa sáng phù hợp.
        </p>
      </Callout>
    </main>
  );
}

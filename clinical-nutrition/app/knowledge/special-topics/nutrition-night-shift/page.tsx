import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Moon, Coffee, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người Làm Ca Đêm",
  description:
    "Hướng dẫn cách ăn uống khi làm ca đêm - timeline bữa ăn (trước, trong, sau ca đêm), quản lý giấc ngủ, thực phẩm nên tránh. Tips thực hành.",
  keywords: [
    "ca đêm",
    "night shift",
    "dinh dưỡng ca đêm",
    "giấc ngủ",
    "caffeine",
    "bữa ăn ca đêm",
  ],
};

export default function NutritionNightShiftPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề Đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người Làm Ca Đêm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Moon className="w-8 h-8 text-indigo-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người Làm Ca Đêm</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Làm ca đêm thay đổi nhịp sinh học và thói quen ăn uống. Hiểu về cách ăn uống đúng cách 
          giúp bạn duy trì năng lượng trong ca đêm và có giấc ngủ tốt sau ca.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Timeline bữa ăn:</strong> Trước, trong, sau ca đêm - điều chỉnh theo lịch làm việc
          </li>
          <li>
            <strong>Quản lý giấc ngủ:</strong> Thực phẩm giúp ngủ tốt, thực phẩm nên tránh
          </li>
          <li>
            <strong>Tránh:</strong> Caffeine, đồ ngọt quá nhiều - ảnh hưởng giấc ngủ
          </li>
          <li>
            <strong>Ưu tiên:</strong> Protein, carbohydrate phức tạp, rau củ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Timeline Bữa ăn cho Ca Đêm</h2>
        <Card>
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h3 className="text-sm font-semibold text-blue-900 mb-2">Trước Ca Đêm (18:00-20:00)</h3>
              <p className="text-xs text-blue-800 mb-2">
                <strong>Bữa tối đầy đủ:</strong> Carbohydrate, protein, rau củ
              </p>
              <p className="text-xs text-blue-800">
                <strong>Ví dụ:</strong> Cơm + thịt kho + canh rau muống + rau cải luộc
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-4 border border-green-200">
              <h3 className="text-sm font-semibold text-green-900 mb-2">Trong Ca Đêm (22:00-02:00)</h3>
              <p className="text-xs text-green-800 mb-2">
                <strong>Snack nhẹ:</strong> Protein, carbohydrate phức tạp
              </p>
              <p className="text-xs text-green-800">
                <strong>Ví dụ:</strong> Bánh mì + trứng, hoặc cháo gà, hoặc bún chả
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h3 className="text-sm font-semibold text-purple-900 mb-2">Sau Ca Đêm (06:00-08:00)</h3>
              <p className="text-xs text-purple-800 mb-2">
                <strong>Bữa nhẹ trước khi ngủ:</strong> Protein, carbohydrate phức tạp, ít đường
              </p>
              <p className="text-xs text-purple-800">
                <strong>Ví dụ:</strong> Cháo gà, hoặc bánh mì + trứng, hoặc sữa chua + trái cây
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ Timeline">
          <p className="text-sm mb-2">
            <strong>Ca đêm 22:00-06:00:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li><strong>18:00:</strong> Bữa tối đầy đủ (cơm + thịt + rau)</li>
            <li><strong>22:00:</strong> Bắt đầu ca đêm</li>
            <li><strong>00:00:</strong> Snack nhẹ (bánh mì + trứng)</li>
            <li><strong>06:00:</strong> Kết thúc ca đêm</li>
            <li><strong>07:00:</strong> Bữa nhẹ trước khi ngủ (cháo gà)</li>
            <li><strong>08:00:</strong> Đi ngủ</li>
          </ul>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Quản lý Giấc ngủ</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Thực phẩm có thể ảnh hưởng đến giấc ngủ. Chọn đúng thực phẩm giúp bạn ngủ tốt hơn sau ca đêm.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thực phẩm Giúp Ngủ:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Protein (thịt, cá, đậu phụ)</li>
                <li>• Carbohydrate phức tạp (cơm, bánh mì)</li>
                <li>• Sữa, sữa chua</li>
                <li>• Trái cây (chuối, ổi)</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thực phẩm Nên tránh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Caffeine (cà phê, trà) - 4-6 giờ trước khi ngủ</li>
                <li>• Đồ ngọt quá nhiều</li>
                <li>• Đồ chiên, nhiều dầu mỡ</li>
                <li>• Rượu bia</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Nên tránh</h2>
        <Callout variant="warning" title="Caffeine và Đồ Ngọt">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Caffeine:</strong> Cà phê, trà có thể giúp tỉnh táo trong ca đêm, 
              nhưng tránh uống 4-6 giờ trước khi ngủ để không ảnh hưởng giấc ngủ.
            </p>
            <p>
              <strong>Đồ ngọt:</strong> Bánh kẹo, nước ngọt có thể tăng năng lượng tạm thời, 
              nhưng sau đó gây mệt mỏi và ảnh hưởng giấc ngủ.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExampleBox variant="info" title="Trước Ca Đêm">
            <p className="text-sm mb-2">
              <strong>Bữa tối (18:00):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cơm (2 bát) - carbohydrate</li>
              <li>Thịt kho (150g) - protein</li>
              <li>Canh rau muống (1 bát) - vitamin, nước</li>
              <li>Rau cải luộc (1 phần) - vitamin, chất xơ</li>
            </ul>
          </ExampleBox>

          <ExampleBox variant="info" title="Trong Ca Đêm">
            <p className="text-sm mb-2">
              <strong>Snack (00:00):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Bánh mì (1 ổ) - carbohydrate</li>
              <li>Trứng ốp la (1 quả) - protein</li>
              <li>Nước lọc (500ml) - hydration</li>
            </ul>
          </ExampleBox>

          <ExampleBox variant="info" title="Sau Ca Đêm">
            <p className="text-sm mb-2">
              <strong>Bữa nhẹ (07:00):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cháo gà (1 tô) - carbohydrate, protein</li>
              <li>Hoặc sữa chua + trái cây</li>
              <li>Tránh cà phê, đồ ngọt</li>
            </ul>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Thực phẩm</h2>
        <ComparisonCard
          title="Thực phẩm cho Ca Đêm"
          goodTitle="Thực phẩm Tốt"
          goodItems={[
            "Protein (thịt, cá, đậu phụ) - duy trì năng lượng",
            "Carbohydrate phức tạp (cơm, bánh mì) - năng lượng bền vững",
            "Rau củ - vitamin, chất xơ",
            "Sữa, sữa chua - giúp ngủ tốt",
            "Nước lọc - hydration",
          ]}
          badTitle="Thực phẩm Nên tránh"
          badItems={[
            "Caffeine (4-6 giờ trước khi ngủ) - ảnh hưởng giấc ngủ",
            "Đồ ngọt quá nhiều - tăng năng lượng tạm thời",
            "Đồ chiên, nhiều dầu mỡ - khó tiêu",
            "Rượu bia - ảnh hưởng giấc ngủ",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn bữa tối đầy đủ:</strong> Trước ca đêm, ăn bữa tối đầy đủ (carbohydrate, protein, rau).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Snack nhẹ trong ca:</strong> Ăn snack nhẹ (bánh mì + trứng, cháo gà) để duy trì năng lượng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bữa nhẹ trước khi ngủ:</strong> Ăn bữa nhẹ (cháo gà, sữa chua) trước khi ngủ để không đói.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh caffeine:</strong> Tránh cà phê, trà 4-6 giờ trước khi ngủ.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-sleep">
            <h3 className="heading-5 mb-2">Dinh dưỡng và Giấc ngủ</h3>
            <p className="text-sm text-gray-600">
              Thực phẩm ảnh hưởng đến giấc ngủ
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng Lối sống Bận rộn</h3>
            <p className="text-sm text-gray-600">
              Cách ăn uống khi bận rộn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Làm ca đêm có thể ảnh hưởng đến sức khỏe. 
          Hãy điều chỉnh bữa ăn phù hợp với lịch làm việc và tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}

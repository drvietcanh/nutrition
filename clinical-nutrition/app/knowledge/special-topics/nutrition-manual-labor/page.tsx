import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { HardHat, Zap, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người Lao động Chân tay",
  description:
    "Hướng dẫn dinh dưỡng cho người lao động chân tay - nhu cầu năng lượng cao (2,500-3,500 calo/ngày), nhu cầu protein cao, và hydration. Ví dụ bữa ăn cho công nhân, nông dân.",
  keywords: [
    "dinh dưỡng lao động",
    "công nhân",
    "nông dân",
    "năng lượng cao",
    "protein cao",
    "hydration",
  ],
};

export default function NutritionManualLaborPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người Lao động Chân tay" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <HardHat className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người Lao động Chân tay</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Người lao động chân tay (công nhân, nông dân, thợ xây) cần nhiều năng lượng và protein hơn 
          người làm việc văn phòng. Hiểu về nhu cầu dinh dưỡng đặc biệt giúp bạn duy trì sức khỏe và năng lượng.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nhu cầu năng lượng:</strong> 2,500-3,500 calo/ngày (cao hơn người bình thường)
          </li>
          <li>
            <strong>Nhu cầu protein:</strong> 1.2-1.5g/kg thể trọng (cao hơn người bình thường)
          </li>
          <li>
            <strong>Hydration:</strong> Uống đủ nước khi lao động (2-3 lít/ngày)
          </li>
          <li>
            <strong>Bữa ăn:</strong> Nhiều carbohydrate, protein, và nước
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu năng lượng</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Người lao động chân tay cần nhiều năng lượng hơn vì hoạt động thể chất nhiều.
          </p>
          <NutrientTable
            title="Nhu cầu năng lượng Theo Mức độ Lao động"
            rows={[
              { nutrient: "Lao động nhẹ (văn phòng)", amount: "2,000-2,200", unit: "calo/ngày", note: "Người bình thường" },
              { nutrient: "Lao động vừa (công nhân)", amount: "2,500-3,000", unit: "calo/ngày", note: "Tăng 25-50%" },
              { nutrient: "Lao động nặng (nông dân, thợ xây)", amount: "3,000-3,500", unit: "calo/ngày", note: "Tăng 50-75%" },
            ]}
          />
          <ExampleBox variant="info" title="Ví dụ">
            <p className="text-sm">
              Người lao động nặng (nông dân, thợ xây) cần <strong>3,000-3,500 calo/ngày</strong>, 
              gấp 1.5-1.75 lần người làm việc văn phòng. Cần ăn nhiều hơn, đặc biệt là carbohydrate và protein.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Protein</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Protein cần thiết để xây dựng và sửa chữa cơ bắp sau khi lao động.
          </p>
          <NutrientTable
            title="Nhu cầu Protein Theo Mức độ Lao động"
            rows={[
              { nutrient: "Người bình thường", amount: "0.8-1.0", unit: "g/kg thể trọng", note: "Ví dụ: 60g cho người 60kg" },
              { nutrient: "Lao động vừa", amount: "1.2-1.3", unit: "g/kg thể trọng", note: "Ví dụ: 72-78g cho người 60kg" },
              { nutrient: "Lao động nặng", amount: "1.4-1.5", unit: "g/kg thể trọng", note: "Ví dụ: 84-90g cho người 60kg" },
            ]}
          />
          <ExampleBox variant="tip" title="Nguồn Protein Tốt">
            <p className="text-sm mb-2">
              <strong>Ở Việt Nam:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Thịt, cá, tôm, cua - protein hoàn chỉnh</li>
              <li>Đậu phụ, đậu đen, đậu đỏ - protein thực vật</li>
              <li>Trứng, sữa - protein hoàn chỉnh</li>
            </ul>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn cho Công nhân</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <ExampleBox variant="info" title="Bữa sáng">
            <p className="text-sm mb-2">
              <strong>Thực đơn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Phở gà (1 tô lớn) - carbohydrate, protein</li>
              <li>Trứng ốp la (2 quả) - protein</li>
              <li>Bánh mì (1 ổ) - carbohydrate</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Tổng:</strong> ~800-900 calo, ~40g protein
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Bữa trưa">
            <p className="text-sm mb-2">
              <strong>Thực đơn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cơm (2-3 bát) - carbohydrate</li>
              <li>Thịt kho (150g) - protein</li>
              <li>Canh rau muống (1 bát) - vitamin, nước</li>
              <li>Rau cải luộc (1 phần) - vitamin, chất xơ</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Tổng:</strong> ~1,000-1,200 calo, ~50g protein
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Bữa tối">
            <p className="text-sm mb-2">
              <strong>Thực đơn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Cơm (2 bát) - carbohydrate</li>
              <li>Cá kho tộ (150g) - protein, omega-3</li>
              <li>Canh mướp (1 bát) - vitamin, nước</li>
              <li>Rau muống luộc (1 phần) - vitamin, chất xơ</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Tổng:</strong> ~900-1,000 calo, ~45g protein
            </p>
          </ExampleBox>

          <ExampleBox variant="info" title="Snack (Giữa ca)">
            <p className="text-sm mb-2">
              <strong>Thực đơn:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Bánh mì (1 ổ) - carbohydrate</li>
              <li>Trứng (1 quả) - protein</li>
              <li>Nước lọc (500ml) - hydration</li>
            </ul>
            <p className="text-sm mt-2">
              <strong>Tổng:</strong> ~300-400 calo, ~15g protein
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hydration - Uống đủ nước</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Người lao động chân tay cần uống nhiều nước hơn vì mất nước qua mồ hôi.
          </p>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Nhu cầu Nước:</p>
              <p className="text-xs text-gray-700">
                2-3 lít nước/ngày (nhiều hơn người bình thường 1.5-2 lít). 
                Uống thường xuyên, không đợi khát.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Khi Lao động:</p>
              <p className="text-xs text-gray-700">
                Uống 200-300ml nước mỗi 15-20 phút. Tránh uống quá nhiều một lúc.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Nước Tốt:</p>
              <p className="text-xs text-gray-700">
                Nước lọc, nước dừa, nước chanh muối (nếu mất nhiều mồ hôi).
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đủ:</strong> 3 bữa chính + 1-2 snack để đảm bảo đủ năng lượng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều carbohydrate:</strong> Cơm, bún, phở - nguồn năng lượng chính.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều protein:</strong> Thịt, cá, đậu phụ - xây dựng và sửa chữa cơ bắp.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống đủ nước:</strong> 2-3 lít/ngày, uống thường xuyên.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Nhu cầu năng lượng cho người lao động
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Nhu cầu protein cho người lao động
            </p>
          </Card>
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration</h3>
            <p className="text-sm text-gray-600">
              Uống đủ nước khi lao động
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu dinh dưỡng có thể thay đổi tùy theo 
          tuổi, giới tính, mức độ lao động. Hãy điều chỉnh khẩu phần phù hợp với nhu cầu của bạn 
          và tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}

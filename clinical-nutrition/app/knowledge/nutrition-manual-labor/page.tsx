import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { Activity, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người lao động Chân tay",
  description:
    "Nhu cầu năng lượng và protein cao cho người lao động chân tay. Cách bổ sung, bữa ăn thực tế cho công nhân, nông dân. Hydration và tips thực hành.",
  keywords: [
    "lao động chân tay",
    "công nhân",
    "nông dân",
    "năng lượng cao",
    "protein cao",
    "manual labor",
  ],
};

export default function NutritionManualLaborPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người lao động Chân tay" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người lao động Chân tay</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Người lao động chân tay (công nhân, nông dân, thợ xây...) cần nhiều năng lượng và protein hơn 
          người làm việc văn phòng. Tìm hiểu cách đáp ứng nhu cầu dinh dưỡng cao này với bữa ăn thực tế, 
          phù hợp với cuộc sống lao động.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nhu cầu năng lượng cao:</strong> 2,500-3,500 calo/ngày (tùy mức độ lao động)
          </li>
          <li>
            <strong>Nhu cầu protein cao:</strong> 1.2-1.5g/kg cân nặng/ngày (nhiều hơn người ít vận động)
          </li>
          <li>
            <strong>Hydration quan trọng:</strong> Uống 2-3 lít nước/ngày, đặc biệt khi lao động ngoài trời
          </li>
          <li>
            <strong>Bữa ăn thực tế:</strong> Cần bữa ăn no, giàu năng lượng, dễ mang theo
          </li>
          <li>
            <strong>Phân bố bữa ăn:</strong> Ăn đều trong ngày, không bỏ bữa
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">nhu cầu dinh dưỡng cho Người lao động Chân tay</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nhu cầu năng lượng</h3>
            <NutrientTable
              title="Nhu cầu năng lượng Theo mức độ Lao động"
              rows={[
                { nutrient: "Lao động nhẹ (văn phòng)", amount: "2,000", unit: "calo/ngày", highlight: "good", note: "Nhu cầu cơ bản" },
                { nutrient: "Lao động vừa (công nhân nhẹ)", amount: "2,500", unit: "calo/ngày", highlight: "moderate", note: "Tăng 25%" },
                { nutrient: "Lao động nặng (thợ xây, nông dân)", amount: "3,000", unit: "calo/ngày", highlight: "moderate", note: "Tăng 50%" },
                { nutrient: "Lao động rất nặng (thợ mỏ, vận chuyển)", amount: "3,500", unit: "calo/ngày", highlight: "moderate", note: "Tăng 75%" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Nhu cầu Protein</h3>
            <NutrientTable
              title="Nhu cầu Protein theo mức độ Lao động"
              rows={[
                { nutrient: "Lao động nhẹ", amount: "1.0", unit: "g/kg/ngày", highlight: "good", note: "Ví dụ: 70kg = 70g protein" },
                { nutrient: "Lao động vừa", amount: "1.2", unit: "g/kg/ngày", highlight: "moderate", note: "Ví dụ: 70kg = 84g protein" },
                { nutrient: "Lao động nặng", amount: "1.5", unit: "g/kg/ngày", highlight: "moderate", note: "Ví dụ: 70kg = 105g protein" },
              ]}
            />
          </Card>

          <ExampleBox variant="info" title="Ví dụ Tính toán">
            <p className="mb-2">
              <strong>Người lao động nặng, 70kg:</strong>
            </p>
            <p className="mb-2">
              <strong>năng lượng:</strong> 3,000 calo/ngày
            </p>
            <p>
              <strong>Protein:</strong> 70kg × 1.5g/kg = 105g protein/ngày
            </p>
            <p className="text-xs text-gray-600 mt-2">
              Phân bố: ~35g protein mỗi bữa (sáng, trưa, tối) = 105g/ngày
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bữa ăn thực tế cho Người lao động</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa sáng (600-800 calo, 25-30g protein)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold mb-2">Ví dụ bữa sáng no, giàu năng lượng:</p>
              <ul className="space-y-1 pl-6">
                <li>• <strong>Phở bò lớn</strong> (500 calo, 25g protein) + trứng (140 calo, 12g protein)</li>
                <li>• <strong>Cơm + thịt kho + trứng</strong> (600 calo, 30g protein)</li>
                <li>• <strong>Bánh mì + thịt + trứng + sữa</strong> (700 calo, 28g protein)</li>
                <li>• <strong>Cháo thịt lớn + trứng</strong> (500 calo, 25g protein)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa trưa (800-1,000 calo, 35-40g protein)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold mb-2">Ví dụ bữa trưa no, dễ mang theo:</p>
              <ul className="space-y-1 pl-6">
                <li>• <strong>Cơm (2 bát) + thịt gà kho (150g) + rau + canh</strong> (900 calo, 40g protein)</li>
                <li>• <strong>Cơm (2 bát) + cá kho (150g) + rau + canh</strong> (850 calo, 38g protein)</li>
                <li>• <strong>Cơm (2 bát) + thịt heo kho (150g) + trứng + rau</strong> (950 calo, 42g protein)</li>
                <li>• <strong>Bún bò lớn + thịt bò (150g) + rau</strong> (800 calo, 35g protein)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa tối (800-1,000 calo, 35-40g protein)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold mb-2">Ví dụ bữa tối no, phục hồi:</p>
              <ul className="space-y-1 pl-6">
                <li>• <strong>Cơm (2 bát) + thịt kho tiêu (150g) + rau + canh</strong> (900 calo, 40g protein)</li>
                <li>• <strong>Cơm (2 bát) + cá hấp (150g) + rau + canh</strong> (850 calo, 38g protein)</li>
                <li>• <strong>Cơm (2 bát) + tôm rang (150g) + rau + canh</strong> (880 calo, 36g protein)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Snack giữa ca (200-300 calo)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p className="font-semibold mb-2">Ví dụ snack nhanh, giàu năng lượng:</p>
              <ul className="space-y-1 pl-6">
                <li>• <strong>Bánh mì + thịt</strong> (300 calo, 15g protein)</li>
                <li>• <strong>Trứng luộc + bánh mì</strong> (250 calo, 14g protein)</li>
                <li>• <strong>Chuối + sữa chua</strong> (200 calo, 8g protein)</li>
                <li>• <strong>Khoai lang nướng</strong> (200 calo, 4g protein)</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hydration: Uống đủ nước</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3">Nhu cầu Nước cho Người lao động</h3>
            <div className="space-y-2 text-sm text-blue-900">
              <p>
                <strong>Lao động nhẹ:</strong> 2 lít nước/ngày (8 ly)
              </p>
              <p>
                <strong>Lao động vừa:</strong> 2.5 lít nước/ngày (10 ly)
              </p>
              <p>
                <strong>Lao động nặng:</strong> 3 lít nước/ngày (12 ly) hoặc nhiều hơn
              </p>
              <p className="mt-2">
                <strong>Lưu ý:</strong> Khi lao động ngoài trời, nắng nóng, cần uống nhiều hơn. 
                Uống nước thường xuyên, không đợi khát mới uống.
              </p>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Tips hydration">
            <p className="mb-2">
              <strong>Mang nước theo:</strong> Luôn mang theo chai nước khi lao động. 
              Uống từng ngụm nhỏ thường xuyên.
            </p>
            <p className="mb-2">
              <strong>Tránh nước ngọt:</strong> Nước lọc tốt nhất. Tránh nước ngọt, rượu bia - 
              làm mất nước và không cung cấp dinh dưỡng.
            </p>
            <p>
              <strong>Nước muối nhẹ:</strong> Khi lao động nặng, đổ mồ hôi nhiều, có thể uống nước muối nhẹ 
              để bù điện giải. Nhưng không cần nếu lao động bình thường.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bữa sáng no:</strong> Ăn bữa sáng đầy đủ trước khi lao động. 
                Bữa sáng cung cấp năng lượng cho cả buổi sáng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mang theo bữa trưa:</strong> Chuẩn bị bữa trưa từ nhà để đảm bảo đủ dinh dưỡng. 
                Cơm + thịt/cá + rau + canh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Snack giữa ca:</strong> Mang theo snack (bánh mì, trứng, chuối) để ăn giữa ca. 
                Tránh đói, giữ năng lượng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống nước thường xuyên:</strong> Uống nước từng ngụm nhỏ thường xuyên, 
                không đợi khát. Mang theo chai nước.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bữa tối phục hồi:</strong> Ăn bữa tối đầy đủ để phục hồi sau ngày lao động. 
                Protein giúp sửa chữa cơ bắp.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không bỏ bữa:</strong> Bỏ bữa làm giảm năng lượng, ảnh hưởng đến hiệu suất lao động. 
                Ăn đều đặn.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế: Bữa ăn Cho công nhân</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa ăn Một ngày (3,000 calo, 105g protein)</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">Bữa sáng (7:00):</p>
              <p className="text-sm text-blue-900">
                Phở bò lớn + trứng = 640 calo, 37g protein
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">Snack giữa sáng (10:00):</p>
              <p className="text-sm text-green-900">
                Bánh mì + thịt = 300 calo, 15g protein
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">Bữa trưa (12:00):</p>
              <p className="text-sm text-amber-900">
                Cơm (2 bát) + thịt gà kho (150g) + rau + canh = 900 calo, 40g protein
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">Snack chiều (15:00):</p>
              <p className="text-sm text-purple-900">
                Chuối + sữa chua = 200 calo, 8g protein
              </p>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-red-900 mb-1">Bữa tối (19:00):</p>
              <p className="text-sm text-red-900">
                Cơm (2 bát) + cá kho (150g) + rau + canh = 850 calo, 38g protein
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 border border-gray-200 mt-3">
              <p className="text-sm font-semibold text-gray-900">
                Tổng: 2,890 calo, 138g protein - Đáp ứng nhu cầu lao động nặng!
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Lao động nhiều nên ăn thả ga"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Cần ăn nhiều hơn nhưng vẫn cần cân bằng. 
                Ăn quá nhiều chất béo, đường không tốt. Vẫn cần rau củ, protein nạc.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không cần uống nước, chỉ cần ăn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nước rất quan trọng, đặc biệt khi lao động ngoài trời. 
                Thiếu nước làm giảm hiệu suất, mệt mỏi, nguy hiểm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Bỏ bữa tiết kiệm thời gian"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bỏ bữa làm giảm năng lượng, ảnh hưởng đến hiệu suất lao động. 
                Ăn đều đặn tốt hơn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
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
              Nhu cầu protein cao cho người lao động
            </p>
          </Card>
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration: Uống đủ nước</h3>
            <p className="text-sm text-gray-600">
              Tầm quan trọng của nước khi lao động
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-family-meals">
            <h3 className="heading-5 mb-2">Bữa ăn gia đình Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cấu trúc bữa ăn cho người lao động
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu dinh dưỡng của mỗi người khác nhau 
          tùy theo mức độ lao động, tuổi, giới tính, và tình trạng sức khỏe. Nếu bạn có bệnh lý đặc biệt 
          hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

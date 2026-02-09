import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Coffee, Droplet, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đồ uống Việt Nam và Dinh dưỡng",
  description:
    "Các loại đồ uống phổ biến ở Việt Nam - trà, cà phê, nước dừa, nước mía. Giá trị dinh dưỡng, lợi ích, và cách chọn đồ uống lành mạnh.",
  keywords: [
    "đồ uống Việt Nam",
    "vietnamese drinks",
    "trà",
    "cà phê",
    "nước dừa",
    "nước mía",
    "hydration",
  ],
};

export default function VietnameseDrinksNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Đồ uống Việt Nam và Dinh dưỡng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Coffee className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">Đồ uống Việt Nam và Dinh dưỡng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đồ uống là phần quan trọng của văn hóa và dinh dưỡng Việt Nam. Từ trà xanh thơm ngát đến cà phê đậm đà, 
          nước dừa mát lạnh đến nước mía ngọt ngào - mỗi loại có giá trị dinh dưỡng và lợi ích riêng. 
          Hiểu về các loại đồ uống giúp bạn chọn lựa lành mạnh.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nước lọc</strong> là quan trọng nhất - 8-10 ly/ngày
          </li>
          <li>
            <strong>Trà xanh</strong> - chất chống oxy hóa, ít calo (không đường)
          </li>
          <li>
            <strong>Cà phê</strong> - caffeine, chất chống oxy hóa, nhưng nên uống vừa phải
          </li>
          <li>
            <strong>Nước dừa</strong> - điện giải, ít calo (nước dừa tươi, không phải đóng hộp có đường)
          </li>
          <li>
            <strong>Nước mía</strong> - nhiều đường, nên hạn chế
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Các loại Đồ uống Phổ biến ở Việt Nam</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">1. Trà xanh (Green tea)</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Trà xanh là đồ uống phổ biến và lành mạnh ở Việt Nam, có nhiều lợi ích sức khỏe.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Chất chống oxy hóa (polyphenols, EGCG)</li>
                  <li>✓ Caffeine (ít hơn cà phê)</li>
                  <li>✓ Ít calo (không đường)</li>
                  <li>✓ Có thể hỗ trợ trao đổi chất</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Lợi ích:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Chất chống oxy hóa bảo vệ tế bào</li>
                  <li>• Có thể hỗ trợ sức khỏe tim mạch</li>
                  <li>• Có thể hỗ trợ trao đổi chất</li>
                  <li>• Hydration (cung cấp nước)</li>
                </ul>
              </div>
              <ComparisonCard
                title="Trà xanh lành mạnh vs Nên cải thiện"
                items={[
                  {
                    label: "Trà xanh",
                    good: "Trà xanh không đường - chất chống oxy hóa, ít calo, tốt cho sức khỏe",
                    bad: "Trà xanh có đường, trà sữa - nhiều đường, nhiều calo, ít lợi ích",
                    note: "Uống trà xanh không đường để có lợi ích sức khỏe"
                  },
                ]}
              />
              <ExampleBox variant="tip" title="Mẹo">
                <p className="text-sm">
                  Trà xanh không đường là lựa chọn tốt. Có thể thêm một chút chanh để tăng hương vị 
                  và vitamin C. Tránh thêm nhiều đường hoặc sữa đặc (nhiều calo).
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <h3 className="heading-4 mb-3 text-amber-900">2. Cà phê (Coffee)</h3>
            <p className="text-body-sm text-amber-900 mb-3">
              Cà phê là đồ uống phổ biến ở Việt Nam, đặc biệt cà phê phin truyền thống.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-amber-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Caffeine (tăng tỉnh táo)</li>
                  <li>✓ Chất chống oxy hóa</li>
                  <li>✓ Ít calo (cà phê đen không đường)</li>
                  <li>⚠ Nhiều calo (cà phê sữa đá, cà phê sữa đặc)</li>
                </ul>
              </div>
              <ComparisonCard
                title="Cà phê lành mạnh vs Nên hạn chế"
                items={[
                  {
                    label: "Cà phê",
                    good: "Cà phê đen không đường, cà phê đen ít đường - caffeine, chất chống oxy hóa, ít calo",
                    bad: "Cà phê sữa đá, cà phê sữa đặc - nhiều đường, sữa đặc, nhiều calo (200-300 calo/cốc)",
                    note: "Uống cà phê đen hoặc ít đường để có lợi ích mà không quá nhiều calo"
                  },
                ]}
              />
              <ExampleBox variant="warning" title="Lưu ý">
                <p className="text-sm">
                  Cà phê sữa đá, cà phê sữa đặc (cà phê phin với sữa đặc) rất ngon nhưng nhiều calo 
                  (200-300 calo/cốc) vì có nhiều sữa đặc và đường. Nên uống vừa phải hoặc chọn cà phê đen ít đường.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">3. Nước dừa (Coconut water)</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Nước dừa là đồ uống tự nhiên, mát lạnh, phổ biến ở Việt Nam.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Điện giải (kali, natri)</li>
                  <li>✓ Ít calo (nước dừa tươi, ~45 calo/250ml)</li>
                  <li>✓ Hydration (cung cấp nước)</li>
                  <li>⚠ Nhiều calo (nước dừa đóng hộp có đường)</li>
                </ul>
              </div>
              <ComparisonCard
                title="Nước dừa lành mạnh vs Nên hạn chế"
                items={[
                  {
                    label: "Nước dừa",
                    good: "Nước dừa tươi - điện giải, ít calo, tự nhiên, tốt cho hydration",
                    bad: "Nước dừa đóng hộp có đường - nhiều đường, nhiều calo, ít lợi ích",
                    note: "Chọn nước dừa tươi thay vì đóng hộp có đường"
                  },
                ]}
              />
              <ExampleBox variant="tip" title="Mẹo">
                <p className="text-sm">
                  Nước dừa tươi là lựa chọn tốt cho hydration, đặc biệt sau khi vận động hoặc trong thời tiết nóng. 
                  Chọn nước dừa tươi thay vì đóng hộp có đường.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">4. Nước mía (Sugarcane juice)</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Nước mía là đồ uống ngọt, phổ biến ở Việt Nam, đặc biệt vào mùa hè.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>⚠ Nhiều đường (~50g đường/250ml)</li>
                  <li>⚠ Nhiều calo (~200 calo/250ml)</li>
                  <li>✓ Một số khoáng chất (kali)</li>
                  <li>⚠ Ít chất xơ, vitamin</li>
                </ul>
              </div>
              <ExampleBox variant="warning" title="Lưu ý">
                <p className="text-sm">
                  Nước mía có nhiều đường, nên hạn chế. Có thể uống thỉnh thoảng như một món giải khát, 
                  nhưng không nên uống thường xuyên, đặc biệt nếu bạn có đái tháo đường hoặc cần quản lý cân nặng.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">5. Các đồ uống Khác</h3>
            <div className="space-y-3">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Trà atiso (Artichoke tea):</p>
                <p className="text-xs text-gray-700">
                  Có thể hỗ trợ tiêu hóa, ít calo (không đường). Phổ biến ở Việt Nam.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Trà gừng (Ginger tea):</p>
                <p className="text-xs text-gray-700">
                  Hỗ trợ tiêu hóa, giảm buồn nôn, ít calo (không đường). Tốt khi bị cảm.
                </p>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Nước ngọt, Nước có Gas:</p>
                <p className="text-xs text-gray-700">
                  Nhiều đường, nhiều calo, ít dinh dưỡng. Nên hạn chế hoặc tránh.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Giá trị Dinh dưỡng</h2>
        <NutrientTable
          title="Giá trị Dinh dưỡng Đồ uống Việt Nam (Ước tính cho 250ml)"
          rows={[
            { nutrient: "Nước lọc", amount: "0", unit: "calo", note: "Tốt nhất cho hydration" },
            { nutrient: "Trà xanh không đường", amount: "~2", unit: "calo", note: "Chất chống oxy hóa, tốt" },
            { nutrient: "Cà phê đen không đường", amount: "~5", unit: "calo", note: "Caffeine, chất chống oxy hóa" },
            { nutrient: "Cà phê sữa đá (Việt Nam)", amount: "~200-300", unit: "calo", note: "Nhiều đường, sữa đặc" },
            { nutrient: "Nước dừa tươi", amount: "~45", unit: "calo", note: "Điện giải, tốt" },
            { nutrient: "Nước mía (Việt Nam)", amount: "~200", unit: "calo", note: "Nhiều đường, nên hạn chế" },
            { nutrient: "Nước ngọt", amount: "~100", unit: "calo", note: "Nhiều đường, nên tránh" },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips chọn đồ uống lành mạnh</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nước lọc là tốt nhất:</strong> 8-10 ly/ngày. Không có calo, không có đường, tốt cho hydration.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Trà xanh không đường:</strong> Chất chống oxy hóa, ít calo, tốt cho sức khỏe.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Cà phê đen hoặc ít đường:</strong> Caffeine, chất chống oxy hóa, nhưng nên uống vừa phải (1-2 cốc/ngày).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nước dừa tươi:</strong> Điện giải, ít calo, tốt cho hydration, đặc biệt sau vận động.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế:</strong> Nước mía, nước ngọt, cà phê sữa đá (nhiều đường, nhiều calo).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Trà xanh, trà gừng, nước dừa tươi là lựa chọn lành mạnh và phổ biến.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration: Nước và dịch</h3>
            <p className="text-sm text-gray-600">
              Tầm quan trọng của hydration và cách giữ nước
            </p>
          </Card>
          <Card href="/knowledge/sugar-health">
            <h3 className="heading-5 mb-2">Đường và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Hạn chế đường trong đồ uống
            </p>
          </Card>
          <Card href="/knowledge/special-topics/antioxidants-foods">
            <h3 className="heading-5 mb-2">Chất chống Oxy hóa trong Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Trà xanh chứa chất chống oxy hóa
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Đồ uống có thể là phần của chế độ ăn lành mạnh, 
          nhưng nước lọc vẫn là lựa chọn tốt nhất cho hydration. Nếu bạn có bệnh lý đặc biệt 
          (đái tháo đường, tăng huyết áp, bệnh thận), hãy tham khảo chuyên gia dinh dưỡng về loại và lượng 
          đồ uống phù hợp. Caffeine có thể ảnh hưởng đến giấc ngủ, nên hạn chế vào buổi tối.
        </p>
      </Callout>
    </main>
  );
}

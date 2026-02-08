import type { Metadata } from "next";
import Link from "next/link";
import { Heart, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Suy tim",
  description:
    "Hướng dẫn giáo dục về quản lý natri, dịch, và cân nặng trong suy tim. Bao gồm điều chỉnh theo mức độ suy tim (NYHA class) và quản lý biến chứng.",
  keywords: [
    "suy tim",
    "dinh dưỡng suy tim",
    "quản lý natri",
    "quản lý dịch",
    "NYHA",
    "heart failure",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Suy tim",
    description:
      "Hướng dẫn giáo dục về quản lý natri, dịch, và cân nặng trong suy tim. Bao gồm điều chỉnh theo mức độ suy tim (NYHA class) và quản lý biến chứng.",
    url: "https://clinical-nutrition.edu.vn/knowledge/heart-failure-nutrition",
  },
};

export default function HeartFailureNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Suy tim" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            ❤️ Dinh dưỡng trong Suy tim: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Suy tim là tình trạng tim bơm máu kém hơn bình thường, khiến cơ thể dễ bị:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body">
            <li>Khó thở</li>
            <li>Phù chân, phù tay</li>
            <li>Mệt mỏi</li>
            <li>Tăng cân do ứ nước</li>
          </ul>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng đóng vai trò rất quan trọng trong suy tim, đặc biệt là:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Ăn nhạt hơn</li>
              <li>Kiểm soát lượng nước uống</li>
              <li>Theo dõi cân nặng mỗi ngày</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này cung cấp kiến thức dinh dưỡng mang tính giáo dục, giúp người bệnh và nhân viên y tế 
            hiểu và áp dụng đúng trong cuộc sống hàng ngày.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp bác sĩ, điều dưỡng, sinh viên y khoa và người bệnh hiểu các nguyên tắc dinh dưỡng trong suy tim</li>
            <li>Hỗ trợ quản lý bệnh song song với thuốc</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá và chỉ định cá nhân của bác sĩ điều trị.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Rất Quan trọng trong Suy tim?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Trong suy tim, tim đã yếu, nếu ăn uống không phù hợp sẽ làm tim phải làm việc nhiều hơn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🔹 Giữ nước (ứ dịch)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Muối làm cơ thể giữ nước</li>
                <li>• Giữ nước nhiều → tim phải bơm nhiều hơn → dễ khó thở, phù</li>
              </ul>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🔹 Tăng gánh cho tim</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Dịch dư thừa làm tim quá tải</li>
                <li>• Giảm muối và nước giúp giảm gánh cho tim</li>
              </ul>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30 md:col-span-2">
              <h3 className="heading-5 mb-2">🔹 Cân nặng</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Thừa cân → tim làm việc nặng hơn</li>
                <li>• Nhưng sụt cân quá mức hoặc suy dinh dưỡng cũng rất nguy hiểm</li>
              </ul>
              <div className="mt-2 p-2 bg-white rounded border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>👉 Mục tiêu là giữ cân nặng ổn định, không tăng nhanh, không sụt nhiều.</strong>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Basic Nutrition Principles */}
      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng Cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* Sodium */}
        <Card>
          <CardHeader icon={AlertCircle} title="🧂 Muối (Natri) – Yếu tố Quan trọng nhất" />
          <CardContent>
            <p className="text-body mb-4">
              Muối làm cơ thể giữ nước, vì vậy hạn chế muối là nền tảng trong suy tim.
            </p>
            <h4 className="heading-4 mb-3">Khuyến nghị chung theo mức độ suy tim</h4>
            {/* Sodium Recommendations by NYHA Class Table */}
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-red-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mức độ suy tim</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lượng natri/ngày</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tương đương muối</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nhẹ – trung bình (NYHA I–II)</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2–3 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 5–7,5 g</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nặng (NYHA III–IV)</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 5 g</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Một số trường hợp nặng</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">Có thể &lt; 1,5 g</td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo chỉ định bác sĩ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 mb-4">
              <p className="text-sm text-blue-900">
                <strong>👉 Không cần ăn nhạt tuyệt đối, nhưng không được ăn mặn.</strong>
              </p>
            </div>
            
            <h4 className="heading-4 mb-3">Nguồn muối "ẩn" người bệnh hay bỏ sót</h4>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
              <li><strong>Mì gói</strong></li>
              <li><strong>Đồ hộp</strong></li>
              <li><strong>Thức ăn nhanh</strong></li>
              <li><strong>Nước mắm, nước tương, gia vị</strong></li>
              <li><strong>Xúc xích, thịt nguội</strong></li>
              <li><strong>Bánh mì, phô mai</strong></li>
            </ul>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">📌 Mẹo nhớ nhanh:</p>
              <p className="text-sm text-green-900">
                Phần lớn muối không đến từ muối chấm, mà từ thực phẩm chế biến sẵn.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Fluid */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">💧 Nước (Dịch)</h3>
          <div className="space-y-3 text-body">
            <p>
              Ở suy tim, uống quá nhiều nước có thể làm:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mb-4">
              <li>Phù nặng hơn</li>
              <li>Khó thở nhiều hơn</li>
              <li>Dễ nhập viện</li>
            </ul>
            <h4 className="heading-4 mb-3">Khuyến nghị chung</h4>
            {/* Fluid Recommendations Table */}
            <div className="overflow-x-auto my-4">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mức độ suy tim</th>
                    <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lượng nước/ngày</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nhẹ – trung bình</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,5–2 L</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Có thể linh hoạt</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nặng</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">≈ 1,5 L hoặc ít hơn</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Tùy triệu chứng</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rất nặng</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700 text-center">Có thể &lt; 1 L</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Theo chỉ định</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm text-red-900">
                <strong>⚠️ Tất cả đều tính là nước:</strong> nước lọc, nước trái cây, canh, súp, trà, cà phê…
              </p>
            </div>
          </div>
        </div>

        {/* Weight Monitoring */}
        <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/30 p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Theo dõi Cân nặng – Dấu hiệu Rất Quan trọng</h3>
          <div className="space-y-3 text-body">
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li><strong>Cân mỗi sáng, sau khi đi vệ sinh, trước ăn</strong></li>
              <li><strong>Tăng &gt; 1–2 kg trong 1–2 ngày → nghi ngờ ứ dịch</strong></li>
            </ul>
            <div className="rounded-lg border border-green-200 bg-white p-3">
              <p className="text-sm text-green-900">
                <strong>👉 Đây là dấu hiệu sớm để đi khám kịp thời.</strong>
              </p>
            </div>
          </div>
        </div>

        {/* Energy & Weight */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">⚖️ năng lượng & Cân nặng</h3>
          <div className="space-y-3 text-body">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-blue-900 mb-2">Thừa cân</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Làm tim phải làm việc nhiều hơn</li>
                  <li>• Giảm cân từ từ có thể giúp giảm triệu chứng</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">Suy dinh dưỡng (Cardiac cachexia)</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Gặp ở suy tim nặng</li>
                  <li>• Gây yếu cơ, yếu cả cơ tim</li>
                  <li>• Làm bệnh nặng hơn</li>
                </ul>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-3 mt-3">
              <p className="text-sm text-amber-900">
                <strong>👉 Mục tiêu:</strong> Không tăng cân nhanh – không sụt cân nhiều – giữ ổn định.
              </p>
            </div>
          </div>
        </div>

        {/* Protein */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">🥩 Protein (Chất đạm)</h3>
          <div className="space-y-3 text-body">
            <p>
              Cần đủ đạm để giữ cơ
            </p>
            <p>
              <strong>Khuyến nghị chung:</strong> 1,0–1,2 g/kg/ngày
            </p>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mt-3">
              <p className="text-sm font-semibold text-amber-900 mb-2">📌 Lưu ý:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Chia đều trong ngày</li>
                <li>Không ăn quá nhiều đạm một lúc</li>
                <li>Nếu có suy thận kèm theo → có thể cần giảm đạm</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Adjustments by Disease Status */}
      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Mức độ Suy tim
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">🔹 Suy tim nhẹ – trung bình (NYHA I–II)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Muối: &lt; 2–3 g/ngày</li>
              <li>Nước: 1,5–2 L/ngày</li>
              <li>Đạm: 1,0–1,2 g/kg</li>
              <li>Giảm cân nếu thừa cân</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-red-200 bg-red-50/50 p-5">
            <h3 className="heading-4">🔹 Suy tim nặng (NYHA III–IV)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Muối: &lt; 2 g/ngày (có thể &lt; 1,5 g)</li>
              <li>Nước: ≈ 1,5 L hoặc ít hơn</li>
              <li>Theo dõi cân nặng hàng ngày</li>
              <li>Cẩn thận suy dinh dưỡng</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">🔹 Suy tim kèm suy thận</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Cần điều chỉnh muối – nước – đạm – kali – phospho</li>
              <li>Nên có kế hoạch dinh dưỡng riêng</li>
              <li>Theo dõi sát xét nghiệm</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Managing Complications */}
      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Các Vấn đề Dinh dưỡng Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card className="border-red-200 bg-red-50">
          <CardHeader icon={AlertTriangle} title="🚨 Quá tải dịch" />
          <CardContent>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Dấu hiệu:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Phù chân, tay, mặt</li>
                  <li>Khó thở, đặc biệt khi nằm</li>
                  <li>Tăng cân nhanh</li>
                  <li>Mệt nhiều</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Xử trí:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Ăn nhạt hơn</li>
                  <li>Hạn chế nước</li>
                  <li>Dùng thuốc lợi tiểu theo chỉ định</li>
                  <li>Đi khám sớm</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50">
          <CardHeader icon={Info} title="⚠️ Suy dinh dưỡng" />
          <CardContent>
            <p className="text-sm font-semibold text-gray-900 mb-2">Giải pháp:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Tăng năng lượng và đạm nhưng không tăng nước</li>
              <li>Ưu tiên thức ăn đậm năng lượng, ít nước</li>
              <li>Bổ sung dinh dưỡng khi cần (theo hướng dẫn)</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 6. Drug-Nutrition Interactions */}
      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Điện giải & Thuốc – Điều Người bệnh Cần biết
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-amber-200 bg-amber-50/30">
            <h3 className="heading-4 mb-3">Tương tác quan trọng</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Lợi tiểu</strong> có thể làm hạ kali, magie</li>
              <li>• <strong>ACEi/ARB</strong> có thể làm tăng kali</li>
              <li>• <strong>Digoxin</strong> dễ ngộ độc nếu thiếu kali/magie</li>
              <li>• <strong>Warfarin:</strong> rau xanh vẫn ăn được, nhưng ăn đều, không lúc nhiều lúc ít</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3 mt-3">
              <p className="text-sm text-amber-900">
                <strong>👉 Vì vậy:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900 mt-2">
                <li>Cần xét nghiệm định kỳ</li>
                <li>Không tự ý thay đổi chế độ ăn khi đang dùng thuốc</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      {/* 7. Monitoring */}
      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi & Đánh giá lại
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Theo dõi đều đặn là quan trọng để đánh giá hiệu quả của can thiệp dinh dưỡng và điều chỉnh khi cần:
          </p>
          
          {/* Monitoring Parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thông số</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mục tiêu/Giá trị bình thường</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Hàng ngày (cùng thời điểm)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Duy trì ổn định, không tăng đột ngột</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Tăng &gt; 1-2 kg trong 1-2 ngày = quá tải dịch</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Triệu chứng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Hàng ngày</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Không có hoặc giảm</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Khó thở, phù, ho khan, mệt mỏi</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Kali máu</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Khi bắt đầu/thay đổi thuốc, định kỳ</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">3.5-5.0 mEq/L</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Quan trọng nếu dùng lợi tiểu, ACE/ARB</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Magie</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Nếu dùng lợi tiểu</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">1.7-2.2 mg/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Quan trọng nếu dùng digoxin</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Chức năng thận</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Creatinine, eGFR bình thường</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi nếu hạn chế dịch nghiêm ngặt</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>INR</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Nếu dùng warfarin</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Theo mục tiêu điều trị</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi tương tác với vitamin K</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader icon={CheckCircle} title="Cân nặng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi hàng ngày, cùng một thời điểm (sáng, sau khi đi vệ sinh, trước ăn)</li>
                  <li>Tăng &gt; 1-2 kg trong 1-2 ngày có thể báo hiệu quá tải dịch</li>
                  <li>Ghi chép để theo dõi xu hướng</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Triệu chứng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Khó thở, đặc biệt khi nằm</li>
                  <li>Phù (chân, tay, mặt)</li>
                  <li>Ho khan</li>
                  <li>Mệt mỏi</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Điện giải" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Kali (đặc biệt nếu dùng lợi tiểu hoặc ACE inhibitors)</li>
                  <li>Magie (nếu dùng lợi tiểu)</li>
                  <li>Natri (nếu có triệu chứng hoặc nghi ngờ mất cân bằng)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Chức năng Thận" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Creatinine, eGFR</li>
                  <li>đặc biệt quan trọng nếu có suy tim + suy thận</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-3">
            <h3 className="heading-4">Theo dõi & Đánh giá</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li><strong>Cân nặng:</strong> hàng ngày</li>
              <li><strong>Triệu chứng:</strong> khó thở, phù, mệt</li>
              <li><strong>Điện giải</strong> (kali, magie)</li>
              <li><strong>Chức năng thận</strong></li>
              <li><strong>Tái khám đúng hẹn</strong></li>
            </ul>
          </div>
          
          <Callout variant="info" title="Khi nào cần gặp chuyên gia dinh dưỡng?">
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Suy tim nặng</li>
              <li>Suy tim + suy thận</li>
              <li>Sụt cân nhiều</li>
              <li>Khó tuân thủ ăn nhạt – hạn nước</li>
              <li>Cần kế hoạch ăn chi tiết</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 8. Pitfalls */}
      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Các Cạm bẫy lâm sàng Phổ biến
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Hạn chế dịch quá mức:</strong> Hạn chế dịch quá mức có thể dẫn đến mất nước và
              suy thận, đặc biệt ở người lớn tuổi hoặc trong thời tiết nóng. Cần cân bằng giữa quản lý
              quá tải dịch và tránh mất nước.
            </li>
            <li>
              <strong>Không theo dõi cân nặng thường xuyên:</strong> Cân nặng hàng ngày là công cụ quan trọng
              để phát hiện sớm quá tải dịch. Không theo dõi có thể bỏ sót các dấu hiệu sớm.
            </li>
            <li>
              <strong>Bỏ qua tương tác thuốc:</strong> Không đánh giá tương tác giữa chế độ ăn (đặc biệt là
              kali) và thuốc suy tim, có thể dẫn đến tăng hoặc giảm kali máu nguy hiểm.
            </li>
            <li>
              <strong>Không điều chỉnh cho bệnh lý kèm:</strong> Áp dụng cùng một chế độ ăn cho tất cả
              bệnh nhân mà không xem xét suy thận, đái tháo đường, hoặc các bệnh lý khác cần điều chỉnh đặc biệt.
            </li>
            <li>
              <strong>Bỏ qua suy dinh dưỡng:</strong> Chỉ tập trung vào hạn chế natri/dịch mà bỏ qua
              suy dinh dưỡng ở bệnh nhân suy tim nặng, có thể làm trầm trọng suy tim.
            </li>
            <li>
              <strong>Không giáo dục bệnh nhân đầy đủ:</strong> Chỉ nói "ăn ít muối" mà không giải thích
              nguồn natri ẩn, cách đọc nhãn, hoặc tầm quan trọng của theo dõi cân nặng, dẫn đến tuân thủ kém.
            </li>
          </ul>
        </div>
      </section>

      {/* 9. References */}
      <section aria-labelledby="references-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="references-heading" className="heading-2 whitespace-nowrap">
            Tài liệu Tham khảo & Hướng dẫn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>
              <strong>American Heart Association (AHA):</strong> Hướng dẫn về quản lý suy tim, bao gồm
              vai trò của dinh dưỡng.
            </li>
            <li>
              <strong>European Society of Cardiology (ESC):</strong> Hướng dẫn về chẩn đoán và điều trị
              suy tim, bao gồm quản lý dinh dưỡng.
            </li>
            <li>
              <strong>Heart Failure Society of America (HFSA):</strong> Hướng dẫn về quản lý suy tim.
            </li>
          </ul>
          <Callout variant="info" title="Khi nào Cần Tham khảo Chuyên gia Dinh dưỡng">
            <p className="text-body-sm">
              Nên tham khảo chuyên gia dinh dưỡng đã đăng ký khi:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Bệnh nhân có suy tim nặng (NYHA III-IV) cần quản lý phức tạp</li>
              <li>Có suy dinh dưỡng hoặc nguy cơ suy dinh dưỡng</li>
              <li>Có nhiều bệnh lý kèm (suy thận, đái tháo đường) cần điều chỉnh kép</li>
              <li>Tuân thủ kém dù đã giáo dục cơ bản</li>
              <li>Cần kế hoạch bữa ăn chi tiết</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 10. Safety */}
      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">
          ⚠️ Nhắc nhở An toàn
        </h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Nội dung này chỉ mang tính giáo dục sức khỏe.
          </p>
          <p className="text-body-sm">
            Mọi khuyến nghị cần được cá nhân hóa dựa trên:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
            <li>Mức độ suy tim</li>
            <li>Thuốc đang dùng</li>
            <li>Chức năng thận</li>
            <li>Tình trạng dinh dưỡng thực tế</li>
          </ul>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
          <p className="text-body-sm mt-2">
            Tất cả các khuyến nghị dinh dưỡng cần được điều chỉnh dựa trên đánh giá lâm sàng toàn diện,
            mức độ suy tim, thuốc đang dùng, bệnh lý kèm, và sở thích cá nhân của từng bệnh nhân. Quản lý
            suy tim yêu cầu sự hợp tác chặt chẽ giữa bệnh nhân, bác sĩ, và chuyên gia dinh dưỡng. Khi còn
            nghi ngờ, hãy tham khảo ý kiến của chuyên gia dinh dưỡng đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </Callout>
      </section>

      {/* Related Tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">
          Công cụ Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính nhu cầu dịch với điều chỉnh cho suy tim, đặc biệt quan trọng trong quản lý quá tải dịch.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng để theo dõi cân nặng và phát hiện cardiac cachexia.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein, đặc biệt quan trọng nếu có suy dinh dưỡng hoặc cần giảm cân.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như kali, magie - rất quan trọng trong quản lý suy tim, đặc biệt khi dùng lợi tiểu.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Máy tính Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu dịch với điều chỉnh cho suy tim, giúp xác định mức hạn chế dịch phù hợp.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein, đặc biệt hữu ích nếu bệnh nhân cần quản lý cân nặng
                hoặc có suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

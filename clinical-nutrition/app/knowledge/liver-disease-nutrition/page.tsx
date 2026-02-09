import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh gan mạn",
  description:
    "Hướng dẫn giáo dục về dinh dưỡng trong bệnh gan mạn (viêm gan, xơ gan). Bao gồm quản lý protein, natri, dịch, và vi chất, cũng như quản lý cổ trướng và bệnh não gan.",
  keywords: [
    "bệnh gan mạn",
    "xơ gan",
    "cirrhosis",
    "viêm gan",
    "hepatitis",
    "cổ trướng",
    "bệnh não gan",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Bệnh gan mạn",
    description:
      "Hướng dẫn giáo dục về dinh dưỡng trong bệnh gan mạn (viêm gan, xơ gan). Bao gồm quản lý protein, natri, dịch, và vi chất, cũng như quản lý cổ trướng và bệnh não gan.",
    url: "https://clinical-nutrition.edu.vn/knowledge/liver-disease-nutrition",
  },
};

export default function LiverDiseaseNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Bệnh gan mạn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            🧡 Dinh dưỡng trong Bệnh gan mạn: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bệnh gan mạn (viêm gan mạn, xơ gan, suy gan) là tình trạng gan bị tổn thương kéo dài, làm giảm khả năng:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body">
            <li>Chuyển hóa dinh dưỡng</li>
            <li>Dự trữ năng lượng</li>
            <li>Khử độc</li>
          </ul>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng đóng vai trò rất quan trọng trong bệnh gan mạn:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Giúp duy trì chức năng gan còn lại</li>
              <li>Phòng ngừa suy dinh dưỡng</li>
              <li>Giảm biến chứng như cổ trướng, bệnh não gan</li>
            </ul>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế, người bệnh và người nhà hiểu đúng về dinh dưỡng trong bệnh gan mạn</li>
            <li>Tránh các sai lầm phổ biến như kiêng quá mức, đặc biệt là kiêng đạm</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin mang tính giáo dục, không thay thế đánh giá và tư vấn cá nhân của bác sĩ.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng đặc biệt Quan trọng trong Bệnh gan Mạn?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Người bệnh gan mạn rất dễ suy dinh dưỡng, vì:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body">
            <li>Ăn kém, chán ăn</li>
            <li>Rối loạn chuyển hóa</li>
            <li>Hấp thu kém</li>
            <li>Dự trữ năng lượng của gan giảm</li>
          </ul>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Suy dinh dưỡng sẽ làm:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Gan yếu hơn</li>
              <li>Biến chứng nặng hơn</li>
              <li>Tăng nguy cơ nhiễm trùng</li>
              <li>Giảm sống còn</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-lg p-3 border border-green-200">
            <p className="text-sm font-semibold text-green-900 mb-1">📌 Nguyên tắc quan trọng nhất:</p>
            <p className="text-sm text-green-900">
              <strong>Bệnh gan không phải là ăn ít, mà là ăn đúng và đủ.</strong>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng Cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={CheckCircle} title="🥩 Protein (Chất đạm) – KHÔNG ĐƯỢC KIÊNG KÉO DÀI" />
          <CardContent>
            <div className="bg-red-100 rounded-lg p-3 mb-3 border border-red-300">
              <p className="text-sm font-semibold text-red-900">
                Đây là điểm hay bị hiểu sai nhất.
              </p>
            </div>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Nhu cầu protein</p>
                <p className="text-sm text-gray-700 mb-2">
                  1,2 – 1,5 g/kg cân nặng/ngày
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Cần để:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Giữ cơ</li>
                  <li>Phòng suy dinh dưỡng</li>
                  <li>Hỗ trợ phục hồi gan</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Về bệnh não gan</p>
                <p className="text-sm text-gray-700 mb-1">
                  Khi có bệnh não gan nặng, có thể:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Giảm protein tạm thời</li>
                </ul>
                <div className="bg-red-50 rounded-lg p-2 border border-red-200 mt-2">
                  <p className="text-sm text-red-900">
                    <strong>❌ Không được kiêng đạm lâu dài, vì sẽ gây suy dinh dưỡng nặng</strong>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Chất lượng protein</p>
                <p className="text-sm text-gray-700 mb-1">
                  Protein thực vật (đậu, đậu phụ):
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Có thể dễ dung nạp hơn</li>
                  <li>Ít gây nặng bệnh não gan ở một số người</li>
                  <li>Có thể kết hợp đạm động vật + thực vật</li>
                </ul>
              </div>
              <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 mt-3">
                <p className="text-sm text-blue-900">
                  <strong>👉 Mục tiêu:</strong> đủ đạm – chia đều trong ngày – không dồn 1 bữa.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertTriangle} title="🧂 Muối & 💧 Nước" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Muối (Natri)</p>
                <p className="text-sm text-gray-700 mb-2">
                  Nếu có cổ trướng hoặc phù:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Hạn chế muối &lt; 2 g natri/ngày</li>
                  <li>Ăn mặn → giữ nước → cổ trướng nặng hơn</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nước (Dịch)</p>
                <p className="text-sm text-gray-700 mb-2">
                  Chỉ hạn chế khi:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>Có cổ trướng nhiều</li>
                  <li>Hạ natri máu</li>
                </ul>
                <p className="text-sm text-gray-700 mb-2">Cần:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Theo dõi cân nặng hàng ngày</li>
                  <li>Điều chỉnh theo chỉ định bác sĩ</li>
                </ul>
              </div>
              <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
                <p className="text-sm text-amber-900">
                  <strong>📌 Không phải ai bệnh gan cũng phải uống ít nước.</strong>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🔥 năng lượng (Calories)" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Người bệnh gan mạn cần đủ năng lượng để tránh sụt cân
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Khuyến nghị chung: 30–35 kcal/kg/ngày</p>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3 mb-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Nếu ăn kém:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Chia bữa nhỏ</li>
                <li>Ăn thêm bữa phụ, đặc biệt bữa tối muộn</li>
              </ul>
            </div>
            <div className="bg-green-50 rounded-lg p-2 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">📌 Bữa tối muộn giúp:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-green-900">
                <li>Giảm dị hóa</li>
                <li>Giữ cơ tốt hơn ở bệnh nhân xơ gan</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🧬 Vi chất Dinh dưỡng Thường thiếu" />
          <CardContent>
            <div className="space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Kẽm</p>
                <p className="text-sm text-gray-700 mb-2">
                  Hay thiếu trong bệnh gan
                </p>
                <p className="text-sm font-semibold text-gray-900 mb-1">Thiếu kẽm có thể làm:</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-2">
                  <li>Ăn kém</li>
                  <li>Nặng bệnh não gan</li>
                </ul>
                <div className="rounded-lg border border-blue-200 bg-blue-50 p-2">
                  <p className="text-sm text-blue-900">
                    <strong>👉 Có thể cần bổ sung theo chỉ định.</strong>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Vitamin D</p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Thường thiếu</li>
                  <li>liên quan đến xương, miễn dịch</li>
                  <li>Có thể cần bổ sung</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Vitamin A</p>
                <div className="bg-red-50 rounded-lg p-2 border border-red-200">
                  <p className="text-sm text-red-900 mb-1">
                    <strong>⚠️ Rất dễ ngộ độc ở bệnh gan</strong>
                  </p>
                  <p className="text-sm text-red-900">
                    <strong>❌ Không tự ý bổ sung liều cao</strong>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="stages-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="stages-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo mức độ Bệnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* Liver disease Stages table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Mức độ bệnh</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Protein</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Muối</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Nước</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Viêm gan / Xơ gan bù</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Bình thường</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Bình thường</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ăn gần như người khỏe</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Xơ gan mất bù</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">1,2–1,5 g/kg (giảm tạm nếu não gan)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Hạn chế</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi sát cổ trướng</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Suy dinh dưỡng</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Tăng năng lượng & đạm</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo tình trạng</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Cẩn thận</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Cần hỗ trợ dinh dưỡng</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card className="border-blue-200 bg-blue-50/30">
          <CardHeader icon={AlertTriangle} title="💧 Cổ trướng" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
              <li>Ăn nhạt</li>
              <li>Hạn chế nước (khi cần)</li>
              <li>Theo dõi cân nặng mỗi ngày</li>
              <li>Chọc tháo dịch nếu cần (theo chỉ định)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader icon={Info} title="🧠 Bệnh não gan" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Giảm đạm ngắn hạn nếu cần</li>
              <li>Ưu tiên đạm thực vật</li>
              <li>Lactulose giúp giảm hấp thu độc tố (không phải dinh dưỡng nhưng rất quan trọng)</li>
            </ul>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={AlertCircle} title="⚠️ Suy dinh dưỡng" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Rất thường gặp
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Biểu hiện:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sụt cân</li>
              <li>Mệt</li>
              <li>Giảm khối cơ</li>
            </ul>
            <div className="rounded-lg border border-red-200 bg-white p-3">
              <p className="text-sm text-red-900 mb-2">
                <strong>👉 Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
                <li>Tăng năng lượng</li>
                <li>Đủ protein</li>
                <li>Chia nhỏ bữa</li>
                <li>Theo dõi albumin, prealbumin</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Thuốc – Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-amber-200 bg-amber-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Lactulose:</strong> dùng đều, có thể uống cùng bữa ăn</li>
              <li>• <strong>Lợi tiểu:</strong> theo dõi kali</li>
              <li>• <strong>Vitamin:</strong> không tự ý dùng liều cao, đặc biệt vitamin A</li>
            </ul>
          </Card>
        </div>
      </section>

      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Theo dõi đều đặn là quan trọng để đánh giá hiệu quả của can thiệp dinh dưỡng và điều chỉnh khi cần:
          </p>
          
          {/* Monitoring parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chỉ số</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mục tiêu</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Albumin</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 3,5 g/dL</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>ALT, AST, Bilirubin</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo mức độ bệnh</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Hàng ngày nếu cổ trướng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Ổn định</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Kẽm</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Khi nghi ngờ thiếu</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">70–120 mcg/dL</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Vitamin D</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">6–12 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 20 ng/mL</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Dấu hiệu não gan</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Không có</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Những sai lầm Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-red-200 bg-red-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Kiêng đạm kéo dài → suy dinh dưỡng</li>
              <li>• Sợ ăn → ăn quá ít</li>
              <li>• Không chú ý vi chất</li>
              <li>• Không theo dõi cân nặng khi có cổ trướng</li>
            </ul>
          </Card>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Dinh dưỡng trong bệnh gan mạn phải cá nhân hóa theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Mức độ tổn thương gan</li>
            <li>Có hay không cổ trướng, não gan</li>
            <li>Tình trạng dinh dưỡng thực tế</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-red-200">
            <p className="text-sm text-red-900">
              <strong>👉 Khi có nghi ngờ, nên trao đổi với bác sĩ hoặc chuyên gia dinh dưỡng.</strong>
            </p>
          </div>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu protein cao (1.2-1.5 g/kg) và năng lượng cho bệnh nhân bệnh gan,
                đặc biệt quan trọng để phòng ngừa suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như kẽm, vitamin D - rất quan trọng trong quản lý bệnh gan.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính nhu cầu dịch với điều chỉnh cho bệnh gan, đặc biệt quan trọng nếu có cổ trướng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/refeeding-syndrome-risk">
            <CardHeader icon={CheckCircle} title="Đánh giá Nguy cơ Tái cho Ăn" />
            <CardContent>
              <p className="text-body-sm">Đánh giá nguy cơ hội chứng tái cho ăn, quan trọng ở bệnh nhân bệnh gan có suy dinh dưỡng.</p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">Đánh giá nhu cầu vi chất với điều chỉnh cho bệnh gan.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

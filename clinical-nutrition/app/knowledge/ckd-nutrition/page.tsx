import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh thận mạn (CKD)",
  description:
    "Hướng dẫn giáo dục về dinh dưỡng trong bệnh thận mạn theo giai đoạn. Bao gồm quản lý protein, phosphorus, potassium, natri, và dịch để làm chậm tiến triển và quản lý biến chứng.",
  keywords: [
    "bệnh thận mạn",
    "CKD",
    "chronic kidney disease",
    "protein restriction",
    "phosphorus",
    "potassium",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Bệnh thận mạn (CKD)",
    description:
      "Hướng dẫn giáo dục về dinh dưỡng trong bệnh thận mạn theo giai đoạn. Bao gồm quản lý protein, phosphorus, potassium, natri, và dịch để làm chậm tiến triển và quản lý biến chứng.",
    url: "https://clinical-nutrition.edu.vn/knowledge/ckd-nutrition",
  },
};

export default function CKDNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Bệnh thận mạn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            🧑‍⚕️ Dinh dưỡng trong Bệnh thận mạn (CKD): Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bệnh thận mạn (CKD) là tình trạng chức năng thận suy giảm kéo dài theo thời gian. Khi thận yếu đi, cơ thể khó đào thải chất thải, nước và muối, dễ gây biến chứng.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng giữ vai trò rất quan trọng trong bệnh thận mạn:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Giúp làm chậm tiến triển bệnh</li>
              <li>Giảm biến chứng (phù, tăng kali, rối loạn xương)</li>
              <li>Phòng ngừa suy dinh dưỡng</li>
            </ul>
          </div>
          <div className="bg-red-50 rounded-lg p-3 border border-red-200">
            <p className="text-sm text-red-900">
              <strong>⚠️ Điều quan trọng:</strong> Chế độ ăn phải thay đổi theo từng giai đoạn bệnh thận, không áp dụng một cách cho tất cả.
            </p>
          </div>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế và người bệnh hiểu các nguyên tắc dinh dưỡng trong CKD</li>
            <li>Hỗ trợ quản lý bệnh an toàn, lâu dài</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin mang tính giáo dục, không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Đặc biệt Quan trọng trong CKD?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Dinh dưỡng trong bệnh thận mạn nhằm đạt 3 mục tiêu chính:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">1️⃣ Làm chậm suy thận tiến triển</h3>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">2️⃣ Kiểm soát biến chứng</h3>
              <p className="text-sm text-gray-700">(tăng kali, tăng phospho, phù, thiếu máu)</p>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2">3️⃣ Tránh suy dinh dưỡng và mất cơ</h3>
            </Card>
          </div>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Nếu ăn không phù hợp:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Thận phải làm việc nặng hơn</li>
              <li>Biến chứng xuất hiện sớm hơn</li>
              <li>Người bệnh dễ mệt, yếu, sụt cân</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="stages-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="stages-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Dinh dưỡng Theo Giai đoạn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* CKD Stages Table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Giai đoạn CKD</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mức lọc cầu thận (eGFR)</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Đạm (protein)</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Phospho</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Kali</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Muối</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Nước</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 1–2</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">≥ 60</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">0,8–1,0 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo dõi</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Bình thường</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Giảm nếu THA/phù</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Bình thường</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 3</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">30–59</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~0,8 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 800–1000 mg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo dõi</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2–3 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo dõi</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 4</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">15–29</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">0,6–0,8 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 800 mg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2–3 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Nước tiểu + 500 ml</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 5 (chưa lọc máu)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 15</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">0,6–0,8 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 800 mg</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2–3 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 2 g</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">Nước tiểu + 500 ml</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
          <p className="text-sm font-semibold text-amber-900 mb-2">📌 Lưu ý rất quan trọng</p>
          <p className="text-sm text-amber-900 mb-2">
            Các con số trên là hướng dẫn chung
          </p>
          <p className="text-sm text-amber-900 mb-2">
            Luôn điều chỉnh theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
            <li>Cân nặng, tình trạng dinh dưỡng</li>
            <li>Kết quả xét nghiệm</li>
            <li>Bệnh lý kèm (THA, suy tim, ĐTĐ)</li>
            <li>Khả năng ăn uống thực tế</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-amber-200">
            <p className="text-sm text-amber-900">
              <strong>👉 Kiêng quá mức có thể gây suy dinh dưỡng, nguy hiểm không kém suy thận.</strong>
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="nutrients-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="nutrients-heading" className="heading-2 whitespace-nowrap">
            Quản lý Các Chất Dinh dưỡng Cụ thể
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🥩 Protein (Chất đạm)" />
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li>• Ăn nhiều đạm → thận phải làm việc nhiều hơn</li>
              <li>• Nhưng ăn quá ít đạm → suy dinh dưỡng, mất cơ</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Nguyên tắc:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Giảm vừa đủ, không cắt hoàn toàn</li>
                <li>Ưu tiên đạm chất lượng cao:</li>
              </ul>
              <ul className="list-disc space-y-1 pl-12 text-sm text-blue-900 mt-1">
                <li>Thịt nạc</li>
                <li>Cá</li>
                <li>Trứng</li>
                <li>Sữa (theo chỉ định)</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-2 border border-red-200 mt-3">
              <p className="text-sm text-red-900">
                <strong>⚠️ CKD + sụt cân → cần theo dõi sát dinh dưỡng.</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="🦴 Phospho" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Thận yếu → khó thải phospho
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Phospho cao gây:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Loãng xương</li>
              <li>Ngứa</li>
              <li>Vôi hoá mạch máu</li>
            </ul>
            <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn phospho thường gặp</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sữa, phô mai</li>
              <li>Đậu, hạt</li>
              <li>Thịt</li>
              <li>Thực phẩm chế biến sẵn (phosphate additives)</li>
            </ul>
            <div className="rounded-lg border border-green-200 bg-green-50 p-3">
              <p className="text-sm text-green-900 mb-1">
                <strong>👉 Thuốc gắn phospho:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-green-900">
                <li>Uống cùng bữa ăn</li>
                <li>Giúp giảm hấp thu phospho từ thức ăn</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="🍌 Kali" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Kali cao có thể gây rối loạn nhịp tim
            </p>
            <p className="text-sm text-gray-700 mb-3">
              Nguy hiểm nhưng không phải ai cũng cần kiêng nghiêm ngặt
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn kali cao</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Chuối, cam, bơ</li>
              <li>Rau xanh đậm</li>
              <li>Đậu</li>
            </ul>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 mb-3">
              <p className="text-sm font-semibold text-amber-900 mb-1">📌 Mẹo giảm kali:</p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Ngâm rau, củ trước khi nấu</li>
                <li>Luộc bỏ nước đầu</li>
              </ul>
            </div>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-2">
              <p className="text-sm text-blue-900">
                <strong>👉 Chỉ hạn chế kali khi kali máu tăng, không nên kiêng máy móc.</strong>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertTriangle} title="🧂 Muối & 💧 Nước" />
          <CardContent>
            <ul className="space-y-2 text-sm text-gray-700 mb-3">
              <li>• Muối giữ nước → phù, tăng huyết áp</li>
              <li>• Nước quá nhiều → khó thở, phù nặng</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-blue-50 p-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Nguyên tắc:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Ăn nhạt vừa</li>
                <li>Hạn chế đồ mặn, đồ chế biến</li>
                <li>Lượng nước uống:</li>
              </ul>
              <ul className="list-disc space-y-1 pl-12 text-sm text-blue-900 mt-1">
                <li>Thường = lượng nước tiểu + 500 ml</li>
                <li>Điều chỉnh theo phù, khó thở</li>
              </ul>
            </div>
          </CardContent>
        </Card>
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
          <CardHeader icon={Info} title="🦴 Rối loạn xương – khoáng" />
          <CardContent>
            <ul className="space-y-1 text-sm text-gray-700 mb-3">
              <li>• Phospho cao</li>
              <li>• Vitamin D thấp</li>
              <li>• PTH tăng</li>
            </ul>
            <div className="rounded-lg border border-blue-200 bg-white p-3">
              <p className="text-sm text-blue-900 mb-2">
                <strong>👉 Xử trí:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
                <li>Giảm phospho</li>
                <li>Bổ sung vitamin D (theo chỉ định)</li>
                <li>Dùng thuốc gắn phospho</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card className="border-red-200 bg-red-50/30">
          <CardHeader icon={Info} title="🩸 Thiếu máu" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Thường gặp trong CKD
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Có thể cần bổ sung:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sắt</li>
              <li>Vitamin B12</li>
              <li>Acid folic</li>
            </ul>
            <div className="bg-amber-50 rounded-lg p-2 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">📌 Lưu ý:</p>
              <p className="text-sm text-amber-900">
                Sắt uống cách xa thuốc gắn phospho 1–2 giờ
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="border-amber-200 bg-amber-50/30">
          <CardHeader icon={AlertTriangle} title="⚠️ Suy dinh dưỡng" />
          <CardContent>
            <p className="text-sm text-gray-700 mb-2">
              Nguy cơ cao, đặc biệt CKD giai đoạn muộn
            </p>
            <p className="text-sm font-semibold text-gray-900 mb-2">Dấu hiệu:</p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Sụt cân</li>
              <li>Mệt</li>
              <li>Albumin thấp</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3">
              <p className="text-sm text-amber-900 mb-2">
                <strong>👉 Cần:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-900">
                <li>Điều chỉnh lại chế độ ăn</li>
                <li>Bổ sung dinh dưỡng khi cần</li>
                <li>Không kiêng quá mức</li>
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
              <li>• <strong>Thuốc gắn phospho:</strong> uống cùng bữa ăn</li>
              <li>• <strong>Vitamin D:</strong> uống cùng bữa ăn</li>
              <li>• <strong>Sắt:</strong> tránh uống chung với thuốc gắn phospho</li>
              <li>• <strong>Thuốc huyết áp:</strong> ăn nhạt giúp thuốc hiệu quả hơn</li>
            </ul>
            <div className="rounded-lg border border-amber-200 bg-white p-3 mt-3">
              <p className="text-sm text-amber-900">
                <strong>👉 Không tự ý thay đổi chế độ ăn khi đang dùng thuốc.</strong>
              </p>
            </div>
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
          
          {/* Monitoring Parameters Table */}
          <div className="overflow-x-auto my-4">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-blue-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chỉ số</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Tần suất</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Mục tiêu</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ý nghĩa</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Creatinine / eGFR</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo giai đoạn</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi tiến triển</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phospho</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng (CKD 3–5)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt; 5,5 mg/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Rối loạn xương</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Kali</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3,5–5,0 mEq/L</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Nguy cơ tim</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Albumin</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">3–6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">&gt; 3,5 g/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Dinh dưỡng</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>PTH</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">6–12 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Theo giai đoạn</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Xương – khoáng</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700 text-center">Ổn định</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Phù / suy dinh dưỡng</td>
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
            Những Sai lầm Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <Card className="border-red-200 bg-red-50/30">
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Kiêng đạm quá mức → suy dinh dưỡng</li>
              <li>• Không chú ý phospho ẩn trong thực phẩm chế biến</li>
              <li>• Kiêng kali không cần thiết</li>
              <li>• Áp dụng cùng một chế độ ăn cho mọi giai đoạn CKD</li>
            </ul>
          </Card>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">⚠️ Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm mb-2">
            Dinh dưỡng trong bệnh thận mạn phức tạp và phải cá nhân hóa.
          </p>
          <p className="text-body-sm">
            Mọi khuyến nghị cần điều chỉnh theo:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
            <li>Giai đoạn bệnh thận</li>
            <li>Xét nghiệm</li>
            <li>Bệnh lý kèm</li>
            <li>Khả năng ăn uống thực tế</li>
          </ul>
          <div className="mt-3 p-2 bg-white rounded border border-red-200">
            <p className="text-sm text-red-900">
              <strong>👉 Khi có nghi ngờ, nên tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.</strong>
            </p>
          </div>
          <p className="text-body-sm mt-2">
            Trang này không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, 
            và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ Liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu protein theo giai đoạn CKD, đặc biệt quan trọng để cân bằng giữa hạn chế protein
                và phòng ngừa suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất như phosphorus, potassium, vitamin D - rất quan trọng trong quản lý CKD.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính nhu cầu dịch, đặc biệt quan trọng từ giai đoạn 4-5 khi cần hạn chế dịch dựa trên lượng nước tiểu.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần Cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng để theo dõi tình trạng dinh dưỡng và phát hiện suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

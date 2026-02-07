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
            Dinh dưỡng trong Bệnh thận mạn (CKD): Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Bệnh thận mạn (CKD) là tình trạng suy giảm chức năng thận kéo dài. Dinh dưỡng đóng vai trò quan trọng
          trong làm chậm tiến triển bệnh và quản lý biến chứng. Điều chỉnh dinh dưỡng thay đổi theo giai đoạn
          bệnh thận.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp hiểu các nguyên tắc dinh dưỡng
            trong quản lý CKD theo giai đoạn.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Dinh dưỡng trong CKD nhằm: (1) Làm chậm tiến triển bệnh, (2) Quản lý biến chứng (rối loạn xương-khoáng,
            thiếu máu), (3) Phòng ngừa suy dinh dưỡng.
          </p>
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
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Giai đoạn</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">GFR (ml/min/1.73m²)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Protein (g/kg)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Phosphorus</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Potassium</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Natri</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Dịch</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 1-2</td>
                <td className="px-4 py-3 text-sm text-neutral-700">≥ 60</td>
                <td className="px-4 py-3 text-sm text-neutral-700">0.8-1.0 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Bình thường</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Hạn chế nếu THA/phù</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Bình thường</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 3</td>
                <td className="px-4 py-3 text-sm text-neutral-700">30-59</td>
                <td className="px-4 py-3 text-sm text-neutral-700">0.8 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 800-1000 mg/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi, hạn chế nếu tăng</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2-3g/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi, hạn chế nếu phù</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 4</td>
                <td className="px-4 py-3 text-sm text-neutral-700">15-29</td>
                <td className="px-4 py-3 text-sm text-neutral-700">0.6-0.8 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 800 mg/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2-3g/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2g/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Lượng nước tiểu + 500ml</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm font-semibold text-neutral-700">Giai đoạn 5 (chưa lọc máu)</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 15</td>
                <td className="px-4 py-3 text-sm text-neutral-700">0.6-0.8 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 800 mg/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2-3g/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">&lt; 2g/ngày</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Lượng nước tiểu + 500ml</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <Callout variant="warning" title="Lưu ý quan trọng">
          <p className="text-body-sm">
            Các khuyến nghị này là <strong>ước tính giáo dục</strong> và cần được điều chỉnh dựa trên:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
            <li>Tình trạng dinh dưỡng hiện tại (tránh suy dinh dưỡng)</li>
            <li>Kết quả xét nghiệm (phosphorus, potassium, albumin)</li>
            <li>Bệnh lý kèm (tăng huyết áp, suy tim, đái tháo đường)</li>
            <li>Đáp ứng và tuân thủ của bệnh nhân</li>
            <li>Hướng dẫn địa phương và phán đoán lâm sàng</li>
          </ul>
          <p className="text-body-sm mt-2">
            <strong>Hạn chế protein quá mức có thể dẫn đến suy dinh dưỡng.</strong> Cần cân bằng giữa làm chậm tiến triển
            và phòng ngừa suy dinh dưỡng. Tham khảo chuyên gia dinh dưỡng khi cần.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="nutrients-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="nutrients-heading" className="heading-2 whitespace-nowrap">
            Quản lý Các Chất Dinh dưỡng Cụ thể
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Protein</h3>
          <p className="text-body-sm mb-3">
            Hạn chế protein giúp giảm gánh thận và làm chậm tiến triển, nhưng cần tránh suy dinh dưỡng.
            Ưu tiên protein chất lượng cao (thịt, cá, trứng, sữa).
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Phosphorus</h3>
          <p className="text-body-sm mb-3">
            Nguồn: sữa, đậu, hạt, thịt, thực phẩm chế biến sẵn (phosphate additives). Phosphate binders:
            uống với bữa ăn để giảm hấp thu phosphorus.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Potassium</h3>
          <p className="text-body-sm mb-3">
            Nguồn: trái cây, rau, đậu. Một số phương pháp chế biến (ngâm, luộc) có thể giảm kali. Theo dõi
            kali máu và điều chỉnh dựa trên kết quả.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Natri & Dịch</h3>
          <p className="text-body-sm">
            Hạn chế natri giúp kiểm soát huyết áp và dịch. Hạn chế dịch dựa trên lượng nước tiểu và dấu hiệu
            quá tải dịch.
          </p>
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

        <Card>
          <CardHeader icon={Info} title="Rối loạn Xương-Khoáng" />
          <CardContent>
            <p className="text-body-sm">
              Phosphorus cao, vitamin D thấp, PTH cao. Quản lý: hạn chế phosphorus, bổ sung vitamin D,
              phosphate binders.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Thiếu máu" />
          <CardContent>
            <p className="text-body-sm">
              Sắt, B12, folate có thể cần bổ sung. Sắt: cách xa phosphate binders. Theo dõi hemoglobin,
              ferritin.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertTriangle} title="Suy dinh dưỡng" />
          <CardContent>
            <p className="text-body-sm">
              Nguy cơ cao trong CKD. Theo dõi albumin, prealbumin. Cân bằng giữa hạn chế protein và đủ
              dinh dưỡng.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Thuốc-Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Phosphate binders: uống với bữa ăn</li>
            <li>Vitamin D: với bữa ăn</li>
            <li>Sắt: cách xa phosphate binders (ít nhất 1-2 giờ)</li>
            <li>Thuốc huyết áp: với natri</li>
          </ul>
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
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>GFR/Creatinine</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 3-6 tháng (tùy giai đoạn)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">GFR &gt; 60 (giai đoạn 1-2), theo dõi tiến triển</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá chức năng thận, tiến triển bệnh</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phosphorus</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 3-6 tháng (giai đoạn 3-5)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">2.5-4.5 mg/dL (bình thường), &lt; 5.5 mg/dL (giai đoạn 3-5)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Quan trọng từ giai đoạn 3, đánh giá rối loạn xương-khoáng</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Potassium</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 3-6 tháng (giai đoạn 3-5)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">3.5-5.0 mEq/L</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Quan trọng từ giai đoạn 3, điều chỉnh chế độ ăn</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Albumin</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 3-6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&gt; 3.5 g/dL</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá tình trạng dinh dưỡng, nguy cơ suy dinh dưỡng</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>PTH</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 6-12 tháng (giai đoạn 3-5)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Theo giai đoạn CKD (tăng dần theo giai đoạn)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đánh giá rối loạn xương-khoáng</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Vitamin D</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi 6-12 tháng (giai đoạn 3-5)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">&gt; 20 ng/mL (25-OH vitamin D)</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Có thể cần bổ sung</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cân nặng</strong></td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Mỗi lần khám</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Duy trì cân nặng ổn định</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi suy dinh dưỡng, quá tải dịch</td>
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
            Các Cạm bẫy
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Hạn chế protein quá mức dẫn đến suy dinh dưỡng</li>
            <li>Không theo dõi phosphorus và potassium</li>
            <li>Bỏ qua phosphate additives trong thực phẩm chế biến</li>
            <li>Không điều chỉnh theo giai đoạn bệnh</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Quản lý dinh dưỡng trong CKD phức tạp
            và cần được điều chỉnh dựa trên giai đoạn bệnh, chức năng thận, và đáp ứng cá nhân.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ Liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Máy tính Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">Tính toán nhu cầu dịch với điều chỉnh cho bệnh thận.</p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">Đánh giá nhu cầu vi chất với điều chỉnh cho bệnh thận.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

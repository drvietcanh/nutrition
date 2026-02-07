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

        <Card>
          <CardHeader icon={CheckCircle} title="Giai đoạn 1-2 (GFR ≥ 60)" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 0.8-1.0 g/kg (bình thường hoặc giảm nhẹ)</li>
              <li>Phosphorus: Theo dõi, chưa cần hạn chế nghiêm ngặt</li>
              <li>Potassium: Bình thường</li>
              <li>Natri: Hạn chế nếu có tăng huyết áp/phù</li>
              <li>Dịch: Bình thường</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="Giai đoạn 3 (GFR 30-59)" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 0.8 g/kg (nếu không lọc máu)</li>
              <li>Phosphorus: &lt; 800-1000 mg/ngày</li>
              <li>Potassium: Theo dõi, hạn chế nếu tăng</li>
              <li>Natri: &lt; 2-3g/ngày</li>
              <li>Dịch: Theo dõi, hạn chế nếu có phù</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertTriangle} title="Giai đoạn 4-5 (GFR &lt; 30, chưa lọc máu)" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 0.6-0.8 g/kg (cẩn thận suy dinh dưỡng)</li>
              <li>Phosphorus: &lt; 800 mg/ngày</li>
              <li>Potassium: &lt; 2-3g/ngày (tùy mức)</li>
              <li>Natri: &lt; 2g/ngày</li>
              <li>Dịch: Hạn chế dựa trên lượng nước tiểu + 500ml</li>
            </ul>
            <Callout variant="warning" title="Lưu ý">
              <p className="text-body-sm">
                Hạn chế protein quá mức có thể dẫn đến suy dinh dưỡng. Cần cân bằng giữa làm chậm tiến triển
                và phòng ngừa suy dinh dưỡng.
              </p>
            </Callout>
          </CardContent>
        </Card>
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
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>GFR, creatinine</li>
            <li>Phosphorus, potassium</li>
            <li>Albumin, prealbumin</li>
            <li>PTH, vitamin D</li>
            <li>Cân nặng</li>
          </ul>
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

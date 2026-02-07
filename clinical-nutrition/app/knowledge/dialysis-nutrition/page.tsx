import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function DialysisNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Lọc máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Lọc máu: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Bệnh nhân lọc máu (hemodialysis hoặc peritoneal dialysis) có nhu cầu dinh dưỡng đặc biệt. Dinh dưỡng
          đóng vai trò quan trọng trong duy trì sức khỏe, phòng ngừa biến chứng, và cải thiện chất lượng cuộc sống.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp hiểu các nguyên tắc dinh dưỡng
            trong quản lý bệnh nhân lọc máu.
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
            Bệnh nhân lọc máu có nguy cơ cao suy dinh dưỡng do mất protein và chất dinh dưỡng qua quá trình lọc,
            giảm cảm giác thèm ăn, và các yếu tố khác. Dinh dưỡng đầy đủ giúp duy trì sức khỏe và giảm biến chứng.
          </p>
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

        <Card>
          <CardHeader icon={CheckCircle} title="Protein" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Nhu cầu tăng:</strong> 1.2-1.5 g/kg/ngày (cao hơn so với CKD chưa lọc máu) do mất protein
              qua quá trình lọc.
            </p>
            <p className="text-body-sm">
              <strong>Lý do:</strong> Hemodialysis mất khoảng 10-12g protein mỗi lần lọc. Peritoneal dialysis
              mất protein qua dịch lọc (5-15g/ngày).
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Phosphorus</h3>
          <p className="text-body-sm mb-3">
            <strong>Hạn chế:</strong> &lt; 800-1000 mg/ngày. Lọc máu chỉ loại bỏ một phần phosphorus, vì vậy
            vẫn cần hạn chế trong chế độ ăn.
          </p>
          <p className="text-body-sm">
            <strong>Phosphate binders:</strong> Uống với bữa ăn để giảm hấp thu phosphorus.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Potassium</h3>
          <p className="text-body-sm mb-3">
            <strong>Hemodialysis:</strong> Hạn chế &lt; 2-3g/ngày (tùy tần suất lọc). Potassium tích tụ giữa
            các lần lọc.
          </p>
          <p className="text-body-sm">
            <strong>Peritoneal dialysis:</strong> Có thể linh hoạt hơn do lọc liên tục, nhưng vẫn cần theo dõi.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Natri & Dịch</h3>
          <p className="text-body-sm mb-3">
            <strong>Natri:</strong> &lt; 2g/ngày để kiểm soát khát và dịch.
          </p>
          <p className="text-body-sm mb-3">
            <strong>Dịch:</strong> Hạn chế dựa trên lượng nước tiểu còn lại và tăng cân giữa các lần lọc.
            Hemodialysis: thường 500ml + lượng nước tiểu/ngày. Peritoneal dialysis: có thể linh hoạt hơn.
          </p>
          <p className="text-body-sm">
            <strong>Tăng cân giữa các lần lọc:</strong> Hemodialysis: mục tiêu tăng 1-2 kg giữa các lần lọc
            (3 lần/tuần). Tăng &gt; 3-4 kg có thể nguy hiểm.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Năng lượng</h3>
          <p className="text-body-sm">
            Đủ năng lượng để duy trì cân nặng và phòng ngừa suy dinh dưỡng. Khuyến nghị: 30-35 kcal/kg/ngày
            (điều chỉnh dựa trên tuổi, hoạt động, và tình trạng dinh dưỡng).
          </p>
        </div>
      </section>

      <section aria-labelledby="types-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="types-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Loại Lọc máu
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={Info} title="Hemodialysis" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 1.2-1.5 g/kg/ngày</li>
              <li>Phosphorus: &lt; 800-1000 mg/ngày</li>
              <li>Potassium: &lt; 2-3g/ngày (tùy tần suất lọc)</li>
              <li>Dịch: 500ml + lượng nước tiểu/ngày</li>
              <li>Tăng cân giữa các lần lọc: 1-2 kg</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Peritoneal Dialysis" />
          <CardContent>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Protein: 1.2-1.5 g/kg/ngày (có thể cần cao hơn do mất protein qua dịch lọc)</li>
              <li>Phosphorus: &lt; 800-1000 mg/ngày</li>
              <li>Potassium: Có thể linh hoạt hơn do lọc liên tục</li>
              <li>Dịch: Có thể linh hoạt hơn, nhưng vẫn cần theo dõi</li>
              <li>Lưu ý: Dịch lọc chứa glucose có thể cung cấp năng lượng (150-300 kcal/ngày)</li>
            </ul>
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

        <Card>
          <CardHeader icon={AlertTriangle} title="Suy dinh dưỡng" />
          <CardContent>
            <p className="text-body-sm mb-3">
              Rất phổ biến ở bệnh nhân lọc máu. Nguyên nhân: mất protein qua lọc, giảm cảm giác thèm ăn,
              hạn chế chế độ ăn, bệnh lý kèm.
            </p>
            <p className="text-body-sm">
              <strong>Giải pháp:</strong> Tăng protein và năng lượng, bổ sung dinh dưỡng nếu cần, theo dõi
              albumin, prealbumin.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="Rối loạn Xương-Khoáng" />
          <CardContent>
            <p className="text-body-sm">
              Phosphorus cao, vitamin D thấp, PTH cao. Quản lý: hạn chế phosphorus, phosphate binders,
              bổ sung vitamin D, theo dõi PTH.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Thiếu máu" />
          <CardContent>
            <p className="text-body-sm">
              Sắt, B12, folate có thể cần bổ sung. Sắt: cách xa phosphate binders. Theo dõi hemoglobin,
              ferritin, TSAT.
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
            <li>EPO (erythropoietin): cần đủ sắt để hiệu quả</li>
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
            <li>Albumin, prealbumin (mỗi tháng hoặc thường xuyên hơn)</li>
            <li>Phosphorus, potassium (mỗi lần lọc hoặc thường xuyên)</li>
            <li>Cân nặng (mỗi lần lọc - hemodialysis)</li>
            <li>PTH, vitamin D (mỗi 3-6 tháng)</li>
            <li>Hemoglobin, ferritin, TSAT (thường xuyên)</li>
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
            <li>Không tăng protein đủ để bù cho mất qua lọc</li>
            <li>Không theo dõi tăng cân giữa các lần lọc (hemodialysis)</li>
            <li>Bỏ qua phosphate additives trong thực phẩm chế biến</li>
            <li>Không điều chỉnh theo loại lọc máu (hemodialysis vs peritoneal)</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Quản lý dinh dưỡng trong lọc máu rất
            phức tạp và cần được điều chỉnh dựa trên loại lọc máu, tần suất lọc, và đáp ứng cá nhân.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ Liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Máy tính Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">Tính toán nhu cầu dịch với điều chỉnh cho lọc máu.</p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">Đánh giá nhu cầu vi chất với điều chỉnh cho lọc máu.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

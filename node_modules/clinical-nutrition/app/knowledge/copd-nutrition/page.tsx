import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function COPDNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong COPD" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong COPD: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          COPD (Bệnh phổi tắc nghẽn mạn tính) ảnh hưởng đến hô hấp và chuyển hóa. Dinh dưỡng đóng vai trò
          quan trọng trong duy trì cân nặng, sức mạnh cơ hô hấp, và chất lượng cuộc sống.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp hiểu các nguyên tắc dinh dưỡng
            trong quản lý COPD.
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
            Bệnh nhân COPD có nguy cơ cao suy dinh dưỡng do tăng tiêu hao năng lượng (do khó thở), giảm cảm giác
            thèm ăn, và mệt mỏi. Suy dinh dưỡng làm suy yếu cơ hô hấp và làm trầm trọng COPD.
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
          <CardHeader icon={CheckCircle} title="Năng lượng" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Nhu cầu:</strong> Có thể tăng do tăng tiêu hao năng lượng (khó thở). Khuyến nghị:
              30-35 kcal/kg/ngày, có thể cần cao hơn nếu có suy dinh dưỡng.
            </p>
            <p className="text-body-sm">
              <strong>Lưu ý:</strong> Một số bệnh nhân COPD có thừa cân, cần điều chỉnh khác.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Protein</h3>
          <p className="text-body-sm">
            Đủ protein để duy trì khối nạc và sức mạnh cơ hô hấp. Khuyến nghị: 1.2-1.5 g/kg/ngày.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Carbohydrate & Chất béo</h3>
          <p className="text-body-sm mb-3">
            <strong>Carbohydrate:</strong> Quá nhiều carbohydrate có thể tăng CO2 production, làm tăng gánh
            hô hấp. Có thể cần giảm carbohydrate và tăng chất béo.
          </p>
          <p className="text-body-sm">
            <strong>Chất béo:</strong> Chất béo tạo ít CO2 hơn carbohydrate, có thể có lợi ở bệnh nhân COPD
            nặng. Tuy nhiên, cần cân bằng với sức khỏe tim mạch.
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
          <CardHeader icon={AlertTriangle} title="Suy dinh dưỡng" />
          <CardContent>
            <p className="text-body-sm">
              Rất phổ biến, đặc biệt ở COPD nặng. Tăng năng lượng và protein, bổ sung dinh dưỡng nếu cần.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Thừa cân" />
          <CardContent>
            <p className="text-body-sm">
              Một số bệnh nhân COPD có thừa cân, có thể làm tăng gánh hô hấp. Cần quản lý cân nặng cẩn thận.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Quản lý dinh dưỡng trong COPD cần được
            điều chỉnh dựa trên mức độ bệnh và đáp ứng cá nhân.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ Liên quan</h2>
        <Card href="/tools/energy-protein-calculator">
          <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
          <CardContent>
            <p className="text-body-sm">Tính toán nhu cầu năng lượng và protein với điều chỉnh cho COPD.</p>
          </CardContent>
        </Card>
      </section>
    </main>
  );
}

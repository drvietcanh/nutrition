import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function DyslipidemiaNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Rối loạn Lipid máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Rối loạn Lipid máu: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Rối loạn lipid máu (tăng cholesterol, triglycerides) là yếu tố nguy cơ quan trọng của bệnh tim mạch.
          Dinh dưỡng đóng vai trò trung tâm trong quản lý lipid máu, cùng với thuốc và lối sống. Trang này
          cung cấp hướng dẫn giáo dục về các nguyên tắc dinh dưỡng dựa trên bằng chứng.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp các bác sĩ, điều dưỡng,
            và sinh viên y khoa hiểu các nguyên tắc dinh dưỡng trong quản lý rối loạn lipid máu.
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
            Chế độ ăn ảnh hưởng trực tiếp đến lipid máu. Thay đổi chế độ ăn có thể giúp giảm LDL cholesterol,
            tăng HDL cholesterol, và giảm triglycerides.
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
          <CardHeader icon={CheckCircle} title="Chất béo" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Chất béo bão hòa:</strong> Hạn chế &lt; 7% tổng năng lượng. Nguồn: thịt đỏ, bơ, phô mai,
              thực phẩm chế biến sẵn.
            </p>
            <p className="text-body-sm mb-3">
              <strong>Chất béo trans:</strong> Tránh hoàn toàn. Nguồn: thực phẩm chế biến sẵn, đồ chiên, bánh ngọt.
            </p>
            <p className="text-body-sm mb-3">
              <strong>Chất béo không bão hòa:</strong> Thay thế chất béo bão hòa bằng chất béo không bão hòa đơn
              (dầu ô liu, bơ, các loại hạt) và không bão hòa đa (cá béo, hạt lanh).
            </p>
            <p className="text-body-sm">
              <strong>Omega-3:</strong> Cá béo (cá hồi, cá thu) 2 lần/tuần, hoặc bổ sung nếu cần.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Cholesterol trong Thực phẩm</h3>
          <p className="text-body-sm">
            Cholesterol trong thực phẩm (ví dụ: trứng, tôm) có ít ảnh hưởng đến cholesterol máu hơn so với
            chất béo bão hòa. Hầu hết hướng dẫn không còn khuyến nghị hạn chế nghiêm ngặt cholesterol trong
            thực phẩm, nhưng vẫn nên ăn có chừng mực.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Chất xơ</h3>
          <p className="text-body-sm mb-3">
            Chất xơ hòa tan có thể giúp giảm LDL cholesterol. Nguồn: yến mạch, lúa mạch, đậu, trái cây, rau quả.
            Khuyến nghị: 25-30g chất xơ/ngày.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Carbohydrate & Triglycerides</h3>
          <p className="text-body-sm">
            Carbohydrate tinh chế và đường có thể làm tăng triglycerides. Hạn chế đường bổ sung và carbohydrate
            tinh chế, ưu tiên ngũ cốc nguyên hạt.
          </p>
        </div>
      </section>

      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Loại Rối loạn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">Tăng LDL Cholesterol</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Hạn chế chất béo bão hòa và trans</li>
              <li>Tăng chất xơ hòa tan</li>
              <li>Chế độ ăn Địa Trung Hải hoặc DASH diet</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
            <h3 className="heading-4">Tăng Triglycerides</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Hạn chế đường bổ sung và carbohydrate tinh chế</li>
              <li>Hạn chế alcohol</li>
              <li>Tăng omega-3 (cá béo)</li>
              <li>Quản lý cân nặng nếu thừa cân</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">HDL Thấp</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Tăng hoạt động thể chất</li>
              <li>Bỏ thuốc lá</li>
              <li>Chất béo không bão hòa có thể giúp tăng HDL nhẹ</li>
              <li>Hạn chế carbohydrate tinh chế</li>
            </ul>
          </div>
        </div>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Dinh dưỡng-Thuốc
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Statins</h3>
            <p className="text-body-sm">
              Một số statins có thể tương tác với nước bưởi (grapefruit juice). Nên tránh hoặc hạn chế
              nước bưởi khi dùng statins. Kiểm tra hướng dẫn thuốc cụ thể.
            </p>
          </div>
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
            Lipid profile nên được đo mỗi 4-12 tuần sau khi bắt đầu thay đổi chế độ ăn hoặc thuốc, sau đó
            mỗi 6-12 tháng nếu ổn định.
          </p>
        </div>
      </section>

      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Các Cạm bẫy Lâm sàng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Chỉ tập trung vào cholesterol mà bỏ qua triglycerides</li>
            <li>Không xem xét tương tác với thuốc (ví dụ: nước bưởi và statins)</li>
            <li>Bỏ qua các yếu tố khác (cân nặng, hoạt động thể chất)</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Tất cả các khuyến nghị cần được
            điều chỉnh dựa trên đánh giá lâm sàng toàn diện.
          </p>
        </Callout>
      </section>
    </main>
  );
}

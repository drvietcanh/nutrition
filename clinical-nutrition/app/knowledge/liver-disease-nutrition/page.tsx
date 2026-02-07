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
            Dinh dưỡng trong Bệnh gan mạn: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Bệnh gan mạn (viêm gan, xơ gan, suy gan) ảnh hưởng đến chức năng gan và chuyển hóa dinh dưỡng.
          Dinh dưỡng đóng vai trò quan trọng trong hỗ trợ chức năng gan và quản lý biến chứng. Trang này
          cung cấp hướng dẫn giáo dục về các nguyên tắc dinh dưỡng.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp hiểu các nguyên tắc dinh dưỡng
            trong quản lý bệnh gan mạn.
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
            Bệnh nhân bệnh gan mạn có nguy cơ cao suy dinh dưỡng do giảm cảm giác thèm ăn, rối loạn chuyển hóa,
            và mất chất dinh dưỡng. Dinh dưỡng đầy đủ giúp duy trì chức năng gan và phòng ngừa biến chứng.
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
              <strong>Nhu cầu:</strong> 1.2-1.5 g/kg/ngày (đủ để duy trì khối nạc, tránh suy dinh dưỡng).
            </p>
            <p className="text-body-sm mb-3">
              <strong>Lưu ý:</strong> Bệnh não gan (hepatic encephalopathy) có thể cần giảm protein tạm thời,
              nhưng không nên hạn chế lâu dài vì có thể dẫn đến suy dinh dưỡng.
            </p>
            <p className="text-body-sm">
              <strong>Chất lượng:</strong> Protein thực vật có thể tốt hơn protein động vật ở một số bệnh nhân
              có bệnh não gan.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Natri & Dịch</h3>
          <p className="text-body-sm mb-3">
            <strong>Natri:</strong> &lt; 2g/ngày nếu có cổ trướng/phù.
          </p>
          <p className="text-body-sm">
            <strong>Dịch:</strong> Hạn chế nếu có cổ trướng. Theo dõi cân nặng hàng ngày.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Vi chất</h3>
          <p className="text-body-sm mb-3">
            <strong>Kẽm:</strong> Thường thiếu, có thể cần bổ sung. Mất qua đường tiêu hóa.
          </p>
          <p className="text-body-sm mb-3">
            <strong>Vitamin D:</strong> Thường thiếu, có thể cần bổ sung.
          </p>
            <p className="text-body-sm">
            <strong>Vitamin A:</strong> Cẩn thận độc tính, không bổ sung quá mức.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Năng lượng</h3>
          <p className="text-body-sm">
            Đủ để duy trì cân nặng và phòng ngừa suy dinh dưỡng. Khuyến nghị: 30-35 kcal/kg/ngày
            (điều chỉnh dựa trên tình trạng dinh dưỡng).
          </p>
        </div>
      </section>

      <section aria-labelledby="stages-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="stages-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Mức độ Bệnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
          <h3 className="heading-4">Viêm gan / Xơ gan bù</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Dinh dưỡng tương đối bình thường</li>
            <li>Đủ protein (1.2-1.5 g/kg)</li>
            <li>Hạn chế natri/dịch nếu có cổ trướng</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-lg border border-red-200 bg-red-50/50 p-5">
          <h3 className="heading-4">Xơ gan mất bù</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Hạn chế natri/dịch nghiêm ngặt hơn</li>
            <li>Đủ protein (cẩn thận với bệnh não gan)</li>
            <li>Tăng năng lượng và protein nếu có suy dinh dưỡng</li>
            <li>Bổ sung vi chất (kẽm, vitamin D)</li>
          </ul>
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
          <CardHeader icon={AlertTriangle} title="Cổ trướng" />
          <CardContent>
            <p className="text-body-sm">
              Hạn chế natri và dịch. Theo dõi cân nặng hàng ngày. Paracentesis nếu cần.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Bệnh não gan" />
          <CardContent>
            <p className="text-body-sm mb-3">
              Giảm protein tạm thời nếu cần, nhưng không hạn chế lâu dài. Protein thực vật có thể tốt hơn.
              Lactulose: không phải dinh dưỡng nhưng quan trọng.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="Suy dinh dưỡng" />
          <CardContent>
            <p className="text-body-sm">
              Rất phổ biến. Tăng năng lượng và protein (cẩn thận với dịch). Theo dõi albumin, prealbumin.
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
            <li>Lactulose: với bữa ăn</li>
            <li>Diuretics: bổ sung kali nếu cần</li>
            <li>Vitamin và khoáng chất: cẩn thận độc tính (đặc biệt vitamin A)</li>
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
            <li>Chức năng gan (ALT, AST, bilirubin, albumin)</li>
            <li>Cân nặng</li>
            <li>Dấu hiệu cổ trướng</li>
            <li>Dấu hiệu bệnh não gan</li>
            <li>Vi chất (kẽm, vitamin D)</li>
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
            <li>Không theo dõi vi chất</li>
            <li>Bỏ qua cổ trướng và dịch</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Quản lý dinh dưỡng trong bệnh gan
            phức tạp và cần được điều chỉnh dựa trên mức độ bệnh và đáp ứng cá nhân.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ Liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
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

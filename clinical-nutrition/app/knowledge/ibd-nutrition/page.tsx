import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh viêm ruột (IBD)",
  description:
    "Hướng dẫn giáo dục về dinh dưỡng trong Crohn's disease và Ulcerative Colitis. Bao gồm quản lý năng lượng, protein, vi chất, và điều chỉnh theo đợt cấp và thời kỳ ổn định.",
  keywords: [
    "bệnh viêm ruột",
    "IBD",
    "Crohn's disease",
    "Ulcerative Colitis",
    "viêm ruột",
    "dinh dưỡng IBD",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Bệnh viêm ruột (IBD)",
    description:
      "Hướng dẫn giáo dục về dinh dưỡng trong Crohn's disease và Ulcerative Colitis. Bao gồm quản lý năng lượng, protein, vi chất, và điều chỉnh theo đợt cấp và thời kỳ ổn định.",
    url: "https://clinical-nutrition.edu.vn/knowledge/ibd-nutrition",
  },
};

export default function IBDNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Bệnh viêm ruột (IBD)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Bệnh viêm ruột (IBD): Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Bệnh viêm ruột (IBD) bao gồm Crohn's disease và Ulcerative Colitis. Dinh dưỡng đóng vai trò quan trọng
          trong quản lý triệu chứng, phòng ngừa suy dinh dưỡng, và hỗ trợ điều trị. Trang này cung cấp hướng dẫn
          giáo dục về các nguyên tắc dinh dưỡng.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp hiểu các nguyên tắc dinh dưỡng
            trong quản lý IBD.
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
            Bệnh nhân IBD có nguy cơ cao suy dinh dưỡng do giảm hấp thu, tăng mất chất dinh dưỡng, giảm cảm giác
            thèm ăn, và hạn chế chế độ ăn. Dinh dưỡng đầy đủ giúp duy trì sức khỏe và hỗ trợ điều trị.
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
          <CardHeader icon={CheckCircle} title="Năng lượng & Protein" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Năng lượng:</strong> Đủ để duy trì cân nặng và phòng ngừa suy dinh dưỡng. Có thể cần
              tăng trong đợt cấp hoặc sau phẫu thuật.
            </p>
            <p className="text-body-sm">
              <strong>Protein:</strong> 1.2-1.5 g/kg/ngày để hỗ trợ chữa lành và phòng ngừa mất cơ.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Chế độ Ăn Đặc biệt</h3>
          <p className="text-body-sm mb-3">
            <strong>Đợt cấp:</strong> Có thể cần chế độ ăn ít chất xơ, ít chất béo, hoặc chế độ ăn lỏng
            tùy thuộc vào triệu chứng và vị trí viêm.
          </p>
          <p className="text-body-sm mb-3">
            <strong>Thời kỳ ổn định:</strong> Chế độ ăn bình thường, đa dạng, tránh các thực phẩm gây
            triệu chứng cá nhân.
          </p>
          <p className="text-body-sm">
            <strong>Lưu ý:</strong> Không có chế độ ăn "chuẩn" cho tất cả bệnh nhân IBD. Cần cá nhân hóa
            dựa trên triệu chứng và đáp ứng.
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Vi chất</h3>
          <p className="text-body-sm mb-3">
            <strong>Thiếu hụt phổ biến:</strong> Sắt, B12, folate, vitamin D, kẽm do giảm hấp thu hoặc mất
            qua đường tiêu hóa.
          </p>
          <p className="text-body-sm">
            <strong>Giải pháp:</strong> Bổ sung vi chất nếu cần, theo dõi thường xuyên.
          </p>
        </div>
      </section>

      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Tình trạng Bệnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* IBD Disease Status Comparison Table */}
        <div className="overflow-x-auto my-4">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-neutral-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tình trạng</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Năng lượng</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Protein</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Chế độ ăn</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đợt cấp</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Tăng nếu suy dinh dưỡng</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1.2-1.5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ít chất xơ, ít chất béo, có thể lỏng</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Bổ sung dinh dưỡng nếu cần</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thời kỳ ổn định</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Đủ để duy trì cân nặng</td>
                <td className="px-4 py-3 text-sm text-neutral-700">1.2-1.5 g/kg</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Bình thường, đa dạng</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Theo dõi vi chất, tránh thực phẩm gây triệu chứng</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
          <h3 className="heading-4">Đợt cấp</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Có thể cần chế độ ăn ít chất xơ, ít chất béo</li>
            <li>Tăng năng lượng và protein nếu có suy dinh dưỡng</li>
            <li>Bổ sung dinh dưỡng nếu cần</li>
            <li>Tránh các thực phẩm gây triệu chứng</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
          <h3 className="heading-4">Thời kỳ ổn định</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Chế độ ăn bình thường, đa dạng</li>
            <li>Đủ năng lượng và protein</li>
            <li>Theo dõi và bổ sung vi chất nếu cần</li>
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
          <CardHeader icon={AlertTriangle} title="Suy dinh dưỡng" />
          <CardContent>
            <p className="text-body-sm">
              Rất phổ biến. Tăng năng lượng và protein, bổ sung dinh dưỡng nếu cần, theo dõi albumin,
              prealbumin.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Thiếu vi chất" />
          <CardContent>
            <p className="text-body-sm">
              Sắt, B12, folate, vitamin D, kẽm. Bổ sung nếu cần, theo dõi thường xuyên.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Quản lý dinh dưỡng trong IBD cần được
            cá nhân hóa dựa trên loại bệnh, vị trí viêm, và đáp ứng cá nhân.
          </p>
        </Callout>
      </section>
    </main>
  );
}

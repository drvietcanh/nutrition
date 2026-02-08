import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Thiếu máu",
  description:
    "Hướng dẫn dinh dưỡng cho thiếu máu - sắt, B12, folate, và cách tăng hấp thu. Thiếu máu = dinh dưỡng + tìm nguyên nhân + điều trị đúng",
  keywords: ["thiếu máu", "anemia", "sắt", "vitamin B12", "folate"],
  openGraph: {
    title: "Dinh dưỡng trong Thiếu máu",
    description: "Hướng dẫn dinh dưỡng cho thiếu máu.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-thieu-mau",
  },
};

export default function DinhDuongTrongThieuMauPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-thieu-mau');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Thiếu máu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Thiếu máu: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Thiếu máu có nhiều nguyên nhân. Dinh dưỡng đúng cách giúp bổ sung các chất cần thiết, 
            nhưng quan trọng là tìm nguyên nhân và điều trị đúng.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 Thiếu máu = Dinh dưỡng + Tìm nguyên nhân + Điều trị đúng</strong>
            </p>
          </div>
          <Callout variant="info" title="Mục đích Giáo dục">
            <p className="text-body-sm">
              Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
            </p>
          </Callout>
        </div>
      </header>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Chất Dinh dưỡng Quan trọng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🔴 Sắt" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nguồn động vật (hấp thu tốt): thịt đỏ, gan, cá, trứng</li>
              <li>Nguồn thực vật: rau xanh đậm, đậu đỗ, ngũ cốc bổ sung</li>
              <li>Tăng hấp thu: ăn cùng vitamin C (cam, chanh, ớt chuông)</li>
              <li>Tránh: cà phê, trà ngay sau bữa ăn (giảm hấp thu)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="💊 Vitamin B12" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nguồn: thịt, cá, trứng, sữa</li>
              <li>Người ăn chay trường có thể thiếu</li>
              <li>Có thể cần bổ sung nếu thiếu</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🥬 Folate" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nguồn: rau xanh đậm, đậu đỗ, ngũ cốc bổ sung</li>
              <li>Quan trọng cho phụ nữ mang thai</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="⚠️ Tìm Nguyên nhân" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Thiếu máu có thể do nhiều nguyên nhân</li>
              <li>Cần xét nghiệm để xác định loại thiếu máu</li>
              <li>Điều trị theo nguyên nhân</li>
              <li>Dinh dưỡng hỗ trợ nhưng không thay thế điều trị</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

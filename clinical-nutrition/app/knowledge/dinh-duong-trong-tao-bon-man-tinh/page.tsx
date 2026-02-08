import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Táo bón mạn tính",
  description:
    "Hướng dẫn dinh dưỡng cho táo bón mạn tính - chất xơ, nước, vận động, và thói quen đi tiêu. Táo bón = xơ + nước + vận động + thói quen",
  keywords: ["táo bón", "constipation", "chất xơ", "dinh dưỡng"],
  openGraph: {
    title: "Dinh dưỡng trong Táo bón mạn tính",
    description: "Hướng dẫn dinh dưỡng cho táo bón mạn tính.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-tao-bon-man-tinh",
  },
};

export default function DinhDuongTrongTaoBonManTinhPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-tao-bon-man-tinh');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Táo bón mạn tính" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Táo bón mạn tính: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Táo bón mạn tính là tình trạng đi tiêu khó, ít hơn 3 lần/tuần, kéo dài. 
            Dinh dưỡng đúng cách kết hợp với vận động và thói quen tốt giúp cải thiện.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 Công thức: Táo bón = Xơ + Nước + Vận động + Thói quen</strong>
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
            Nguyên tắc Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🌾 Tăng Chất xơ" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Mục tiêu: 25-30g chất xơ/ngày</li>
              <li>Rau củ quả: ít nhất 5 phần/ngày</li>
              <li>Ngũ cốc nguyên hạt: gạo lứt, yến mạch, bánh mì nguyên cám</li>
              <li>Đậu đỗ: đậu xanh, đậu đen, đậu đỏ</li>
              <li>Tăng từ từ để tránh đầy hơi</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="💧 Uống đủ Nước" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>1.5-2 lít nước/ngày</li>
              <li>Nước lọc, canh, súp</li>
              <li>Uống nước khi tăng chất xơ</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🏃 Vận động và Thói quen" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Vận động thể chất: ít nhất 30 phút/ngày</li>
              <li>Đi tiêu đúng giờ, không nhịn</li>
              <li>Ngồi đúng tư thế khi đi tiêu</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

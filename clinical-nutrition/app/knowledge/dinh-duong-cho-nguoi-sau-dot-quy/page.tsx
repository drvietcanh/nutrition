import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người sau Đột quỵ",
  description:
    "Hướng dẫn dinh dưỡng cho người sau đột quỵ - nuốt khó, năng lượng, protein, và phòng tái phát. Dinh dưỡng ảnh hưởng trực tiếp đến khả năng phục hồi",
  keywords: ["đột quỵ", "stroke", "nuốt khó", "dysphagia", "phục hồi"],
  openGraph: {
    title: "Dinh dưỡng cho Người sau Đột quỵ",
    description: "Hướng dẫn dinh dưỡng cho người sau đột quỵ.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-cho-nguoi-sau-dot-quy",
  },
};

export default function DinhDuongChoNguoiSauDotQuyPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-cho-nguoi-sau-dot-quy');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Người sau Đột quỵ" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng cho Người sau Đột quỵ: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Sau đột quỵ, dinh dưỡng đúng cách rất quan trọng cho phục hồi và phòng tái phát. 
            Dinh dưỡng ảnh hưởng trực tiếp đến khả năng phục hồi.
          </p>
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
          <CardHeader icon={AlertCircle} title="⚠️ Đánh giá Nuốt (Dysphagia)" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nhiều người sau đột quỵ có khó nuốt</li>
              <li>Cần đánh giá bởi chuyên gia ngôn ngữ trị liệu</li>
              <li>Điều chỉnh độ đặc của thức ăn theo chỉ định</li>
              <li>Tránh sặc, viêm phổi hít</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🍽️ Đảm bảo Đủ Dinh dưỡng" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Đủ năng lượng: hỗ trợ phục hồi</li>
              <li>Đủ protein: 1.0-1.2g/kg/ngày để phục hồi cơ</li>
              <li>Đủ vitamin và khoáng chất</li>
              <li>Chia nhỏ bữa ăn nếu cần</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="❤️ Phòng Tái phát" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Kiểm soát huyết áp: giảm muối</li>
              <li>Kiểm soát đường huyết (nếu có đái tháo đường)</li>
              <li>Kiểm soát mỡ máu: giảm chất béo bão hòa</li>
              <li>Chế độ ăn lành mạnh: nhiều rau củ quả, ngũ cốc nguyên hạt</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

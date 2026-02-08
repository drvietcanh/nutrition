import type { Metadata } from "next";
import { Activity, AlertCircle, CheckCircle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import { RelatedContent } from "../../components/RelatedContent";
import { articles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Trào ngược dạ dày – Thực quản (GERD)",
  description:
    "Hướng dẫn dinh dưỡng cho trào ngược dạ dày – thực quản (GERD) - thời điểm ăn, cách ăn, và thực phẩm nên ăn/tránh",
  keywords: ["GERD", "trào ngược", "dạ dày", "thực quản", "dinh dưỡng"],
  openGraph: {
    title: "Dinh dưỡng trong Trào ngược dạ dày – Thực quản (GERD)",
    description: "Hướng dẫn dinh dưỡng cho trào ngược dạ dày – thực quản (GERD).",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-trao-nguoc-da-day-thuc-quan-gerd",
  },
};

export default function DinhDuongTrongTraoNguocDaDayThucQuanGERDPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-trao-nguoc-da-day-thuc-quan-gerd');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Trào ngược dạ dày – Thực quản (GERD)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Trào ngược dạ dày – Thực quản (GERD): Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            GERD (Gastroesophageal Reflux Disease) là tình trạng acid dạ dày trào ngược lên thực quản. 
            Dinh dưỡng đúng cách giúp giảm triệu chứng.
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
          <CardHeader icon={CheckCircle} title="✅ Nên ăn" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Thực phẩm ít acid: chuối, dưa hấu, rau xanh</li>
              <li>Protein nạc: thịt gà, cá, trứng</li>
              <li>Ngũ cốc nguyên hạt: gạo, yến mạch</li>
              <li>Ăn nhiều bữa nhỏ, ăn chậm</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="❌ Nên tránh" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Thực phẩm chua, cay, nóng</li>
              <li>Cà phê, trà, rượu bia, nước có ga</li>
              <li>Thực phẩm nhiều dầu mỡ</li>
              <li>Ăn quá no, ăn gần giờ đi ngủ</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="⏰ Thời điểm Ăn" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Không ăn 2-3 giờ trước khi đi ngủ</li>
              <li>Nâng đầu giường khi ngủ</li>
              <li>Ăn chậm, nhai kỹ</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

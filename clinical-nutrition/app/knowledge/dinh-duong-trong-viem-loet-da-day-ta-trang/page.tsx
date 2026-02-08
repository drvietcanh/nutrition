import type { Metadata } from "next";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Viêm loét Dạ dày – Tá tràng",
  description:
    "Hướng dẫn dinh dưỡng cho viêm loét dạ dày – tá tràng - cách ăn, thực phẩm nên ăn và tránh, hỗ trợ lành loét",
  keywords: ["viêm loét dạ dày", "peptic ulcer", "dinh dưỡng", "tiêu hóa"],
  openGraph: {
    title: "Dinh dưỡng trong Viêm loét Dạ dày – Tá tràng",
    description: "Hướng dẫn dinh dưỡng cho viêm loét dạ dày – tá tràng.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-viem-loet-da-day-ta-trang",
  },
};

export default function DinhDuongTrongViemLoetDaDayTaTrangPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-viem-loet-da-day-ta-trang');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Viêm loét Dạ dày – Tá tràng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Viêm loét Dạ dày – Tá tràng: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Viêm loét dạ dày – tá tràng (peptic ulcer) là vết loét ở niêm mạc dạ dày hoặc tá tràng. 
            Dinh dưỡng đúng cách giúp giảm triệu chứng và hỗ trợ lành loét.
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
              <li>Thực phẩm mềm, dễ tiêu: cháo, súp, canh</li>
              <li>Protein nạc: thịt gà, cá, trứng</li>
              <li>Rau củ nấu chín mềm</li>
              <li>Ngũ cốc: gạo, bánh mì</li>
              <li>Ăn nhiều bữa nhỏ, tránh để đói</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="❌ Nên tránh" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Thực phẩm cay, chua, nóng</li>
              <li>Rượu bia, cà phê, trà đặc</li>
              <li>Thực phẩm chế biến sẵn, nhiều dầu mỡ</li>
              <li>Ăn quá no hoặc để đói quá lâu</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

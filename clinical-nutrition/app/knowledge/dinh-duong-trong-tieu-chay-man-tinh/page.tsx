import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";
import { RelatedContent } from "../../components/RelatedContent";
import { articles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Tiêu chảy mạn tính / Tiêu chảy chức năng",
  description:
    "Hướng dẫn dinh dưỡng cho tiêu chảy mạn tính - ăn đúng loại, đúng lượng, đúng thời điểm. Tiêu chảy mạn cần ăn đúng - không nhịn",
  keywords: ["tiêu chảy", "diarrhea", "dinh dưỡng", "tiêu hóa"],
  openGraph: {
    title: "Dinh dưỡng trong Tiêu chảy mạn tính",
    description: "Hướng dẫn dinh dưỡng cho tiêu chảy mạn tính.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-tieu-chay-man-tinh",
  },
};

export default function DinhDuongTrongTieuChayManTinhPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-tieu-chay-man-tinh');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Tiêu chảy mạn tính" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Tiêu chảy mạn tính: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Tiêu chảy mạn tính cần dinh dưỡng đúng cách để tránh suy dinh dưỡng và mất nước. 
            Quan trọng: Ăn đúng - không nhịn ăn.
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
              <li>Thực phẩm dễ tiêu: cháo, súp, canh</li>
              <li>Protein nạc: thịt gà, cá, trứng</li>
              <li>Carbohydrate đơn giản: bánh mì trắng, gạo trắng (tạm thời)</li>
              <li>Chuối, táo (đã gọt vỏ)</li>
              <li>Ăn nhiều bữa nhỏ</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="❌ Nên tránh" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Chất xơ không hòa tan: rau sống, ngũ cốc nguyên hạt (tạm thời)</li>
              <li>Thực phẩm nhiều dầu mỡ, cay</li>
              <li>Rượu bia, cà phê</li>
              <li>Sữa (nếu không dung nạp lactose)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="💧 Bù nước và Điện giải" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Uống đủ nước: nước lọc, oresol nếu cần</li>
              <li>Canh, súp để bù nước và muối</li>
              <li>Tránh mất nước</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh Gout",
  description:
    "Hướng dẫn dinh dưỡng cho bệnh gout - purin, rượu bia, và cách kiểm soát. Gout là bệnh mạn, cần điều trị suốt đời. Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric",
  keywords: ["gout", "gút", "acid uric", "purin", "dinh dưỡng"],
  openGraph: {
    title: "Dinh dưỡng trong Bệnh Gout",
    description: "Hướng dẫn dinh dưỡng cho bệnh gout.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-benh-gut-va-tang-acid-uric",
  },
};

export default function DinhDuongTrongBenhGutVaTangAcidUricPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-benh-gut-va-tang-acid-uric');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Bệnh Gout" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Bệnh Gout: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bệnh Gout là bệnh mạn tính do tăng acid uric trong máu, gây viêm khớp. 
            Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric.
          </p>
          <Callout variant="warning" title="Quan trọng">
            <p className="text-body-sm">
              Gout là bệnh mạn, cần điều trị suốt đời. Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric.
            </p>
          </Callout>
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
          <CardHeader icon={AlertCircle} title="❌ Hạn chế Purin Cao" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nội tạng động vật: gan, thận, tim</li>
              <li>Thịt đỏ: thịt bò, thịt heo</li>
              <li>Hải sản: tôm, cua, cá mòi, cá cơm</li>
              <li>Nước dùng thịt, canh xương</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="✅ Nên ăn" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Protein nạc: thịt gà, cá trắng (vừa phải)</li>
              <li>Rau củ quả: hầu hết rau củ đều tốt</li>
              <li>Sữa ít béo, sữa chua</li>
              <li>Ngũ cốc nguyên hạt</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="🍺 Tránh Rượu bia" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Rượu bia làm tăng acid uric và giảm đào thải</li>
              <li>đặc biệt tránh bia trong cơn gout cấp</li>
              <li>Tốt nhất là không uống</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="💧 Uống đủ Nước" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>2-3 lít nước/ngày</li>
              <li>Giúp đào thải acid uric</li>
              <li>Nước lọc là tốt nhất</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

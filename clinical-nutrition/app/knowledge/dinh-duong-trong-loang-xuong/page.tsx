import type { Metadata } from "next";
import { Activity, CheckCircle, AlertCircle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Loãng xương",
  description:
    "Hướng dẫn dinh dưỡng cho loãng xương - canxi, vitamin D, protein, và cách phòng ngừa. Loãng xương cần dinh dưỡng + thuốc + vận động + phòng té ngã",
  keywords: ["loãng xương", "osteoporosis", "canxi", "vitamin D", "xương"],
  openGraph: {
    title: "Dinh dưỡng trong Loãng xương",
    description: "Hướng dẫn dinh dưỡng cho loãng xương.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-loang-xuong",
  },
};

export default function DinhDuongTrongLoangXuongPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-loang-xuong');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Loãng xương" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Loãng xương: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Loãng xương là tình trạng giảm mật độ xương, làm xương yếu và dễ gãy. 
            Dinh dưỡng + thuốc + vận động + phòng té ngã là bộ bốn quan trọng.
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
            Chất Dinh dưỡng Quan trọng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="🥛 Canxi" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Nhu cầu: 1000-1200mg/ngày</li>
              <li>Nguồn: sữa, sữa chua, phô mai, cá nhỏ ăn cả xương, rau xanh đậm</li>
              <li>Chia đều trong ngày để hấp thu tốt</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="☀️ Vitamin D" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Cần thiết để hấp thu canxi</li>
              <li>Nguồn: ánh nắng, cá béo, lòng đỏ trứng, sữa bổ sung</li>
              <li>Có thể cần bổ sung theo chỉ định bác sĩ</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🥩 Protein" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Cần thiết cho cấu trúc xương</li>
              <li>Nguồn: thịt, cá, trứng, sữa, đậu đỗ</li>
              <li>đảm bảo đủ protein nhưng không quá nhiều</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={CheckCircle} title="🏃 Vận động và Phòng té ngã" />
          <CardContent>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Vận động chịu trọng lượng: đi bộ, chạy, nhảy</li>
              <li>Phòng té ngã: cải thiện thăng bằng, loại bỏ vật cản</li>
              <li>Kết hợp với thuốc điều trị loãng xương</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

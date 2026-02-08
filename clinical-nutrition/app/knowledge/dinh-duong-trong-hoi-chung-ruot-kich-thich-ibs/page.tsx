import type { Metadata } from "next";
import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Hội chứng Ruột kích thích (IBS)",
  description:
    "Hướng dẫn dinh dưỡng cho Hội chứng Ruột kích thích (IBS) - FODMAP, chất xơ, và cách quản lý triệu chứng",
  keywords: [
    "IBS",
    "hội chứng ruột kích thích",
    "FODMAP",
    "chất xơ",
    "tiêu hóa",
  ],
  openGraph: {
    title: "Dinh dưỡng trong Hội chứng Ruột kích thích (IBS)",
    description:
      "Hướng dẫn dinh dưỡng cho Hội chứng Ruột kích thích (IBS) - FODMAP, chất xơ, và cách quản lý triệu chứng.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-trong-hoi-chung-ruot-kich-thich-ibs",
  },
};

export default function DinhDuongTrongHoiChungRuotKichThichIBSPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-trong-hoi-chung-ruot-kich-thich-ibs');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Hội chứng Ruột kích thích (IBS)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Hội chứng Ruột kích thích (IBS): Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Hội chứng Ruột kích thích (IBS - Irritable Bowel Syndrome) là rối loạn chức năng tiêu hóa phổ biến, 
            gây đau bụng, đầy hơi, thay đổi thói quen đi tiêu (táo bón, tiêu chảy, hoặc cả hai).
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Dinh dưỡng đóng vai trò quan trọng:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Chế độ ăn FODMAP thấp có thể giúp giảm triệu chứng</li>
              <li>Chất xơ phù hợp giúp điều hòa nhu động ruột</li>
              <li>Tránh thực phẩm kích thích</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này cung cấp kiến thức dinh dưỡng mang tính giáo dục, dựa trên các khuyến cáo y khoa hiện nay.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp nhân viên y tế và người bệnh hiểu các nguyên tắc dinh dưỡng trong IBS</li>
            <li>Hỗ trợ tư vấn và thay đổi lối sống một cách an toàn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="fodmap-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="fodmap-heading" className="heading-2 whitespace-nowrap">
            Chế độ ăn FODMAP Thấp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader
            icon={Info}
            title="📋 FODMAP là gì?"
          />
          <CardContent>
            <p className="text-body mb-4">
              FODMAP là các carbohydrate chuỗi ngắn dễ lên men, có thể gây đầy hơi, đau bụng ở người IBS.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">FODMAP bao gồm:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li><strong>F</strong>ermentable (lên men)</li>
                  <li><strong>O</strong>ligosaccharides (Fructans, GOS)</li>
                  <li><strong>D</strong>isaccharides (Lactose)</li>
                  <li><strong>M</strong>onosaccharides (Fructose dư thừa)</li>
                  <li><strong>A</strong>nd <strong>P</strong>olyols (Sorbitol, Mannitol)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            icon={AlertCircle}
            title="❌ Thực phẩm FODMAP Cao (Nên hạn chế)"
          />
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Fructans & GOS:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Hành, tỏi, hành tây</li>
                  <li>Lúa mì, lúa mạch</li>
                  <li>Đậu đỗ, đậu lăng</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Lactose:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Sữa, sữa chua (nếu không dung nạp lactose)</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Fructose dư thừa:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Táo, lê, xoài, mật ong</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Polyols:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Đào, mận, cherry, chất tạo ngọt nhân tạo</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader
            icon={CheckCircle}
            title="✅ Thực phẩm FODMAP Thấp (Nên ăn)"
          />
          <CardContent>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Rau củ:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Cà rốt, cà chua, dưa chuột, rau chân vịt, cải bó xôi</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Trái cây:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Chuối, dâu tây, cam, nho</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Ngũ cốc:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Gạo, yến mạch, quinoa</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Protein:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Thịt, cá, trứng, đậu phụ</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="fiber-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="fiber-heading" className="heading-2 whitespace-nowrap">
            Chất xơ
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardContent>
            <p className="text-body mb-4">
              Chất xơ cần được điều chỉnh tùy theo triệu chứng:
            </p>
            <ul className="space-y-3 text-body">
              <li>
                <strong>IBS với táo bón:</strong> Tăng chất xơ hòa tan (yến mạch, psyllium), tăng từ từ.
              </li>
              <li>
                <strong>IBS với tiêu chảy:</strong> Hạn chế chất xơ không hòa tan, chọn chất xơ hòa tan.
              </li>
              <li>
                <strong>IBS hỗn hợp:</strong> Cần đánh giá cá nhân, có thể thử psyllium.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="tips-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="tips-heading" className="heading-2 whitespace-nowrap">
            Lời khuyên thực hành
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardContent>
            <ul className="space-y-3 text-body">
              <li>
                <strong>1. Thử chế độ FODMAP thấp:</strong> Dưới hướng dẫn của chuyên gia, thử 2-6 tuần, sau đó từ từ thêm lại.
              </li>
              <li>
                <strong>2. Ăn chậm, nhai kỹ:</strong> Giúp tiêu hóa tốt hơn.
              </li>
              <li>
                <strong>3. Tránh ăn quá no:</strong> Chia nhỏ bữa ăn.
              </li>
              <li>
                <strong>4. Uống đủ nước:</strong> đặc biệt khi tăng chất xơ.
              </li>
              <li>
                <strong>5. Ghi nhật ký thực phẩm:</strong> Theo dõi thực phẩm và triệu chứng.
              </li>
              <li>
                <strong>6. Quản lý stress:</strong> Stress có thể làm nặng triệu chứng.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

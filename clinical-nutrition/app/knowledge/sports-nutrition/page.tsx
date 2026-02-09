import type { Metadata } from "next";
import { Activity, Zap, Droplet, Beef } from "lucide-react";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { RelatedContent } from "../../components/RelatedContent";
import { articles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng Thể thao",
  description:
    "Hướng dẫn về dinh dưỡng cho vận động viên và người tập thể dục. Hiểu về nhu cầu năng lượng, protein, carbohydrate, và hydration trong thể thao.",
  keywords: [
    "dinh dưỡng thể thao",
    "vận động viên",
    "protein",
    "carbohydrate",
    "hydration",
    "sports nutrition",
  ],
};

export default function SportsNutritionPage() {
  const currentArticle =
    articles.find((a) => a.slug === "sports-nutrition") || articles[0];

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Thể thao" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng Thể thao</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng đúng cách là yếu tố quan trọng để đạt hiệu suất tối ưu trong thể thao.
          Hiểu về nhu cầu dinh dưỡng đặc biệt của vận động viên và cách đáp ứng chúng.
        </p>
      </header>

      <section className="space-y-6">
        <h2 className="heading-2">Nhu cầu năng lượng</h2>
        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-600" aria-hidden="true" />
            năng lượng cho Vận động
          </h3>
          <div className="space-y-3 text-body">
            <p>
              Vận động viên cần nhiều năng lượng hơn người không vận động để:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cung cấp năng lượng cho hoạt động thể chất</li>
              <li>Phục hồi và sửa chữa mô sau tập luyện</li>
              <li>Duy trì chức năng cơ thể bình thường</li>
            </ul>
            <p>
              <strong>Nhu cầu năng lượng:</strong> Phụ thuộc vào:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Cường độ và thời lượng tập luyện</li>
              <li>Loại hình thể thao</li>
              <li>Tuổi, giới tính, cân nặng</li>
              <li>Mức độ hoạt động hàng ngày</li>
            </ul>
            <p>
              <strong>Ước tính:</strong> Vận động viên có thể cần 2,000-5,000+ kcal/ngày
              tùy thuộc vào mức độ hoạt động.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">Protein cho Vận động viên</h2>
        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Beef className="w-5 h-5 text-red-600" aria-hidden="true" />
            Nhu cầu Protein
          </h3>
          <div className="space-y-3 text-body">
            <p>
              Protein rất quan trọng cho vận động viên vì:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Sửa chữa và xây dựng cơ bắp sau tập luyện</li>
              <li>hỗ trợ phục hồi</li>
              <li>Cung cấp năng lượng khi carbohydrate thiếu</li>
            </ul>
            <p>
              <strong>Nhu cầu protein:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vận động viên sức bền: 1.2-1.4 g/kg/ngày</li>
              <li>Vận động viên sức mạnh: 1.6-2.0 g/kg/ngày</li>
              <li>Phân bổ đều trong ngày (20-30g mỗi bữa)</li>
            </ul>
            <p>
              <strong>Nguồn protein tốt:</strong> Thịt nạc, cá, trứng, đậu, sữa, đậu phụ
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">Carbohydrate cho Hiệu suất</h2>
        <Card>
          <h3 className="heading-4 mb-4">Carbohydrate là Nguồn năng lượng Chính</h3>
          <div className="space-y-3 text-body">
            <p>
              Carbohydrate là nguồn năng lượng chính cho hoạt động thể chất cường độ cao.
            </p>
            <p>
              <strong>Nhu cầu carbohydrate:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Vận động viên sức bền: 6-10 g/kg/ngày</li>
              <li>Vận động viên sức mạnh: 4-7 g/kg/ngày</li>
              <li>Tăng trước sự kiện quan trọng (carb loading)</li>
            </ul>
            <p>
              <strong>Timing:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Trước tập: 1-4 giờ (1-4 g/kg)</li>
              <li>Trong tập: 30-60g/giờ cho hoạt động &gt;1 giờ</li>
              <li>Sau tập: 1-1.2 g/kg trong 30 phút đầu</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">Hydration</h2>
        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" aria-hidden="true" />
            Nước và Điện giải
          </h3>
          <div className="space-y-3 text-body">
            <p>
              Hydration đúng cách là yếu tố quan trọng cho hiệu suất và an toàn.
            </p>
            <p>
              <strong>khuyến nghị:</strong>
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Uống nước trước, trong, và sau tập luyện</li>
              <li>Uống 500-600ml nước 2-3 giờ trước tập</li>
              <li>Uống 200-300ml mỗi 10-20 phút trong tập</li>
              <li>Bù nước sau tập: 1.5 lần lượng mất đi</li>
            </ul>
            <p>
              <strong>Điện giải:</strong> Cần thiết cho hoạt động kéo dài hoặc đổ mồ hôi nhiều.
              Có thể bổ sung bằng đồ uống thể thao hoặc thực phẩm giàu natri, kali.
            </p>
          </div>
        </Card>
      </section>

      <Callout variant="info" title="Lưu ý quan trọng">
        <p>
          Nhu cầu dinh dưỡng của vận động viên rất đa dạng và phụ thuộc vào nhiều yếu tố.
          Nên tham khảo ý kiến chuyên gia dinh dưỡng thể thao để có kế hoạch dinh dưỡng
          phù hợp với từng cá nhân.
        </p>
      </Callout>

      <RelatedContent currentArticle={currentArticle} />
    </main>
  );
}

import type { Metadata } from "next";
import { AlertTriangle, Clock, Droplet, Activity } from "lucide-react";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { Breadcrumb } from "../../components/Breadcrumb";
import { RelatedContent } from "../../components/RelatedContent";
import { articles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Cấp cứu",
  description:
    "Hướng dẫn về dinh dưỡng trong các tình huống cấp cứu, chấn thương, và phẫu thuật. Hiểu về nhu cầu dinh dưỡng đặc biệt trong giai đoạn cấp tính.",
  keywords: [
    "dinh dưỡng cấp cứu",
    "chấn thương",
    "phẫu thuật",
    "stress metabolism",
    "nhu cầu năng lượng",
  ],
};

export default function EmergencyNutritionPage() {
  const currentArticle = articles.find(
    (a) => a.slug === "emergency-nutrition"
  ) || articles[0];

  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Cấp cứu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng trong Cấp cứu</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Trong các tình huống cấp cứu, chấn thương, hoặc phẫu thuật, cơ thể có
          nhu cầu dinh dưỡng đặc biệt. Hiểu về stress metabolism và cách đáp ứng
          nhu cầu dinh dưỡng trong giai đoạn này là rất quan trọng.
        </p>
      </header>

      <Callout variant="warning" title="Lưu ý quan trọng">
        <p>
          Nội dung này chỉ mang tính giáo dục. Trong tình huống cấp cứu thực tế,
          cần có đánh giá và can thiệp từ đội ngũ y tế chuyên nghiệp.
        </p>
      </Callout>

      <section className="space-y-6">
        <h2 className="heading-2">Stress metabolism</h2>
        <p className="text-body">
          Khi cơ thể gặp stress (chấn thương, nhiễm trùng, phẫu thuật), quá trình
          chuyển hóa thay đổi đáng kể:
        </p>

        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" aria-hidden="true" />
            Thay đổi Chuyển hóa
          </h3>
          <ul className="space-y-3 text-body">
            <li>
              <strong>Tăng nhu cầu năng lượng:</strong> cơ thể cần nhiều năng
              lượng hơn để phục hồi và chống lại stress
            </li>
            <li>
              <strong>Tăng nhu cầu protein:</strong> Cần protein để sửa chữa mô
              và tạo ra các protein miễn dịch
            </li>
            <li>
              <strong>Kháng insulin:</strong> cơ thể có thể kháng insulin tạm
              thời, dẫn đến tăng đường huyết
            </li>
            <li>
              <strong>Tăng dị hóa:</strong> Phá vỡ protein cơ để cung cấp năng
              lượng
            </li>
          </ul>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">nhu cầu dinh dưỡng trong Cấp cứu</h2>

        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Clock className="w-5 h-5 text-green-600" aria-hidden="true" />
            Giai đoạn Cấp tính (24-48 giờ đầu)
          </h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Ưu tiên:</strong> Ổn định tình trạng lâm sàng, đảm bảo đủ
              dịch và điện giải
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>dịch: 30-35 ml/kg/ngày (điều chỉnh theo tình trạng)</li>
              <li>năng lượng: Có thể bắt đầu với 50-70% nhu cầu ước tính</li>
              <li>Protein: 1.2-1.5 g/kg/ngày</li>
              <li>Điện giải: Theo dõi và bù đắp khi cần</li>
            </ul>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-blue-600" aria-hidden="true" />
            Giai đoạn Phục hồi (sau 48 giờ)
          </h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Ưu tiên:</strong> Tăng dần dinh dưỡng để hỗ trợ phục hồi
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>năng lượng: 1.2-1.5 x BMR (tùy mức độ stress)</li>
              <li>Protein: 1.5-2.0 g/kg/ngày</li>
              <li>Carbohydrate: Đủ để tránh dị hóa protein</li>
              <li>Chất béo: 25-30% tổng năng lượng</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">Các tình huống đặc biệt</h2>

        <Card>
          <h3 className="heading-4 mb-4">Chấn thương Nặng</h3>
          <div className="space-y-3 text-body">
            <p>
              Chấn thương nặng (ví dụ: gãy xương lớn, bỏng nặng) có thể làm tăng
              nhu cầu năng lượng lên 1.5-2.0 lần BMR.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>năng lượng: 1.5-2.0 x BMR</li>
              <li>Protein: 1.5-2.5 g/kg/ngày</li>
              <li>Theo dõi sát tình trạng dịch và điện giải</li>
            </ul>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-4">Nhiễm trùng Nặng</h3>
          <div className="space-y-3 text-body">
            <p>
              Nhiễm trùng nặng (sepsis) có thể làm tăng nhu cầu năng lượng và
              protein đáng kể.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>năng lượng: 1.3-1.6 x BMR</li>
              <li>Protein: 1.5-2.0 g/kg/ngày</li>
              <li>đảm bảo đủ vitamin và khoáng chất</li>
            </ul>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-4">Phẫu thuật</h3>
          <div className="space-y-3 text-body">
            <p>
              Nhu cầu dinh dưỡng sau phẫu thuật phụ thuộc vào loại phẫu thuật và
              mức độ xâm lấn.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Phẫu thuật nhỏ: năng lượng 1.0-1.2 x BMR</li>
              <li>Phẫu thuật lớn: năng lượng 1.2-1.5 x BMR</li>
              <li>Protein: 1.2-1.8 g/kg/ngày</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">Theo dõi và Điều chỉnh</h2>

        <Card>
          <h3 className="heading-4 mb-4 flex items-center gap-2">
            <Droplet className="w-5 h-5 text-blue-600" aria-hidden="true" />
            Các chỉ số Cần theo dõi
          </h3>
          <ul className="space-y-2 text-body">
            <li>
              <strong>Cân nặng:</strong> Theo dõi hàng ngày để phát hiện sụt cân
            </li>
            <li>
              <strong>Lượng ăn vào:</strong> Đánh giá lượng thực tế so với mục
              tiêu
            </li>
            <li>
              <strong>Đường huyết:</strong> Theo dõi để phát hiện tăng đường huyết
              do stress
            </li>
            <li>
              <strong>Điện giải:</strong> Na, K, Mg, P
            </li>
            <li>
              <strong>Chức năng thận:</strong> Urea, creatinine
            </li>
          </ul>
        </Card>
      </section>

      <section className="space-y-6">
        <h2 className="heading-2">Tóm tắt</h2>
        <Card>
          <ul className="space-y-3 text-body">
            <li>
              Stress metabolism làm tăng nhu cầu năng lượng và protein
            </li>
            <li>
              Trong giai đoạn cấp tính, ưu tiên ổn định tình trạng lâm sàng
            </li>
            <li>
              Tăng dần dinh dưỡng trong giai đoạn phục hồi
            </li>
            <li>
              Theo dõi sát các chỉ số để điều chỉnh kịp thời
            </li>
            <li>
              Cần đánh giá và can thiệp từ đội ngũ y tế chuyên nghiệp
            </li>
          </ul>
        </Card>
      </section>

      <RelatedContent currentArticle={currentArticle} />
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { Users, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../../components/Callout";
import { Card, CardHeader, CardContent } from "../../../components/Card";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { RelatedContent } from "../../../components/RelatedContent";
import { articles } from "../../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người cao tuổi",
  description:
    "Hướng dẫn dinh dưỡng cho người cao tuổi - protein, canxi, vitamin D, và cách phòng suy dinh dưỡng. Ăn đủ – ăn đúng – ăn đều – ăn an toàn",
  keywords: [
    "dinh dưỡng người cao tuổi",
    "suy dinh dưỡng",
    "sarcopenia",
    "protein",
    "vitamin D",
    "canxi",
  ],
  openGraph: {
    title: "Dinh dưỡng cho Người cao tuổi",
    description:
      "Hướng dẫn dinh dưỡng cho người cao tuổi - protein, canxi, vitamin D, và cách phòng suy dinh dưỡng.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-cho-nguoi-cao-tuoi",
  },
};

export default function DinhDuongChoNguoiCaoTuoiPage() {
  const article = articles.find(a => a.slug === 'dinh-duong-cho-nguoi-cao-tuoi');
  
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Người cao tuổi" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng cho Người cao tuổi: Hướng dẫn Giáo dục
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Khi tuổi tác tăng lên, nhu cầu dinh dưỡng và khả năng hấp thu thay đổi. Người cao tuổi có nguy cơ cao 
            bị suy dinh dưỡng, mất cơ (sarcopenia), và các vấn đề sức khỏe khác.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Nguyên tắc: Ăn đủ – Ăn đúng – Ăn đều – Ăn an toàn:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Ăn đủ: Đảm bảo đủ năng lượng và chất dinh dưỡng</li>
              <li>Ăn đúng: Chọn thực phẩm phù hợp với tình trạng sức khỏe</li>
              <li>Ăn đều: Chia nhỏ bữa ăn, ăn đều đặn</li>
              <li>Ăn an toàn: Tránh ngộ độc, nghẹn, sặc</li>
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
            <li>Giúp nhân viên y tế và người chăm sóc hiểu các nguyên tắc dinh dưỡng cho người cao tuổi</li>
            <li>Hỗ trợ tư vấn và chăm sóc dinh dưỡng một cách an toàn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này không thay thế đánh giá cá nhân của bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Đặc biệt Quan trọng ở Người cao tuổi?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Người cao tuổi đối mặt với nhiều thách thức dinh dưỡng đặc biệt:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-red-200 bg-red-50/30">
              <h3 className="heading-5 mb-2">🔹 Suy dinh dưỡng</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nguy cơ cao do ăn ít, hấp thu kém</li>
                <li>• Ảnh hưởng đến sức khỏe, khả năng phục hồi</li>
                <li>• Tăng nguy cơ nhiễm trùng, té ngã</li>
              </ul>
            </Card>
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🔹 Mất cơ (Sarcopenia)</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm khối lượng và sức mạnh cơ</li>
                <li>• Cần đủ protein và vận động</li>
                <li>• Ảnh hưởng đến khả năng vận động</li>
              </ul>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🔹 Thiếu Vitamin D</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Ít tiếp xúc ánh nắng</li>
                <li>• Ảnh hưởng đến xương, cơ, miễn dịch</li>
                <li>• Cần bổ sung nếu thiếu</li>
              </ul>
            </Card>
            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🔹 Khó nuốt, Răng miệng</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Răng yếu, răng giả không vừa</li>
                <li>• Khó nuốt (dysphagia)</li>
                <li>• Ảnh hưởng đến ăn uống</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Key Nutrients */}
      <section aria-labelledby="nutrients-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="nutrients-heading" className="heading-2 whitespace-nowrap">
            Chất Dinh dưỡng Quan trọng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* Protein */}
        <Card>
          <CardHeader
            icon={CheckCircle}
            title="🥩 Protein"
          />
          <CardContent>
            <p className="text-body mb-4">
              Protein rất quan trọng để duy trì khối lượng cơ, phòng sarcopenia.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Nhu cầu:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>1.0-1.2g protein/kg cân nặng/ngày (cao hơn người trẻ)</li>
                  <li>Phân bố đều trong các bữa ăn (không chỉ tập trung một bữa)</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Nguồn tốt:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Thịt nạc: thịt gà, thịt heo, thịt bò</li>
                  <li>Cá: cá hồi, cá thu, cá trích</li>
                  <li>Trứng, sữa, sữa chua</li>
                  <li>Đậu đỗ: đậu phụ, đậu nành, đậu xanh</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Vitamin D và Canxi */}
        <Card>
          <CardHeader
            icon={Info}
            title="☀️ Vitamin D và Canxi"
          />
          <CardContent>
            <p className="text-body mb-4">
              Cần thiết cho sức khỏe xương, cơ, và miễn dịch.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Vitamin D:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Người cao tuổi thường thiếu do ít tiếp xúc ánh nắng</li>
                  <li>Nguồn: ánh nắng, cá béo, lòng đỏ trứng, sữa bổ sung</li>
                  <li>Có thể cần bổ sung theo chỉ định bác sĩ</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Canxi:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>1000-1200mg/ngày</li>
                  <li>Nguồn: sữa, sữa chua, phô mai, cá nhỏ ăn cả xương, rau xanh đậm</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Chất xơ và Nước */}
        <Card>
          <CardHeader
            icon={AlertTriangle}
            title="💧 Chất xơ và Nước"
          />
          <CardContent>
            <p className="text-body mb-4">
              Quan trọng cho tiêu hóa và phòng táo bón.
            </p>
            <div className="space-y-3">
              <div>
                <h3 className="heading-5 mb-2">Chất xơ:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Rau củ quả, ngũ cốc nguyên hạt</li>
                  <li>Giúp phòng táo bón (phổ biến ở người cao tuổi)</li>
                </ul>
              </div>
              <div>
                <h3 className="heading-5 mb-2">Nước:</h3>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Người cao tuổi dễ thiếu nước do cảm giác khát giảm</li>
                  <li>Uống đủ nước: 1.5-2 lít/ngày (trừ khi có hạn chế do bệnh)</li>
                  <li>Nước lọc, canh, súp, sữa đều tính</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* 4. Practical Tips */}
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
                <strong>1. Chia nhỏ bữa ăn:</strong> Thay vì 3 bữa lớn, chia thành 5-6 bữa nhỏ để dễ ăn hơn.
              </li>
              <li>
                <strong>2. Tăng mật độ dinh dưỡng:</strong> Chọn thực phẩm giàu dinh dưỡng, không chỉ nhiều năng lượng.
              </li>
              <li>
                <strong>3. Làm mềm thức ăn nếu cần:</strong> Nếu răng yếu, nấu mềm, cắt nhỏ, xay nhuyễn.
              </li>
              <li>
                <strong>4. Tạo môi trường ăn uống tốt:</strong> Ăn cùng người thân, tạo không khí vui vẻ.
              </li>
              <li>
                <strong>5. Theo dõi cân nặng:</strong> Cân nặng giảm không chủ ý là dấu hiệu cảnh báo.
              </li>
              <li>
                <strong>6. Xử lý khó nuốt:</strong> Nếu có khó nuốt, cần đánh giá và điều chỉnh độ đặc của thức ăn.
              </li>
              <li>
                <strong>7. Bổ sung nếu cần:</strong> Nếu ăn không đủ, có thể cần bổ sung dinh dưỡng (theo chỉ định).
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* 5. Warning Signs */}
      <section aria-labelledby="warning-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="warning-heading" className="heading-2 whitespace-nowrap">
            Dấu hiệu Cảnh báo
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Callout variant="warning" title="Cần chú ý">
          <p className="text-body-sm mb-2">
            Nếu có các dấu hiệu sau, cần đánh giá dinh dưỡng:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giảm cân không chủ ý (trên 5% trong 3-6 tháng)</li>
            <li>Ăn ít hơn bình thường</li>
            <li>Mệt mỏi, yếu sức</li>
            <li>Dễ té ngã</li>
            <li>Vết thương lâu lành</li>
            <li>Nhiễm trùng tái phát</li>
          </ul>
        </Callout>
      </section>

      {/* Related Content */}
      {article && <RelatedContent currentSlug={article.slug} />}
    </main>
  );
}

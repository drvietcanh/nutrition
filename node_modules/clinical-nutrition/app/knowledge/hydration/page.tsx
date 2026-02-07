import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Droplet, AlertTriangle, Lightbulb, CheckCircle2, Heart } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Hydration: Nước và Dịch trong Dinh dưỡng Lâm sàng",
  description:
    "Hiểu về nhu cầu nước và dịch, tầm quan trọng của hydration, dấu hiệu thiếu nước, và cách đảm bảo đủ nước cho sức khỏe tốt.",
  keywords: [
    "hydration",
    "nước",
    "dịch",
    "thiếu nước",
    "dehydration",
    "nhu cầu nước",
    "fluid requirements",
  ],
};

export default function HydrationPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Hydration: Nước và Dịch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Droplet className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Hydration: Nước và Dịch trong Dinh dưỡng Lâm sàng
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Nước là thành phần quan trọng nhất của cơ thể, chiếm khoảng 60% trọng lượng cơ thể. 
          Hiểu về nhu cầu nước và cách đảm bảo đủ nước là nền tảng của sức khỏe tốt.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Nước chiếm <strong>60% trọng lượng cơ thể</strong>
          </li>
          <li>
            Nhu cầu: <strong>1.5-2 lít/ngày</strong> (6-8 ly nước) cho người khỏe mạnh
          </li>
          <li>
            Nhu cầu tăng khi: bệnh, sốt, tiêu chảy, nôn, vận động nhiều
          </li>
          <li>
            Dấu hiệu thiếu nước: khô miệng, mệt mỏi, nước tiểu sẫm màu, táo bón
          </li>
          <li>Người cao tuổi và trẻ em dễ bị thiếu nước</li>
        </ul>
      </Callout>

      {/* Why Water Matters */}
      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Nước Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            Nước tham gia vào hầu hết các chức năng của cơ thể:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="heading-5 mb-2">Chức năng cơ thể</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Vận chuyển chất dinh dưỡng</li>
                <li>• Loại bỏ chất thải</li>
                <li>• Điều hòa thân nhiệt</li>
                <li>• Bôi trơn khớp</li>
                <li>• Bảo vệ các cơ quan</li>
              </ul>
            </Card>
            <Card>
              <h3 className="heading-5 mb-2">Sức khỏe</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Duy trì huyết áp</li>
                <li>• Hỗ trợ tiêu hóa</li>
                <li>• Giữ da khỏe mạnh</li>
                <li>• Hỗ trợ chức năng thận</li>
                <li>• Ngăn ngừa táo bón</li>
              </ul>
            </Card>
          </div>

          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900">
              <strong>Thiếu nước nghiêm trọng:</strong> Cơ thể có thể sống nhiều tuần không có thức ăn, 
              nhưng chỉ vài ngày không có nước. Thiếu nước nghiêm trọng có thể đe dọa tính mạng.
            </p>
          </div>
        </div>
      </section>

      {/* How Much Water */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên Uống Bao nhiêu Nước?</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Người khỏe mạnh</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-2xl font-bold text-blue-600 mb-1">1.5-2 lít/ngày</p>
                <p className="text-sm text-gray-700">Tương đương 6-8 ly nước</p>
                <p className="text-xs text-gray-600 mt-2">
                  (1 ly = 250ml)
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Công thức đơn giản:</p>
                <p className="text-base font-mono bg-white p-2 rounded border">
                  30-35ml × Cân nặng (kg)
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Ví dụ: 70kg × 30ml = 2,100ml/ngày
                </p>
              </div>
            </div>
            
            <ExampleBox title="Ví dụ thực tế" className="mt-4">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold mb-1">Người 60kg:</p>
                  <p className="text-sm text-gray-700">
                    60kg × 30ml = 1,800ml/ngày (khoảng 7 ly nước)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Người 80kg:</p>
                  <p className="text-sm text-gray-700">
                    80kg × 35ml = 2,800ml/ngày (khoảng 11 ly nước)
                  </p>
                </div>
                <div>
                  <p className="text-sm font-semibold mb-1">Cách chia trong ngày:</p>
                  <p className="text-sm text-gray-700">
                    Sáng: 2 ly (500ml) | Trưa: 2 ly (500ml) | Chiều: 2 ly (500ml) | Tối: 2 ly (500ml)
                  </p>
                </div>
              </div>
            </ExampleBox>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Khi nào cần nhiều nước hơn?</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Khi bị bệnh:</strong> Sốt, tiêu chảy, nôn mửa làm mất nhiều nước
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Vận động nhiều:</strong> Đổ mồ hôi làm mất nước
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Thời tiết nóng:</strong> Cơ thể mất nước qua mồ hôi nhiều hơn
                </span>
              </div>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Cho con bú:</strong> Cần thêm nước để sản xuất sữa
                </span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Sources of Water */}
      <section className="space-y-4">
        <h2 className="heading-2">Nước đến từ Đâu?</h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Nước uống</p>
                <p className="text-2xl font-bold text-blue-600 mb-1">~60%</p>
                <p className="text-xs text-gray-600">
                  Nước lọc, trà, cà phê (ít đường)
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Thực phẩm</p>
                <p className="text-2xl font-bold text-green-600 mb-1">~30%</p>
                <p className="text-xs text-gray-600">
                  Trái cây, rau củ, canh, súp
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-2">Chuyển hóa</p>
                <p className="text-2xl font-bold text-purple-600 mb-1">~10%</p>
                <p className="text-xs text-gray-600">
                  Nước tạo ra từ quá trình chuyển hóa thức ăn
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
              <p className="text-sm font-semibold text-gray-900 mb-2">Thực phẩm giàu nước:</p>
              <p className="text-sm text-gray-700">
                Dưa hấu (92% nước), dưa chuột (95%), cà chua (94%), cam (87%), 
                sữa (87%), canh, súp. Ăn nhiều trái cây và rau củ cũng giúp cung cấp nước.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Dehydration */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" aria-hidden="true" />
          Thiếu Nước (Dehydration)
        </h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">Dấu hiệu Thiếu Nước</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Dấu hiệu sớm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Khô miệng, khát nước</li>
                  <li>• Mệt mỏi, yếu sức</li>
                  <li>• Nước tiểu sẫm màu, ít</li>
                  <li>• Đau đầu nhẹ</li>
                  <li>• Táo bón</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Dấu hiệu nặng:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Chóng mặt, choáng váng</li>
                  <li>• Nhịp tim nhanh</li>
                  <li>• Huyết áp thấp</li>
                  <li>• Lú lẫn</li>
                  <li>• Ngất xỉu</li>
                </ul>
              </div>
            </div>
            <div className="bg-red-100 rounded-lg p-3 border border-red-300 mt-4">
              <p className="text-sm text-red-900">
                <strong>Cảnh báo:</strong> Thiếu nước nghiêm trọng cần được điều trị y tế ngay lập tức.
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Ai dễ bị Thiếu Nước?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Người cao tuổi:</strong> Giảm cảm giác khát, dễ quên uống nước
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Trẻ em:</strong> Tỷ lệ nước trong cơ thể cao hơn, dễ mất nước
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Người bị bệnh:</strong> Sốt, tiêu chảy, nôn mửa làm mất nhiều nước
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Vận động viên:</strong> Đổ mồ hôi nhiều, cần bù nước
                </span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Người làm việc ngoài trời:</strong> Tiếp xúc nắng nóng, đổ mồ hôi nhiều
                </span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Clinical Application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Ứng dụng trong Dinh dưỡng Lâm sàng
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Suy tim</h3>
            <p className="text-body mb-3">
              Người suy tim thường cần <strong>hạn chế nước</strong> để giảm gánh nặng cho tim. 
              Lượng nước được khuyến nghị tùy thuộc vào tình trạng cụ thể.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Lưu ý:</strong> Thường 1.5-2 lít/ngày, có thể cần ít hơn nếu suy tim nặng. 
              Cần theo dõi cân nặng và dấu hiệu phù.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bệnh Thận</h3>
            <p className="text-body mb-3">
              Tùy thuộc vào chức năng thận, có thể cần hạn chế hoặc tăng lượng nước. 
              Người lọc máu thường cần hạn chế nước giữa các lần lọc.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Lưu ý:</strong> Cần tham khảo ý kiến bác sĩ về lượng nước phù hợp.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Sau Phẫu thuật</h3>
            <p className="text-body">
              Đảm bảo đủ nước sau phẫu thuật rất quan trọng cho quá trình phục hồi. 
              Có thể cần truyền dịch nếu không thể uống đủ.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Tiêu chảy và Nôn mửa</h3>
            <p className="text-body">
              Cần bù nước ngay để tránh thiếu nước. Có thể dùng dung dịch bù nước (ORS) 
              hoặc nước có pha chút muối và đường.
            </p>
          </Card>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Mẹo Đảm bảo Đủ Nước
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TipCard
            title="Cách uống đủ nước"
            tips={[
              "Uống nước đều đặn trong ngày, không đợi đến khi khát",
              "Để chai nước ở nơi dễ thấy, nhắc nhở uống nước",
              "Uống nước trước, trong, và sau bữa ăn",
              "Ăn nhiều trái cây và rau củ (chứa nhiều nước)",
              "Uống canh, súp trong bữa ăn"
            ]}
          />

          <TipCard
            title="Kiểm tra đủ nước"
            tips={[
              "Nước tiểu: Màu vàng nhạt = đủ nước, màu sẫm = thiếu nước",
              "Tần suất: Đi tiểu 4-6 lần/ngày thường là bình thường",
              "Không khát: Nếu không cảm thấy khát thường xuyên, có thể đủ nước",
              "Da: Da đàn hồi tốt, không khô"
            ]}
            variant="info"
          />
        </div>
      </section>

      {/* What Counts as Water */}
      <section className="space-y-4">
        <h2 className="heading-2">Loại Nước nào Tốt?</h2>
        <ComparisonCard
          goodTitle="✓ Tốt cho Hydration"
          goodItems={[
            "Nước lọc",
            "Trà (ít đường hoặc không đường)",
            "Cà phê (với lượng vừa phải)",
            "Sữa",
            "Nước canh, súp",
            "Trái cây, rau củ"
          ]}
          badTitle="⚠ Hạn chế"
          badItems={[
            "Nước ngọt (nhiều đường, không tốt)",
            "Nước ép đóng hộp (nhiều đường)",
            "Đồ uống có cồn (gây mất nước)",
            "Đồ uống có caffeine quá nhiều"
          ]}
          note="Cà phê và trà có caffeine có thể làm tăng bài tiết nước tiểu, nhưng vẫn đóng góp vào tổng lượng nước. Tuy nhiên, nước lọc vẫn là lựa chọn tốt nhất."
        />
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('hydration').map((article) => (
            <Card key={article.slug} href={article.href}>
              <h3 className="heading-5 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety Disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có suy tim, bệnh thận, 
          hoặc các vấn đề sức khỏe khác ảnh hưởng đến nhu cầu nước, hãy tham khảo ý kiến 
          của bác sĩ về lượng nước phù hợp. Một số tình trạng yêu cầu hạn chế nước, 
          không phải tăng nước.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { ComparisonCard } from "../../components/ComparisonCard";
import { AlertTriangle, Heart, Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Natri (Muối) và Sức khỏe",
  description:
    "Hiểu về natri (muối) trong chế độ ăn - vai trò, tác hại của thừa natri, nhu cầu khuyến nghị, và cách giảm natri trong chế độ ăn cho người tăng huyết áp, suy tim, bệnh thận.",
  keywords: [
    "natri",
    "muối",
    "sodium",
    "tăng huyết áp",
    "suy tim",
    "bệnh thận",
    "huyết áp",
    "giảm muối",
  ],
};

export default function SodiumHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Natri (Muối) và Sức khỏe" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">
            Natri (Muối) và Sức khỏe
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Natri (muối) là cần thiết cho cơ thể, nhưng quá nhiều natri có thể gây ra nhiều vấn đề sức khỏe. 
          Hiểu về natri giúp bạn đưa ra lựa chọn tốt cho sức khỏe, đặc biệt nếu bạn có tăng huyết áp, 
          suy tim, hoặc bệnh thận.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Natri cần thiết</strong> cho cơ thể, nhưng chỉ cần một lượng nhỏ
          </li>
          <li>
            <strong>Quá nhiều natri</strong> có thể gây tăng huyết áp, suy tim, bệnh thận
          </li>
          <li>Khuyến nghị: <strong>&lt; 2,300mg/ngày</strong> (khoảng 1 thìa cà phê muối)</li>
          <li>Người tăng huyết áp/suy tim: <strong>&lt; 2,000mg/ngày</strong></li>
          <li>Hầu hết natri đến từ thực phẩm chế biến sẵn, không phải muối ăn</li>
        </ul>
      </Callout>

      {/* What is Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2">Natri là gì và Tại sao Cần thiết?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Natri</strong> là một khoáng chất cần thiết cho cơ thể. Nó giúp:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="heading-5 mb-2">Chức năng cơ thể</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Duy trì cân bằng nước</li>
                <li>• Hỗ trợ chức năng thần kinh</li>
                <li>• Hỗ trợ co cơ</li>
                <li>• Điều hòa huyết áp</li>
              </ul>
            </Card>
            <Card>
              <h3 className="heading-5 mb-2">Nguồn natri</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Muối ăn (NaCl)</li>
                <li>• Thực phẩm tự nhiên</li>
                <li>• Thực phẩm chế biến sẵn</li>
                <li>• Gia vị, nước chấm</li>
              </ul>
            </Card>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Lưu ý quan trọng:</strong> Cơ thể chỉ cần khoảng 500mg natri/ngày để hoạt động, 
              nhưng hầu hết chúng ta ăn nhiều hơn gấp 4-5 lần. Lượng thừa này gây ra các vấn đề sức khỏe.
            </p>
          </div>
        </div>
      </section>

      {/* Too Much Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" aria-hidden="true" />
          Tác hại của Quá nhiều Natri
        </h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">1. Tăng Huyết áp</h3>
            <p className="text-body text-red-900 mb-3">
              Khi bạn ăn quá nhiều natri, cơ thể giữ nước để pha loãng natri. 
              Điều này làm tăng lượng máu và áp lực lên thành mạch máu, dẫn đến tăng huyết áp.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <p className="text-sm text-gray-700">
                <strong>Ví dụ:</strong> Giống như bơm thêm nước vào một ống dẫn nước, 
                áp lực sẽ tăng lên. Tương tự, quá nhiều natri làm tăng áp lực trong mạch máu.
              </p>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">2. Suy tim</h3>
            <p className="text-body text-red-900">
              Quá nhiều natri làm tim phải làm việc nhiều hơn để bơm máu, 
              có thể làm nặng thêm tình trạng suy tim. Người suy tim thường cần hạn chế natri nghiêm ngặt.
            </p>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">3. Bệnh Thận</h3>
            <p className="text-body text-red-900">
              Thận phải làm việc nhiều hơn để loại bỏ natri thừa. Quá nhiều natri có thể 
              làm tổn thương thận và làm nặng thêm bệnh thận mạn tính.
            </p>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">4. Phù (Sưng)</h3>
            <p className="text-body text-red-900">
              Quá nhiều natri có thể gây phù ở chân, tay, và mặt do cơ thể giữ nước.
            </p>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">5. Loãng Xương</h3>
            <p className="text-body text-red-900">
              Quá nhiều natri có thể làm tăng bài tiết canxi qua nước tiểu, 
              có thể ảnh hưởng đến sức khỏe xương.
            </p>
          </Card>
        </div>
      </section>

      {/* How Much Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên Ăn Bao nhiêu Natri?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3">Người khỏe mạnh</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">
              &lt; 2,300mg/ngày
            </p>
            <p className="text-sm text-blue-900">
              Tương đương khoảng <strong>1 thìa cà phê muối</strong> (5-6g muối)
            </p>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">
              Người có Tăng huyết áp, Suy tim, Bệnh thận
            </h3>
            <p className="text-3xl font-bold text-red-600 mb-2">
              &lt; 2,000mg/ngày
            </p>
            <p className="text-sm text-red-900">
              Thậm chí có thể cần <strong>&lt; 1,500mg/ngày</strong> tùy tình trạng
            </p>
          </Card>
        </div>

        <Card>
          <h3 className="heading-4 mb-3">Thực tế hiện tại</h3>
          <p className="text-body mb-3">
            Hầu hết người Việt Nam ăn khoảng <strong>3,000-5,000mg natri/ngày</strong>, 
            cao hơn nhiều so với khuyến nghị. Lý do chính:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>
                <strong>Thực phẩm chế biến sẵn:</strong> Đồ hộp, snack, thực phẩm đóng gói 
                thường chứa rất nhiều natri
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>
                <strong>Gia vị và nước chấm:</strong> Nước mắm, nước tương, tương ớt, 
                bột canh chứa nhiều natri
              </span>
            </li>
            <li className="flex items-start gap-2">
              <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <span>
                <strong>Đồ ăn ngoài:</strong> Nhà hàng, quán ăn thường dùng nhiều muối để tăng hương vị
              </span>
            </li>
          </ul>
        </Card>
      </section>

      {/* Sources of Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2">Natri đến từ Đâu?</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nguồn natri chính trong chế độ ăn</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded border border-red-200">
                <span className="font-medium text-gray-900">Thực phẩm chế biến sẵn</span>
                <span className="text-red-700 font-semibold">~75%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border border-yellow-200">
                <span className="font-medium text-gray-900">Muối ăn khi nấu</span>
                <span className="text-yellow-700 font-semibold">~15%</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
                <span className="font-medium text-gray-900">Thực phẩm tự nhiên</span>
                <span className="text-green-700 font-semibold">~10%</span>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Thực phẩm chứa nhiều natri</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Thực phẩm chế biến:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Đồ hộp (thịt, cá, rau)</li>
                  <li>• Snack đóng gói (bim bim, khoai tây chiên)</li>
                  <li>• Thịt nguội, xúc xích, giò chả</li>
                  <li>• Mì ăn liền, phở ăn liền</li>
                  <li>• Bánh mì, bánh quy</li>
                  <li>• Pizza, hamburger</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Gia vị và nước chấm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Nước mắm (1 thìa ~1,000mg)</li>
                  <li>• Nước tương (1 thìa ~900mg)</li>
                  <li>• Bột canh, hạt nêm</li>
                  <li>• Tương ớt, tương cà</li>
                  <li>• Mắm tôm, mắm ruốc</li>
                  <li>• Muối ăn (1 thìa cà phê ~2,300mg)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How to Reduce Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách Giảm Natri trong Chế độ Ăn
        </h2>
        <div className="space-y-4">
          <TipCard
            title="Mẹo giảm natri"
            tips={[
              "Đọc nhãn thực phẩm: Kiểm tra hàm lượng natri. Chọn sản phẩm có ít natri hơn (< 140mg/khẩu phần là 'thấp')",
              "Nấu ăn ở nhà: Tự nấu giúp bạn kiểm soát lượng muối",
              "Dùng gia vị thay muối: Tỏi, gừng, chanh, ớt, các loại thảo mộc (húng quế, ngò, thì là) để tăng hương vị",
              "Rửa đồ hộp: Nếu dùng đồ hộp, rửa sạch trước khi nấu để giảm natri",
              "Giảm dần: Giảm muối từ từ để vị giác quen dần. Sau vài tuần, bạn sẽ không nhận thấy sự khác biệt",
              "Hạn chế nước chấm: Dùng ít nước mắm, nước tương. Có thể pha loãng hoặc dùng chanh, ớt thay thế",
              "Chọn thực phẩm tươi: Thực phẩm tươi tự nhiên có ít natri hơn thực phẩm chế biến"
            ]}
          />

          <ComparisonCard
            goodTitle="Chọn"
            goodItems={[
              "Phở tươi tự nấu với ít nước mắm (< 500mg natri)",
              "Thực phẩm tươi sống",
              "Gia vị tự nhiên (tỏi, gừng, chanh)"
            ]}
            badTitle="Thay vì"
            badItems={[
              "Mì ăn liền (2,000mg natri/gói)",
              "Thực phẩm chế biến sẵn",
              "Nhiều nước mắm, nước tương"
            ]}
            className="mt-4"
          />
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
            <h3 className="heading-4 mb-3">Tăng Huyết áp</h3>
            <p className="text-body mb-3">
              Giảm natri là một trong những cách hiệu quả nhất để giảm huyết áp. 
              Giảm 1,000mg natri/ngày có thể giảm huyết áp tâm thu 2-8 mmHg.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Khuyến nghị:</strong> &lt; 2,000mg/ngày, thậm chí &lt; 1,500mg/ngày nếu có thể.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Suy tim</h3>
            <p className="text-body mb-3">
              Người suy tim thường cần hạn chế natri nghiêm ngặt để giảm phù và giảm gánh nặng cho tim.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Khuyến nghị:</strong> Thường &lt; 2,000mg/ngày, có thể cần &lt; 1,500mg/ngày 
              tùy tình trạng.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bệnh Thận</h3>
            <p className="text-body mb-3">
              Thận bị tổn thương khó loại bỏ natri thừa. Hạn chế natri giúp bảo vệ thận 
              và giảm phù.
            </p>
            <p className="text-sm text-gray-600">
              <strong>Khuyến nghị:</strong> Thường &lt; 2,000mg/ngày, có thể cần điều chỉnh 
              theo chức năng thận.
            </p>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('sodium-health').map((article) => (
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
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có tăng huyết áp, suy tim, 
          bệnh thận, hoặc các vấn đề sức khỏe khác, hãy tham khảo ý kiến của chuyên gia dinh dưỡng 
          hoặc bác sĩ để có kế hoạch ăn uống phù hợp với tình trạng của bạn. 
          Không nên giảm natri quá đột ngột hoặc quá nhiều mà không có hướng dẫn.
        </p>
      </Callout>
    </main>
  );
}

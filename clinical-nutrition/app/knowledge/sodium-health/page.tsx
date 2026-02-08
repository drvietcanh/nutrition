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
        <h2 className="heading-2">Muối là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Muối (natri)</strong> giúp:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2 text-center">🩺 Duy trì huyết áp</h3>
              <p className="text-sm text-gray-700 text-center">Giúp điều hòa huyết áp bình thường</p>
            </Card>
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2 text-center">🧠 Truyền tín hiệu thần kinh</h3>
              <p className="text-sm text-gray-700 text-center">Hỗ trợ chức năng thần kinh</p>
            </Card>
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2 text-center">💪 Co cơ</h3>
              <p className="text-sm text-gray-700 text-center">Hỗ trợ co cơ bắp</p>
            </Card>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 cơ thể vẫn cần muối, nhưng không cần nhiều.</strong>
            </p>
            <p className="text-sm text-blue-900 mt-2">
              cơ thể chỉ cần khoảng 500mg natri/ngày để hoạt động, 
              nhưng hầu hết chúng ta ăn nhiều hơn gấp 4-5 lần. Lượng thừa này gây ra các vấn đề sức khỏe.
            </p>
          </div>

          <Card>
            <h3 className="heading-5 mb-2">Nguồn natri</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Muối ăn (NaCl)</li>
              <li>• Thực phẩm tự nhiên</li>
              <li>• Thực phẩm chế biến sẵn</li>
              <li>• Gia vị, nước chấm (nước mắm, nước tương)</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Too Much Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertTriangle className="w-6 h-6 text-red-600" aria-hidden="true" />
          Ăn nhiều Muối có hại gì?
        </h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">1. Tăng huyết áp</h3>
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
            <h3 className="heading-4 text-red-900 mb-3">2. Giữ nước</h3>
            <p className="text-body text-red-900">
              Quá nhiều natri làm cơ thể giữ nước, gây phù ở chân, tay, và mặt. 
              Điều này đặc biệt nguy hiểm cho người suy tim, bệnh thận.
            </p>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">3. Tăng nguy cơ tim mạch, đột quỵ</h3>
            <p className="text-body text-red-900">
              Tăng huyết áp do quá nhiều natri làm tăng nguy cơ bệnh tim mạch, đột quỵ. 
              Tim phải làm việc nhiều hơn để bơm máu, có thể dẫn đến suy tim.
            </p>
          </Card>

          <div className="mt-4 p-3 bg-red-50 rounded border border-red-200">
            <p className="text-sm text-red-900">
              <strong>⚠️ Nhiều người ăn mặn mà không biết.</strong> 
              Muối có thể ẩn trong nhiều thực phẩm mà bạn không nghĩ đến, 
              như mì gói, đồ chế biến sẵn, nước chấm.
            </p>
          </div>

          <Card className="border-amber-200 bg-amber-50">
            <h3 className="heading-4 text-amber-900 mb-3">Các tác hại khác:</h3>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• <strong>Bệnh Thận:</strong> Thận phải làm việc nhiều hơn để loại bỏ natri thừa</li>
              <li>• <strong>Loãng Xương:</strong> Tăng bài tiết canxi qua nước tiểu</li>
            </ul>
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

      {/* Vietnamese Sodium Sources Table */}
      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Muối Phổ biến trong Bữa ăn Việt Nam</h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm">
            Bảng dưới đây giúp bạn nhận biết các nguồn muối phổ biến trong bữa ăn Việt Nam.
          </p>
        </Callout>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-red-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Lượng muối</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Muối, nước mắm</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dùng nêm nếm, 1 thìa nước mắm ~1,000mg natri</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đồ muối chua</strong> (dưa muối, cà muối)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Nên hạn chế, rửa sạch trước khi ăn</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Mì gói</strong> (1 gói)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Rất cao (~2,000mg)</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Không nên ăn thường xuyên</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thức ăn chế biến</strong> (giò chả, xúc xích)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ít kiểm soát, nên hạn chế</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thức ăn tươi</strong> (thịt, cá, rau tươi)</td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">An toàn hơn, tự kiểm soát khi nấu</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh mì</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Có muối trong bánh, cần lưu ý</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nước tương, tương ớt</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dùng ít, pha loãng</td>
              </tr>
            </tbody>
          </table>
        </div>
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

      {/* Not Too Little */}
      <section className="space-y-4">
        <h2 className="heading-2">Không phải ăn nhạt tuyệt đối là tốt</h2>
        <Card className="border-blue-200 bg-blue-50/30">
          <div className="space-y-3">
            <p className="text-body">
              <strong>Ăn quá nhạt</strong> cũng không tốt:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Ăn không ngon</strong> - dễ bỏ bữa, thiếu dinh dưỡng</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Dễ bỏ bữa</strong> - không có động lực ăn uống</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Người lao động nặng, ra mồ hôi</strong> → cần muối hơn để bù lại natri mất đi</span>
              </li>
            </ul>
            <Callout variant="info" title="👉 Quan trọng là giảm dần và phù hợp từng người">
              <p className="text-body-sm">
                Không cần ăn nhạt tuyệt đối. Mục tiêu là giảm muối từ từ, 
                vẫn giữ được hương vị món ăn nhưng ở mức an toàn. 
                Mỗi người có nhu cầu khác nhau tùy theo tình trạng sức khỏe và mức độ hoạt động.
              </p>
            </Callout>
          </div>
        </Card>
      </section>

      {/* How to Reduce Sodium */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Áp dụng Thực tế
        </h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50/30">
            <h3 className="heading-4 mb-3">Nguyên tắc Giảm Muối trong Đời sống Việt Nam</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong>Nêm nhạt dần</strong> - giảm muối từ từ khi nấu ăn, vị giác sẽ quen dần
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong>Giảm nước chấm</strong> - dùng ít nước mắm, nước tương, pha loãng hoặc dùng chanh, ớt thay thế
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong>Hạn chế mì gói, đồ chế biến</strong> - chứa rất nhiều muối, không nên ăn thường xuyên
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong>Dùng gia vị thay muối</strong> - tỏi, gừng, chanh, ớt, các loại thảo mộc để tăng hương vị
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <p className="text-sm text-gray-700">
                  <strong>Chọn thực phẩm tươi</strong> - tự nấu giúp kiểm soát lượng muối tốt hơn
                </p>
              </div>
            </div>
          </Card>

          <TipCard
            title="Mẹo giảm natri chi tiết"
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

          <ExampleBox variant="info" title="Cách Dùng Nước Mắm Đúng cách (Việt Nam)">
            <p className="text-sm mb-2">
              <strong>Nước mắm</strong> là gia vị phổ biến ở Việt Nam nhưng có rất nhiều natri (15,000-20,000mg/100ml).
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-2">
              <li><strong>Pha loãng:</strong> Pha nước mắm với nước, chanh, đường (nước mắm pha) - giảm natri</li>
              <li><strong>Dùng ít:</strong> Chỉ dùng 1-2 muỗng canh cho cả bữa ăn</li>
              <li><strong>Chọn loại ít natri:</strong> Nếu có, chọn nước mắm ít natri</li>
              <li><strong>Thay thế:</strong> Dùng chanh, ớt, tỏi để tăng hương vị thay vì nhiều nước mắm</li>
            </ul>
            <p className="text-sm">
              <strong>Ví dụ:</strong> Nước mắm pha: 1 muỗng nước mắm + 2 muỗng nước + 1 muỗng chanh + 1/2 muỗng đường.
            </p>
          </ExampleBox>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">So sánh Các loại Gia vị Việt Nam</h3>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Natri trong Gia vị (100ml/g):</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Nước mắm:</strong> 15,000-20,000mg - rất cao</li>
                <li>• <strong>Mắm tôm, mắm ruốc:</strong> 10,000-15,000mg - rất cao</li>
                <li>• <strong>Tương:</strong> 3,000-5,000mg - vừa phải</li>
                <li>• <strong>Chao:</strong> 2,000-3,000mg - ít hơn</li>
                <li>• <strong>Gia vị tự nhiên:</strong> Tỏi, gừng, chanh - rất ít natri</li>
              </ul>
            </div>
            <p className="text-xs text-blue-800 mt-2">
              <strong>Tips:</strong> Ưu tiên tương, chao thay vì nước mắm. Dùng gia vị tự nhiên (tỏi, gừng, chanh) để tăng hương vị.
            </p>
          </Card>

          <ExampleBox variant="tip" title="Cách Giảm Natri trong Món Ăn Việt Nam">
            <p className="text-sm mb-2">
              <strong>Canh:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-2">
              <li>Giảm nước mắm, tăng gia vị tự nhiên (tỏi, gừng, sả)</li>
              <li>Thêm cà chua, dứa để tăng vị ngọt tự nhiên, giảm muối</li>
              <li>Ví dụ: Canh chua cá - thêm cà chua, dứa, giảm nước mắm</li>
            </ul>
            <p className="text-sm mb-2">
              <strong>Kho:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Giảm nước mắm, tăng gia vị tự nhiên (gừng, nghệ, sả)</li>
              <li>Thêm cà chua, dứa để tăng vị ngọt tự nhiên</li>
              <li>Ví dụ: Cá kho tộ - thêm cà chua, giảm nước mắm</li>
            </ul>
          </ExampleBox>
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

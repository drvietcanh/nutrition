import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { FileText, CheckCircle2, AlertCircle, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đọc Nhãn Thực phẩm: Hướng dẫn Đơn giản",
  description:
    "Hướng dẫn cách đọc và hiểu nhãn thực phẩm để chọn lựa thực phẩm lành mạnh. Hiểu về thành phần dinh dưỡng, đường, muối, và chất béo.",
  keywords: [
    "nhãn thực phẩm",
    "đọc nhãn",
    "thành phần dinh dưỡng",
    "chọn thực phẩm",
    "dinh dưỡng",
  ],
};

export default function ReadingFoodLabelsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Đọc Nhãn Thực phẩm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Đọc Nhãn Thực phẩm: Hướng dẫn Đơn giản</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Biết cách đọc nhãn thực phẩm giúp bạn chọn lựa thực phẩm lành mạnh hơn. 
          Nhãn thực phẩm cho biết thành phần dinh dưỡng, giúp bạn kiểm soát lượng đường, muối, 
          và chất béo trong chế độ ăn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Nhãn thực phẩm cho biết <strong>thành phần dinh dưỡng</strong> trong một phần ăn
          </li>
          <li>
            Chú ý đến <strong>lượng đường, muối (natri), và chất béo</strong>
          </li>
          <li>
            <strong>Danh sách thành phần</strong> cho biết thực phẩm chứa gì (theo thứ tự từ nhiều đến ít)
          </li>
          <li>
            So sánh nhãn giữa các sản phẩm để chọn lựa tốt hơn
          </li>
          <li>
            Không phải tất cả thực phẩm đều có nhãn (thực phẩm tươi thường không có)
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nhãn Thực phẩm là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Nhãn thực phẩm</strong> là thông tin dinh dưỡng được in trên bao bì thực phẩm đóng gói. 
            Nhãn này cho biết thành phần dinh dưỡng, giúp bạn biết thực phẩm chứa bao nhiêu calo, 
            đường, muối, chất béo, và các chất dinh dưỡng khác.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Nhãn thực phẩm giống như "bảng thông tin" của thực phẩm. 
              Nó cho biết thực phẩm chứa gì, giúp bạn quyết định có nên mua và ăn hay không.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Các Phần Quan trọng trên Nhãn</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">1. Khẩu phần (Serving Size)</p>
                  <p className="text-sm text-gray-700">
                    Cho biết một phần ăn là bao nhiêu. Tất cả thông tin dinh dưỡng dưới đây là cho một phần này.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">2. Calo (Năng lượng)</p>
                  <p className="text-sm text-gray-700">
                    Cho biết một phần ăn cung cấp bao nhiêu calo.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">3. Thành phần Dinh dưỡng</p>
                  <p className="text-sm text-gray-700">
                    Liệt kê các chất dinh dưỡng: đường, chất béo, protein, muối (natri), vitamin, khoáng chất.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">4. Danh sách Thành phần</p>
                  <p className="text-sm text-gray-700">
                    Liệt kê các thành phần theo thứ tự từ nhiều đến ít. Thành phần đầu tiên là nhiều nhất.
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Đọc Nhãn: Những Điều Cần Chú ý</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">1. Đường (Sugar)</h3>
            <p className="text-body text-red-900 mb-3">
              Đường có nhiều tên khác nhau trên nhãn. Cần chú ý tổng lượng đường.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Tên đường thường gặp:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Đường, đường mía, đường nâu</li>
                <li>• Fructose, glucose, sucrose</li>
                <li>• Mật ong, siro ngô, siro cây phong</li>
                <li>• Nước ép trái cây cô đặc</li>
              </ul>
              <p className="text-xs text-amber-900 mt-2 font-semibold">
                Khuyến nghị: &lt; 25g đường/ngày cho phụ nữ, &lt; 36g/ngày cho nam giới
              </p>
            </div>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <h3 className="heading-4 text-amber-900 mb-3">2. Muối (Natri/Sodium)</h3>
            <p className="text-body text-amber-900 mb-3">
              Muối thường ẩn trong thực phẩm chế biến sẵn. Quá nhiều muối làm tăng huyết áp.
            </p>
            <div className="bg-white rounded-lg p-3 border border-amber-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Cách đọc:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Ít muối:</strong> &lt; 140mg natri/phần</li>
                <li>• <strong>Nhiều muối:</strong> &gt; 600mg natri/phần</li>
                <li>• <strong>Khuyến nghị:</strong> &lt; 2300mg natri/ngày (tương đương ~6g muối)</li>
              </ul>
              <p className="text-xs text-amber-900 mt-2">
                <strong>Mẹo:</strong> 1g natri = 2.5g muối. Nếu nhãn ghi 400mg natri = 1g muối
              </p>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3">3. Chất béo</h3>
            <p className="text-body text-blue-900 mb-3">
              Chú ý loại chất béo, không chỉ tổng lượng chất béo.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Cần tránh:</p>
              <ul className="text-xs text-gray-700 space-y-1 mb-2">
                <li>• <strong>Chất béo bão hòa:</strong> &lt; 20g/ngày</li>
                <li>• <strong>Chất béo trans:</strong> Tránh hoàn toàn (0g)</li>
              </ul>
              <p className="text-xs font-semibold text-gray-900 mb-1">Nên chọn:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Chất béo không bão hòa (từ dầu thực vật, cá)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">4. Danh sách Thành phần</h3>
            <p className="text-body mb-3">
              Thành phần được liệt kê theo thứ tự từ nhiều đến ít. Thành phần đầu tiên là nhiều nhất.
            </p>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-2">Ví dụ:</p>
              <p className="text-xs text-gray-700 mb-1">
                <strong>Nhãn ghi:</strong> "Đường, bột mì, dầu thực vật, muối..."
              </p>
              <p className="text-xs text-gray-700">
                <strong>Nghĩa là:</strong> Đường là thành phần nhiều nhất, sau đó là bột mì, rồi dầu...
              </p>
              <p className="text-xs text-amber-900 mt-2">
                <strong>Mẹo:</strong> Nếu đường, muối, hoặc chất béo xấu đứng đầu danh sách, 
                thực phẩm đó có thể không tốt cho sức khỏe.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực tế: So sánh Nhãn</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 1: So sánh Ngũ cốc Ăn sáng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-xs font-semibold text-red-900 mb-2">Ngũ cốc A (Không tốt)</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Đường: 15g/phần (60% calo từ đường!)</li>
                  <li>• Thành phần đầu: Đường, bột mì</li>
                  <li>• Chất xơ: 1g</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-green-900 mb-2">Ngũ cốc B (Tốt hơn)</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Đường: 5g/phần</li>
                  <li>• Thành phần đầu: Yến mạch, lúa mì nguyên cám</li>
                  <li>• Chất xơ: 5g</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Kết luận:</strong> Ngũ cốc B tốt hơn vì ít đường, nhiều chất xơ, và ngũ cốc nguyên cám đứng đầu.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 2: So sánh Nước sốt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-xs font-semibold text-red-900 mb-2">Nước sốt A</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Natri: 800mg/phần (35% nhu cầu/ngày!)</li>
                  <li>• Đường: 10g/phần</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-green-900 mb-2">Nước sốt B</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Natri: 200mg/phần</li>
                  <li>• Đường: 2g/phần</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Kết luận:</strong> Nước sốt B tốt hơn vì ít muối và ít đường hơn nhiều.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Luôn kiểm tra khẩu phần:</strong> Nhãn ghi cho một phần, nhưng bạn có thể ăn nhiều hơn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>So sánh sản phẩm:</strong> Đặt 2-3 sản phẩm cạnh nhau để so sánh
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đọc danh sách thành phần:</strong> Nếu đường, muối đứng đầu, tránh sản phẩm đó
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý "ẩn":</strong> Đường và muối có thể ẩn dưới nhiều tên khác nhau
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thực phẩm tươi:</strong> Thường không có nhãn nhưng thường tốt hơn thực phẩm chế biến
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm 'ít béo' luôn tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thực phẩm ít béo thường có nhiều đường để bù vị. 
                Kiểm tra nhãn để xem lượng đường.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Thực phẩm 'tự nhiên' luôn tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Từ "tự nhiên" không có nghĩa là tốt cho sức khỏe. 
                Đường tự nhiên vẫn là đường. Luôn đọc nhãn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không cần đọc nhãn nếu ăn ít"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ngay cả một phần nhỏ cũng có thể chứa nhiều đường, muối. 
                Luôn kiểm tra nhãn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Hiểu về muối trong thực phẩm
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu về đường trong thực phẩm
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong Chế độ Ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu về chất béo trên nhãn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Đọc nhãn thực phẩm giúp bạn chọn lựa tốt hơn, 
          nhưng không thay thế chế độ ăn cân bằng và đa dạng. Nếu bạn có bệnh lý đặc biệt, 
          hãy tham khảo chuyên gia dinh dưỡng để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

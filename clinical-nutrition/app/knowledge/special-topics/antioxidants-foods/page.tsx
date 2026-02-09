import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Sparkles, CheckCircle2, Apple, Leaf, Carrot } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chất chống oxy hóa trong thực phẩm",
  description:
    "Hiểu về chất chống oxy hóa - hợp chất tự nhiên trong thực phẩm giúp bảo vệ tế bào khỏi tổn thương. Nguồn thực phẩm giàu chất chống oxy hóa.",
  keywords: [
    "chất chống oxy hóa",
    "antioxidants",
    "thực phẩm",
    "bảo vệ tế bào",
    "dinh dưỡng",
  ],
};

export default function AntioxidantsFoodsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chất chống oxy hóa trong thực phẩm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Chất chống oxy hóa trong thực phẩm</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chất chống oxy hóa là các hợp chất tự nhiên trong thực phẩm giúp bảo vệ tế bào khỏi tổn thương. 
          Chúng có nhiều trong trái cây, rau củ có màu sắc rực rỡ. 
          Ăn đa dạng trái cây và rau củ là cách tốt nhất để có đủ chất chống oxy hóa.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất chống oxy hóa</strong> bảo vệ tế bào khỏi tổn thương
          </li>
          <li>
            Có nhiều trong <strong>trái cây, rau củ có màu sắc rực rỡ</strong>
          </li>
          <li>
            <strong>Vitamin C, E, beta-carotene</strong> là chất chống oxy hóa phổ biến
          </li>
          <li>
            <strong>Ăn đa dạng màu sắc</strong> - mỗi màu có chất chống oxy hóa khác nhau
          </li>
          <li>
            Thực phẩm tươi thường có nhiều chất chống oxy hóa hơn thực phẩm chế biến
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Chất chống oxy hóa là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chất chống oxy hóa</strong> là các hợp chất tự nhiên trong thực phẩm giúp bảo vệ tế bào 
            khỏi tổn thương do các gốc tự do (free radicals). Gốc tự do là các phân tử không ổn định 
            có thể gây tổn thương tế bào, dẫn đến lão hóa và bệnh tật.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Chất chống oxy hóa giống như "áo giáp" bảo vệ tế bào. 
              Khi bạn ăn trái cây, rau củ giàu chất chống oxy hóa, bạn đang "trang bị" cho cơ thể 
              khả năng chống lại tổn thương.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Lợi ích của chất chống oxy hóa</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Bảo vệ tế bào khỏi tổn thương</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Có thể giảm nguy cơ một số bệnh mạn tính</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Hỗ trợ hệ miễn dịch</span>
              </li>
              <li className="flex items-start gap-2">
                <Sparkles className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Có thể làm chậm quá trình lão hóa</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn chất chống oxy hóa</h2>
        <Card>
          <h3 className="heading-4 mb-3">Quy tắc "Cầu vồng" - Ăn đa dạng Màu sắc</h3>
          <p className="text-body mb-4">
            Mỗi màu sắc trong trái cây và rau củ thường chứa các chất chống oxy hóa khác nhau. 
            Ăn đa dạng màu sắc giúp bạn có nhiều loại chất chống oxy hóa.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-red-700 mb-2">🔴 Đỏ:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Cà chua, dâu tây, dưa hấu</li>
                <li>• Chứa lycopene, vitamin C</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-orange-700 mb-2">🟠 Cam/Vàng:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Cam, cà rốt, khoai lang</li>
                <li>• Chứa beta-carotene, vitamin C</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-green-700 mb-2">🟢 Xanh lá:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Rau bina, bông cải xanh, kiwi</li>
                <li>• Chứa lutein, vitamin C, E</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-purple-700 mb-2">🟣 Tím/Xanh dương:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Việt quất, nho, cà tím</li>
                <li>• Chứa anthocyanin</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn "cầu vồng":</strong> Cố gắng ăn nhiều màu sắc khác nhau mỗi ngày
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên thực phẩm tươi:</strong> Thường có nhiều chất chống oxy hóa hơn thực phẩm chế biến
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu đúng cách:</strong> Hấp, luộc nhanh giúp giữ lại chất chống oxy hóa
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cả vỏ (khi có thể):</strong> Nhiều chất chống oxy hóa ở vỏ (táo, nho)
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Cần uống viên chất chống oxy hóa"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Chất chống oxy hóa từ thực phẩm tốt hơn viên uống. 
                Thực phẩm có nhiều hợp chất hoạt động cùng nhau. Viên uống có thể không hiệu quả hoặc thậm chí gây hại nếu dùng quá nhiều.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần ăn một loại 'siêu thực phẩm'"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không có "siêu thực phẩm" nào có thể thay thế chế độ ăn đa dạng. 
                Quan trọng là ăn nhiều loại trái cây, rau củ khác nhau.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/healthy-cooking-methods">
            <h3 className="heading-5 mb-2">Phương pháp Nấu ăn lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Nấu đúng cách giúp giữ lại chất chống oxy hóa
            </p>
          </Card>
          <Card href="/knowledge/dietary-fiber">
            <h3 className="heading-5 mb-2">Chất xơ trong Dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Rau củ, trái cây cũng giàu chất xơ
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Chất chống oxy hóa từ thực phẩm là an toàn và tốt, 
          nhưng không nên tự ý uống viên bổ sung chất chống oxy hóa liều cao mà không có chỉ định của bác sĩ.
        </p>
      </Callout>
    </main>
  );
}

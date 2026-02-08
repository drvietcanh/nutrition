import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Apple, CheckCircle2, AlertCircle, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snacking Thông minh",
  description:
    "Hướng dẫn cách snack thông minh - chọn snack lành mạnh, kiểm soát khẩu phần, và snack đúng thời điểm.",
  keywords: [
    "snack",
    "ăn vặt",
    "snacking",
    "dinh dưỡng",
  ],
};

export default function SmartSnackingPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Snacking Thông minh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Apple className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Snacking Thông minh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Snack (ăn vặt) không phải lúc nào cũng xấu. Nếu chọn đúng, snack có thể cung cấp năng lượng, 
          giúp bạn no giữa các bữa, và thậm chí bổ sung thêm dinh dưỡng. 
          Quan trọng là chọn snack lành mạnh và kiểm soát khẩu phần.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Snack lành mạnh có thể <strong>cung cấp năng lượng</strong> và dinh dưỡng
          </li>
          <li>
            Chọn snack có <strong>protein và chất xơ</strong> để no lâu hơn
          </li>
          <li>
            <strong>Kiểm soát khẩu phần</strong> - snack không nên thay thế bữa chính
          </li>
          <li>
            <strong>Trái cây, hạt, sữa chua</strong> là lựa chọn tốt
          </li>
          <li>
            Tránh snack nhiều đường, muối, chất béo không tốt
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Snack lành mạnh</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">✓ Snack Tốt</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Apple className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Trái cây:</strong> Táo, chuối, cam, dâu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Rau củ:</strong> Cà rốt, dưa chuột, cà chua bi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Hạt:</strong> Hạnh nhân, hạt điều (30g)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Sữa chua:</strong> Sữa chua không đường</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Ví dụ kết hợp:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Táo + hạnh nhân</li>
                  <li>• Sữa chua + dâu</li>
                  <li>• Cà rốt + hummus</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">✗ Snack Nên tránh</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Bánh kẹo:</strong> Nhiều đường, ít dinh dưỡng</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Snack mặn:</strong> Khoai tây chiên, snack đóng gói (nhiều muối, chất béo)</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Nước ngọt:</strong> Nhiều đường, không dinh dưỡng</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chuẩn bị trước:</strong> Rửa trái cây, cắt rau củ sẵn để dễ lấy khi đói
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiểm soát khẩu phần:</strong> Đổ ra đĩa thay vì ăn trực tiếp từ túi
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp protein + chất xơ:</strong> Giúp no lâu hơn (ví dụ: táo + hạnh nhân)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống nước:</strong> Đôi khi bạn nghĩ đói nhưng thực ra là khát
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Lập kế hoạch bao gồm cả snack
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu về đường trong snack
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Snack lành mạnh có thể là phần của chế độ ăn cân bằng, 
          nhưng không thay thế bữa chính đầy đủ dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

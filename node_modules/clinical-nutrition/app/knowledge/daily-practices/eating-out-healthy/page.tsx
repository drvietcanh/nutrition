import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { UtensilsCrossed, CheckCircle2, AlertCircle, Coffee } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ăn uống Lành mạnh khi Đi ăn Ngoài",
  description:
    "Hướng dẫn cách chọn lựa thực phẩm lành mạnh khi đi ăn ngoài, tips cho nhà hàng, và cách kiểm soát khẩu phần.",
  keywords: [
    "ăn ngoài",
    "nhà hàng",
    "ăn uống lành mạnh",
    "dinh dưỡng",
  ],
};

export default function EatingOutHealthyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Ăn uống Lành mạnh khi Đi ăn Ngoài" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Ăn uống Lành mạnh khi Đi ăn Ngoài</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đi ăn ngoài không có nghĩa là phải từ bỏ chế độ ăn lành mạnh. 
          Với một vài mẹo đơn giản, bạn vẫn có thể thưởng thức bữa ăn ngon 
          mà vẫn tốt cho sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chọn món nướng, hấp, luộc</strong> thay vì chiên
          </li>
          <li>
            <strong>Yêu cầu nước sốt riêng</strong> để kiểm soát lượng
          </li>
          <li>
            <strong>Chọn rau củ</strong> làm món phụ
          </li>
          <li>
            <strong>Chia sẻ món</strong> hoặc gói phần còn lại về
          </li>
          <li>
            <strong>Uống nước</strong> thay vì nước ngọt
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Chọn Món</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">✓ Nên chọn:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Món nướng, hấp, luộc:</strong> Thịt nướng, cá hấp, gà luộc</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Rau củ:</strong> Rau xào, salad, canh rau</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Món có protein nạc:</strong> Thịt gà, cá, đậu phụ</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Nước:</strong> Nước lọc, trà không đường</span>
              </li>
            </ul>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">✗ Nên tránh hoặc hạn chế:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Món chiên:</strong> Gà rán, khoai tây chiên</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Món nhiều sốt kem, bơ:</strong> Pasta sốt kem, món sốt đậm đặc</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Nước ngọt, đồ uống có đường:</strong> Nhiều calo, ít dinh dưỡng</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Món quá lớn:</strong> Có thể chia sẻ hoặc gói về</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Mẹo Khi Đặt Món</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Yêu cầu nước sốt riêng:</strong> Để bạn kiểm soát lượng sốt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Yêu cầu ít muối, ít dầu:</strong> Nhiều nhà hàng sẵn sàng điều chỉnh
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thay khoai tây chiên bằng rau:</strong> Nhiều nơi cho phép thay đổi món phụ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chia sẻ món:</strong> Nếu món quá lớn, chia sẻ với người khác
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Gói phần còn lại:</strong> Ăn một nửa, gói một nửa về
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Lập kế hoạch cho bữa ăn ở nhà và ngoài
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/healthy-cooking-methods">
            <h3 className="heading-5 mb-2">Phương pháp Nấu ăn Lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Hiểu về phương pháp nấu tốt cho sức khỏe
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Ăn ngoài thỉnh thoảng là bình thường và thú vị. 
          Quan trọng là cân bằng và không quá lo lắng về từng bữa ăn.
        </p>
      </Callout>
    </main>
  );
}

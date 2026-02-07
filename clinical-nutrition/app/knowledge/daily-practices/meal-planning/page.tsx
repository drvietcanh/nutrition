import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Calendar, CheckCircle2, AlertCircle, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lập Kế hoạch Bữa ăn Hàng ngày",
  description:
    "Hướng dẫn cách lập kế hoạch bữa ăn đơn giản, thực tế để đảm bảo dinh dưỡng đầy đủ và tiết kiệm thời gian. Tips cho bữa sáng, trưa, tối.",
  keywords: [
    "lập kế hoạch bữa ăn",
    "meal planning",
    "thực đơn",
    "dinh dưỡng",
    "ăn uống lành mạnh",
  ],
};

export default function MealPlanningPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Lập Kế hoạch Bữa ăn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Lập Kế hoạch Bữa ăn Hàng ngày</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Lập kế hoạch bữa ăn giúp bạn ăn uống lành mạnh hơn, tiết kiệm thời gian và tiền bạc. 
          Không cần phức tạp - chỉ cần một vài nguyên tắc đơn giản để bắt đầu.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Lập kế hoạch giúp bạn <strong>ăn uống lành mạnh hơn</strong> và tiết kiệm thời gian
          </li>
          <li>
            Mỗi bữa nên có <strong>carbohydrate, protein, và rau củ</strong>
          </li>
          <li>
            <strong>Chuẩn bị trước</strong> giúp bạn không phải vội vàng chọn thực phẩm không tốt
          </li>
          <li>
            Bắt đầu đơn giản - lập kế hoạch cho <strong>2-3 ngày</strong> đầu tiên
          </li>
          <li>
            Linh hoạt - có thể điều chỉnh theo tình huống
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Lập Kế hoạch Bữa ăn?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Ăn uống lành mạnh hơn</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Tiết kiệm thời gian (không phải nghĩ "ăn gì")</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Tiết kiệm tiền (mua đúng, không lãng phí)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Giảm căng thẳng về ăn uống</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi không có kế hoạch:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Dễ chọn thực phẩm không tốt khi đói</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Mua nhiều nhưng không dùng hết</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Ăn không đủ rau củ, quá nhiều thực phẩm chế biến</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguyên tắc Cơ bản: Cấu trúc Bữa ăn</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Mỗi bữa nên có 3 thành phần:</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">1. Carbohydrate (Tinh bột)</p>
                <p className="text-xs text-gray-700">
                  Cơm, bánh mì, khoai tây, yến mạch - nguồn năng lượng chính
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">2. Protein (Đạm)</p>
                <p className="text-xs text-gray-700">
                  Thịt, cá, trứng, đậu, sữa - xây dựng và sửa chữa cơ thể
                </p>
              </div>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">3. Rau củ</p>
                <p className="text-xs text-gray-700">
                  Rau xanh, củ quả - cung cấp vitamin, khoáng chất, chất xơ
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Ví dụ Bữa ăn Cân bằng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Bữa sáng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 1 bát cháo yến mạch (carb)</li>
                  <li>• 1 quả trứng (protein)</li>
                  <li>• 1 quả chuối (trái cây)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Bữa trưa:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• 1 bát cơm (carb)</li>
                  <li>• 100g thịt gà (protein)</li>
                  <li>• Rau cải xào (rau củ)</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Lập Kế hoạch Đơn giản</h2>
        <Card>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <UtensilsCrossed className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Bước 1: Lập danh sách mua sắm</p>
                <p className="text-sm text-gray-700">
                  Viết ra những thực phẩm bạn cần cho 2-3 ngày. Bao gồm: tinh bột, protein, rau củ, trái cây.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UtensilsCrossed className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Bước 2: Lên thực đơn</p>
                <p className="text-sm text-gray-700">
                  Quyết định bữa sáng, trưa, tối cho 2-3 ngày. Không cần phức tạp - có thể lặp lại.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UtensilsCrossed className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Bước 3: Chuẩn bị trước (nếu có thể)</p>
                <p className="text-sm text-gray-700">
                  Rửa rau, nấu cơm, luộc trứng trước. Giúp tiết kiệm thời gian khi đói.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <UtensilsCrossed className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">Bước 4: Linh hoạt</p>
                <p className="text-sm text-gray-700">
                  Có thể thay đổi theo tình huống. Quan trọng là có kế hoạch để không phải vội vàng.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Kế hoạch 3 Ngày</h2>
        <Card>
          <div className="space-y-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Ngày 1:</p>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 text-xs text-gray-700">
                <p><strong>Sáng:</strong> Cháo yến mạch + trứng + chuối</p>
                <p><strong>Trưa:</strong> Cơm + thịt gà + rau cải</p>
                <p><strong>Tối:</strong> Bánh mì + cá hồi + salad</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Ngày 2:</p>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 text-xs text-gray-700">
                <p><strong>Sáng:</strong> Bánh mì + phô mai + cà chua</p>
                <p><strong>Trưa:</strong> Cơm + đậu phụ + bông cải xanh</p>
                <p><strong>Tối:</strong> Khoai tây nướng + thịt bò + rau bina</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Ngày 3:</p>
              <div className="bg-purple-50 rounded-lg p-3 border border-purple-200 text-xs text-gray-700">
                <p><strong>Sáng:</strong> Sữa chua + granola + trái cây</p>
                <p><strong>Trưa:</strong> Cơm + tôm + rau củ xào</p>
                <p><strong>Tối:</strong> Mì + thịt heo + rau sống</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bắt đầu nhỏ:</strong> Lập kế hoạch cho 2-3 ngày, không cần cả tuần
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lặp lại thực đơn:</strong> Không cần mỗi ngày khác nhau - lặp lại cũng tốt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chuẩn bị trước:</strong> Nấu nhiều hơn một bữa, để dành cho bữa sau
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Linh hoạt:</strong> Có thể thay đổi, nhưng có kế hoạch giúp bạn không vội vàng
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu về tinh bột trong bữa ăn
            </p>
          </Card>
          <Card href="/knowledge/protein-co-ban-trong-lam-sang">
            <h3 className="heading-5 mb-2">Protein cơ bản</h3>
            <p className="text-sm text-gray-600">
              Hiểu về đạm trong bữa ăn
            </p>
          </Card>
          <Card href="/knowledge/dietary-fiber">
            <h3 className="heading-5 mb-2">Chất xơ</h3>
            <p className="text-sm text-gray-600">
              Rau củ cung cấp chất xơ
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Lập kế hoạch bữa ăn là công cụ hữu ích, 
          nhưng không thay thế chế độ ăn cân bằng và đa dạng. Nếu bạn có bệnh lý đặc biệt, 
          hãy tham khảo chuyên gia dinh dưỡng để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

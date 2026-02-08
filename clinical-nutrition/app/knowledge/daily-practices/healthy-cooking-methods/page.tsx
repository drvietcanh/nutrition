import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ChefHat, CheckCircle2, AlertCircle, Flame } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Phương pháp Nấu ăn lành mạnh",
  description:
    "Hướng dẫn các phương pháp nấu ăn lành mạnh giúp giữ lại dinh dưỡng, giảm chất béo, và tăng hương vị tự nhiên của thực phẩm.",
  keywords: [
    "nấu ăn lành mạnh",
    "phương pháp nấu",
    "dinh dưỡng",
    "chế biến thực phẩm",
  ],
};

export default function HealthyCookingMethodsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Phương pháp Nấu ăn lành mạnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <ChefHat className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Phương pháp Nấu ăn lành mạnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Cách bạn nấu ăn ảnh hưởng đến dinh dưỡng và sức khỏe. 
          Một số phương pháp nấu giúp giữ lại nhiều vitamin và khoáng chất, 
          trong khi một số khác có thể làm mất dinh dưỡng hoặc thêm chất béo không cần thiết.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Hấp, luộc, nướng</strong> là phương pháp lành mạnh nhất
          </li>
          <li>
            <strong>Chiên, xào nhiều dầu</strong> thêm nhiều calo và chất béo
          </li>
          <li>
            Nấu quá lâu hoặc nhiệt độ quá cao có thể <strong>mất vitamin</strong>
          </li>
          <li>
            Sử dụng ít dầu, nhiều gia vị tự nhiên giúp món ăn ngon và lành mạnh hơn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Phương pháp Nấu Lành mạnh</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              Hấp (Steaming)
            </h3>
            <p className="text-body text-green-900 mb-3">
              <strong>Lành mạnh nhất!</strong> Giữ lại hầu hết vitamin và khoáng chất, không cần dầu.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Ưu điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Giữ lại nhiều vitamin (đặc biệt vitamin C, B)</li>
                <li>• Không cần dầu, ít calo</li>
                <li>• Giữ màu sắc và hương vị tự nhiên</li>
                <li>• Phù hợp: rau củ, cá, thịt gà</li>
              </ul>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              Luộc (Boiling)
            </h3>
            <p className="text-body text-blue-900 mb-3">
              Đơn giản, không cần dầu, nhưng một số vitamin có thể mất vào nước.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Lưu ý:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Dùng ít nước, nấu nhanh để giữ vitamin</li>
                <li>• Có thể dùng nước luộc để nấu canh (giữ lại vitamin)</li>
                <li>• Phù hợp: rau củ, trứng, thịt</li>
              </ul>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 text-purple-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              Nướng (Grilling/Baking)
            </h3>
            <p className="text-body text-purple-900 mb-3">
              Tạo hương vị thơm ngon, ít cần dầu, nhưng cần chú ý không nướng quá cháy.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Mẹo:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nướng ở nhiệt độ vừa phải</li>
                <li>• Tránh nướng quá cháy (có thể tạo chất độc hại)</li>
                <li>• Phù hợp: thịt, cá, rau củ</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Phương pháp Cần Hạn chế</h2>
        <Card className="border-red-200 bg-red-50">
          <h3 className="heading-4 text-red-900 mb-3 flex items-center gap-2">
            <AlertCircle className="w-5 h-5" aria-hidden="true" />
            Chiên (Frying)
          </h3>
          <p className="text-body text-red-900 mb-3">
            Thêm nhiều calo và chất béo, có thể tạo chất độc hại ở nhiệt độ cao.
          </p>
          <div className="bg-white rounded-lg p-3 border border-red-200">
            <p className="text-xs font-semibold text-gray-900 mb-1">Vấn đề:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Thêm nhiều calo (1 thìa dầu = ~120 calo)</li>
              <li>• Ở nhiệt độ cao có thể tạo chất độc hại</li>
              <li>• Nếu chiên, dùng dầu tốt (dầu ô liu, dầu hướng dương) và chiên nhanh</li>
            </ul>
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
                <strong>Ưu tiên hấp, luộc, nướng:</strong> Giữ lại nhiều dinh dưỡng hơn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu nhanh, nhiệt độ vừa:</strong> Tránh mất vitamin
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Dùng ít dầu:</strong> Nếu cần, dùng dầu tốt (dầu ô liu) và dùng ít
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thêm gia vị tự nhiên:</strong> Tỏi, gừng, ớt, rau thơm thay vì nhiều muối, đường
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong Chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu về chất béo và cách chọn dầu tốt
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Lập kế hoạch với phương pháp nấu lành mạnh
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Phương pháp nấu ăn là một phần của chế độ ăn lành mạnh, 
          nhưng không thay thế chế độ ăn cân bằng và đa dạng.
        </p>
      </Callout>
    </main>
  );
}

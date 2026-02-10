import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Clock, Zap, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người bận rộn",
  description:
    "Quick tips và hướng dẫn dinh dưỡng cho người có lối sống bận rộn. Cách ăn uống lành mạnh khi không có nhiều thời gian.",
  keywords: [
    "dinh dưỡng bận rộn",
    "busy lifestyle",
    "quick meals",
    "time-saving",
    "healthy eating",
  ],
};

export default function NutritionBusyLifestylePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Dinh dưỡng cho Người bận rộn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người bận rộn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Cuộc sống bận rộn không có nghĩa là bạn phải hy sinh dinh dưỡng. Với một vài tips đơn giản, 
          bạn vẫn có thể ăn uống lành mạnh ngay cả khi không có nhiều thời gian.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chuẩn bị trước</strong> là chìa khóa - dù chỉ 10-15 phút
          </li>
          <li>
            <strong>Quick meals</strong> không phải là đồ ăn nhanh không tốt
          </li>
          <li>
            <strong>Snacking thông minh</strong> giúp bạn không đói và chọn đồ không tốt
          </li>
          <li>
            <strong>Linh hoạt</strong> - không cần hoàn hảo, chỉ cần tốt hơn
          </li>
          <li>
            <strong>Ưu tiên</strong> - một vài bữa lành mạnh tốt hơn không có bữa nào
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Quick tips cho Bữa sáng</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa sáng nhanh (5-10 phút)</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Trứng + Bánh mì (5 phút)</p>
                <p className="text-sm text-gray-700">
                  Chiên trứng nhanh, ăn với bánh mì nguyên cám + trái cây
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Yến mạch Overnight (Chuẩn bị tối hôm trước)</p>
                <p className="text-sm text-gray-700">
                  Yến mạch + sữa + trái cây để qua đêm, sáng chỉ cần lấy ra ăn
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Sữa chua + Trái cây + Quả hạch (2 phút)</p>
                <p className="text-sm text-gray-700">
                  Trộn sữa chua với trái cây và quả hạch, có thể mang đi
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Cháo thịt gà (5 phút - nấu sẵn hoặc mua)</p>
                <p className="text-sm text-gray-700">
                  <strong>món ăn Việt Nam:</strong> Cháo thịt gà với rau thơm - nhanh, dễ tiêu, đủ dinh dưỡng
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Bánh mì + Thịt/Trứng (3 phút)</p>
                <p className="text-sm text-gray-700">
                  <strong>món ăn Việt Nam:</strong> Bánh mì với thịt nướng hoặc trứng - nhanh, tiện lợi, có thể mang đi
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Quick tips cho Bữa trưa</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa trưa Nhanh (10-15 phút hoặc Meal prep)</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Salad + Protein (10 phút)</p>
                <p className="text-sm text-gray-700">
                  Rau xanh + thịt gà nướng sẵn (meal prep) + dầu ô liu
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Wrap/Bánh mì Nhanh (10 phút)</p>
                <p className="text-sm text-gray-700">
                  Bánh mì nguyên cám + thịt nạc + rau + phô mai ít béo
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Hộp meal prep (0 phút)</p>
                <p className="text-sm text-gray-700">
                  Chuẩn bị từ cuối tuần, chỉ cần hâm nóng
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Phở/Bún nhanh (10 phút hoặc mua)</p>
                <p className="text-sm text-gray-700">
                  <strong>món ăn Việt Nam:</strong> Phở hoặc bún với nhiều rau sống và thịt nạc - 
                  có thể mua sẵn hoặc nấu nhanh, yêu cầu nhiều rau, ít bánh phở/bún
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Zap className="w-5 h-5 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Cơm + Món mặn sẵn (5 phút)</p>
                <p className="text-sm text-gray-700">
                  <strong>món ăn Việt Nam:</strong> Cơm nấu sẵn + thịt kho/cá kho sẵn + rau luộc nhanh - 
                  nấu nhiều món mặn một lần, dùng nhiều bữa
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Snacking thông minh</h2>
        <Card>
          <h3 className="heading-4 mb-3">Snack nhanh và lành mạnh</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Snack tốt (Mang theo):</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Trái cây tươi (táo, chuối, <strong>ổi, xoài</strong>)</li>
                <li>• Quả hạch (hạnh nhân, óc chó)</li>
                <li>• Sữa chua</li>
                <li>• Rau củ cắt sẵn (cà rốt, dưa chuột)</li>
                <li>• Bánh mì nguyên cám + bơ đậu phộng</li>
                <li>• <strong>Bánh mì + chả/giò (món ăn Việt Nam)</strong></li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Tránh (Khi bận):</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Kẹo, bánh ngọt</li>
                <li>• Đồ chiên</li>
                <li>• Nước ngọt</li>
                <li>• Đồ ăn nhanh nhiều calo</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Chuẩn bị snack lành mạnh: Mang theo trái cây, quả hạch để tránh chọn đồ không tốt khi đói' },
            { type: 'tip', text: 'Meal prep cuối tuần: Chuẩn bị 2-3 món để dùng trong tuần' },
            { type: 'tip', text: 'sử dụng thực phẩm tiện lợi: Rau củ đông lạnh, thịt nướng sẵn, đậu đóng hộp' },
            { type: 'check', text: 'Ưu tiên bữa quan trọng: Nếu chỉ có thời gian cho 1 bữa lành mạnh, chọn bữa trưa hoặc tối' },
            { type: 'check', text: 'Linh hoạt: Không cần hoàn hảo, một vài bữa lành mạnh tốt hơn không có bữa nào' },
            { type: 'warning', text: 'Tránh bỏ bữa: Bỏ bữa làm bạn đói hơn và dễ chọn đồ không tốt sau đó' },
            { type: 'info', text: 'Uống đủ nước: Nước giúp bạn no và tỉnh táo, đặc biệt khi bận rộn' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <ExampleBox variant="info" title="Tình huống: Người làm việc văn phòng bận rộn">
          <p className="mb-2">
            <strong>Bữa sáng (5 phút):</strong> Yến mạch overnight (chuẩn bị tối hôm trước) + trái cây
          </p>
          <p className="mb-2">
            <strong>Snack giữa sáng (2 phút):</strong> Quả hạch + trái cây (mang từ nhà)
          </p>
          <p className="mb-2">
            <strong>Bữa trưa (0 phút):</strong> Hộp meal prep (chuẩn bị cuối tuần) - chỉ cần hâm nóng
          </p>
          <p className="mb-2">
            <strong>Snack chiều (2 phút):</strong> Sữa chua + quả hạch
          </p>
          <p className="mb-2">
            <strong>Bữa tối (15 phút):</strong> Cá nướng nhanh + rau củ đông lạnh + cơm (nấu sẵn) hoặc
            <strong> Cơm + thịt kho sẵn + rau luộc nhanh (món ăn Việt Nam)</strong>
          </p>
          <p className="text-xs text-gray-600 mt-2">
            <strong>Lưu ý:</strong> món ăn Việt Nam như thịt kho, cá kho có thể nấu nhiều một lần, 
            để dành dùng nhiều bữa, tiết kiệm thời gian.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Không có thời gian = phải ăn đồ không tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Với một chút chuẩn bị, bạn vẫn có thể ăn lành mạnh. 
                Meal prep và snack thông minh là chìa khóa.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải nấu từ đầu mới lành mạnh"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thực phẩm tiện lợi (rau đông lạnh, thịt nướng sẵn) 
                vẫn tốt và tiết kiệm thời gian.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Bỏ bữa tiết kiệm thời gian"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bỏ bữa làm bạn đói hơn, mệt hơn, và dễ chọn đồ không tốt sau đó. 
                Ăn đều đặn tốt hơn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/weekly-meal-planning">
            <h3 className="heading-5 mb-2">Lập kế hoạch Bữa ăn Tuần</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn cho người bận rộn
            </p>
          </Card>
          <Card href="/knowledge/meal-prep">
            <h3 className="heading-5 mb-2">Chuẩn bị Bữa ăn (Meal prep)</h3>
            <p className="text-sm text-gray-600">
              Cách chuẩn bị bữa ăn trước để tiết kiệm thời gian
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/smart-snacking">
            <h3 className="heading-5 mb-2">Snacking thông minh</h3>
            <p className="text-sm text-gray-600">
              Cách snack lành mạnh khi bận rộn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho người bận rộn là về tìm 
          cách phù hợp với lối sống của bạn, không phải về hoàn hảo. Quan trọng là làm tốt nhất 
          có thể trong tình huống của bạn.
        </p>
      </Callout>
    </main>
  );
}

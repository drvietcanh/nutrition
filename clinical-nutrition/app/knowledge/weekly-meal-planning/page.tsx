import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Calendar, CheckCircle2, AlertCircle, ClipboardList } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Lập Kế hoạch Bữa ăn Tuần",
  description:
    "Hướng dẫn step-by-step cách lập kế hoạch bữa ăn cho cả tuần. Templates và tips thực tế để ăn uống lành mạnh, tiết kiệm thời gian và tiền bạc.",
  keywords: [
    "lập kế hoạch bữa ăn",
    "weekly meal planning",
    "meal prep",
    "thực đơn tuần",
    "dinh dưỡng",
  ],
};

export default function WeeklyMealPlanningPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Lập Kế hoạch Bữa ăn Tuần" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Calendar className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Lập Kế hoạch Bữa ăn Tuần</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Lập kế hoạch bữa ăn cho cả tuần giúp bạn ăn uống lành mạnh hơn, tiết kiệm thời gian 
          và tiền bạc. Không cần phức tạp - chỉ cần một vài bước đơn giản để bắt đầu.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Lập kế hoạch <strong>1 lần/tuần</strong> (ví dụ: Chủ nhật) cho cả tuần
          </li>
          <li>
            Bắt đầu với <strong>2-3 bữa</strong> đầu tiên, sau đó mở rộng
          </li>
          <li>
            Sử dụng <strong>thực phẩm theo mùa</strong> để tiết kiệm
          </li>
          <li>
            <strong>Linh hoạt</strong> - có thể điều chỉnh theo tình huống
          </li>
          <li>
            <strong>Chuẩn bị trước</strong> một số món để tiết kiệm thời gian
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Lập Kế hoạch Bữa ăn Tuần?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ăn uống lành mạnh hơn (có kế hoạch)</span>
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
                    <span>Ăn không đủ rau củ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Chi phí cao hơn (mua vội, không so sánh)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Lập Kế hoạch Bữa ăn Tuần: 5 Bước Đơn giản</h2>
        <div className="space-y-4">
          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">1</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Chọn Ngày Lập Kế hoạch</h3>
                <p className="text-body-sm">
                  Chọn một ngày cố định mỗi tuần để lập kế hoạch (ví dụ: Chủ nhật). 
                  Dành 15-30 phút để lên kế hoạch cho cả tuần.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">2</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Xem Lịch Trình Tuần</h3>
                <p className="text-body-sm mb-2">
                  Xem lịch trình của bạn để biết:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Ngày nào bận rộn (cần bữa ăn nhanh)</li>
                  <li>Ngày nào có thời gian nấu</li>
                  <li>Ngày nào đi ăn ngoài</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">3</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Lên Danh sách Bữa ăn</h3>
                <p className="text-body-sm mb-2">
                  Viết ra các bữa ăn cho cả tuần. Bắt đầu với bữa tối (thường phức tạp nhất), 
                  sau đó lên bữa trưa và bữa sáng.
                </p>
                <ExampleBox variant="tip" title="Mẹo">
                  <p className="text-sm">
                    Sử dụng "theme" cho mỗi ngày: Thứ 2 = Thịt gà, Thứ 3 = Cá, Thứ 4 = Đậu, 
                    v.v. Điều này giúp bạn không phải nghĩ quá nhiều.
                  </p>
                </ExampleBox>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">4</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Tạo Danh sách Mua sắm</h3>
                <p className="text-body-sm mb-2">
                  Dựa trên kế hoạch bữa ăn, tạo danh sách mua sắm. Nhóm theo:
                </p>
                <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700">
                  <li>Rau củ và trái cây</li>
                  <li>Thịt, cá, protein</li>
                  <li>Ngũ cốc, bánh mì</li>
                  <li>Đồ khô, gia vị</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-sm font-bold text-blue-700">5</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Chuẩn bị Trước (Tùy chọn)</h3>
                <p className="text-body-sm">
                  Nếu có thời gian, chuẩn bị một số món trước (rửa rau, nấu cơm, nấu thịt) 
                  để tiết kiệm thời gian trong tuần.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Template Kế hoạch Bữa ăn Tuần</h2>
        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Kế hoạch Bữa ăn 1 Tuần</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ngày</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Bữa Sáng</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Bữa Trưa</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Bữa Tối</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Thứ 2</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Trứng + bánh mì + trái cây</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thịt gà nướng + rau + cơm</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Cá hồi + salad + khoai tây</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Thứ 3</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Yến mạch + sữa chua + quả hạch</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Cá hồi (thừa tối qua) + rau</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thịt heo nạc + rau luộc + cơm</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Thứ 4</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Sữa chua + trái cây + quả hạch</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đậu phụ xào + rau + cơm</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thịt gà + rau xào + cơm</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Thứ 5</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Trứng + bánh mì + trái cây</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thịt gà (thừa tối qua) + rau</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Cá thu + rau + khoai tây</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Thứ 6</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Yến mạch + sữa + trái cây</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Cá thu (thừa tối qua) + rau</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đi ăn ngoài hoặc pizza tự làm</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Thứ 7</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Bánh mì + trứng + rau</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đậu đen + gạo lứt + rau</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thịt bò nạc + rau + cơm</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">Chủ nhật</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Sáng muộn: Trứng + bánh mì + trái cây</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thịt bò (thừa tối qua) + rau</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Đậu phụ + rau + cơm</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            <strong>Mẹo:</strong> Nấu nhiều hơn một chút vào bữa tối để dùng cho bữa trưa hôm sau. 
            Điều này tiết kiệm thời gian và đảm bảo bạn có bữa trưa lành mạnh.
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Bắt đầu đơn giản: Lập kế hoạch cho 2-3 bữa đầu tiên, sau đó mở rộng dần' },
            { type: 'tip', text: 'Sử dụng thực phẩm theo mùa: Rẻ hơn và tươi ngon hơn' },
            { type: 'tip', text: 'Nấu một lần, ăn hai lần: Nấu nhiều hơn để dùng cho bữa sau' },
            { type: 'tip', text: 'Linh hoạt: Có thể thay đổi nếu có tình huống đặc biệt' },
            { type: 'check', text: 'Kiểm tra tủ lạnh trước khi mua: Tránh mua trùng lặp' },
            { type: 'check', text: 'Chuẩn bị danh sách mua sắm: Giúp mua đúng, không quên' },
            { type: 'warning', text: 'Đừng quá cứng nhắc: Kế hoạch là hướng dẫn, không phải quy tắc' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực tế</h2>
        <ExampleBox variant="info" title="Tình huống: Gia đình 4 người">
          <p className="mb-2">
            <strong>Bước 1:</strong> Xem lịch - Thứ 2-5 bận, Thứ 6 đi ăn ngoài, Thứ 7-Chủ nhật có thời gian nấu.
          </p>
          <p className="mb-2">
            <strong>Bước 2:</strong> Lên kế hoạch - Thứ 2-5: Món đơn giản, nấu nhanh. Thứ 7: Món phức tạp hơn.
          </p>
          <p className="mb-2">
            <strong>Bước 3:</strong> Danh sách mua sắm - Thịt gà (2kg), cá (1kg), rau củ đa dạng, trái cây, ngũ cốc.
          </p>
          <p>
            <strong>Bước 4:</strong> Chủ nhật - Nấu thịt gà và cơm trước, rửa rau, chuẩn bị sẵn cho tuần.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Lập kế hoạch bữa ăn quá phức tạp và mất thời gian"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Chỉ cần 15-30 phút mỗi tuần. Thời gian tiết kiệm được 
                trong tuần nhiều hơn thời gian bỏ ra lập kế hoạch.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải tuân thủ kế hoạch 100%"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Kế hoạch là hướng dẫn, không phải quy tắc cứng nhắc. 
                Linh hoạt điều chỉnh theo tình huống.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần nấu món mới mỗi ngày"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể lặp lại món yêu thích. Quan trọng là đảm bảo 
                đủ dinh dưỡng, không phải đa dạng tuyệt đối.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn Hàng ngày</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn lập kế hoạch bữa ăn cơ bản
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/meal-prep">
            <h3 className="heading-5 mb-2">Chuẩn bị Bữa ăn (Meal Prep)</h3>
            <p className="text-sm text-gray-600">
              Cách chuẩn bị bữa ăn trước để tiết kiệm thời gian
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn hẹp</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn tiết kiệm
            </p>
          </Card>
          <Card href="/knowledge/healthy-plate">
            <h3 className="heading-5 mb-2">Cân bằng Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách cân bằng dinh dưỡng trong bữa ăn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Lập kế hoạch bữa ăn là một công cụ hữu ích, 
          nhưng không phải bắt buộc. Mỗi người có nhu cầu và tình huống khác nhau. Nếu bạn có bệnh lý 
          đặc biệt hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

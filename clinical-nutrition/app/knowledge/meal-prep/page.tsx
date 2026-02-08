import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Container, Clock, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chuẩn bị Bữa ăn (Meal Prep)",
  description:
    "Hướng dẫn cách chuẩn bị bữa ăn trước (meal prep) để tiết kiệm thời gian và ăn uống lành mạnh. Tips và ví dụ thực tế.",
  keywords: [
    "meal prep",
    "chuẩn bị bữa ăn",
    "meal preparation",
    "tiết kiệm thời gian",
    "dinh dưỡng",
  ],
};

export default function MealPrepPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Chuẩn bị Bữa ăn (Meal Prep)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Container className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Chuẩn bị Bữa ăn (Meal Prep)</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Meal prep (chuẩn bị bữa ăn trước) là cách nấu và chuẩn bị thực phẩm trước để tiết kiệm 
          thời gian trong tuần. Bạn có thể chuẩn bị một vài giờ vào cuối tuần và có bữa ăn sẵn 
          cho cả tuần.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Meal prep</strong> = Chuẩn bị bữa ăn trước để tiết kiệm thời gian
          </li>
          <li>
            Chỉ cần <strong>2-3 giờ cuối tuần</strong> để chuẩn bị cho cả tuần
          </li>
          <li>
            Có thể chuẩn bị <strong>toàn bộ bữa ăn</strong> hoặc chỉ <strong>một phần</strong>
          </li>
          <li>
            Sử dụng <strong>hộp đựng phù hợp</strong> để bảo quản
          </li>
          <li>
            <strong>Bắt đầu đơn giản</strong> - chỉ chuẩn bị 2-3 món đầu tiên
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Meal Prep?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Tiết kiệm thời gian trong tuần</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Ăn uống lành mạnh hơn (có sẵn)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Tiết kiệm tiền (nấu tại nhà)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Giảm căng thẳng về "ăn gì"</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi không meal prep:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Phải nấu mỗi ngày (mất thời gian)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Dễ chọn đồ ăn nhanh không tốt</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Chi phí cao hơn (ăn ngoài)</span>
                </li>
                <li className="flex items-start gap-2">
                  <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Không có thời gian nấu khi bận</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Các Cách Meal Prep</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Chuẩn bị Toàn bộ Bữa ăn</h3>
            <p className="text-body-sm mb-2">
              Nấu và chia sẵn bữa ăn hoàn chỉnh vào hộp, sẵn sàng ăn khi cần.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Phù hợp:</strong> Người bận rộn, muốn tiết kiệm thời gian tối đa
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Chuẩn bị Một Phần</h3>
            <p className="text-body-sm mb-2">
              Chỉ chuẩn bị một số phần (ví dụ: nấu thịt, cơm trước), vẫn nấu rau tươi mỗi ngày.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Phù hợp:</strong> Người muốn có thực phẩm tươi, nhưng vẫn tiết kiệm thời gian
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Chuẩn bị Nguyên liệu</h3>
            <p className="text-body-sm mb-2">
              Rửa, cắt sẵn rau củ, ướp thịt, nấu cơm trước. Vẫn nấu mỗi ngày nhưng nhanh hơn.
            </p>
            <p className="text-xs text-gray-600">
              <strong>Phù hợp:</strong> Người thích nấu ăn tươi nhưng muốn tiết kiệm thời gian chuẩn bị
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Meal Prep: 5 Bước</h2>
        <div className="space-y-4">
          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-700">1</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Lập Kế hoạch</h3>
                <p className="text-body-sm">
                  Quyết định bạn sẽ chuẩn bị gì (bữa nào, món gì). Chọn 2-3 món để bắt đầu.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-700">2</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Mua sắm</h3>
                <p className="text-body-sm">
                  Mua tất cả nguyên liệu cần thiết. Đảm bảo có đủ hộp đựng phù hợp.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-700">3</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Nấu và Chuẩn bị</h3>
                <p className="text-body-sm">
                  Nấu các món đã lên kế hoạch. Bắt đầu với món mất nhiều thời gian nhất.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-700">4</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Chia và Đựng</h3>
                <p className="text-body-sm">
                  Chia thức ăn vào hộp đựng phù hợp. Dán nhãn ngày tháng nếu cần.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <div className="flex items-start gap-3 mb-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span className="text-sm font-bold text-purple-700">5</span>
              </div>
              <div className="flex-1">
                <h3 className="heading-4 mb-2">Bảo quản</h3>
                <p className="text-body-sm">
                  Bảo quản trong tủ lạnh (3-4 ngày) hoặc tủ đông (lâu hơn). 
                  Hâm nóng trước khi ăn.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Meal Prep</h2>
        <ExampleBox variant="info" title="Ví dụ: Meal Prep cho 3 Ngày">
          <p className="mb-2">
            <strong>Chuẩn bị:</strong> Chủ nhật, 2-3 giờ
          </p>
          <p className="mb-2">
            <strong>Món 1:</strong> Thịt gà nướng (1kg) - Nướng 30 phút, chia 6 phần
          </p>
          <p className="mb-2">
            <strong>Món 2:</strong> Cơm (3 bát) - Nấu 20 phút, chia 6 phần
          </p>
          <p className="mb-2">
            <strong>Món 3:</strong> Rau xào (rau cải, cà rốt) - Xào 15 phút, chia 6 phần
          </p>
          <p>
            <strong>Kết quả:</strong> 6 hộp bữa ăn sẵn (2 bữa/ngày × 3 ngày) = 
            Không cần nấu Thứ 2, 3, 4!
          </p>
        </ExampleBox>

        <Card>
          <h3 className="heading-4 mb-3">Món Phù hợp cho Meal Prep</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Tốt cho Meal Prep:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Thịt nướng, cá nướng</li>
                <li>• Cơm, mì ống</li>
                <li>• Rau củ nấu chín</li>
                <li>• Đậu, đậu lăng</li>
                <li>• Soup, canh</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Không tốt cho Meal Prep:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Rau salad tươi (dễ héo)</li>
                <li>• Đồ chiên (mất giòn)</li>
                <li>• Trứng luộc (tốt nhất ăn ngay)</li>
                <li>• Thực phẩm dễ hỏng</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Bắt đầu đơn giản: Chỉ chuẩn bị 2-3 món đầu tiên, sau đó mở rộng' },
            { type: 'tip', text: 'Sử dụng hộp đựng phù hợp: Hộp có ngăn riêng, có thể hâm nóng' },
            { type: 'tip', text: 'Dán nhãn: Ghi ngày tháng để biết món nào cũ, món nào mới' },
            { type: 'check', text: 'Bảo quản đúng cách: Tủ lạnh (3-4 ngày), tủ đông (lâu hơn)' },
            { type: 'check', text: 'Hâm nóng đúng cách: Đảm bảo thức ăn nóng đều trước khi ăn' },
            { type: 'warning', text: 'Không để quá lâu: Thức ăn đã nấu chỉ giữ được 3-4 ngày trong tủ lạnh' },
            { type: 'info', text: 'Kết hợp meal prep với nấu tươi: Một số món prep, một số món nấu tươi' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Meal prep mất quá nhiều thời gian"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Chỉ cần 2-3 giờ cuối tuần, nhưng tiết kiệm nhiều giờ 
                trong tuần. Tổng thời gian thực ra ít hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Thức ăn prep không ngon bằng nấu tươi"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nhiều món vẫn ngon sau khi hâm nóng. Quan trọng là chọn 
                món phù hợp và bảo quản đúng cách.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải prep tất cả bữa ăn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể chỉ prep một phần (ví dụ: chỉ bữa trưa, hoặc chỉ 
                nấu thịt trước). Linh hoạt theo nhu cầu.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/weekly-meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn Tuần</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn trước khi meal prep
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn Hàng ngày</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn lập kế hoạch bữa ăn cơ bản
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/healthy-cooking-methods">
            <h3 className="heading-5 mb-2">Phương pháp Nấu ăn lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách nấu ăn phù hợp cho meal prep
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Meal prep là một công cụ hữu ích, nhưng 
          không phải bắt buộc. Quan trọng là bảo quản thức ăn đúng cách để tránh ngộ độc thực phẩm. 
          Nếu bạn có thắc mắc về bảo quản thực phẩm, hãy tham khảo hướng dẫn an toàn thực phẩm.
        </p>
      </Callout>
    </main>
  );
}

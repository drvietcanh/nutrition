import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Sun, Coffee, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tầm quan trọng của Bữa sáng",
  description:
    "Tại sao bữa sáng quan trọng? Lợi ích của bữa sáng, ví dụ bữa sáng lành mạnh, và cách bắt đầu ngày mới với dinh dưỡng tốt.",
  keywords: [
    "bữa sáng",
    "breakfast",
    "bữa ăn sáng",
    "dinh dưỡng buổi sáng",
    "năng lượng",
    "sức khỏe",
  ],
};

export default function BreakfastImportancePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Tầm quan trọng của Bữa sáng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Sun className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Tầm quan trọng của Bữa sáng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Bữa sáng thường được gọi là "bữa ăn quan trọng nhất trong ngày" - và có lý do chính đáng. 
          Bữa sáng cung cấp năng lượng để bắt đầu ngày mới, cải thiện tập trung, và hỗ trợ sức khỏe tổng thể.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Bữa sáng</strong> cung cấp năng lượng sau một đêm nhịn ăn
          </li>
          <li>
            <strong>Lợi ích:</strong> Cải thiện tập trung, kiểm soát cân nặng, tăng năng lượng
          </li>
          <li>
            <strong>Bữa sáng tốt</strong> nên có carbohydrate, protein, và một chút chất béo
          </li>
          <li>
            <strong>Không cần phức tạp</strong> - một bữa sáng đơn giản vẫn tốt hơn bỏ bữa
          </li>
          <li>
            <strong>Ở Việt Nam:</strong> Cháo, bánh mì, phở, xôi là lựa chọn bữa sáng phổ biến
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Bữa sáng Quan trọng?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cung cấp năng lượng cho ngày mới</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cải thiện tập trung và trí nhớ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>hỗ trợ kiểm soát cân nặng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cung cấp vitamin và khoáng chất</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp ổn định đường huyết</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi bỏ bữa sáng:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mệt mỏi, thiếu năng lượng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Khó tập trung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Dễ ăn quá nhiều vào bữa trưa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Đường huyết không ổn định</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Giống như xe cần xăng để chạy, cơ thể cần năng lượng từ bữa sáng để hoạt động. 
              Sau một đêm nhịn ăn (từ bữa tối hôm trước), cơ thể đã "hết xăng". 
              Bữa sáng giống như "đổ xăng" để bắt đầu ngày mới với đủ năng lượng.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cấu trúc Bữa sáng lành mạnh</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa sáng tốt nên có 3 thành phần:</h3>
            <div className="space-y-3">
              <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">1. Carbohydrate (năng lượng)</p>
                <p className="text-xs text-gray-700">
                  Cơm, bánh mì, yến mạch, khoai lang - cung cấp năng lượng nhanh
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">2. Protein (No lâu)</p>
                <p className="text-xs text-gray-700">
                  Trứng, sữa, đậu phụ, thịt - giúp bạn no lâu hơn, không đói sớm
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">3. Rau củ/Trái cây (Vitamin)</p>
                <p className="text-xs text-gray-700">
                  Rau thơm, trái cây - cung cấp vitamin, khoáng chất, chất xơ
                </p>
              </div>
            </div>
          </Card>

          <ComparisonCard
            title="So sánh: Bữa sáng Tốt vs Nên cải thiện"
            items={[
              {
                label: "Bữa sáng Tốt",
                good: "Cháo thịt gà + rau thơm, Bánh mì + trứng + rau, Yến mạch + sữa + trái cây - đủ 3 thành phần",
                bad: "Chỉ uống cà phê, Chỉ ăn bánh ngọt, Bỏ bữa sáng - thiếu dinh dưỡng",
                note: "Bữa sáng tốt có carbohydrate, protein, và rau củ/trái cây"
              },
              {
                label: "Bữa sáng Việt Nam",
                good: "Cháo thịt gà + rau thơm, Phở với nhiều rau + thịt nạc, Bánh mì + chả/trứng + rau - cân bằng",
                bad: "Chỉ ăn xôi ngọt, Chỉ uống nước ngọt, Phở với ít rau + nhiều mỡ - thiếu cân bằng",
                note: "Bữa sáng Việt Nam có thể lành mạnh nếu có đủ protein và rau"
              },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa sáng lành mạnh</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa sáng Nhanh (5-10 phút)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Yến mạch overnight:</strong> Yến mạch + sữa + trái cây (chuẩn bị tối hôm trước)</p>
              <p>• <strong>Trứng + bánh mì:</strong> 2 quả trứng + 1 lát bánh mì nguyên cám + rau</p>
              <p>• <strong>Sữa chua + trái cây + quả hạch:</strong> Trộn và ăn ngay</p>
              <p>• <strong>Cháo thịt gà (Việt Nam):</strong> Cháo nấu sẵn + thịt gà + rau thơm - nhanh, dễ tiêu</p>
              <p>• <strong>Bánh mì + chả/trứng (Việt Nam):</strong> Bánh mì + chả lụa/trứng + rau - tiện lợi</p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa sáng Đầy đủ (15-20 phút)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• <strong>Trứng ốp la + bánh mì + salad:</strong> Protein + carb + rau</p>
              <p>• <strong>Yến mạch + trứng + trái cây:</strong> Nấu yến mạch, luộc trứng, thêm trái cây</p>
              <p>• <strong>Phở (Việt Nam):</strong> Phở với nhiều rau sống + thịt nạc - đủ dinh dưỡng</p>
              <p>• <strong>Bún bò (Việt Nam):</strong> Bún với nhiều rau + thịt nạc - cân bằng</p>
              <p>• <strong>Cơm + món mặn + canh (Việt Nam):</strong> Bữa sáng đầy đủ kiểu Việt Nam</p>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Bữa sáng Việt Nam lành mạnh">
            <p className="mb-2">
              <strong>Cháo thịt gà/cháo cá</strong> là bữa sáng phổ biến ở Việt Nam, dễ tiêu, 
              cung cấp protein và carbohydrate. Thêm rau thơm (hành, ngò) để có vitamin.
            </p>
            <p className="mb-2">
              <strong>Phở, bún</strong> có thể là bữa sáng lành mạnh nếu:
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm mb-2">
              <li>Yêu cầu nhiều rau sống (rau thơm, giá, hành)</li>
              <li>Chọn thịt nạc thay vì thịt mỡ</li>
              <li>Yêu cầu ít bánh phở/bún nếu muốn giảm carbohydrate</li>
              <li>Tránh thêm nhiều dầu mỡ</li>
            </ul>
            <p>
              <strong>Bánh mì</strong> với chả, trứng, hoặc thịt nướng + rau là bữa sáng tiện lợi, 
              có thể mang đi. Chọn bánh mì nguyên cám nếu có.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích cụ thể của Bữa sáng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Cải thiện Tập trung</h3>
            <p className="text-body-sm">
              Bữa sáng cung cấp glucose (đường) cho não, giúp cải thiện tập trung, trí nhớ, 
              và khả năng học tập. đặc biệt quan trọng cho học sinh, sinh viên.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Kiểm soát Cân nặng</h3>
            <p className="text-body-sm">
              Người ăn bữa sáng thường có cân nặng khỏe mạnh hơn. Bữa sáng giúp bạn không đói quá, 
              tránh ăn quá nhiều vào bữa trưa.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Tăng năng lượng</h3>
            <p className="text-body-sm">
              Bữa sáng cung cấp năng lượng để bắt đầu ngày mới. Không có bữa sáng, bạn có thể cảm thấy 
              mệt mỏi, uể oải vào buổi sáng.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Cung cấp Dinh dưỡng</h3>
            <p className="text-body-sm">
              Bữa sáng là cơ hội để cung cấp vitamin, khoáng chất, chất xơ. 
              Người ăn bữa sáng thường có chế độ ăn đa dạng và đầy đủ dinh dưỡng hơn.
            </p>
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
                <strong>Chuẩn bị trước:</strong> Chuẩn bị bữa sáng tối hôm trước (yến mạch overnight, 
                cháo nấu sẵn) để tiết kiệm thời gian.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bắt đầu nhỏ:</strong> Nếu không quen ăn bữa sáng, bắt đầu với một bữa sáng nhỏ 
                (1 quả chuối + sữa chua, hoặc 1 bánh mì nhỏ).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thêm protein:</strong> Protein giúp bạn no lâu hơn. Thêm trứng, sữa, đậu phụ, 
                hoặc thịt vào bữa sáng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Linh hoạt:</strong> Bữa sáng không cần phức tạp. Một bữa sáng đơn giản vẫn tốt hơn bỏ bữa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tận dụng món ăn sáng phổ biến như cháo, phở, bánh mì, 
                nhưng đảm bảo có đủ protein và rau.
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
              <p className="text-sm font-semibold mb-1">"Bỏ bữa sáng giúp giảm cân"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bỏ bữa sáng thường làm bạn đói hơn, dễ ăn quá nhiều vào bữa trưa. 
                Bữa sáng lành mạnh thực sự hỗ trợ kiểm soát cân nặng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Bữa sáng phải lớn và phức tạp"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bữa sáng đơn giản vẫn tốt. Một quả chuối + sữa chua, 
                hoặc một bánh mì + trứng đã là bữa sáng tốt.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần cà phê là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Cà phê chỉ cung cấp caffeine, không cung cấp năng lượng thực sự. 
                Cần thêm thực phẩm để có năng lượng và dinh dưỡng.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người bận rộn</h3>
            <p className="text-sm text-gray-600">
              Quick tips cho bữa sáng khi bận rộn
            </p>
          </Card>
          <Card href="/knowledge/meal-planning">
            <h3 className="heading-5 mb-2">Lập kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa sáng
            </p>
          </Card>
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Bữa sáng cung cấp năng lượng cho ngày mới
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-breakfast-options">
            <h3 className="heading-5 mb-2">Lựa chọn Bữa sáng Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Các lựa chọn bữa sáng phổ biến ở Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Một số người có thể không cảm thấy đói vào buổi sáng, 
          và đó là bình thường. Quan trọng là lắng nghe cơ thể và ăn khi cảm thấy đói. 
          Nếu bạn có bệnh lý đặc biệt (như đái tháo đường), hãy tham khảo chuyên gia dinh dưỡng 
          về thời điểm và loại bữa sáng phù hợp.
        </p>
      </Callout>
    </main>
  );
}

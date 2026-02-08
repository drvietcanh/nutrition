import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Apple, Coffee, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Snack Lành mạnh Kiểu Việt Nam",
  description:
    "Các lựa chọn snack lành mạnh phù hợp với văn hóa Việt Nam. Từ trái cây địa phương đến các món ăn vặt truyền thống, cách snack thông minh.",
  keywords: [
    "snack Việt Nam",
    "vietnamese snacks",
    "ăn vặt lành mạnh",
    "healthy snacks",
    "trái cây",
    "món ăn vặt",
  ],
};

export default function VietnameseSnacksHealthyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Snack Lành mạnh Kiểu Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Apple className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Snack Lành mạnh Kiểu Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Snack (ăn vặt) là phần quan trọng của chế độ ăn, giúp duy trì năng lượng giữa các bữa ăn. 
          Ở Việt Nam, có nhiều lựa chọn snack lành mạnh từ trái cây địa phương đến các món ăn vặt truyền thống. 
          Hiểu cách chọn snack lành mạnh giúp bạn duy trì sức khỏe tốt.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Snack lành mạnh</strong> giúp duy trì năng lượng và kiểm soát cơn đói
          </li>
          <li>
            <strong>Trái cây Việt Nam:</strong> Ổi, xoài, thanh long, đu đủ - giàu vitamin, ít calo
          </li>
          <li>
            <strong>Đậu phộng, hạt điều:</strong> Protein, chất béo tốt, nhưng cần ăn vừa phải
          </li>
          <li>
            <strong>Rau củ:</strong> Dưa chuột, cà rốt, củ đậu - ít calo, nhiều chất xơ
          </li>
          <li>
            <strong>Tránh:</strong> Bánh kẹo nhiều đường, đồ chiên nhiều dầu mỡ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Snack Lành mạnh là gì?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Snack Lành mạnh:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cung cấp dinh dưỡng (vitamin, khoáng chất)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ít calo hoặc calo phù hợp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp no, không làm tăng đường huyết nhanh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Dễ mang theo, tiện lợi</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Snack Nên Hạn chế:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nhiều đường (bánh kẹo, nước ngọt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nhiều chất béo (đồ chiên, snack đóng gói)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nhiều natri (snack mặn, đồ chế biến)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ít dinh dưỡng, nhiều calo rỗng</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Snack lành mạnh giống như "nhiên liệu nhỏ" giữa các bữa ăn chính. 
              Thay vì "nhiên liệu xấu" (bánh kẹo nhiều đường) làm bạn tăng đường huyết nhanh rồi giảm nhanh, 
              "nhiên liệu tốt" (trái cây, quả hạch) cung cấp năng lượng ổn định và dinh dưỡng.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Snack Lành mạnh Kiểu Việt Nam</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">1. Trái cây Việt Nam</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Trái cây địa phương Việt Nam rất đa dạng, giàu vitamin, và ít calo.
            </p>
            <div className="space-y-3">
              <NutrientTable
                rows={[
                  { nutrient: "Ổi (1 quả vừa)", amount: "~60", unit: "calo", note: "Nhiều vitamin C, chất xơ" },
                  { nutrient: "Xoài (1 quả nhỏ)", amount: "~100", unit: "calo", note: "Vitamin A, C" },
                  { nutrient: "Thanh long (1 quả nhỏ)", amount: "~60", unit: "calo", note: "Chất xơ, vitamin C" },
                  { nutrient: "Đu đủ (1 miếng)", amount: "~60", unit: "calo", note: "Vitamin A, C, enzyme tiêu hóa" },
                  { nutrient: "Chuối (1 quả vừa)", amount: "~100", unit: "calo", note: "Kali, carbohydrate" },
                  { nutrient: "Cam (1 quả vừa)", amount: "~60", unit: "calo", note: "Nhiều vitamin C" },
                ]}
              />
              <ExampleBox variant="tip" title="Mẹo">
                <p className="text-sm">
                  Trái cây Việt Nam rất đa dạng và giá cả phải chăng. Ăn trái cây nguyên quả tốt hơn nước ép 
                  vì có chất xơ. Có thể mang theo trái cây để snack giữa các bữa ăn.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-amber-200 bg-amber-50">
            <h3 className="heading-4 mb-3 text-amber-900">2. Quả hạch và Hạt</h3>
            <p className="text-body-sm text-amber-900 mb-3">
              Đậu phộng, hạt điều là snack phổ biến ở Việt Nam, cung cấp protein và chất béo tốt.
            </p>
            <div className="space-y-3">
              <NutrientTable
                rows={[
                  { nutrient: "Đậu phộng rang (30g)", amount: "~170", unit: "calo", note: "Protein: 7g, Chất béo tốt" },
                  { nutrient: "Hạt điều (30g)", amount: "~160", unit: "calo", note: "Protein: 5g, Chất béo tốt" },
                  { nutrient: "Hạt hướng dương (30g)", amount: "~160", unit: "calo", note: "Vitamin E, chất béo tốt" },
                ]}
              />
              <ExampleBox variant="warning" title="Lưu ý">
                <p className="text-sm">
                  Quả hạch giàu dinh dưỡng nhưng cũng nhiều calo. Chỉ cần một lượng nhỏ (30g = 1 nắm tay nhỏ) 
                  là đủ. Chọn loại không muối hoặc ít muối. Đậu phộng rang không muối tốt hơn đậu phộng rang muối.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">3. Rau củ</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Rau củ là snack ít calo, nhiều chất xơ, phù hợp khi muốn snack mà không tăng nhiều calo.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Rau củ snack tốt:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Dưa chuột:</strong> Rất ít calo (~15 calo/100g), nhiều nước</li>
                  <li>• <strong>Cà rốt:</strong> Vitamin A, ít calo (~40 calo/100g)</li>
                  <li>• <strong>Củ đậu (Việt Nam):</strong> Rất ít calo (~30 calo/100g), giòn, ngọt nhẹ</li>
                  <li>• <strong>Cà chua bi:</strong> Vitamin C, ít calo (~20 calo/100g)</li>
                </ul>
              </div>
              <ExampleBox variant="tip" title="Mẹo">
                <p className="text-sm">
                  Rau củ có thể cắt sẵn, mang theo để snack. Có thể ăn sống hoặc luộc nhẹ. 
                  Củ đậu là snack phổ biến ở Việt Nam, rất ít calo và giòn ngon.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">4. Sữa chua và Đồ uống</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Sữa chua và một số đồ uống có thể là snack lành mạnh.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Snack tốt:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• <strong>Sữa chua:</strong> Protein, probiotic, có thể thêm trái cây</li>
                  <li>• <strong>Nước dừa (Việt Nam):</strong> Điện giải, ít calo (khi uống nước dừa tươi, không phải nước dừa đóng hộp có đường)</li>
                  <li>• <strong>Trà ấm:</strong> Trà xanh, trà gừng - ít calo, có chất chống oxy hóa</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Snack Nên Hạn chế</h2>
        <ComparisonCard
          title="So sánh: Snack Lành mạnh vs Nên Hạn chế"
          items={[
            {
              label: "Trái cây",
              good: "Trái cây nguyên quả (ổi, xoài, thanh long) - nhiều vitamin, chất xơ, ít calo",
              bad: "Nước ép trái cây đóng hộp, trái cây sấy có đường - nhiều đường, ít chất xơ",
              note: "Trái cây nguyên quả tốt hơn nước ép và trái cây sấy"
            },
            {
              label: "Quả hạch",
              good: "Đậu phộng, hạt điều rang không muối (30g) - protein, chất béo tốt, vừa phải",
              bad: "Đậu phộng rang muối nhiều, snack đóng gói nhiều dầu - nhiều natri, chất béo không tốt",
              note: "Chọn quả hạch không muối hoặc ít muối, ăn vừa phải"
            },
            {
              label: "Đồ uống",
              good: "Nước lọc, nước dừa tươi, trà ấm - ít calo, có lợi ích sức khỏe",
              bad: "Nước ngọt, nước ép đóng hộp có đường, trà sữa - nhiều đường, nhiều calo",
              note: "Chọn đồ uống không đường hoặc ít đường"
            },
            {
              label: "Đồ chiên",
              good: "Tránh hoặc hạn chế - đồ chiên nhiều dầu mỡ, nhiều calo, ít dinh dưỡng",
              bad: "Khoai tây chiên, bánh snack chiên, nem rán - nhiều dầu mỡ, natri, calo",
              note: "Hạn chế đồ chiên, chọn snack nướng hoặc không chiên"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Snack Lành mạnh trong Ngày</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Snack Sáng (Giữa bữa sáng và trưa)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• 1 quả ổi + 1 cốc nước</p>
              <p>• 1 quả chuối + 1 cốc trà ấm</p>
              <p>• <strong>1 quả xoài (Việt Nam) + nước lọc</strong></p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Snack Chiều (Giữa bữa trưa và tối)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• 30g đậu phộng rang không muối + 1 quả cam</p>
              <p>• 1 hộp sữa chua + trái cây</p>
              <p>• <strong>Củ đậu (Việt Nam) + nước lọc</strong></p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Snack Tối (Nếu cần)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• 1 quả thanh long</p>
              <p>• Dưa chuột + cà rốt cắt sẵn</p>
              <p>• 1 cốc trà ấm</p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Snack Khi Bận rộn (Mang theo)</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>• Trái cây (ổi, chuối) - dễ mang</p>
              <p>• 30g đậu phộng rang - tiện lợi</p>
              <p>• <strong>Bánh mì nhỏ + chả (Việt Nam) - có protein</strong></p>
            </div>
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
                <strong>Chuẩn bị trước:</strong> Cắt sẵn trái cây, rau củ, mang theo để snack khi đói.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp:</strong> Trái cây + quả hạch = carbohydrate + protein + chất béo tốt.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tận dụng trái cây địa phương phong phú - ổi, xoài, thanh long, đu đủ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiểm soát khẩu phần:</strong> Quả hạch nhiều calo, chỉ cần 30g (1 nắm tay nhỏ).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lắng nghe cơ thể:</strong> Snack khi đói, không snack vì buồn chán hoặc stress.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/smart-snacking">
            <h3 className="heading-5 mb-2">Snacking Thông minh</h3>
            <p className="text-sm text-gray-600">
              Cách snack lành mạnh và thông minh
            </p>
          </Card>
          <Card href="/knowledge/portion-sizes">
            <h3 className="heading-5 mb-2">Hiểu về Portion Sizes</h3>
            <p className="text-sm text-gray-600">
              Kiểm soát khẩu phần snack
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Trái cây và thực phẩm Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người Bận rộn</h3>
            <p className="text-sm text-gray-600">
              Snack lành mạnh khi bận rộn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Snack lành mạnh hỗ trợ chế độ ăn cân bằng, 
          nhưng không nên thay thế bữa ăn chính. Nếu bạn có bệnh lý đặc biệt (như đái tháo đường), 
          hãy tham khảo chuyên gia dinh dưỡng về loại và lượng snack phù hợp.
        </p>
      </Callout>
    </main>
  );
}

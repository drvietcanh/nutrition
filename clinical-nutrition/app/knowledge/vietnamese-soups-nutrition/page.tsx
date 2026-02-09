import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Soup, Droplet, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canh Việt Nam và dinh dưỡng",
  description:
    "Canh (soup) là món ăn phổ biến trong bữa ăn Việt Nam. Hiểu về giá trị dinh dưỡng của các loại canh, cách nấu canh lành mạnh, và vai trò của canh trong bữa ăn.",
  keywords: [
    "canh Việt Nam",
    "vietnamese soup",
    "canh chua",
    "canh rau",
    "dinh dưỡng",
    "bữa ăn Việt Nam",
  ],
};

export default function VietnameseSoupsNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Canh Việt Nam và dinh dưỡng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Soup className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Canh Việt Nam và dinh dưỡng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Canh (soup) là một phần không thể thiếu trong bữa ăn gia đình Việt Nam. Từ canh chua cá thơm lừng 
          đến canh rau muống đơn giản, canh không chỉ ngon miệng mà còn cung cấp nhiều dinh dưỡng quan trọng: 
          nước, vitamin từ rau củ, và có thể có protein từ thịt/cá.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Canh</strong> là món ăn phổ biến trong bữa ăn Việt Nam, cung cấp nước và dinh dưỡng
          </li>
          <li>
            <strong>Canh có protein:</strong> Canh chua cá, canh thịt - cung cấp protein từ cá/thịt
          </li>
          <li>
            <strong>Canh có rau:</strong> Canh rau muống, canh mướp - cung cấp vitamin, khoáng chất, chất xơ
          </li>
          <li>
            <strong>Canh giúp hydration:</strong> Cung cấp nước, đặc biệt quan trọng trong thời tiết nóng
          </li>
          <li>
            <strong>Cách nấu lành mạnh:</strong> Ít muối, nhiều rau, thịt nạc
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vai trò của Canh trong Bữa ăn Việt Nam</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cung cấp nước (hydration)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Vitamin và khoáng chất từ rau củ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Protein từ thịt/cá (nếu có)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Dễ tiêu, ấm bụng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp ăn nhiều rau hơn</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Cấu trúc bữa ăn Việt Nam:</p>
                <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                  <p className="text-xs text-gray-700 space-y-1">
                    <strong>Bữa ăn Việt Nam thường có:</strong>
                  </p>
                  <ul className="text-xs text-gray-700 space-y-1 mt-2">
                    <li>• Cơm (carbohydrate)</li>
                    <li>• Canh (nước + rau + có thể có protein)</li>
                    <li>• Món mặn (protein chính)</li>
                    <li>• Rau (rau củ)</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Canh giống như "cầu nối" trong bữa ăn Việt Nam. nó cung cấp nước để dễ ăn cơm, 
              cung cấp rau củ để có vitamin, và có thể cung cấp protein từ cá/thịt. 
              Một bát canh chua cá có thể có: protein từ cá, vitamin từ cà chua và đậu bắp, 
              và nước để hydration - tất cả trong một món ăn.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Các loại Canh Việt Nam phổ biến</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">1. Canh chua (Sour soup)</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Canh chua là món canh có vị chua, thường được nấu với cá, tôm, hoặc thịt.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại canh chua:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Canh chua cá:</strong> Cá + cà chua + đậu bắp + dứa + rau thơm</li>
                  <li>• <strong>Canh chua tôm:</strong> Tôm + cà chua + đậu bắp + dứa + rau thơm</li>
                  <li>• <strong>Canh chua cà:</strong> Cá + cà chua + đậu bắp + me + rau thơm</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Protein từ cá/tôm (15-20g protein/100g cá)</li>
                  <li>✓ Vitamin C từ cà chua, đậu bắp, dứa</li>
                  <li>✓ Chất xơ từ đậu bắp, rau</li>
                  <li>✓ Nước (hydration)</li>
                  <li>⚠ Chú ý: Có thể nhiều natri nếu nêm nhiều muối/nước mắm</li>
                </ul>
              </div>
              <ExampleBox variant="tip" title="Mẹo nấu Canh chua lành mạnh">
                <p className="text-sm">
                  Chọn cá/tôm nạc, thêm nhiều rau củ (cà chua, đậu bắp, dứa), 
                  nêm ít muối/nước mắm, và thêm nhiều rau thơm để có vitamin.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">2. Canh rau (Vegetable soup)</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Canh rau là món canh đơn giản, chủ yếu là rau củ, có thể có thịt hoặc không.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại canh rau phổ biến:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Canh rau muống:</strong> Rau muống + nước dùng + có thể có tôm khô</li>
                  <li>• <strong>Canh mướp:</strong> Mướp + nước dùng + có thể có tôm/thịt</li>
                  <li>• <strong>Canh bầu:</strong> Bầu + nước dùng + có thể có tôm/thịt</li>
                  <li>• <strong>Canh rau cải:</strong> Rau cải + nước dùng + có thể có thịt</li>
                  <li>• <strong>Canh rau lang:</strong> Rau lang + nước dùng</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Vitamin A, C, K từ rau củ</li>
                  <li>✓ Chất xơ từ rau</li>
                  <li>✓ Khoáng chất (kali, magie)</li>
                  <li>✓ Nước (hydration)</li>
                  <li>✓ Protein từ tôm/thịt (nếu có)</li>
                </ul>
              </div>
              <ExampleBox variant="tip" title="Mẹo nấu Canh rau lành mạnh">
                <p className="text-sm">
                  Thêm nhiều rau, nấu nhanh để giữ vitamin, nêm ít muối/nước mắm, 
                  và có thể thêm một chút tôm khô hoặc thịt nạc để có protein.
                </p>
              </ExampleBox>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">3. Canh thịt (Meat soup)</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Canh thịt là món canh có thịt làm nguyên liệu chính, thường có rau củ kèm theo.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Các loại canh thịt:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Canh thịt băm:</strong> Thịt heo băm + rau củ + nước dùng</li>
                  <li>• <strong>Canh sườn:</strong> Sườn heo + rau củ + nước dùng</li>
                  <li>• <strong>Canh gà:</strong> Thịt gà + rau củ + nước dùng</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Protein từ thịt (20-25g protein/100g thịt)</li>
                  <li>✓ Vitamin từ rau củ</li>
                  <li>✓ Nước (hydration)</li>
                  <li>⚠ Chú ý: Chọn thịt nạc, hạn chế thịt mỡ</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">giá trị Dinh dưỡng của Canh</h2>
        <NutrientTable
          title="giá trị Dinh dưỡng Canh Việt Nam (Ước tính cho 1 bát)"
          rows={[
            { nutrient: "Canh chua cá (1 bát)", amount: "~80", unit: "calo", note: "Protein: 15g, Vitamin C: có, Nước: nhiều" },
            { nutrient: "Canh rau muống (1 bát)", amount: "~30", unit: "calo", note: "Vitamin A, C: có, Chất xơ: có, Nước: nhiều" },
            { nutrient: "Canh mướp (1 bát)", amount: "~40", unit: "calo", note: "Vitamin A, C: có, Chất xơ: có, Nước: nhiều" },
            { nutrient: "Canh thịt băm (1 bát)", amount: "~100", unit: "calo", note: "Protein: 10g, Vitamin: có, Nước: nhiều" },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách nấu canh lành mạnh</h2>
        <ComparisonCard
          title="So sánh: Canh lành mạnh vs Nên cải thiện"
          items={[
            {
              label: "Nguyên liệu",
              good: "Nhiều rau củ + thịt/cá nạc + ít muối/nước mắm - đủ dinh dưỡng, ít natri",
              bad: "Ít rau + thịt mỡ + nhiều muối/nước mắm - thiếu dinh dưỡng, nhiều natri",
              note: "Thêm nhiều rau củ và chọn thịt/cá nạc"
            },
            {
              label: "Cách nấu",
              good: "Nấu nhanh, rau còn giòn - giữ được vitamin, chất xơ",
              bad: "Nấu quá lâu, rau nhừ - mất vitamin",
              note: "Nấu canh rau nhanh để giữ vitamin"
            },
            {
              label: "Nêm nếm",
              good: "Ít muối/nước mắm, dùng gia vị tự nhiên (hành, tỏi, gừng) - ít natri",
              bad: "Nhiều muối/nước mắm, nhiều bột nêm - nhiều natri",
              note: "Nêm ít muối, dùng gia vị tự nhiên để tăng hương vị"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thêm nhiều rau củ:</strong> Rau muống, mướp, bầu, đậu bắp - cung cấp vitamin và chất xơ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn thịt/cá nạc:</strong> Thịt gà, cá, tôm nạc thay vì thịt mỡ, lòng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu nhanh:</strong> Rau củ nấu nhanh để giữ vitamin. Không nấu quá lâu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nêm ít muối:</strong> Dùng ít muối/nước mắm, thêm gia vị tự nhiên (hành, tỏi, gừng) để tăng hương vị.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống nước canh:</strong> Nước canh cung cấp nước và một số vitamin hòa tan trong nước.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Canh lành mạnh</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Canh chua cá lành mạnh</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Nguyên liệu:</strong> Cá nạc (100g) + nhiều cà chua + đậu bắp + dứa + rau thơm + ít muối/nước mắm
            </p>
            <p className="text-xs text-gray-600">
              ~80 calo, 15g protein, nhiều vitamin C, chất xơ, nước
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Canh rau muống lành mạnh</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Nguyên liệu:</strong> Nhiều rau muống + nước dùng + một chút tôm khô + ít muối
            </p>
            <p className="text-xs text-gray-600">
              ~30 calo, vitamin A, C, K, chất xơ, nước
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Canh mướp lành mạnh</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Nguyên liệu:</strong> Nhiều mướp + nước dùng + tôm nạc (50g) + ít muối
            </p>
            <p className="text-xs text-gray-600">
              ~50 calo, 10g protein, vitamin A, C, nước
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Canh thịt băm lành mạnh</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Nguyên liệu:</strong> Thịt heo nạc băm (50g) + nhiều rau củ + nước dùng + ít muối
            </p>
            <p className="text-xs text-gray-600">
              ~100 calo, 10g protein, vitamin từ rau, nước
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vietnamese-family-meals">
            <h3 className="heading-5 mb-2">Bữa ăn gia đình Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Vai trò của canh trong bữa ăn gia đình Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-cooking-methods">
            <h3 className="heading-5 mb-2">Cách nấu ăn lành mạnh Kiểu Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Phương pháp nấu canh lành mạnh
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong canh
            </p>
          </Card>
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration: Nước và dịch</h3>
            <p className="text-sm text-gray-600">
              Canh cung cấp nước cho cơ thể
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Canh Việt Nam có thể là món ăn lành mạnh 
          nếu nấu đúng cách với nhiều rau củ, thịt/cá nạc, và ít muối. Nếu bạn có bệnh lý đặc biệt 
          (như tăng huyết áp, suy tim, bệnh thận), hãy chú ý đến lượng natri trong canh và tham khảo 
          chuyên gia dinh dưỡng về cách điều chỉnh.
        </p>
      </Callout>
    </main>
  );
}

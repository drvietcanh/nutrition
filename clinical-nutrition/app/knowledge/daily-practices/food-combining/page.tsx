import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { UtensilsCrossed, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kết hợp Thực phẩm Đúng cách",
  description:
    "Hiểu về cách kết hợp thực phẩm để tăng hấp thu dinh dưỡng, cải thiện tiêu hóa, và tạo bữa ăn cân bằng. Ví dụ thực tế và mẹo.",
  keywords: [
    "kết hợp thực phẩm",
    "food combining",
    "hấp thu dinh dưỡng",
    "tiêu hóa",
    "bữa ăn cân bằng",
    "vitamin và khoáng chất",
  ],
};

export default function FoodCombiningPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Kết hợp Thực phẩm Đúng cách" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Kết hợp Thực phẩm Đúng cách</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Cách kết hợp thực phẩm có thể ảnh hưởng đến hấp thu dinh dưỡng và tiêu hóa. 
          Hiểu về các nguyên tắc cơ bản giúp bạn tạo ra bữa ăn cân bằng và hấp thu dinh dưỡng tốt hơn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Kết hợp đúng</strong> giúp tăng hấp thu dinh dưỡng và cải thiện tiêu hóa
          </li>
          <li>
            <strong>Vitamin C + Sắt:</strong> Vitamin C giúp hấp thu sắt từ thực phẩm thực vật tốt hơn
          </li>
          <li>
            <strong>Chất béo + Vitamin tan trong chất béo:</strong> Chất béo giúp hấp thu vitamin A, D, E, K
          </li>
          <li>
            <strong>Protein + Carbohydrate:</strong> Kết hợp giúp ổn định đường huyết và no lâu hơn
          </li>
          <li>
            <strong>Đa dạng:</strong> Ăn đa dạng thực phẩm đảm bảo hấp thu nhiều chất dinh dưỡng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Kết hợp Thực phẩm Quan trọng?</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Một số chất dinh dưỡng "hợp tác" với nhau - khi ăn cùng, chúng giúp nhau hấp thu tốt hơn. 
            Một số kết hợp giúp tiêu hóa tốt hơn hoặc tạo bữa ăn cân bằng hơn.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Tăng hấp thu dinh dưỡng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Cải thiện tiêu hóa</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Tạo bữa ăn cân bằng</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>Ổn định đường huyết</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Ví dụ:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Vitamin C + Sắt thực vật = hấp thu sắt tốt hơn</li>
                <li>• Chất béo + Vitamin A, D, E, K = hấp thu vitamin tốt hơn</li>
                <li>• Protein + Carbohydrate = no lâu, đường huyết ổn định</li>
                <li>• Đậu + Gạo = protein hoàn chỉnh</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Kết hợp thực phẩm giống như "làm việc nhóm". Một số chất dinh dưỡng "hợp tác" tốt với nhau. 
            Ví dụ: Vitamin C giống như "người hỗ trợ" giúp sắt (từ thực vật) được hấp thu tốt hơn. 
            Khi bạn ăn đậu đen (có sắt) với cà chua (có vitamin C), sắt được hấp thu tốt hơn.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Các Kết hợp Quan trọng</h2>
        <div className="space-y-4">
          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">1. Vitamin C + Sắt Thực vật</h3>
            <p className="text-body-sm text-orange-900 mb-3">
              Vitamin C giúp chuyển đổi sắt từ thực vật (sắt không heme) sang dạng dễ hấp thu hơn.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Ví dụ kết hợp tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Đậu đen + cà chua (Việt Nam):</strong> Đậu đen có sắt, cà chua có vitamin C</li>
                <li>• <strong>Rau muống + chanh (Việt Nam):</strong> Rau muống có sắt, chanh có vitamin C</li>
                <li>• <strong>Đậu phụ + ớt chuông:</strong> Đậu phụ có sắt, ớt chuông có vitamin C</li>
                <li>• Đậu lăng + cà chua</li>
                <li>• Rau bina + cam</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Mẹo">
              <p className="text-sm">
                Khi ăn thực phẩm giàu sắt từ thực vật (đậu, rau xanh), thêm thực phẩm giàu vitamin C 
                (cà chua, ớt chuông, chanh, cam) để tăng hấp thu sắt. 
                Ví dụ: Canh đậu đen với cà chua, rau muống luộc với chanh.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">2. Chất béo + Vitamin tan trong Chất béo</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Vitamin A, D, E, K tan trong chất béo, nên cần chất béo để hấp thu tốt.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Ví dụ kết hợp tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Cà rốt xào với dầu (Việt Nam):</strong> Cà rốt có vitamin A, dầu giúp hấp thu</li>
                <li>• <strong>Rau muống xào với dầu (Việt Nam):</strong> Rau muống có vitamin A, K, dầu giúp hấp thu</li>
                <li>• <strong>Trái bơ + salad:</strong> Bơ có chất béo tốt, giúp hấp thu vitamin từ rau</li>
                <li>• Cà chua + dầu ô liu</li>
                <li>• Cá béo (có vitamin D) + dầu (hấp thu vitamin D tốt hơn)</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Mẹo">
              <p className="text-sm">
                Khi ăn rau củ giàu vitamin A, D, E, K, nấu với một chút dầu hoặc thêm chất béo tốt 
                (quả bơ, quả hạch) để hấp thu vitamin tốt hơn. 
                Ví dụ: Rau muống xào với dầu đậu nành, cà rốt xào với dầu.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">3. Protein + Carbohydrate</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Kết hợp protein và carbohydrate giúp ổn định đường huyết và no lâu hơn.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Ví dụ kết hợp tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Cơm + thịt/cá (Việt Nam):</strong> Carbohydrate từ cơm, protein từ thịt/cá</li>
                <li>• <strong>Bánh mì + trứng/chả (Việt Nam):</strong> Carbohydrate từ bánh mì, protein từ trứng/chả</li>
                <li>• <strong>Yến mạch + sữa/trứng:</strong> Carbohydrate từ yến mạch, protein từ sữa/trứng</li>
                <li>• Khoai tây + thịt</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Mẹo">
              <p className="text-sm">
                Mỗi bữa ăn nên có cả carbohydrate và protein. Điều này giúp đường huyết ổn định, 
                no lâu hơn, và cung cấp đủ năng lượng và dinh dưỡng. 
                Ví dụ: Cơm + cá kho + rau (bữa ăn Việt Nam điển hình).
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">4. Đậu + Gạo (Protein Hoàn chỉnh)</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Đậu và gạo kết hợp tạo ra protein hoàn chỉnh, đặc biệt quan trọng cho người ăn chay.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Ví dụ kết hợp tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Đậu đen + cơm (Việt Nam):</strong> Protein hoàn chỉnh</li>
                <li>• <strong>Đậu đỏ + cơm (Việt Nam):</strong> Protein hoàn chỉnh</li>
                <li>• <strong>Đậu phụ + cơm (Việt Nam):</strong> Có thể kết hợp với đậu để có protein hoàn chỉnh</li>
                <li>• Đậu lăng + gạo</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Mẹo cho Người Ăn Chay">
              <p className="text-sm">
                Người ăn chay nên kết hợp đậu với gạo trong ngày để có đủ axit amin. 
                Không cần ăn cùng một bữa, chỉ cần ăn trong cùng một ngày. 
                Ví dụ: Đậu đen nấu chè + cơm, đậu phụ sốt cà chua + cơm.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Kết hợp Tốt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Bữa ăn Việt Nam 1</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Canh chua cá + Rau muống luộc:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Carbohydrate (cơm) + Protein (cá)</li>
              <li>✓ Vitamin C (cà chua, đậu bắp) + Sắt (cá, rau muống)</li>
              <li>✓ Chất béo (dầu trong canh) + Vitamin tan trong chất béo</li>
              <li>✓ Đủ 3 thành phần: carb, protein, rau</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa ăn Việt Nam 2</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Đậu đen kho + Rau cải xào:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Đậu + Gạo = Protein hoàn chỉnh</li>
              <li>✓ Vitamin C (rau cải) + Sắt (đậu đen)</li>
              <li>✓ Chất béo (dầu xào) + Vitamin tan trong chất béo</li>
              <li>✓ Đủ dinh dưỡng cho người ăn chay</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa ăn Việt Nam 3</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Bánh mì + Trứng + Rau sống:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Carbohydrate (bánh mì) + Protein (trứng)</li>
              <li>✓ Vitamin C (rau sống) + Sắt (trứng)</li>
              <li>✓ Chất béo (trứng) + Vitamin tan trong chất béo</li>
              <li>✓ Bữa ăn cân bằng, tiện lợi</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa ăn Tổng quát</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Yến mạch + Sữa + Trái cây:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Carbohydrate (yến mạch) + Protein (sữa)</li>
              <li>✓ Vitamin C (trái cây) + Sắt (yến mạch)</li>
              <li>✓ Chất béo (sữa) + Vitamin tan trong chất béo</li>
              <li>✓ Bữa sáng cân bằng</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Phải ăn một số thực phẩm cùng lúc mới hấp thu được"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Một số kết hợp giúp hấp thu tốt hơn, nhưng không phải "bắt buộc" phải ăn cùng lúc. 
                Quan trọng là ăn đa dạng trong ngày.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không được ăn trái cây với bữa ăn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể ăn trái cây với bữa ăn hoặc sau bữa ăn. 
                Trái cây với bữa ăn có thể giúp hấp thu sắt tốt hơn (nếu trái cây có vitamin C).
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải kết hợp đậu và gạo trong cùng một bữa"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đậu và gạo có thể ăn trong cùng một ngày, không cần cùng một bữa. 
                cơ thể lưu trữ axit amin và kết hợp chúng.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thêm vitamin C vào bữa ăn có sắt thực vật:</strong> Chanh, cà chua, ớt chuông với đậu, rau xanh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu rau củ với một chút dầu:</strong> Giúp hấp thu vitamin tan trong chất béo tốt hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mỗi bữa có carbohydrate + protein:</strong> Giúp ổn định đường huyết và no lâu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Ăn đa dạng thực phẩm trong ngày đảm bảo hấp thu nhiều chất dinh dưỡng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Bữa ăn Việt Nam truyền thống (cơm + canh + món mặn + rau) 
                đã tự nhiên kết hợp tốt nhiều chất dinh dưỡng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/healthy-plate">
            <h3 className="heading-5 mb-2">Cân bằng Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách tạo bữa ăn cân bằng với kết hợp đúng
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-family-meals">
            <h3 className="heading-5 mb-2">Bữa ăn Gia đình Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Bữa ăn Việt Nam tự nhiên kết hợp tốt nhiều chất dinh dưỡng
            </p>
          </Card>
          <Card href="/knowledge/iron-deficiency-anemia">
            <h3 className="heading-5 mb-2">Thiếu Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Kết hợp vitamin C với sắt thực vật quan trọng cho người thiếu sắt
            </p>
          </Card>
          <Card href="/knowledge/vegetarian-vegan-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Ăn Chay</h3>
            <p className="text-sm text-gray-600">
              Kết hợp đậu và gạo quan trọng cho người ăn chay
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Kết hợp thực phẩm đúng cách có thể giúp hấp thu dinh dưỡng tốt hơn, 
          nhưng không phải là "quy tắc cứng nhắc". Quan trọng nhất là ăn đa dạng, cân bằng, và đủ dinh dưỡng. 
          Nếu bạn có bệnh lý đặc biệt hoặc thiếu hụt dinh dưỡng, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { UtensilsCrossed, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách nấu ăn Lành mạnh Kiểu Việt Nam",
  description:
    "Hướng dẫn phương pháp nấu ăn truyền thống Việt Nam (luộc, hấp, kho, nướng, xào) và cách tối ưu dinh dưỡng. Ví dụ thực tế với món ăn Việt Nam.",
  keywords: [
    "nấu ăn Việt Nam",
    "phương pháp nấu",
    "luộc",
    "hấp",
    "kho",
    "nướng",
    "xào",
    "cooking methods",
  ],
};

export default function VietnameseCookingMethodsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Cách nấu ăn Lành mạnh Kiểu Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Cách nấu ăn Lành mạnh Kiểu Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Phương pháp nấu ăn truyền thống Việt Nam như luộc, hấp, kho, nướng, xào có thể rất lành mạnh 
          nếu biết cách. Tìm hiểu cách tối ưu dinh dưỡng với các phương pháp nấu ăn quen thuộc này.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Luộc và Hấp</strong> là phương pháp lành mạnh nhất - giữ được nhiều dinh dưỡng, ít chất béo
          </li>
          <li>
            <strong>Kho</strong> lành mạnh nếu giảm muối và đường, tăng gia vị tự nhiên
          </li>
          <li>
            <strong>Nướng</strong> tốt nếu tránh cháy và không dùng quá nhiều dầu
          </li>
          <li>
            <strong>Xào</strong> có thể lành mạnh nếu dùng ít dầu và nhiệt độ vừa phải
          </li>
          <li>
            Tránh <strong>chiên ngập dầu</strong> - mất dinh dưỡng và thêm nhiều chất béo không tốt
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Phương pháp Nấu ăn truyền thống Việt Nam</h2>
        <div className="space-y-4">
          <p className="text-body">
            Người Việt Nam có nhiều phương pháp nấu ăn truyền thống, mỗi phương pháp có ưu và nhược điểm 
            về dinh dưỡng. Hiểu cách sử dụng đúng giúp bạn tối ưu dinh dưỡng trong bữa ăn.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">1. Luộc - Phương pháp Lành mạnh Nhất</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Ưu điểm của Luộc</h3>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Không cần dầu mỡ - ít chất béo</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Giữ được nhiều vitamin và khoáng chất (nếu không luộc quá lâu)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Dễ tiêu hóa</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Đơn giản, không cần kỹ thuật phức tạp</span>
              </li>
            </ul>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Món luộc">
            <p className="mb-2">
              <strong>Rau muống luộc:</strong> Rau muống luộc nhanh (2-3 phút) giữ được vitamin C và chất xơ. 
              Có thể ăn với nước mắm pha loãng hoặc chấm mắm tôm.
            </p>
            <p className="mb-2">
              <strong>Thịt luộc:</strong> Thịt heo, thịt gà luộc giữ được protein, ít chất béo hơn chiên. 
              Có thể dùng nước luộc để nấu canh.
            </p>
            <p>
              <strong>Trứng luộc:</strong> Trứng luộc là nguồn protein tốt, không cần dầu. 
              Luộc vừa chín (7-8 phút) giữ được dinh dưỡng tốt nhất.
            </p>
          </ExampleBox>

          <Callout variant="info" title="Mẹo">
            <p className="text-sm">
              Khi luộc rau, không nên luộc quá lâu (2-3 phút là đủ). Rau còn giòn, xanh là tốt nhất. 
              Nước luộc rau có thể dùng để nấu canh, không nên bỏ đi.
            </p>
          </Callout>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">2. Hấp - Giữ dinh dưỡng Tối đa</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Ưu điểm của Hấp</h3>
            <ul className="space-y-2 text-sm text-green-900">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Giữ được nhiều vitamin và khoáng chất nhất (không tiếp xúc với nước)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Không cần dầu mỡ</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Giữ được hương vị tự nhiên của thực phẩm</span>
              </li>
            </ul>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Món hấp">
            <p className="mb-2">
              <strong>Cá hấp:</strong> Cá hấp với gừng, hành giữ được protein và omega-3, không mất dinh dưỡng. 
              Món ăn lành mạnh, dễ tiêu.
            </p>
            <p className="mb-2">
              <strong>Rau hấp:</strong> Bông cải xanh, cà rốt hấp giữ được nhiều vitamin hơn luộc. 
              Có thể ăn với nước mắm pha loãng.
            </p>
            <p>
              <strong>Thịt gà hấp:</strong> Thịt gà hấp mềm, giữ được protein, ít chất béo. 
              Có thể hấp với nấm, rau củ.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">3. Kho - Phương pháp truyền thống</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Kho lành mạnh vs Không lành mạnh</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">Kho lành mạnh:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li>• Giảm muối (nước mắm)</li>
                  <li>• Giảm đường</li>
                  <li>• Tăng gia vị tự nhiên (tỏi, gừng, ớt)</li>
                  <li>• Thêm rau củ vào kho</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-4 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">Kho không lành mạnh:</p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• Quá nhiều nước mắm (nhiều natri)</li>
                  <li>• Quá nhiều đường</li>
                  <li>• Quá nhiều dầu mỡ</li>
                  <li>• Kho quá lâu (mất dinh dưỡng)</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Cách kho lành mạnh">
            <p className="mb-2">
              <strong>Cá kho tộ lành mạnh:</strong> Cá kho với ít nước mắm, ít đường, nhiều tỏi, gừng, ớt. 
              Thêm cà chua, đậu bắp vào kho cùng. Giảm natri, tăng dinh dưỡng.
            </p>
            <p>
              <strong>Thịt kho tiêu:</strong> Thịt kho với ít nước mắm, nhiều tiêu, tỏi. 
              Thêm trứng luộc, khoai tây vào kho cùng. Món ăn cân bằng dinh dưỡng.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">4. Nướng - Ngon nhưng Cần cẩn thận</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nướng lành mạnh</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Nướng với ít dầu hoặc không dầu</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Tránh cháy - cháy tạo chất độc hại</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Nướng với rau củ - tăng dinh dưỡng</span>
              </li>
            </ul>
          </Card>

          <Callout variant="warning" title="Lưu ý">
            <p className="text-sm">
              Khi nướng thịt, cá bị cháy đen, có thể tạo ra chất độc hại. Nên nướng vừa chín, 
              không để cháy. Có thể ướp với gia vị trước khi nướng để giảm thời gian nướng.
            </p>
          </Callout>

          <ExampleBox variant="tip" title="Ví dụ Món nướng">
            <p className="mb-2">
              <strong>Cá nướng:</strong> Cá nướng với ít dầu, không cháy. Ướp với tỏi, gừng, ớt trước khi nướng. 
              Ăn kèm rau sống, bánh tráng.
            </p>
            <p>
              <strong>Thịt nướng:</strong> Thịt nướng với rau củ (ớt chuông, cà chua, hành tây). 
              Giảm dầu, tăng rau củ.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">5. Xào - Cần điều chỉnh</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Xào lành mạnh</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Dùng ít dầu (1-2 muỗng canh cho cả món)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Xào nhanh, nhiệt độ vừa phải (không quá nóng)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Nhiều rau củ, ít thịt</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Dùng dầu tốt (dầu ô liu, dầu đậu nành) thay vì mỡ</span>
              </li>
            </ul>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Món xào">
            <p className="mb-2">
              <strong>Rau cải xào:</strong> Rau cải xào với ít dầu, tỏi. Xào nhanh để rau còn giòn, 
              giữ được vitamin. Có thể thêm thịt nạc xắt nhỏ.
            </p>
            <p>
              <strong>Đậu phụ xào:</strong> Đậu phụ xào với rau củ, ít dầu. Protein từ đậu phụ + vitamin từ rau củ.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Phương pháp tốt vs Nên tránh</h2>
        <ComparisonCard
          goodTitle="Phương pháp tốt"
          goodItems={[
            "Luộc: Rau muống luộc, thịt luộc - ít chất béo, giữ dinh dưỡng",
            "Hấp: Cá hấp, rau hấp - giữ dinh dưỡng tối đa",
            "Kho (điều chỉnh): Cá kho ít muối, nhiều gia vị tự nhiên",
            "Nướng (cẩn thận): Cá nướng không cháy, với rau củ",
            "Xào (ít dầu): Rau xào với ít dầu, nhiều rau củ"
          ]}
          badTitle="Phương pháp nên hạn chế"
          badItems={[
            "Chiên ngập dầu: Chả giò chiên, khoai tây chiên - nhiều chất béo, mất dinh dưỡng",
            "Kho quá mặn: Cá kho quá nhiều nước mắm, đường - nhiều natri",
            "Nướng cháy: Thịt nướng cháy đen - tạo chất độc hại",
            "Xào nhiều dầu: Món xào ngập dầu - nhiều calo, chất béo",
            "Rang khô quá: Thịt rang khô quá - mất dinh dưỡng, khó tiêu"
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
                <strong>Ưu tiên luộc và hấp:</strong> Cho rau củ, thịt cá. Giữ được nhiều dinh dưỡng nhất.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Điều chỉnh kho:</strong> Giảm nước mắm, đường. Tăng tỏi, gừng, ớt, rau củ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Xào ít dầu:</strong> Dùng 1-2 muỗng canh dầu cho cả món. Xào nhanh, nhiệt độ vừa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh chiên ngập dầu:</strong> Chiên ngập dầu mất dinh dưỡng và thêm nhiều chất béo. 
                Nếu chiên, chỉ chiên áp chảo với ít dầu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp phương pháp:</strong> Một bữa ăn có thể có món luộc, món kho, món xào. 
                Đa dạng phương pháp tạo bữa ăn ngon và lành mạnh.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn với Phương pháp lành mạnh</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa trưa lành mạnh</h3>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">Cơm (nấu bình thường)</p>
              <p className="text-xs text-green-800">Carbohydrate - nguồn năng lượng</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">Cá hấp (hấp)</p>
              <p className="text-xs text-blue-800">Protein - phương pháp hấp giữ dinh dưỡng tốt nhất</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">Rau muống luộc (luộc)</p>
              <p className="text-xs text-purple-800">Rau củ - phương pháp luộc ít chất béo</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">Canh chua cá (nấu canh)</p>
              <p className="text-xs text-amber-800">Canh - phương pháp nấu canh giữ dinh dưỡng</p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Bữa tối lành mạnh</h3>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">Cơm</p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">Thịt kho tiêu (kho - điều chỉnh ít muối)</p>
              <p className="text-xs text-blue-800">Protein - kho với ít nước mắm, nhiều gia vị tự nhiên</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">Rau cải xào (xào ít dầu)</p>
              <p className="text-xs text-purple-800">Rau củ - xào với ít dầu, nhiều rau</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">Canh rau (nấu canh)</p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Kho luôn không tốt vì nhiều muối"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Kho có thể lành mạnh nếu điều chỉnh. Giảm nước mắm, đường, 
                tăng gia vị tự nhiên. Kho là phương pháp nấu ăn truyền thống tốt.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Xào luôn không tốt vì nhiều dầu"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Xào có thể lành mạnh nếu dùng ít dầu (1-2 muỗng canh) và nhiều rau củ. 
                Xào nhanh giữ được dinh dưỡng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Luộc làm mất dinh dưỡng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Luộc có thể làm mất một số vitamin tan trong nước, nhưng vẫn giữ được 
                nhiều dinh dưỡng. Nếu luộc nhanh (2-3 phút) và dùng nước luộc để nấu canh, dinh dưỡng vẫn được giữ lại.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/healthy-cooking-methods">
            <h3 className="heading-5 mb-2">Phương pháp Nấu ăn lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn chung về phương pháp nấu ăn lành mạnh
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong món ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu về chất béo trong phương pháp nấu ăn
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Thực phẩm Việt Nam giàu dinh dưỡng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Phương pháp nấu ăn lành mạnh là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Mỗi người có sở thích và tình huống khác nhau. 
          Nếu bạn có bệnh lý đặc biệt hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

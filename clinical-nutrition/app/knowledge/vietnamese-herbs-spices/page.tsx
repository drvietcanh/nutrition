import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Leaf, Flower, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Gia vị và Thảo mộc Việt Nam",
  description:
    "Gia vị và thảo mộc Việt Nam không chỉ tăng hương vị mà còn có giá trị dinh dưỡng và lợi ích sức khỏe. Hiểu về các loại gia vị, thảo mộc phổ biến và cách sử dụng.",
  keywords: [
    "gia vị Việt Nam",
    "thảo mộc Việt Nam",
    "vietnamese herbs",
    "vietnamese spices",
    "hành",
    "tỏi",
    "gừng",
    "rau thơm",
  ],
};

export default function VietnameseHerbsSpicesPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Gia vị và Thảo mộc Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Gia vị và Thảo mộc Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Gia vị và thảo mộc là "linh hồn" của món ăn Việt Nam. Từ hành, tỏi, gừng đến các loại rau thơm 
          như ngò, rau răm, tía tô - mỗi loại không chỉ tăng hương vị mà còn có giá trị dinh dưỡng và 
          lợi ích sức khỏe riêng.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Gia vị và thảo mộc</strong> tăng hương vị và có giá trị dinh dưỡng
          </li>
          <li>
            <strong>Hành, tỏi, gừng</strong> - gia vị cơ bản, có lợi ích sức khỏe
          </li>
          <li>
            <strong>Rau thơm</strong> - ngò, rau răm, tía tô, húng - cung cấp vitamin và hương vị
          </li>
          <li>
            <strong>Lợi ích:</strong> Chất chống oxy hóa, kháng khuẩn, hỗ trợ tiêu hóa
          </li>
          <li>
            <strong>Cách dùng:</strong> Thêm vào cuối khi nấu để giữ hương vị và vitamin
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Gia vị Cơ bản Việt Nam</h2>
        <div className="space-y-4">
          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">1. Hành (Scallion/Green Onion)</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Hành là gia vị phổ biến nhất trong món ăn Việt Nam, dùng cả phần củ và lá.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Vitamin C, K</li>
                  <li>✓ Chất chống oxy hóa</li>
                  <li>✓ Hỗ trợ sức khỏe tim mạch</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-purple-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Cách dùng:</p>
                <p className="text-xs text-gray-700">
                  Thái nhỏ, thêm vào cuối khi nấu (canh, xào) hoặc ăn sống (phở, bún). 
                  Hành phi (hành chiên) dùng để trang trí nhưng nhiều dầu mỡ.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">2. Tỏi (Garlic)</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Tỏi là gia vị quan trọng, có mùi thơm đặc trưng và nhiều lợi ích sức khỏe.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Allicin - hợp chất kháng khuẩn</li>
                  <li>✓ Chất chống oxy hóa</li>
                  <li>✓ Hỗ trợ sức khỏe tim mạch</li>
                  <li>✓ Hỗ trợ hệ miễn dịch</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Cách dùng:</p>
                <p className="text-xs text-gray-700">
                  Băm nhỏ, phi thơm với dầu trước khi nấu, hoặc ăn sống (tỏi sống). 
                  Tỏi phi (tỏi chiên) thơm nhưng nhiều dầu mỡ.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">3. Gừng (Ginger)</h3>
            <p className="text-body-sm text-orange-900 mb-3">
              Gừng có vị cay, thơm, thường dùng trong nấu ăn và làm thuốc.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Gingerol - hợp chất chống viêm</li>
                  <li>✓ Hỗ trợ tiêu hóa</li>
                  <li>✓ Giảm buồn nôn</li>
                  <li>✓ Hỗ trợ hệ miễn dịch</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-orange-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Cách dùng:</p>
                <p className="text-xs text-gray-700">
                  Thái lát, băm nhỏ, hoặc đập dập. Dùng trong nấu canh, kho, hấp. 
                  Gừng tươi tốt hơn gừng khô.
                </p>
              </div>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 mb-3 text-red-900">4. Ớt (Chili)</h3>
            <p className="text-body-sm text-red-900 mb-3">
              Ớt tạo vị cay, thường dùng trong món ăn Việt Nam.
            </p>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Giá trị dinh dưỡng:</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>✓ Capsaicin - hợp chất tạo vị cay</li>
                  <li>✓ Vitamin C</li>
                  <li>✓ Chất chống oxy hóa</li>
                  <li>✓ Có thể hỗ trợ trao đổi chất</li>
                </ul>
              </div>
              <div className="bg-white rounded-lg p-3 border border-red-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Cách dùng:</p>
                <p className="text-xs text-gray-700">
                  Thái lát, băm nhỏ, hoặc ăn sống. Dùng vừa phải vì quá cay có thể gây khó chịu dạ dày.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Rau Thơm Việt Nam</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Các loại Rau Thơm Phổ biến</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Ngò (Cilantro/Coriander)</p>
                <p className="text-xs text-gray-700">
                  Thơm, dùng trong phở, bún, canh. Cung cấp vitamin K, C, chất chống oxy hóa.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Rau răm (Vietnamese Mint)</p>
                <p className="text-xs text-gray-700">
                  Vị cay nhẹ, dùng với ốc, cháo. Có thể hỗ trợ tiêu hóa.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Tía tô (Perilla)</p>
                <p className="text-xs text-gray-700">
                  Vị thơm đặc trưng, dùng trong canh, cháo. Có chất chống oxy hóa.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Húng quế (Basil)</p>
                <p className="text-xs text-gray-700">
                  Thơm, dùng trong phở, bún. Cung cấp vitamin K, chất chống oxy hóa.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Rau mùi (Parsley)</p>
                <p className="text-xs text-gray-700">
                  Thơm, dùng trong canh, xào. Cung cấp vitamin C, K.
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Hành lá (Green Onion Leaves)</p>
                <p className="text-xs text-gray-700">
                  Thơm, dùng trong hầu hết món ăn. Cung cấp vitamin C, K.
                </p>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Rau Thơm trong Món ăn Việt Nam">
            <p className="mb-2">
              Rau thơm không chỉ tăng hương vị mà còn cung cấp vitamin và khoáng chất. 
              Ví dụ: Phở với nhiều rau thơm (ngò, hành, húng quế) cung cấp vitamin C, K.
            </p>
            <p>
              Rau thơm thường được ăn sống hoặc thêm vào cuối khi nấu để giữ hương vị và vitamin.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích Sức khỏe của Gia vị và Thảo mộc</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Chất chống Oxy hóa</h3>
            <p className="text-body-sm">
              Nhiều gia vị và thảo mộc chứa chất chống oxy hóa, giúp bảo vệ tế bào khỏi tổn thương, 
              làm chậm lão hóa, và giảm nguy cơ bệnh tật.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Kháng khuẩn</h3>
            <p className="text-body-sm">
              Tỏi, gừng có tính kháng khuẩn, có thể giúp chống lại vi khuẩn và virus. 
              Đây là lý do tại sao chúng thường được dùng khi bị cảm.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Hỗ trợ Tiêu hóa</h3>
            <p className="text-body-sm">
              Gừng, rau răm có thể hỗ trợ tiêu hóa, giảm đầy hơi, chướng bụng. 
              Chúng thường được dùng trong món ăn khó tiêu.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Giảm Viêm</h3>
            <p className="text-body-sm">
              Gừng, tỏi có tính chống viêm, có thể giúp giảm viêm trong cơ thể, 
              hỗ trợ sức khỏe tim mạch và khớp.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Sử dụng Gia vị và Thảo mộc</h2>
        <ComparisonCard
          title="So sánh: Cách dùng tốt vs Nên tránh"
          items={[
            {
              label: "Thời điểm thêm",
              good: "Rau thơm thêm vào cuối khi nấu hoặc ăn sống - giữ hương vị và vitamin",
              bad: "Nấu rau thơm quá lâu - mất hương vị và vitamin",
              note: "Thêm rau thơm vào cuối để giữ hương vị"
            },
            {
              label: "Cách chế biến",
              good: "Tỏi, gừng băm nhỏ, phi thơm với ít dầu - tăng hương vị, ít dầu",
              bad: "Tỏi, gừng chiên quá nhiều dầu - nhiều calo, có thể cháy",
              note: "Phi thơm với ít dầu, không chiên quá lâu"
            },
            {
              label: "Lượng dùng",
              good: "Dùng vừa phải để tăng hương vị - không quá nhiều, không quá ít",
              bad: "Dùng quá nhiều (đặc biệt ớt) - có thể gây khó chịu dạ dày",
              note: "Dùng vừa phải, lắng nghe cơ thể"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Sử dụng trong Món ăn Việt Nam</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">Phở</h3>
            <p className="text-sm text-gray-700">
              <strong>Gia vị:</strong> Hành, gừng (trong nước dùng) + <strong>Rau thơm:</strong> Ngò, hành lá, húng quế (ăn sống)
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Cung cấp vitamin C, K từ rau thơm, và hương vị từ gia vị.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Canh chua cá</h3>
            <p className="text-sm text-gray-700">
              <strong>Gia vị:</strong> Tỏi, ớt (phi thơm) + <strong>Rau thơm:</strong> Ngò, hành lá (thêm cuối)
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Tỏi và ớt tăng hương vị, rau thơm cung cấp vitamin.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Cá kho</h3>
            <p className="text-sm text-gray-700">
              <strong>Gia vị:</strong> Tỏi, gừng, ớt (kho cùng cá) + <strong>Rau thơm:</strong> Hành lá (thêm cuối)
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Gia vị thấm vào cá, tăng hương vị và lợi ích sức khỏe.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Ốc xào</h3>
            <p className="text-sm text-gray-700">
              <strong>Gia vị:</strong> Tỏi, ớt (xào) + <strong>Rau thơm:</strong> Rau răm (ăn kèm)
            </p>
            <p className="text-xs text-gray-600 mt-1">
              Rau răm giúp tiêu hóa, tỏi và ớt tăng hương vị.
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
                <strong>Thêm nhiều rau thơm:</strong> Rau thơm cung cấp vitamin và tăng hương vị. 
                Thêm vào cuối khi nấu hoặc ăn sống.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Dùng gia vị tự nhiên:</strong> Hành, tỏi, gừng thay vì bột nêm để tăng hương vị 
                và giảm natri.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Phi thơm với ít dầu:</strong> Tỏi, gừng phi thơm với ít dầu để tăng hương vị 
                mà không quá nhiều calo.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Kết hợp nhiều loại gia vị và rau thơm để có hương vị phong phú 
                và nhiều dinh dưỡng.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vietnamese-cooking-methods">
            <h3 className="heading-5 mb-2">Cách Nấu Ăn lành mạnh Kiểu Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cách sử dụng gia vị trong nấu ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Gia vị và thảo mộc trong món ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/special-topics/antioxidants-foods">
            <h3 className="heading-5 mb-2">Chất chống Oxy hóa trong Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Gia vị và thảo mộc chứa chất chống oxy hóa
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Dùng gia vị tự nhiên thay vì muối để giảm natri
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Gia vị và thảo mộc có lợi ích sức khỏe, 
          nhưng không thể thay thế thuốc. Một số người có thể dị ứng với một số loại rau thơm. 
          Nếu bạn có bệnh lý đặc biệt hoặc đang dùng thuốc, hãy tham khảo bác sĩ trước khi 
          sử dụng gia vị/thảo mộc với lượng lớn như thuốc.
        </p>
      </Callout>
    </main>
  );
}

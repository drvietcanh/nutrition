import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { UtensilsCrossed, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Chức năng Việt Nam: Nước mắm, Tương, Chao",
  description:
    "Giá trị dinh dưỡng và cách sử dụng các loại gia vị/thực phẩm lên men Việt Nam (nước mắm, tương, chao, mắm tôm). Hướng dẫn sử dụng đúng cách và giảm natri.",
  keywords: [
    "nước mắm",
    "tương",
    "chao",
    "mắm tôm",
    "gia vị Việt Nam",
    "thực phẩm lên men",
    "fermented foods",
  ],
};

export default function VietnameseFermentedFoodsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực phẩm Chức năng Việt Nam: Nước mắm, Tương, Chao" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Chức năng Việt Nam: Nước mắm, Tương, Chao</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Nước mắm, tương, chao là những gia vị và thực phẩm lên men truyền thống của Việt Nam. 
          Chúng có giá trị dinh dưỡng nhưng cũng chứa nhiều natri. Tìm hiểu cách sử dụng đúng cách 
          để tận dụng lợi ích và giảm rủi ro.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nước mắm:</strong> Giàu protein, natri cao (~1,000mg/1 thìa canh). Dùng ít, pha loãng
          </li>
          <li>
            <strong>Tương:</strong> Có protein, natri vừa phải. Dùng thay nước mắm để giảm natri
          </li>
          <li>
            <strong>Chao:</strong> Giàu protein, canxi, natri vừa phải. Thực phẩm lên men tốt
          </li>
          <li>
            <strong>Mắm tôm, mắm ruốc:</strong> Nhiều natri, dùng ít
          </li>
          <li>
            <strong>Cách dùng:</strong> Pha loãng, dùng ít, kết hợp với gia vị tự nhiên (tỏi, gừng, chanh)
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nước mắm: Gia vị truyền thống</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Giá trị dinh dưỡng Nước mắm</h3>
            <NutrientTable
              title="Giá trị dinh dưỡng Nước mắm (1 thìa canh = 15ml)"
              rows={[
                { nutrient: "năng lượng", amount: "10", unit: "calo", highlight: "good", note: "Rất ít calo" },
                { nutrient: "Protein", amount: "2", unit: "g", highlight: "good", note: "Protein từ cá" },
                { nutrient: "Natri", amount: "1,000", unit: "mg", highlight: "low", note: "Rất nhiều natri!" },
                { nutrient: "Canxi", amount: "10", unit: "mg", highlight: "good", note: "Một ít canxi" },
              ]}
            />
          </Card>

          <ExampleBox variant="warning" title="Lưu ý về Natri">
            <p className="mb-2">
              <strong>1 thìa canh nước mắm = 1,000mg natri</strong> - gần bằng một nửa lượng natri 
              khuyến nghị hàng ngày (2,300mg). Người tăng huyết áp chỉ nên dùng 1/2-1 thìa canh/ngày.
            </p>
            <p>
              <strong>Giải pháp:</strong> Pha loãng nước mắm với nước, chanh, đường. 
              Dùng ít nước mắm, tăng gia vị tự nhiên (tỏi, gừng, ớt).
            </p>
          </ExampleBox>

          <Card>
            <h3 className="heading-4 mb-3">Cách dùng Nước mắm đúng cách</h3>
            <div className="space-y-3">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-1">✓ Dùng Đúng:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li>• Pha loãng: 1 thìa nước mắm + 2-3 thìa nước + chanh + đường</li>
                  <li>• Dùng ít: 1/2-1 thìa canh cho cả bữa ăn</li>
                  <li>• Kết hợp với gia vị tự nhiên: tỏi, gừng, ớt, chanh</li>
                  <li>• Chọn nước mắm ít natri nếu có</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-1">✗ Tránh:</p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• Dùng nhiều nước mắm (2-3 thìa canh/bữa)</li>
                  <li>• Dùng nước mắm nguyên chất không pha</li>
                  <li>• Dùng nước mắm cho mọi món ăn</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Cách Dùng">
            <p className="mb-2">
              <strong>Nước mắm pha:</strong> 1 thìa nước mắm + 2 thìa nước + 1 thìa nước cốt chanh + 
              1/2 thìa đường. Dùng để chấm rau luộc, thịt luộc. Giảm natri, tăng hương vị.
            </p>
            <p>
              <strong>Nước mắm trong nấu ăn:</strong> Dùng 1/2 thìa nước mắm cho cả món kho, 
              tăng tỏi, gừng, ớt để tăng hương vị mà không cần nhiều nước mắm.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tương: Gia vị thay thế Nước mắm</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Các loại Tương</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Tương (1 thìa canh = 15ml)"
              rows={[
                { nutrient: "Tương đen", amount: "15", unit: "calo, 2g protein, 900mg natri", highlight: "moderate", note: "Nhiều natri nhưng ít hơn nước mắm" },
                { nutrient: "Tương ớt", amount: "10", unit: "calo, 1g protein, 800mg natri", highlight: "moderate", note: "Có vị cay, ít natri hơn" },
                { nutrient: "Tương cà", amount: "20", unit: "calo, 1g protein, 600mg natri", highlight: "moderate", note: "Ít natri hơn nước mắm" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Cách Dùng Tương">
            <p className="mb-2">
              <strong>Thay nước mắm:</strong> Dùng tương thay nước mắm trong một số món để giảm natri. 
              Tương có ít natri hơn nước mắm một chút.
            </p>
            <p>
              <strong>Kết hợp:</strong> Dùng tương với tỏi, gừng, chanh để tăng hương vị mà không cần nhiều tương.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chao: Thực phẩm lên men tốt</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Giá trị Dinh dưỡng Chao</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Chao (100g)"
              rows={[
                { nutrient: "năng lượng", amount: "100", unit: "calo", highlight: "good", note: "Ít calo" },
                { nutrient: "Protein", amount: "10", unit: "g", highlight: "good", note: "Giàu protein" },
                { nutrient: "Canxi", amount: "150", unit: "mg", highlight: "good", note: "Giàu canxi" },
                { nutrient: "Natri", amount: "800", unit: "mg", highlight: "moderate", note: "Natri vừa phải" },
              ]}
            />
          </Card>

          <ExampleBox variant="info" title="Lợi ích của Chao">
            <p className="mb-2">
              <strong>Chao</strong> là thực phẩm lên men từ đậu phụ, giàu protein và canxi. 
              Có thể dùng như gia vị hoặc món ăn kèm.
            </p>
            <p>
              <strong>Cách dùng:</strong> Dùng 1-2 miếng chao nhỏ (20-30g) cho cả bữa ăn. 
              Có thể dùng để chấm rau, thịt, hoặc nấu với thịt.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Mắm tôm, Mắm ruốc: Dùng ít</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">Lưu ý về Mắm tôm, Mắm ruốc</h3>
            <p className="text-sm text-red-900 mb-2">
              Mắm tôm, mắm ruốc có <strong>rất nhiều natri</strong> (1,500-2,000mg/1 thìa canh). 
              Người tăng huyết áp, suy tim, bệnh thận nên <strong>tránh hoặc dùng rất ít</strong>.
            </p>
            <p className="text-sm text-red-900">
              <strong>Nếu dùng:</strong> Chỉ dùng 1/4-1/2 thìa canh, pha loãng với chanh, đường. 
              Không dùng thường xuyên.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Gia vị tốt vs Nên hạn chế</h2>
        <ComparisonCard
          goodTitle="Cách dùng tốt"
          goodItems={[
            "Nước mắm pha loãng: 1 thìa nước mắm + 2-3 thìa nước + chanh + đường",
            "Tương: Dùng thay nước mắm để giảm natri",
            "Chao: Dùng 1-2 miếng nhỏ, giàu protein và canxi",
            "Kết hợp với gia vị tự nhiên: tỏi, gừng, ớt, chanh"
          ]}
          badTitle="Cách dùng nên hạn chế"
          badItems={[
            "Nước mắm nguyên chất không pha: Quá nhiều natri",
            "Dùng nhiều nước mắm: 2-3 thìa canh/bữa",
            "Mắm tôm, mắm ruốc: Rất nhiều natri, nên tránh",
            "Chỉ dùng nước mắm, không dùng gia vị tự nhiên"
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
                <strong>Pha loãng nước mắm:</strong> Luôn pha loãng với nước, chanh, đường. 
                Giảm natri, tăng hương vị.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Dùng ít:</strong> Chỉ dùng 1/2-1 thìa canh nước mắm cho cả bữa ăn. 
                Không dùng nhiều.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tăng gia vị tự nhiên:</strong> Dùng tỏi, gừng, ớt, chanh để tăng hương vị 
                mà không cần nhiều nước mắm.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>thay thế:</strong> Dùng tương thay nước mắm trong một số món để giảm natri.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn sản phẩm ít natri:</strong> Nếu có, chọn nước mắm ít natri, 
                tương ít natri.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh mắm tôm, mắm ruốc:</strong> Nếu có tăng huyết áp, suy tim, bệnh thận, 
                nên tránh hoặc dùng rất ít.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Điều chỉnh cho Người có bệnh lý</h2>
        <Card>
          <h3 className="heading-4 mb-3">Người Tăng huyết áp, Suy tim, Bệnh thận</h3>
          <div className="space-y-2 text-body-sm">
            <p>
              <strong>Hạn chế nghiêm ngặt:</strong> Chỉ dùng 1/2 thìa canh nước mắm/ngày, 
              hoặc thậm chí ít hơn. Pha loãng nhiều.
            </p>
            <p>
              <strong>thay thế:</strong> Dùng tương, chao thay nước mắm. Tăng gia vị tự nhiên.
            </p>
            <p>
              <strong>Tránh:</strong> Mắm tôm, mắm ruốc - quá nhiều natri.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Nước mắm tốt vì có protein"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nước mắm có protein nhưng rất ít (2g/1 thìa canh). 
                Vấn đề là natri rất cao (1,000mg). Không nên dùng nhiều chỉ vì có protein.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải dùng nước mắm nguyên chất mới ngon"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nước mắm pha loãng với chanh, đường vẫn ngon và giảm natri. 
                Pha loãng là cách tốt để dùng nước mắm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Tất cả gia vị Việt Nam đều nhiều natri"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không phải! Tỏi, gừng, ớt, chanh có rất ít natri. 
                Nên tăng các gia vị này, giảm nước mắm.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Hiểu về natri và cách giảm natri trong chế độ ăn
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Protein trong nước mắm, chao
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-cooking-methods">
            <h3 className="heading-5 mb-2">Cách Nấu Ăn lành mạnh Kiểu Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cách sử dụng gia vị trong nấu ăn
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Gia vị Việt Nam có thể lành mạnh nếu dùng đúng cách, 
          nhưng cần chú ý đến natri. Nếu bạn có tăng huyết áp, suy tim, bệnh thận, hoặc các vấn đề sức khỏe khác, 
          hãy tham khảo chuyên gia dinh dưỡng để được tư vấn phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

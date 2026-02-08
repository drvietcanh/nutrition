import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { NutrientTable } from "../../../components/NutrientTable";
import { Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Chức năng Việt Nam: Nước mắm, Tương, Chao",
  description:
    "Tìm hiểu về các loại gia vị và thực phẩm lên men Việt Nam - nước mắm, tương, chao, mắm tôm. Giá trị dinh dưỡng, cách sử dụng, và lưu ý về natri.",
  keywords: [
    "nước mắm",
    "tương",
    "chao",
    "mắm tôm",
    "gia vị Việt Nam",
    "thực phẩm lên men",
    "probiotics",
  ],
};

export default function VietnameseFermentedFoodsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Tổng quát", href: "/knowledge/general-nutrition" },
          { label: "Thực phẩm Chức năng Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Chức năng Việt Nam: Nước mắm, Tương, Chao</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Gia vị và thực phẩm lên men Việt Nam như nước mắm, tương, chao không chỉ tạo hương vị đậm đà 
          mà còn có giá trị dinh dưỡng. Hiểu về cách sử dụng đúng cách giúp bạn tận dụng lợi ích và tránh rủi ro.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Nước mắm:</strong> Giàu protein, natri - dùng ít, pha loãng
          </li>
          <li>
            <strong>Tương:</strong> Giàu protein, ít natri hơn nước mắm
          </li>
          <li>
            <strong>Chao:</strong> Giàu protein, probiotics - tốt cho tiêu hóa
          </li>
          <li>
            <strong>Mắm tôm, mắm ruốc:</strong> Giàu protein, natri - dùng ít
          </li>
          <li>
            <strong>Lưu ý:</strong> Chú ý natri, đặc biệt với người cao huyết áp
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nước Mắm</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Nước mắm là gia vị phổ biến nhất ở Việt Nam, được làm từ cá lên men.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Nước Mắm (100ml)"
            rows={[
              { nutrient: "Protein", amount: "10-15", unit: "g", note: "Từ cá lên men" },
              { nutrient: "Natri", amount: "15,000-20,000", unit: "mg", note: "Rất cao - cần dùng ít" },
              { nutrient: "Calo", amount: "50-80", unit: "calo", note: "Thấp" },
            ]}
          />
          <ExampleBox variant="warning" title="Lưu ý về Natri">
            <p className="text-sm">
              Nước mắm có <strong>rất nhiều natri</strong> (15,000-20,000mg/100ml). 
              Nhu cầu natri hàng ngày chỉ khoảng 2,300mg. Dùng <strong>ít</strong> và <strong>pha loãng</strong>.
            </p>
          </ExampleBox>
          <div className="bg-blue-50 rounded-lg p-3 border border-blue-200 mt-3">
            <p className="text-sm font-semibold text-gray-900 mb-1">Cách dùng đúng:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Pha loãng với nước, chanh, đường (nước mắm pha)</li>
              <li>• Dùng ít (1-2 muỗng canh cho cả bữa)</li>
              <li>• Chọn nước mắm ít natri nếu có</li>
              <li>• Không dùng trực tiếp, luôn pha loãng</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tương</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Tương là gia vị làm từ đậu nành lên men, có nhiều loại: tương đen, tương ớt, tương cà.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Tương (100g)"
            rows={[
              { nutrient: "Protein", amount: "8-12", unit: "g", note: "Từ đậu nành" },
              { nutrient: "Natri", amount: "3,000-5,000", unit: "mg", note: "Ít hơn nước mắm" },
              { nutrient: "Calo", amount: "80-120", unit: "calo", note: "Thấp" },
            ]}
          />
          <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
            <p className="text-sm font-semibold text-gray-900 mb-1">Cách Dùng:</p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>• Dùng với bánh mì, bún, phở</li>
              <li>• Dùng ít, vì vẫn có natri</li>
              <li>• Tương đen, tương ớt - tùy khẩu vị</li>
            </ul>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chao</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Chao là đậu phụ lên men, giàu protein và probiotics (lợi khuẩn).
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Chao (100g)"
            rows={[
              { nutrient: "Protein", amount: "12-15", unit: "g", note: "Từ đậu phụ lên men" },
              { nutrient: "Natri", amount: "2,000-3,000", unit: "mg", note: "Vừa phải" },
              { nutrient: "Probiotics", amount: "Có", unit: "", note: "Lợi khuẩn tốt cho tiêu hóa" },
            ]}
          />
          <ExampleBox variant="tip" title="Lợi ích">
            <p className="text-sm">
              Chao có <strong>probiotics</strong> (lợi khuẩn) giúp tiêu hóa tốt. 
              Giàu protein, ít natri hơn nước mắm. Dùng với cơm, bánh mì.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Mắm Tôm, Mắm Ruốc</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Mắm tôm, mắm ruốc là gia vị đậm đà, giàu protein nhưng cũng nhiều natri.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Mắm (100g)"
            rows={[
              { nutrient: "Protein", amount: "15-20", unit: "g", note: "Từ tôm/ruốc lên men" },
              { nutrient: "Natri", amount: "10,000-15,000", unit: "mg", note: "Rất cao - dùng ít" },
            ]}
          />
          <ExampleBox variant="warning" title="Lưu ý">
            <p className="text-sm">
              Mắm tôm, mắm ruốc có <strong>rất nhiều natri</strong>. Dùng <strong>rất ít</strong> 
              (1/2-1 muỗng cà phê) và pha loãng. Người cao huyết áp nên hạn chế.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Gia vị</h2>
        <ComparisonCard
          title="Gia vị Việt Nam"
          goodTitle="Tốt hơn (Ít Natri)"
          goodItems={[
            "Tương - ít natri hơn nước mắm",
            "Chao - có probiotics, ít natri",
            "Nước mắm pha loãng - giảm natri",
          ]}
          badTitle="Nên hạn chế (Nhiều Natri)"
          badItems={[
            "Nước mắm nguyên chất - rất nhiều natri",
            "Mắm tôm, mắm ruốc - rất nhiều natri",
            "Gia vị chế biến sẵn - có thể nhiều natri",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Sử dụng đúng cách</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Dùng ít:</strong> Gia vị Việt Nam thường nhiều natri. Dùng ít (1-2 muỗng canh cho cả bữa).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Pha loãng:</strong> Nước mắm, mắm tôm nên pha loãng với nước, chanh, đường.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn loại ít natri:</strong> Nếu có, chọn nước mắm ít natri.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người cao huyết áp:</strong> Hạn chế nước mắm, mắm tôm. Dùng tương, chao thay thế.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Sodium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong chế độ ăn
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Protein trong gia vị Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/probiotics-gut-health">
            <h3 className="heading-5 mb-2">Probiotics và Sức khỏe Đường ruột</h3>
            <p className="text-sm text-gray-600">
              Probiotics trong chao
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Gia vị Việt Nam thường nhiều natri. 
          Nếu bạn có cao huyết áp, bệnh thận, hoặc các vấn đề sức khỏe khác, 
          hãy tham khảo bác sĩ về cách sử dụng gia vị phù hợp.
        </p>
      </Callout>
    </main>
  );
}

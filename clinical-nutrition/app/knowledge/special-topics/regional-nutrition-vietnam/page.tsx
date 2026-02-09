import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Map, Utensils, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng Theo vùng miền Việt Nam",
  description:
    "Khám phá đặc điểm dinh dưỡng theo vùng miền Việt Nam - Miền bắc, Miền trung, Miền Nam. món ăn đặc trưng, ưu và nhược điểm, cách cân bằng.",
  keywords: [
    "vùng miền Việt Nam",
    "miền Bắc",
    "miền Trung",
    "miền Nam",
    "món ăn đặc trưng",
    "ẩm thực vùng miền",
  ],
};

export default function RegionalNutritionVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng Theo vùng miền Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Map className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng Theo vùng miền Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Việt Nam có 3 vùng miền với đặc điểm ẩm thực khác nhau - Miền bắc, Miền trung, Miền Nam. 
          Mỗi vùng có món ăn đặc trưng, ưu và nhược điểm về dinh dưỡng. Hiểu về đặc điểm này giúp bạn 
          điều chỉnh chế độ ăn phù hợp.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Miền bắc:</strong> món ăn nhẹ nhàng, ít cay, nhiều rau - tốt cho sức khỏe
          </li>
          <li>
            <strong>Miền trung:</strong> món ăn đậm đà, cay, nhiều gia vị - chú ý muối
          </li>
          <li>
            <strong>Miền Nam:</strong> món ăn ngọt, nhiều nước dừa, nhiều rau - chú ý đường
          </li>
          <li>
            <strong>Cách cân bằng:</strong> Điều chỉnh theo vùng để có chế độ ăn lành mạnh
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Miền bắc</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Ẩm thực Miền bắc nhẹ nhàng, ít cay, nhiều rau, phù hợp với chế độ ăn lành mạnh.
          </p>
          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">món ăn đặc trưng:</p>
              <p className="text-xs text-gray-700">
                Phở, bún chả, bánh cuốn, nem rán, canh chua - nhẹ nhàng, nhiều rau.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Ưu điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nhiều rau củ - giàu vitamin, chất xơ</li>
                <li>• Ít cay, ít dầu mỡ - dễ tiêu hóa</li>
                <li>• Cân bằng dinh dưỡng - có đủ carbohydrate, protein, rau</li>
              </ul>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Nhược điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Một số món có thể nhiều muối (nước mắm)</li>
                <li>• Nem rán có thể nhiều dầu mỡ</li>
              </ul>
            </div>
          </div>
          <ExampleBox variant="tip" title="Ví dụ món ăn">
            <p className="text-sm">
              <strong>Phở gà:</strong> Bánh phở + thịt gà + rau thơm - có đủ carbohydrate, protein, vitamin. 
              Chọn phở gà thay vì phở bò để ít béo hơn.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Miền trung</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Ẩm thực Miền trung đậm đà, cay, nhiều gia vị, cần chú ý muối và gia vị.
          </p>
          <div className="space-y-3">
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">món ăn đặc trưng:</p>
              <p className="text-xs text-gray-700">
                Bún bò Huế, mì Quảng, bánh bèo, nem lụi - đậm đà, cay, nhiều gia vị.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Ưu điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nhiều rau củ - giàu vitamin, chất xơ</li>
                <li>• Đa dạng hải sản - giàu protein, omega-3</li>
                <li>• Gia vị tự nhiên - có lợi ích sức khỏe</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Nhược điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nhiều muối (nước mắm, gia vị) - cần chú ý</li>
                <li>• Một số món có thể cay quá - ảnh hưởng dạ dày</li>
              </ul>
            </div>
          </div>
          <ExampleBox variant="warning" title="Lưu ý">
            <p className="text-sm">
              món ăn Miền trung thường <strong>nhiều muối</strong> và <strong>cay</strong>. 
              Người cao huyết áp hoặc có vấn đề dạ dày nên điều chỉnh.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Miền Nam</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Ẩm thực Miền Nam ngọt, nhiều nước dừa, nhiều rau, cần chú ý đường.
          </p>
          <div className="space-y-3">
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">món ăn đặc trưng:</p>
              <p className="text-xs text-gray-700">
                Cơm tấm, bánh mì, canh chua cá, bún riêu - ngọt, nhiều nước dừa, nhiều rau.
              </p>
            </div>
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Ưu điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nhiều rau củ - giàu vitamin, chất xơ</li>
                <li>• Đa dạng hải sản - giàu protein, omega-3</li>
                <li>• Nước dừa - giàu kali, điện giải</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Nhược điểm:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nhiều đường (nước dừa, đường phèn) - cần chú ý</li>
                <li>• Một số món có thể nhiều dầu mỡ</li>
              </ul>
            </div>
          </div>
          <ExampleBox variant="warning" title="Lưu ý">
            <p className="text-sm">
              món ăn Miền Nam thường <strong>nhiều đường</strong> (nước dừa, đường phèn). 
              Người tiểu đường hoặc cần kiểm soát đường huyết nên điều chỉnh.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Vùng miền</h2>
        <ComparisonCard
          title="Đặc điểm Dinh dưỡng"
          goodTitle="Ưu điểm chung"
          goodItems={[
            "Nhiều rau củ - giàu vitamin, chất xơ",
            "Đa dạng hải sản - giàu protein, omega-3",
            "Gia vị tự nhiên - có lợi ích sức khỏe",
            "Cân bằng dinh dưỡng - có đủ carbohydrate, protein, rau",
          ]}
          badTitle="Nhược điểm Cần chú ý"
          badItems={[
            "Miền bắc: Một số món nhiều muối",
            "Miền trung: Nhiều muối, cay quá",
            "Miền Nam: Nhiều đường",
            "Một số món nhiều dầu mỡ",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách cân bằng</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Miền bắc:</strong> Giảm nước mắm, tăng rau củ - đã lành mạnh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Miền trung:</strong> Giảm muối, giảm cay - điều chỉnh gia vị.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Miền Nam:</strong> Giảm đường, giảm nước dừa - điều chỉnh độ ngọt.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>chung:</strong> Tăng rau củ, giảm dầu mỡ - áp dụng cho tất cả vùng miền.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Sodium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm muối trong món ăn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Đặc điểm dinh dưỡng có thể thay đổi tùy theo 
          vùng miền và cách chế biến. Hãy điều chỉnh chế độ ăn phù hợp với tình trạng sức khỏe của bạn 
          và tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}

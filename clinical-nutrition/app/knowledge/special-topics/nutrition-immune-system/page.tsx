import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { NutrientTable } from "../../../components/NutrientTable";
import { Shield, Apple, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng và Hệ miễn dịch",
  description:
    "Tổng quan về dinh dưỡng cho hệ miễn dịch. Các chất dinh dưỡng quan trọng, nguồn thực phẩm, và cách tăng cường hệ miễn dịch qua dinh dưỡng.",
  keywords: [
    "hệ miễn dịch",
    "immune system",
    "vitamin C",
    "zinc",
    "selenium",
    "protein",
    "dinh dưỡng miễn dịch",
  ],
};

export default function NutritionImmuneSystemPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề Đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng và Hệ miễn dịch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng và Hệ miễn dịch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Hệ miễn dịch là "hệ thống phòng thủ" của cơ thể, giúp chống lại bệnh tật và nhiễm trùng. 
          Dinh dưỡng đóng vai trò quan trọng trong việc hỗ trợ và tăng cường hệ miễn dịch. 
          Hiểu về các chất dinh dưỡng cần thiết giúp bạn xây dựng hệ miễn dịch khỏe mạnh.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Hệ miễn dịch</strong> cần nhiều chất dinh dưỡng để hoạt động tốt
          </li>
          <li>
            <strong>Chất dinh dưỡng quan trọng:</strong> Protein, Vitamin C, Vitamin D, Zinc, Selenium
          </li>
          <li>
            <strong>Đa dạng thực phẩm</strong> là chìa khóa - không chỉ một chất dinh dưỡng
          </li>
          <li>
            <strong>Thực phẩm Việt Nam:</strong> Cá, tôm, rau củ, trái cây giàu chất dinh dưỡng cho miễn dịch
          </li>
          <li>
            <strong>Không có "siêu thực phẩm"</strong> - cần chế độ ăn cân bằng và đa dạng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Hệ miễn dịch là gì?</h2>
        <div className="space-y-4">
          <Card>
            <p className="text-body-sm mb-3">
              <strong>Hệ miễn dịch</strong> là mạng lưới phức tạp của các tế bào, mô, và cơ quan 
              làm việc cùng nhau để bảo vệ cơ thể khỏi vi khuẩn, virus, và các tác nhân có hại khác.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Nhận biết và tiêu diệt vi khuẩn, virus</li>
                  <li>• Ghi nhớ mầm bệnh đã gặp</li>
                  <li>• Sửa chữa tế bào bị tổn thương</li>
                  <li>• Loại bỏ tế bào bất thường</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi hệ miễn dịch yếu:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Dễ bị bệnh, nhiễm trùng</li>
                  <li>• Chậm lành vết thương</li>
                  <li>• Mệt mỏi, yếu</li>
                  <li>• Dễ bị biến chứng</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Hệ miễn dịch giống như "đội quân bảo vệ" của cơ thể. Khi có "kẻ xâm nhập" (vi khuẩn, virus), 
              hệ miễn dịch gửi "binh lính" (tế bào miễn dịch) để tiêu diệt chúng. 
              Để "binh lính" hoạt động tốt, chúng cần "vũ khí" và "nhiên liệu" - đó là các chất dinh dưỡng từ thực phẩm.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chất Dinh dưỡng Quan trọng cho Hệ miễn dịch</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">1. Protein</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Protein cần thiết để tạo ra các tế bào miễn dịch và kháng thể. Thiếu protein làm suy yếu hệ miễn dịch.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <p className="text-xs text-gray-700">
                Thịt nạc, cá, tôm, cua, trứng, đậu, đậu phụ. 
                <strong> Ở Việt Nam:</strong> Cá, tôm, cua, ốc, đậu phụ, chả, giò.
              </p>
            </div>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">2. Vitamin C</h3>
            <p className="text-body-sm text-orange-900 mb-3">
              Vitamin C hỗ trợ sản xuất tế bào miễn dịch và hoạt động như chất chống oxy hóa.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <p className="text-xs text-gray-700">
                Trái cây họ cam quýt, ớt chuông, bông cải xanh, dâu tây. 
                <strong> Ở Việt Nam:</strong> Cam, chanh, ổi, xoài, đu đủ, ớt chuông.
              </p>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">3. Vitamin D</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Vitamin D điều chỉnh hoạt động của hệ miễn dịch. Thiếu vitamin D có thể làm suy yếu miễn dịch.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <p className="text-xs text-gray-700">
                Ánh nắng mặt trời, cá béo, lòng đỏ trứng, sữa tăng cường. 
                <strong> Ở Việt Nam:</strong> Ánh nắng (phơi nắng 10-15 phút/ngày), cá, trứng.
              </p>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">4. Zinc (Kẽm)</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Zinc cần thiết cho sự phát triển và chức năng của tế bào miễn dịch.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <p className="text-xs text-gray-700">
                Thịt, hải sản, quả hạch, đậu, ngũ cốc nguyên cám. 
                <strong> Ở Việt Nam:</strong> Thịt, cá, tôm, cua, đậu phộng, đậu đen.
              </p>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">5. Selenium</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Selenium hỗ trợ chức năng miễn dịch và hoạt động như chất chống oxy hóa.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <p className="text-xs text-gray-700">
                Hải sản, thịt, trứng, quả hạch. 
                <strong> Ở Việt Nam:</strong> Cá, tôm, cua, ốc, trứng, đậu phộng.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bảng Tổng hợp Chất Dinh dưỡng cho Miễn dịch</h2>
        <NutrientTable
          title="Chất Dinh dưỡng Quan trọng cho Hệ miễn dịch"
          rows={[
            { nutrient: "Protein", amount: "0.8-1.0", unit: "g/kg/ngày", note: "Tạo tế bào miễn dịch" },
            { nutrient: "Vitamin C", amount: "75-90", unit: "mg/ngày", note: "Hỗ trợ tế bào miễn dịch" },
            { nutrient: "Vitamin D", amount: "600-800", unit: "IU/ngày", note: "Điều chỉnh miễn dịch" },
            { nutrient: "Zinc", amount: "8-11", unit: "mg/ngày", note: "Chức năng tế bào miễn dịch" },
            { nutrient: "Selenium", amount: "55", unit: "mcg/ngày", note: "Chất chống oxy hóa" },
            { nutrient: "Vitamin A", amount: "700-900", unit: "mcg/ngày", note: "Bảo vệ niêm mạc" },
            { nutrient: "Vitamin E", amount: "15", unit: "mg/ngày", note: "Chất chống oxy hóa" },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Tăng cường Miễn dịch</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa Sáng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cháo thịt gà + rau thơm (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Protein từ thịt gà (tế bào miễn dịch)</li>
              <li>Vitamin C từ rau thơm (hành, ngò)</li>
              <li>Carbohydrate từ gạo (năng lượng)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa Trưa</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Canh chua cá + Rau muống luộc (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Protein từ cá (tế bào miễn dịch, selenium, zinc)</li>
              <li>Vitamin C từ cà chua, đậu bắp trong canh chua</li>
              <li>Vitamin A, chất xơ từ rau muống</li>
              <li>Carbohydrate từ cơm (năng lượng)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa Tối</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Tôm rang me + Rau cải xào (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Protein, selenium, zinc từ tôm</li>
              <li>Vitamin C từ me, rau cải</li>
              <li>Vitamin A từ rau cải</li>
              <li>Carbohydrate từ cơm</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Trái cây</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Ổi, xoài, cam (Việt Nam):</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
              <li>Vitamin C từ ổi, cam, xoài</li>
              <li>Vitamin A từ xoài</li>
              <li>Chất xơ, chất chống oxy hóa</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Tăng cường Hệ miễn dịch qua Dinh dưỡng</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đa dạng:</strong> Không có "siêu thực phẩm" - cần nhiều loại thực phẩm để có đủ chất dinh dưỡng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đủ protein:</strong> Protein từ thịt, cá, đậu cần thiết để tạo tế bào miễn dịch.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều rau củ và trái cây:</strong> Cung cấp vitamin C, A, E, và chất chống oxy hóa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hải sản thường xuyên:</strong> Cá, tôm, cua cung cấp zinc, selenium, protein.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Phơi nắng:</strong> 10-15 phút/ngày để có vitamin D (quan trọng cho miễn dịch).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tận dụng thực phẩm phong phú - cá, tôm, rau củ, trái cây địa phương.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Cần bổ sung nhiều vitamin C để tăng miễn dịch"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đủ vitamin C từ thực phẩm đã tốt. Bổ sung quá nhiều không tự động 
                tăng miễn dịch. Quan trọng là chế độ ăn cân bằng với nhiều chất dinh dưỡng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Có 'siêu thực phẩm' tăng miễn dịch"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không có một thực phẩm nào có thể "tăng miễn dịch" một mình. 
                Hệ miễn dịch cần nhiều chất dinh dưỡng từ nhiều loại thực phẩm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần một chất dinh dưỡng là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Hệ miễn dịch cần nhiều chất dinh dưỡng cùng lúc - protein, vitamin C, D, 
                zinc, selenium, và nhiều chất khác. Đa dạng thực phẩm là chìa khóa.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/vitamin-c-immunity">
            <h3 className="heading-5 mb-2">Vitamin C và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Chi tiết về vitamin C cho hệ miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/zinc-immunity">
            <h3 className="heading-5 mb-2">Kẽm và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Chi tiết về zinc cho hệ miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/selenium-immunity">
            <h3 className="heading-5 mb-2">Selenium và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Chi tiết về selenium cho hệ miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Protein cần thiết cho tế bào miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Thực phẩm Việt Nam giàu chất dinh dưỡng cho miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/special-topics/antioxidants-foods">
            <h3 className="heading-5 mb-2">Chất chống Oxy hóa trong Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Chất chống oxy hóa hỗ trợ hệ miễn dịch
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng hỗ trợ hệ miễn dịch, nhưng không thể 
          "tăng miễn dịch" một cách thần kỳ. Hệ miễn dịch phụ thuộc vào nhiều yếu tố: dinh dưỡng, giấc ngủ, 
          tập thể dục, stress, tuổi tác, và di truyền. Quan trọng là duy trì chế độ ăn cân bằng, đa dạng, 
          và lối sống lành mạnh. Nếu bạn có bệnh lý đặc biệt hoặc hệ miễn dịch suy yếu, 
          hãy tham khảo chuyên gia dinh dưỡng hoặc bác sĩ.
        </p>
      </Callout>
    </main>
  );
}

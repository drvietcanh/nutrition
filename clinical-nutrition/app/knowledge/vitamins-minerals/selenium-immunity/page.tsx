import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Shield, Fish, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Selenium và Miễn dịch",
  description:
    "Hiểu về selenium - khoáng chất quan trọng cho hệ miễn dịch, chức năng tuyến giáp, và chất chống oxy hóa. Nguồn thực phẩm và nhu cầu.",
  keywords: [
    "selenium",
    "miễn dịch",
    "immunity",
    "khoáng chất",
    "chất chống oxy hóa",
    "tuyến giáp",
  ],
};

export default function SeleniumImmunityPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Selenium và Miễn dịch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Selenium và Miễn dịch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Selenium là một khoáng chất vi lượng quan trọng cho hệ miễn dịch, chức năng tuyến giáp, 
          và hoạt động như chất chống oxy hóa. Mặc dù cần với lượng nhỏ, selenium đóng vai trò quan trọng 
          trong sức khỏe tổng thể.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Selenium</strong> quan trọng cho hệ miễn dịch và chức năng tuyến giáp
          </li>
          <li>
            <strong>Nhu cầu:</strong> 55mcg/ngày cho người lớn (cả nam và nữ)
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Cá, hải sản, quả hạch Brazil, thịt, trứng
          </li>
          <li>
            <strong>Ở Việt Nam:</strong> Cá, tôm, cua, ốc, đậu phộng là nguồn selenium tốt
          </li>
          <li>
            <strong>Thiếu:</strong> Hiếm gặp, nhưng có thể gây yếu miễn dịch, vấn đề tuyến giáp
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Selenium là gì và Vai trò của nó?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Hỗ trợ hệ miễn dịch</li>
                  <li>• Chức năng tuyến giáp</li>
                  <li>• Chất chống oxy hóa</li>
                  <li>• Sản xuất DNA</li>
                  <li>• Bảo vệ tế bào</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Suy giảm miễn dịch</li>
                  <li>• Vấn đề tuyến giáp</li>
                  <li>• Yếu cơ</li>
                  <li>• Mệt mỏi</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Selenium giống như "người hỗ trợ" cho hệ miễn dịch. Nó giúp các tế bào miễn dịch hoạt động tốt, 
              giống như cung cấp "công cụ" cần thiết để chống lại bệnh tật. Selenium cũng giúp tuyến giáp 
              hoạt động đúng, điều chỉnh sự trao đổi chất.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Selenium</h2>
        <Card>
          <NutrientTable
            title="Nhu cầu Selenium Hàng ngày"
            rows={[
              { nutrient: "Người lớn (nam và nữ)", amount: "55", unit: "mcg/ngày", note: "Microgram" },
              { nutrient: "Phụ nữ mang thai", amount: "60", unit: "mcg/ngày", note: "Tăng nhẹ" },
              { nutrient: "Phụ nữ cho con bú", amount: "70", unit: "mcg/ngày", note: "Tăng" },
            ]}
          />
        </Card>

        <ExampleBox variant="tip" title="Ví dụ Thực tế">
          <p className="mb-2">
            <strong>55mcg selenium/ngày có thể đạt được từ:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>100g cá ngừ (90mcg) - vượt quá nhu cầu</li>
            <li><strong>100g cá basa (Việt Nam) (~50mcg) + 30g đậu phộng (5mcg) = 55mcg</strong></li>
            <li>100g tôm (40mcg) + 1 quả trứng (15mcg) = 55mcg</li>
          </ul>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Selenium Tốt</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Hải sản (Nguồn Tốt nhất)</h3>
            <NutrientTable
              rows={[
                { nutrient: "Cá ngừ (100g)", amount: "90", unit: "mcg", note: "Rất cao" },
                { nutrient: "Cá hồi (100g)", amount: "40", unit: "mcg", note: "Cao" },
                { nutrient: "Cá basa (Việt Nam) (100g)", amount: "~50", unit: "mcg", note: "Cao, phổ biến Việt Nam" },
                { nutrient: "Tôm (100g)", amount: "40", unit: "mcg", note: "Cao, phổ biến Việt Nam" },
                { nutrient: "Cua (100g)", amount: "40", unit: "mcg", note: "Cao, phổ biến Việt Nam" },
                { nutrient: "Ốc (100g)", amount: "30", unit: "mcg", note: "Tốt, phổ biến Việt Nam" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Thịt và Trứng</h3>
            <NutrientTable
              rows={[
                { nutrient: "Thịt heo (100g)", amount: "35", unit: "mcg", note: "Tốt" },
                { nutrient: "Thịt gà (100g)", amount: "25", unit: "mcg", note: "Tốt" },
                { nutrient: "Thịt bò (100g)", amount: "30", unit: "mcg", note: "Tốt" },
                { nutrient: "Trứng (1 quả)", amount: "15", unit: "mcg", note: "Tốt" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quả hạch và Hạt</h3>
            <NutrientTable
              rows={[
                { nutrient: "Quả hạch Brazil (30g)", amount: "544", unit: "mcg", note: "Rất cao (chú ý không ăn quá nhiều)" },
                { nutrient: "Đậu phộng (Việt Nam) (30g)", amount: "5", unit: "mcg", note: "Ít, nhưng phổ biến" },
                { nutrient: "Hạt hướng dương (30g)", amount: "20", unit: "mcg", note: "Tốt" },
              ]}
            />
          </Card>

          <ExampleBox variant="info" title="Selenium trong Món ăn Việt Nam">
            <p className="mb-2">
              <strong>Cá, tôm, cua, ốc</strong> là nguồn selenium tuyệt vời và phổ biến ở Việt Nam. 
              Các món như cá kho, tôm rang, cua rang, ốc xào đều cung cấp selenium.
            </p>
            <p className="mb-2">
              <strong>Canh chua cá</strong> là món ăn Việt Nam phổ biến, cung cấp selenium từ cá 
              cùng với vitamin từ rau củ.
            </p>
            <p>
              <strong>Trứng</strong> cũng là nguồn selenium tốt. Trứng luộc, trứng ốp la là món ăn sáng 
              phổ biến ở Việt Nam.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích Sức khỏe của Selenium</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Hệ Miễn dịch</h3>
            <p className="text-body-sm">
              Selenium hỗ trợ hệ miễn dịch bằng cách giúp sản xuất các tế bào miễn dịch và 
              chống lại nhiễm trùng. Thiếu selenium có thể làm suy yếu hệ miễn dịch.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Chức năng Tuyến giáp</h3>
            <p className="text-body-sm">
              Selenium cần thiết cho chức năng tuyến giáp. Nó giúp chuyển đổi hormone tuyến giáp 
              sang dạng hoạt động, điều chỉnh sự trao đổi chất.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Chất chống Oxy hóa</h3>
            <p className="text-body-sm">
              Selenium hoạt động như chất chống oxy hóa, bảo vệ tế bào khỏi tổn thương do gốc tự do, 
              giúp làm chậm lão hóa.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Tim mạch</h3>
            <p className="text-body-sm">
              Một số nghiên cứu cho thấy selenium có thể hỗ trợ sức khỏe tim mạch, 
              mặc dù cần nghiên cứu thêm.
            </p>
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
                <strong>Ăn hải sản thường xuyên:</strong> Cá, tôm, cua, ốc là nguồn selenium tốt. 
                Ăn 2-3 lần/tuần giúp đảm bảo đủ selenium.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp nhiều nguồn:</strong> Cá, thịt, trứng, quả hạch - đa dạng nguồn selenium.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tận dụng hải sản phong phú - cá, tôm, cua, ốc trong bữa ăn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý quả hạch Brazil:</strong> Rất giàu selenium, nhưng không nên ăn quá nhiều 
                (chỉ 1-2 quả/ngày) vì có thể gây thừa selenium.
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
              <p className="text-sm font-semibold mb-1">"Cần bổ sung selenium để tăng miễn dịch"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Hầu hết người khỏe mạnh có thể đủ selenium từ thực phẩm. 
                Bổ sung quá nhiều selenium có thể gây hại. Nên ăn đa dạng hải sản, thịt, trứng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ hải sản mới có selenium"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Hải sản là nguồn tốt nhất, nhưng thịt, trứng, quả hạch cũng có selenium.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/zinc-immunity">
            <h3 className="heading-5 mb-2">Kẽm và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Kẽm cũng quan trọng cho hệ miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-c-immunity">
            <h3 className="heading-5 mb-2">Vitamin C và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Vitamin C cũng hỗ trợ hệ miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Cá, tôm, cua, ốc trong món ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/nutrition-immune-system">
            <h3 className="heading-5 mb-2">Dinh dưỡng và Hệ miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Tổng quan về dinh dưỡng cho hệ miễn dịch
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Selenium từ thực phẩm thường an toàn, 
          nhưng bổ sung quá nhiều selenium (trên 400mcg/ngày) có thể gây độc tính. 
          Nếu bạn có bệnh lý đặc biệt hoặc đang dùng thuốc, hãy tham khảo chuyên gia dinh dưỡng 
          hoặc bác sĩ trước khi bổ sung selenium.
        </p>
      </Callout>
    </main>
  );
}

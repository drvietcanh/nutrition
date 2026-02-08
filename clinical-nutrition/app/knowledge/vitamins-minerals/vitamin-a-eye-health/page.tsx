import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Eye, Carrot, AlertTriangle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin A và Sức khỏe Mắt",
  description:
    "Hiểu về vitamin A - vitamin quan trọng cho sức khỏe mắt, hệ miễn dịch, và da. Nguồn thực phẩm, nhu cầu, và warnings về toxicity.",
  keywords: [
    "vitamin A",
    "sức khỏe mắt",
    "eye health",
    "beta-carotene",
    "retinol",
  ],
};

export default function VitaminAEyeHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Vitamin A và Sức khỏe Mắt" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Eye className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin A và Sức khỏe Mắt</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin A là một vitamin quan trọng cho sức khỏe mắt, hệ miễn dịch, và da. 
          Thiếu vitamin A có thể gây vấn đề về mắt, nhưng quá nhiều cũng có thể nguy hiểm.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin A</strong> quan trọng cho mắt, hệ miễn dịch, và da
          </li>
          <li>
            <strong>Nhu cầu:</strong> 700-900mcg/ngày cho người lớn (nữ 700mcg, nam 900mcg)
          </li>
          <li>
            <strong>Nguồn:</strong> Gan, cá, trứng (retinol), cà rốt, khoai lang, rau xanh đậm (beta-carotene)
          </li>
          <li>
            <strong>Beta-carotene:</strong> An toàn hơn retinol (cơ thể chỉ chuyển đổi khi cần)
          </li>
          <li>
            <strong>Cảnh báo:</strong> Quá nhiều vitamin A (retinol) có thể độc, đặc biệt khi mang thai
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin A là gì và Vai trò của nó?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sức khỏe mắt (thị lực, đặc biệt ban đêm)</li>
                <li>• Hệ miễn dịch</li>
                <li>• Sức khỏe da</li>
                <li>• Tăng trưởng và phát triển</li>
                <li>• Sinh sản</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Quáng gà (khó nhìn ban đêm)</li>
                <li>• Khô mắt</li>
                <li>• Dễ bị nhiễm trùng</li>
                <li>• Da khô, sần</li>
                <li>• Chậm tăng trưởng (ở trẻ em)</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hai Loại Vitamin A</h2>
        <Card>
          <h3 className="heading-4 mb-3">Retinol vs Beta-carotene</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Retinol (Preformed Vitamin A):</strong> Có sẵn trong thực phẩm động vật. 
              cơ thể sử dụng trực tiếp. Có thể tích tụ và gây độc nếu quá nhiều.
            </p>
            <p>
              <strong>Beta-carotene (Provitamin A):</strong> Có trong thực phẩm thực vật. 
              cơ thể chuyển đổi thành vitamin A khi cần. An toàn hơn vì cơ thể chỉ chuyển đổi khi cần.
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Nguồn Thực phẩm</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Retinol (Động vật):</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Gan (rất giàu!)</li>
                <li>• Cá béo</li>
                <li>• Trứng</li>
                <li>• Sữa, phô mai</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Beta-carotene (Thực vật):</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Cà rốt</li>
                <li>• Khoai lang</li>
                <li>• Rau xanh đậm (rau chân vịt, bông cải)</li>
                <li>• Ớt chuông đỏ, vàng</li>
                <li>• Xoài, đu đủ</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Vitamin A Tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Hàm lượng Vitamin A trong Thực phẩm</h3>
          <NutrientTable
            rows={[
              { nutrient: "Gan bò (100g)", amount: "6,500", unit: "mcg", highlight: "low", note: "Rất giàu! Chỉ ăn 1-2 lần/tuần" },
              { nutrient: "Khoai lang (100g, nấu chín)", amount: "1,000", unit: "mcg", highlight: "good" },
              { nutrient: "Cà rốt (100g, nấu chín)", amount: "850", unit: "mcg", highlight: "good" },
              { nutrient: "Rau chân vịt (100g, nấu chín)", amount: "470", unit: "mcg", highlight: "good" },
              { nutrient: "Trứng (1 quả)", amount: "75", unit: "mcg", highlight: "moderate" },
              { nutrient: "Cá hồi (100g)", amount: "12", unit: "mcg", highlight: "moderate" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cảnh báo về Toxicity</h2>
        <Callout variant="error" title="QUAN TRỌNG: Vitamin A có thể Độc">
          <div className="space-y-2 text-body-sm">
            <p>
              <strong>Quá nhiều retinol (vitamin A từ động vật) có thể gây độc:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Buồn nôn, nôn</li>
              <li>Đau đầu, chóng mặt</li>
              <li>Nhìn mờ</li>
              <li>Tổn thương gan (nếu dùng liều cao lâu dài)</li>
            </ul>
            <p className="mt-2">
              <strong>Đặc biệt nguy hiểm khi mang thai:</strong> Quá nhiều retinol có thể gây dị tật thai nhi. 
              Phụ nữ mang thai nên tránh gan và bổ sung retinol liều cao.
            </p>
            <p className="mt-2">
              <strong>Beta-carotene an toàn hơn:</strong> cơ thể chỉ chuyển đổi khi cần, không tích tụ. 
              Ăn nhiều cà rốt, khoai lang không gây độc (chỉ có thể làm da hơi vàng).
            </p>
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
                <strong>Ưu tiên beta-carotene:</strong> Ăn nhiều cà rốt, khoai lang, rau xanh đậm - an toàn và tốt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế gan:</strong> Gan rất giàu vitamin A, chỉ nên ăn 1-2 lần/tuần
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Phụ nữ mang thai:</strong> Tránh gan và bổ sung retinol liều cao. 
                Beta-carotene từ thực phẩm an toàn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Ăn đa dạng thực phẩm giàu vitamin A để có đủ
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/special-topics/antioxidants-foods">
            <h3 className="heading-5 mb-2">Chất chống Oxy hóa trong Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Beta-carotene là một chất chống oxy hóa
            </p>
          </Card>
          <Card href="/knowledge/life-stages/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Cảnh báo về vitamin A khi mang thai
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Vitamin A có thể độc nếu quá nhiều, 
          đặc biệt retinol từ động vật. Phụ nữ mang thai cần đặc biệt cẩn thận. Nếu bạn có 
          thắc mắc về vitamin A hoặc đang cân nhắc bổ sung, hãy tham khảo bác sĩ.
        </p>
      </Callout>
    </main>
  );
}

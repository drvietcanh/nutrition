import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Shield, Apple, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin C và Miễn dịch",
  description:
    "Hiểu về vitamin C - vitamin quan trọng cho hệ miễn dịch, chữa lành vết thương, và sức khỏe tổng thể. Nguồn thực phẩm và nhu cầu.",
  keywords: [
    "vitamin C",
    "miễn dịch",
    "immunity",
    "ascorbic acid",
    "trái cây",
    "rau củ",
  ],
};

export default function VitaminCImmunityPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Vitamin C và Miễn dịch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin C và Miễn dịch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin C là một vitamin quan trọng cho hệ miễn dịch, chữa lành vết thương, và sức khỏe tổng thể. 
          cơ thể không thể tự tạo vitamin C, nên cần lấy từ thực phẩm mỗi ngày.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin C</strong> quan trọng cho hệ miễn dịch và chữa lành vết thương
          </li>
          <li>
            <strong>Nhu cầu:</strong> 75-90mg/ngày cho người lớn (nữ 75mg, nam 90mg)
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Trái cây họ cam quýt, ớt chuông, bông cải xanh, dâu tây
          </li>
          <li>
            <strong>Dễ mất:</strong> Nấu chín có thể làm mất vitamin C, nên ăn tươi khi có thể
          </li>
          <li>
            <strong>Thiếu:</strong> Có thể gây mệt mỏi, dễ bị bệnh, chậm lành vết thương
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin C là gì và Vai trò của nó?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hỗ trợ hệ miễn dịch</li>
                <li>• Chữa lành vết thương</li>
                <li>• Chất chống oxy hóa</li>
                <li>• Hấp thu sắt từ thực phẩm</li>
                <li>• Tạo collagen (da, xương, mạch máu)</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Mệt mỏi, yếu</li>
                <li>• Dễ bị bệnh</li>
                <li>• Chậm lành vết thương</li>
                <li>• Chảy máu nướu</li>
                <li>• Thiếu máu (do không hấp thu sắt tốt)</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Vitamin C giống như "người bảo vệ" cho cơ thể. Nó giúp hệ miễn dịch chống lại vi khuẩn, 
            virus, và giúp cơ thể sửa chữa khi bị tổn thương. Giống như cơ thể cần "bảo vệ" mỗi ngày, 
            bạn cần vitamin C mỗi ngày từ thực phẩm.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Vitamin C Tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu Vitamin C</h3>
          <NutrientTable
            title="Hàm lượng Vitamin C trong Thực phẩm"
            rows={[
              { nutrient: "Ớt chuông đỏ (100g)", amount: "190", unit: "mg", highlight: "good", note: "Hơn 2 lần nhu cầu/ngày!" },
              { nutrient: "Ớt chuông vàng (100g)", amount: "184", unit: "mg", highlight: "good" },
              { nutrient: "Bông cải xanh (100g)", amount: "89", unit: "mg", highlight: "good" },
              { nutrient: "Dâu tây (100g)", amount: "59", unit: "mg", highlight: "good" },
              { nutrient: "Cam (1 quả vừa)", amount: "70", unit: "mg", highlight: "good" },
              { nutrient: "Chanh (1 quả)", amount: "30", unit: "mg", highlight: "moderate" },
              { nutrient: "Cà chua (100g)", amount: "14", unit: "mg", highlight: "moderate" },
              { nutrient: "Khoai tây (100g)", amount: "20", unit: "mg", highlight: "moderate" },
            ]}
          />
          <p className="text-body-sm mt-3 text-gray-600">
            <strong>Mẹo:</strong> Trái cây và rau củ tươi thường có nhiều vitamin C hơn đồ đã nấu chín. 
            Ăn tươi khi có thể!
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Vitamin C</h2>
        <Card>
          <h3 className="heading-4 mb-3">Nhu cầu Hàng ngày</h3>
          <NutrientTable
            rows={[
              { nutrient: "Phụ nữ (19+)", amount: "75", unit: "mg/ngày" },
              { nutrient: "Nam giới (19+)", amount: "90", unit: "mg/ngày" },
              { nutrient: "Phụ nữ mang thai", amount: "85", unit: "mg/ngày" },
              { nutrient: "Phụ nữ cho con bú", amount: "120", unit: "mg/ngày" },
              { nutrient: "Người hút thuốc", amount: "+35", unit: "mg/ngày", note: "Thêm vào nhu cầu cơ bản" },
            ]}
          />
          <p className="text-body-sm mt-3">
            <strong>Lưu ý:</strong> Nhu cầu này dễ đạt được nếu bạn ăn đủ trái cây và rau củ. 
            Một quả cam đã cung cấp gần đủ nhu cầu!
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn trái cây và rau củ mỗi ngày:</strong> đảm bảo có ít nhất 1-2 phần trái cây và rau củ giàu vitamin C
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn tươi khi có thể:</strong> Vitamin C dễ mất khi nấu, nên ăn tươi hoặc nấu nhanh
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp với sắt:</strong> Ăn thực phẩm giàu vitamin C cùng với thực phẩm giàu sắt 
                (ví dụ: ớt chuông + thịt) để hấp thu sắt tốt hơn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Không chỉ cam quýt, nhiều rau củ cũng giàu vitamin C
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Uống nhiều vitamin C sẽ không bị cảm"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Vitamin C giúp hệ miễn dịch hoạt động tốt, nhưng không ngăn ngừa 
                hoàn toàn cảm lạnh. Quan trọng là đủ, không phải quá nhiều.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần bổ sung vitamin C mỗi ngày"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Hầu hết người khỏe mạnh có thể đủ vitamin C từ thực phẩm. 
                Chỉ cần bổ sung nếu không thể ăn đủ trái cây và rau củ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cam quýt mới có vitamin C"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nhiều thực phẩm khác cũng giàu vitamin C, như ớt chuông, 
                bông cải xanh, dâu tây, thậm chí nhiều hơn cam!
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Vitamin C giúp hấp thu sắt tốt hơn
            </p>
          </Card>
          <Card href="/knowledge/special-topics/antioxidants-foods">
            <h3 className="heading-5 mb-2">Chất chống Oxy hóa trong Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Vitamin C là một chất chống oxy hóa quan trọng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu vitamin C của mỗi người có thể khác nhau. 
          Nếu bạn có bệnh lý đặc biệt, hút thuốc, hoặc có nguy cơ thiếu vitamin C, hãy tham khảo bác sĩ 
          hoặc chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

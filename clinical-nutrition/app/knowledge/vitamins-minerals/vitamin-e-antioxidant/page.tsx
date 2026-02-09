import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { NutrientTable } from "../../../components/NutrientTable";
import { Shield, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin E và Chất chống oxy hóa",
  description:
    "Hiểu về vitamin E - vitamin quan trọng cho chất chống oxy hóa, sức khỏe da, và bảo vệ tế bào. Nguồn thực phẩm và nhu cầu.",
  keywords: [
    "vitamin E",
    "chất chống oxy hóa",
    "antioxidants",
    "sức khỏe da",
    "dầu thực vật",
    "quả hạch",
  ],
};

export default function VitaminEAntioxidantPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Vitamin E và Chất chống oxy hóa" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin E và Chất chống oxy hóa</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin E là một vitamin tan trong chất béo, đóng vai trò quan trọng như chất chống oxy hóa, 
          bảo vệ tế bào khỏi tổn thương, và hỗ trợ sức khỏe da, mắt, và hệ miễn dịch.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin E</strong> là chất chống oxy hóa mạnh, bảo vệ tế bào khỏi tổn thương
          </li>
          <li>
            <strong>Nhu cầu:</strong> 15mg/ngày cho người lớn (cả nam và nữ)
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Dầu thực vật, quả hạch, hạt, rau xanh, trái bơ
          </li>
          <li>
            <strong>Ở Việt Nam:</strong> Dầu đậu nành, dầu mè, đậu phộng, hạt điều, rau muống
          </li>
          <li>
            <strong>Thiếu:</strong> Hiếm gặp, nhưng có thể gây yếu cơ, vấn đề thần kinh
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin E là gì và Vai trò của nó?</h2>
        <div className="space-y-4">
          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Chất chống oxy hóa - bảo vệ tế bào</li>
                  <li>• Hỗ trợ sức khỏe da</li>
                  <li>• Hỗ trợ hệ miễn dịch</li>
                  <li>• Bảo vệ mắt</li>
                  <li>• Hỗ trợ sức khỏe tim mạch</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Yếu cơ</li>
                  <li>• Vấn đề thần kinh</li>
                  <li>• Suy giảm miễn dịch</li>
                  <li>• Vấn đề về da</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Vitamin E giống như "áo giáp" bảo vệ tế bào khỏi "gỉ sét" (oxidation). 
              Khi cơ thể sử dụng oxy để tạo năng lượng, nó tạo ra các phân tử có hại gọi là "gốc tự do". 
              Vitamin E giúp "vô hiệu hóa" các phân tử này, bảo vệ tế bào khỏi tổn thương.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Vitamin E</h2>
        <Card>
          <NutrientTable
            title="Nhu cầu Vitamin E Hàng ngày"
            rows={[
              { nutrient: "Người lớn (nam và nữ)", amount: "15", unit: "mg/ngày", note: "Tương đương 22.4 IU" },
              { nutrient: "Phụ nữ mang thai", amount: "15", unit: "mg/ngày", note: "Giữ nguyên" },
              { nutrient: "Phụ nữ cho con bú", amount: "19", unit: "mg/ngày", note: "Tăng nhẹ" },
            ]}
          />
        </Card>

        <ExampleBox variant="tip" title="Ví dụ thực tế">
          <p className="mb-2">
            <strong>15mg vitamin E/ngày có thể đạt được từ:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>1 muỗng canh dầu đậu nành (6mg) + 30g hạnh nhân (7mg) + 1 bát rau xanh (2mg) = 15mg</li>
            <li><strong>1 muỗng canh dầu mè (Việt Nam) (5mg) + 30g đậu phộng (Việt Nam) (7mg) + rau muống (2mg) = 14mg</strong></li>
          </ul>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn vitamin E Tốt</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Dầu thực vật (Nguồn tốt nhất)</h3>
            <NutrientTable
              rows={[
                { nutrient: "Dầu mầm lúa mì", amount: "20.3", unit: "mg/muỗng canh", note: "Rất cao" },
                { nutrient: "Dầu hướng dương", amount: "5.6", unit: "mg/muỗng canh", note: "Cao" },
                { nutrient: "Dầu đậu nành (Việt Nam)", amount: "1.1", unit: "mg/muỗng canh", note: "Phổ biến ở Việt Nam" },
                { nutrient: "Dầu mè (Việt Nam)", amount: "1.4", unit: "mg/muỗng canh", note: "Dùng trong nấu ăn Việt Nam" },
                { nutrient: "Dầu ô liu", amount: "1.9", unit: "mg/muỗng canh", note: "Tốt cho sức khỏe" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quả hạch và Hạt</h3>
            <NutrientTable
              rows={[
                { nutrient: "Hạnh nhân (30g)", amount: "7.3", unit: "mg", note: "Rất cao" },
                { nutrient: "Hạt hướng dương (30g)", amount: "7.4", unit: "mg", note: "Rất cao" },
                { nutrient: "Đậu phộng (Việt Nam) (30g)", amount: "2.2", unit: "mg", note: "Phổ biến ở Việt Nam" },
                { nutrient: "Hạt điều (Việt Nam) (30g)", amount: "0.3", unit: "mg", note: "Ít hơn" },
                { nutrient: "Óc chó (30g)", amount: "0.2", unit: "mg", note: "Ít hơn" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Rau củ và Trái cây</h3>
            <NutrientTable
              rows={[
                { nutrient: "Rau bina (100g nấu chín)", amount: "2.0", unit: "mg", note: "Tốt" },
                { nutrient: "Bông cải xanh (100g nấu chín)", amount: "1.5", unit: "mg", note: "Tốt" },
                { nutrient: "Rau muống (Việt Nam) (100g)", amount: "1.0", unit: "mg", note: "Rau phổ biến Việt Nam" },
                { nutrient: "Trái bơ (1/2 quả)", amount: "2.0", unit: "mg", note: "Tốt" },
                { nutrient: "Ớt chuông đỏ (100g)", amount: "1.6", unit: "mg", note: "Tốt" },
              ]}
            />
          </Card>

          <ExampleBox variant="info" title="Vitamin E trong món ăn Việt Nam">
            <p className="mb-2">
              <strong>Dầu đậu nành và dầu mè</strong> là nguồn vitamin E phổ biến trong nấu ăn Việt Nam. 
              Chúng thường được dùng để xào rau, nấu canh.
            </p>
            <p className="mb-2">
              <strong>Đậu phộng</strong> là món ăn vặt phổ biến ở Việt Nam, cung cấp vitamin E. 
              Có thể ăn đậu phộng rang, hoặc dùng bơ đậu phộng.
            </p>
            <p>
              <strong>Rau muống, rau cải</strong> khi được nấu với dầu thực vật cũng cung cấp vitamin E. 
              Ví dụ: Rau muống xào tỏi với dầu đậu nành.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chất chống oxy hóa là gì?</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Chất chống oxy hóa</h3>
            <p className="text-body-sm mb-3">
              <strong>Chất chống oxy hóa</strong> là các hợp chất bảo vệ tế bào khỏi tổn thương do "gốc tự do". 
              Gốc tự do được tạo ra khi cơ thể sử dụng oxy, tiếp xúc với khói thuốc, tia UV, hoặc stress.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Gốc tự do (Có hại):</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Tổn thương tế bào</li>
                  <li>• Lão hóa nhanh</li>
                  <li>• Tăng nguy cơ bệnh</li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-gray-900 mb-1">Chất chống oxy hóa (Bảo vệ):</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li>• Bảo vệ tế bào</li>
                  <li>• Làm chậm lão hóa</li>
                  <li>• Giảm nguy cơ bệnh</li>
                </ul>
              </div>
            </div>
          </Card>

          <ComparisonCard
            title="So sánh: Thực phẩm Giàu vs Ít vitamin E"
            items={[
              {
                label: "Dầu thực vật",
                good: "Dầu mầm lúa mì, dầu hướng dương, dầu đậu nành - rất giàu vitamin E",
                bad: "Dầu dừa, mỡ động vật - ít hoặc không có vitamin E",
                note: "Dầu thực vật là nguồn vitamin E tốt nhất"
              },
              {
                label: "Quả hạch",
                good: "Hạnh nhân, hạt hướng dương, đậu phộng - giàu vitamin E",
                bad: "Quả hạch đã chiên/rang với nhiều muối - vẫn có vitamin E nhưng nhiều natri",
                note: "Chọn quả hạch không muối hoặc ít muối"
              },
              {
                label: "Rau củ",
                good: "Rau xanh nấu với dầu thực vật - có cả vitamin E từ rau và dầu",
                bad: "Rau củ luộc không dầu - ít vitamin E hơn",
                note: "Nấu rau với một chút dầu thực vật giúp hấp thu vitamin E tốt hơn"
              },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích sức khỏe của Vitamin E</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Da</h3>
            <p className="text-body-sm">
              Vitamin E giúp bảo vệ da khỏi tia UV, giữ ẩm, và có thể giúp làm chậm lão hóa da. 
              Nhiều sản phẩm chăm sóc da chứa vitamin E.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Hệ miễn dịch</h3>
            <p className="text-body-sm">
              Vitamin E hỗ trợ hệ miễn dịch bằng cách bảo vệ tế bào miễn dịch khỏi tổn thương, 
              giúp cơ thể chống lại bệnh tật tốt hơn.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Mắt</h3>
            <p className="text-body-sm">
              Vitamin E có thể giúp bảo vệ mắt khỏi tổn thương do tuổi tác, đặc biệt khi kết hợp 
              với các chất chống oxy hóa khác như vitamin C.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Tim mạch</h3>
            <p className="text-body-sm">
              Vitamin E có thể giúp bảo vệ tim mạch bằng cách ngăn chặn quá trình oxy hóa cholesterol xấu (LDL), 
              mặc dù cần nghiên cứu thêm.
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
                <strong>Dùng dầu thực vật:</strong> Dầu đậu nành, dầu mè trong nấu ăn cung cấp vitamin E. 
                Chỉ cần một lượng nhỏ (1-2 muỗng canh/ngày).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn quả hạch:</strong> Đậu phộng, hạt điều là món ăn vặt tốt, cung cấp vitamin E. 
                Chọn loại không muối hoặc ít muối.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu rau với dầu:</strong> Rau muống, rau cải xào với dầu đậu nành hoặc dầu mè 
                giúp hấp thu vitamin E tốt hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Kết hợp nhiều nguồn vitamin E (dầu, quả hạch, rau) để đảm bảo đủ.
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
              <p className="text-sm font-semibold mb-1">"Cần bổ sung vitamin E để chống lão hóa"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Hầu hết người khỏe mạnh có thể đủ vitamin E từ thực phẩm. 
                Bổ sung quá nhiều vitamin E có thể gây hại. Nên ăn đa dạng thực phẩm giàu vitamin E.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Tất cả dầu đều có vitamin E"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Dầu thực vật (đậu nành, hướng dương, mè) có nhiều vitamin E, 
                nhưng dầu dừa và mỡ động vật có ít hoặc không có.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần ăn nhiều quả hạch để có vitamin E"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quả hạch giàu vitamin E nhưng cũng nhiều calo. 
                Chỉ cần một lượng nhỏ (30g/ngày) kết hợp với dầu thực vật là đủ.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/vitamin-c-immunity">
            <h3 className="heading-5 mb-2">Vitamin C và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Vitamin C cũng là chất chống oxy hóa quan trọng
            </p>
          </Card>
          <Card href="/knowledge/special-topics/antioxidants-foods">
            <h3 className="heading-5 mb-2">Chất chống oxy hóa trong thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Tổng quan về các chất chống oxy hóa
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Dầu thực vật là nguồn vitamin E tốt
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Dầu đậu nành, dầu mè, đậu phộng trong món ăn Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Vitamin E từ thực phẩm thường an toàn, 
          nhưng bổ sung quá nhiều vitamin E (trên 1000mg/ngày) có thể gây hại. Nếu bạn đang dùng 
          thuốc làm loãng máu (warfarin), hãy tham khảo bác sĩ trước khi bổ sung vitamin E. 
          Nếu bạn có bệnh lý đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

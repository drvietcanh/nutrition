import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Magnesium và Sức khỏe",
  description:
    "Hiểu về magnesium - khoáng chất quan trọng cho cơ bắp, thần kinh, tim mạch, và xương. Nguồn thực phẩm, nhu cầu, và symptoms của thiếu.",
  keywords: [
    "magnesium",
    "magie",
    "cơ bắp",
    "tim mạch",
    "xương",
    "giấc ngủ",
  ],
};

export default function MagnesiumHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Magnesium và Sức khỏe" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Magnesium và Sức khỏe</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Magnesium (magie) là một khoáng chất quan trọng tham gia vào hơn 300 phản ứng trong cơ thể. 
          Từ cơ bắp, thần kinh, đến tim mạch và xương, magnesium đóng vai trò quan trọng trong nhiều chức năng.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Magnesium</strong> tham gia vào hơn 300 phản ứng trong cơ thể
          </li>
          <li>
            <strong>Nhu cầu:</strong> 310-420mg/ngày cho người lớn (nữ 310mg, nam 420mg)
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Quả hạch, hạt, đậu, rau xanh đậm, ngũ cốc nguyên cám
          </li>
          <li>
            <strong>Thiếu:</strong> Có thể gây chuột rút, mệt mỏi, lo lắng, khó ngủ
          </li>
          <li>
            <strong>Quan trọng:</strong> Cho cơ bắp, thần kinh, tim mạch, xương
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Magnesium là gì và Vai trò của nó?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Co và thư giãn cơ bắp</li>
                <li>• Chức năng thần kinh</li>
                <li>• Nhịp tim ổn định</li>
                <li>• Xương chắc khỏe</li>
                <li>• Tạo năng lượng</li>
                <li>• Tổng hợp protein</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Chuột rút cơ bắp</li>
                <li>• Mệt mỏi, yếu</li>
                <li>• Lo lắng, căng thẳng</li>
                <li>• Khó ngủ</li>
                <li>• Nhịp tim không đều</li>
                <li>• Đau đầu</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Magnesium giống như "dầu bôi trơn" cho cơ thể. Nó giúp cơ bắp hoạt động mượt mà, 
            thần kinh truyền tín hiệu tốt, và tim đập đều. Khi thiếu magnesium, cơ thể có thể 
            "kẹt" - cơ bắp dễ chuột rút, thần kinh căng thẳng.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Magnesium Tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu Magnesium</h3>
          <NutrientTable
            title="Hàm lượng Magnesium trong Thực phẩm"
            rows={[
              { nutrient: "Hạnh nhân (30g)", amount: "80", unit: "mg", highlight: "good" },
              { nutrient: "Hạt điều (30g)", amount: "74", unit: "mg", highlight: "good" },
              { nutrient: "Hạt bí (30g)", amount: "150", unit: "mg", highlight: "good", note: "Rất giàu!" },
              { nutrient: "Đậu đen (100g, nấu chín)", amount: "60", unit: "mg", highlight: "good" },
              { nutrient: "Đậu lăng (100g, nấu chín)", amount: "36", unit: "mg", highlight: "moderate" },
              { nutrient: "Rau chân vịt (100g, nấu chín)", amount: "87", unit: "mg", highlight: "good" },
              { nutrient: "Bông cải xanh (100g, nấu chín)", amount: "21", unit: "mg", highlight: "moderate" },
              { nutrient: "Gạo lứt (100g, nấu chín)", amount: "43", unit: "mg", highlight: "moderate" },
              { nutrient: "Chuối (1 quả vừa)", amount: "32", unit: "mg", highlight: "moderate" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Magnesium</h2>
        <Card>
          <h3 className="heading-4 mb-3">Nhu cầu Hàng ngày</h3>
          <NutrientTable
            rows={[
              { nutrient: "Phụ nữ (19-30 tuổi)", amount: "310", unit: "mg/ngày" },
              { nutrient: "Phụ nữ (31+)", amount: "320", unit: "mg/ngày" },
              { nutrient: "Nam giới (19-30 tuổi)", amount: "400", unit: "mg/ngày" },
              { nutrient: "Nam giới (31+)", amount: "420", unit: "mg/ngày" },
              { nutrient: "Phụ nữ mang thai", amount: "350-360", unit: "mg/ngày" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Symptoms của Thiếu Magnesium</h2>
        <Card>
          <h3 className="heading-4 mb-3">Dấu hiệu Có thể Thiếu</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Triệu chứng sớm:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 mb-3">
              <li>Chuột rút cơ bắp (đặc biệt ban đêm)</li>
              <li>Mệt mỏi, yếu</li>
              <li>Lo lắng, căng thẳng</li>
              <li>Khó ngủ</li>
            </ul>
            <p>
              <strong>Triệu chứng nặng hơn:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6">
              <li>Nhịp tim không đều</li>
              <li>Co giật cơ</li>
              <li>Tê, ngứa ran</li>
              <li>Đau đầu</li>
            </ul>
            <Callout variant="warning" title="Lưu ý" className="mt-3">
              <p className="text-body-sm">
                Các triệu chứng này có thể do nhiều nguyên nhân khác. Nếu bạn có các triệu chứng này, 
                hãy tham khảo bác sĩ để được chẩn đoán chính xác.
              </p>
            </Callout>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn quả hạch và hạt:</strong> Hạnh nhân, hạt điều, hạt bí rất giàu magnesium
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn ngũ cốc nguyên cám:</strong> Gạo lứt, yến mạch có nhiều magnesium hơn gạo trắng
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đậu và đậu lăng:</strong> Nguồn magnesium tốt và cũng giàu protein
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Rau xanh đậm:</strong> Rau chân vịt, bông cải xanh giàu magnesium
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/calcium-bone-health">
            <h3 className="heading-5 mb-2">Canxi và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Magnesium cũng quan trọng cho xương
            </p>
          </Card>
          <Card href="/knowledge/special-topics/nutrition-sleep">
            <h3 className="heading-5 mb-2">Dinh dưỡng và Giấc ngủ</h3>
            <p className="text-sm text-gray-600">
              Magnesium có thể ảnh hưởng đến giấc ngủ
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu magnesium của mỗi người có thể khác nhau. 
          Nếu bạn có các triệu chứng có thể liên quan đến thiếu magnesium, hãy tham khảo bác sĩ để được 
          chẩn đoán và điều trị phù hợp. Không tự ý bổ sung magnesium liều cao mà không tham khảo bác sĩ.
        </p>
      </Callout>
    </main>
  );
}

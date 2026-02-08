import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Baby, Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Folate và Phụ nữ Mang thai",
  description:
    "Hiểu về folate (axit folic) - vitamin quan trọng cho phụ nữ mang thai. Ngăn ngừa dị tật ống thần kinh, nguồn thực phẩm, và nhu cầu.",
  keywords: [
    "folate",
    "axit folic",
    "mang thai",
    "pregnancy",
    "neural tube defects",
    "vitamin B9",
  ],
};

export default function FolatePregnancyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Folate và Phụ nữ Mang thai" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Baby className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">Folate và Phụ nữ Mang thai</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Folate (hay axit folic) là một vitamin B quan trọng đặc biệt cho phụ nữ mang thai. 
          Folate giúp ngăn ngừa dị tật ống thần kinh ở thai nhi và cần thiết cho sự phát triển của em bé.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Folate</strong> quan trọng đặc biệt trong 3 tháng đầu thai kỳ
          </li>
          <li>
            <strong>Nhu cầu:</strong> 600mcg/ngày khi mang thai (tăng từ 400mcg)
          </li>
          <li>
            <strong>Bổ sung:</strong> Nên bổ sung 400mcg/ngày trước và trong khi mang thai
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Rau xanh đậm, đậu, ngũ cốc tăng cường
          </li>
          <li>
            <strong>Quan trọng:</strong> Cần đủ folate TRƯỚC khi biết mang thai (ống thần kinh đóng sớm)
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vì sao Folate Quan trọng cho Phụ nữ Mang thai?</h2>
        <Card>
          <h3 className="heading-4 mb-3">Vai trò của Folate</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Ngăn ngừa dị tật ống thần kinh:</strong> Folate giúp ống thần kinh của thai nhi 
              đóng đúng cách. Ống thần kinh đóng trong 3-4 tuần đầu thai kỳ - thường trước khi phụ nữ 
              biết mình mang thai!
            </p>
            <p>
              <strong>Tạo tế bào máu:</strong> Folate cần thiết để tạo tế bào máu cho cả mẹ và con.
            </p>
            <p>
              <strong>Phát triển DNA:</strong> Folate cần thiết cho sự phát triển và phân chia tế bào.
            </p>
          </div>
        </Card>

        <Callout variant="error" title="QUAN TRỌNG">
          <p className="text-body-sm">
            <strong>Ống thần kinh đóng trong 3-4 tuần đầu thai kỳ</strong> - thường trước khi phụ nữ 
            biết mình mang thai. Đây là lý do tại sao phụ nữ trong độ tuổi sinh đẻ nên đảm bảo đủ folate, 
            không chỉ khi đã mang thai!
          </p>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Folate</h2>
        <Card>
          <h3 className="heading-4 mb-3">Nhu cầu Hàng ngày</h3>
          <NutrientTable
            rows={[
              { nutrient: "Phụ nữ (19+)", amount: "400", unit: "mcg/ngày" },
              { nutrient: "Phụ nữ mang thai", amount: "600", unit: "mcg/ngày", note: "Tăng 50%" },
              { nutrient: "Phụ nữ cho con bú", amount: "500", unit: "mcg/ngày" },
              { nutrient: "Bổ sung khuyến nghị (mang thai)", amount: "400", unit: "mcg/ngày", note: "Ngoài thực phẩm" },
            ]}
          />
          <p className="text-body-sm mt-3">
            <strong>Lưu ý:</strong> Khó đạt đủ 600mcg chỉ từ thực phẩm, nên bổ sung 400mcg/ngày 
            khi mang thai (và trước khi mang thai).
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Folate Tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu Folate</h3>
          <NutrientTable
            title="Hàm lượng Folate trong Thực phẩm"
            rows={[
              { nutrient: "Rau chân vịt (100g, nấu chín)", amount: "146", unit: "mcg", highlight: "good" },
              { nutrient: "Đậu đen (100g, nấu chín)", amount: "256", unit: "mcg", highlight: "good" },
              { nutrient: "Đậu lăng (100g, nấu chín)", amount: "181", unit: "mcg", highlight: "good" },
              { nutrient: "Bông cải xanh (100g, nấu chín)", amount: "108", unit: "mcg", highlight: "good" },
              { nutrient: "Măng tây (100g, nấu chín)", amount: "149", unit: "mcg", highlight: "good" },
              { nutrient: "Ngũ cốc tăng cường (1 bát)", amount: "100-400", unit: "mcg", highlight: "good", note: "Tùy loại" },
              { nutrient: "Cam (1 quả)", amount: "40", unit: "mcg", highlight: "moderate" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bổ sung Folate</h2>
        <Card>
          <h3 className="heading-4 mb-3">Khi nào Cần Bổ sung?</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Phụ nữ trong độ tuổi sinh đẻ:</strong> Nên bổ sung 400mcg/ngày, đặc biệt nếu 
              đang có kế hoạch mang thai.
            </p>
            <p>
              <strong>Phụ nữ mang thai:</strong> Bổ sung 400mcg/ngày (ngoài thực phẩm) để đảm bảo đủ 600mcg.
            </p>
            <p>
              <strong>Phụ nữ có tiền sử dị tật ống thần kinh:</strong> Có thể cần bổ sung nhiều hơn 
              (theo hướng dẫn bác sĩ).
            </p>
          </div>
        </Card>

        <ExampleBox variant="tip" title="Mẹo">
          <p>
            Nhiều vitamin tổng hợp cho phụ nữ mang thai đã có 400mcg folate. Kiểm tra nhãn để đảm bảo 
            bạn đang bổ sung đủ.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bổ sung trước khi mang thai:</strong> Nếu có kế hoạch mang thai, bắt đầu bổ sung 
                folate ít nhất 1 tháng trước
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn rau xanh đậm:</strong> Rau chân vịt, bông cải xanh, măng tây giàu folate
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn ngũ cốc tăng cường:</strong> Nhiều ngũ cốc ăn sáng được tăng cường folate
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu đúng cách:</strong> Folate dễ mất khi nấu quá lâu, nấu vừa chín
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
              <p className="text-sm font-semibold mb-1">"Chỉ cần bổ sung khi đã mang thai"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ống thần kinh đóng rất sớm (3-4 tuần), thường trước khi biết mang thai. 
                Nên bổ sung trước khi mang thai.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần ăn đủ thực phẩm là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Khó đạt đủ 600mcg chỉ từ thực phẩm. Bổ sung 400mcg/ngày 
                giúp đảm bảo đủ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Folate và axit folic giống nhau hoàn toàn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Folate là dạng tự nhiên trong thực phẩm, axit folic là dạng bổ sung. 
                Cả hai đều tốt, nhưng axit folic hấp thu tốt hơn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/life-stages/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Tổng quan về dinh dưỡng khi mang thai
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Sắt cũng quan trọng cho phụ nữ mang thai
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Folate rất quan trọng cho phụ nữ mang thai, 
          nhưng nhu cầu có thể khác nhau tùy tình huống. Nếu bạn đang mang thai hoặc có kế hoạch mang thai, 
          hãy tham khảo bác sĩ về việc bổ sung folate phù hợp.
        </p>
      </Callout>
    </main>
  );
}

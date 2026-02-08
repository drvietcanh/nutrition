import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Heart, AlertCircle, CheckCircle2, Info } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Bệnh Tim mạch",
  description:
    "Hướng dẫn dinh dưỡng tổng quan cho bệnh tim mạch. Nguyên tắc dinh dưỡng lành mạnh cho tim, quản lý cholesterol, huyết áp, và các yếu tố nguy cơ.",
  keywords: [
    "bệnh tim mạch",
    "cardiovascular disease",
    "heart health",
    "cholesterol",
    "huyết áp",
    "dinh dưỡng tim mạch",
  ],
};

export default function CardiovascularDiseaseNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Bệnh Mạn tính", href: "/knowledge/chronic-diseases" },
          { label: "Dinh dưỡng trong Bệnh Tim mạch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng trong Bệnh Tim mạch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng đóng vai trò quan trọng trong phòng ngừa và quản lý bệnh tim mạch. 
          Chế độ ăn lành mạnh cho tim có thể giúp kiểm soát cholesterol, huyết áp, và các yếu tố nguy cơ khác.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất béo:</strong> Hạn chế chất béo bão hòa và trans, ưu tiên chất béo không bão hòa
          </li>
          <li>
            <strong>Natri:</strong> Hạn chế natri để kiểm soát huyết áp
          </li>
          <li>
            <strong>Chất xơ:</strong> Tăng chất xơ từ rau củ, trái cây, ngũ cốc nguyên cám
          </li>
          <li>
            <strong>Omega-3:</strong> Ăn cá béo 2-3 lần/tuần
          </li>
          <li>
            <strong>Rau củ và Trái cây:</strong> Nhiều màu sắc, đa dạng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vì sao Dinh dưỡng Quan trọng cho Tim mạch?</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Dinh dưỡng ảnh hưởng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Cholesterol (LDL, HDL)</li>
                <li>• Huyết áp</li>
                <li>• Viêm trong cơ thể</li>
                <li>• Cân nặng</li>
                <li>• Đường huyết</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm nguy cơ đau tim</li>
                <li>• Giảm nguy cơ đột quỵ</li>
                <li>• Cải thiện sức khỏe mạch máu</li>
                <li>• Giảm huyết áp</li>
                <li>• Kiểm soát cân nặng</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguyên tắc Dinh dưỡng Lành mạnh cho Tim</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Quản lý Chất béo</h3>
            <ComparisonCard
              title="Chất béo Tốt vs Xấu"
              items={[
                {
                  label: "Chất béo Tốt (Nên ăn)",
                  good: "Dầu ô liu, dầu hạt cải, cá béo (cá hồi, cá thu), quả hạch, bơ",
                  bad: undefined,
                  note: "Giúp giảm cholesterol xấu (LDL), tăng cholesterol tốt (HDL)"
                },
                {
                  label: "Chất béo Xấu (Nên hạn chế)",
                  good: undefined,
                  bad: "Thịt đỏ mỡ, bơ, phô mai, thực phẩm chế biến sẵn, đồ chiên",
                  note: "Làm tăng cholesterol xấu (LDL), tăng nguy cơ bệnh tim"
                },
              ]}
            />
            <p className="text-body-sm mt-3">
              <strong>Khuyến nghị:</strong> Hạn chế chất béo bão hòa &lt; 7% tổng calo, 
              tránh hoàn toàn chất béo trans.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Hạn chế Natri</h3>
            <p className="text-body-sm mb-3">
              Natri (muối) làm tăng huyết áp, tăng nguy cơ bệnh tim.
            </p>
            <NutrientTable
              rows={[
                { nutrient: "Khuyến nghị", amount: "< 2,300", unit: "mg/ngày", note: "Tương đương ~6g muối" },
                { nutrient: "Nếu có tăng huyết áp", amount: "< 1,500", unit: "mg/ngày", note: "Tương đương ~4g muối" },
                { nutrient: "1 muỗng cà phê muối", amount: "2,300", unit: "mg natri", note: "Toàn bộ nhu cầu/ngày" },
              ]}
            />
            <p className="text-body-sm mt-3">
              <strong>Mẹo:</strong> Đọc nhãn thực phẩm, hạn chế thực phẩm chế biến sẵn, 
              sử dụng gia vị thay vì muối.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Tăng Chất xơ</h3>
            <p className="text-body-sm mb-3">
              Chất xơ giúp giảm cholesterol và kiểm soát đường huyết.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Khuyến nghị:</strong> 25-30g chất xơ/ngày
              </p>
              <p>
                <strong>Nguồn tốt:</strong> Ngũ cốc nguyên cám, rau củ, trái cây, đậu, đậu lăng
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">4. Omega-3</h3>
            <p className="text-body-sm mb-3">
              Omega-3 giúp giảm viêm và cải thiện sức khỏe tim mạch.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Khuyến nghị:</strong> Ăn cá béo 2-3 lần/tuần
              </p>
              <p>
                <strong>Nguồn:</strong> Cá hồi, cá thu, cá ngừ, cá mòi, hạt chia, quả óc chó
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn lành mạnh cho Tim</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa Trưa lành mạnh</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Cá hồi nướng (100g)</p>
                <p className="text-sm text-gray-700">Omega-3, protein nạc</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Rau xanh luộc (nhiều)</p>
                <p className="text-sm text-gray-700">Chất xơ, vitamin, khoáng chất</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Gạo lứt (1 bát)</p>
                <p className="text-sm text-gray-700">Chất xơ, carbohydrate phức tạp</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Dầu ô liu (1 muỗng canh)</p>
                <p className="text-sm text-gray-700">Chất béo không bão hòa</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn protein nạc:</strong> Thịt gà, cá, đậu thay vì thịt đỏ mỡ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cá 2-3 lần/tuần:</strong> Cá hồi, cá thu, cá ngừ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế thực phẩm chế biến sẵn:</strong> Thường có nhiều natri và chất béo xấu
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đọc nhãn:</strong> Kiểm tra natri và chất béo bão hòa trên nhãn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Heart className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu tại nhà:</strong> Kiểm soát được lượng natri và chất béo
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/hypertension-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Tăng huyết áp</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn chi tiết về DASH diet và quản lý natri
            </p>
          </Card>
          <Card href="/knowledge/heart-failure-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Suy tim</h3>
            <p className="text-sm text-gray-600">
              Quản lý natri, dịch, và cân nặng trong suy tim
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong Chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu về các loại chất béo và ảnh hưởng tim mạch
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong chế độ ăn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho bệnh tim mạch cần được 
          điều chỉnh dựa trên tình trạng cụ thể của từng người. Nếu bạn có bệnh tim mạch, 
          tăng huyết áp, hoặc các yếu tố nguy cơ, hãy tham khảo bác sĩ và chuyên gia dinh dưỡng 
          để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

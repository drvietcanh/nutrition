import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Brain, Heart, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng và Sức khỏe Tâm thần",
  description:
    "Mối liên hệ giữa dinh dưỡng và sức khỏe tâm thần. Cách ăn uống ảnh hưởng đến tâm trạng, stress, và sức khỏe não bộ. Thực phẩm tốt cho tâm thần.",
  keywords: [
    "dinh dưỡng tâm thần",
    "nutrition mental health",
    "ăn uống và tâm trạng",
    "stress và dinh dưỡng",
    "sức khỏe não bộ",
    "depression",
    "anxiety",
  ],
};

export default function NutritionMentalHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng và Sức khỏe Tâm thần" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng và Sức khỏe Tâm thần</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng không chỉ ảnh hưởng đến sức khỏe thể chất mà còn ảnh hưởng đến sức khỏe tâm thần. 
          Cách bạn ăn có thể ảnh hưởng đến tâm trạng, mức độ stress, và sức khỏe não bộ. 
          Hiểu về mối liên hệ này giúp bạn hỗ trợ sức khỏe tâm thần qua dinh dưỡng.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Dinh dưỡng ảnh hưởng tâm trạng:</strong> Một số thực phẩm có thể cải thiện hoặc làm xấu tâm trạng
          </li>
          <li>
            <strong>Omega-3:</strong> Cá, quả hạch - hỗ trợ sức khỏe não bộ
          </li>
          <li>
            <strong>Vitamin B:</strong> Ngũ cốc nguyên cám, đậu - hỗ trợ chức năng não
          </li>
          <li>
            <strong>Đường huyết ổn định:</strong> Carbohydrate phức tạp, protein - giúp tâm trạng ổn định
          </li>
          <li>
            <strong>Chế độ ăn Địa Trung Hải:</strong> Nhiều rau củ, cá, dầu ô liu - có thể hỗ trợ sức khỏe tâm thần
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Mối Liên hệ giữa Dinh dưỡng và Tâm trạng</h2>
        <div className="space-y-4">
          <Card>
            <p className="text-body-sm mb-3">
              Nghiên cứu cho thấy dinh dưỡng có thể ảnh hưởng đến:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Ảnh hưởng tích cực:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tâm trạng tốt hơn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Cải thiện tập trung</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>năng lượng ổn định</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Ảnh hưởng tiêu cực:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tâm trạng xấu hơn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tăng stress</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mệt mỏi, uể oải</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Khó tập trung</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Giống như xe cần xăng tốt để chạy tốt, não cần dinh dưỡng tốt để hoạt động tốt. 
              Khi bạn ăn thực phẩm không tốt (nhiều đường, nhiều chất béo không tốt), 
              não không có "nhiên liệu" tốt, dẫn đến tâm trạng xấu, mệt mỏi. 
              Khi bạn ăn thực phẩm tốt (nhiều rau củ, cá, ngũ cốc nguyên cám), 
              não có "nhiên liệu" tốt, dẫn đến tâm trạng tốt, năng lượng ổn định.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Chất Dinh dưỡng Quan trọng cho Sức khỏe Tâm thần</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">1. Omega-3</h3>
            <p className="text-body-sm text-blue-900 mb-3">
              Omega-3 (đặc biệt DHA và EPA) quan trọng cho sức khỏe não bộ và có thể hỗ trợ tâm trạng.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Cá béo:</strong> Cá hồi, cá thu, cá ngừ, cá basa (Việt Nam)</li>
                <li>• <strong>Quả hạch:</strong> Óc chó, hạnh nhân</li>
                <li>• <strong>Hạt:</strong> Hạt chia, hạt lanh</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ở Việt Nam">
              <p className="text-sm">
                Cá basa, cá thu, cá ngừ là nguồn omega-3 tốt và phổ biến ở Việt Nam. 
                Ăn cá 2-3 lần/tuần giúp cung cấp omega-3 cho sức khỏe não bộ.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">2. Vitamin B Complex</h3>
            <p className="text-body-sm text-green-900 mb-3">
              Vitamin B (đặc biệt B6, B9, B12) cần thiết cho chức năng não và sản xuất chất dẫn truyền thần kinh.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Ngũ cốc nguyên cám:</strong> Gạo lứt, yến mạch, bánh mì nguyên cám</li>
                <li>• <strong>Đậu:</strong> Đậu đen, đậu đỏ (Việt Nam)</li>
                <li>• <strong>Thịt, cá, trứng:</strong> Vitamin B12</li>
                <li>• <strong>Rau xanh:</strong> Rau muống, rau cải (Việt Nam) - folate</li>
              </ul>
            </div>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">3. Đường huyết Ổn định</h3>
            <p className="text-body-sm text-purple-900 mb-3">
              Đường huyết không ổn định (tăng nhanh rồi giảm nhanh) có thể ảnh hưởng đến tâm trạng.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Cách ổn định đường huyết:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Chọn carbohydrate phức tạp (gạo lứt, yến mạch) thay vì đơn giản (đường, bánh kẹo)</li>
                <li>• Kết hợp carbohydrate với protein và chất béo</li>
                <li>• Ăn đều đặn, không bỏ bữa</li>
                <li>• <strong>Bữa ăn Việt Nam:</strong> Cơm + thịt/cá + rau tự nhiên ổn định đường huyết</li>
              </ul>
            </div>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">4. Chất chống Oxy hóa</h3>
            <p className="text-body-sm text-yellow-900 mb-3">
              Chất chống oxy hóa bảo vệ não khỏi tổn thương và có thể hỗ trợ sức khỏe tâm thần.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn tốt:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• <strong>Rau củ:</strong> Rau muống, rau cải, cà chua (Việt Nam)</li>
                <li>• <strong>Trái cây:</strong> Ổi, xoài, cam (Việt Nam)</li>
                <li>• <strong>Gia vị:</strong> Tỏi, gừng (Việt Nam)</li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Tốt vs Nên hạn chế cho Tâm trạng</h2>
        <ComparisonCard
          title="So sánh: Thực phẩm Tốt vs Nên hạn chế cho Tâm trạng"
          items={[
            {
              label: "Carbohydrate",
              good: "Carbohydrate phức tạp (gạo lứt, yến mạch) + protein - đường huyết ổn định, tâm trạng ổn định",
              bad: "Carbohydrate đơn giản (đường, bánh kẹo) - đường huyết tăng nhanh rồi giảm nhanh, tâm trạng không ổn định",
              note: "Chọn carbohydrate phức tạp và kết hợp với protein"
            },
            {
              label: "Chất béo",
              good: "Chất béo tốt (cá, quả hạch, dầu ô liu) - hỗ trợ sức khỏe não bộ",
              bad: "Chất béo không tốt (đồ chiên, thực phẩm chế biến) - có thể ảnh hưởng tiêu cực đến não",
              note: "Chọn chất béo tốt từ cá, quả hạch, dầu thực vật"
            },
            {
              label: "Rau củ và Trái cây",
              good: "Nhiều rau củ, trái cây - chất chống oxy hóa, vitamin, hỗ trợ sức khỏe não bộ",
              bad: "Ít rau củ, trái cây - thiếu chất chống oxy hóa, vitamin",
              note: "Ăn nhiều rau củ và trái cây mỗi ngày"
            },
            {
              label: "Đường",
              good: "Hạn chế đường - đường huyết ổn định, tâm trạng ổn định",
              bad: "Nhiều đường (nước ngọt, bánh kẹo) - đường huyết không ổn định, tâm trạng không ổn định",
              note: "Hạn chế đường, đặc biệt đường tinh chế"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Tốt cho Tâm trạng</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Bữa sáng</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Yến mạch + sữa + trái cây + quả hạch:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Carbohydrate phức tạp (yến mạch)</li>
              <li>✓ Protein (sữa)</li>
              <li>✓ Chất béo tốt (quả hạch)</li>
              <li>✓ Chất chống oxy hóa (trái cây)</li>
              <li>✓ Đường huyết ổn định</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa Trưa (Việt Nam)</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Cá kho + Canh rau muống:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Carbohydrate (cơm) + Protein (cá) = đường huyết ổn định</li>
              <li>✓ Omega-3 từ cá (sức khỏe não bộ)</li>
              <li>✓ Vitamin B từ gạo, cá</li>
              <li>✓ Chất chống oxy hóa từ rau muống</li>
              <li>✓ Bữa ăn cân bằng</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bữa Tối (Việt Nam)</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Cơm + Tôm rang + Rau cải xào:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Carbohydrate + Protein = đường huyết ổn định</li>
              <li>✓ Protein từ tôm</li>
              <li>✓ Vitamin B từ gạo, tôm</li>
              <li>✓ Chất chống oxy hóa từ rau cải</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Snack</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Trái cây + quả hạch:</strong>
            </p>
            <ul className="text-xs text-gray-700 space-y-1">
              <li>✓ Chất chống oxy hóa (trái cây)</li>
              <li>✓ Chất béo tốt (quả hạch)</li>
              <li>✓ Đường huyết ổn định</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Stress và Dinh dưỡng</h2>
        <Card>
          <h3 className="heading-4 mb-3">Khi Stress, cơ thể Cần gì?</h3>
          <p className="text-body-sm mb-3">
            Khi stress, cơ thể sử dụng nhiều vitamin B và C hơn. Cần đảm bảo đủ các vitamin này.
          </p>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Vitamin B:</strong> Ngũ cốc nguyên cám, đậu, thịt - hỗ trợ chức năng não khi stress.
            </p>
            <p>
              <strong>Vitamin C:</strong> Trái cây, rau củ - hỗ trợ hệ miễn dịch và giảm stress.
            </p>
            <p>
              <strong>Magnesium:</strong> Rau xanh, quả hạch, đậu - có thể giúp giảm stress.
            </p>
            <p>
              <strong>Ở Việt Nam:</strong> Rau muống, rau cải (magnesium), đậu đen (vitamin B), 
              trái cây (vitamin C) - thực phẩm phổ biến hỗ trợ stress.
            </p>
          </div>
        </Card>

        <Callout variant="warning" title="Ăn theo Cảm xúc">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Khi stress hoặc buồn, nhiều người ăn đồ ngọt hoặc đồ không tốt.</strong> 
              Điều này có thể làm tâm trạng tệ hơn sau đó (đường huyết giảm nhanh).
            </p>
            <p>
              <strong>Thay vào đó:</strong> Ăn thực phẩm tốt (trái cây, quả hạch, sữa chua) 
              hoặc tìm cách khác để giảm stress (tập thể dục, thiền, nói chuyện với người thân).
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
                <strong>Ăn đều đặn:</strong> Không bỏ bữa, ăn nhiều bữa nhỏ giúp đường huyết ổn định, tâm trạng ổn định.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhiều rau củ và trái cây:</strong> Cung cấp chất chống oxy hóa, vitamin, hỗ trợ sức khỏe não bộ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cá thường xuyên:</strong> Cá cung cấp omega-3 cho sức khỏe não bộ. Ăn 2-3 lần/tuần.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế đường:</strong> Đường tinh chế có thể làm tâm trạng không ổn định. 
                Chọn trái cây thay vì bánh kẹo.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Bữa ăn Việt Nam truyền thống (cơm + cá + rau) 
                tự nhiên tốt cho sức khỏe tâm thần - có carbohydrate phức tạp, protein, omega-3, và chất chống oxy hóa.
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
              <p className="text-sm font-semibold mb-1">"Dinh dưỡng có thể chữa trầm cảm"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Dinh dưỡng hỗ trợ sức khỏe tâm thần, nhưng không thể thay thế điều trị y tế 
                cho trầm cảm hoặc các rối loạn tâm thần nghiêm trọng. Nếu bạn có trầm cảm, hãy tham khảo bác sĩ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần một 'siêu thực phẩm' là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không có một thực phẩm nào có thể "chữa" tâm trạng. 
                Quan trọng là chế độ ăn cân bằng, đa dạng với nhiều thực phẩm tốt.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Đường làm tăng tâm trạng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đường có thể làm tăng tâm trạng tạm thời, nhưng sau đó làm giảm tâm trạng. 
                Carbohydrate phức tạp giúp tâm trạng ổn định hơn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong Chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Omega-3 và chất béo tốt cho sức khỏe não bộ
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate phức tạp giúp đường huyết ổn định
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-b-complex">
            <h3 className="heading-5 mb-2">Vitamin B Complex</h3>
            <p className="text-sm text-gray-600">
              Vitamin B hỗ trợ chức năng não
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/mindful-eating">
            <h3 className="heading-5 mb-2">Ăn uống Chánh niệm</h3>
            <p className="text-sm text-gray-600">
              Ăn chánh niệm có thể hỗ trợ sức khỏe tâm thần
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng hỗ trợ sức khỏe tâm thần, 
          nhưng không thể thay thế điều trị y tế cho trầm cảm, lo âu, hoặc các rối loạn tâm thần nghiêm trọng. 
          Nếu bạn có các triệu chứng trầm cảm, lo âu, hoặc các vấn đề sức khỏe tâm thần khác, 
          hãy tham khảo bác sĩ hoặc chuyên gia sức khỏe tâm thần. Dinh dưỡng là một phần của điều trị, 
          không phải toàn bộ điều trị.
        </p>
      </Callout>
    </main>
  );
}

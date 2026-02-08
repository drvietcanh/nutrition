import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Activity, Zap, Clock, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người Tập thể dục",
  description:
    "Hướng dẫn dinh dưỡng cho người tập thể dục. Pre/post workout nutrition, nhu cầu protein, carbohydrate, và hydration.",
  keywords: [
    "dinh dưỡng tập thể dục",
    "exercise nutrition",
    "workout nutrition",
    "pre-workout",
    "post-workout",
    "sports nutrition",
  ],
};

export default function ExerciseNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người Tập thể dục" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người Tập thể dục</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng đúng cách giúp bạn có đủ năng lượng để tập thể dục, phục hồi tốt sau tập, 
          và đạt được mục tiêu của mình (tăng cơ, giảm mỡ, hoặc cải thiện sức khỏe).
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Trước tập:</strong> Carbohydrate nhẹ nếu tập {'>'} 1 giờ, uống nước
          </li>
          <li>
            <strong>Sau tập:</strong> Protein + carbohydrate trong vòng 30-60 phút
          </li>
          <li>
            <strong>Hydration:</strong> Uống nước trước, trong, và sau tập
          </li>
          <li>
            <strong>Protein:</strong> 1.2-1.7g/kg nếu tập nhiều
          </li>
          <li>
            <strong>Carbohydrate:</strong> Cần nhiều hơn nếu tập nhiều
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Dinh dưỡng Trước Tập (Pre-workout)</h2>
        <Card>
          <h3 className="heading-4 mb-3">Khi nào Cần Ăn Trước Tập?</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Tập nhẹ &lt; 1 giờ:</strong> Không cần ăn trước, chỉ cần uống nước
            </p>
            <p>
              <strong>Tập vừa 1-2 giờ:</strong> Có thể ăn nhẹ 30-60 phút trước (carbohydrate nhẹ)
            </p>
            <p>
              <strong>Tập nặng &gt; 2 giờ:</strong> Nên ăn bữa nhẹ 1-2 giờ trước (carbohydrate + một ít protein)
            </p>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Trước Tập</h3>
          <NutrientTable
            rows={[
              { nutrient: "Chuối", amount: "1 quả", note: "Carbohydrate nhanh, dễ tiêu" },
              { nutrient: "Yến mạch + sữa", amount: "1 bát nhỏ", note: "Carbohydrate + protein nhẹ" },
              { nutrient: "Bánh mì + bơ đậu phộng", amount: "1 lát", note: "Carbohydrate + protein + chất béo" },
              { nutrient: "Sữa chua + trái cây", amount: "1 hộp nhỏ", note: "Carbohydrate + protein" },
            ]}
          />
          <p className="text-body-sm mt-3 text-gray-600">
            <strong>Lưu ý:</strong> Tránh thực phẩm nhiều chất béo, nhiều chất xơ trước tập 
            (khó tiêu, có thể gây khó chịu).
          </p>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Dinh dưỡng Sau Tập (Post-workout)</h2>
        <Card>
          <h3 className="heading-4 mb-3">Tại sao Quan trọng?</h3>
          <p className="text-body-sm mb-3">
            Sau tập, cơ thể cần:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Protein:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sửa chữa cơ bắp</li>
                <li>• Xây dựng cơ mới</li>
                <li>• Phục hồi</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Carbohydrate:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Bổ sung glycogen (dự trữ năng lượng)</li>
                <li>• Hỗ trợ phục hồi</li>
                <li>• Cung cấp năng lượng</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Sau Tập (Trong 30-60 phút)</h3>
          <NutrientTable
            rows={[
              { nutrient: "Sữa chua + trái cây", amount: "1 hộp + 1 quả", note: "Protein + carbohydrate" },
              { nutrient: "Trứng + bánh mì", amount: "2 quả + 1 lát", note: "Protein + carbohydrate" },
              { nutrient: "Thịt gà + khoai tây", amount: "100g + 1 củ", note: "Protein + carbohydrate" },
              { nutrient: "Sữa chocolate", amount: "250ml", note: "Protein + carbohydrate + nước" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hydration (Nước) và Tập thể dục</h2>
        <Card>
          <h3 className="heading-4 mb-3">Hướng dẫn Uống Nước</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Trước tập (2-3 giờ):</p>
                <p className="text-sm text-gray-700">500-600ml nước</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Trước tập (15 phút):</p>
                <p className="text-sm text-gray-700">200-300ml nước</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Trong tập:</p>
                <p className="text-sm text-gray-700">150-250ml mỗi 15-20 phút (nếu tập &gt; 1 giờ)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Sau tập:</p>
                <p className="text-sm text-gray-700">450-675ml cho mỗi 0.5kg mất đi (nếu đổ mồ hôi nhiều)</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Protein và Carbohydrate</h2>
        <Card>
          <h3 className="heading-4 mb-3">Nhu cầu Khi Tập thể dục</h3>
          <NutrientTable
            rows={[
              { nutrient: "Protein (tập nhẹ)", amount: "1.0-1.2", unit: "g/kg/ngày", note: "Duy trì cơ bắp" },
              { nutrient: "Protein (tập vừa)", amount: "1.2-1.5", unit: "g/kg/ngày", note: "Phục hồi và xây dựng cơ" },
              { nutrient: "Protein (tập nặng)", amount: "1.5-1.7", unit: "g/kg/ngày", note: "Xây dựng cơ nhiều" },
              { nutrient: "Carbohydrate (tập nhẹ)", amount: "3-5", unit: "g/kg/ngày", note: "Đủ năng lượng" },
              { nutrient: "Carbohydrate (tập vừa)", amount: "5-7", unit: "g/kg/ngày", note: "Bổ sung glycogen" },
              { nutrient: "Carbohydrate (tập nặng)", amount: "7-10", unit: "g/kg/ngày", note: "Nhiều năng lượng" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <ExampleBox variant="info" title="Tình huống: Tập thể dục 1 giờ, 3 lần/tuần">
          <p className="mb-2">
            <strong>Trước tập (30 phút):</strong> 1 quả chuối hoặc không ăn gì nếu tập sáng sớm
          </p>
          <p className="mb-2">
            <strong>Trong tập:</strong> Uống nước (150-250ml mỗi 15 phút)
          </p>
          <p className="mb-2">
            <strong>Sau tập (30 phút):</strong> Sữa chua + trái cây, hoặc trứng + bánh mì
          </p>
          <p>
            <strong>Nhu cầu hàng ngày:</strong> Protein 1.2g/kg, Carbohydrate 5-7g/kg, 
            đủ nước (2-3L/ngày)
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
                <strong>Lắng nghe cơ thể:</strong> Mỗi người khác nhau, thử và điều chỉnh theo cảm nhận
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không cần quá phức tạp:</strong> Thực phẩm thông thường đã đủ, không cần supplement đặc biệt
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên bữa ăn chính:</strong> Bữa ăn chính cân bằng quan trọng hơn pre/post workout
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nghỉ ngơi:</strong> Nghỉ ngơi và ngủ đủ cũng quan trọng như dinh dưỡng
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
              <p className="text-sm font-semibold mb-1">"Cần protein powder sau mỗi lần tập"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thực phẩm thông thường đã đủ protein. Protein powder chỉ cần 
                nếu không thể ăn đủ từ thực phẩm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải ăn ngay sau tập trong 30 phút"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> "Window" này không quá cứng nhắc. Quan trọng là ăn đủ trong ngày, 
                không nhất thiết phải ngay lập tức.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần supplement đặc biệt để tập tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thực phẩm thông thường, đa dạng đã đủ. Supplement chỉ cần 
                nếu có thiếu hụt cụ thể.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Hiểu về nhu cầu protein khi tập thể dục
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Nguồn năng lượng cho tập thể dục
            </p>
          </Card>
          <Card href="/knowledge/hydration">
            <h3 className="heading-5 mb-2">Hydration: Nước và Dịch</h3>
            <p className="text-sm text-gray-600">
              Tầm quan trọng của nước khi tập thể dục
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho người tập thể dục phụ thuộc 
          vào loại, cường độ, và tần suất tập. Nếu bạn tập thể dục chuyên nghiệp hoặc có mục tiêu 
          đặc biệt, hãy tham khảo chuyên gia dinh dưỡng thể thao để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

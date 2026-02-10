import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Zap, TrendingUp, Activity, Info, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiểu về Calo và năng lượng",
  description:
    "Giải thích calo, TDEE, BMR với ví dụ thực tế. Hiểu về năng lượng trong thực phẩm và nhu cầu năng lượng của cơ thể.",
  keywords: [
    "calo",
    "calories",
    "năng lượng",
    "TDEE",
    "BMR",
    "metabolism",
    "dinh dưỡng",
  ],
};

export default function CaloriesEnergyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Hiểu về Calo và năng lượng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Hiểu về Calo và năng lượng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Calo (calories) là đơn vị đo năng lượng trong thực phẩm. Hiểu về calo giúp bạn biết 
          cơ thể cần bao nhiêu năng lượng và cách quản lý cân nặng một cách lành mạnh.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Calo</strong> là đơn vị đo năng lượng trong thực phẩm
          </li>
          <li>
            <strong>BMR</strong> (Basal metabolic rate) - năng lượng cơ thể cần khi nghỉ ngơi
          </li>
          <li>
            <strong>TDEE</strong> (Total daily Energy expenditure) - tổng năng lượng cơ thể cần mỗi ngày
          </li>
          <li>
            Để giảm cân: ăn ít hơn TDEE; để tăng cân: ăn nhiều hơn TDEE
          </li>
          <li>
            Mỗi người có nhu cầu năng lượng khác nhau tùy theo tuổi, giới tính, hoạt động
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Calo là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Calo</strong> (calories) là đơn vị đo năng lượng. Khi bạn ăn thực phẩm, 
            cơ thể chuyển hóa calo thành năng lượng để thực hiện các chức năng như thở, 
            tim đập, đi lại, suy nghĩ, và nhiều hoạt động khác.
          </p>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Giống như xe cần xăng để chạy, cơ thể cần calo để hoạt động. 
              Khi bạn ăn một quả chuối (khoảng 100 calo), cơ thể sẽ sử dụng năng lượng đó 
              để thực hiện các hoạt động trong ngày.
            </p>
          </ExampleBox>

          <Card>
            <h3 className="heading-4 mb-3">Calo đến từ đâu?</h3>
            <p className="text-body-sm mb-3">
              Calo trong thực phẩm đến từ ba chất dinh dưỡng đa lượng:
            </p>
            <NutrientTable
              rows={[
                { nutrient: "Carbohydrate (Tinh bột/Đường)", amount: "4", unit: "calo/g", note: "Nguồn năng lượng chính" },
                { nutrient: "Protein (Đạm)", amount: "4", unit: "calo/g", note: "Xây dựng và sửa chữa cơ thể" },
                { nutrient: "Chất béo", amount: "9", unit: "calo/g", note: "năng lượng dự trữ" },
              ]}
            />
            <p className="text-body-sm mt-3 text-gray-600">
              <strong>Lưu ý:</strong> Chất béo có nhiều calo hơn gấp đôi carbohydrate và protein. 
              Đây là lý do tại sao thực phẩm nhiều chất béo thường có nhiều calo.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">BMR và TDEE: Nhu cầu năng lượng của cơ thể</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">BMR (Basal metabolic rate) - Tỷ lệ Trao đổi Chất cơ bản</h3>
            <p className="text-body-sm mb-3">
              <strong>BMR</strong> là lượng năng lượng cơ thể cần khi bạn hoàn toàn nghỉ ngơi 
              (không làm gì cả, chỉ để sống). Đây là năng lượng để:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-gray-700 mb-3">
              <li>Tim đập</li>
              <li>Thở</li>
              <li>Giữ nhiệt độ cơ thể</li>
              <li>Hoạt động của não và các cơ quan</li>
            </ul>
            <ExampleBox variant="tip" title="Ví dụ">
              <p>
                Một phụ nữ 30 tuổi, nặng 60kg, cao 160cm có BMR khoảng 1,300 calo/ngày. 
                Điều này có nghĩa là ngay cả khi nằm trên giường cả ngày, cơ thể vẫn cần 
                1,300 calo chỉ để duy trì các chức năng cơ bản.
              </p>
            </ExampleBox>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">TDEE (Total daily Energy expenditure) - Tổng năng lượng Tiêu thụ Hàng ngày</h3>
            <p className="text-body-sm mb-3">
              <strong>TDEE</strong> là tổng năng lượng cơ thể cần trong một ngày, bao gồm:
            </p>
            <div className="space-y-2 text-sm text-gray-700 mb-3">
              <div className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>BMR</strong> (60-70%): năng lượng cơ bản</span>
              </div>
              <div className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Hoạt động thể chất</strong> (20-30%): Đi lại, tập thể dục, làm việc</span>
              </div>
              <div className="flex items-start gap-2">
                <Activity className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span><strong>Tiêu hóa thực phẩm</strong> (10%): năng lượng để tiêu hóa và hấp thu</span>
              </div>
            </div>
            <ExampleBox variant="tip" title="Ví dụ">
              <p>
                Cùng người phụ nữ trên, nếu làm việc văn phòng và tập thể dục nhẹ 3 lần/tuần, 
                TDEE có thể là khoảng 1,800-2,000 calo/ngày. Đây là tổng năng lượng cần thiết 
                để duy trì cân nặng hiện tại.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Calo trong thực phẩm: Ví dụ thực tế</h2>
        <div className="space-y-4">
          <ComparisonCard
            title="So sánh Calo trong thực phẩm"
            items={[
              {
                label: "Bữa sáng",
                good: "Bánh mì nguyên cám (2 lát) + trứng (1 quả) + rau = ~300 calo",
                bad: "Bánh mì trắng (2 lát) + bơ + mứt = ~400 calo",
                note: "Bữa sáng lành mạnh có ít calo hơn nhưng nhiều dinh dưỡng hơn"
              },
              {
                label: "Bữa trưa",
                good: "Cơm (1 bát) + thịt nạc (100g) + rau luộc = ~450 calo",
                bad: "Cơm (1.5 bát) + thịt mỡ (150g) + đồ chiên = ~700 calo",
                note: "khẩu phần và cách chế biến ảnh hưởng lớn đến calo"
              },
              {
                label: "Đồ uống",
                good: "Nước lọc = 0 calo, Trà không đường = 0 calo",
                bad: "Nước ngọt (1 lon) = 150 calo, Cà phê sữa đá = 200 calo",
                note: "Đồ uống có thể thêm nhiều calo mà bạn không nhận ra"
              },
            ]}
          />

          <NutrientTable
            title="Calo trong Một số Thực phẩm Phổ biến"
            rows={[
              { nutrient: "Cơm trắng (1 bát)", amount: "200", unit: "calo", highlight: "moderate" },
              { nutrient: "Bánh mì (1 lát)", amount: "80", unit: "calo", highlight: "good" },
              { nutrient: "Thịt heo nạc (100g)", amount: "250", unit: "calo", highlight: "moderate" },
              { nutrient: "Thịt gà nạc (100g)", amount: "165", unit: "calo", highlight: "good" },
              { nutrient: "Cá hồi (100g)", amount: "200", unit: "calo", highlight: "good" },
              { nutrient: "Rau xanh (100g)", amount: "20-30", unit: "calo", highlight: "good" },
              { nutrient: "Trái cây (1 quả táo)", amount: "80", unit: "calo", highlight: "good" },
              { nutrient: "Khoai tây chiên (100g)", amount: "300", unit: "calo", highlight: "low" },
              { nutrient: "Bánh ngọt (1 cái)", amount: "250-400", unit: "calo", highlight: "low" },
            ]}
          />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Calo và Quản lý Cân nặng</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nguyên tắc cơ bản</h3>
            <div className="space-y-3 text-body-sm">
              <p>
                <strong>Để duy trì cân nặng:</strong> Ăn số calo bằng TDEE của bạn
              </p>
              <p>
                <strong>Để giảm cân:</strong> Ăn ít hơn TDEE (tạo calorie deficit 500-750 calo/ngày)
              </p>
              <p>
                <strong>Để tăng cân:</strong> Ăn nhiều hơn TDEE (tạo calorie surplus)
              </p>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ thực tế">
            <p className="mb-2">
              <strong>Tình huống:</strong> Bạn muốn giảm cân. TDEE của bạn là 2,000 calo/ngày.
            </p>
            <p className="mb-2">
              <strong>Cách 1:</strong> Ăn 1,500 calo/ngày (giảm 500 calo) → Giảm ~0.5kg/tuần
            </p>
            <p className="mb-2">
              <strong>Cách 2:</strong> Ăn 2,000 calo nhưng tập thể dục đốt 500 calo → Cũng giảm ~0.5kg/tuần
            </p>
            <p>
              <strong>Lưu ý:</strong> Không nên giảm quá nhiều calo (dưới 1,200 calo/ngày cho phụ nữ, 
              1,500 calo/ngày cho nam) vì có thể gây thiếu dinh dưỡng và chậm trao đổi chất.
            </p>
          </ExampleBox>

          <Callout variant="warning" title="Lưu ý quan trọng">
            <p className="text-body-sm">
              <strong>Calo không phải là tất cả.</strong> Chất lượng thực phẩm cũng rất quan trọng. 
              200 calo từ rau củ tốt hơn nhiều so với 200 calo từ kẹo vì:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Rau củ cung cấp vitamin, khoáng chất, chất xơ</li>
              <li>Kẹo chỉ cung cấp đường, không có dinh dưỡng</li>
              <li>Rau củ giúp bạn no lâu hơn</li>
            </ul>
          </Callout>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Yếu tố Ảnh hưởng đến Nhu cầu năng lượng</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Yếu tố Cố định:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Tuổi:</strong> Người trẻ cần nhiều calo hơn</li>
                <li>• <strong>Giới tính:</strong> Nam thường cần nhiều hơn nữ</li>
                <li>• <strong>Chiều cao:</strong> Người cao cần nhiều hơn</li>
                <li>• <strong>Cân nặng:</strong> Người nặng cần nhiều hơn</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Yếu tố Thay đổi:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• <strong>Hoạt động thể chất:</strong> Tập thể dục tăng nhu cầu</li>
                <li>• <strong>Công việc:</strong> Lao động chân tay cần nhiều hơn</li>
                <li>• <strong>Tình trạng sức khỏe:</strong> Bệnh, sốt tăng nhu cầu</li>
                <li>• <strong>Mang thai/Cho con bú:</strong> Tăng nhu cầu</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đếm calo không phải là tất cả:</strong> Tập trung vào chất lượng thực phẩm 
                và lắng nghe cơ thể. Ăn khi đói, dừng khi no.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ưu tiên thực phẩm giàu dinh dưỡng:</strong> Rau củ, trái cây, ngũ cốc nguyên cám, 
                protein nạc cung cấp nhiều dinh dưỡng với ít calo.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý đồ uống:</strong> Nước ngọt, cà phê có đường, nước trái cây có thể 
                thêm nhiều calo mà bạn không nhận ra.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <TrendingUp className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thay đổi từ từ:</strong> Không cần giảm calo đột ngột. Giảm 100-200 calo/ngày 
                là một khởi đầu tốt.
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
              <p className="text-sm font-semibold mb-1">"Calo từ tất cả thực phẩm đều giống nhau"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> 200 calo từ rau củ tốt hơn nhiều so với 200 calo từ kẹo. 
                Chất lượng dinh dưỡng quan trọng không kém số lượng calo.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần đếm calo chính xác mỗi ngày"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đếm calo có thể hữu ích để học, nhưng không cần chính xác 100%. 
                Ước lượng và lắng nghe cơ thể cũng hiệu quả.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Ăn ít calo hơn luôn tốt hơn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ăn quá ít calo có thể làm chậm trao đổi chất, mất cơ, 
                và thiếu dinh dưỡng. Cần đủ calo để cơ thể hoạt động tốt.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan về các chất dinh dưỡng đa lượng</h3>
            <p className="text-sm text-gray-600">
              Hiểu về carbohydrate, protein, và chất béo - nguồn calo
            </p>
          </Card>
          <Card href="/knowledge/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn cách quản lý cân nặng với calo
            </p>
          </Card>
          <Card href="/knowledge/meal-planning">
            <h3 className="heading-5 mb-2">Lập kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn với đủ calo và dinh dưỡng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu calo của mỗi người khác nhau 
          tùy theo nhiều yếu tố. Nếu bạn có bệnh lý đặc biệt, đang mang thai, hoặc cần quản lý 
          cân nặng, hãy tham khảo chuyên gia dinh dưỡng để được tư vấn phù hợp với tình trạng 
          của bạn.
        </p>
      </Callout>
    </main>
  );
}

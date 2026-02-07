import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ComparisonCard } from "../../components/ComparisonCard";
import { ExampleBox } from "../../components/ExampleBox";
import { PortionSizeGuide } from "../../components/PortionSizeGuide";
import { NutrientTable } from "../../components/NutrientTable";
import { Wheat, TrendingUp, Lightbulb, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Carbohydrate (Tinh bột và Đường) trong Dinh dưỡng Lâm sàng",
  description:
    "Hiểu về carbohydrate - nguồn năng lượng chính của cơ thể, các loại carbohydrate, vai trò, và cách chọn lựa đúng cho sức khỏe.",
  keywords: [
    "carbohydrate",
    "tinh bột",
    "đường",
    "glucose",
    "đái tháo đường",
    "năng lượng",
    "glycemic index",
  ],
};

export default function CarbohydratesPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Carbohydrate (Tinh bột và Đường)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Wheat className="w-8 h-8 text-amber-600" aria-hidden="true" />
          <h1 className="heading-1">
            Carbohydrate (Tinh bột và Đường) trong Dinh dưỡng Lâm sàng
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Carbohydrate (hay còn gọi là tinh bột và đường) là nguồn năng lượng chính của cơ thể. 
          Hiểu về các loại carbohydrate khác nhau giúp bạn đưa ra lựa chọn tốt cho sức khỏe, 
          đặc biệt nếu bạn có đái tháo đường hoặc cần quản lý cân nặng.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Carbohydrate</strong> là nguồn năng lượng chính của cơ thể
          </li>
          <li>
            <strong>Carbohydrate đơn giản</strong> (đường) - hấp thu nhanh, nên hạn chế
          </li>
          <li>
            <strong>Carbohydrate phức tạp</strong> (tinh bột) - hấp thu chậm, tốt hơn
          </li>
          <li>Nên chọn carbohydrate nguyên cám, giàu chất xơ</li>
          <li>Carbohydrate chiếm 45-65% tổng năng lượng hàng ngày</li>
        </ul>
      </Callout>

      {/* What are Carbs */}
      <section className="space-y-4">
        <h2 className="heading-2">Carbohydrate là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Carbohydrate</strong> (hay còn gọi là tinh bột và đường) là một trong ba 
            chất dinh dưỡng đa lượng chính (cùng với protein và chất béo). Khi bạn ăn carbohydrate, 
            cơ thể chuyển hóa chúng thành glucose (đường) để sử dụng làm năng lượng.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Carbohydrate giống như nhiên liệu cho xe. 
              Khi bạn ăn cơm, bánh mì, hoặc trái cây, cơ thể chuyển chúng thành glucose 
              (giống như xăng) để các tế bào sử dụng làm năng lượng.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Carbohydrate</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Cung cấp năng lượng cho cơ thể</li>
                  <li>• Hỗ trợ chức năng não bộ</li>
                  <li>• Dự trữ năng lượng (glycogen)</li>
                  <li>• Tiết kiệm protein (không dùng protein làm năng lượng)</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Nguồn thực phẩm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Ngũ cốc (gạo, lúa mì, yến mạch)</li>
                  <li>• Trái cây</li>
                  <li>• Rau củ (khoai tây, khoai lang)</li>
                  <li>• Đậu, đậu lăng</li>
                  <li>• Đường, mật ong</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Types of Carbs */}
      <section className="space-y-6">
        <h2 className="heading-2">Hai Loại Carbohydrate Chính</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simple Carbs */}
          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-3 text-yellow-900 mb-3">Carbohydrate Đơn giản (Đường)</h3>
            <p className="text-body text-yellow-900 mb-4">
              Cấu trúc đơn giản, hấp thu nhanh vào máu. Làm đường huyết tăng nhanh.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Đặc điểm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hấp thu nhanh, đường huyết tăng nhanh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ít chất xơ, ít giá trị dinh dưỡng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nên hạn chế, đặc biệt người đái tháo đường</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-yellow-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn:</p>
                <p className="text-xs text-gray-700">
                  Đường trắng, đường nâu, mật ong, nước ngọt, bánh kẹo, 
                  trái cây (tự nhiên nhưng vẫn là đường đơn giản)
                </p>
              </div>
            </div>
          </Card>

          {/* Complex Carbs */}
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-3 text-green-900 mb-3">Carbohydrate Phức tạp (Tinh bột)</h3>
            <p className="text-body text-green-900 mb-4">
              Cấu trúc phức tạp hơn, hấp thu chậm. Làm đường huyết tăng chậm và ổn định hơn.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Đặc điểm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hấp thu chậm, đường huyết tăng ổn định</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thường có nhiều chất xơ và dinh dưỡng</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tốt cho sức khỏe, nên chọn loại này</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn:</p>
                <p className="text-xs text-gray-700">
                  Gạo lứt, bánh mì nguyên cám, yến mạch, khoai lang, đậu, 
                  rau củ, ngũ cốc nguyên cám
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            <strong>Lưu ý:</strong> Trái cây chứa đường đơn giản (fructose), nhưng cũng có chất xơ 
            và nhiều vitamin, nên vẫn tốt cho sức khỏe. Nước ép trái cây thì ít chất xơ hơn, 
            nên hạn chế hơn trái cây nguyên quả.
          </p>
        </div>
      </section>

      {/* How Much Carbs */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên Ăn Bao nhiêu Carbohydrate?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Carbohydrate nên chiếm <strong>45-65%</strong> tổng năng lượng hàng ngày:
            </p>
            <NutrientTable
              title="Ví dụ Nhu cầu Carbohydrate"
              rows={[
                { nutrient: "Người khỏe mạnh (2000 calo/ngày)", amount: "225-325", unit: "g/ngày", highlight: "good", note: "45-65% tổng calo" },
                { nutrient: "Người đái tháo đường", amount: "Điều chỉnh", note: "Phân bổ đều, chọn loại phức tạp" },
                { nutrient: "Người tập thể dục nhiều", amount: "Có thể cao hơn", note: "Cần nhiều năng lượng" },
              ]}
            />
            <ExampleBox variant="tip" title="Ví dụ Thực tế">
              <p className="mb-2">
                <strong>2000 calo/ngày = 225-325g carbohydrate:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Bữa sáng: Yến mạch (50g) + trái cây (20g) = 70g</li>
                <li>Bữa trưa: <strong>Cơm (80g) + rau củ (10g) = 90g</strong> - Bữa ăn Việt Nam</li>
                <li>Bữa tối: <strong>Bún bò (60g) + rau sống (10g) = 70g</strong> - Món ăn Việt Nam</li>
                <li>Snack: Trái cây (20g) = 20g</li>
                <li><strong>Tổng: ~250g carbohydrate</strong></li>
              </ul>
              <p className="text-xs text-gray-600 mt-2">
                <strong>Lưu ý:</strong> Cơm, bún, phở là nguồn carbohydrate phổ biến trong bữa ăn Việt Nam. 
                Có thể kết hợp với gạo lứt, khoai lang để có nhiều chất xơ hơn.
              </p>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Portion Examples */}
      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Khẩu phần Carbohydrate</h2>
            <PortionSizeGuide
              title="Khẩu phần Carbohydrate Phổ biến"
              items={[
                { food: "Cơm trắng (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "~200 calo, 45g carb" },
                { food: "Gạo lứt (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "~200 calo, 45g carb" },
                { food: "Bún (Việt Nam)", portion: "1 tô", visual: "Bằng nắm tay", calories: "~110 calo, 25g carb" },
                { food: "Phở (bánh phở)", portion: "1 tô", visual: "Bằng nắm tay", calories: "~100 calo, 22g carb" },
                { food: "Bánh cuốn (Việt Nam)", portion: "1 đĩa", visual: "Bằng nắm tay", calories: "~120 calo, 25g carb" },
                { food: "Bánh mì nguyên cám", portion: "1 lát", visual: "Bằng lòng bàn tay", calories: "~80 calo, 15g carb" },
                { food: "Yến mạch (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "~150 calo, 27g carb" },
                { food: "Khoai tây (nướng)", portion: "1 củ vừa", visual: "Bằng nắm tay", calories: "~150 calo, 35g carb" },
                { food: "Khoai lang (Việt Nam)", portion: "1 củ vừa", visual: "Bằng nắm tay", calories: "~86 calo, 20g carb" },
                { food: "Chuối", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "~100 calo, 27g carb" },
                { food: "Táo", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "~80 calo, 21g carb" },
              ]}
            />
      </section>

      {/* Choosing Good Carbs */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách Chọn Carbohydrate Tốt
        </h2>
        <div className="space-y-4">
          <ComparisonCard
            title="So sánh: Carbohydrate Tốt vs Nên Hạn chế"
            items={[
              {
                label: "Ngũ cốc",
                good: "Gạo lứt, yến mạch, bánh mì nguyên cám - nhiều chất xơ, vitamin",
                bad: "Gạo trắng, bánh mì trắng - ít chất xơ, ít dinh dưỡng",
                note: "Ngũ cốc nguyên cám tốt hơn nhiều so với ngũ cốc tinh chế"
              },
              {
                label: "Rau củ",
                good: "Khoai lang, khoai tây luộc/nướng - carbohydrate + chất xơ + vitamin",
                bad: "Khoai tây chiên, snack - nhiều chất béo, calo cao",
                note: "Cách chế biến quan trọng không kém loại thực phẩm"
              },
              {
                label: "Trái cây",
                good: "Trái cây nguyên quả - đường tự nhiên + chất xơ + vitamin",
                bad: "Nước ép đóng hộp, nước ngọt - nhiều đường, ít chất xơ",
                note: "Trái cây nguyên quả tốt hơn nước ép vì có chất xơ"
              },
            ]}
          />

          <Card>
            <h3 className="heading-4 mb-3">Tại sao chọn Carbohydrate nguyên cám?</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Ngũ cốc nguyên cám</strong> (gạo lứt, bánh mì nguyên cám) giữ lại 
                phần cám và mầm, chứa nhiều chất xơ, vitamin, và khoáng chất hơn so với 
                ngũ cốc tinh chế (gạo trắng, bánh mì trắng).
              </p>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
                <p className="text-sm text-green-900">
                  <strong>Lợi ích:</strong> Chất xơ giúp làm chậm hấp thu đường, giữ đường huyết ổn định, 
                  và giúp bạn cảm thấy no lâu hơn.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Clinical Application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Ứng dụng trong Dinh dưỡng Lâm sàng
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Đái tháo đường</h3>
            <p className="text-body mb-3">
              Người đái tháo đường cần chú ý đặc biệt đến carbohydrate:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Chọn carbohydrate phức tạp:</strong> Gạo lứt, yến mạch, đậu thay vì 
                  gạo trắng, bánh mì trắng
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Phân bổ đều trong ngày:</strong> Ăn nhiều bữa nhỏ thay vì ít bữa lớn
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Kết hợp với protein và chất béo:</strong> Giúp làm chậm hấp thu đường
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Hạn chế đường đơn giản:</strong> Tránh nước ngọt, bánh kẹo, đường
                </span>
              </li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              Xem thêm bài viết về{" "}
              <Link href="/knowledge/glycemic-index-load" className="text-blue-600 hover:underline">
                Chỉ số Đường huyết (GI) và GL
              </Link>
              {" "}để hiểu rõ hơn.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quản lý Cân nặng</h3>
            <p className="text-body">
              Carbohydrate phức tạp, giàu chất xơ giúp bạn cảm thấy no lâu hơn, 
              hỗ trợ quản lý cân nặng. Tránh carbohydrate tinh chế và đường đơn giản 
              có thể giúp giảm lượng calo không cần thiết.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Hoạt động Thể chất</h3>
            <p className="text-body">
              Carbohydrate là nguồn năng lượng chính cho hoạt động thể chất. 
              Người vận động nhiều có thể cần nhiều carbohydrate hơn, nhưng vẫn nên 
              chọn loại phức tạp, nguyên cám.
            </p>
          </Card>
        </div>
      </section>

      {/* Common Misconceptions */}
      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến về Carbohydrate</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">"Carbohydrate làm tăng cân"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Carbohydrate không tự động làm tăng cân. 
              Vấn đề là loại và lượng carbohydrate bạn ăn. Carbohydrate phức tạp, 
              nguyên cám thực sự có thể hỗ trợ quản lý cân nặng.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">"Người đái tháo đường không được ăn carbohydrate"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Người đái tháo đường vẫn cần carbohydrate, 
              nhưng cần chọn loại đúng và phân bổ đều. Carbohydrate phức tạp, giàu chất xơ 
              là lựa chọn tốt.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">"Tất cả carbohydrate đều giống nhau"</h3>
            <p className="text-body-sm">
              <strong>Sự thật:</strong> Không phải! Carbohydrate phức tạp (gạo lứt, yến mạch) 
              khác rất nhiều so với carbohydrate đơn giản (đường, bánh kẹo) về cách chúng 
              ảnh hưởng đến sức khỏe.
            </p>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan về các Chất Dinh dưỡng Đa lượng</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate trong tổng thể dinh dưỡng
            </p>
          </Card>
          <Card href="/knowledge/glycemic-index-load">
            <h3 className="heading-5 mb-2">Chỉ số Đường huyết (GI) và GL</h3>
            <p className="text-sm text-gray-600">
              Hiểu cách carbohydrate ảnh hưởng đến đường huyết
            </p>
          </Card>
          <Card href="/knowledge/diabetes-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Đái tháo đường</h3>
            <p className="text-sm text-gray-600">
              Quản lý carbohydrate trong đái tháo đường
            </p>
          </Card>
          <Card href="/knowledge/dietary-fiber">
            <h3 className="heading-5 mb-2">Chất xơ trong Dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate nguyên cám thường giàu chất xơ
            </p>
          </Card>
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và Năng lượng</h3>
            <p className="text-sm text-gray-600">
              Carbohydrate cung cấp năng lượng
            </p>
          </Card>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có đái tháo đường, 
          cần quản lý cân nặng, hoặc các vấn đề sức khỏe khác, hãy tham khảo ý kiến 
          của chuyên gia dinh dưỡng để có kế hoạch ăn uống phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

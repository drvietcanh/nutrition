import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { Baby, Milk, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Trẻ sơ sinh (0-12 tháng)",
  description:
    "Hướng dẫn dinh dưỡng cho trẻ sơ sinh từ 0-12 tháng. Sữa mẹ, sữa công thức, và bắt đầu ăn dặm với milestones.",
  keywords: [
    "dinh dưỡng trẻ sơ sinh",
    "infant nutrition",
    "sữa mẹ",
    "ăn dặm",
    "baby nutrition",
  ],
};

export default function InfantNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Theo Độ tuổi", href: "/knowledge/life-stages" },
          { label: "Dinh dưỡng cho Trẻ sơ sinh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Baby className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Trẻ sơ sinh (0-12 tháng)</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng trong năm đầu đời rất quan trọng cho sự phát triển và tăng trưởng của trẻ. 
          Từ sữa mẹ/sữa công thức đến bắt đầu ăn dặm, mỗi giai đoạn có nhu cầu dinh dưỡng đặc biệt.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>0-6 tháng:</strong> Chỉ sữa mẹ hoặc sữa công thức
          </li>
          <li>
            <strong>6 tháng:</strong> Bắt đầu ăn dặm, vẫn tiếp tục sữa mẹ/sữa công thức
          </li>
          <li>
            <strong>6-12 tháng:</strong> Tăng dần thức ăn đặc, giảm dần sữa
          </li>
          <li>
            <strong>Milestones:</strong> Quan trọng là theo dõi sự phát triển và sẵn sàng của trẻ
          </li>
          <li>
            <strong>An toàn:</strong> Tránh mật ong, muối, đường, và thực phẩm dễ nghẹn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Giai đoạn 0-6 tháng: Chỉ Sữa</h2>
        <Card>
          <h3 className="heading-4 mb-3">Sữa mẹ hoặc Sữa công thức</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Sữa mẹ:</strong> Là nguồn dinh dưỡng tốt nhất cho trẻ sơ sinh. 
              Chứa đủ tất cả chất dinh dưỡng cần thiết và kháng thể.
            </p>
            <p>
              <strong>Sữa công thức:</strong> Nếu không thể cho con bú, sữa công thức 
              cung cấp đủ dinh dưỡng cho trẻ phát triển.
            </p>
            <p>
              <strong>Tần suất:</strong> Trẻ sơ sinh thường bú 8-12 lần/ngày, 
              hoặc theo nhu cầu của trẻ.
            </p>
          </div>
        </Card>

        <Callout variant="warning" title="Lưu ý quan trọng">
          <p className="text-body-sm">
            <strong>KHÔNG cho trẻ dưới 6 tháng:</strong> Nước, nước trái cây, thức ăn đặc, 
            hoặc bất kỳ thực phẩm nào khác ngoài sữa mẹ/sữa công thức. Dạ dày trẻ chưa sẵn sàng.
          </p>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Giai đoạn 6-12 tháng: Bắt đầu Ăn dặm</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Dấu hiệu Trẻ Sẵn sàng Ăn dặm</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>Trẻ có thể bắt đầu ăn dặm khi:</p>
              <ul className="list-disc space-y-1 pl-6">
                <li>Có thể ngồi với hỗ trợ</li>
                <li>Kiểm soát đầu và cổ tốt</li>
                <li>Mở miệng khi thấy thức ăn</li>
                <li>Đưa tay lên miệng</li>
                <li>Quan tâm đến thức ăn</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Thực phẩm Đầu tiên</h3>
            <NutrientTable
              title="Thực phẩm Phù hợp cho Trẻ 6-12 tháng"
              rows={[
                { nutrient: "Rau củ nghiền", amount: "Bắt đầu", note: "Khoai lang, cà rốt, bí đỏ (nấu chín, nghiền nhuyễn)" },
                { nutrient: "Trái cây nghiền", amount: "Bắt đầu", note: "Chuối, bơ, táo (nấu chín, nghiền nhuyễn)" },
                { nutrient: "Ngũ cốc", amount: "6-7 tháng", note: "Yến mạch, gạo (nấu chín, nghiền nhuyễn)" },
                { nutrient: "Protein", amount: "7-8 tháng", note: "Thịt gà, cá, đậu (nấu chín, nghiền nhuyễn)" },
                { nutrient: "Sữa chua", amount: "8-9 tháng", note: "Sữa chua không đường, phô mai mềm" },
                { nutrient: "Thức ăn mềm", amount: "9-12 tháng", note: "Thức ăn cắt nhỏ, mềm (không cần nghiền)" },
              ]}
            />
          </Card>

          <Callout variant="error" title="Thực phẩm CẤM cho Trẻ dưới 12 tháng">
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li><strong>Mật ong:</strong> Có thể gây ngộ độc botulism</li>
              <li><strong>Muối:</strong> Thận trẻ chưa sẵn sàng</li>
              <li><strong>Đường:</strong> Không cần thiết, có thể gây sâu răng</li>
              <li><strong>Thực phẩm dễ nghẹn:</strong> Nho nguyên quả, quả hạch, kẹo cứng</li>
              <li><strong>Sữa bò:</strong> Chỉ sau 12 tháng (như đồ uống chính)</li>
            </ul>
          </Callout>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Milestones Dinh dưỡng</h2>
        <Card>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
              <thead className="bg-neutral-50">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Tuổi</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Dinh dưỡng</th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-neutral-200">
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">0-6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Chỉ sữa mẹ/sữa công thức</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">8-12 lần/ngày</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">6 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Bắt đầu ăn dặm + sữa</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">1-2 bữa/ngày, thức ăn nghiền</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">7-9 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Tăng thức ăn đặc</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">2-3 bữa/ngày, thêm protein</td>
                </tr>
                <tr className="bg-neutral-50">
                  <td className="px-4 py-3 text-sm font-medium text-neutral-900">9-12 tháng</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">Thức ăn mềm, cắt nhỏ</td>
                  <td className="px-4 py-3 text-sm text-neutral-700">3 bữa/ngày + snack, tự ăn</td>
                </tr>
              </tbody>
            </table>
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
                <strong>Bắt đầu từ từ:</strong> Một loại thực phẩm mới mỗi 3-5 ngày để theo dõi dị ứng
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Để trẻ quyết định:</strong> Trẻ biết khi nào no, không ép ăn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Làm mẫu:</strong> Trẻ học bằng cách quan sát, ăn cùng trẻ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiên nhẫn:</strong> Trẻ có thể từ chối thức ăn mới nhiều lần trước khi chấp nhận
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/life-stages/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng trước khi sinh
            </p>
          </Card>
          <Card href="/knowledge/life-stages/children-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Trẻ em</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng sau 12 tháng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho trẻ sơ sinh cần được 
          tư vấn bởi bác sĩ nhi khoa hoặc chuyên gia dinh dưỡng nhi. Mỗi trẻ phát triển khác nhau, 
          và cần được đánh giá cá nhân. Nếu bạn có thắc mắc về dinh dưỡng của trẻ, hãy tham khảo 
          bác sĩ nhi khoa.
        </p>
      </Callout>
    </main>
  );
}

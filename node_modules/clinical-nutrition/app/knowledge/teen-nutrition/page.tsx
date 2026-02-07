import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { TipCard } from "../../components/TipCard";
import { Users, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Thanh thiếu niên",
  description:
    "Hướng dẫn dinh dưỡng cho thanh thiếu niên (13-18 tuổi). Nhu cầu tăng trưởng, năng lượng, protein, và các thách thức dinh dưỡng.",
  keywords: [
    "dinh dưỡng thanh thiếu niên",
    "teen nutrition",
    "adolescent nutrition",
    "growth",
    "puberty",
  ],
};

export default function TeenNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Theo Độ tuổi", href: "/knowledge/life-stages" },
          { label: "Dinh dưỡng cho Thanh thiếu niên" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Thanh thiếu niên</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Thanh thiếu niên (13-18 tuổi) đang trong giai đoạn tăng trưởng nhanh và phát triển. 
          Dinh dưỡng đúng cách rất quan trọng để hỗ trợ tăng trưởng, phát triển, và sức khỏe tổng thể.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Thanh thiếu niên</strong> cần nhiều năng lượng và dinh dưỡng hơn do tăng trưởng nhanh
          </li>
          <li>
            <strong>Nhu cầu khác nhau:</strong> Nam và nữ có nhu cầu khác nhau, đặc biệt trong giai đoạn dậy thì
          </li>
          <li>
            <strong>Thách thức:</strong> Dễ bỏ bữa, ăn đồ không tốt, lo lắng về hình ảnh cơ thể
          </li>
          <li>
            <strong>Quan trọng:</strong> Đủ calo, protein, canxi, sắt, vitamin D
          </li>
          <li>
            <strong>Bữa sáng:</strong> Đặc biệt quan trọng cho thanh thiếu niên
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Dinh dưỡng Tăng lên</h2>
        <Card>
          <h3 className="heading-4 mb-3">Nhu cầu Năng lượng và Protein</h3>
          <NutrientTable
            rows={[
              { nutrient: "Năng lượng (Nữ 13-18)", amount: "1,800-2,400", unit: "calo/ngày", note: "Tùy hoạt động" },
              { nutrient: "Năng lượng (Nam 13-18)", amount: "2,200-3,200", unit: "calo/ngày", note: "Tùy hoạt động" },
              { nutrient: "Protein (Nữ 13-18)", amount: "46", unit: "g/ngày" },
              { nutrient: "Protein (Nam 13-18)", amount: "52", unit: "g/ngày" },
              { nutrient: "Canxi", amount: "1,300", unit: "mg/ngày", note: "Tăng từ 1,000mg (trẻ em)" },
              { nutrient: "Sắt (Nữ)", amount: "15", unit: "mg/ngày", note: "Tăng do kinh nguyệt" },
              { nutrient: "Sắt (Nam)", amount: "11", unit: "mg/ngày" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thách thức Dinh dưỡng ở Thanh thiếu niên</h2>
        <Card>
          <h3 className="heading-4 mb-3">Các Vấn đề Phổ biến</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Bỏ bữa, đặc biệt bữa sáng</p>
              <p className="text-sm text-gray-700">
                Thanh thiếu niên thường bỏ bữa sáng do vội vàng hoặc muốn ngủ thêm. 
                Điều này có thể ảnh hưởng đến học tập và năng lượng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Ăn đồ không tốt</p>
              <p className="text-sm text-gray-700">
                Dễ chọn đồ ăn nhanh, nước ngọt, snack không tốt khi ở trường hoặc với bạn bè.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Lo lắng về hình ảnh cơ thể</p>
              <p className="text-sm text-gray-700">
                Có thể dẫn đến ăn quá ít hoặc ăn không lành mạnh để "giảm cân".
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-1">Thiếu canxi và sắt</p>
              <p className="text-sm text-gray-700">
                Đặc biệt phụ nữ có thể thiếu sắt do kinh nguyệt. Thiếu canxi ảnh hưởng đến xương.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Không bỏ bữa sáng: Bữa sáng quan trọng cho năng lượng và học tập. Chuẩn bị sẵn hoặc ăn nhanh' },
            { type: 'tip', text: 'Mang snack lành mạnh: Trái cây, quả hạch, sữa chua để tránh chọn đồ không tốt' },
            { type: 'tip', text: 'Ăn đủ canxi: Sữa, sữa chua, phô mai, rau xanh đậm cho xương chắc khỏe' },
            { type: 'tip', text: 'Chú ý sắt: Phụ nữ cần nhiều sắt hơn. Ăn thịt nạc, đậu, rau xanh đậm' },
            { type: 'check', text: 'Uống nước: Thay vì nước ngọt, uống nước lọc' },
            { type: 'check', text: 'Ăn đa dạng: Đảm bảo đủ các nhóm thực phẩm' },
            { type: 'warning', text: 'Tránh ăn quá ít: Tăng trưởng cần năng lượng, không nên ăn quá ít để "giảm cân"' },
            { type: 'info', text: 'Tập thể dục: Kết hợp với dinh dưỡng tốt để có sức khỏe tốt' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa Sáng Nhanh và Lành mạnh</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>• Yến mạch + sữa + trái cây + quả hạch</p>
            <p>• Trứng + bánh mì nguyên cám + trái cây</p>
            <p>• Sữa chua + granola + trái cây</p>
            <p>• Smoothie (sữa + trái cây + yến mạch)</p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/life-stages/children-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Trẻ em</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng cho trẻ nhỏ hơn
            </p>
          </Card>
          <Card href="/knowledge/exercise-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người Tập thể dục</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng khi tập thể dục
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho thanh thiếu niên cần được 
          tư vấn bởi bác sĩ nhi khoa hoặc chuyên gia dinh dưỡng nhi. Nếu bạn lo lắng về dinh dưỡng 
          của thanh thiếu niên, đặc biệt nếu có vấn đề về ăn uống hoặc hình ảnh cơ thể, hãy tham khảo 
          chuyên gia.
        </p>
      </Callout>
    </main>
  );
}

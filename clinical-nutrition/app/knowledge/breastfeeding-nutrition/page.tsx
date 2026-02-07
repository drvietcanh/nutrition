import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { TipCard } from "../../components/TipCard";
import { Baby, Milk, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Phụ nữ Cho con bú",
  description:
    "Hướng dẫn dinh dưỡng cho phụ nữ cho con bú. Nhu cầu dinh dưỡng tăng, thực phẩm quan trọng, và practical tips.",
  keywords: [
    "dinh dưỡng cho con bú",
    "breastfeeding nutrition",
    "sữa mẹ",
    "phụ nữ cho con bú",
  ],
};

export default function BreastfeedingNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Theo Độ tuổi", href: "/knowledge/life-stages" },
          { label: "Dinh dưỡng cho Phụ nữ Cho con bú" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Milk className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Phụ nữ Cho con bú</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Cho con bú đòi hỏi năng lượng và dinh dưỡng bổ sung. Mẹ cần ăn đủ và đa dạng để 
          đảm bảo có đủ sữa chất lượng cho con và duy trì sức khỏe của chính mình.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Năng lượng:</strong> Cần thêm 500 calo/ngày so với trước khi mang thai
          </li>
          <li>
            <strong>Protein:</strong> Cần thêm 25g protein/ngày
          </li>
          <li>
            <strong>Chất lỏng:</strong> Uống nhiều nước - khoảng 3L/ngày
          </li>
          <li>
            <strong>Vi chất:</strong> Tiếp tục bổ sung sắt, canxi, vitamin D
          </li>
          <li>
            <strong>Đa dạng:</strong> Ăn đa dạng thực phẩm để sữa có đủ dinh dưỡng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Dinh dưỡng Khi Cho con bú</h2>
        <Card>
          <h3 className="heading-4 mb-3">Nhu cầu Tăng lên</h3>
          <NutrientTable
            rows={[
              { nutrient: "Năng lượng", amount: "+500", unit: "calo/ngày", note: "So với trước khi mang thai" },
              { nutrient: "Protein", amount: "+25", unit: "g/ngày", note: "Tổng cộng ~71g/ngày" },
              { nutrient: "Chất lỏng", amount: "~3", unit: "L/ngày", note: "Nước, sữa, soup" },
              { nutrient: "Canxi", amount: "1,000", unit: "mg/ngày", note: "Giống như khi mang thai" },
              { nutrient: "Sắt", amount: "9", unit: "mg/ngày", note: "Thấp hơn khi mang thai" },
              { nutrient: "Vitamin D", amount: "600", unit: "IU/ngày", note: "Quan trọng cho mẹ và con" },
            ]}
          />
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Quan trọng</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Nên Ăn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Protein:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Thịt nạc, cá, trứng</li>
                <li>• Đậu, đậu lăng</li>
                <li>• Sữa, sữa chua</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Canxi:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sữa, sữa chua</li>
                <li>• Cá mòi, cá hồi (có xương)</li>
                <li>• Rau xanh đậm</li>
                <li>• Đậu phụ</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Sắt:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Thịt đỏ nạc</li>
                <li>• Đậu, đậu lăng</li>
                <li>• Rau xanh đậm</li>
                <li>• Kết hợp với vitamin C để hấp thu tốt</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Chất lỏng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nước lọc (chính)</li>
                <li>• Sữa</li>
                <li>• Soup, canh</li>
                <li>• Tránh quá nhiều cà phê, rượu</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Uống nước khi cho con bú: Để sẵn nước bên cạnh khi cho con bú' },
            { type: 'tip', text: 'Snack lành mạnh: Mang theo snack (trái cây, quả hạch) vì dễ đói khi cho con bú' },
            { type: 'tip', text: 'Ăn đa dạng: Đa dạng thực phẩm giúp sữa có đủ dinh dưỡng và trẻ làm quen với nhiều vị' },
            { type: 'check', text: 'Tiếp tục bổ sung: Tiếp tục bổ sung vitamin D, có thể cần bổ sung sắt nếu thiếu' },
            { type: 'check', text: 'Tránh giảm cân quá nhanh: Giảm cân từ từ, không nên giảm quá 0.5kg/tuần' },
            { type: 'warning', text: 'Chú ý thực phẩm ảnh hưởng sữa: Một số thực phẩm có thể làm trẻ khó chịu (theo dõi phản ứng)' },
            { type: 'info', text: 'Lắng nghe cơ thể: Ăn khi đói, uống khi khát - cơ thể biết cần gì' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Cần Tránh hoặc Hạn chế</h2>
        <Callout variant="warning" title="Lưu ý">
          <div className="space-y-2 text-body-sm">
            <p>
              <strong>Cà phê:</strong> Có thể vào sữa, làm trẻ khó ngủ. Hạn chế 1-2 cốc/ngày.
            </p>
            <p>
              <strong>Rượu:</strong> Vào sữa, có thể ảnh hưởng trẻ. Tránh hoặc hạn chế tối đa.
            </p>
            <p>
              <strong>Cá có nhiều thủy ngân:</strong> Hạn chế cá mập, cá kiếm. Ăn cá ít thủy ngân (cá hồi, cá ngừ đóng hộp).
            </p>
            <p>
              <strong>Thực phẩm gây dị ứng:</strong> Nếu gia đình có tiền sử dị ứng, tham khảo bác sĩ.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/life-stages/pregnancy-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Phụ nữ Mang thai</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng trước khi sinh
            </p>
          </Card>
          <Card href="/knowledge/infant-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Trẻ sơ sinh</h3>
            <p className="text-sm text-gray-600">
              Dinh dưỡng cho trẻ đang bú mẹ
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng khi cho con bú cần được 
          tư vấn bởi bác sĩ hoặc chuyên gia dinh dưỡng. Mỗi phụ nữ có nhu cầu khác nhau. 
          Nếu bạn có thắc mắc về dinh dưỡng khi cho con bú, hãy tham khảo bác sĩ hoặc 
          chuyên gia tư vấn cho con bú.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Heart, CheckCircle2, AlertCircle, Baby, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Phụ nữ Mang thai",
  description:
    "Hướng dẫn dinh dưỡng cho phụ nữ mang thai - nhu cầu đặc biệt về sắt, axit folic, canxi, và các chất dinh dưỡng quan trọng khác.",
  keywords: [
    "dinh dưỡng mang thai",
    "phụ nữ mang thai",
    "axit folic",
    "sắt",
    "dinh dưỡng",
  ],
};

export default function PregnancyNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Phụ nữ Mang thai" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Baby className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Phụ nữ Mang thai</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng trong thai kỳ rất quan trọng cho cả mẹ và con. 
          Phụ nữ mang thai cần nhiều chất dinh dưỡng hơn, đặc biệt là sắt, axit folic, canxi, và protein. 
          Ăn uống đúng cách giúp thai nhi phát triển tốt và mẹ khỏe mạnh.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Phụ nữ mang thai cần <strong>nhiều chất dinh dưỡng hơn</strong> nhưng không cần "ăn cho hai người"
          </li>
          <li>
            <strong>Axit folic</strong> quan trọng nhất trong 3 tháng đầu (ngăn dị tật ống thần kinh)
          </li>
          <li>
            <strong>Sắt</strong> cần nhiều hơn (27mg/ngày) để tạo máu cho mẹ và con
          </li>
          <li>
            <strong>Canxi</strong> cần cho xương của mẹ và thai nhi
          </li>
          <li>
            Tránh một số thực phẩm có thể gây hại (cá có thủy ngân, rượu, thực phẩm sống)
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Chất Dinh dưỡng Quan trọng</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Axit Folic (Folate)</h3>
            <p className="text-body text-green-900 mb-3">
              <strong>Quan trọng nhất trong 3 tháng đầu!</strong> Giúp ngăn dị tật ống thần kinh ở thai nhi.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu: 600mcg/ngày</p>
              <p className="text-xs text-gray-700 mb-2">Nguồn: Rau xanh đậm, đậu, ngũ cốc tăng cường</p>
              <p className="text-xs text-amber-900">
                <strong>Lưu ý:</strong> Nên uống viên bổ sung axit folic trước và trong thai kỳ (theo chỉ định bác sĩ)
              </p>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">Sắt</h3>
            <p className="text-body text-red-900 mb-3">
              Cần nhiều hơn để tạo máu cho mẹ và thai nhi. Thiếu sắt gây thiếu máu, mệt mỏi.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu: 27mg/ngày (gấp đôi bình thường)</p>
              <p className="text-xs text-gray-700 mb-2">Nguồn: Thịt đỏ, gan, đậu, rau xanh</p>
              <p className="text-xs text-amber-900">
                <strong>Lưu ý:</strong> Thường cần bổ sung viên sắt (theo chỉ định bác sĩ)
              </p>
            </div>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3">Canxi</h3>
            <p className="text-body text-blue-900 mb-3">
              Cần cho xương của mẹ và thai nhi. Nếu thiếu, cơ thể sẽ lấy canxi từ xương mẹ.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu: 1000-1300mg/ngày</p>
              <p className="text-xs text-gray-700">Nguồn: Sữa, sữa chua, phô mai, cá nhỏ, rau xanh</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Nên Tránh</h2>
        <Callout variant="warning" title="Quan trọng">
          <div className="space-y-2 text-sm">
            <p><strong>Rượu:</strong> Tránh hoàn toàn - có thể gây dị tật thai nhi</p>
            <p><strong>Cá có thủy ngân cao:</strong> Cá mập, cá kiếm, cá thu lớn - tránh hoặc hạn chế</p>
            <p><strong>Thực phẩm sống:</strong> Sushi, thịt sống, trứng sống - nguy cơ nhiễm khuẩn</p>
            <p><strong>Phô mai mềm chưa tiệt trùng:</strong> Nguy cơ listeria</p>
            <p><strong>Caffeine:</strong> Hạn chế &lt; 200mg/ngày (1-2 cốc cà phê)</p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Phụ nữ mang thai cần nhiều sắt hơn
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/calcium-bone-health">
            <h3 className="heading-5 mb-2">Canxi và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Canxi quan trọng cho thai nhi
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng trong thai kỳ rất quan trọng. 
          Hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn cụ thể cho tình trạng của bạn. 
          Không nên tự ý bổ sung vitamin/mineral mà không có chỉ định.
        </p>
      </Callout>
    </main>
  );
}

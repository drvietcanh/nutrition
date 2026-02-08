import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Baby, CheckCircle2, AlertCircle, Apple, Milk } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Trẻ em và Thanh thiếu niên",
  description:
    "Hướng dẫn dinh dưỡng cho trẻ em và thanh thiếu niên - nhu cầu đặc biệt cho tăng trưởng, phát triển, và học tập. Tips cho bữa ăn lành mạnh.",
  keywords: [
    "dinh dưỡng trẻ em",
    "dinh dưỡng thanh thiếu niên",
    "tăng trưởng",
    "phát triển",
    "dinh dưỡng",
  ],
};

export default function ChildrenNutritionPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Trẻ em và Thanh thiếu niên" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Baby className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Trẻ em và Thanh thiếu niên</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Dinh dưỡng trong thời thơ ấu và thanh thiếu niên rất quan trọng cho tăng trưởng, 
          phát triển, và học tập. Trẻ em cần đủ năng lượng và chất dinh dưỡng để phát triển khỏe mạnh, 
          nhưng cũng cần học thói quen ăn uống lành mạnh từ nhỏ.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            Trẻ em cần <strong>đủ năng lượng và chất dinh dưỡng</strong> cho tăng trưởng
          </li>
          <li>
            <strong>Canxi và vitamin D</strong> quan trọng cho xương (đặc biệt tuổi thiếu niên)
          </li>
          <li>
            <strong>Sắt</strong> quan trọng cho trẻ em và thanh thiếu niên (đặc biệt nữ)
          </li>
          <li>
            <strong>Ăn đa dạng</strong> - mỗi bữa nên có tinh bột, protein, rau củ
          </li>
          <li>
            <strong>Hạn chế đường, muối</strong> - tránh thực phẩm chế biến sẵn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Dinh dưỡng Đặc biệt</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3">Canxi và Vitamin D</h3>
            <p className="text-body text-blue-900 mb-3">
              <strong>Quan trọng nhất ở tuổi thiếu niên!</strong> Xương đang phát triển nhanh, 
              cần nhiều canxi để tích trữ cho tương lai.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu: 1300mg canxi/ngày (9-18 tuổi)</p>
              <p className="text-xs text-gray-700 mb-2">Nguồn: Sữa, sữa chua, phô mai, cá nhỏ, rau xanh</p>
              <p className="text-xs text-amber-900">
                <strong>Lưu ý:</strong> Nếu không uống sữa, cần đảm bảo đủ canxi từ nguồn khác
              </p>
            </div>
          </Card>

          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3">Sắt</h3>
            <p className="text-body text-red-900 mb-3">
              Trẻ em và thanh thiếu niên cần sắt cho tăng trưởng và tạo máu. 
              Thanh thiếu niên nữ cần nhiều hơn (hành kinh).
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Nhu cầu: 8-15mg/ngày (tùy tuổi, giới tính)</p>
              <p className="text-xs text-gray-700">Nguồn: Thịt, cá, đậu, rau xanh, ngũ cốc tăng cường</p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đa dạng:</strong> Mỗi bữa nên có tinh bột, protein, rau củ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống sữa hoặc sữa chua:</strong> Quan trọng cho canxi (đặc biệt tuổi thiếu niên)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn trái cây, rau củ:</strong> Cung cấp vitamin, khoáng chất, chất xơ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hạn chế nước ngọt, bánh kẹo:</strong> Nhiều đường, ít dinh dưỡng
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn sáng:</strong> Quan trọng cho năng lượng và tập trung học tập
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/calcium-bone-health">
            <h3 className="heading-5 mb-2">Canxi và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Canxi quan trọng cho trẻ em và thanh thiếu niên
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Trẻ em và thanh thiếu niên cần đủ sắt
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho trẻ em và thanh thiếu niên rất quan trọng. 
          Nếu bạn có lo ngại về dinh dưỡng của con mình, hãy tham khảo ý kiến của bác sĩ nhi khoa 
          hoặc chuyên gia dinh dưỡng để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

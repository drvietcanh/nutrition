import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Calculator, AlertTriangle } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Tính toán Purin trong Bữa Ăn - Bệnh gút",
  description:
    "Tính toán tổng lượng purin trong bữa ăn để tránh vượt quá ngưỡng. Công cụ hữu ích cho người bị bệnh gút.",
  keywords: [
    "purin",
    "acid uric",
    "bệnh gút",
    "gout",
    "tính toán purin",
    "bữa ăn",
  ],
};

const InteractiveSection = dynamic(
  () => import("./InteractiveSection").then((mod) => ({ default: mod.InteractiveSection })),
  {
    loading: () => (
      <div className="flex justify-center py-12">
        <LoadingSpinner size="lg" text="Đang tải công cụ..." />
      </div>
    ),
  }
);

export default function PurineCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Tính toán Purin trong Bữa Ăn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <AlertTriangle className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Tính toán Purin trong Bữa Ăn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Tính toán tổng lượng purin trong bữa ăn để tránh vượt quá ngưỡng và giảm nguy cơ cơn gút cấp.
          Purin có trong nhiều thực phẩm, đặc biệt là nội tạng, thịt đỏ, và hải sản.
        </p>
        <div className="rounded-lg border border-purple-200 bg-purple-50 p-4">
          <p className="text-sm text-purple-900 mb-2">
            <strong>Purin là gì?</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-purple-900">
            <li>Purin là chất có trong nhiều thực phẩm</li>
            <li>Khi cơ thể phân hủy purin, tạo ra acid uric</li>
            <li>Acid uric cao gây bệnh gút và cơn gút cấp</li>
            <li>Người bị gút nên hạn chế thực phẩm có nhiều purin</li>
          </ul>
        </div>
        <div className="rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-900 mb-2">
            <strong>Phân loại theo hàm lượng purin:</strong>
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-red-900">
            <li><strong>Rất cao (&gt;200mg/100g):</strong> Nội tạng, cá cơm khô - Tránh hoàn toàn</li>
            <li><strong>Cao (150-200mg/100g):</strong> Thịt đỏ, hải sản - Hạn chế nghiêm ngặt</li>
            <li><strong>Trung bình (50-150mg/100g):</strong> Thịt gà, cá trắng - Ăn vừa phải</li>
            <li><strong>Thấp (&lt;50mg/100g):</strong> Rau củ, sữa, trứng - Ăn tự do</li>
          </ul>
        </div>
        <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
          <p className="text-sm text-amber-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. 
            Gout là bệnh mạn, cần điều trị suốt đời. Dinh dưỡng giúp giảm cơn nhưng không thay thế thuốc hạ uric.
            Luôn tham khảo bác sĩ để được tư vấn phù hợp.
          </p>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" text="Đang tải..." />
          </div>
        }
      >
        <InteractiveSection />
      </Suspense>
    </main>
  );
}

import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { ClipboardCheck, Heart } from "lucide-react";
import { Breadcrumb } from "../../components/Breadcrumb";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Đánh giá Bữa Ăn theo Bệnh",
  description:
    "Đánh giá tổng thể một bữa ăn có phù hợp với bệnh lý không. Công cụ hữu ích để cải thiện chế độ ăn.",
  keywords: [
    "đánh giá bữa ăn",
    "bữa ăn",
    "dinh dưỡng",
    "bệnh lý",
    "đái tháo đường",
    "gút",
    "thận",
    "tăng huyết áp",
    "tim mạch",
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

export default function MealAssessmentPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Công cụ", href: "/tools" },
          { label: "Đánh giá Bữa Ăn theo Bệnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <ClipboardCheck className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Đánh giá Bữa Ăn theo Bệnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đánh giá tổng thể một bữa ăn có phù hợp với bệnh lý không. 
          Công cụ sẽ phân tích các thành phần dinh dưỡng và đưa ra gợi ý cải thiện.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. 
            Luôn tham khảo bác sĩ hoặc chuyên gia dinh dưỡng để được tư vấn phù hợp với tình trạng của bạn.
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

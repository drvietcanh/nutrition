import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";
import { ShareButton } from "../../components/ShareButton";

export const metadata: Metadata = {
  title: "Lập kế hoạch Bữa ăn",
  description:
    "Công cụ lập kế hoạch bữa ăn dựa trên nhu cầu dinh dưỡng. Chọn thực phẩm từ cơ sở dữ liệu và phân bổ vào các bữa ăn để đáp ứng nhu cầu dinh dưỡng hàng ngày.",
  keywords: [
    "lập kế hoạch bữa ăn",
    "meal planning",
    "dinh dưỡng",
    "thực phẩm Việt Nam",
    "kế hoạch ăn uống",
  ],
  openGraph: {
    title: "Lập kế hoạch Bữa ăn – Công cụ Dinh dưỡng",
    description:
      "Công cụ lập kế hoạch bữa ăn dựa trên nhu cầu dinh dưỡng. Chọn thực phẩm từ cơ sở dữ liệu và phân bổ vào các bữa ăn.",
    url: "https://clinical-nutrition.edu.vn/tools/meal-planner",
  },
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

export default function MealPlannerPage() {
  return (
    <main className="mx-auto max-w-6xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <header className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Lập kế hoạch Bữa ăn
            </h1>
          </div>
          <ShareButton
            title="Lập kế hoạch Bữa ăn – Công cụ Dinh dưỡng"
            description="Công cụ lập kế hoạch bữa ăn dựa trên nhu cầu dinh dưỡng."
            size="sm"
          />
        </div>
        <p className="text-body-lg">
          Công cụ này giúp bạn lập kế hoạch bữa ăn dựa trên nhu cầu dinh dưỡng. 
          Bạn có thể nhập nhu cầu năng lượng và protein, sau đó chọn thực phẩm từ 
          cơ sở dữ liệu và phân bổ vào các bữa ăn (sáng, trưa, tối, và đồ ăn nhẹ).
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý:</strong> Công cụ này chỉ mang tính giáo dục. 
            Để có kế hoạch ăn uống phù hợp với tình trạng sức khỏe cụ thể, 
            vui lòng tham khảo ý kiến chuyên gia dinh dưỡng.
          </p>
        </div>
      </header>

      <Suspense
        fallback={
          <div className="flex justify-center py-12">
            <LoadingSpinner size="lg" text="Đang tải công cụ..." />
          </div>
        }
      >
        <InteractiveSection />
      </Suspense>
    </main>
  );
}

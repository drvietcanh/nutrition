import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Lượng ăn vs Nhu cầu",
  description:
    "So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính. Hiểu khoảng cách giữa nhu cầu ước tính và lượng ăn thực tế, cùng các yếu tố thực tế tạo ra những khoảng cách này.",
  keywords: [
    "lượng ăn vs nhu cầu",
    "intake vs needs",
    "so sánh dinh dưỡng",
    "dinh dưỡng lâm sàng",
    "đánh giá lượng ăn",
  ],
  openGraph: {
    title: "Lượng ăn vs Nhu cầu – Công cụ So sánh",
    description:
      "So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính. Hiểu khoảng cách giữa nhu cầu ước tính và lượng ăn thực tế, cùng các yếu tố thực tế tạo ra những khoảng cách này.",
    url: "https://clinical-nutrition.edu.vn/tools/intake-vs-needs",
  },
};

export default function IntakeVsNeedsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return <>{children}</>;
}

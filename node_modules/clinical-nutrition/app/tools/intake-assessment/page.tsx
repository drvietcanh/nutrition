import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Đánh giá Lượng ăn",
  description:
    "Hiểu sự khác biệt giữa dinh dưỡng được kê đơn và được cung cấp, vì sao lượng ăn thường thiếu, và tầm quan trọng của xu hướng so với dữ liệu một ngày. Công cụ giáo dục để so sánh nhu cầu ước tính với lượng ăn thực tế.",
  keywords: [
    "đánh giá lượng ăn",
    "intake assessment",
    "lượng ăn",
    "dinh dưỡng lâm sàng",
    "nhu cầu vs lượng ăn",
  ],
  openGraph: {
    title: "Đánh giá Lượng ăn – Công cụ giảng dạy",
    description:
      "Hiểu sự khác biệt giữa dinh dưỡng được kê đơn và được cung cấp, vì sao lượng ăn thường thiếu, và tầm quan trọng của xu hướng so với dữ liệu một ngày. Công cụ giáo dục để so sánh nhu cầu ước tính với lượng ăn thực tế.",
    url: "https://clinical-nutrition.edu.vn/tools/intake-assessment",
  },
};

const InteractiveSection = dynamic(() => import("./InteractiveSection").then(mod => ({ default: mod.InteractiveSection })), {
  loading: () => (
    <div className="flex justify-center py-12">
      <LoadingSpinner size="lg" text="Đang tải công cụ..." />
    </div>
  ),
});

export default function IntakeAssessmentPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      {/* 1. Title + brief explanation */}
      <header className="space-y-2">
        <h1 className="heading-1">
          Đánh giá Lượng ăn – Công cụ giảng dạy
        </h1>
        <p className="text-body-sm">
          Trang này giúp bạn so sánh một{" "}
          <strong>ước tính giáo dục về nhu cầu năng lượng và protein</strong> với
          những gì thực sự được cung cấp trong một khoảng thời gian ngắn. Trọng tâm là
          hiểu các khoảng cách, không phải kê đơn chế độ ăn hoặc thức ăn.
        </p>
      </header>

      {/* 2. Why compare needs and intake? */}
      <section
        aria-labelledby="why-compare-heading"
        className="space-y-2 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="why-compare-heading"
          className="heading-4"
        >
          2. Vì sao so sánh nhu cầu ước tính với lượng ăn thực tế?
        </h2>
        <p className="text-body-sm">
          Trong môi trường lâm sàng, người bệnh thường nhận được ít hơn (hoặc đôi khi
          nhiều hơn) so với ước tính giáo dục về nhu cầu năng lượng và protein.
          Nhìn thấy khoảng cách này rõ ràng có thể hỗ trợ lập luận lâm sàng về{" "}
          <strong>vì sao lượng ăn trông như vậy</strong> và các xu hướng
          có thể có ý nghĩa gì theo thời gian.
        </p>
        <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Thiếu hụt có thể phản ánh triệu chứng, thủ thuật, tiếp cận, lựa chọn thực phẩm,
            hoặc yếu tố hệ thống thay vì đơn giản là "không ăn được".
          </li>
          <li>
            "Cho ăn quá" rõ ràng có thể xuất phát từ ước tính hào phóng,
            trộn lẫn phương pháp, hoặc thay đổi tạm thời trong lượng ăn.
          </li>
          <li>
            Các bác sĩ lâm sàng thường chú ý nhiều hơn đến{" "}
            <strong>mô hình trong vài ngày</strong> hơn là một ngày đơn lẻ
            riêng biệt.
          </li>
        </ul>
      </section>

      {/* 3–5. Needs range, intake estimate, and comparison */}
      <Suspense fallback={
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" text="Đang tải công cụ..." />
        </div>
      }>
      <InteractiveSection />
      </Suspense>

      {/* 6. Common clinical reasons for gaps */}
      <section
        aria-labelledby="reasons-heading"
        className="space-y-3 rounded-md border border-neutral-200 bg-white p-4"
      >
        <h2
          id="reasons-heading"
          className="heading-4"
        >
          6. Vì sao lượng ăn thường thiếu trong thực hành
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Triệu chứng như đau, buồn nôn, no sớm, hoặc khó thở có thể
            hạn chế những gì người bệnh cảm thấy có thể ăn hoặc uống.
          </li>
          <li>
            xét nghiệm, thủ thuật, lệnh nhịn ăn, và lịch trình có thể giảm thời gian
            có sẵn cho bữa ăn và đồ ăn nhẹ.
          </li>
          <li>
            Kết cấu, đường, và sở thích thực phẩm ảnh hưởng đến bao nhiêu trong số những gì
            được cung cấp thực sự được tiêu thụ.
          </li>
          <li>
            Tài liệu có thể bỏ sót đồ ăn nhẹ, bổ sung, hoặc thực phẩm do gia đình cung cấp,
            vì vậy lượng ăn được ghi chép có thể đánh giá thấp hoặc cao hơn thực tế.
          </li>
        </ul>
      </section>

      {/* 7. How clinicians think about trends */}
      <section aria-labelledby="trends-heading" className="space-y-3">
        <h2
          id="trends-heading"
          className="heading-4"
        >
          7. tư duy theo xu hướng, không phải ngày đơn lẻ
        </h2>
        <ul className="list-disc space-y-2 pl-5 text-sm text-neutral-700 sm:text-base">
          <li>
            Một ngày lượng ăn thấp xung quanh một thủ thuật lớn có thể ít
            đáng lo ngại hơn vài ngày lượng ăn thấp mà không có lý do rõ ràng.
          </li>
          <li>
            Thay đổi nhỏ trong lượng ăn có thể tích lũy trong một tuần; các bác sĩ lâm sàng thường
            nhìn lại vài ngày trước khi rút ra kết luận.
          </li>
          <li>
            Đánh giá lại là thường quy: ước tính, hồ sơ lượng ăn, và kế hoạch được
            xem xét lại khi tình huống lâm sàng thay đổi.
          </li>
        </ul>
      </section>

      {/* 8. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-2">
        <h2
          id="safety-heading"
          className="heading-4"
        >
          8. Nhắc nhở an toàn
        </h2>
        <p className="text-xs text-neutral-600 sm:text-sm">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. nó không cung cấp
          tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ
          bác sĩ–bệnh nhân, và không được sử dụng để ra quyết định lâm sàng,
          lệnh, hoặc kê đơn.
        </p>
      </section>
    </main>
  );
}

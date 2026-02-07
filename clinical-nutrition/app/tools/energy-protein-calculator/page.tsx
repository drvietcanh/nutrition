import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";

const InteractiveSection = dynamic(() => import("./InteractiveSection").then(mod => ({ default: mod.InteractiveSection })), {
  loading: () => (
    <div className="flex justify-center py-12">
      <LoadingSpinner size="lg" text="Đang tải công cụ..." />
    </div>
  ),
});

export default function EnergyProteinCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
      {/* 1. Title + brief explanation */}
      <header className="space-y-3">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Nhu cầu Năng lượng & Protein – Công cụ Giảng dạy
        </h1>
        <p className="text-base leading-relaxed text-neutral-700 sm:text-lg">
          Trang này minh họa cách các bác sĩ lâm sàng thường ước tính nhu cầu năng lượng và
          protein hàng ngày sử dụng các quy tắc đơn giản dựa trên cân nặng và phương pháp
          dạng phương trình. Các con số hiển thị là{" "}
          <strong>khoảng giáo dục, không phải kê đơn</strong>.
        </p>
      </header>

      {/* 2. Why estimate needs? */}
      <section
        aria-labelledby="why-estimate-heading"
        className="space-y-3 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6"
      >
        <h2
          id="why-estimate-heading"
          className="text-lg font-semibold text-gray-900 sm:text-xl"
        >
          2. Vì sao chúng ta ước tính nhu cầu năng lượng & protein?
        </h2>
        <p className="text-sm leading-relaxed text-neutral-700 sm:text-base">
          Trong dinh dưỡng lâm sàng, chúng ta hiếm khi biết chính xác nhu cầu của một
          người cụ thể. Thay vào đó, chúng ta sử dụng <strong>khoảng hợp lý</strong>{" "}
          dựa trên cân nặng, bối cảnh lâm sàng, và hướng dẫn, sau đó điều chỉnh dựa
          trên cách người đó phản ứng theo thời gian.
        </p>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
          <li>
            Ước tính năng lượng nhằm tránh cả việc cho ăn thiếu và cho ăn quá,
            đặc biệt trong thời gian bệnh và phục hồi.
          </li>
          <li>
            Khoảng protein hỗ trợ duy trì hoặc tái xây dựng khối nạc,
            nhưng phải được cân bằng với chức năng cơ quan và khả năng dung nạp.
          </li>
          <li>
            Các phương pháp khác nhau (đơn giản dựa trên cân nặng, dựa trên phương trình, hệ số
            stress) là <strong>công cụ để cấu trúc tư duy</strong>, không phải
            câu trả lời cuối cùng.
          </li>
        </ul>
      </section>

      {/* 3–5. Method selector, inputs, and educational result ranges */}
      <Suspense fallback={
        <div className="flex justify-center py-12">
          <LoadingSpinner size="lg" text="Đang tải công cụ..." />
        </div>
      }>
        <InteractiveSection />
      </Suspense>

      {/* 6. Interpretation & learning points (global for the page) */}
      <section aria-labelledby="learning-heading" className="space-y-4">
        <h2
          id="learning-heading"
          className="text-lg font-semibold text-gray-900 sm:text-xl"
        >
          6. Diễn giải & điểm học tập
        </h2>
        <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-neutral-700 sm:text-base">
          <li>
            Khoảng thường hữu ích hơn các con số "đúng" đơn lẻ,
            vì nhu cầu thực tế thay đổi theo thời gian, stress, và hoạt động.
          </li>
          <li>
            Quy tắc đơn giản và phương trình hoạt động tốt nhất khi chúng được{" "}
            <strong>kết hợp với phán đoán lâm sàng</strong>, quy trình địa phương,
            và đánh giá thường xuyên.
          </li>
          <li>
            Khi còn nghi ngờ, các bác sĩ lâm sàng thường bắt đầu thận trọng, theo dõi
            khả năng dung nạp và tiến triển, và điều chỉnh thay vì dựa vào một
            phép tính duy nhất.
          </li>
        </ul>
      </section>

      {/* 7. Common clinical pitfalls */}
      <section
        aria-labelledby="pitfalls-heading"
        className="space-y-3 rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm sm:p-6"
      >
        <h2
          id="pitfalls-heading"
          className="text-lg font-semibold text-amber-900 sm:text-xl"
        >
          7. Các cạm bẫy lâm sàng phổ biến
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-amber-900 sm:text-base">
          <li>
            Dựa vào cân nặng thực tế một mình ở những người có{" "}
            <strong>phù, cổ trướng, hoặc dịch chuyển</strong> đáng kể, có thể che giấu
            mất mô nạc.
          </li>
          <li>
            Áp dụng cùng một khoảng cho mọi người mà không xem xét{" "}
            <strong>chức năng cơ quan</strong> (ví dụ, bệnh thận hoặc
            gan tiến triển) hoặc <strong>nguy cơ hội chứng tái cho ăn</strong>.
          </li>
          <li>
            Coi một phép tính như một kê đơn thay vì{" "}
            <strong>điểm khởi đầu cho một kế hoạch được theo dõi</strong>.
          </li>
        </ul>
      </section>

      {/* 8. Safety disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-2 rounded-lg border border-red-200 bg-red-50 p-4 sm:p-5">
        <h2
          id="safety-heading"
          className="text-base font-semibold text-red-900 sm:text-lg"
        >
          8. Nhắc nhở an toàn
        </h2>
        <p className="text-sm leading-relaxed text-red-800 sm:text-base">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp
          tư vấn y tế, chẩn đoán, hoặc điều trị, không tạo mối quan hệ
          bác sĩ–bệnh nhân, và không được sử dụng để ra quyết định lâm sàng
          hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
        </p>
      </section>
    </main>
  );
}

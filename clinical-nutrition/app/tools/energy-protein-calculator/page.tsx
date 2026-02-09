import type { Metadata } from "next";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import { LoadingSpinner } from "../../components/LoadingSpinner";

export const metadata: Metadata = {
  title: "Nhu cầu năng lượng & Protein",
  description:
    "Tính toán nhu cầu năng lượng và protein ước tính dựa trên các phương trình tiêu chuẩn. Hiểu vì sao nhu cầu là ước tính (khoảng) chứ không phải số chính xác, và cách các yếu tố như tuổi, giới tính, và bối cảnh bệnh ảnh hưởng đến tính toán.",
  keywords: [
    "nhu cầu năng lượng",
    "nhu cầu protein",
    "energy requirements",
    "protein requirements",
    "dinh dưỡng lâm sàng",
    "BEE",
    "BMR",
    "REE",
  ],
  openGraph: {
    title: "Nhu cầu năng lượng & Protein – Công cụ Giảng dạy",
    description:
      "Tính toán nhu cầu năng lượng và protein ước tính dựa trên các phương trình tiêu chuẩn. Hiểu vì sao nhu cầu là ước tính (khoảng) chứ không phải số chính xác, và cách các yếu tố như tuổi, giới tính, và bối cảnh bệnh ảnh hưởng đến tính toán.",
    url: "https://clinical-nutrition.edu.vn/tools/energy-protein-calculator",
  },
};

const InteractiveSection = dynamic(() => import("./InteractiveSection").then(mod => ({ default: mod.InteractiveSection })), {
  loading: () => (
    <div className="flex justify-center py-12">
      <LoadingSpinner size="lg" text="Đang tải công cụ..." />
    </div>
  ),
});

export default function EnergyProteinCalculatorPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      {/* 1. Title + brief explanation */}
      <header className="space-y-3">
        <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          cơ thể cần bao nhiêu năng lượng & Protein mỗi ngày?
        </h1>
        <p className="text-body-lg">
          Công cụ này giúp bạn hiểu cách tính toán nhu cầu năng lượng (calo) và protein 
          mà cơ thể cần mỗi ngày. Bạn có thể thử với các số liệu khác nhau để xem 
          các yếu tố như tuổi, cân nặng, và tình trạng bệnh ảnh hưởng như thế nào.
        </p>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
          <p className="text-sm text-blue-900">
            <strong>Lưu ý quan trọng:</strong> Các con số hiển thị là{" "}
            <strong>khoảng ước tính để học tập</strong>, không phải đơn thuốc. 
            Trong thực tế, cần có đánh giá từ chuyên gia dinh dưỡng.
          </p>
        </div>
      </header>

      {/* How to Use section */}
      <section
        aria-labelledby="how-to-use-heading"
        className="space-y-3 rounded-lg border border-green-200 bg-green-50 p-5 shadow-sm sm:p-6"
      >
        <h2
          id="how-to-use-heading"
          className="text-lg font-semibold text-gray-900 sm:text-xl flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            1
          </span>
          Hướng dẫn Sử dụng
        </h2>
        <ol className="list-decimal space-y-3 pl-6 text-sm leading-relaxed text-gray-700 sm:text-base">
          <li>
            <strong>Chọn phương pháp tính:</strong> Bạn có thể chọn phương pháp đơn giản 
            (dựa trên cân nặng) hoặc phương pháp chi tiết hơn (dùng công thức). 
            Hoặc chọn "So sánh cả hai" để xem sự khác biệt.
          </li>
          <li>
            <strong>Nhập thông tin:</strong> Điền các thông tin cơ bản như tuổi, giới tính, 
            cân nặng, chiều cao. Bạn có thể dùng nút "Điền ví dụ" để xem cách công cụ hoạt động.
          </li>
          <li>
            <strong>Chọn tình trạng bệnh (nếu có):</strong> Nếu người đó đang bị bệnh, 
            hãy chọn tình trạng phù hợp. Điều này giúp tính toán chính xác hơn.
          </li>
          <li>
            <strong>Xem kết quả:</strong> Sau khi nhấn "Hiển thị phạm vi giáo dục", 
            bạn sẽ thấy khoảng năng lượng và protein được đề xuất. 
            Hãy đọc phần giải thích để hiểu rõ hơn.
          </li>
        </ol>
      </section>

      {/* 2. Why estimate needs? */}
      <section
        aria-labelledby="why-estimate-heading"
        className="space-y-3 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6"
      >
        <h2
          id="why-estimate-heading"
          className="text-lg font-semibold text-gray-900 sm:text-xl flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            2
          </span>
          Vì sao chúng ta ước tính nhu cầu?
        </h2>
        <p className="text-body">
          Không có cách nào để biết chính xác cơ thể một người cần bao nhiêu năng lượng và protein. 
          Mỗi người khác nhau, và nhu cầu thay đổi theo thời gian. Vì vậy, chúng ta sử dụng{" "}
          <strong>khoảng hợp lý</strong> dựa trên:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-gray-700 sm:text-base">
          <li>
            <strong>Cân nặng:</strong> Người nặng hơn thường cần nhiều năng lượng hơn
          </li>
          <li>
            <strong>Tuổi và giới tính:</strong> Người trẻ và nam giới thường cần nhiều hơn
          </li>
          <li>
            <strong>Tình trạng bệnh:</strong> Khi bị bệnh nặng, cơ thể cần nhiều năng lượng hơn để phục hồi
          </li>
          <li>
            <strong>Mức độ hoạt động:</strong> Người vận động nhiều cần nhiều năng lượng hơn
          </li>
        </ul>
        <p className="text-body-sm text-gray-600 mt-3">
          Sau đó, chúng ta theo dõi xem người đó phản ứng như thế nào và điều chỉnh nếu cần.
        </p>
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
          className="text-lg font-semibold text-gray-900 sm:text-xl flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            6
          </span>
          Hiểu kết quả
        </h2>
        <div className="space-y-3">
          <p className="text-body">
            Khi bạn nhận được kết quả, đây là những điều quan trọng cần nhớ:
          </p>
          <ul className="list-disc space-y-3 pl-6 text-sm leading-relaxed text-gray-700 sm:text-base">
            <li>
              <strong>khoảng giá trị hữu ích hơn số chính xác:</strong> Thay vì nói "cần chính xác 2000 kcal", 
              chúng ta nói "cần khoảng 1800-2200 kcal". Điều này phản ánh thực tế rằng nhu cầu thay đổi 
              theo thời gian và tình trạng sức khỏe.
            </li>
            <li>
              <strong>Đây chỉ là điểm khởi đầu:</strong> Kết quả tính toán giúp chúng ta biết nên bắt đầu từ đâu, 
              nhưng cần theo dõi và điều chỉnh dựa trên phản ứng thực tế của người đó.
            </li>
            <li>
              <strong>Kết hợp với đánh giá toàn diện:</strong> Các con số này chỉ là một phần của bức tranh lớn. 
              Cần xem xét nhiều yếu tố khác như khả năng ăn, tình trạng bệnh, và chức năng các cơ quan.
            </li>
          </ul>
        </div>
      </section>

      {/* 7. Common clinical pitfalls */}
      <section
        aria-labelledby="pitfalls-heading"
        className="space-y-3 rounded-lg border border-amber-200 bg-amber-50 p-5 shadow-sm sm:p-6"
      >
        <h2
          id="pitfalls-heading"
          className="text-lg font-semibold text-amber-900 sm:text-xl flex items-center gap-2"
        >
          <span className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
            7
          </span>
          Những điều Cần tránh
        </h2>
        <p className="text-body-sm text-amber-900 mb-3">
          Khi sử dụng công cụ này, hãy cẩn thận với những điều sau:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-sm leading-relaxed text-amber-900 sm:text-base">
          <li>
            <strong>Không chỉ dựa vào cân nặng:</strong> Nếu người đó bị phù (sưng do nước), 
            cổ trướng (nước trong bụng), hoặc có dịch trong cơ thể, cân nặng có thể không phản ánh 
            đúng tình trạng dinh dưỡng thực tế.
          </li>
          <li>
            <strong>Xem xét chức năng cơ quan:</strong> Nếu người đó có bệnh thận hoặc gan nặng, 
            cần điều chỉnh đặc biệt. Không thể áp dụng cùng một công thức cho mọi người.
          </li>
          <li>
            <strong>Không coi đây là đơn thuốc:</strong> Kết quả chỉ là ước tính để bắt đầu. 
            Cần theo dõi và điều chỉnh dựa trên phản ứng thực tế.
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

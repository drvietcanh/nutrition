import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";

export default function NeedsEstimationPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Ước tính Nhu cầu Dinh dưỡng: Vì sao Khoảng giá trị Quan trọng Hơn Con số Chính xác
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          Trong dinh dưỡng lâm sàng, chúng ta ước tính nhu cầu năng lượng, protein, và các chất dinh dưỡng khác để hướng dẫn chăm sóc.
          Hiểu <strong>vì sao đây là ước tính, không phải mục tiêu chính xác</strong> là cơ bản cho thực hành an toàn.
        </p>
      </header>

      {/* Why Needs Are Estimates */}
      <section
        aria-labelledby="why-estimates-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="why-estimates-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Vì sao Nhu cầu Là Ước tính, Không phải Mục tiêu Chính xác
        </h2>
        <p className="text-base text-neutral-700">
          Không có công thức nào có thể cho bạn biết yêu cầu calo hoặc protein <em>chính xác</em> cho một người cụ thể vào một ngày cụ thể.
          Đây là lý do:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-base text-neutral-700">
          <li>
            <strong>Biến đổi cá nhân</strong>: Hai người cùng tuổi, cân nặng, và tình trạng có thể có tốc độ chuyển hóa khác nhau,
            mô hình hoạt động, và phản ứng với thức ăn. Di truyền, thành phần cơ thể, và thậm chí vi khuẩn đường ruột đóng vai trò.
          </li>
          <li>
            <strong>Nhu cầu động</strong>: Yêu cầu thay đổi từng ngày dựa trên stress, giấc ngủ, mức độ nghiêm trọng của bệnh, chữa lành, hoạt động,
            và thậm chí tâm trạng. Một người đang phục hồi sau phẫu thuật một tuần có thể cần nhiều hơn cùng người đó một tháng sau.
          </li>
          <li>
            <strong>Giới hạn đo lường</strong>: Chúng ta không thể đo trực tiếp nhu cầu năng lượng "thực sự" của ai đó mà không có thiết bị chuyên biệt
            (như đo nhiệt lượng gián tiếp), điều này không thực tế cho hầu hết môi trường lâm sàng. Ngay cả khi đó, kết quả thay đổi theo thời gian và điều kiện.
          </li>
          <li>
            <strong>Bối cảnh quan trọng</strong>: Cùng một người có thể cần lượng khác nhau tùy thuộc vào việc họ đang cố gắng duy trì cân nặng,
            tăng cơ, hỗ trợ chữa lành, hoặc quản lý tình trạng mạn tính. Mục tiêu và ưu tiên lâm sàng định hình khoảng mục tiêu.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Do đó, <strong>ước tính là điểm khởi đầu</strong>, không phải kê đơn. Chúng giúp cấu trúc tư duy và hướng dẫn lập kế hoạch ban đầu,
          nhưng chúng phải được kết hợp với <strong>phán đoán lâm sàng, theo dõi, và đánh giá lại thường xuyên</strong>.
        </p>
      </section>

      {/* Different Methods and Why They Differ */}
      <section
        aria-labelledby="methods-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="methods-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Các Phương pháp Khác nhau và Vì sao Chúng Khác nhau
        </h2>
        <p className="text-base text-neutral-700">
          Các bác sĩ lâm sàng sử dụng các phương pháp khác nhau để ước tính nhu cầu. Mỗi phương pháp có điểm mạnh và giới hạn, và chúng thường tạo ra các con số khác nhau.
          Điều này là <strong>bình thường và dự kiến</strong>, không phải dấu hiệu rằng một phương pháp "sai."
        </p>

        <div className="space-y-4 mt-4">
          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">1. Quy tắc Đơn giản Dựa trên Cân nặng</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Ví dụ: "25–30 kcal/kg/ngày cho năng lượng" hoặc "1.2–1.5 g protein/kg/ngày"
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Vì sao chúng được sử dụng</strong>: Nhanh, dễ nhớ, hoạt động khá tốt cho nhiều người lớn ổn định.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Giới hạn</strong>: Không tính đến hoạt động, mức độ nghiêm trọng của bệnh, hoặc thành phần cơ thể. Có thể gây hiểu lầm ở người có
              phù đáng kể, cổ trướng, hoặc mất cơ (nơi cân nặng thực tế không phản ánh khối lượng nạc).
            </p>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">2. Phương trình Dự đoán</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Ví dụ: Harris-Benedict, Mifflin-St Jeor, Schofield (thường điều chỉnh với yếu tố hoạt động và stress)
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Vì sao chúng được sử dụng</strong>: chi tiết hơn, tính đến tuổi, giới tính, chiều cao, cân nặng, và đôi khi hoạt động.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Giới hạn</strong>: Vẫn dựa trên trung bình dân số, không phải nhu cầu cá nhân. Các phương trình khác nhau có thể cho kết quả khác nhau
              cho cùng một người. Yếu tố stress (hệ số nhân cho bệnh) là ước tính thô và thay đổi theo nguồn.
            </p>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">3. Đo Nhiệt lượng Gián tiếp</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Đo lượng tiêu thụ oxy và sản xuất carbon dioxide để tính chi tiêu năng lượng nghỉ ngơi
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Vì sao nó được sử dụng</strong>: Chính xác hơn cho người cụ thể tại thời điểm đó, đặc biệt hữu ích trong chăm sóc tối quan trọng.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Giới hạn</strong>: Đòi hỏi thiết bị, thời gian, và chuyên môn. Kết quả vẫn thay đổi theo thời gian trong ngày, lượng ăn gần đây,
              và trạng thái lâm sàng. Không thực tế cho sử dụng thường quy trong hầu hết môi trường.
            </p>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">4. Phán đoán Lâm sàng + Hướng dẫn</h3>
            <p className="text-sm text-neutral-700 mb-2">
              Kết hợp kinh nghiệm, hướng dẫn đã xuất bản, và yếu tố cụ thể cho bệnh nhân
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Vì sao nó được sử dụng</strong>: Xem xét toàn bộ bức tranh: tình trạng, mục tiêu, khả năng dung nạp, chức năng cơ quan, và ràng buộc thực tế.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Giới hạn</strong>: Đòi hỏi đào tạo và kinh nghiệm. Ít "khách quan" hơn số liệu, nhưng thường liên quan lâm sàng hơn.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Điểm Chính:
          </p>
          <p className="text-sm text-blue-800">
            Các phương pháp khác nhau tồn tại vì <strong>không có cách tiếp cận đơn lẻ nào phù hợp với tất cả tình huống</strong>. Các bác sĩ lâm sàng có kinh nghiệm thường sử dụng nhiều
            phương pháp, so sánh kết quả, và chọn một khoảng hợp lý dựa trên bối cảnh lâm sàng. Mục tiêu không phải là tìm "câu trả lời đúng,"
            mà là thiết lập một <strong>điểm khởi đầu an toàn, hợp lý</strong> có thể được theo dõi và điều chỉnh.
          </p>
        </div>
      </section>

      {/* Importance of Ranges */}
      <section
        aria-labelledby="ranges-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="ranges-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Tầm quan trọng của Khoảng giá trị, Không phải Con số Đơn lẻ
        </h2>
        <p className="text-base text-neutral-700">
          Thay vì nói "người này cần chính xác 1.800 calo," các bác sĩ lâm sàng nghĩ theo khoảng:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Khoảng năng lượng</strong>: ví dụ, "1.600–2.000 kcal/ngày" hoặc "25–30 kcal/kg/ngày"
          </li>
          <li>
            <strong>Khoảng protein</strong>: ví dụ, "60–90 g/ngày" hoặc "1.0–1.5 g/kg/ngày"
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Vì sao khoảng giá trị quan trọng:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Chúng thừa nhận sự không chắc chắn</strong>: Chúng ta không biết nhu cầu chính xác, nên một khoảng phản ánh biến đổi thực tế.
          </li>
          <li>
            <strong>Chúng cho phép linh hoạt</strong>: Một người có thể làm tốt ở bất kỳ đâu trong khoảng, tùy thuộc vào cảm giác ngon miệng, khả năng dung nạp, và các yếu tố khác.
          </li>
          <li>
            <strong>Chúng hướng dẫn theo dõi</strong>: Nếu ai đó liên tục rơi xuống dưới khoảng (hoặc trên nó, nếu đó là mối quan tâm), nó báo hiệu cần đánh giá lại.
          </li>
          <li>
            <strong>Chúng ngăn chặn tự tin quá mức</strong>: Một con số đơn lẻ có thể cảm thấy như một "mục tiêu" để đạt được chính xác, điều này không phải cách dinh dưỡng hoạt động trong thực tế.
          </li>
        </ul>
        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Ví dụ Lâm sàng:
          </p>
          <p className="text-sm text-neutral-700">
            Một phụ nữ 70 tuổi đang phục hồi sau phẫu thuật hông có thể có khoảng năng lượng ước tính 1.500–1.800 kcal/ngày.
            Nếu cô ấy đang ăn 1.550 kcal/ngày và duy trì cân nặng, điều đó ổn—cô ấy trong khoảng.
            Nếu cô ấy chỉ nhận được 900 kcal/ngày và đang sụt cân, đó là mối quan tâm—cô ấy thấp hơn nhiều so với khoảng và cần can thiệp.
            Khoảng giúp xác định khi nào cần hành động, không chỉ liệu một con số đơn lẻ có được "đáp ứng" hay không.
          </p>
        </div>
      </section>

      {/* Reassessment Is Essential */}
      <section
        aria-labelledby="reassessment-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="reassessment-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Đánh giá lại Là Cần thiết: Nhu cầu Thay đổi Theo Thời gian
        </h2>
        <p className="text-base text-neutral-700">
          Ước tính ban đầu <strong>không được đặt trong đá</strong>. Đánh giá lại thường xuyên là phần cốt lõi của thực hành dinh dưỡng lâm sàng.
        </p>
        <p className="text-base text-neutral-700">
          Khi nào và vì sao đánh giá lại:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Thay đổi lâm sàng</strong>: Nếu tình trạng của ai đó cải thiện hoặc xấu đi, nhu cầu của họ có thể thay đổi.
            Ví dụ, người có nhiễm trùng nghiêm trọng có thể cần nhiều năng lượng và protein hơn trong giai đoạn cấp tính, nhưng ít hơn khi họ phục hồi.
          </li>
          <li>
            <strong>Thay đổi cân nặng</strong>: Nếu ai đó đang sụt hoặc tăng cân không chủ ý, ước tính có thể cần điều chỉnh.
            (Lưu ý: thay đổi cân nặng cũng có thể phản ánh thay đổi dịch, không chỉ dinh dưỡng.)
          </li>
          <li>
            <strong>Thay đổi chức năng</strong>: Nếu ai đó trở nên hoạt động nhiều hơn hoặc ít hơn, nhu cầu năng lượng của họ thay đổi.
          </li>
          <li>
            <strong>Vấn đề dung nạp</strong>: Nếu ai đó không thể dung nạp lượng ước tính (ví dụ: buồn nôn, tiêu chảy, cảm giác ngon miệng kém),
            kế hoạch cần được điều chỉnh theo những gì thực tế, không chỉ những gì đã được tính toán.
          </li>
          <li>
            <strong>Xem xét theo thời gian</strong>: Ngay cả không có thay đổi rõ ràng, xem xét định kỳ (ví dụ: hàng tuần trong bệnh viện, hàng tháng trong ngoại trú)
            đảm bảo kế hoạch vẫn phù hợp.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Quy trình là <strong>lặp lại</strong>: ước tính → thực hiện → theo dõi → đánh giá lại → điều chỉnh → lặp lại.
        </p>
      </section>

      {/* Avoiding the "Correct Answer" Trap */}
      <section
        aria-labelledby="trap-heading"
        className="space-y-4 rounded-lg border border-amber-200 bg-amber-50 p-6"
      >
        <h2
          id="trap-heading"
          className="text-xl font-semibold text-amber-900 sm:text-2xl"
        >
          Tránh Cạm bẫy "Câu trả lời Đúng"
        </h2>
        <p className="text-base text-amber-800">
          Rất dễ coi công thức như thể chúng tạo ra "câu trả lời đúng." Tư duy này có thể dẫn đến:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-amber-800">
          <li>
            <strong>Phụ thuộc quá mức vào số liệu</strong>: Bỏ qua dấu hiệu lâm sàng (như vết thương chữa lành kém, mệt mỏi, hoặc mất cơ) vì
            "phép tính nói họ đang nhận đủ."
          </li>
          <li>
            <strong>Kế hoạch cứng nhắc</strong>: Nhấn mạnh ai đó phải đạt một con số chính xác, ngay cả khi nó gây vấn đề hoặc không thực tế.
          </li>
          <li>
            <strong>Bỏ lỡ bức tranh lớn hơn</strong>: Tập trung vào calo và protein trong khi bỏ qua các yếu tố quan trọng khác
            (như hydrat hóa, vi chất dinh dưỡng, chất lượng thực phẩm, hoặc chất lượng cuộc sống).
          </li>
        </ul>
        <p className="text-base text-amber-800">
          Thay vào đó, hãy nghĩ về ước tính như <strong>công cụ để cấu trúc tư duy</strong>, không phải câu trả lời cuối cùng.
          Chúng giúp trả lời: "Người này có khả năng nhận quá ít, quá nhiều, hoặc ở đâu đó trong khoảng hợp lý không?"
          Câu trả lời hướng dẫn hành động, nhưng phán đoán lâm sàng, sở thích bệnh nhân, và theo dõi đang diễn ra xác định kế hoạch thực tế.
        </p>
      </section>

      {/* Summary */}
      <section
        aria-labelledby="summary-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="summary-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Tóm tắt: Nguyên tắc Chính
        </h2>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            Nhu cầu là <strong>ước tính, không phải mục tiêu chính xác</strong>, vì biến đổi cá nhân, điều kiện động, và giới hạn đo lường làm cho độ chính xác không thể.
          </li>
          <li>
            <strong>Các phương pháp khác nhau tồn tại</strong> và tạo ra các con số khác nhau—điều này là bình thường. Chọn phương pháp phù hợp cho tình huống và sử dụng khoảng.
          </li>
          <li>
            <strong>Khoảng hữu ích hơn con số đơn lẻ</strong> vì chúng thừa nhận sự không chắc chắn, cho phép linh hoạt, và hướng dẫn theo dõi.
          </li>
          <li>
            <strong>Đánh giá lại là cần thiết</strong>—nhu cầu thay đổi với tình trạng lâm sàng, hoạt động, khả năng dung nạp, và thời gian.
          </li>
          <li>
            Tránh coi công thức như "câu trả lời đúng." Sử dụng ước tính để <strong>cấu trúc tư duy và hướng dẫn điểm khởi đầu an toàn</strong>,
            sau đó điều chỉnh dựa trên cách người đó phản ứng.
          </li>
        </ul>
      </section>

      {/* Link to Tool */}
      <section className="space-y-4 rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
        <h2 className="text-xl font-semibold text-blue-900 sm:text-2xl">
          Thử Bạn: Máy tính năng lượng & Protein
        </h2>
        <p className="text-base text-blue-800">
          Máy tính tương tác của chúng tôi minh họa cách các phương pháp khác nhau tạo ra các ước tính khác nhau và vì sao khoảng quan trọng.
          Sử dụng nó để khám phá cách đặc điểm bệnh nhân ảnh hưởng đến nhu cầu ước tính.
        </p>
        <div className="mt-4">
          <Link
            href="/tools/energy-protein-calculator"
            className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-base font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Mở Máy tính năng lượng & Protein →
          </Link>
        </div>
      </section>

      {/* Related Tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="text-xl font-semibold sm:text-2xl">
          Công cụ Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Công cụ giáo dục để ước tính nhu cầu năng lượng và protein hàng ngày dựa trên các phương trình tiêu chuẩn
                và quy tắc dựa trên cân nặng, minh họa các khoảng giá trị thay vì con số chính xác.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính nhu cầu dịch hàng ngày sử dụng các quy tắc Holliday-Segar và 30-35 ml/kg,
                minh họa cách ước tính nhu cầu dịch.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Tính BMI, IBW, ABW, và BSA - các chỉ số cơ bản được sử dụng trong ước tính nhu cầu dinh dưỡng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/micronutrient-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
            <CardContent>
              <p className="text-body-sm">
                Ước tính nhu cầu vi chất (vitamin và khoáng chất) dựa trên tuổi, giới tính, và tình trạng lâm sàng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <section className="space-y-2 rounded-lg border border-neutral-200 bg-white p-4">
        <p className="text-xs text-neutral-600 sm:text-sm">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị,
          không tạo mối quan hệ bác sĩ–bệnh nhân, và không được sử dụng để ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
        </p>
      </section>
    </main>
  );
}

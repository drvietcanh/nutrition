import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { Card, CardHeader, CardContent } from "../../components/Card";

export default function IntakeAssessmentPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Đánh giá Lượng Ăn: Hiểu Người bệnh Thực sự Nhận được Gì
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          Biết người bệnh <em>nên</em> nhận được gì (nhu cầu ước tính) chỉ là một nửa bức tranh.
          Phần còn lại là hiểu <strong>thực tế họ nhận được gì</strong>—và vì sao thường có khoảng cách—để hỗ trợ chăm sóc dinh dưỡng hiệu quả.
        </p>
      </header>

      {/* Prescribed vs Delivered */}
      <section
        aria-labelledby="prescribed-vs-delivered-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="prescribed-vs-delivered-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Kê đơn vs. Cung cấp: Khoảng cách Giữa Kế hoạch và Thực tế
        </h2>
        <p className="text-base text-neutral-700">
          Trong môi trường lâm sàng, thường có sự khác biệt giữa:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Dinh dưỡng được kê đơn</strong>: Những gì được chỉ định, lập kế hoạch, hoặc khuyến nghị (ví dụ: "1.800 kcal/ngày qua chế độ ăn miệng + bổ sung"
            hoặc "cho ăn qua ống 60 mL/giờ cung cấp 1.500 kcal/ngày").
          </li>
          <li>
            <strong>Dinh dưỡng được cung cấp</strong>: Những gì người đó thực sự tiêu thụ hoặc nhận được (ví dụ: họ ăn một nửa bữa ăn, từ chối bổ sung,
            hoặc cho ăn qua ống bị tạm dừng 8 giờ do thủ thuật).
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Khoảng cách này quan trọng vì <strong>chỉ dinh dưỡng được cung cấp ảnh hưởng đến kết quả sức khỏe</strong>. Một kế hoạch hoàn hảo không được tuân theo không giúp ích.
        </p>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Ví dụ lâm sàng 1: Dịch vụ Bữa ăn Bệnh viện
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            Một bệnh nhân được kê đơn "chế độ ăn thường" ước tính cung cấp ~1.800 kcal/ngày. Tuy nhiên:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Họ buồn nôn và chỉ ăn 30% mỗi bữa ăn.</li>
            <li>Bữa ăn bị trì hoãn do xét nghiệm, nên họ bỏ lỡ bữa trưa hoàn toàn.</li>
            <li>Họ không thích lựa chọn thực phẩm và bỏ qua nhiều món.</li>
            <li>Gia đình mang đồ ăn nhẹ, nhưng những thứ này không được ghi chép trong biểu đồ.</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Kết quả</strong>: Kê đơn ~1.800 kcal/ngày, nhưng lượng ăn thực tế được cung cấp có thể gần 800–1.000 kcal/ngày.
            Không đánh giá lượng ăn thực tế, nhóm chăm sóc có thể giả định bệnh nhân đang đáp ứng nhu cầu khi họ không.
          </p>
        </div>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Ví dụ lâm sàng 2: Cho ăn Qua Ống (Enteral)
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            Một bệnh nhân có ống thông mũi dạ dày với lệnh "cho ăn liên tục 80 mL/giờ, cung cấp 1.600 kcal/ngày." Tuy nhiên:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Cho ăn bị tạm dừng 4 giờ trước và sau thủ thuật (tổng 8 giờ).</li>
            <li>Máy bơm bị hỏng qua đêm, và không ai nhận thấy cho đến sáng.</li>
            <li>Bệnh nhân có dịch dạ dày dư thừa cao, nên tốc độ giảm xuống 40 mL/giờ để dung nạp.</li>
            <li>Rửa bằng nước không được tính vào dinh dưỡng, nhưng chúng có thêm thể tích.</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Kết quả</strong>: Kê đơn 1.600 kcal/ngày, nhưng thực tế được cung cấp có thể gần 800–1.000 kcal/ngày do tạm dừng,
            giảm tốc độ, và gián đoạn. Đánh giá lượng ăn thường xuyên giúp nhận diện những khoảng cách này sớm.
          </p>
        </div>
      </section>

      {/* Why Intake Often Falls Short */}
      <section
        aria-labelledby="falls-short-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="falls-short-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Vì sao Lượng Ăn Thường Thiếu trong Thực hành
        </h2>
        <p className="text-base text-neutral-700">
          Hiểu <strong>vì sao</strong> lượng ăn thiếu giúp các bác sĩ lâm sàng giải quyết nguyên nhân gốc rễ, không chỉ triệu chứng.
          Lý do phổ biến bao gồm:
        </p>

        <div className="space-y-4 mt-4">
          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">1. Triệu chứng và Tác dụng Phụ</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Buồn nôn và nôn</strong>: Làm cho việc ăn khó chịu hoặc không thể.</li>
              <li><strong>No sớm</strong>: Cảm thấy no sau lượng nhỏ (phổ biến trong bệnh tật, một số thuốc, hoặc tình trạng ảnh hưởng đến làm rỗng dạ dày).</li>
              <li><strong>Đau</strong>: Đau bụng, loét miệng, hoặc khó nuốt làm giảm lượng ăn.</li>
              <li><strong>Mệt mỏi</strong>: Quá mệt để ăn, nhai, hoặc chuẩn bị thức ăn.</li>
              <li><strong>Thay đổi vị giác hoặc khứu giác</strong>: Thức ăn không có vị đúng, làm giảm cảm giác ngon miệng.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">2. Thủ thuật Y tế và Lịch trình</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Lệnh nhịn ăn</strong>: NPO (không ăn uống) trước thủ thuật, phẫu thuật, hoặc xét nghiệm.</li>
              <li><strong>Trì hoãn thủ thuật</strong>: Xét nghiệm chạy muộn, kéo dài thời gian nhịn ăn vượt quá kế hoạch.</li>
              <li><strong>Xung đột thời gian bữa ăn</strong>: Bữa ăn đến trong lúc hội chẩn, xét nghiệm, hoặc khi bệnh nhân đang ngủ.</li>
              <li><strong>Nhiều cuộc hẹn</strong>: Thăm khám ngoại trú được lên lịch trong giờ ăn thông thường.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">3. Tiếp cận Thực phẩm và Sở thích</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Chất lượng và đa dạng thực phẩm</strong>: Lựa chọn hạn chế, kết cấu không hấp dẫn, hoặc thực phẩm không phù hợp với sở thích văn hóa.</li>
              <li><strong>Hạn chế chế độ ăn</strong>: Chế độ ăn điều trị (ví dụ: ít natri, tiểu đường, thận) có thể giới hạn lựa chọn ngon miệng.</li>
              <li><strong>Điều chỉnh kết cấu</strong>: Chế độ ăn xay nhuyễn hoặc băm nhỏ có thể không hấp dẫn, dẫn đến giảm lượng ăn.</li>
              <li><strong>Tiếp cận hạn chế</strong>: Không có cơ sở bếp, khó mua sắm, hoặc ràng buộc tài chính.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">4. Vấn đề Hệ thống và Tài liệu</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Tài liệu không đầy đủ</strong>: Đồ ăn nhẹ, thực phẩm do gia đình cung cấp, hoặc bổ sung không được ghi chép trong biểu đồ.</li>
              <li><strong>Giao tiếp sai</strong>: Lệnh không được truyền đạt rõ ràng, hoặc nhân viên không biết mục tiêu dinh dưỡng.</li>
              <li><strong>Hạn chế nhân sự</strong>: Không đủ thời gian để hỗ trợ bữa ăn, theo dõi lượng ăn, hoặc cung cấp khuyến khích.</li>
              <li><strong>Vấn đề thiết bị</strong>: Máy bơm cho ăn hỏng, ống tắc, hoặc hệ thống cung cấp thất bại.</li>
            </ul>
          </div>

          <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
            <h3 className="font-semibold text-base mb-2">5. Yếu tố Tâm lý và Xã hội</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
              <li><strong>Trầm cảm hoặc lo âu</strong>: Giảm cảm giác ngon miệng và động lực ăn.</li>
              <li><strong>Cô lập xã hội</strong>: Ăn một mình làm giảm lượng ăn so với ăn cùng người khác.</li>
              <li><strong>Mất độc lập</strong>: Thất vọng với việc cần giúp đỡ để ăn, dẫn đến từ chối.</li>
              <li><strong>Sợ hãi hoặc hiểu lầm</strong>: Lo lắng rằng ăn sẽ làm xấu đi triệu chứng hoặc một số thực phẩm bị "cấm."</li>
            </ul>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Hiểu biết lâm sàng:
          </p>
          <p className="text-sm text-blue-800">
            Khi lượng ăn thiếu, hiếm khi chỉ là "bệnh nhân sẽ không ăn." Thường có một <strong>lý do</strong>—triệu chứng, thủ thuật,
            vấn đề hệ thống, hoặc yếu tố tâm lý. Nhận diện và giải quyết những lý do này hiệu quả hơn chỉ đơn giản tăng kê đơn
            hoặc thêm nhiều bổ sung có thể cũng không được ăn.
          </p>
        </div>
      </section>

      {/* Importance of Trends */}
      <section
        aria-labelledby="trends-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="trends-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Tầm quan trọng của Xu hướng So với Dữ liệu Một Ngày
        </h2>
        <p className="text-base text-neutral-700">
          Dữ liệu lượng ăn một ngày có thể gây hiểu lầm. Các bác sĩ lâm sàng tập trung vào <strong>mô hình theo thời gian</strong> vì:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Biến đổi từng ngày là bình thường</strong>: Người bệnh không ăn cùng một lượng mỗi ngày. Một ngày thấp sau thủ thuật hoặc khi
            triệu chứng nặng hơn là điều thường gặp và có thể không đáng lo ngại nếu chỉ xảy ra đơn lẻ.
          </li>
          <li>
            <strong>Ngày đơn lẻ có thể là ngoại lệ</strong>: Một ngày có thể cao bất thường (dịp đặc biệt, thăm gia đình) hoặc thấp bất thường
            (thủ thuật, triệu chứng nghiêm trọng). Xu hướng cho thấy mô hình thực sự.
          </li>
          <li>
            <strong>Thiếu hụt nhỏ tích lũy</strong>: Thiếu 200–300 kcal/ngày có thể không có vẻ nhiều, nhưng trong một tuần đó là 1.400–2.100 kcal,
            có thể góp phần vào sụt cân và kết quả kém.
          </li>
          <li>
            <strong>Xu hướng cho thấy phản ứng với can thiệp</strong>: Lượng ăn có đang cải thiện sau khi bắt đầu thuốc chống buồn nôn không? Nó có đang giảm
            khi tình trạng xấu đi không? Xu hướng trả lời những câu hỏi này tốt hơn các ảnh chụp đơn lẻ.
          </li>
        </ul>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Ví dụ lâm sàng: Diễn giải Xu hướng
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            Lượng ăn hàng ngày của một bệnh nhân nằm viện trong 7 ngày:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Ngày 1: 1.200 kcal (ngày nhập viện, nhiều xét nghiệm)</li>
            <li>Ngày 2: 1.800 kcal (ngày tốt)</li>
            <li>Ngày 3: 600 kcal (phẫu thuật, NPO hầu hết ngày)</li>
            <li>Ngày 4: 1.000 kcal (sau phẫu thuật, một chút buồn nôn)</li>
            <li>Ngày 5: 1.400 kcal (đang cải thiện)</li>
            <li>Ngày 6: 1.600 kcal (tiếp tục cải thiện)</li>
            <li>Ngày 7: 1.800 kcal (trở lại mức cơ bản)</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Xem ngày đơn lẻ</strong>: Ngày 3 trông đáng báo động (chỉ 600 kcal), nhưng nó là dự kiến sau phẫu thuật.
          </p>
          <p className="text-sm text-neutral-700">
            <strong>Xem xu hướng</strong>: Mô hình tổng thể cho thấy phục hồi—lượng ăn giảm xung quanh phẫu thuật nhưng đang có xu hướng tăng.
            Trung bình trong 7 ngày là ~1.340 kcal/ngày. Nếu nhu cầu ước tính là 1.600–1.800 kcal/ngày, vẫn còn khoảng cách, nhưng xu hướng là tích cực.
            Nhóm chăm sóc có thể tập trung vào hỗ trợ cải thiện tiếp tục thay vì can thiệp mạnh mẽ.
          </p>
        </div>

        <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
          <p className="text-sm font-semibold text-neutral-900 mb-2">
            Ví dụ lâm sàng: Xu hướng Đáng lo ngại
          </p>
          <p className="text-sm text-neutral-700 mb-2">
            Lượng ăn của một bệnh nhân khác trong 7 ngày:
          </p>
          <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
            <li>Ngày 1: 1.600 kcal</li>
            <li>Ngày 2: 1.400 kcal</li>
            <li>Ngày 3: 1.200 kcal</li>
            <li>Ngày 4: 1.000 kcal</li>
            <li>Ngày 5: 900 kcal</li>
            <li>Ngày 6: 800 kcal</li>
            <li>Ngày 7: 700 kcal</li>
          </ul>
          <p className="text-sm text-neutral-700 mt-2">
            <strong>Xem xu hướng</strong>: Đây là một <strong>xu hướng giảm</strong> không có lý do rõ ràng (như phẫu thuật).
            Ngay cả khi không có ngày đơn lẻ nào thấp thảm khốc, mô hình giảm nhất quán báo hiệu một vấn đề cần điều tra.
            Nguyên nhân có thể: triệu chứng xấu đi, tác dụng phụ thuốc, trầm cảm, hoặc tiến triển tình trạng cơ bản.
          </p>
        </div>

        <p className="text-base text-neutral-700 mt-4">
          Các bác sĩ lâm sàng thường xem <strong>3–7 ngày dữ liệu lượng ăn</strong> để đánh giá xu hướng, tùy thuộc vào môi trường và mức độ khẩn cấp.
          Trong chăm sóc tối quan trọng, xem xét hàng ngày là phổ biến. Trong môi trường ngoại trú ổn định, xem xét hàng tuần hoặc hàng tháng có thể đủ.
        </p>
      </section>

      {/* How Clinicians Assess Intake */}
      <section
        aria-labelledby="how-assess-heading"
        className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6"
      >
        <h2
          id="how-assess-heading"
          className="text-xl font-semibold sm:text-2xl"
        >
          Cách Các Bác sĩ lâm sàng Đánh giá Lượng Ăn
        </h2>
        <p className="text-base text-neutral-700">
          Phương pháp thay đổi theo môi trường và nguồn lực:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <strong>Ghi chép và biểu đồ thực phẩm</strong>: Tài liệu về những gì được chỉ định, phục vụ, và tiêu thụ (thường dưới dạng phần trăm: "ăn 50% bữa sáng").
          </li>
          <li>
            <strong>Nhớ lại 24 giờ</strong>: Yêu cầu người đó (hoặc người chăm sóc) mô tả mọi thứ đã ăn trong 24 giờ qua.
          </li>
          <li>
            <strong>Bảng câu hỏi tần suất thực phẩm</strong>: Tần suất một số thực phẩm hoặc nhóm thực phẩm được tiêu thụ.
          </li>
          <li>
            <strong>Ghi chép thực phẩm cân</strong>: Chính xác hơn nhưng tốn thời gian; cân thực phẩm trước và sau bữa ăn.
          </li>
          <li>
            <strong>Ghi chép cho ăn qua ống</strong>: Thể tích được cung cấp, tốc độ, tạm dừng, và dịch dư thừa.
          </li>
          <li>
            <strong>Phương pháp kết hợp</strong>: Sử dụng nhiều cách tiếp cận để có bức tranh hoàn chỉnh.
          </li>
        </ul>
        <p className="text-base text-neutral-700">
          Tất cả phương pháp đều có giới hạn (trí nhớ, lỗi ước tính, tài liệu không đầy đủ), đó là lý do khác tại sao <strong>xu hướng quan trọng hơn độ chính xác hoàn hảo một ngày</strong>.
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
            Thường có khoảng cách giữa <strong>kê đơn</strong> (những gì được chỉ định/lập kế hoạch) và <strong>cung cấp</strong> (những gì thực sự được tiêu thụ).
            Chỉ dinh dưỡng được cung cấp ảnh hưởng đến kết quả.
          </li>
          <li>
            Lượng ăn thường thiếu do <strong>triệu chứng, thủ thuật, tiếp cận thực phẩm, vấn đề hệ thống, hoặc yếu tố tâm lý</strong>.
            Hiểu "vì sao" giúp giải quyết nguyên nhân gốc rễ.
          </li>
          <li>
            <strong>Xu hướng trong 3–7 ngày</strong> có ý nghĩa hơn dữ liệu một ngày vì chúng cho thấy mô hình, tính đến biến đổi bình thường,
            và tiết lộ thiếu hụt hoặc cải thiện tích lũy.
          </li>
          <li>
            Đánh giá lượng ăn thường xuyên giúp nhận diện khoảng cách sớm, theo dõi phản ứng với can thiệp, và hướng dẫn điều chỉnh kế hoạch dinh dưỡng.
          </li>
        </ul>
      </section>

      {/* Link to Tool */}
      <section className="space-y-4 rounded-lg border-2 border-blue-300 bg-blue-50 p-6">
        <h2 className="text-xl font-semibold text-blue-900 sm:text-2xl">
          Thử Bạn: Bảng Đánh giá Lượng Ăn
        </h2>
        <p className="text-base text-blue-800">
          Bảng tương tác của chúng tôi giúp bạn xem xét có hệ thống lượng ăn theo thời gian và so sánh nó với nhu cầu ước tính.
          Sử dụng nó để thực hành nhận diện khoảng cách và hiểu vì sao lượng ăn có thể thiếu.
        </p>
        <div className="mt-4">
          <Link
            href="/tools/intake-assessment"
            className="inline-flex items-center rounded-md bg-blue-700 px-4 py-2 text-base font-medium text-white hover:bg-blue-800 transition-colors"
          >
            Mở Bảng Đánh giá Lượng Ăn →
          </Link>
        </div>
      </section>

      {/* Related Tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="text-xl font-semibold sm:text-2xl">
          Công cụ Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/intake-assessment">
            <CardHeader icon={CheckCircle} title="Đánh giá Lượng Ăn" />
            <CardContent>
              <p className="text-body-sm">
                Công cụ tương tác để so sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính,
                giúp hiểu khoảng cách và các yếu tố ảnh hưởng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/intake-vs-needs">
            <CardHeader icon={CheckCircle} title="Lượng Ăn vs Nhu Cầu" />
            <CardContent>
              <p className="text-body-sm">
                Công cụ so sánh trực quan để đánh giá lượng ăn thực tế so với nhu cầu ước tính.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein để so sánh với lượng ăn thực tế.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/malnutrition-screening">
            <CardHeader icon={CheckCircle} title="Nguy cơ Suy Dinh dưỡng" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá nguy cơ suy dinh dưỡng, một yếu tố quan trọng trong đánh giá lượng ăn.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <section className="space-y-2 rounded-lg border border-neutral-200 bg-white p-4">
        <p className="text-xs text-neutral-600 sm:text-sm">
          Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị,
          không tạo mối quan hệ bác sĩ–bệnh nhân, và không được sử dụng để ra quyết định lâm sàng, lệnh, hoặc kê đơn.
        </p>
      </section>
    </main>
  );
}

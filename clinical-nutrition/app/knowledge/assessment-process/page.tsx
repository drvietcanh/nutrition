import Link from "next/link";

export default function AssessmentProcessPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      {/* 1. Page title & introduction */}
      <header className="space-y-5 border-b border-neutral-200 pb-8">
        <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
          Đánh giá Dinh dưỡng Lâm sàng: Hiểu Quy trình
        </h1>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            Đánh giá dinh dưỡng là <strong>một quy trình, không phải một phép tính đơn lẻ</strong>. Nó không phải về việc tìm một con số "đúng"
            hoặc chạy một công thức một lần. Thay vào đó, nó là cách có cấu trúc để thu thập thông tin, hiểu nó, và sử dụng sự hiểu biết đó
            để hướng dẫn chăm sóc.
          </p>
          <p>
            Đánh giá cũng là <strong>động, không tĩnh</strong>. Nhu cầu dinh dưỡng của một người thay đổi theo thời gian—với bệnh tật, phục hồi,
            mức độ hoạt động, và hoàn cảnh cuộc sống. Điều phù hợp tuần trước có thể không đúng hôm nay. Đó là lý do đánh giá bao gồm
            đánh giá lại và điều chỉnh thường xuyên.
          </p>
          <p>
            Quan trọng nhất, đánh giá là <strong>phụ thuộc vào bối cảnh</strong>. Cùng một con số có ý nghĩa khác nhau cho những người khác nhau
            trong các tình huống khác nhau. Một người đang phục hồi sau phẫu thuật có nhu cầu khác với người quản lý tình trạng mạn tính.
            Người có bệnh thận cần cân nhắc khác với người có bệnh tim. Bối cảnh định hình mọi thứ.
          </p>
          <p className="text-base text-neutral-600 italic border-l-4 border-blue-200 pl-4 py-2 bg-blue-50/50 rounded-r">
            Dù bạn là bác sĩ lâm sàng mới với dinh dưỡng, điều dưỡng làm sàng lọc, sinh viên y khoa, hoặc người đang học về quy trình,
            trang này sẽ giúp bạn hiểu cách sàng lọc, ước tính nhu cầu, và đánh giá lượng ăn hoạt động cùng nhau—và cách các công cụ của chúng tôi hỗ trợ
            từng bước. Hãy dành thời gian, và nhớ: đánh giá là một kỹ năng phát triển với thực hành.
          </p>
        </div>
      </header>

      {/* 2. Why nutritional assessment matters in clinical care */}
      <section
        aria-labelledby="why-matters-heading"
        className="space-y-5"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="why-matters-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Vì sao Đánh giá Dinh dưỡng Quan trọng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            Suy dinh dưỡng phổ biến trong môi trường lâm sàng, nhưng nó thường bị bỏ qua. Mọi người có thể không đề cập đến thay đổi về cảm giác ngon miệng hoặc cân nặng,
            hoặc những thay đổi này có thể có vẻ ít khẩn cấp hơn các mối quan tâm y tế khác. Đánh giá giúp đưa dinh dưỡng vào tầm nhìn.
          </p>
          <p>
            Nhận diện sớm hỗ trợ lập kế hoạch chăm sóc tốt hơn. Khi chúng ta nhận thấy mối quan tâm dinh dưỡng sớm, chúng ta có nhiều lựa chọn hơn và có thể
            giải quyết chúng trước khi chúng trở nên phức tạp hơn. Điều này không có nghĩa là mọi mối quan tâm đều cần can thiệp ngay lập tức—nó có nghĩa là chúng ta
            nhận thức và có thể lập kế hoạch phù hợp.
          </p>
          <p>
            Đánh giá giúp các bác sĩ lâm sàng trả lời ba câu hỏi cơ bản cung cấp thông tin cho lập luận lâm sàng:
          </p>
          <ul className="list-disc space-y-3 pl-6">
          <li>
            <strong>Có vấn đề không?</strong> Có dấu hiệu nguy cơ dinh dưỡng cần chú ý ngay bây giờ không?
          </li>
          <li>
            <strong>Người này cần gì?</strong> Cơ thể họ cần khoảng bao nhiêu năng lượng, protein, và các chất dinh dưỡng khác?
          </li>
          <li>
            <strong>Họ thực sự đang nhận được gì?</strong> Lượng ăn hiện tại của họ so với những gì họ cần như thế nào?
          </li>
        </ul>
          <p>
            Quan trọng, đánh giá giúp <strong>ưu tiên sự chú ý, không chỉ đạo điều trị</strong>. Nó hướng dẫn lập luận lâm sàng
            và giúp xác định điều gì cần tập trung, nhưng nó không thay thế phán đoán chuyên nghiệp hoặc sở thích bệnh nhân. Đánh giá cung cấp thông tin cho
            quyết định—nó không tự động đưa ra chúng.
          </p>
          <p>
            Không có đánh giá, khuyến nghị có thể dựa trên giả định. Với đánh giá, các bác sĩ lâm sàng có thể phát triển{" "}
            <strong>các cách tiếp cận có thông tin, có mục tiêu, và có thể đo lường</strong> phù hợp với tình huống thực tế của người đó.
          </p>
        </div>
      </section>

      {/* 3. Overview: The 3-step assessment framework */}
      <section
        aria-labelledby="framework-heading"
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="framework-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Khung 3 Bước
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
            <p className="text-base leading-relaxed text-neutral-700 sm:text-lg mb-6">
              Đánh giá tuân theo một luồng đơn giản, logic. Mỗi bước xây dựng trên bước trước:
            </p>
            <div className="space-y-5">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                  1️⃣
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">Nhận diện Nguy cơ Dinh dưỡng</h3>
                  <p className="text-sm text-neutral-700">
                    Kiểm tra nhanh: Có nguy cơ dinh dưỡng có thể cần chú ý không? Điều này chỉ ra <strong>mức độ khẩn cấp</strong>.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                  2️⃣
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">Ước tính Nhu cầu Dinh dưỡng</h3>
                  <p className="text-sm text-neutral-700">
                    Ước tính những gì cơ thể họ có thể cần. Điều này cung cấp một <strong>khoảng mục tiêu</strong> để xem xét.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-semibold text-lg">
                  3️⃣
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-base mb-1">So sánh Nhu cầu với Lượng Ăn Thực tế</h3>
                  <p className="text-sm text-neutral-700">
                    Đo lường những gì họ thực sự đang nhận được. Điều này tiết lộ <strong>khoảng cách</strong> giữa nhu cầu và thực tế.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div>
                <h3 className="font-semibold text-base mb-2 text-neutral-900">
                  Vì sao Thứ tự Quan trọng
                </h3>
                <p className="text-base text-neutral-700">
                  Trình tự quan trọng vì mỗi bước cung cấp thông tin cho bước tiếp theo. Sàng lọc chỉ ra <em>liệu</em> và <em>mức độ khẩn cấp</em> đánh giá
                  thêm có thể hữu ích. Ước tính nhu cầu cung cấp một <em>mục tiêu</em> để so sánh. Đánh giá lượng ăn tiết lộ <em>khoảng cách</em> giữa
                  mục tiêu và thực tế—giúp nhận diện điều gì có thể cần chú ý.
                </p>
                <p className="text-base text-neutral-700 mt-2">
                  Bỏ qua sàng lọc có thể dẫn đến dành thời gian cho đánh giá chi tiết cho những người có thể không cần chúng, hoặc bỏ lỡ những người có thể cần chú ý khẩn cấp.
                  Bỏ qua ước tính nhu cầu có nghĩa là không có mục tiêu rõ ràng để so sánh lượng ăn. Bỏ qua đánh giá lượng ăn có nghĩa là lập kế hoạch
                  dựa trên giả định thay vì thực tế quan sát được.
                </p>
              </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Vì sao Bỏ qua Các Bước Dẫn đến Nhầm lẫn
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Khi các bước bị bỏ qua hoặc thực hiện không đúng thứ tự, đánh giá trở nên ít hữu ích hơn:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>
                <strong>Bắt đầu với ước tính nhu cầu</strong> mà không sàng lọc có nghĩa là bạn có thể tính toán nhu cầu cho người không
                cần đánh giá chi tiết, lãng phí thời gian và nguồn lực.
              </li>
              <li>
                <strong>Đánh giá lượng ăn mà không biết nhu cầu</strong> để lại cho bạn các con số nhưng không có ngữ cảnh—1.200 calo có đủ không? Quá nhiều?
                Bạn không thể biết mà không có mục tiêu.
              </li>
              <li>
                <strong>Bỏ qua sàng lọc</strong> có nghĩa là bạn có thể bỏ lỡ các trường hợp khẩn cấp cần chú ý ngay lập tức, hoặc ưu tiên quá mức các tình huống nguy cơ thấp.
              </li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Tuân theo trình tự đảm bảo bạn có thông tin đúng vào đúng thời điểm để đưa ra quyết định có thông tin.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Step 1 – Nutritional risk screening */}
      <section
        aria-labelledby="screening-heading"
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="screening-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Bước 1: Sàng lọc Nguy cơ Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            <strong>Quá trình tư duy</strong>: Sàng lọc là kiểm tra nhanh đầu tiên để nhận diện mức độ khẩn cấp. Nó đặt các câu hỏi đơn giản:
          </p>
          <ul className="list-disc space-y-2 pl-6">
          <li>Sụt cân hoặc tăng cân gần đây?</li>
          <li>Ăn ít hơn nhiều so với bình thường?</li>
          <li>Bệnh nghiêm trọng hoặc tình trạng làm tăng nguy cơ?</li>
        </ul>

        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3 text-neutral-900">
              Công cụ Sàng lọc Là gì
            </h3>
            <div className="space-y-3 text-base leading-relaxed text-neutral-700 sm:text-lg">
              <p>
                Công cụ sàng lọc là bảng câu hỏi có cấu trúc được thiết kế để nhanh chóng nhận diện những người có nguy cơ suy dinh dưỡng. Các công cụ phổ biến bao gồm:
              </p>
              <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>NRS-2002 (Sàng lọc Nguy cơ Dinh dưỡng 2002)</strong>: Một công cụ đơn giản kết hợp BMI, sụt cân, và mức độ nghiêm trọng của bệnh.
                Nó được sử dụng rộng rãi trong bệnh viện và cho điểm số chỉ ra nguy cơ thấp, trung bình, hoặc cao.
              </li>
              <li>
                <strong>PG-SGA (Đánh giá Toàn cầu Chủ quan do Bệnh nhân Tạo ra)</strong>: Một công cụ chi tiết hơn bao gồm
                triệu chứng do bệnh nhân báo cáo và khả năng chức năng. Nó thường được sử dụng trong ung thư và các môi trường chuyên khoa khác.
              </li>
            </ul>
              <p className="mt-2">
                Các công cụ này được thiết kế để <strong>nhanh và thực tế</strong>—chúng thường có thể hoàn thành trong vài phút, làm cho chúng
                phù hợp với môi trường lâm sàng bận rộn.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Sàng lọc Có thể và Không thể Cho chúng ta Biết gì
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-md bg-green-50 border border-green-200 p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">
                  ✓ Sàng lọc CÓ THỂ cho chúng ta biết:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-green-800">
                  <li>Liệu ai đó có nguy cơ thấp, trung bình, hoặc cao</li>
                  <li>Mức độ khẩn cấp đánh giá đầy đủ có thể hữu ích</li>
                  <li>Bệnh nhân nào có thể hưởng lợi từ ưu tiên cho chăm sóc dinh dưỡng</li>
                  <li>Liệu sàng lọc có thể đáng lặp lại (và khi nào)</li>
                </ul>
              </div>
              <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
                <p className="text-sm font-semibold text-amber-900 mb-2">
                  ✗ Sàng lọc KHÔNG THỂ cho chúng ta biết:
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
                  <li>Nguyên nhân cụ thể của vấn đề dinh dưỡng</li>
                  <li>Nhu cầu chất dinh dưỡng chính xác</li>
                  <li>Can thiệp nào cần thiết</li>
                  <li>Liệu ai đó chắc chắn có suy dinh dưỡng</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Vì sao Sàng lọc ≠ Chẩn đoán
            </h3>
            <p className="text-base text-neutral-700">
              Sàng lọc là một <strong>bộ lọc</strong>, không phải chẩn đoán. Nó xác định ai cần đánh giá thêm, không phải vấn đề dinh dưỡng cụ thể của họ là gì. 
              Kết quả sàng lọc nguy cơ cao có nghĩa là "người này cần đánh giá đầy đủ," không phải "người này chắc chắn có suy dinh dưỡng."
            </p>
            <p className="text-base text-neutral-700 mt-2">
              Chẩn đoán đến từ đánh giá toàn diện, bao gồm tiền sử chi tiết, khám thực thể, dữ liệu xét nghiệm, và phán đoán lâm sàng.
              Sàng lọc chỉ cho bạn biết nơi tập trung sự chú ý của bạn.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Trường hợp Sử dụng Điển hình
            </h3>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
              <li>
                <strong>Nhập viện</strong>: Sàng lọc tất cả bệnh nhân khi nhập viện để xác định ai cần đánh giá dinh dưỡng đầy đủ
              </li>
              <li>
                <strong>Phòng khám ngoại trú</strong>: Sàng lọc bệnh nhân có tình trạng mạn tính, bệnh gần đây, hoặc triệu chứng đáng lo ngại
              </li>
              <li>
                <strong>Chăm sóc dài hạn</strong>: Sàng lọc thường xuyên (ví dụ: hàng tháng hoặc hàng quý) để phát hiện thay đổi sớm
              </li>
              <li>
                <strong>Trước thủ thuật</strong>: Sàng lọc bệnh nhân được lên lịch phẫu thuật hoặc thủ thuật khác có thể ảnh hưởng đến dinh dưỡng
              </li>
              <li>
                <strong>Khi tình trạng lâm sàng thay đổi</strong>: Sàng lọc lại nếu tình trạng bệnh nhân xấu đi hoặc cải thiện đáng kể
              </li>
            </ul>
          </div>

          <div className="rounded-md bg-red-50 border border-red-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-red-900">
              Cạm bẫy Phổ biến Cần Tránh
            </h3>
            <ul className="list-disc space-y-2 pl-5 text-sm text-red-800">
              <li>
                <strong>Dựa vào albumin một mình</strong>: Albumin thấp thường phản ánh viêm hoặc mức độ nghiêm trọng của bệnh, không chỉ dinh dưỡng kém.
                Nó không phải là công cụ sàng lọc đáng tin cậy và thường không được sử dụng riêng lẻ.
              </li>
              <li>
                <strong>Coi sàng lọc như chẩn đoán</strong>: Sàng lọc cho thấy nguy cơ thấp không nhất thiết có nghĩa là đánh giá đầy đủ không cần thiết, đặc biệt
                nếu dấu hiệu lâm sàng gợi ý điều ngược lại.
              </li>
              <li>
                <strong>Không sàng lọc lại</strong>: Một lần sàng lọc khi nhập viện có thể không đủ. Sàng lọc lại khi tình trạng lâm sàng thay đổi có thể hữu ích.
              </li>
              <li>
                <strong>Bỏ qua triệu chứng do bệnh nhân báo cáo</strong>: Công cụ bao gồm đầu vào của bệnh nhân (như PG-SGA) thường chính xác hơn
                những công cụ chỉ dựa vào đo lường khách quan.
              </li>
              <li>
                <strong>Sử dụng công cụ sai cho môi trường</strong>: Một số công cụ hoạt động tốt hơn ở một số quần thể nhất định. Chọn công cụ đã được xác thực
                cho quần thể bệnh nhân và môi trường của bạn.
              </li>
            </ul>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Thử công cụ sàng lọc của chúng tôi:
          </p>
          <Link
            href="/tools/malnutrition-screening"
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Công cụ Sàng lọc Suy Dinh dưỡng (Công cụ 01) →
          </Link>
        </div>
      </section>

      {/* 5. Step 2 – Estimating energy & protein needs */}
      <section
        aria-labelledby="needs-heading"
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="needs-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Bước 2: Ước tính Nhu cầu Năng lượng & Protein
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            <strong>Quá trình tư duy</strong>: Một khi chúng ta biết có nguy cơ (từ sàng lọc), chúng ta ước tính những gì cơ thể họ cần. Chúng ta xem xét:
          </p>
          <ul className="list-disc space-y-2 pl-6">
          <li>Yếu tố cơ bản: tuổi, kích thước, hoạt động</li>
          <li>Bối cảnh lâm sàng: bệnh tật, phục hồi, tình trạng đặc biệt</li>
        </ul>
          <p>
            Câu hỏi chính: <em>"Nếu mọi thứ lý tưởng, họ cần khoảng bao nhiêu?"</em>
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Vì sao Nhu cầu Là Ước tính, Không phải Mục tiêu Chính xác
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Không có công thức nào có thể cho bạn biết nhu cầu calo hoặc protein chính xác cho một người cụ thể vào một ngày cụ thể. Đây là lý do:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
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
            <p className="text-base text-neutral-700 mt-2">
              Do đó, <strong>ước tính là điểm khởi đầu</strong>, không phải kê đơn. Chúng giúp cấu trúc tư duy và hướng dẫn lập kế hoạch ban đầu,
              nhưng chúng thường được kết hợp với <strong>phán đoán lâm sàng, theo dõi, và đánh giá lại thường xuyên</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Different Methods and Why They Differ
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Clinicians use various methods to estimate needs. Each has strengths and limitations, and they often produce different numbers.
              This is <strong>normal and expected</strong>, not a sign that one is "wrong."
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Simple Weight-Based Rules</h4>
                <p className="text-sm text-neutral-700">
                  Examples: "25–30 kcal/kg/day for energy" or "1.2–1.5 g protein/kg/day". Quick and easy to remember, work reasonably well
                  for many stable adults. Don't account for activity, illness severity, or body composition.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Predictive Equations</h4>
                <p className="text-sm text-neutral-700">
                  Examples: Harris-Benedict, Mifflin-St Jeor, Schofield equations (often adjusted with activity and stress factors).
                  More detailed, account for age, sex, height, weight, and sometimes activity. Still based on population averages, not individual needs.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Clinical Judgment + Guidelines</h4>
                <p className="text-sm text-neutral-700">
                  Combining experience, published guidelines, and patient-specific factors. Considers the whole picture: condition, goals,
                  tolerance, organ function, and practical constraints. Requires training and experience.
                </p>
              </div>
            </div>
            <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-3">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                Key Takeaway:
              </p>
              <p className="text-sm text-blue-800">
                Different methods exist because <strong>no single approach fits all situations</strong>. Experienced clinicians often use multiple
                methods, compare results, and choose a reasonable range based on the clinical context. The goal is not to find the "correct answer,"
                but to establish a <strong>safe, reasonable starting point</strong> that can be monitored and adjusted.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              The Importance of Ranges and Reassessment
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Instead of saying "this person needs exactly 1,800 calories," clinicians think in ranges:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base text-neutral-700">
              <li><strong>Energy ranges</strong>: e.g., "1,600–2,000 kcal/day" or "25–30 kcal/kg/day"</li>
              <li><strong>Protein ranges</strong>: e.g., "60–90 g/day" or "1.0–1.5 g/kg/day"</li>
            </ul>
            <p className="text-base text-neutral-700 mt-2">
              Why ranges matter:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base text-neutral-700">
              <li>They acknowledge uncertainty—we don't know the exact need, so a range reflects realistic variation</li>
              <li>They allow flexibility—a person might do well anywhere within the range, depending on appetite, tolerance, and other factors</li>
              <li>They guide monitoring—if someone consistently falls below (or above) the range, it signals a need to reassess</li>
              <li>They prevent overconfidence—a single number can feel like a "target" to hit precisely, which isn't how nutrition works</li>
            </ul>
            <p className="text-base text-neutral-700 mt-3">
              <strong>Reassessment is essential</strong>. Initial estimates are not set in stone. Regular reassessment is a core part of clinical nutrition practice.
              When and why to reassess:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-base text-neutral-700">
              <li>Clinical changes (condition improves or worsens)</li>
              <li>Weight changes (unintentional loss or gain)</li>
              <li>Functional changes (more or less active)</li>
              <li>Tolerance issues (can't tolerate the estimated amount)</li>
              <li>Time-based review (periodic review even without obvious changes)</li>
            </ul>
            <p className="text-base text-neutral-700 mt-2">
              The process is <strong>iterative</strong>: estimate → implement → monitor → reassess → adjust → repeat.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Avoid Treating Formulas as "Correct Answers"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              It's tempting to treat formulas as if they produce "correct answers." This mindset can lead to:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>
                <strong>Over-reliance on numbers</strong>: Ignoring clinical signs (like poor wound healing, fatigue, or muscle loss) because
                "the calculation says they're getting enough."
              </li>
              <li>
                <strong>Rigid plans</strong>: Insisting someone must reach an exact number, even when it's causing problems or isn't realistic.
              </li>
              <li>
                <strong>Missing the bigger picture</strong>: Focusing on calories and protein while overlooking other important factors
                (like hydration, micronutrients, food quality, or quality of life).
              </li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Instead, think of estimates as <strong>tools to structure thinking</strong>, not final answers. They help answer: "Is this person
              likely getting too little, too much, or somewhere in a reasonable range?" The answer guides action, but clinical judgment,
              patient preferences, and ongoing monitoring determine the actual plan.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Thử máy tính nhu cầu của chúng tôi:
          </p>
          <Link
            href="/tools/energy-protein-calculator"
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Máy tính Năng lượng & Protein (Công cụ 02) →
          </Link>
          <p className="text-xs text-blue-700 mt-2">
            Hoặc <Link href="/knowledge/needs-estimation" className="underline">tìm hiểu thêm về ước tính nhu cầu</Link>
          </p>
        </div>
      </section>

      {/* 6. Step 3 – Assessing actual intake */}
      <section
        aria-labelledby="intake-heading"
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="intake-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Bước 3: Đánh giá Lượng Ăn Thực tế
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            <strong>Quá trình tư duy</strong>: Bây giờ chúng ta đo lường thực tế. Chúng ta xem những gì họ thực sự ăn và uống, thường bằng cách yêu cầu họ mô tả một ngày điển hình hoặc nhớ lại 24 giờ qua.
          </p>
          <p>
            Điều này giúp trả lời: <em>"Lượng ăn thực tế của họ so với những gì chúng ta ước tính họ cần như thế nào?"</em>
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Kê đơn vs. Cung cấp: Khoảng cách Giữa Kế hoạch và Thực tế
            </h3>
            <p className="text-base text-neutral-700 mb-2">
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
            <p className="text-base text-neutral-700 mt-2">
              Khoảng cách này quan trọng vì <strong>chỉ dinh dưỡng được cung cấp ảnh hưởng đến kết quả sức khỏe</strong>. Một kế hoạch hoàn hảo không được tuân theo không giúp ích.
            </p>

            <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Ví dụ Lâm sàng 1: Dịch vụ Bữa ăn Bệnh viện
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
                Ví dụ Lâm sàng 2: Cho ăn Qua Ống (Enteral)
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
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Vì sao Lượng Ăn Thường Thiếu trong Thực hành
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Hiểu <strong>vì sao</strong> lượng ăn thiếu giúp các bác sĩ lâm sàng giải quyết nguyên nhân gốc rễ, không chỉ triệu chứng. Lý do phổ biến bao gồm:
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Triệu chứng và Tác dụng Phụ</h4>
                <p className="text-sm text-neutral-700">
                  Buồn nôn, nôn, no sớm, đau, mệt mỏi, hoặc thay đổi vị giác có thể làm cho việc ăn khó chịu hoặc không thể.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Thủ thuật Y tế và Lịch trình</h4>
                <p className="text-sm text-neutral-700">
                  Lệnh nhịn ăn, trì hoãn thủ thuật, xung đột thời gian bữa ăn, hoặc nhiều cuộc hẹn trong giờ ăn thông thường.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Tiếp cận Thực phẩm và Sở thích</h4>
                <p className="text-sm text-neutral-700">
                  Lựa chọn hạn chế, kết cấu không hấp dẫn, thực phẩm không phù hợp với sở thích văn hóa, hoặc hạn chế chế độ ăn giới hạn lựa chọn ngon miệng.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Vấn đề Hệ thống và Tài liệu</h4>
                <p className="text-sm text-neutral-700">
                  Tài liệu không đầy đủ (đồ ăn nhẹ, thực phẩm do gia đình cung cấp không được ghi chép), giao tiếp sai, hạn chế nhân sự, hoặc vấn đề thiết bị.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Yếu tố Tâm lý và Xã hội</h4>
                <p className="text-sm text-neutral-700">
                  Trầm cảm, lo âu, cô lập xã hội, mất độc lập, hoặc sợ hãi/hiểu lầm về ăn uống.
                </p>
              </div>
            </div>
            <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-3">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                Hiểu Biết Lâm Sàng:
              </p>
              <p className="text-sm text-blue-800">
                Khi lượng ăn vào thiếu, hiếm khi chỉ là "bệnh nhân không chịu ăn." Thường có một <strong>lý do</strong>—triệu chứng, thủ thuật,
                vấn đề hệ thống, hoặc yếu tố tâm lý. Xác định và giải quyết những lý do này hiệu quả hơn so với chỉ đơn giản tăng đơn thuốc
                hoặc thêm nhiều bổ sung hơn mà cũng có thể không được ăn.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Tầm quan trọng của Xu hướng So với Dữ liệu Một Ngày
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Dữ liệu lượng ăn một ngày có thể gây hiểu lầm. Các bác sĩ lâm sàng tập trung vào <strong>mô hình theo thời gian</strong> vì:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
              <li>
                <strong>Biến đổi từng ngày là bình thường</strong>: Mọi người không ăn cùng một lượng mỗi ngày. Một ngày thấp sau thủ thuật hoặc trong
                một ngày triệu chứng xấu là dự kiến và có thể không đáng lo ngại nếu nó đơn lẻ.
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
                <strong>Xu hướng cho thấy phản ứng với thay đổi</strong>: Lượng ăn có đang cải thiện sau quản lý triệu chứng không? Nó có đang giảm
                khi tình trạng xấu đi không? Xu hướng trả lời những câu hỏi này tốt hơn các ảnh chụp đơn lẻ.
              </li>
            </ul>

            <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Ví dụ Lâm sàng: Diễn giải Xu hướng
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
                Nhóm chăm sóc có thể tập trung vào hỗ trợ cải thiện tiếp tục thay vì thay đổi mạnh mẽ.
              </p>
            </div>

            <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Clinical Example: Concerning Trend
              </p>
              <p className="text-sm text-neutral-700 mb-2">
                Another patient's intake over 7 days:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>Day 1: 1,600 kcal</li>
                <li>Day 2: 1,400 kcal</li>
                <li>Day 3: 1,200 kcal</li>
                <li>Day 4: 1,000 kcal</li>
                <li>Day 5: 900 kcal</li>
                <li>Day 6: 800 kcal</li>
                <li>Day 7: 700 kcal</li>
              </ul>
              <p className="text-sm text-neutral-700 mt-2">
                <strong>Trend view</strong>: This is a <strong>declining trend</strong> without an obvious reason (like surgery).
                Even though no single day is catastrophically low, the consistent downward pattern signals a problem that needs investigation.
                Possible causes: worsening symptoms, medication side effects, depression, or an underlying condition progression.
              </p>
            </div>

            <p className="text-base text-neutral-700 mt-4">
              Clinicians typically look at <strong>3–7 days of intake data</strong> to assess trends, depending on the setting and urgency.
              In critical care, daily review is common. In stable outpatient settings, weekly or monthly reviews may be sufficient.
            </p>
          </div>
        </div>

        <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Thử công cụ đánh giá lượng ăn của chúng tôi:
          </p>
          <Link
            href="/tools/intake-assessment"
            className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Bảng Đánh giá Lượng Ăn (Công cụ 03) →
          </Link>
          <p className="text-xs text-blue-700 mt-2">
            Hoặc <Link href="/knowledge/intake-assessment" className="underline">tìm hiểu thêm về đánh giá lượng ăn</Link>
          </p>
        </div>
      </section>

      {/* 7. Putting it all together: Clinical reasoning, not formulas */}
      <section
        aria-labelledby="reasoning-heading"
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="reasoning-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Tổng hợp Tất cả
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-base leading-relaxed text-neutral-700 sm:text-lg">
          <p>
            Ba bước này—sàng lọc, ước tính nhu cầu, và đánh giá lượng ăn—hoạt động cùng nhau để tiết lộ toàn bộ bức tranh. Nhưng hãy nhớ:
            <strong>đánh giá là về lập luận lâm sàng, không chỉ chạy công thức</strong>. Các con số là công cụ, không phải câu trả lời.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Cách Các Bác sĩ Lâm sàng Tổng hợp Thông tin
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Các bác sĩ lâm sàng có kinh nghiệm không chỉ thu thập dữ liệu—họ <strong>tổng hợp</strong> nó. Họ lấy thông tin từ sàng lọc,
              ước tính nhu cầu, và đánh giá lượng ăn và kết hợp nó với thông tin lâm sàng khác:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
              <li>
                <strong>Tiền sử y tế</strong>: Người này có những tình trạng gì? Các tình trạng đó ảnh hưởng đến nhu cầu dinh dưỡng hoặc khả năng dung nạp như thế nào?
              </li>
              <li>
                <strong>Triệu chứng hiện tại</strong>: Họ có buồn nôn không? Đau? Mệt mỏi? Những điều này ảnh hưởng đến những gì họ thực sự có thể ăn.
              </li>
              <li>
                <strong>Tình trạng chức năng</strong>: Họ có thể tự ăn không? Họ có khó khăn nhai hoặc nuốt không?
              </li>
              <li>
                <strong>Dữ liệu xét nghiệm</strong>: Xét nghiệm cho chúng ta biết gì về chức năng cơ quan, viêm, hoặc tình trạng chất dinh dưỡng?
              </li>
              <li>
                <strong>Bối cảnh xã hội</strong>: Ai giúp với bữa ăn? Sở thích thực phẩm của họ là gì? Các ràng buộc thực tế là gì?
              </li>
              <li>
                <strong>Mục tiêu chăm sóc</strong>: Chúng ta đang cố gắng đạt được gì? Phục hồi? Duy trì? Thoải mái? Chất lượng cuộc sống?
              </li>
            </ul>
            <p className="text-base text-neutral-700 mt-3">
              Tổng hợp có nghĩa là thấy cách tất cả các mảnh này khớp với nhau. Một người có thể có nhu cầu đã tính là 1.800 calo,
              nhưng nếu họ đang chết dần và mục tiêu đã chuyển sang chăm sóc thoải mái, con số đó trở nên ít liên quan hơn. Một người có thể
              đang ăn "đủ" theo tính toán, nhưng nếu họ đang sụt cân và có vết thương chữa lành kém, có điều gì đó không hoạt động.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Vì sao Số liệu Không bao giờ Thay thế Phán đoán
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Số liệu từ công cụ sàng lọc, tính toán nhu cầu, và đánh giá lượng ăn là <strong>cung cấp thông tin, không chỉ đạo</strong>.
              Chúng giúp cấu trúc tư duy, nhưng chúng không đưa ra quyết định cho bạn.
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Ví dụ</strong>: Một phép tính nói ai đó cần 1.800 calo. Nhưng họ buồn nôn, đau, và
                  đang vật lộn với trầm cảm. Con số cho bạn biết những gì họ <em>nên</em> nhận được, nhưng phán đoán lâm sàng cho bạn biết
                  họ không thể dung nạp nhiều như vậy ngay bây giờ. Bạn có thể bắt đầu thấp hơn, giải quyết triệu chứng trước, sau đó tăng dần.
                  Con số hướng dẫn bạn, nhưng phán đoán xác định kế hoạch.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Ví dụ</strong>: Sàng lọc cho thấy nguy cơ thấp, nhưng bạn nhận thấy người đó trông yếu ớt, có vết thương chữa lành kém,
                  và có vẻ yếu hơn lần thăm khám trước. Số sàng lọc nói "nguy cơ thấp," nhưng phán đoán lâm sàng của bạn nói "có điều gì đó
                  không đúng." Bạn điều tra thêm, ngay cả khi con số gợi ý bạn không cần.
                </p>
              </div>
            </div>
            <p className="text-base text-neutral-700 mt-3">
              Số liệu không thể thấy toàn bộ con người. Chúng không thể cảm nhận khi có điều gì đó cảm thấy "sai." Chúng không thể cân nhắc các ưu tiên cạnh tranh.
              Chúng không thể thích ứng khi hoàn cảnh thay đổi. <strong>Đó là lý do phán đoán lâm sàng là không thể thay thế</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Tầm quan trọng của Bối cảnh: Mức độ Nghiêm trọng của Bệnh và Mục tiêu Chăm sóc
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Cùng một con số có ý nghĩa khác nhau trong các bối cảnh khác nhau. Hai người có thể đều cần 1.800 calo, nhưng tình huống của họ
              đòi hỏi các cách tiếp cận hoàn toàn khác nhau:
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-blue-50 border border-blue-200 p-4">
                <h4 className="font-semibold text-sm mb-2 text-blue-900">Mức độ Nghiêm trọng của Bệnh</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Một người bệnh nhẹ có thể dung nạp hỗ trợ dinh dưỡng tích cực, trong khi người bệnh nghiêm trọng có thể cần
                  cách tiếp cận thận trọng hơn. Người có rối loạn chức năng cơ quan (ví dụ: bệnh thận hoặc gan) cần cân nhắc khác
                  với người có chức năng cơ quan nguyên vẹn.
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Suy ngẫm</strong>: Cùng mục tiêu calo và protein có thể phù hợp cho cả hai, nhưng cách bạn đạt được
                  chúng—và nhanh như thế nào—phụ thuộc vào những gì cơ thể họ có thể xử lý.
                </p>
              </div>
              <div className="rounded-md bg-blue-50 border border-blue-200 p-4">
                <h4 className="font-semibold text-sm mb-2 text-blue-900">Mục tiêu Chăm sóc</h4>
                <p className="text-sm text-blue-800 mb-2">
                  Một người đang phục hồi sau phẫu thuật có mục tiêu khác với người có ung thư tiến triển đang nhận chăm sóc giảm nhẹ.
                  Người đang cố gắng tăng sức mạnh có mục tiêu khác với người đang cố gắng duy trì tình trạng hiện tại.
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Suy ngẫm</strong>: Các con số có thể tương tự, nhưng ý nghĩa thay đổi. Đối với người đang phục hồi, đáp ứng
                  nhu cầu hỗ trợ chữa lành. Đối với người ở cuối đời, ép dinh dưỡng có thể gây khó chịu mà không có lợi ích.
                  Bối cảnh xác định liệu các con số có liên quan hay không.
                </p>
              </div>
            </div>
            <p className="text-base text-neutral-700 mt-3">
              Useful questions to consider: <em>"What are we trying to achieve here?"</em> and <em>"What can this person realistically tolerate?"</em>
              The answers help shape how clinicians interpret and act on the numbers.
            </p>
          </div>

          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 my-4">
            <p className="text-sm font-semibold text-neutral-900 mb-2">
              Ví dụ: Tổng hợp tất cả
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <strong>Sàng lọc</strong> cho thấy sụt cân không chủ ý → báo hiệu nguy cơ trung bình đến cao, cần chú ý sớm.
              </li>
              <li>
                <strong>Ước tính nhu cầu</strong> tính ~1.800 calo và 75g protein/ngày (cao hơn bình thường do phục hồi sau phẫu thuật).
              </li>
              <li>
                <strong>Đánh giá lượng ăn</strong> tiết lộ họ chỉ nhận được ~1.000 calo và 30g protein/ngày.
              </li>
              <li>
                <strong>Tổng hợp lâm sàng</strong>: Họ đang ngày 5 sau phẫu thuật, vẫn có một chút buồn nôn, vết thương chữa lành chậm, và họ
                thất vọng với thức ăn bệnh viện. Mục tiêu: hỗ trợ chữa lành và đưa họ về nhà an toàn.
              </li>
              <li>
                <strong>Phán đoán</strong>: Chỉ tăng kê đơn có thể không hiệu quả—họ có thể không ăn nhiều hơn những gì họ không thích. Cân nhắc có thể bao gồm
                giải quyết triệu chứng, làm việc với dịch vụ thực phẩm về sở thích, liên quan gia đình trong việc mang thực phẩm ưa thích, và xem xét bổ sung họ có thể
                thực sự dùng.
              </li>
              <li>
                <strong>Cách tiếp cận nhận thức bối cảnh</strong>: Nhóm chăm sóc có thể xem xét các lựa chọn khác nhau như giải quyết triệu chứng, liên quan gia đình trong lập kế hoạch bữa ăn, cung cấp thực phẩm ưa thích, và đánh giá lại trong 2–3 ngày. Các con số tiết lộ khoảng cách; lập luận lâm sàng giúp xác định cách giải quyết nó.
              </li>
            </ol>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Suy ngẫm: Nghệ thuật và Khoa học của Đánh giá
            </p>
            <p className="text-sm text-blue-800 mb-2">
              Đánh giá vừa là <strong>khoa học</strong> (sử dụng công cụ, tính toán, và phương pháp có cấu trúc) vừa là <strong>nghệ thuật</strong>
              (tổng hợp thông tin, áp dụng phán đoán, thích ứng với bối cảnh). Khoa học cho bạn dữ liệu. Nghệ thuật giúp bạn hiểu
              dữ liệu đó có ý nghĩa gì cho người cụ thể này trong tình huống cụ thể này.
            </p>
            <p className="text-sm text-blue-800">
              Khi bạn phát triển kỹ năng đánh giá của mình, hãy nhớ: số liệu là điểm khởi đầu, không phải điểm đến. Phán đoán lâm sàng,
              sở thích bệnh nhân, và mục tiêu chăm sóc xác định nơi bạn đi từ đó. Tin tưởng quy trình, nhưng cũng tin tưởng phán đoán của bạn
              khi có điều gì đó không phù hợp với các con số.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Common misunderstandings */}
      <section
        aria-labelledby="misunderstandings-heading"
        className="space-y-6"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2
            id="misunderstandings-heading"
            className="text-2xl font-semibold text-neutral-900 sm:text-3xl whitespace-nowrap"
          >
            Hiểu lầm Phổ biến
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Nếu tôi tính nhu cầu, công việc đã xong"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Thực tế</strong>: Tính nhu cầu chỉ là khởi đầu. Đánh giá thường bao gồm đánh giá lượng ăn thực tế, nhận diện khoảng cách,
              xem xét can thiệp, theo dõi phản ứng, và đánh giá lại thường xuyên.
            </p>
            <p className="text-sm text-amber-800">
              Ước tính nhu cầu cung cấp mục tiêu, nhưng đánh giá là quy trình đang diễn ra, không phải một phép tính một lần.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Lượng ăn đầy đủ hôm nay có nghĩa là không có nguy cơ"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Thực tế</strong>: Một ngày tốt không xóa bỏ nguy cơ. Hãy xem xu hướng trong vài ngày. Một người có thể ăn tốt hôm nay
              nhưng đã ăn kém trong nhiều tuần, hoặc họ có thể ăn tốt hôm nay nhưng vật lộn ngày mai.
            </p>
            <p className="text-sm text-amber-800">
              Nguy cơ được đánh giá theo thời gian, không phải bằng một ảnh chụp đơn lẻ. Mô hình quan trọng hơn các ngày riêng lẻ.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Công cụ sàng lọc chẩn đoán suy dinh dưỡng"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Thực tế</strong>: Công cụ sàng lọc xác định nguy cơ, không phải chẩn đoán. Chúng cho bạn biết ai cần đánh giá thêm, không phải ai
              chắc chắn có suy dinh dưỡng.
            </p>
            <p className="text-sm text-amber-800">
              Chẩn đoán đòi hỏi đánh giá toàn diện bao gồm tiền sử chi tiết, khám thực thể, dữ liệu xét nghiệm, và phán đoán lâm sàng.
              Sàng lọc là bộ lọc, không phải công cụ chẩn đoán.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Công thức cho câu trả lời đúng"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Thực tế</strong>: Công thức cung cấp ước tính, không phải yêu cầu chính xác. Các phương pháp khác nhau tạo ra các con số khác nhau, và đó là bình thường.
            </p>
            <p className="text-sm text-amber-800">
              Sử dụng công thức để cấu trúc tư duy, sau đó điều chỉnh dựa trên phán đoán lâm sàng và phản ứng bệnh nhân.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Nếu nó được chỉ định, nó đang được cung cấp"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Thực tế</strong>: Thường có khoảng cách giữa những gì được kê đơn (chỉ định/lập kế hoạch) và những gì thực sự được tiêu thụ.
            </p>
            <p className="text-sm text-amber-800">
              Đánh giá lượng ăn thực tế, không chỉ những gì được chỉ định, là quan trọng. Chỉ dinh dưỡng được cung cấp ảnh hưởng đến kết quả.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Nhiều hơn luôn tốt hơn"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Thực tế</strong>: Cho ăn quá mức có thể có hại, đặc biệt trong bệnh nặng hoặc tình huống tái cho ăn.
            </p>
            <p className="text-sm text-amber-800">
              Mục tiêu là đáp ứng nhu cầu một cách an toàn, không phải tối đa hóa lượng ăn bất kể khả năng dung nạp hoặc bối cảnh lâm sàng.
            </p>
          </div>
        </div>
      </section>

      {/* 9. Safety & limitations */}
      <section
        aria-labelledby="safety-heading"
        className="space-y-6 rounded-lg border border-amber-200 bg-amber-50/30 p-6 sm:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
          <h2
            id="safety-heading"
            className="text-2xl font-semibold text-amber-900 sm:text-3xl whitespace-nowrap"
          >
            An toàn & Giới hạn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-amber-300 to-transparent"></div>
        </div>
        <div className="space-y-6">
          <div className="rounded-md bg-red-50 border border-red-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-red-900">
              ⚠️ Lưu ý Quan trọng
            </h3>
            <p className="text-sm text-red-800 mb-2">
              <strong>Trang web này và các công cụ của nó chỉ dùng cho mục đích giáo dục.</strong> Chúng không cung cấp tư vấn y tế, chẩn đoán, hoặc điều trị.
              Chúng không tạo mối quan hệ bác sĩ–bệnh nhân. Chúng không được sử dụng để ra quyết định lâm sàng, kê đơn chế độ ăn hoặc thức ăn,
              hoặc đưa ra quyết định điều trị.
            </p>
            <p className="text-sm text-red-800">
              Nếu bạn có mối quan tâm về tình trạng dinh dưỡng hoặc sức khỏe, hãy tham khảo với nhà cung cấp y tế có trình độ hoặc chuyên gia dinh dưỡng đã đăng ký
              để có đánh giá lâm sàng cá nhân hóa.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Công cụ Hỗ trợ Hiểu biết, Không phải Quyết định
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Các công cụ trên trang web này được thiết kế để <strong>hỗ trợ học tập và hiểu biết</strong> các khái niệm đánh giá dinh dưỡng lâm sàng.
              Chúng giúp bạn thực hành quá trình tư duy và xem cách các yếu tố khác nhau ảnh hưởng đến ước tính và đánh giá.
            </p>
            <p className="text-sm text-amber-800">
              Tuy nhiên, các công cụ này <strong>không thể và không nên được sử dụng để đưa ra quyết định lâm sàng</strong>. Đánh giá lâm sàng thực sự đòi hỏi
              đánh giá toàn diện, phán đoán chuyên nghiệp, và xem xét toàn bộ bối cảnh lâm sàng—không có điều nào trong số này có thể được nắm bắt
              chỉ bởi các công cụ trực tuyến.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Đánh giá Lâm sàng Là Đa ngành
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Đánh giá dinh dưỡng hiệu quả trong thực hành lâm sàng liên quan đến <strong>nhóm đa ngành</strong>. Các thành viên nhóm khác nhau
              đóng góp các quan điểm khác nhau:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li><strong>Chuyên gia Dinh dưỡng</strong> cung cấp chuyên môn dinh dưỡng chuyên biệt và đánh giá toàn diện</li>
              <li><strong>Bác sĩ</strong> đóng góp chẩn đoán y tế, kế hoạch điều trị, và điều phối chăm sóc tổng thể</li>
              <li><strong>Điều dưỡng</strong> quan sát lượng ăn hàng ngày, theo dõi triệu chứng, và thực hiện kế hoạch chăm sóc</li>
              <li><strong>Dược sĩ</strong> xem xét thuốc có thể ảnh hưởng đến dinh dưỡng hoặc cảm giác ngon miệng</li>
              <li><strong>Chuyên gia Ngôn ngữ Trị liệu</strong> đánh giá chức năng nuốt khi liên quan</li>
              <li><strong>Nhân viên Xã hội</strong> giải quyết rào cản tiếp cận thực phẩm và hỗ trợ xã hội</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Công cụ trực tuyến không thể sao chép cách tiếp cận hợp tác, đa ngành này. Chúng cung cấp ví dụ giáo dục, không phải
              chăm sóc lâm sàng toàn diện.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Đánh giá lại Là Cần thiết
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Đánh giá dinh dưỡng <strong>không phải là sự kiện một lần</strong>. Nó là quy trình đang diễn ra đòi hỏi đánh giá lại thường xuyên:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>Khi tình trạng lâm sàng thay đổi (cải thiện hoặc xấu đi)</li>
              <li>Khi can thiệp được bắt đầu hoặc điều chỉnh</li>
              <li>Khi mục tiêu chăm sóc thay đổi</li>
              <li>Theo lịch trình thường xuyên (ví dụ: hàng tuần trong bệnh viện, hàng tháng trong môi trường ngoại trú)</li>
              <li>Khi theo dõi cho thấy mô hình hoặc mối quan tâm bất ngờ</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Công cụ trực tuyến cung cấp ảnh chụp tại một thời điểm. Chúng không thể thay thế theo dõi liên tục và đánh giá lại mà
              chăm sóc lâm sàng thực sự đòi hỏi.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Giới hạn của Công cụ Trực tuyến
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Công cụ trực tuyến có giới hạn đáng kể:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>Chúng không thể thực hiện khám thực thể hoặc quan sát dấu hiệu lâm sàng</li>
              <li>Chúng không thể truy cập hoặc diễn giải dữ liệu xét nghiệm trong ngữ cảnh</li>
              <li>Chúng không thể đánh giá toàn bộ tiền sử y tế và tình huống lâm sàng hiện tại</li>
              <li>Chúng không thể áp dụng phán đoán chuyên nghiệp hoặc thích ứng với hoàn cảnh độc đáo</li>
              <li>Chúng không thể cung cấp theo dõi hoặc theo dõi tiếp tục</li>
              <li>Chúng không thể phối hợp với nhóm đa ngành</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Đánh giá lâm sàng toàn diện đòi hỏi tất cả các yếu tố này. Sử dụng công cụ trực tuyến để <strong>học và thực hành</strong>,
              không phải để thay thế đánh giá lâm sàng chuyên nghiệp.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Khi nào Tìm kiếm Hỗ trợ Chuyên nghiệp
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Tham khảo với nhà cung cấp y tế có trình độ hoặc chuyên gia dinh dưỡng đã đăng ký nếu:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>Sàng lọc gợi ý nguy cơ dinh dưỡng trung bình hoặc cao</li>
              <li>Bạn có mối quan tâm về tình trạng dinh dưỡng hoặc mô hình ăn uống</li>
              <li>Có thay đổi không giải thích được về cân nặng, cảm giác ngon miệng, hoặc lượng ăn</li>
              <li>Bạn cần khuyến nghị dinh dưỡng cá nhân hóa</li>
              <li>Bạn đang quản lý tình trạng y tế ảnh hưởng đến dinh dưỡng</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Đánh giá lâm sàng chuyên nghiệp cung cấp chăm sóc cá nhân hóa mà công cụ trực tuyến không thể.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Tình huống Cấp cứu
            </h3>
            <p className="text-sm text-amber-800">
              <strong>Trang web này không dùng cho chăm sóc cấp cứu.</strong> Nếu bạn có cấp cứu y tế, hãy tìm kiếm chú ý y tế chuyên nghiệp ngay lập tức.
              Không sử dụng trang web này hoặc các công cụ của nó trong tình huống cấp cứu.
            </p>
          </div>
        </div>
      </section>

      {/* 10. Call-to-action: Explore the tools */}
      <section
        aria-labelledby="cta-heading"
        className="space-y-6 rounded-lg border-2 border-blue-300 bg-blue-50/50 p-6 sm:p-8"
      >
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
          <h2
            id="cta-heading"
            className="text-2xl font-semibold text-blue-900 sm:text-3xl whitespace-nowrap"
          >
            Khám phá Các Công cụ
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
        </div>
        <p className="text-base text-blue-800">
          Mỗi bước trong quy trình đánh giá có một công cụ tương tác tương ứng. Các công cụ này giúp bạn thực hành quá trình tư duy
          và xem cách các khái niệm bạn đã học áp dụng trong thực hành.
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Mới với Đánh giá Dinh dưỡng Lâm sàng?
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Nếu bạn mới bắt đầu, chúng tôi khuyến nghị bắt đầu với <strong>Công cụ 01: Sàng lọc Suy Dinh dưỡng</strong>. Công cụ này
              giới thiệu bạn với bước đầu tiên của đánh giá và giúp bạn hiểu cách sàng lọc hoạt động trong thực hành.
            </p>
            <Link
              href="/tools/malnutrition-screening"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Bắt đầu với Công cụ 01: Sàng lọc Suy Dinh dưỡng →
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-blue-900">
              Sử dụng Các Công cụ Theo Trình tự
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Các công cụ được thiết kế để hoạt động cùng nhau, theo trình tự đánh giá bạn đã học. Sử dụng chúng theo thứ tự giúp bạn
              thấy cách mỗi bước xây dựng trên bước trước:
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-md bg-white border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    1
                  </span>
                  <h4 className="font-semibold text-sm text-blue-900">Sàng lọc</h4>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Kiểm tra nhanh nguy cơ dinh dưỡng
                </p>
                <Link
                  href="/tools/malnutrition-screening"
                  className="inline-flex items-center text-xs font-medium text-blue-700 hover:text-blue-900 underline"
                >
                  Công cụ 01 →
                </Link>
              </div>
              <div className="rounded-md bg-white border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    2
                  </span>
                  <h4 className="font-semibold text-sm text-blue-900">Nhu cầu</h4>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Ước tính nhu cầu năng lượng & protein
                </p>
                <Link
                  href="/tools/energy-protein-calculator"
                  className="inline-flex items-center text-xs font-medium text-blue-700 hover:text-blue-900 underline"
                >
                  Công cụ 02 →
                </Link>
              </div>
              <div className="rounded-md bg-white border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    3
                  </span>
                  <h4 className="font-semibold text-sm text-blue-900">Lượng ăn</h4>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Đánh giá lượng ăn thực tế vs. nhu cầu
                </p>
                <Link
                  href="/tools/intake-assessment"
                  className="inline-flex items-center text-xs font-medium text-blue-700 hover:text-blue-900 underline"
                >
                  Công cụ 03 →
                </Link>
              </div>
            </div>
            <p className="text-sm text-blue-800 mt-3 italic">
              Bạn có thể sử dụng các công cụ theo bất kỳ thứ tự nào, nhưng tuân theo trình tự giúp củng cố luồng logic của đánh giá.
            </p>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Sắp Ra mắt: Học tập Dựa trên Ca bệnh
            </h3>
            <p className="text-sm text-blue-800">
              Chúng tôi đang làm việc trên các mô-đun học tập dựa trên ca bệnh sẽ cho phép bạn thực hành quy trình đánh giá đầy đủ với các tình huống bệnh nhân thực tế.
              Những điều này sẽ giúp bạn áp dụng tất cả những gì bạn đã học theo cách tích hợp hơn. Hãy quay lại sớm!
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-md border border-blue-200">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            Lời Nhắc nhẹ nhàng
          </p>
          <p className="text-sm text-blue-800">
            Hãy dành thời gian khám phá các công cụ này. Không có gấp gáp, và không có câu trả lời "đúng" hoặc "sai"—đây là công cụ học tập,
            không phải bài kiểm tra. Sử dụng chúng để thực hành tư duy qua các tình huống đánh giá và để đào sâu hiểu biết của bạn về các khái niệm.
            Nếu bạn có câu hỏi hoặc muốn thảo luận những gì bạn đang học, hãy cân nhắc nói chuyện với người cố vấn, đồng nghiệp, hoặc người hướng dẫn.
          </p>
        </div>
      </section>
    </main>
  );
}

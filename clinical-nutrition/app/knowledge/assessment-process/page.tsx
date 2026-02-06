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
              Prescribed vs. Delivered: The Gap Between Plan and Reality
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              In clinical settings, there's often a difference between:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
              <li>
                <strong>Prescribed nutrition</strong>: What was ordered, planned, or recommended (e.g., "1,800 kcal/day via oral diet + supplements"
                or "tube feed at 60 mL/hour providing 1,500 kcal/day").
              </li>
              <li>
                <strong>Delivered nutrition</strong>: What the person actually consumed or received (e.g., they ate half their meals, refused supplements,
                or the tube feed was held for 8 hours due to procedures).
              </li>
            </ul>
            <p className="text-base text-neutral-700 mt-2">
              This gap matters because <strong>only delivered nutrition affects health outcomes</strong>. A perfect plan that isn't followed doesn't help.
            </p>

            <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Clinical Example 1: Hospital Meal Service
              </p>
              <p className="text-sm text-neutral-700 mb-2">
                A patient is prescribed a "regular diet" estimated to provide ~1,800 kcal/day. However:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>They're nauseous and only eat 30% of each meal.</li>
                <li>Meals are delayed due to tests, so they miss lunch entirely.</li>
                <li>They don't like the food choices and skip several items.</li>
                <li>Family brings snacks, but these aren't documented in the chart.</li>
              </ul>
              <p className="text-sm text-neutral-700 mt-2">
                <strong>Result</strong>: Prescribed ~1,800 kcal/day, but actual delivered intake may be closer to 800–1,000 kcal/day.
                Without assessing actual intake, the care team might assume the patient is meeting needs when they're not.
              </p>
            </div>

            <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Clinical Example 2: Enteral (Tube) Feeding
              </p>
              <p className="text-sm text-neutral-700 mb-2">
                A patient has a nasogastric tube with orders for "continuous feed at 80 mL/hour, providing 1,600 kcal/day." However:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>The feed is held for 4 hours before and after a procedure (8 hours total).</li>
                <li>The pump malfunctions overnight, and no one notices until morning.</li>
                <li>The patient experiences high gastric residuals, so the rate is reduced to 40 mL/hour for tolerance.</li>
                <li>Flushes with water aren't counted toward nutrition, but they do add volume.</li>
              </ul>
              <p className="text-sm text-neutral-700 mt-2">
                <strong>Result</strong>: Prescribed 1,600 kcal/day, but actual delivered may be closer to 800–1,000 kcal/day due to holds,
                rate reductions, and interruptions. Regular intake assessment helps identify these gaps early.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Why Intake Often Falls Short in Practice
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Understanding <strong>why</strong> intake falls short helps clinicians address root causes, not just symptoms. Common reasons include:
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Symptoms and Side Effects</h4>
                <p className="text-sm text-neutral-700">
                  Nausea, vomiting, early satiety, pain, fatigue, or altered taste can make eating unpleasant or impossible.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Medical Procedures and Scheduling</h4>
                <p className="text-sm text-neutral-700">
                  Fasting orders, procedure delays, meal timing conflicts, or multiple appointments during usual meal times.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Food Access and Preferences</h4>
                <p className="text-sm text-neutral-700">
                  Limited options, unappealing textures, foods that don't match cultural preferences, or dietary restrictions that limit palatable choices.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">System and Documentation Issues</h4>
                <p className="text-sm text-neutral-700">
                  Incomplete documentation (snacks, family-provided food not recorded), miscommunication, staffing constraints, or equipment problems.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <h4 className="font-semibold text-sm mb-2">Psychological and Social Factors</h4>
                <p className="text-sm text-neutral-700">
                  Depression, anxiety, social isolation, loss of independence, or fear/misconceptions about eating.
                </p>
              </div>
            </div>
            <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-3">
              <p className="text-sm font-semibold text-blue-900 mb-1">
                Clinical Insight:
              </p>
              <p className="text-sm text-blue-800">
                When intake falls short, it's rarely just "the patient won't eat." There's usually a <strong>reason</strong>—symptoms, procedures,
                system issues, or psychological factors. Identifying and addressing these reasons is more effective than simply increasing the prescription
                or adding more supplements that may also go uneaten.
              </p>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              The Importance of Trend Over Single-Day Data
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              A single day of intake data can be misleading. Clinicians focus on <strong>patterns over time</strong> because:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
              <li>
                <strong>Day-to-day variation is normal</strong>: People don't eat the same amount every day. A low day after a procedure or during
                a bad symptom day is expected and may not be concerning if it's isolated.
              </li>
              <li>
                <strong>Single days can be outliers</strong>: One day might be unusually high (special occasion, family visit) or unusually low
                (procedure, severe symptoms). The trend shows the real pattern.
              </li>
              <li>
                <strong>Small deficits accumulate</strong>: Missing 200–300 kcal/day might not seem like much, but over a week that's 1,400–2,100 kcal,
                which can contribute to weight loss and poor outcomes.
              </li>
              <li>
                <strong>Trends show response to changes</strong>: Is intake improving after symptom management? Is it declining
                as a condition worsens? Trends answer these questions better than single snapshots.
              </li>
            </ul>

            <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4 mt-4">
              <p className="text-sm font-semibold text-neutral-900 mb-2">
                Clinical Example: Interpreting Trends
              </p>
              <p className="text-sm text-neutral-700 mb-2">
                A hospitalized patient's daily intake over 7 days:
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700">
                <li>Day 1: 1,200 kcal (admission day, many tests)</li>
                <li>Day 2: 1,800 kcal (good day)</li>
                <li>Day 3: 600 kcal (surgery, NPO most of day)</li>
                <li>Day 4: 1,000 kcal (post-op, some nausea)</li>
                <li>Day 5: 1,400 kcal (improving)</li>
                <li>Day 6: 1,600 kcal (continuing to improve)</li>
                <li>Day 7: 1,800 kcal (back to baseline)</li>
              </ul>
              <p className="text-sm text-neutral-700 mt-2">
                <strong>Single-day view</strong>: Day 3 looks alarming (only 600 kcal), but it's expected post-surgery.
              </p>
              <p className="text-sm text-neutral-700">
                <strong>Trend view</strong>: The overall pattern shows recovery—intake dropped around surgery but is trending upward.
                Average over 7 days is ~1,340 kcal/day. If estimated needs are 1,600–1,800 kcal/day, there's still a gap, but the trend is positive.
                The care team might focus on supporting continued improvement rather than making drastic changes.
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
            These three steps—screening, needs estimation, and intake assessment—work together to reveal the full picture. But remember:
            <strong>assessment is about clinical reasoning, not just running formulas</strong>. The numbers are tools, not answers.
          </p>
        </div>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              How Clinicians Synthesize Information
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Experienced clinicians don't just collect data—they <strong>synthesize</strong> it. They take information from screening,
              needs estimation, and intake assessment and weave it together with other clinical information:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
              <li>
                <strong>Medical history</strong>: What conditions does this person have? How do those conditions affect nutrition needs or tolerance?
              </li>
              <li>
                <strong>Current symptoms</strong>: Are they nauseous? In pain? Fatigued? These affect what they can actually eat.
              </li>
              <li>
                <strong>Functional status</strong>: Can they feed themselves? Do they have difficulty chewing or swallowing?
              </li>
              <li>
                <strong>Laboratory data</strong>: What do labs tell us about organ function, inflammation, or nutrient status?
              </li>
              <li>
                <strong>Social context</strong>: Who helps with meals? What are their food preferences? What are practical constraints?
              </li>
              <li>
                <strong>Goals of care</strong>: What are we trying to achieve? Recovery? Maintenance? Comfort? Quality of life?
              </li>
            </ul>
            <p className="text-base text-neutral-700 mt-3">
              Synthesis means seeing how all these pieces fit together. A person might have a calculated need of 1,800 calories,
              but if they're actively dying and goals have shifted to comfort care, that number becomes less relevant. A person might
              be eating "enough" according to calculations, but if they're losing weight and have poor wound healing, something isn't working.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              Why Numbers Never Replace Judgment
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              Numbers from screening tools, needs calculations, and intake assessments are <strong>informative, not prescriptive</strong>.
              They help structure thinking, but they don't make decisions for you.
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Example</strong>: A calculation says someone needs 1,800 calories. But they're nauseous, in pain, and
                  struggling with depression. The number tells you what they <em>should</em> get, but clinical judgment tells you
                  they can't tolerate that much right now. You might start lower, address symptoms first, then gradually increase.
                  The number guides you, but judgment determines the plan.
                </p>
              </div>
              <div className="rounded-md bg-neutral-50 border border-neutral-200 p-4">
                <p className="text-sm text-neutral-700">
                  <strong>Example</strong>: Screening shows low risk, but you notice the person looks frail, has poor wound healing,
                  and seems weaker than last visit. The screening number says "low risk," but your clinical judgment says "something's
                  not right." You investigate further, even though the number suggests you don't need to.
                </p>
              </div>
            </div>
            <p className="text-base text-neutral-700 mt-3">
              Numbers can't see the whole person. They can't sense when something feels "off." They can't weigh competing priorities.
              They can't adapt when circumstances change. <strong>That's why clinical judgment is irreplaceable</strong>.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-neutral-900">
              The Importance of Context: Illness Severity and Goals of Care
            </h3>
            <p className="text-base text-neutral-700 mb-2">
              The same numbers mean different things in different contexts. Two people might both need 1,800 calories, but their
              situations require completely different approaches:
            </p>
            <div className="space-y-3 mt-3">
              <div className="rounded-md bg-blue-50 border border-blue-200 p-4">
                <h4 className="font-semibold text-sm mb-2 text-blue-900">Illness Severity</h4>
                <p className="text-sm text-blue-800 mb-2">
                  A person with mild illness might tolerate aggressive nutrition support, while someone with severe illness might need
                  a more cautious approach. Someone with organ dysfunction (e.g., kidney or liver disease) needs different considerations
                  than someone with intact organ function.
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Reflection</strong>: The same calorie and protein targets might be appropriate for both, but how you achieve
                  them—and how quickly—depends on what their body can handle.
                </p>
              </div>
              <div className="rounded-md bg-blue-50 border border-blue-200 p-4">
                <h4 className="font-semibold text-sm mb-2 text-blue-900">Goals of Care</h4>
                <p className="text-sm text-blue-800 mb-2">
                  A person recovering from surgery has different goals than someone with advanced cancer receiving palliative care.
                  Someone trying to gain strength has different goals than someone trying to maintain current status.
                </p>
                <p className="text-sm text-blue-800">
                  <strong>Reflection</strong>: The numbers might be similar, but the meaning changes. For someone in recovery, meeting
                  needs supports healing. For someone at end of life, forcing nutrition might cause discomfort without benefit.
                  Context determines whether the numbers are even relevant.
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
              Example: Putting it all together
            </p>
            <ol className="list-decimal space-y-2 pl-5 text-sm text-neutral-700">
              <li>
                <strong>Screening</strong> shows unintentional weight loss → signals moderate-to-high risk, needs attention soon.
              </li>
              <li>
                <strong>Needs estimation</strong> calculates ~1,800 calories and 75g protein/day (higher than usual due to recovery from surgery).
              </li>
              <li>
                <strong>Intake assessment</strong> reveals they're only getting ~1,000 calories and 30g protein/day.
              </li>
              <li>
                <strong>Clinical synthesis</strong>: They're post-op day 5, still having some nausea, wound healing is slow, and they're
                frustrated with hospital food. Goals: support healing and get them home safely.
              </li>
              <li>
                <strong>Judgment</strong>: Simply increasing the prescription may not work—they may not eat more of what they don't like. Considerations might include
                addressing symptoms, working with food service on preferences, involving family in bringing preferred foods, and considering supplements they might
                actually take.
              </li>
              <li>
                <strong>Context-aware approach</strong>: The care team might consider various options such as addressing symptoms, involving family in meal planning, providing preferred foods, and reassessing in 2–3 days. The numbers reveal a gap; clinical reasoning helps determine how to address it.
              </li>
            </ol>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-4 mt-4">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              Reflection: The Art and Science of Assessment
            </p>
            <p className="text-sm text-blue-800 mb-2">
              Assessment is both <strong>science</strong> (using tools, calculations, and structured methods) and <strong>art</strong>
              (synthesizing information, applying judgment, adapting to context). The science gives you data. The art helps you understand
              what that data means for this specific person in this specific situation.
            </p>
            <p className="text-sm text-blue-800">
              As you develop your assessment skills, remember: numbers are starting points, not destinations. Clinical judgment,
              patient preferences, and goals of care determine where you go from there. Trust the process, but also trust your judgment
              when something doesn't fit the numbers.
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
              ❌ "If I calculate the needs, the job is done"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Reality</strong>: Calculating needs is just the beginning. Assessment typically involves evaluating actual intake, identifying gaps,
              considering interventions, monitoring response, and reassessing regularly.
            </p>
            <p className="text-sm text-amber-800">
              Needs estimation provides a target, but assessment is an ongoing process, not a one-time calculation.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Adequate intake today means no risk"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Reality</strong>: One good day doesn't erase risk. Look at trends over several days. A person might eat well today
              but have been eating poorly for weeks, or they might eat well today but struggle tomorrow.
            </p>
            <p className="text-sm text-amber-800">
              Risk is assessed over time, not by a single snapshot. Patterns matter more than isolated days.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "Screening tools diagnose malnutrition"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Reality</strong>: Screening tools identify risk, not diagnosis. They tell you who needs further assessment, not who
              definitely has malnutrition.
            </p>
            <p className="text-sm text-amber-800">
              Diagnosis requires comprehensive assessment including detailed history, physical examination, laboratory data, and clinical judgment.
              Screening is a filter, not a diagnostic tool.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "The formula gives the correct answer"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Reality</strong>: Formulas provide estimates, not exact requirements. Different methods produce different numbers, and that's normal.
            </p>
            <p className="text-sm text-amber-800">
              Use formulas to structure thinking, then adjust based on clinical judgment and patient response.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "If it's ordered, it's being delivered"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Reality</strong>: There's often a gap between what's prescribed (ordered/planned) and what's actually consumed.
            </p>
            <p className="text-sm text-amber-800">
              Assessing actual intake, not just what was ordered, is important. Only delivered nutrition affects outcomes.
            </p>
          </div>

          <div className="rounded-md bg-amber-50 border border-amber-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              ❌ "More is always better"
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              <strong>Reality</strong>: Overfeeding can be harmful, especially in critical illness or refeeding situations.
            </p>
            <p className="text-sm text-amber-800">
              The goal is meeting needs safely, not maximizing intake regardless of tolerance or clinical context.
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
              ⚠️ Important Disclaimer
            </h3>
            <p className="text-sm text-red-800 mb-2">
              <strong>This site and its tools are for educational purposes only.</strong> They do not provide medical advice, diagnosis, or treatment.
              They do not create a clinician–patient relationship. They must not be used for clinical decision-making, prescribing diets or feeds,
              or making treatment decisions.
            </p>
            <p className="text-sm text-red-800">
              If you have concerns about nutrition status or health, consult with a qualified healthcare provider or registered dietitian
              for a personalized, clinical assessment.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Tools Support Understanding, Not Decisions
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              The tools on this site are designed to <strong>support learning and understanding</strong> of clinical nutrition assessment concepts.
              They help you practice the thinking process and see how different factors influence estimates and assessments.
            </p>
            <p className="text-sm text-amber-800">
              However, these tools <strong>cannot and should not be used to make clinical decisions</strong>. Real clinical assessment requires
              comprehensive evaluation, professional judgment, and consideration of the full clinical context—none of which can be captured
              by online tools alone.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Clinical Assessment Is Multidisciplinary
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Effective nutrition assessment in clinical practice involves a <strong>multidisciplinary team</strong>. Different team members
              contribute different perspectives:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li><strong>Dietitians</strong> provide specialized nutrition expertise and comprehensive assessment</li>
              <li><strong>Physicians</strong> contribute medical diagnosis, treatment plans, and overall care coordination</li>
              <li><strong>Nurses</strong> observe daily intake, monitor symptoms, and implement care plans</li>
              <li><strong>Pharmacists</strong> review medications that might affect nutrition or appetite</li>
              <li><strong>Speech therapists</strong> assess swallowing function when relevant</li>
              <li><strong>Social workers</strong> address barriers to food access and social support</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Online tools cannot replicate this collaborative, multidisciplinary approach. They provide educational examples, not comprehensive
              clinical care.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Reassessment Is Essential
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Nutrition assessment is <strong>not a one-time event</strong>. It's an ongoing process that requires regular reassessment:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>When clinical status changes (improvement or deterioration)</li>
              <li>When interventions are started or modified</li>
              <li>When goals of care shift</li>
              <li>On a regular schedule (e.g., weekly in hospital, monthly in outpatient settings)</li>
              <li>When monitoring shows unexpected patterns or concerns</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Online tools provide snapshots at a point in time. They cannot replace the continuous monitoring and reassessment that real
              clinical care requires.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Limitations of Online Tools
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Online tools have significant limitations:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>They cannot perform physical examination or observe clinical signs</li>
              <li>They cannot access or interpret laboratory data in context</li>
              <li>They cannot assess the full medical history and current clinical situation</li>
              <li>They cannot apply professional judgment or adapt to unique circumstances</li>
              <li>They cannot provide ongoing monitoring or follow-up</li>
              <li>They cannot coordinate with a multidisciplinary team</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Comprehensive clinical assessment requires all of these elements. Use online tools to <strong>learn and practice</strong>,
              not to replace professional clinical evaluation.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              When to Seek Professional Help
            </h3>
            <p className="text-sm text-amber-800 mb-2">
              Consult with a qualified healthcare provider or registered dietitian if:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-amber-800">
              <li>Screening suggests moderate or high nutrition risk</li>
              <li>You have concerns about nutrition status or eating patterns</li>
              <li>There are unexplained changes in weight, appetite, or intake</li>
              <li>You need personalized nutrition recommendations</li>
              <li>You're managing a medical condition that affects nutrition</li>
            </ul>
            <p className="text-sm text-amber-800 mt-2">
              Professional clinical assessment provides personalized care that online tools cannot.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-2 text-amber-900">
              Emergency Situations
            </h3>
            <p className="text-sm text-amber-800">
              <strong>This site is not for emergency care.</strong> If you have a medical emergency, seek immediate professional medical attention.
              Do not use this site or its tools in emergency situations.
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
          Each step in the assessment process has a corresponding interactive tool. These tools help you practice the thinking process
          and see how the concepts you've learned apply in practice.
        </p>

        <div className="mt-4 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              New to Clinical Nutrition Assessment?
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              If you're just getting started, we recommend beginning with <strong>Tool 01: Malnutrition Screening</strong>. This tool
              introduces you to the first step of assessment and helps you understand how screening works in practice.
            </p>
            <Link
              href="/tools/malnutrition-screening"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Start with Tool 01: Malnutrition Screening →
            </Link>
          </div>

          <div>
            <h3 className="font-semibold text-base mb-3 text-blue-900">
              Using the Tools Sequentially
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              The tools are designed to work together, following the assessment sequence you've learned. Using them in order helps you
              see how each step builds on the previous one:
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-md bg-white border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    1
                  </span>
                  <h4 className="font-semibold text-sm text-blue-900">Screening</h4>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Quick check for nutrition risk
                </p>
                <Link
                  href="/tools/malnutrition-screening"
                  className="inline-flex items-center text-xs font-medium text-blue-700 hover:text-blue-900 underline"
                >
                  Tool 01 →
                </Link>
              </div>
              <div className="rounded-md bg-white border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    2
                  </span>
                  <h4 className="font-semibold text-sm text-blue-900">Needs</h4>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Estimate energy & protein requirements
                </p>
                <Link
                  href="/tools/energy-protein-calculator"
                  className="inline-flex items-center text-xs font-medium text-blue-700 hover:text-blue-900 underline"
                >
                  Tool 02 →
                </Link>
              </div>
              <div className="rounded-md bg-white border border-blue-200 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-semibold">
                    3
                  </span>
                  <h4 className="font-semibold text-sm text-blue-900">Intake</h4>
                </div>
                <p className="text-xs text-blue-700 mb-2">
                  Assess actual intake vs. needs
                </p>
                <Link
                  href="/tools/intake-assessment"
                  className="inline-flex items-center text-xs font-medium text-blue-700 hover:text-blue-900 underline"
                >
                  Tool 03 →
                </Link>
              </div>
            </div>
            <p className="text-sm text-blue-800 mt-3 italic">
              You can use the tools in any order, but following the sequence helps reinforce the logical flow of assessment.
            </p>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Coming Soon: Case-Based Learning
            </h3>
            <p className="text-sm text-blue-800">
              We're working on case-based learning modules that will let you practice the full assessment process with realistic patient scenarios.
              These will help you apply everything you've learned in a more integrated way. Check back soon!
            </p>
          </div>
        </div>

        <div className="mt-6 p-4 bg-white rounded-md border border-blue-200">
          <p className="text-sm font-semibold text-blue-900 mb-2">
            A Gentle Reminder
          </p>
          <p className="text-sm text-blue-800">
            Take your time exploring these tools. There's no rush, and there are no "right" or "wrong" answers—these are learning tools,
            not tests. Use them to practice thinking through assessment scenarios and to deepen your understanding of the concepts.
            If you have questions or want to discuss what you're learning, consider talking with a mentor, colleague, or instructor.
          </p>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { SectionHeading } from "../nutrition-assessment-overview/components/SectionHeading";
import { ContentSection } from "../nutrition-assessment-overview/components/ContentSection";
import { EducationalNote } from "../nutrition-assessment-overview/components/EducationalNote";
import { ContentBlock } from "../nutrition-assessment-overview/components/ContentBlock";

/**
 * Why There's No Universal Number for Nutrition Needs
 * 
 * Educational Intent:
 * This page explains why clinical nutrition assessment does not rely on
 * a single universal number for energy or protein needs. It helps readers
 * understand the complexity of nutrition needs and why ranges and clinical
 * judgment are essential.
 * 
 * Target Audience:
 * - Clinicians early in practice (residents, early-career physicians)
 * - Nurses involved in nutrition care (screening, monitoring, implementation)
 * - Medical students learning about clinical nutrition
 * - Educated readers interested in understanding clinical nutrition concepts
 * 
 * Educational Approach:
 * - Explains concepts clearly for learners at different stages
 * - Uses accessible language while maintaining clinical accuracy
 * - Provides practical examples relevant to clinical practice
 * - Explains concepts without providing treatment recommendations
 * - Uses descriptive rather than imperative language
 * - Emphasizes clinical reasoning over formulas
 * - Clarifies that this is educational content, not a clinical guideline
 */
export default function WhyNoUniversalNumberPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-10 sm:space-y-12 px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
      {/* 
        1. Title & Opening Question
        Educational Intent: Introduces the central question that many
        clinicians, nurses, and students ask, setting up the exploration
        of why there's no simple answer. Uses a conversational, inviting tone
        to draw readers in without judgment.
      */}
      <header className="space-y-4 sm:space-y-5 border-b border-neutral-200 pb-6 sm:pb-8">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight text-neutral-900">
          Tại Sao Không Có Con Số Phổ Quát Cho Nhu Cầu Dinh Dưỡng
        </h1>
        <ContentBlock>
          <p className="text-xl font-medium text-neutral-800 mb-4">
            "Tại sao chúng ta không thể chỉ tính toán con số và làm theo nó?"
          </p>
          <p>
            Đó là câu hỏi nhiều người trong chúng ta đã hỏi—dù bạn là bác sĩ lâm sàng mới vào nghề, y tá tham gia
            chăm sóc dinh dưỡng, sinh viên y khoa đang học, hoặc ai đó tò mò về cách dinh dưỡng lâm sàng
            thực sự hoạt động. Có vẻ như nó nên đơn giản: nhập cân nặng, tuổi và tình trạng của bệnh nhân,
            nhận câu trả lời, và làm theo nó.
          </p>
          <p>
            Và thành thật mà nói, điều đó sẽ dễ hơn. Một con số duy nhất, rõ ràng sẽ làm cho việc lập kế hoạch đơn giản hơn và quyết định
            thẳng thắn hơn. Nhưng đây là điều: <strong>dinh dưỡng lâm sàng không hoạt động theo cách đó</strong>.
            Không có con số phổ quát nào áp dụng cho tất cả mọi người, hoặc thậm chí cho cùng một người trong các tình huống khác nhau.
          </p>
          <p>
            Trang này khám phá tại sao lại như vậy—và tại sao hiểu điều này thực sự giúp chúng ta cung cấp tốt hơn, an toàn hơn
            chăm sóc dinh dưỡng. Chúng ta sẽ xem tại sao bệnh nhân có cùng cân nặng có thể có nhu cầu khác nhau, tại sao nhu cầu
            thay đổi theo thời gian, công thức thực sự làm gì (và không làm gì), và các bác sĩ lâm sàng có kinh nghiệm thực sự
            tiếp cận điều này trong thực hành như thế nào.
          </p>
          <p className="text-base text-neutral-600 italic border-l-4 border-blue-200 pl-4 py-2 bg-blue-50/50 rounded-r">
            Nội dung này được thiết kế cho mục đích giáo dục để giúp bạn hiểu ước tính nhu cầu dinh dưỡng
            và giảm sự tự tin quá mức vào số liệu. Nó không cung cấp khuyến nghị điều trị hoặc thay thế
            hướng dẫn lâm sàng hoặc đào tạo chuyên nghiệp. Nếu bạn mới làm quen với dinh dưỡng lâm sàng, hãy dành thời gian với những
            khái niệm này—chúng tạo nền tảng cho chăm sóc dinh dưỡng an toàn và hiệu quả.
          </p>
        </ContentBlock>
      </header>

      {/* 
        2. The Appeal of "One Correct Number"
        Educational Intent: Acknowledges why people want a simple answer
        and validates that desire, while explaining why it doesn't work
        in clinical nutrition. Explains the psychological appeal of clear
        formulas, single targets, and exact-looking results.
      */}
      <ContentSection ariaLabelledBy="appeal-heading">
        <SectionHeading id="appeal-heading">
          Sự Hấp Dẫn Của "Một Con Số Đúng"
        </SectionHeading>
        <ContentBlock>
          <p>
            Muốn có một câu trả lời đơn giản là điều tự nhiên. Một con số duy nhất sẽ rõ ràng, dứt khoát và dễ sử dụng.
            Bạn có thể tính toán một lần, ghi vào biểu đồ, và biết chính xác mục tiêu cần đạt. Sự hấp dẫn này
            là dễ hiểu, đặc biệt khi bạn đang học hoặc khi các tình huống lâm sàng cảm thấy phức tạp.
          </p>
          <p>
            Nhiều bác sĩ lâm sàng và người học bị thu hút bởi cách tiếp cận này vì một số lý do:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Công thức rõ ràng</strong>: Tính toán từng bước với đầu vào và đầu ra cụ thể cảm thấy
              có cấu trúc và có thể học được. Chúng cung cấp cảm giác thành thạo—"nếu tôi làm theo các bước đúng, tôi sẽ
              nhận được câu trả lời đúng." Đối với sinh viên học dinh dưỡng lâm sàng, công thức cung cấp một cách cụ thể
              để tiếp cận những gì có thể cảm thấy như một vấn đề trừu tượng.
            </li>
            <li>
              <strong>Mục tiêu đơn lẻ</strong>: Có một con số để nhắm tới đơn giản hóa việc ra quyết định. Thay vì
              điều hướng sự không chắc chắn và phạm vi, bạn có một mục tiêu rõ ràng. Đối với các bác sĩ lâm sàng mới vào nghề,
              điều này có thể cảm thấy yên tâm—bạn biết phải ghi gì vào biểu đồ, phải chỉ định gì, phải theo dõi gì.
              Đối với y tá tuân theo giao thức, nó cung cấp hướng dẫn rõ ràng.
            </li>
            <li>
              <strong>Kết quả trông chính xác</strong>: Khi máy tính hiển thị "1,847 calo" hoặc "72.3 gram
              protein," nó trông chính xác và có thẩm quyền. Độ chính xác đó cảm thấy khoa học và đáng tin cậy. Dễ
              bảo vệ một con số cụ thể hơn là giải thích tại sao bạn đang làm việc với một phạm vi.
            </li>
          </ul>
          <p>
            Có một điều khác đang diễn ra ở đây: <strong>số liệu cảm thấy an toàn và khách quan</strong>. Trong một lĩnh vực
            nơi quá nhiều phụ thuộc vào phán đoán, kinh nghiệm và giải thích, số liệu cung cấp cảm giác chắc chắn.
            Chúng dường như loại bỏ sự mơ hồ. Nếu công thức nói 1,800 calo, điều đó cảm thấy cụ thể hơn
            "có lẽ đâu đó giữa 1,600 và 2,000, tùy thuộc vào cách họ phản ứng."
          </p>
          <p>
            Số liệu cũng <strong>đơn giản hóa các quyết định phức tạp</strong>. Dinh dưỡng lâm sàng liên quan đến việc cân nhắc nhiều
            yếu tố: tình trạng bệnh nhân, mục tiêu chăm sóc của họ, những gì họ có thể chịu đựng, những gì thực tế
            có thể, và cách họ đang phản ứng. Một con số duy nhất cắt qua sự phức tạp đó. Nó cho bạn
            một cái gì đó cụ thể để làm việc, một cái gì đó bạn có thể ghi chép, một cái gì đó bạn có thể bảo vệ nếu bị chất vấn.
          </p>
          <p>
            Nhiều công cụ lâm sàng dường như hứa hẹn điều này: nhập cân nặng, tuổi và tình trạng của bệnh nhân, và nhận
            "câu trả lời." Đối với các bác sĩ lâm sàng mới vào nghề, điều này có thể cảm thấy yên tâm. Đối với y tá tuân theo giao thức,
            nó có thể có vẻ thẳng thắn. Đối với sinh viên học tính toán, nó có thể xuất hiện như có một cách đúng
            để làm điều đó.
          </p>
          <p>
            Tuy nhiên, <strong>dinh dưỡng lâm sàng không hoạt động theo cách đó</strong>. Không có con số phổ quát nào
            áp dụng cho tất cả mọi người, hoặc thậm chí cho cùng một người trong các tình huống khác nhau. Hiểu tại sao điều này là
            trường hợp—và tại sao nó thực sự là một điều tốt—giúp các nhóm chăm sóc sức khỏe cung cấp tốt hơn, an toàn hơn chăm sóc dinh dưỡng.
          </p>
          <EducationalNote variant="info" title="Tại Sao Điều Này Quan Trọng">
            <p>
              Mong muốn một con số đúng duy nhất có thể dẫn đến tự tin quá mức vào tính toán và thiếu tự tin
              trong phán đoán lâm sàng. Hiểu tại sao không có con số phổ quát giúp các bác sĩ lâm sàng, y tá và
              sinh viên sử dụng công cụ một cách phù hợp—như hỗ trợ cho suy nghĩ, không phải thay thế cho phán đoán. Nhận ra
              sự hấp dẫn của công thức rõ ràng và số chính xác giúp chúng ta hiểu tại sao chúng ta bị thu hút bởi chúng, đó là
              bước đầu tiên trong việc sử dụng chúng an toàn hơn.
            </p>
          </EducationalNote>
        </ContentBlock>
      </ContentSection>

      {/* 
        3. Why Nutrition Needs Vary Between Patients
        Educational Intent: Explains the key sources of variability in
        nutrition needs, using accessible language without deep biochemical
        detail. Focuses on practical factors that clinicians and nurses
        can observe and consider.
      */}
      <ContentSection ariaLabelledBy="variation-heading">
        <SectionHeading id="variation-heading">
          Tại Sao Nhu Cầu Dinh Dưỡng Khác Nhau Giữa Các Bệnh Nhân
        </SectionHeading>
        <ContentBlock>
          <p>
            Hai bệnh nhân có cùng cân nặng, tuổi, chiều cao và thậm chí cùng tình trạng y tế có thể có
            nhu cầu dinh dưỡng rất khác nhau. Đây không phải là lỗi trong đánh giá—đó là phản ánh của sự biến đổi sinh học và
            lâm sàng thực sự. Hiểu tại sao điều này xảy ra giúp giải thích tại sao không có con số phổ quát.
          </p>
          <p>
            Đây là các nguồn biến đổi chính tạo ra sự khác biệt trong thực hành lâm sàng:
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Thành phần cơ thể</strong>: Hai người có cùng cân nặng có thể có lượng
              cơ so với mỡ rất khác nhau. Mô cơ sử dụng nhiều năng lượng hơn mô mỡ, ngay cả khi nghỉ ngơi. Người có
              khối lượng cơ nhiều hơn (định nghĩa cơ rõ ràng, sức nắm mạnh hơn) thường cần nhiều năng lượng hơn
              người có khối lượng mỡ nhiều hơn, ngay cả khi họ nặng như nhau. Đây là điều y tá và bác sĩ lâm sàng
              có thể quan sát trong đánh giá thể chất.
            </li>
            <li>
              <strong>Mức độ nghiêm trọng của bệnh</strong>: Hai bệnh nhân có cùng chẩn đoán có thể có
              mức độ nghiêm trọng của bệnh rất khác nhau, điều này ảnh hưởng đến lượng năng lượng cơ thể họ cần. Ví dụ, hai bệnh nhân với
              suy tim có thể có chức năng tim khác nhau—một có thể ổn định và hoạt động, trong khi người kia
              có thể bị suy tim nặng với hoạt động hạn chế. Bệnh càng nghiêm trọng, nó càng
              có thể ảnh hưởng đến nhu cầu chuyển hóa. Đây là lý do tại sao hiểu toàn bộ bức tranh lâm sàng quan trọng hơn
              chỉ biết chẩn đoán.
            </li>
            <li>
              <strong>Viêm và phản ứng stress</strong>: Khi cơ thể đang xử lý viêm,
              nhiễm trùng, phẫu thuật hoặc các stressor khác, nó cần nhiều năng lượng hơn. Đây là lý do tại sao người đang phục hồi sau
              phẫu thuật có thể cần nhiều hơn cùng một người khi họ ổn định. Phản ứng stress tăng
              nhu cầu chuyển hóa, đôi khi đáng kể. Điều này có thể thay đổi hàng ngày dựa trên thủ thuật, nhiễm trùng,
              hoặc các sự kiện lâm sàng khác. Y tá theo dõi các dấu hiệu nhiễm trùng hoặc viêm, và bác sĩ lâm sàng
              theo dõi thủ thuật và biến chứng, có thể quan sát những thay đổi này.
            </li>
            <li>
              <strong>Hoạt động thể chất</strong>: Mức độ di chuyển của ai đó ảnh hưởng đến nhu cầu năng lượng của họ. Người
              đi bộ hàng ngày, làm vật lý trị liệu, hoặc nói chung hoạt động nhiều hơn cần nhiều năng lượng hơn người
              nằm liệt giường hoặc chủ yếu ít vận động. Điều này có thể thay đổi trong thời gian nằm viện—ai đó có thể bắt đầu
              nằm liệt giường sau phẫu thuật nhưng trở nên hoạt động hơn khi họ phục hồi. Y tá quan sát mức độ hoạt động
              và bác sĩ lâm sàng theo dõi tình trạng chức năng nhận thấy những thay đổi này, điều mà công thức không thể dự đoán.
            </li>
            <li>
              <strong>Tuổi và tình trạng chức năng</strong>: Người cao tuổi có thể có nhu cầu khác với người trẻ
              hơn, và tình trạng chức năng (mức độ ai đó có thể thực hiện các hoạt động hàng ngày) cũng quan trọng. Người
              độc lập và hoạt động có thể có nhu cầu khác với người yếu đuối hoặc phụ thuộc, ngay cả
              ở cùng tuổi. Tình trạng chức năng có thể thay đổi trong bệnh tật và phục hồi, ảnh hưởng đến nhu cầu theo thời gian.
            </li>
          </ul>
          <EducationalNote variant="clinical-insight">
            <p>
              <strong>Quan sát lâm sàng:</strong> Hãy xem xét hai bệnh nhân có cùng cân nặng, tuổi và chẩn đoán.
              Bệnh nhân A có khối lượng cơ nhiều hơn (định nghĩa cơ rõ ràng, sức nắm mạnh hơn), hoạt động nhiều hơn và có
              chức năng cơ quan tốt hơn. Bệnh nhân B có khối lượng mỡ nhiều hơn, hoạt động ít hơn và có bệnh nghiêm trọng hơn.
            </p>
            <p>
              Mặc dù họ nặng như nhau, nhu cầu năng lượng thực tế của họ có thể khác nhau đáng kể. Một công thức
              chỉ xem xét cân nặng sẽ cho cả hai bệnh nhân cùng một mục tiêu, bỏ lỡ sự khác biệt quan trọng này.
              Đây là lý do tại sao y tá quan sát mức độ hoạt động và thành phần cơ thể, và bác sĩ lâm sàng xem xét mức độ nghiêm trọng của bệnh
              và tình trạng chức năng, quan trọng như vậy.
            </p>
          </EducationalNote>
          <p>
            Các nguồn biến đổi này có nghĩa là ngay cả với cùng đầu vào (tuổi, cân nặng, tình trạng), hai người
            có thể có nhu cầu thực tế khác nhau. Công thức không thể nắm bắt sự biến đổi cá nhân này, đó là lý do tại sao chúng
            cung cấp ước tính, không phải yêu cầu chính xác. Đây cũng là lý do tại sao quan sát lâm sàng—những gì y tá thấy,
            những gì bệnh nhân báo cáo, những gì nhóm chăm sóc quan sát—rất có giá trị trong đánh giá dinh dưỡng.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        4. Why Needs Change Over Time
        Educational Intent: Explains that needs are dynamic, not static,
        emphasizing that needs today may not be needs tomorrow. Highlights
        differences between acute illness, recovery, and rehabilitation, and
        emphasizes that reassessment is central to clinical nutrition.
      */}
      <ContentSection ariaLabelledBy="dynamic-heading">
        <SectionHeading id="dynamic-heading">
          Tại Sao Nhu Cầu Thay Đổi Theo Thời Gian
        </SectionHeading>
        <ContentBlock>
          <p>
            Nhu cầu dinh dưỡng của một người không tĩnh—chúng thay đổi theo thời gian. <strong>Những gì ai đó cần hôm nay có thể
            không phải là những gì họ cần ngày mai</strong>. Bản chất động này là một lý do khác tại sao không có con số
            phổ quát. Ngay cả khi bạn có thể xác định nhu cầu "chính xác" của ai đó hôm nay, nó có thể không chính xác vào ngày mai.
          </p>
          <p>
            Hiểu cách nhu cầu thay đổi giúp giải thích tại sao một tính toán đơn lẻ là không đủ. Đây là ba
            cách quan trọng nhu cầu thay đổi theo thời gian:
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Bệnh Cấp Tính, Phục Hồi và Phục Hồi Chức Năng Khác Nhau
              </h3>
              <p>
                Cùng một người có nhu cầu khác nhau tùy thuộc vào vị trí của họ trong bệnh tật và phục hồi:
              </p>
              <ul className="list-disc space-y-2 pl-6 mt-3">
                <li>
                  <strong>Trong bệnh cấp tính</strong>: Khi ai đó bị bệnh nặng, cơ thể họ có thể cần nhiều
                  năng lượng hơn để chống nhiễm trùng, chữa lành hoặc duy trì các chức năng cơ bản. Tuy nhiên, họ cũng có thể không thể
                  chịu đựng nhiều dinh dưỡng do buồn nôn, đau hoặc các triệu chứng khác. Điều này tạo ra một tình huống
                  thách thức nơi nhu cầu có thể cao, nhưng khả năng chịu đựng thấp.
                </li>
                <li>
                  <strong>Trong phục hồi</strong>: Khi ai đó bắt đầu phục hồi, cơ thể họ cần năng lượng và protein
                  để tái tạo mô, chữa lành vết thương và lấy lại sức mạnh. Đây thường là khi nhu cầu cao nhất—cơ thể
                  vừa chống lại bệnh tật vừa tích cực chữa lành. Đồng thời, cảm giác ngon miệng và khả năng chịu đựng thường cải thiện,
                  làm cho việc đáp ứng những nhu cầu tăng lên này có thể.
                </li>
                <li>
                  <strong>Trong phục hồi chức năng</strong>: Khi ai đó chuyển sang phục hồi chức năng, họ thường
                  hoạt động nhiều hơn, điều này làm tăng nhu cầu năng lượng. Tuy nhiên, stress của bệnh cấp tính có thể đã qua, vì vậy
                  nhu cầu chuyển hóa có thể khác với giai đoạn cấp tính. Trọng tâm chuyển từ chữa lành
                  sang tái tạo sức mạnh và chức năng.
                </li>
              </ul>
              <p className="mt-3">
                Một tính toán được thực hiện trong bệnh cấp tính sẽ không phù hợp với giai đoạn phục hồi. Một tính toán được thực hiện trong
                phục hồi sẽ không phù hợp với phục hồi chức năng. Đây là lý do tại sao đánh giá lại quan trọng—nhu cầu của người đó thay đổi
                khi tình huống của họ thay đổi.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Khả Năng Chịu Đựng Lượng Ăn Vào Thay Đổi Trước Khi Nhu Cầu Thay Đổi
              </h3>
              <p>
                Có một vấn đề thời gian quan trọng trong dinh dưỡng lâm sàng: <strong>những gì ai đó thực sự có thể chịu đựng
                thường thay đổi trước khi nhu cầu được tính toán của họ thay đổi</strong>. Điều này tạo ra khoảng cách giữa những gì công thức
                gợi ý và những gì thực sự có thể.
              </p>
              <p>
                Ví dụ, ai đó có thể buồn nôn, đau, hoặc đang vật lộn với trầm cảm, làm cho việc ăn khó khăn.
                Nhu cầu được tính toán của họ có thể gợi ý 1,800 calo, nhưng họ chỉ có thể chịu đựng 800–1,000
                calo ngay bây giờ. Tính toán không thay đổi, nhưng khả năng đáp ứng của họ thì có.
              </p>
              <p>
                Ngược lại, khi ai đó phục hồi, cảm giác ngon miệng và khả năng chịu đựng của họ thường cải thiện trước khi nhu cầu được tính toán
                của họ giảm. Họ có thể có thể ăn nhiều hơn so với tính toán ban đầu gợi ý, hoặc họ có thể
                cần nhiều hơn so với tính toán gợi ý vì họ đang tích cực chữa lành và trở nên hoạt động hơn.
              </p>
              <p>
                Đây là lý do tại sao quan sát hàng ngày của y tá về những gì bệnh nhân thực sự tiêu thụ rất có giá trị—chúng
                cho thấy khoảng cách giữa những gì được tính toán và những gì có thể. Đây cũng là lý do tại sao giải quyết các triệu chứng (buồn nôn,
                đau, trầm cảm) thường là bước đầu tiên trong chăm sóc dinh dưỡng, trước khi cố gắng đáp ứng các mục tiêu được tính toán.
              </p>
            </div>
          </div>

          <EducationalNote variant="clinical-insight">
            <p>
              <strong>Tại sao đánh giá lại quan trọng:</strong> Vì nhu cầu thay đổi theo thời gian, đánh giá lại là trung tâm của
              dinh dưỡng lâm sàng. Ước tính ban đầu là điểm khởi đầu, không phải mục tiêu cố định. Đánh giá lại thường xuyên
              giúp đảm bảo rằng hỗ trợ dinh dưỡng vẫn phù hợp khi hoàn cảnh thay đổi.
            </p>
            <p>
              Trong thực hành, điều này có nghĩa là:
            </p>
            <ul className="list-disc space-y-1 pl-5 mt-2">
              <li>
                Tính toán nhu cầu một lần là không đủ—đánh giá lại thường cần thiết thường xuyên khi tình trạng,
                hoạt động và khả năng chịu đựng của người đó thay đổi
              </li>
              <li>
                Theo dõi hàng ngày của y tá về lượng ăn vào, triệu chứng và phản ứng bệnh nhân cung cấp thông tin thiết yếu
                cho đánh giá lại
              </li>
              <li>
                Đánh giá lại thường xuyên của bác sĩ lâm sàng nắm bắt các thay đổi mà tính toán không thể dự đoán
              </li>
              <li>
                Nhóm chăm sóc điều chỉnh kế hoạch dựa trên những gì thực sự đang xảy ra, không chỉ những gì tính toán gợi ý
              </li>
            </ul>
            <p className="mt-2">
              Quy trình liên tục này của đánh giá, theo dõi và điều chỉnh là điều làm cho chăm sóc dinh dưỡng hiệu quả.
              Nó không phải về việc tìm "con số đúng" một lần—nó là về việc luôn phản ứng với thay đổi.
            </p>
          </EducationalNote>
          <p>
            Bản chất động này có nghĩa là ngay cả khi bạn có thể xác định nhu cầu "chính xác" của ai đó hôm nay, nó có thể
            không chính xác vào ngày mai. Một con số phổ quát duy nhất không thể tính đến sự biến đổi này theo thời gian. Đây là lý do tại sao
            <strong>đánh giá lại là trung tâm của dinh dưỡng lâm sàng</strong>—không phải như một bước tùy chọn, mà như một phần
            cốt lõi của cách chăm sóc dinh dưỡng hoạt động.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        5. What Formulas Really Do (and Don't Do)
        Educational Intent: Explains what estimation formulas actually
        provide, their limitations, and why different methods produce
        different numbers. Clearly states that formulas do not "measure"
        true needs and emphasizes their role as starting estimates based
        on populations, not individuals.
      */}
      <ContentSection ariaLabelledBy="formulas-heading">
        <SectionHeading id="formulas-heading">
          Công Thức Thực Sự Làm Gì (Và Không Làm Gì)
        </SectionHeading>
        <ContentBlock>
          <p>
            Công thức ước tính là công cụ có giá trị, nhưng hiểu những gì chúng thực sự làm—và những gì chúng không
            làm—là cần thiết để sử dụng chúng một cách an toàn và hiệu quả.
          </p>
          <EducationalNote variant="warning" title="Công Thức Không 'Đo' Nhu Cầu Thực Sự">
            <p>
              <strong>Điều quan trọng là hiểu: công thức không "đo" nhu cầu thực sự.</strong> Chúng cung cấp
              ước tính dựa trên trung bình dân số, không phải đo lường cá nhân. Để thực sự đo nhu cầu năng lượng của ai đó,
              bạn sẽ cần thiết bị chuyên dụng (như đo nhiệt lượng gián tiếp) đo lường tiêu thụ oxy
              và sản xuất carbon dioxide. Hầu hết các môi trường lâm sàng không có thiết bị này, và
              ngay cả khi có, kết quả có thể thay đổi theo thời gian và điều kiện.
            </p>
            <p>
              Công thức ước tính nhu cầu dựa trên những gì hiệu quả cho nhóm người trong các nghiên cứu. Chúng không
              đo những gì một người cụ thể thực sự cần. Sự khác biệt này quan trọng vì nó giúp chúng ta hiểu
              rằng công thức cung cấp điểm khởi đầu, không phải câu trả lời dứt khoát.
            </p>
          </EducationalNote>

          <p className="mt-6">
            <strong>Công thức làm gì:</strong>
          </p>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Cung cấp ước tính khởi đầu</strong>: Công thức cho bạn một điểm khởi đầu hợp lý để bắt đầu
              với. Ước tính này sau đó có thể được điều chỉnh dựa trên quan sát lâm sàng, phản ứng bệnh nhân và
              theo dõi liên tục. Hãy nghĩ về nó như một điểm khởi đầu, không phải điểm đến. Đối với các bác sĩ lâm sàng mới vào nghề và
              sinh viên đang học, điểm khởi đầu này giúp cấu trúc suy nghĩ ban đầu về những gì có thể phù hợp.
            </li>
            <li>
              <strong>Dựa trên dân số, không phải cá nhân</strong>: Công thức được phát triển từ các nghiên cứu về
              nhóm người. Chúng cho bạn một ước tính trung bình cho ai đó có đặc điểm tương tự (tuổi,
              cân nặng, mức độ hoạt động), không phải yêu cầu cá nhân. Bệnh nhân cụ thể của bạn có thể cần nhiều hơn hoặc ít hơn
              so với người trung bình trong các nghiên cứu đó. Đây là lý do tại sao hai bệnh nhân với cùng đầu vào có thể có
              nhu cầu thực tế khác nhau—họ là cá nhân, không phải trung bình.
            </li>
            <li>
              <strong>Giúp cấu trúc suy nghĩ, không thay thế nó</strong>: Công thức giúp tổ chức thông tin (tuổi,
              cân nặng, hoạt động) một cách có hệ thống, điều này hỗ trợ lý luận lâm sàng. Chúng cung cấp khung
              để suy nghĩ về ước tính nhu cầu. Tuy nhiên, chúng không thay thế nhu cầu xem xét toàn bộ con người,
              bối cảnh của họ, phản ứng của họ và phán đoán lâm sàng. Chúng cấu trúc suy nghĩ—chúng không làm
              suy nghĩ cho bạn.
            </li>
          </ul>

          <p className="mt-6">
            <strong>Công thức không làm gì:</strong>
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Cung cấp yêu cầu cá nhân chính xác</strong>: Chúng không thể cho bạn biết một người cụ thể
              thực sự cần gì trong một ngày cụ thể. Chúng cung cấp ước tính, không phải giá trị chính xác.
            </li>
            <li>
              <strong>Tính đến tất cả sự biến đổi cá nhân</strong>: Chúng không thể nắm bắt sự khác biệt về thành phần cơ thể,
              yếu tố di truyền, hệ vi sinh đường ruột, hoặc nhiều đặc điểm cá nhân khác ảnh hưởng đến nhu cầu.
            </li>
            <li>
              <strong>Dự đoán thay đổi động</strong>: Chúng không thể tính đến cách nhu cầu thay đổi hàng ngày dựa
              trên stress, giấc ngủ, biến động bệnh tật, hoặc các yếu tố động khác.
            </li>
            <li>
              <strong>Thay thế phán đoán lâm sàng</strong>: Chúng không thể nhìn thấy toàn bộ con người, đánh giá khả năng chịu đựng, xem xét
              mục tiêu chăm sóc, hoặc thích ứng với hoàn cảnh độc đáo. Điều đó đòi hỏi phán đoán lâm sàng.
            </li>
            <li>
              <strong>Tính đến bối cảnh</strong>: Chúng không thể xem xét mục tiêu chăm sóc, chức năng cơ quan, khả năng chịu đựng,
              ràng buộc thực tế, hoặc các yếu tố bối cảnh khác định hình những gì thực sự phù hợp.
            </li>
          </ul>

          <p className="mt-6">
            <strong>Tại sao các công thức khác nhau tạo ra các con số khác nhau:</strong>
          </p>
          <p>
            Các bác sĩ lâm sàng sử dụng nhiều phương pháp để ước tính nhu cầu. Chúng bao gồm quy tắc đơn giản dựa trên cân nặng (ví dụ,
            "25–30 kcal/kg/ngày"), phương trình dự đoán (ví dụ, Harris-Benedict, Mifflin-St Jeor), và phán đoán
            lâm sàng kết hợp với hướng dẫn.
          </p>
          <p>
            <strong>Các phương pháp này thường tạo ra các con số khác nhau, và điều đó là bình thường.</strong> Nó không phải là dấu hiệu
            rằng một cái "sai" hoặc cái khác "đúng." Các phương pháp khác nhau tồn tại vì chúng được phát triển cho
            mục đích, dân số hoặc tình huống khác nhau. Ví dụ:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Một số công thức được phát triển cho dân số khỏe mạnh và có thể không phù hợp với bệnh nhân bệnh tốt
            </li>
            <li>
              Một số được phát triển cho nhóm tuổi hoặc tình trạng cụ thể
            </li>
            <li>
              Một số tính đến nhiều yếu tố hơn (như hoạt động) so với các yếu tố khác
            </li>
            <li>
              Một số đơn giản hơn và dễ sử dụng, trong khi những cái khác phức tạp hơn
            </li>
          </ul>
          <p>
            Các bác sĩ lâm sàng có kinh nghiệm thường sử dụng nhiều phương pháp, so sánh kết quả và chọn một phạm vi hợp lý
            dựa trên bối cảnh lâm sàng. Mục tiêu không phải là tìm "câu trả lời đúng," mà là thiết lập một
            <strong>điểm khởi đầu an toàn, hợp lý</strong> có thể được theo dõi và điều chỉnh.
          </p>
          <EducationalNote variant="warning" title="Rủi Ro Của Sự Tự Tin Quá Mức">
            <p>
              Đối xử với công thức như thể chúng cung cấp câu trả lời chính xác có thể dẫn đến tự tin quá mức vào số liệu. Đây là
              một cạm bẫy phổ biến cho các bác sĩ lâm sàng mới vào nghề, y tá tuân theo giao thức và sinh viên học
              tính toán. Tự tin quá mức có thể khiến các nhóm chăm sóc sức khỏe bỏ qua các dấu hiệu lâm sàng (như vết thương kém
              lành, tiếp tục giảm cân, hoặc mệt mỏi bệnh nhân báo cáo) vì "tính toán nói rằng họ
              đang nhận đủ." Công thức thông báo, nhưng phán đoán lâm sàng và phản ứng bệnh nhân xác định những gì
              thực sự phù hợp.
            </p>
          </EducationalNote>
        </ContentBlock>
      </ContentSection>

      {/* 
        6. Clinical Examples Illustrating Variability
        Educational Intent: Provides concrete examples showing how
        needs vary in real clinical situations, helping readers understand
        the concepts through practical scenarios
      */}
      <ContentSection ariaLabelledBy="examples-heading">
        <SectionHeading id="examples-heading">
          Ví Dụ Lâm Sàng Minh Họa Sự Biến Đổi
        </SectionHeading>
        <ContentBlock>
          <p>
            Các ví dụ lâm sàng thực tế giúp minh họa tại sao không có con số phổ quát. Các tình huống này cho thấy cách
            cùng một tính toán có thể có ý nghĩa khác nhau trong các tình huống khác nhau, và tại sao phán đoán lâm sàng
            quan trọng hơn công thức.
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4">
            <h3 className="font-semibold text-base mb-3 text-neutral-900">
              Ví Dụ 1: Hai Bệnh Nhân, Cùng Cân Nặng, Mức Độ Bệnh Khác Nhau
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              Hai bệnh nhân đều nặng 70 kg và 65 tuổi. Cả hai đều bị suy tim. Một tính toán đơn giản dựa trên cân nặng
              có thể gợi ý cùng một mục tiêu cho cả hai. Tuy nhiên:
            </p>
            <div className="grid gap-4 sm:grid-cols-2 mb-3">
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">Bệnh Nhân A:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Suy tim ổn định, được kiểm soát tốt</li>
                  <li>Đi bộ hàng ngày, độc lập với các hoạt động</li>
                  <li>Cảm giác ngon miệng tốt, ăn bữa ăn đều đặn</li>
                  <li>Không có nhập viện gần đây</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">Bệnh Nhân B:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Suy tim nặng, mất bù gần đây</li>
                  <li>Khó thở với hoạt động tối thiểu, chủ yếu nằm liệt giường</li>
                  <li>Cảm giác ngon miệng kém, cảm thấy no nhanh</li>
                  <li>Nhiều lần nhập viện gần đây</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-neutral-700">
              <strong>Lý luận:</strong> Bệnh nhân A ổn định và hoạt động, vì vậy cơ thể họ cần năng lượng cho các hoạt động hàng ngày
              và duy trì tình trạng hiện tại của họ. Bệnh nhân B đang trong suy tim nặng, điều này làm tăng
              nhu cầu chuyển hóa, nhưng họ cũng ít hoạt động hơn và đang vật lộn với cảm giác ngon miệng. Cùng một tính toán
              không tính đến những khác biệt này. Nhóm chăm sóc cần xem xét mức độ nghiêm trọng của bệnh, mức độ hoạt động,
              và những gì bệnh nhân thực sự có thể chịu đựng—không chỉ cân nặng. Đây là lý do tại sao y tá quan sát hoạt động và
              bác sĩ lâm sàng đánh giá mức độ nghiêm trọng của bệnh quan trọng như vậy.
            </p>
          </div>

          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4">
            <h3 className="font-semibold text-base mb-3 text-neutral-900">
              Ví Dụ 2: Cùng Bệnh Nhân, Các Giai Đoạn Bệnh Khác Nhau
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              Một bệnh nhân 60 tuổi được nhập viện với viêm phổi. Trong quá trình nằm viện, nhu cầu của họ
              thay đổi khi tình trạng của họ thay đổi:
            </p>
            <div className="space-y-3 mb-3">
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">
                  <strong>Ngày 1 (Bệnh cấp tính):</strong>
                </p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Sốt, nhiễm trùng, cơ thể chống lại bệnh tật</li>
                  <li>Nằm liệt giường, hoạt động tối thiểu</li>
                  <li>Cảm giác ngon miệng kém, cảm thấy không khỏe</li>
                  <li>Cơ thể cần năng lượng để chống nhiễm trùng, nhưng bệnh nhân không thể ăn nhiều</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">
                  <strong>Ngày 5 (Phục hồi):</strong>
                </p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Nhiễm trùng cải thiện, sốt đã hết</li>
                  <li>Bắt đầu đi bộ, hoạt động nhiều hơn</li>
                  <li>Cảm giác ngon miệng trở lại, ăn tốt hơn</li>
                  <li>Cơ thể cần năng lượng cho cả phục hồi và hoạt động tăng lên</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-neutral-200">
                <p className="text-xs font-semibold text-neutral-900 mb-2">
                  <strong>Ngày 10 (Phục hồi chức năng):</strong>
                </p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-neutral-700">
                  <li>Nhiễm trùng đã hết, ổn định</li>
                  <li>Rất hoạt động, đang làm vật lý trị liệu</li>
                  <li>Cảm giác ngon miệng tốt, ăn tốt</li>
                  <li>Cơ thể cần năng lượng cho hoạt động và tái tạo sức mạnh</li>
                </ul>
              </div>
            </div>
            <p className="text-sm text-neutral-700">
              <strong>Lý luận:</strong> Trong bệnh cấp tính, cơ thể cần năng lượng để chống nhiễm trùng, nhưng
              bệnh nhân thường không thể ăn nhiều. Trong phục hồi, nhu cầu tăng lên vì cơ thể vừa chống lại
              bệnh tật vừa chữa lành, và hoạt động đang tăng lên. Trong phục hồi chức năng, nhu cầu có thể cao nhất vì
              người đó rất hoạt động và đang tái tạo sức mạnh. Một tính toán duy nhất từ Ngày 1 sẽ không phù hợp với Ngày
              5 hoặc 10. Đây là lý do tại sao đánh giá lại quan trọng—nhu cầu của người đó thay đổi khi tình huống của họ thay đổi. Y tá
              theo dõi lượng ăn vào hàng ngày và bác sĩ lâm sàng đánh giá lại thường xuyên nắm bắt những thay đổi này.
            </p>
          </div>

          <div className="rounded-md bg-neutral-100 border border-neutral-300 p-4">
            <h3 className="font-semibold text-base mb-3 text-neutral-900">
              Ví Dụ 3: Năng Lượng Đầy Đủ, Nhưng Protein Không Đủ
            </h3>
            <p className="text-sm text-neutral-700 mb-3">
              Một bệnh nhân đang phục hồi sau phẫu thuật đang ăn tốt và đáp ứng nhu cầu năng lượng ước tính của họ. Tuy nhiên,
              y tá nhận thấy:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-neutral-700 mb-3">
              <li>Vết thương lành chậm</li>
              <li>Bệnh nhân đang mất khối lượng cơ mặc dù ăn đủ calo</li>
              <li>Bệnh nhân báo cáo cảm thấy yếu</li>
              <li>Nhìn vào những gì họ thực sự đang ăn: chủ yếu carbohydrate (bánh mì, mì ống, trái cây), rất ít
              protein (thịt, trứng, sữa)</li>
            </ul>
            <p className="text-sm text-neutral-700 mb-3">
              Bệnh nhân đang nhận đủ năng lượng (calo), nhưng không đủ protein để hỗ trợ chữa lành và duy trì
              khối lượng cơ.
            </p>
            <p className="text-sm text-neutral-700">
              <strong>Lý luận:</strong> Nhu cầu năng lượng và protein là khác nhau. Ai đó có thể đáp ứng nhu cầu năng lượng
              của họ nhưng vẫn không nhận đủ protein. Điều này đặc biệt quan trọng trong phục hồi, khi cơ thể
              cần protein để chữa lành vết thương và tái tạo mô. Chỉ nhìn vào tổng calo bỏ lỡ điều này. Nhóm chăm sóc
              cần xem xét không chỉ bệnh nhân đang ăn bao nhiêu, mà còn những gì họ đang ăn. Đây là lý do tại sao
              y tá ghi chép những gì bệnh nhân thực sự tiêu thụ (không chỉ bao nhiêu) rất có giá trị—nó tiết lộ khoảng trống
              mà tính toán có thể bỏ lỡ. Giải pháp không nhất thiết là nhiều calo hơn, mà là đảm bảo protein đầy đủ
              trong những gì bệnh nhân có thể chịu đựng.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* 
        7. Common Mistakes When Chasing Exact Numbers
        Educational Intent: Addresses common mistakes that occur when
        treating estimates as exact values, correcting them gently without
        blame. Helps readers understand why these mistakes happen and how
        to avoid them.
      */}
      <ContentSection ariaLabelledBy="mistakes-heading">
        <SectionHeading id="mistakes-heading">
          Common Mistakes When Chasing Exact Numbers
        </SectionHeading>
        <ContentBlock>
          <p>
            When we treat calculated needs as exact values, several common mistakes can occur. These mistakes are
            understandable—they often come from wanting to do the right thing and having clear guidance. Understanding
            why these mistakes happen helps us avoid them and use clinical tools more safely.
          </p>
        </ContentBlock>
        <div className="mt-6 space-y-4 sm:space-y-5">
          <EducationalNote variant="common-pitfall" title='Treating Calculated Needs as Prescriptions'>
            <p>
              <strong>What happens:</strong> A calculation suggests a specific number (e.g., 1,800 calories), and
              the care team treats this as a prescription that must be met, regardless of what the patient can
              actually tolerate or what fits their situation.
            </p>
            <p>
              <strong>Why this happens:</strong> It's natural to want clear direction. A specific number feels
              definitive and actionable. For clinicians early in practice or nurses following protocols, having a
              clear target can feel reassuring.
            </p>
            <p>
              <strong>Why it's a problem:</strong> Calculations provide starting estimates, not prescriptions. What
              a person can actually tolerate, what fits their goals of care, and what's practically possible all
              matter more than what a formula suggests. Trying to force a specific number can lead to discomfort,
              intolerance, or inappropriate care.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> Many experienced clinicians use calculations
              to establish a reasonable range, then start conservatively within that range. They adjust based on
              what the patient can actually tolerate and how they respond. The calculation guides them, but patient
              response determines the plan.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Ignoring Tolerance and Intake'>
            <p>
              <strong>What happens:</strong> The care team focuses on meeting calculated needs but doesn't pay enough
              attention to what the patient is actually eating or what they can tolerate. The nurse documents that
              the patient is eating only 30–40% of meals, but the plan doesn't change because "they need 1,800 calories."
            </p>
            <p>
              <strong>Why this happens:</strong> It's easy to focus on the target number and lose sight of what's
              actually happening. When there's a gap between what's calculated and what's possible, it can feel
              like the solution is to push harder to meet the target.
            </p>
            <p>
              <strong>Why it's a problem:</strong> What patients actually consume matters more than what calculations
              suggest they should consume. If someone can't tolerate the calculated amount, forcing it won't help.
              Ignoring tolerance and actual intake can lead to wasted food, patient discomfort, and missed opportunities
              to address underlying issues (like nausea, pain, or depression) that are preventing adequate intake.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> Many experienced clinicians pay close attention
              to what patients actually eat and what they can tolerate. Nurses' daily documentation of intake is
              essential—it shows the gap between calculated needs and reality. Many care teams address symptoms and
              barriers to eating first, then gradually increase intake as tolerated. The goal is meeting needs
              within what's possible, not forcing an impossible target.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Overfeeding Early Acute Illness'>
            <p>
              <strong>What happens:</strong> A patient is admitted with severe infection or critical illness. The
              care team calculates needs and immediately tries to meet the full target, even though the patient is
              very ill, may be on a ventilator, and their body is in a stressed state.
            </p>
            <p>
              <strong>Why this happens:</strong> It's natural to want to support someone who's very ill. The
              calculation suggests a target, and it feels like meeting that target will help. There's often concern
              about underfeeding, which can lead to trying to maximize intake.
            </p>
            <p>
              <strong>Why it's a problem:</strong> During early acute illness, the body is in a stressed state.
              Overfeeding during this phase may increase metabolic stress, worsen organ function, or cause
              complications. The body may not be able to process large amounts of nutrition effectively during
              severe illness. Starting with aggressive feeding may not be appropriate.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> During early acute illness, many experienced
              clinicians start conservatively. The body's ability to process nutrition is often reduced during
              severe illness. They may gradually increase nutrition as the patient stabilizes and their condition
              improves. This is especially important in critical illness, where tolerance is often limited. The
              goal is supporting the body without overwhelming it during the most stressed phase.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Underestimating Protein in Elderly Patients'>
            <p>
              <strong>What happens:</strong> An elderly patient is recovering from surgery or illness. The care team
              focuses on meeting energy (calorie) needs but doesn't pay enough attention to protein. The patient
              may be getting enough calories but not enough protein to support healing and maintain muscle mass.
            </p>
            <p>
              <strong>Why this happens:</strong> It's common to focus on total calories as the main target. Protein
              needs can get overlooked, especially if the patient is eating and meeting calorie goals. For elderly
              patients, who may have reduced appetite and smaller portions, it's easy to miss that they're not getting
              enough protein within what they can eat.
            </p>
            <p>
              <strong>Why it's a problem:</strong> Elderly patients are at higher risk for muscle loss, especially
              during illness and recovery. They need adequate protein to heal wounds, maintain muscle mass, and
              recover function. Getting enough calories but not enough protein can lead to slow healing, continued
              muscle loss, weakness, and poor recovery. This is especially important because elderly patients may
              have less margin for error—they can't afford to lose muscle mass.
            </p>
            <p>
              <strong>What experienced clinicians often do:</strong> Many experienced clinicians pay attention to
              both energy and protein needs, especially in elderly patients. They look at what patients are actually
              eating—are they getting protein-rich foods, or mostly carbohydrates? Some care teams consider protein
              supplements or high-protein foods if needed, within what patients can tolerate. Nurses documenting
              what patients actually consume (not just how much) helps identify protein gaps. The goal is meeting
              both energy and protein needs, not just calories.
            </p>
          </EducationalNote>
        </div>
      </ContentSection>

      {/* 
        8. How Clinicians Use Ranges Instead of Targets
        Educational Intent: Explains why clinicians work with ranges,
        how ranges allow flexibility, and how monitoring guides adjustment.
        Avoids specific numeric cutoffs to focus on concepts and reasoning.
      */}
      <ContentSection ariaLabelledBy="ranges-heading">
        <SectionHeading id="ranges-heading">
          How Clinicians Use Ranges Instead of Targets
        </SectionHeading>
        <ContentBlock>
          <p>
            Instead of chasing exact numbers, experienced clinicians think in <strong>ranges</strong>. This
            approach acknowledges uncertainty, allows flexibility, and supports safer nutrition care.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Why Clinicians Work with Ranges
              </h3>
              <p>
                Clinicians work with ranges because they recognize that nutrition needs are estimates, not exact
                values. A range acknowledges that we don't know the precise need—we're working with estimates
                based on population averages, not individual measurements.
              </p>
              <p>
                Working with ranges is more honest than claiming an exact number. It reflects the reality that
                different estimation methods produce different results, and that's normal. It also acknowledges
                that individual variation means the same calculation might not fit everyone, or even the same
                person in different situations.
              </p>
              <p>
                Ranges also prevent overconfidence. A single number can feel like a "target" to hit precisely, which
                isn't how nutrition works. Ranges remind us that we're working with estimates, not exact values.
                This helps clinicians, nurses, and students avoid the trap of treating calculations as definitive
                answers.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                How Ranges Allow Flexibility
              </h3>
              <p>
                Ranges allow flexibility because a person might do well anywhere within the range, depending on
                their appetite, tolerance, activity level, and other factors. This flexibility is important when
                dealing with real patients who have varying daily capacity.
              </p>
              <p>
                For example, someone might do well at the lower end of the range on days when they're feeling unwell
                or have less appetite, and at the higher end on days when they're feeling better and more active.
                The range accommodates this natural variation without creating rigid targets that don't fit reality.
              </p>
              <p>
                Ranges also allow the care team to start conservatively and adjust based on what the patient can
                actually tolerate. Instead of trying to hit an exact number immediately, the team can start within
                the range and adjust up or down based on patient response. This approach is safer and more realistic
                than forcing a specific target.
              </p>
              <p>
                This flexibility is especially important because tolerance and intake can change day-to-day. A
                range accommodates these changes, while a single number would require constant adjustment or create
                unrealistic expectations.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                How Monitoring Guides Adjustment
              </h3>
              <p>
                Ranges guide monitoring and adjustment. If someone consistently falls below the range, it signals
                a need to reassess—maybe the range needs adjustment, or maybe there are barriers to eating that need
                to be addressed. If someone consistently exceeds the range, it might signal that the range needs
                adjustment, or that there are concerns about overfeeding.
              </p>
              <p>
                However, the range itself isn't the only guide. More importantly, monitoring how the person responds
                guides adjustment. If someone is doing well (healing, maintaining weight, feeling better) even if
                they're below the calculated range, that might be appropriate for them. If someone is struggling
                (poor healing, continued weight loss, weakness) even if they're meeting the range, that signals
                a need to reassess.
              </p>
              <p>
                Nurses' daily monitoring of intake, symptoms, and patient response provides essential information
                for adjustment. This monitoring shows not just whether someone meets a number, but how they're
                actually responding. Clinicians use this information to adjust the plan—not just to hit a target,
                but to support the person's actual needs and response.
              </p>
              <p>
                This ongoing process of monitoring and adjustment is what makes ranges useful. The range provides
                structure and guidance, but patient response determines the actual plan. This is why reassessment
                is central to clinical nutrition—the range is a starting point, not a fixed destination.
              </p>
            </div>
          </div>

          <EducationalNote variant="clinical-insight">
            <p>
              <strong>How experienced clinicians work:</strong> A clinician calculates needs using multiple methods
              and gets different results from each method. They establish a range to account for this variation and
              uncertainty. They start the patient conservatively within the range. The nurse monitors daily intake
              and observes how the patient is tolerating nutrition and how they're responding clinically. Based on
              this monitoring, the care team adjusts—they might gradually increase if the patient is tolerating well
              and showing signs of improvement, or they might stay where they are, or even decrease if there are
              concerns. The range guides them, but patient response determines the actual plan.
            </p>
          </EducationalNote>
          <p>
            This approach recognizes that nutrition needs are complex, dynamic, and context-dependent. There's no
            universal number because people and situations are too varied for simple answers. Ranges provide
            structure while maintaining the flexibility that real clinical care requires.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        9. What to Take Away
        Educational Intent: Synthesizes key points with a calm, reassuring
        tone. Summarizes the three main takeaways: no single correct number
        exists, numbers support thinking not decisions, and clinical context
        and reassessment matter most.
      */}
      <ContentSection ariaLabelledBy="takeaway-heading">
        <SectionHeading id="takeaway-heading" variant="blue">
          What to Take Away
        </SectionHeading>
        <ContentBlock>
          <p>
            Understanding why there's no universal number for nutrition needs can feel overwhelming at first, but
            it's actually reassuring. It means you don't need to find the "perfect" number—you need to think
            thoughtfully about what's appropriate for each person in their specific situation. Here are the key
            takeaways to guide your practice:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              No Single Correct Number Exists
            </h3>
            <p className="text-blue-800 mb-2">
              This is actually good news. It means you don't need to worry about finding the "perfect" answer.
              Different estimation methods produce different numbers, and that's normal. Patients with the same
              weight may have different needs. Needs change over time. This variation is real and expected—it's
              not a flaw in your assessment or a sign that you're doing something wrong.
            </p>
            <p className="text-blue-800">
              Instead of chasing an exact number, think in ranges. Ranges acknowledge uncertainty and allow
              flexibility. They provide useful guidance without creating rigid targets that don't fit reality.
              This approach is more honest and more practical than trying to find a single "correct" answer.
            </p>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Numbers Support Thinking, Not Decisions
            </h3>
            <p className="text-blue-800 mb-2">
              Clinical tools—calculators, formulas, screening tools—are valuable. They help you estimate needs,
              identify ranges, and structure your thinking. They provide starting points and help you consider
              important factors. But they don't make decisions for you.
            </p>
            <p className="text-blue-800">
              Numbers inform your thinking, but clinical judgment guides your decisions. The whole person—their
              symptoms, their context, their response, their goals of care—matters more than any calculation.
              Use tools to support your thinking, but let judgment determine the plan. This isn't about ignoring
              numbers—it's about using them appropriately, as aids to thinking rather than replacements for judgment.
            </p>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Clinical Context and Reassessment Matter Most
            </h3>
            <p className="text-blue-800 mb-2">
              The most important factors in nutrition care aren't the numbers from calculations—they're the clinical
              context and ongoing reassessment. What's the person's situation? What are their goals? What can they
              actually tolerate? How are they responding? These questions matter more than any formula.
            </p>
            <p className="text-blue-800">
              Reassessment is central to clinical nutrition. Initial estimates are starting points, not fixed
              targets. Regular reassessment—informed by nurses' daily monitoring, patient response, and clinical
              changes—ensures that nutrition support remains appropriate as circumstances change. This ongoing
              process of assessment, monitoring, and adjustment is what makes nutrition care effective. It's not
              about finding the right number once—it's about staying responsive to change.
            </p>
          </div>

          <EducationalNote variant="info" title="A Calm Reminder">
            <p>
              If you're feeling uncertain about nutrition needs estimation, that's understandable. This is complex,
              and there's no simple answer. But remember: you don't need to find the perfect number. You need to
              think thoughtfully, consider the whole person, monitor response, and adjust as needed. That's what
              experienced clinicians do—not because they have all the answers, but because they recognize that
              thoughtful, responsive care matters more than exact calculations.
            </p>
            <p>
              Use tools to support your thinking. Pay attention to what patients actually consume and how they
              respond. Consider clinical context. Reassess regularly. Trust your judgment. This approach—thinking
              in ranges, monitoring response, adjusting as needed—is how effective nutrition care works. You don't
              need to have all the answers right away. You just need to think thoughtfully and stay responsive to
              what you observe.
            </p>
          </EducationalNote>
        </div>
      </ContentSection>

      {/* 
        Learn More
        Educational Intent: Guides readers to more detailed content
        about needs estimation and assessment processes
      */}
      <ContentSection ariaLabelledBy="learn-more-heading">
        <SectionHeading id="learn-more-heading" variant="blue">
          Learn More
        </SectionHeading>
        <ContentBlock>
          <p>
            This page explains why there's no universal number. For more detailed information about how
            needs are estimated in practice, explore these resources:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Needs Estimation in Detail
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Learn more about different estimation methods, why ranges matter, and how clinicians
              approach needs estimation in practice.
            </p>
            <Link
              href="/knowledge/needs-estimation"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Read about needs estimation →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              The Complete Assessment Process
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Understand how needs estimation fits into the broader assessment process, including
              screening and intake assessment.
            </p>
            <Link
              href="/knowledge/assessment-process"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Read the assessment guide →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Interactive Tools
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Practice needs estimation with our interactive calculator, designed for learning:
            </p>
            <Link
              href="/tools/energy-protein-calculator"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Energy & Protein Calculator →
            </Link>
            <p className="text-xs text-blue-700 mt-2 italic">
              This tool is for educational purposes only and should not be used for clinical decision-making.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* 
        Safety & Limitations
        Educational Intent: Clearly states the educational purpose and
        limitations, ensuring readers understand this is not a clinical tool
      */}
      <ContentSection ariaLabelledBy="safety-heading">
        <SectionHeading id="safety-heading" variant="amber">
          Safety & Limitations
        </SectionHeading>
        <EducationalNote variant="warning" title="⚠️ Important Disclaimer">
          <p className="mb-2">
            <strong>This site and its content are for educational purposes only.</strong> They do not provide
            medical advice, diagnosis, or treatment. They do not create a clinician–patient relationship.
            They must not be used for clinical decision-making, prescribing diets or feeds, or making
            treatment decisions.
          </p>
          <p>
            If you have concerns about nutrition status or health, consult with a qualified healthcare
            provider or registered dietitian for a personalized, clinical assessment.
          </p>
        </EducationalNote>

        <ContentBlock className="mt-6">
          <p>
            This content is designed to support learning and understanding of clinical nutrition concepts.
            It helps you understand why nutrition needs can't be reduced to universal numbers and how
            clinicians think about needs estimation in practice.
          </p>
          <p>
            However, this content cannot and should not be used to make clinical decisions. Real clinical
            assessment requires comprehensive evaluation, professional judgment, and consideration of the
            full clinical context—none of which can be captured by educational content alone.
          </p>
        </ContentBlock>
      </ContentSection>
    </main>
  );
}

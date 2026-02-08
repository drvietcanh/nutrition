import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "../nutrition-assessment-overview/components/SectionHeading";
import { ContentSection } from "../nutrition-assessment-overview/components/ContentSection";
import { EducationalNote } from "../nutrition-assessment-overview/components/EducationalNote";
import { ContentBlock } from "../nutrition-assessment-overview/components/ContentBlock";
import { Card, CardHeader, CardContent } from "../../components/Card";

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
            thực sự hoạt động. Có vẻ như nó nên đơn giản: nhập cân nặng, tuổi và bối cảnh lâm sàng,
            nhận một con số, và “làm theo”.
          </p>
          <p>
            thực tế, điều đó sẽ dễ hơn. Một con số duy nhất, rõ ràng sẽ làm cho việc lập kế hoạch đơn giản hơn và quyết định
            nhanh hơn. Nhưng <strong>dinh dưỡng lâm sàng không vận hành theo cách đó</strong>.
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
              <strong>thay thế phán đoán lâm sàng</strong>: Chúng không thể nhìn thấy toàn bộ con người, đánh giá khả năng chịu đựng, xem xét
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
                  <li>cơ thể cần năng lượng để chống nhiễm trùng, nhưng bệnh nhân không thể ăn nhiều</li>
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
                  <li>cơ thể cần năng lượng cho cả phục hồi và hoạt động tăng lên</li>
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
                  <li>cơ thể cần năng lượng cho hoạt động và tái tạo sức mạnh</li>
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
          Những Sai Lầm Phổ Biến Khi Theo Đuổi Con Số Chính Xác
        </SectionHeading>
        <ContentBlock>
          <p>
            Khi chúng ta đối xử với nhu cầu được tính toán như giá trị chính xác, một số sai lầm phổ biến có thể xảy ra. Những sai lầm này là
            dễ hiểu—chúng thường đến từ mong muốn làm điều đúng và có hướng dẫn rõ ràng. Hiểu
            tại sao những sai lầm này xảy ra giúp chúng ta tránh chúng và sử dụng công cụ lâm sàng an toàn hơn.
          </p>
        </ContentBlock>
        <div className="mt-6 space-y-4 sm:space-y-5">
          <EducationalNote variant="common-pitfall" title='Đối Xử Với Nhu Cầu Được Tính Toán Như Chỉ Định'>
            <p>
              <strong>Điều gì xảy ra:</strong> Một tính toán gợi ý một con số cụ thể (ví dụ: 1,800 calo), và
              nhóm chăm sóc đối xử với điều này như một chỉ định phải được đáp ứng, bất kể bệnh nhân có thể
              thực sự chịu đựng gì hoặc những gì phù hợp với tình huống của họ.
            </p>
            <p>
              <strong>Tại sao điều này xảy ra:</strong> Muốn có hướng dẫn rõ ràng là điều tự nhiên. Một con số cụ thể cảm thấy
              dứt khoát và có thể hành động. Đối với các bác sĩ lâm sàng mới vào nghề hoặc y tá tuân theo giao thức, có một
              mục tiêu rõ ràng có thể cảm thấy yên tâm.
            </p>
            <p>
              <strong>Tại sao đây là vấn đề:</strong> Tính toán cung cấp ước tính khởi đầu, không phải chỉ định. Những gì
              một người thực sự có thể chịu đựng, những gì phù hợp với mục tiêu chăm sóc của họ, và những gì thực tế có thể tất cả
              quan trọng hơn những gì công thức gợi ý. Cố gắng ép buộc một con số cụ thể có thể dẫn đến khó chịu,
              không dung nạp, hoặc chăm sóc không phù hợp.
            </p>
            <p>
              <strong>Những gì các bác sĩ lâm sàng có kinh nghiệm thường làm:</strong> Nhiều bác sĩ lâm sàng có kinh nghiệm sử dụng tính toán
              để thiết lập một phạm vi hợp lý, sau đó bắt đầu một cách bảo thủ trong phạm vi đó. Họ điều chỉnh dựa trên
              những gì bệnh nhân thực sự có thể chịu đựng và cách họ phản ứng. Tính toán hướng dẫn họ, nhưng phản ứng bệnh nhân
              xác định kế hoạch.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Bỏ Qua Khả Năng Chịu Đựng Và Lượng Ăn Vào'>
            <p>
              <strong>Điều gì xảy ra:</strong> Nhóm chăm sóc tập trung vào việc đáp ứng nhu cầu được tính toán nhưng không chú ý đủ
              đến những gì bệnh nhân thực sự đang ăn hoặc những gì họ có thể chịu đựng. Y tá ghi chép rằng
              bệnh nhân chỉ ăn 30–40% bữa ăn, nhưng kế hoạch không thay đổi vì "họ cần 1,800 calo."
            </p>
            <p>
              <strong>Tại sao điều này xảy ra:</strong> Dễ tập trung vào con số mục tiêu và mất tầm nhìn về những gì
              thực sự đang xảy ra. Khi có khoảng cách giữa những gì được tính toán và những gì có thể, có thể cảm thấy
              như giải pháp là đẩy mạnh hơn để đáp ứng mục tiêu.
            </p>
            <p>
              <strong>Tại sao đây là vấn đề:</strong> Những gì bệnh nhân thực sự tiêu thụ quan trọng hơn những gì tính toán
              gợi ý họ nên tiêu thụ. Nếu ai đó không thể chịu đựng lượng được tính toán, ép buộc sẽ không giúp.
              Bỏ qua khả năng chịu đựng và lượng ăn vào thực tế có thể dẫn đến lãng phí thức ăn, khó chịu bệnh nhân, và bỏ lỡ cơ hội
              để giải quyết các vấn đề tiềm ẩn (như buồn nôn, đau, hoặc trầm cảm) đang ngăn cản lượng ăn vào đầy đủ.
            </p>
            <p>
              <strong>Những gì các bác sĩ lâm sàng có kinh nghiệm thường làm:</strong> Nhiều bác sĩ lâm sàng có kinh nghiệm chú ý kỹ
              đến những gì bệnh nhân thực sự ăn và những gì họ có thể chịu đựng. Ghi chép hàng ngày của y tá về lượng ăn vào là
              cần thiết—nó cho thấy khoảng cách giữa nhu cầu được tính toán và thực tế. Nhiều nhóm chăm sóc giải quyết các triệu chứng và
              rào cản ăn uống trước, sau đó dần dần tăng lượng ăn vào khi được dung nạp. Mục tiêu là đáp ứng nhu cầu
              trong những gì có thể, không phải ép buộc một mục tiêu không thể.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Cho Ăn Quá Mức Trong Bệnh Cấp Tính Sớm'>
            <p>
              <strong>Điều gì xảy ra:</strong> Một bệnh nhân được nhập viện với nhiễm trùng nặng hoặc bệnh nặng. Nhóm
              chăm sóc tính toán nhu cầu và ngay lập tức cố gắng đáp ứng mục tiêu đầy đủ, mặc dù bệnh nhân
              rất bệnh, có thể đang thở máy, và cơ thể của họ đang trong trạng thái stress.
            </p>
            <p>
              <strong>Tại sao điều này xảy ra:</strong> Muốn hỗ trợ ai đó rất bệnh là điều tự nhiên.
              Tính toán gợi ý một mục tiêu, và cảm thấy như đáp ứng mục tiêu đó sẽ giúp. Thường có mối quan tâm
              về việc cho ăn không đủ, điều này có thể dẫn đến cố gắng tối đa hóa lượng ăn vào.
            </p>
            <p>
              <strong>Tại sao đây là vấn đề:</strong> Trong bệnh cấp tính sớm, cơ thể đang trong trạng thái stress.
              Cho ăn quá mức trong giai đoạn này có thể tăng stress chuyển hóa, làm xấu đi chức năng cơ quan, hoặc gây
              biến chứng. cơ thể có thể không thể xử lý lượng dinh dưỡng lớn một cách hiệu quả trong
              bệnh nặng. Bắt đầu với cho ăn tích cực có thể không phù hợp.
            </p>
            <p>
              <strong>Những gì các bác sĩ lâm sàng có kinh nghiệm thường làm:</strong> Trong bệnh cấp tính sớm, nhiều bác sĩ lâm sàng có kinh nghiệm
              bắt đầu một cách bảo thủ. Khả năng xử lý dinh dưỡng của cơ thể thường giảm trong
              bệnh nặng. Họ có thể dần dần tăng dinh dưỡng khi bệnh nhân ổn định và tình trạng của họ
              cải thiện. Điều này đặc biệt quan trọng trong bệnh nặng, nơi khả năng chịu đựng thường hạn chế.
              Mục tiêu là hỗ trợ cơ thể mà không làm quá tải nó trong giai đoạn stress nhất.
            </p>
          </EducationalNote>

          <EducationalNote variant="common-pitfall" title='Đánh Giá Thấp Protein Ở Bệnh Nhân Cao Tuổi'>
            <p>
              <strong>Điều gì xảy ra:</strong> Một bệnh nhân cao tuổi đang phục hồi sau phẫu thuật hoặc bệnh tật. Nhóm chăm sóc
              tập trung vào việc đáp ứng nhu cầu năng lượng (calo) nhưng không chú ý đủ đến protein. Bệnh nhân
              có thể đang nhận đủ calo nhưng không đủ protein để hỗ trợ chữa lành và duy trì khối lượng cơ.
            </p>
            <p>
              <strong>Tại sao điều này xảy ra:</strong> Tập trung vào tổng calo như mục tiêu chính là phổ biến. Nhu cầu
              protein có thể bị bỏ qua, đặc biệt nếu bệnh nhân đang ăn và đáp ứng mục tiêu calo. Đối với bệnh nhân cao tuổi,
              những người có thể có cảm giác ngon miệng giảm và khẩu phần nhỏ hơn, dễ bỏ lỡ rằng họ không nhận được
              đủ protein trong những gì họ có thể ăn.
            </p>
            <p>
              <strong>Tại sao đây là vấn đề:</strong> Bệnh nhân cao tuổi có nguy cơ mất cơ cao hơn, đặc biệt
              trong bệnh tật và phục hồi. Họ cần protein đầy đủ để chữa lành vết thương, duy trì khối lượng cơ và
              phục hồi chức năng. Nhận đủ calo nhưng không đủ protein có thể dẫn đến chữa lành chậm, tiếp tục
              mất cơ, yếu, và phục hồi kém. Điều này đặc biệt quan trọng vì bệnh nhân cao tuổi có thể
              có ít biên độ lỗi hơn—họ không thể để mất khối lượng cơ.
            </p>
            <p>
              <strong>Những gì các bác sĩ lâm sàng có kinh nghiệm thường làm:</strong> Nhiều bác sĩ lâm sàng có kinh nghiệm chú ý đến
              cả nhu cầu năng lượng và protein, đặc biệt ở bệnh nhân cao tuổi. Họ xem xét những gì bệnh nhân thực sự
              đang ăn—họ có nhận được thực phẩm giàu protein, hay chủ yếu carbohydrate? Một số nhóm chăm sóc xem xét bổ sung
              protein hoặc thực phẩm giàu protein nếu cần, trong những gì bệnh nhân có thể chịu đựng. Y tá ghi chép
              những gì bệnh nhân thực sự tiêu thụ (không chỉ bao nhiêu) giúp xác định khoảng trống protein. Mục tiêu là đáp ứng
              cả nhu cầu năng lượng và protein, không chỉ calo.
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
          Cách Các Bác Sĩ Lâm Sàng Sử Dụng Phạm Vi Thay Vì Mục Tiêu
        </SectionHeading>
        <ContentBlock>
          <p>
            Thay vì theo đuổi con số chính xác, các bác sĩ lâm sàng có kinh nghiệm suy nghĩ trong <strong>phạm vi</strong>. Cách tiếp cận này
            thừa nhận sự không chắc chắn, cho phép linh hoạt, và hỗ trợ chăm sóc dinh dưỡng an toàn hơn.
          </p>

          <div className="mt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Tại Sao Các Bác Sĩ Lâm Sàng Làm Việc Với Phạm Vi
              </h3>
              <p>
                Các bác sĩ lâm sàng làm việc với phạm vi vì họ nhận ra rằng nhu cầu dinh dưỡng là ước tính, không phải giá trị
                chính xác. Một phạm vi thừa nhận rằng chúng ta không biết nhu cầu chính xác—chúng ta đang làm việc với ước tính
                dựa trên trung bình dân số, không phải đo lường cá nhân.
              </p>
              <p>
                Làm việc với phạm vi trung thực hơn so với tuyên bố một con số chính xác. Nó phản ánh thực tế rằng
                các phương pháp ước tính khác nhau tạo ra kết quả khác nhau, và điều đó là bình thường. Nó cũng thừa nhận
                rằng sự biến đổi cá nhân có nghĩa là cùng một tính toán có thể không phù hợp với tất cả mọi người, hoặc thậm chí cùng một
                người trong các tình huống khác nhau.
              </p>
              <p>
                Phạm vi cũng ngăn chặn sự tự tin quá mức. Một con số duy nhất có thể cảm thấy như một "mục tiêu" để đạt chính xác, điều
                không phải là cách dinh dưỡng hoạt động. Phạm vi nhắc nhở chúng ta rằng chúng ta đang làm việc với ước tính, không phải giá trị chính xác.
                Điều này giúp các bác sĩ lâm sàng, y tá và sinh viên tránh cạm bẫy đối xử với tính toán như câu trả lời
                dứt khoát.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Cách Phạm Vi Cho Phép Linh Hoạt
              </h3>
              <p>
                Phạm vi cho phép linh hoạt vì một người có thể làm tốt ở bất kỳ đâu trong phạm vi, tùy thuộc vào
                cảm giác ngon miệng, khả năng chịu đựng, mức độ hoạt động và các yếu tố khác của họ. Sự linh hoạt này quan trọng khi
                đối phó với bệnh nhân thực tế có khả năng hàng ngày thay đổi.
              </p>
              <p>
                Ví dụ, ai đó có thể làm tốt ở cuối thấp hơn của phạm vi vào những ngày họ cảm thấy không khỏe
                hoặc có cảm giác ngon miệng ít hơn, và ở cuối cao hơn vào những ngày họ cảm thấy tốt hơn và hoạt động nhiều hơn.
                Phạm vi chứa đựng sự biến đổi tự nhiên này mà không tạo ra các mục tiêu cứng nhắc không phù hợp với thực tế.
              </p>
              <p>
                Phạm vi cũng cho phép nhóm chăm sóc bắt đầu một cách bảo thủ và điều chỉnh dựa trên những gì bệnh nhân có thể
                thực sự chịu đựng. Thay vì cố gắng đạt một con số chính xác ngay lập tức, nhóm có thể bắt đầu trong
                phạm vi và điều chỉnh lên hoặc xuống dựa trên phản ứng bệnh nhân. Cách tiếp cận này an toàn hơn và thực tế hơn
                so với ép buộc một mục tiêu cụ thể.
              </p>
              <p>
                Sự linh hoạt này đặc biệt quan trọng vì khả năng chịu đựng và lượng ăn vào có thể thay đổi hàng ngày. Một
                phạm vi chứa đựng những thay đổi này, trong khi một con số duy nhất sẽ yêu cầu điều chỉnh liên tục hoặc tạo ra
                kỳ vọng không thực tế.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                Cách Theo Dõi Hướng Dẫn Điều Chỉnh
              </h3>
              <p>
                Phạm vi hướng dẫn theo dõi và điều chỉnh. Nếu ai đó liên tục rơi xuống dưới phạm vi, nó báo hiệu
                nhu cầu đánh giá lại—có thể phạm vi cần điều chỉnh, hoặc có thể có rào cản ăn uống cần
                được giải quyết. Nếu ai đó liên tục vượt quá phạm vi, nó có thể báo hiệu rằng phạm vi cần
                điều chỉnh, hoặc có mối quan tâm về việc cho ăn quá mức.
              </p>
              <p>
                Tuy nhiên, phạm vi tự nó không phải là hướng dẫn duy nhất. Quan trọng hơn, theo dõi cách người đó phản ứng
                hướng dẫn điều chỉnh. Nếu ai đó đang làm tốt (chữa lành, duy trì cân nặng, cảm thấy tốt hơn) ngay cả khi
                họ ở dưới phạm vi được tính toán, điều đó có thể phù hợp với họ. Nếu ai đó đang vật lộn
                (chữa lành kém, tiếp tục giảm cân, yếu) ngay cả khi họ đang đáp ứng phạm vi, điều đó báo hiệu
                nhu cầu đánh giá lại.
              </p>
              <p>
                Theo dõi hàng ngày của y tá về lượng ăn vào, triệu chứng và phản ứng bệnh nhân cung cấp thông tin thiết yếu
                cho điều chỉnh. Theo dõi này cho thấy không chỉ liệu ai đó có đáp ứng một con số, mà cách họ
                thực sự đang phản ứng. Các bác sĩ lâm sàng sử dụng thông tin này để điều chỉnh kế hoạch—không chỉ để đạt mục tiêu,
                mà để hỗ trợ nhu cầu và phản ứng thực tế của người đó.
              </p>
              <p>
                Quy trình liên tục này của theo dõi và điều chỉnh là điều làm cho phạm vi hữu ích. Phạm vi cung cấp
                cấu trúc và hướng dẫn, nhưng phản ứng bệnh nhân xác định kế hoạch thực tế. Đây là lý do tại sao đánh giá lại
                là trung tâm của dinh dưỡng lâm sàng—phạm vi là điểm khởi đầu, không phải điểm đến cố định.
              </p>
            </div>
          </div>

          <EducationalNote variant="clinical-insight">
            <p>
              <strong>Cách các bác sĩ lâm sàng có kinh nghiệm làm việc:</strong> Một bác sĩ lâm sàng tính toán nhu cầu sử dụng nhiều phương pháp
              và nhận được kết quả khác nhau từ mỗi phương pháp. Họ thiết lập một phạm vi để tính đến sự biến đổi và
              không chắc chắn này. Họ bắt đầu bệnh nhân một cách bảo thủ trong phạm vi. Y tá theo dõi lượng ăn vào hàng ngày
              và quan sát cách bệnh nhân đang dung nạp dinh dưỡng và cách họ đang phản ứng lâm sàng. Dựa trên
              theo dõi này, nhóm chăm sóc điều chỉnh—họ có thể dần dần tăng nếu bệnh nhân đang dung nạp tốt
              và cho thấy dấu hiệu cải thiện, hoặc họ có thể ở nơi họ đang ở, hoặc thậm chí giảm nếu có
              mối quan tâm. Phạm vi hướng dẫn họ, nhưng phản ứng bệnh nhân xác định kế hoạch thực tế.
            </p>
          </EducationalNote>
          <p>
            Cách tiếp cận này nhận ra rằng nhu cầu dinh dưỡng là phức tạp, động và phụ thuộc vào bối cảnh. Không có
            con số phổ quát vì con người và tình huống quá đa dạng cho câu trả lời đơn giản. Phạm vi cung cấp
            cấu trúc trong khi duy trì sự linh hoạt mà chăm sóc lâm sàng thực tế đòi hỏi.
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
          Điều Cần Rút Ra
        </SectionHeading>
        <ContentBlock>
          <p>
            Hiểu tại sao không có con số phổ quát cho nhu cầu dinh dưỡng có thể cảm thấy quá tải lúc đầu, nhưng
            nó thực sự yên tâm. Nó có nghĩa là bạn không cần tìm con số "hoàn hảo"—bạn cần suy nghĩ
            cẩn thận về những gì phù hợp cho mỗi người trong tình huống cụ thể của họ. Đây là những điểm chính
            cần rút ra để hướng dẫn thực hành của bạn:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Không Có Con Số Đúng Duy Nhất Tồn Tại
            </h3>
            <p className="text-blue-800 mb-2">
              Đây thực sự là tin tốt. Nó có nghĩa là bạn không cần lo lắng về việc tìm câu trả lời "hoàn hảo".
              Các phương pháp ước tính khác nhau tạo ra các con số khác nhau, và điều đó là bình thường. Bệnh nhân có cùng
              cân nặng có thể có nhu cầu khác nhau. Nhu cầu thay đổi theo thời gian. Sự biến đổi này là thực tế và dự kiến—nó
              không phải là lỗi trong đánh giá của bạn hoặc dấu hiệu rằng bạn đang làm sai điều gì đó.
            </p>
            <p className="text-blue-800">
              Thay vì theo đuổi một con số chính xác, hãy suy nghĩ trong phạm vi. Phạm vi thừa nhận sự không chắc chắn và cho phép
              linh hoạt. Chúng cung cấp hướng dẫn hữu ích mà không tạo ra các mục tiêu cứng nhắc không phù hợp với thực tế.
              Cách tiếp cận này trung thực hơn và thực tế hơn so với cố gắng tìm một câu trả lời "đúng" duy nhất.
            </p>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Số Liệu Hỗ Trợ Suy Nghĩ, Không Phải Quyết Định
            </h3>
            <p className="text-blue-800 mb-2">
              Công cụ lâm sàng—máy tính, công thức, công cụ sàng lọc—có giá trị. Chúng giúp bạn ước tính nhu cầu,
              xác định phạm vi, và cấu trúc suy nghĩ của bạn. Chúng cung cấp điểm khởi đầu và giúp bạn xem xét
              các yếu tố quan trọng. Nhưng chúng không đưa ra quyết định cho bạn.
            </p>
            <p className="text-blue-800">
              Số liệu thông báo suy nghĩ của bạn, nhưng phán đoán lâm sàng hướng dẫn quyết định của bạn. Toàn bộ con người—các
              triệu chứng của họ, bối cảnh của họ, phản ứng của họ, mục tiêu chăm sóc của họ—quan trọng hơn bất kỳ tính toán nào.
              Sử dụng công cụ để hỗ trợ suy nghĩ của bạn, nhưng để phán đoán xác định kế hoạch. Đây không phải về việc bỏ qua
              số liệu—nó là về việc sử dụng chúng một cách phù hợp, như hỗ trợ cho suy nghĩ thay vì thay thế cho phán đoán.
            </p>
          </div>

          <div className="rounded-md bg-blue-50 border border-blue-200 p-5">
            <h3 className="text-lg font-semibold text-blue-900 mb-3">
              Bối Cảnh Lâm Sàng Và Đánh Giá Lại Quan Trọng Nhất
            </h3>
            <p className="text-blue-800 mb-2">
              Các yếu tố quan trọng nhất trong chăm sóc dinh dưỡng không phải là số liệu từ tính toán—chúng là bối cảnh
              lâm sàng và đánh giá lại liên tục. Tình huống của người đó là gì? Mục tiêu của họ là gì? Họ có thể
              thực sự chịu đựng gì? Họ đang phản ứng như thế nào? Những câu hỏi này quan trọng hơn bất kỳ công thức nào.
            </p>
            <p className="text-blue-800">
              Đánh giá lại là trung tâm của dinh dưỡng lâm sàng. Ước tính ban đầu là điểm khởi đầu, không phải mục tiêu
              cố định. Đánh giá lại thường xuyên—được thông báo bởi theo dõi hàng ngày của y tá, phản ứng bệnh nhân và
              thay đổi lâm sàng—đảm bảo rằng hỗ trợ dinh dưỡng vẫn phù hợp khi hoàn cảnh thay đổi. Quy trình liên tục
              này của đánh giá, theo dõi và điều chỉnh là điều làm cho chăm sóc dinh dưỡng hiệu quả. Nó không
              phải về việc tìm con số đúng một lần—nó là về việc luôn phản ứng với thay đổi.
            </p>
          </div>

          <EducationalNote variant="info" title="Lời Nhắc Nhở Yên Tâm">
            <p>
              Nếu bạn cảm thấy không chắc chắn về ước tính nhu cầu dinh dưỡng, điều đó là dễ hiểu. Đây là phức tạp,
              và không có câu trả lời đơn giản. Nhưng hãy nhớ: bạn không cần tìm con số hoàn hảo. Bạn cần
              suy nghĩ cẩn thận, xem xét toàn bộ con người, theo dõi phản ứng, và điều chỉnh khi cần. Đó là những gì
              các bác sĩ lâm sàng có kinh nghiệm làm—không phải vì họ có tất cả câu trả lời, mà vì họ nhận ra rằng
              chăm sóc cẩn thận, phản ứng quan trọng hơn tính toán chính xác.
            </p>
            <p>
              Sử dụng công cụ để hỗ trợ suy nghĩ của bạn. Chú ý đến những gì bệnh nhân thực sự tiêu thụ và cách họ
              phản ứng. Xem xét bối cảnh lâm sàng. Đánh giá lại thường xuyên. Tin tưởng phán đoán của bạn. Cách tiếp cận này—suy nghĩ
              trong phạm vi, theo dõi phản ứng, điều chỉnh khi cần—là cách chăm sóc dinh dưỡng hiệu quả hoạt động. Bạn không
              cần có tất cả câu trả lời ngay lập tức. Bạn chỉ cần suy nghĩ cẩn thận và luôn phản ứng với
              những gì bạn quan sát.
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
          Tìm Hiểu Thêm
        </SectionHeading>
        <ContentBlock>
          <p>
            Trang này giải thích tại sao không có con số phổ quát. Để biết thêm thông tin chi tiết về cách
            nhu cầu được ước tính trong thực hành, hãy khám phá các tài nguyên này:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Ước Tính Nhu Cầu Chi Tiết
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Tìm hiểu thêm về các phương pháp ước tính khác nhau, tại sao phạm vi quan trọng, và cách các bác sĩ lâm sàng
              tiếp cận ước tính nhu cầu trong thực hành.
            </p>
            <Link
              href="/knowledge/needs-estimation"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Đọc về ước tính nhu cầu →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Quy Trình Đánh Giá Đầy Đủ
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Hiểu cách ước tính nhu cầu phù hợp với quy trình đánh giá rộng hơn, bao gồm
              sàng lọc và đánh giá lượng ăn vào.
            </p>
            <Link
              href="/knowledge/assessment-process"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Đọc hướng dẫn đánh giá →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Công Cụ Tương Tác
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Thực hành ước tính nhu cầu với máy tính tương tác của chúng tôi, được thiết kế cho việc học:
            </p>
            <Link
              href="/tools/energy-protein-calculator"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Máy Tính Năng Lượng & Protein →
            </Link>
            <p className="text-xs text-blue-700 mt-2 italic">
              Công cụ này chỉ dành cho mục đích giáo dục và không nên được sử dụng để ra quyết định lâm sàng.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Related Tools */}
      <ContentSection ariaLabelledBy="tools-heading">
        <SectionHeading id="tools-heading" variant="default">
          Công cụ liên quan
        </SectionHeading>
        <ContentBlock>
          <p className="mb-4">
            Các công cụ giáo dục này giúp bạn thực hành các nguyên tắc đã học về ước tính nhu cầu dinh dưỡng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card href="/tools/energy-protein-calculator">
              <CardHeader icon={CheckCircle} title="Máy tính năng lượng & Protein" />
              <CardContent>
                <p className="text-body-sm">
                  Công cụ giáo dục để ước tính nhu cầu năng lượng và protein, minh họa các khoảng giá trị
                  và cách các bác sĩ lâm sàng sử dụng ước tính trong thực hành.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/fluid-requirements">
              <CardHeader icon={CheckCircle} title="Nhu cầu Dịch" />
              <CardContent>
                <p className="text-body-sm">
                  Tính nhu cầu dịch hàng ngày, minh họa cách ước tính nhu cầu dịch với các điều chỉnh lâm sàng.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/bmi-body-composition">
              <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
              <CardContent>
                <p className="text-body-sm">
                  Tính các chỉ số cơ bản như BMI, IBW, ABW, và BSA - các chỉ số được sử dụng trong ước tính nhu cầu dinh dưỡng.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/micronutrient-assessment">
              <CardHeader icon={CheckCircle} title="Đánh giá Vi chất" />
              <CardContent>
                <p className="text-body-sm">
                  Ước tính nhu cầu vi chất (vitamin và khoáng chất), minh họa cách ước tính nhu cầu vi chất.
                </p>
              </CardContent>
            </Card>
          </div>
        </ContentBlock>
      </ContentSection>

      {/* 
        Safety & Limitations
        Educational Intent: Clearly states the educational purpose and
        limitations, ensuring readers understand this is not a clinical tool
      */}
      <ContentSection ariaLabelledBy="safety-heading">
        <SectionHeading id="safety-heading" variant="amber">
          An Toàn & Giới Hạn
        </SectionHeading>
        <EducationalNote variant="warning" title="⚠️ Tuyên Bố Miễn Trừ Trách Nhiệm Quan Trọng">
          <p className="mb-2">
            <strong>Trang web này và nội dung của nó chỉ dành cho mục đích giáo dục.</strong> Chúng không cung cấp
            lời khuyên y tế, chẩn đoán hoặc điều trị. Chúng không tạo mối quan hệ bác sĩ–bệnh nhân.
            Chúng không được sử dụng để ra quyết định lâm sàng, chỉ định chế độ ăn hoặc nuôi ăn, hoặc đưa ra
            quyết định điều trị.
          </p>
          <p>
            Nếu bạn có mối quan tâm về tình trạng dinh dưỡng hoặc sức khỏe, hãy tư vấn với nhà cung cấp chăm sóc sức khỏe
            có trình độ hoặc chuyên gia dinh dưỡng đã đăng ký để được đánh giá lâm sàng cá nhân hóa.
          </p>
        </EducationalNote>

        <ContentBlock className="mt-6">
          <p>
            Nội dung này được thiết kế để hỗ trợ học tập và hiểu biết về các khái niệm dinh dưỡng lâm sàng.
            Nó giúp bạn hiểu tại sao nhu cầu dinh dưỡng không thể được giảm xuống thành các con số phổ quát và cách
            các bác sĩ lâm sàng suy nghĩ về ước tính nhu cầu trong thực hành.
          </p>
          <p>
            Tuy nhiên, nội dung này không thể và không nên được sử dụng để đưa ra quyết định lâm sàng. Đánh giá lâm sàng thực sự
            đòi hỏi đánh giá toàn diện, phán đoán chuyên nghiệp và xem xét
            toàn bộ bối cảnh lâm sàng—không có điều nào trong số này có thể được nắm bắt bởi nội dung giáo dục một mình.
          </p>
        </ContentBlock>
      </ContentSection>
    </main>
  );
}

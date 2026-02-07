import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { SectionHeading } from "./components/SectionHeading";
import { ContentSection } from "./components/ContentSection";
import { EducationalNote } from "./components/EducationalNote";
import { ContentBlock } from "./components/ContentBlock";
import { Card, CardHeader, CardContent } from "../components/Card";

/**
 * Nutrition Assessment Overview Page
 * 
 * Educational Intent:
 * This page provides a high-level overview of clinical nutrition assessment,
 * serving as an entry point for understanding the assessment process.
 * It explains key concepts without providing treatment recommendations,
 * using descriptive rather than imperative language.
 * 
 * Target Audience:
 * - Clinicians new to clinical nutrition
 * - Nurses involved in screening
 * - Medical students
 * - Educated readers interested in understanding the process
 */
export default function NutritionAssessmentOverviewPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-12 px-4 py-8 sm:px-6 lg:px-8">
      {/* 
        Page Header
        Educational Intent: Introduces the topic and sets expectations
        for what readers will learn, emphasizing educational purpose
      */}
      <header className="space-y-5 border-b border-neutral-200 pb-8">
        <h1 className="text-3xl font-semibold leading-tight text-neutral-900 sm:text-4xl">
          Tổng Quan Đánh Giá Dinh Dưỡng
        </h1>
        <ContentBlock>
          <p>
            Đánh giá dinh dưỡng lâm sàng là một quy trình có cấu trúc giúp các nhóm chăm sóc sức khỏe hiểu
            tình trạng dinh dưỡng và nhu cầu của một người. Tổng quan này giải thích các khái niệm cơ bản
            và cách chúng hoạt động cùng nhau trong thực hành lâm sàng.
          </p>
          <p>
            Nội dung này được thiết kế cho mục đích giáo dục để giúp bạn hiểu các khái niệm đánh giá.
            Nó không cung cấp khuyến nghị điều trị hoặc thay thế hướng dẫn lâm sàng hoặc đào tạo chuyên nghiệp.
          </p>
        </ContentBlock>
      </header>

      {/* 
        What is Nutrition Assessment?
        Educational Intent: Defines the concept clearly, explaining it as
        a process rather than a single calculation or test
      */}
      <ContentSection ariaLabelledBy="what-is-heading">
        <SectionHeading id="what-is-heading">
          Đánh Giá Dinh Dưỡng Là Gì?
        </SectionHeading>
        <ContentBlock>
          <p>
            Đánh giá dinh dưỡng là <strong>một quy trình có hệ thống</strong> để thu thập và giải thích
            thông tin về tình trạng dinh dưỡng của một người. Nó không phải là một xét nghiệm hoặc tính toán đơn lẻ,
            mà là một cách suy nghĩ về dinh dưỡng trong bối cảnh sức khỏe và bệnh tật.
          </p>
          <p>
            Quy trình đánh giá thường bao gồm ba bước chính:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Sàng lọc</strong>: Kiểm tra nhanh để xác định xem có nguy cơ dinh dưỡng
              có thể cần được chú ý
            </li>
            <li>
              <strong>Ước tính nhu cầu</strong>: Ước tính những gì cơ thể người đó có thể cần
              về năng lượng, protein và các chất dinh dưỡng khác
            </li>
            <li>
              <strong>Đánh giá lượng ăn vào</strong>: Đo lường những gì người đó thực sự đang tiêu thụ
              và so sánh với nhu cầu ước tính
            </li>
          </ul>
          <p>
            Các bước này làm việc cùng nhau để giúp các bác sĩ lâm sàng hiểu toàn bộ bức tranh về
            tình huống dinh dưỡng của một người và xác định nơi có thể cần chú ý.
          </p>
        </ContentBlock>
      </ContentSection>

      {/* 
        Why Assessment Matters
        Educational Intent: Explains the value of assessment without
        making alarmist claims or providing treatment directives
      */}
      <ContentSection ariaLabelledBy="why-matters-heading">
        <SectionHeading id="why-matters-heading">
          Tại Sao Đánh Giá Quan Trọng
        </SectionHeading>
        <ContentBlock>
          <p>
            Đánh giá dinh dưỡng giúp các nhóm chăm sóc sức khỏe trả lời các câu hỏi quan trọng về
            tình trạng dinh dưỡng của một người. Nó cung cấp cấu trúc cho việc suy nghĩ về dinh dưỡng trong môi trường lâm sàng
            và giúp xác định các tình huống nơi dinh dưỡng có thể là mối quan tâm.
          </p>
          <p>
            Đánh giá có giá trị vì nó:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Giúp xác định các mối quan tâm dinh dưỡng sớm, khi có thể có nhiều lựa chọn hơn
            </li>
            <li>
              Cung cấp khung để hiểu cách dinh dưỡng liên quan đến sức khỏe tổng thể của một người
            </li>
            <li>
              Hỗ trợ lý luận lâm sàng bằng cách tổ chức thông tin một cách có cấu trúc
            </li>
            <li>
              Giúp ưu tiên sự chú ý và nguồn lực dựa trên nhu cầu đã xác định
            </li>
          </ul>
          <EducationalNote variant="info" title="Đánh Giá Thông Báo, Không Chỉ Đạo">
            <p>
              Đánh giá giúp ưu tiên sự chú ý và hướng dẫn lý luận lâm sàng, nhưng nó không
              thay thế phán đoán chuyên nghiệp hoặc sở thích bệnh nhân. Đánh giá thông báo quyết định—
              nó không tự động đưa ra quyết định.
            </p>
          </EducationalNote>
        </ContentBlock>
      </ContentSection>

      {/* 
        The Assessment Process
        Educational Intent: Provides a clear overview of the process flow
        without prescribing specific actions or treatments
      */}
      <ContentSection ariaLabelledBy="process-heading">
        <SectionHeading id="process-heading">
          Quy Trình Đánh Giá
        </SectionHeading>
        <ContentBlock>
          <p>
            Đánh giá tuân theo một trình tự logic nơi mỗi bước xây dựng trên bước trước đó.
            Hiểu luồng này giúp hiểu cách các phần phù hợp với nhau.
          </p>
        </ContentBlock>

        {/* 
          Step 1: Screening
          Educational Intent: Explains screening as a first step without
          prescribing when or how it must be done
        */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            Bước 1: Sàng Lọc
          </h3>
          <ContentBlock>
            <p>
              Sàng lọc thường là bước đầu tiên. Đó là một kiểm tra nhanh để xác định xem có
              nguy cơ dinh dưỡng có thể cần được chú ý thêm. Các công cụ sàng lọc sử dụng các câu hỏi đơn giản
              về thay đổi cân nặng, cảm giác ngon miệng và bệnh tật để cung cấp điểm nguy cơ.
            </p>
            <p>
              Các công cụ sàng lọc phổ biến bao gồm NRS-2002 và PG-SGA. Những công cụ này được thiết kế để
              nhanh và thực tế, thường chỉ mất vài phút để hoàn thành.
            </p>
            <p>
              Sàng lọc xác định <strong>nguy cơ</strong>, không phải chẩn đoán. Kết quả sàng lọc nguy cơ cao
              cho thấy rằng đánh giá đầy đủ có thể hữu ích, không phải là suy dinh dưỡng chắc chắn có mặt.
            </p>
          </ContentBlock>
        </div>

        {/* 
          Step 2: Needs Estimation
          Educational Intent: Explains needs estimation as a conceptual step,
          avoiding presentation of formulas as definitive answers
        */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            Bước 2: Ước Tính Nhu Cầu
          </h3>
          <ContentBlock>
            <p>
              Khi sàng lọc xác định một nguy cơ tiềm ẩn, bước tiếp theo là ước tính những gì cơ thể người đó
              có thể cần. Điều này liên quan đến việc xem xét các yếu tố như tuổi, kích thước, mức độ hoạt động,
              và bối cảnh lâm sàng (bệnh tật, phục hồi, điều kiện đặc biệt).
            </p>
            <p>
              Điều quan trọng là hiểu rằng nhu cầu là <strong>ước tính, không phải mục tiêu chính xác</strong>.
              Các phương pháp ước tính khác nhau tồn tại, và chúng thường tạo ra các con số khác nhau. Điều này là
              bình thường và dự kiến—không có phương pháp đơn lẻ nào phù hợp với tất cả các tình huống.
            </p>
            <p>
              Các bác sĩ lâm sàng thường suy nghĩ trong <strong>phạm vi</strong> thay vì con số chính xác. Ví dụ,
              "1,600–2,000 kcal/ngày" hoặc "25–30 kcal/kg/ngày" thừa nhận sự không chắc chắn và cho phép linh hoạt.
            </p>
          </ContentBlock>
        </div>

        {/* 
          Step 3: Intake Assessment
          Educational Intent: Explains how to assess actual intake without
          prescribing specific monitoring protocols
        */}
        <div className="mt-6 space-y-4">
          <h3 className="text-xl font-semibold text-neutral-900">
            Bước 3: Đánh Giá Lượng Ăn Vào
          </h3>
          <ContentBlock>
            <p>
              Bước cuối cùng là đánh giá những gì người đó thực sự đang tiêu thụ. Điều này liên quan đến việc đo lường
              lượng ăn vào thực tế và so sánh với nhu cầu ước tính để xác định bất kỳ khoảng trống nào.
            </p>
            <p>
              Thường có sự khác biệt giữa dinh dưỡng <strong>được chỉ định</strong> (những gì được yêu cầu hoặc lên kế hoạch)
              và <strong>được cung cấp</strong> (những gì thực sự được tiêu thụ). Chỉ dinh dưỡng được cung cấp
              ảnh hưởng đến kết quả sức khỏe.
            </p>
            <p>
              Các bác sĩ lâm sàng thường xem xét <strong>xu hướng theo thời gian</strong> thay vì ảnh chụp một ngày.
              Mô hình quan trọng hơn các ngày cô lập vì sự biến đổi ngày qua ngày là bình thường.
            </p>
          </ContentBlock>
        </div>
      </ContentSection>

      {/* 
        Key Concepts
        Educational Intent: Highlights important concepts that help readers
        understand assessment thinking, not specific protocols
      */}
      <ContentSection ariaLabelledBy="concepts-heading">
        <SectionHeading id="concepts-heading">
          Các Khái Niệm Chính Cần Hiểu
        </SectionHeading>
        <ContentBlock>
          <p>
            Hiểu các khái niệm này giúp hiểu cách đánh giá hoạt động trong thực hành:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Đánh Giá Là Động
            </h3>
            <ContentBlock>
              <p>
                Nhu cầu dinh dưỡng của một người thay đổi theo thời gian—với bệnh tật, phục hồi, mức độ hoạt động,
                và hoàn cảnh cuộc sống. Điều gì phù hợp tuần trước có thể không đúng hôm nay.
                Đó là lý do tại sao đánh giá bao gồm đánh giá lại và điều chỉnh thường xuyên.
              </p>
            </ContentBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Đánh Giá Phụ Thuộc Vào Bối Cảnh
            </h3>
            <ContentBlock>
              <p>
                Cùng một con số có ý nghĩa khác nhau cho những người khác nhau trong các tình huống khác nhau.
                Một người đang phục hồi sau phẫu thuật có nhu cầu khác với người quản lý tình trạng mạn tính.
                Người bị bệnh thận cần cân nhắc khác với người bị bệnh tim.
                Bối cảnh định hình mọi thứ.
              </p>
            </ContentBlock>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-neutral-900 mb-3">
              Số Liệu Thông Báo, Không Chỉ Định
            </h3>
            <ContentBlock>
              <p>
                Số liệu từ công cụ sàng lọc, tính toán nhu cầu và đánh giá lượng ăn vào là thông tin,
                không phải chỉ định. Chúng giúp cấu trúc suy nghĩ, nhưng chúng không tự động đưa ra quyết định.
                Phán đoán lâm sàng, sở thích bệnh nhân và mục tiêu chăm sóc đều đóng vai trò thiết yếu.
              </p>
            </ContentBlock>
          </div>
        </div>
      </ContentSection>

      {/* 
        Common Misunderstandings
        Educational Intent: Addresses misconceptions to help readers
        develop accurate understanding, not to prescribe behavior
      */}
      <ContentSection ariaLabelledBy="misunderstandings-heading">
        <SectionHeading id="misunderstandings-heading">
          Hiểu Lầm Phổ Biến
        </SectionHeading>
        <div className="space-y-4">
          <EducationalNote variant="warning" title='❌ "Nếu tôi tính toán nhu cầu, công việc đã xong"'>
            <p>
              <strong>Thực tế</strong>: Tính toán nhu cầu chỉ là khởi đầu. Đánh giá thường bao gồm
              đánh giá lượng ăn vào thực tế, xác định khoảng trống, xem xét các lựa chọn, theo dõi phản ứng và
              đánh giá lại thường xuyên. Ước tính nhu cầu cung cấp mục tiêu, nhưng đánh giá là một quy trình liên tục.
            </p>
          </EducationalNote>

          <EducationalNote variant="warning" title='❌ "Công cụ sàng lọc chẩn đoán suy dinh dưỡng"'>
            <p>
              <strong>Thực tế</strong>: Công cụ sàng lọc xác định nguy cơ, không phải chẩn đoán. Chúng chỉ ra ai có thể
              hưởng lợi từ đánh giá thêm, không phải ai chắc chắn bị suy dinh dưỡng. Chẩn đoán đòi hỏi
              đánh giá toàn diện bao gồm tiền sử chi tiết, khám thực thể, dữ liệu phòng thí nghiệm,
              và phán đoán lâm sàng.
            </p>
          </EducationalNote>

          <EducationalNote variant="warning" title='❌ "Công thức cho câu trả lời đúng"'>
            <p>
              <strong>Thực tế</strong>: Công thức cung cấp ước tính, không phải yêu cầu chính xác. Các phương pháp khác nhau
              tạo ra các con số khác nhau, và điều đó là bình thường. Công thức giúp cấu trúc suy nghĩ, nhưng phán đoán
              lâm sàng và phản ứng bệnh nhân hướng dẫn quyết định thực tế.
            </p>
          </EducationalNote>
        </div>
      </ContentSection>

      {/* 
        Learn More
        Educational Intent: Guides readers to more detailed content
        and tools for learning, not for clinical decision-making
      */}
      <ContentSection ariaLabelledBy="learn-more-heading">
        <SectionHeading id="learn-more-heading" variant="blue">
          Tìm Hiểu Thêm
        </SectionHeading>
        <ContentBlock>
          <p>
            Tổng quan này cung cấp giới thiệu cấp cao về đánh giá dinh dưỡng. Để biết thêm chi tiết
            thông tin, hãy khám phá các tài nguyên này:
          </p>
        </ContentBlock>

        <div className="mt-6 space-y-4">
          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Hướng Dẫn Quy Trình Chi Tiết
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Tìm hiểu về quy trình đánh giá đầy đủ, bao gồm cách sàng lọc, ước tính nhu cầu,
              và đánh giá lượng ăn vào làm việc cùng nhau.
            </p>
            <Link
              href="/knowledge/assessment-process"
              className="inline-flex items-center text-sm font-medium text-blue-700 hover:text-blue-900 underline"
            >
              Đọc hướng dẫn đầy đủ →
            </Link>
          </div>

          <div className="rounded-md bg-white border border-blue-200 p-4">
            <h3 className="font-semibold text-base mb-2 text-blue-900">
              Công Cụ Tương Tác
            </h3>
            <p className="text-sm text-blue-800 mb-3">
              Thực hành quy trình đánh giá với các công cụ tương tác của chúng tôi được thiết kế cho việc học:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-blue-800 mb-3">
              <li>
                <Link href="/tools/malnutrition-screening" className="underline">
                  Công Cụ Sàng Lọc Suy Dinh Dưỡng
                </Link>
              </li>
              <li>
                <Link href="/tools/energy-protein-calculator" className="underline">
                  Máy Tính Năng Lượng & Protein
                </Link>
              </li>
              <li>
                <Link href="/tools/intake-assessment" className="underline">
                  Bảng Đánh Giá Lượng Ăn Vào
                </Link>
              </li>
            </ul>
            <p className="text-xs text-blue-700 italic">
              Các công cụ này chỉ dành cho mục đích giáo dục và không nên được sử dụng để ra quyết định lâm sàng.
            </p>
          </div>
        </div>
      </ContentSection>

      {/* Related Tools */}
      <ContentSection ariaLabelledBy="tools-heading">
        <SectionHeading id="tools-heading" variant="default">
          Công cụ Liên quan
        </SectionHeading>
        <ContentBlock>
          <p className="mb-4">
            Các công cụ giáo dục này giúp bạn thực hành quy trình đánh giá dinh dưỡng lâm sàng:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card href="/tools/malnutrition-screening">
              <CardHeader icon={CheckCircle} title="Nguy cơ Suy Dinh dưỡng" />
              <CardContent>
                <p className="text-body-sm">
                  Công cụ sàng lọc để đánh giá nguy cơ suy dinh dưỡng sử dụng NRS-2002 và PG-SGA.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/energy-protein-calculator">
              <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
              <CardContent>
                <p className="text-body-sm">
                  Ước tính nhu cầu năng lượng và protein hàng ngày dựa trên các phương trình tiêu chuẩn.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/intake-assessment">
              <CardHeader icon={CheckCircle} title="Đánh giá Lượng Ăn" />
              <CardContent>
                <p className="text-body-sm">
                  So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/bmi-body-composition">
              <CardHeader icon={CheckCircle} title="BMI & Thành phần Cơ thể" />
              <CardContent>
                <p className="text-body-sm">
                  Tính BMI, IBW, ABW, và BSA - các chỉ số cơ bản trong đánh giá dinh dưỡng.
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
            <strong>Trang web này và các công cụ của nó chỉ dành cho mục đích giáo dục.</strong> Chúng không cung cấp
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
            Nội dung này được thiết kế để hỗ trợ học tập và hiểu biết về các khái niệm đánh giá dinh dưỡng lâm sàng.
            Nó giúp bạn thực hành quy trình suy nghĩ và xem cách các yếu tố khác nhau ảnh hưởng đến
            ước tính và đánh giá.
          </p>
          <p>
            Tuy nhiên, các công cụ và nội dung này không thể và không nên được sử dụng để đưa ra quyết định lâm sàng.
            Đánh giá lâm sàng thực sự đòi hỏi đánh giá toàn diện, phán đoán chuyên nghiệp và xem xét
            toàn bộ bối cảnh lâm sàng—không có điều nào trong số này có thể được nắm bắt bởi các công cụ trực tuyến hoặc nội dung giáo dục một mình.
          </p>
        </ContentBlock>
      </ContentSection>
    </main>
  );
}

'use client';

/**
 * Why Intake Falls Short Page
 * 
 * Educational Purpose: This page helps readers understand:
 * - Why calculating needs does not guarantee adequate intake
 * - Why intake failure is common and expected in illness
 * - How clinicians interpret intake gaps realistically
 * 
 * Target Audience: Clinicians, nurses, dietitians, and medical students who need
 * to understand the gap between calculated needs and actual intake.
 * 
 * Design Philosophy: 
 * - Normalize the problem: Intake gaps are common and expected, not failures
 * - Reduce frustration and blame: Help readers understand this isn't anyone's fault
 * - Improve practical reasoning: Guide realistic interpretation of intake gaps
 */

import Link from 'next/link';
import KnowledgeSection from './components/KnowledgeSection';
import ClinicalRealityCallout from './components/ClinicalRealityCallout';
import CommonPitfallCallout from './components/CommonPitfallCallout';
import FactorCard from './components/FactorCard';

export default function WhyIntakeFallsShortPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8">
      {/* Educational: Opening scenario normalizes the experience and reduces frustration.
          Uses relatable timeline (Monday to Friday) to help readers identify with the situation. */}
      {/* 1. Title & Opening Scenario */}
      {/* Educational: Opening scenario normalizes the experience and reduces frustration.
          Uses relatable timeline (Monday to Friday) to help readers identify with the situation. */}
      <header className="space-y-4">
        <h1 className="text-2xl font-semibold sm:text-3xl text-gray-900">
          Vì sao Lượng Dinh dưỡng Thường Thiếu so với Yêu cầu Tính toán
        </h1>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            <strong>Sáng thứ Hai:</strong> Bạn đánh giá một bệnh nhân 65 tuổi đang phục hồi sau phẫu thuật. 
            Sử dụng các phương trình tiêu chuẩn, bạn tính nhu cầu dinh dưỡng của họ: 1.800 kcal và 80g protein mỗi ngày. 
            Bạn chỉ định chế độ ăn thường với bổ sung protein cao hai lần mỗi ngày. Kế hoạch trông vững chắc.
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-4">
            <strong>Chiều thứ Sáu:</strong> Bạn xem xét ghi chép lượng ăn trong tuần. Mặc dù tính toán cẩn thận 
            và lệnh phù hợp của bạn, bệnh nhân chỉ tiêu thụ khoảng 1.200 kcal và 50g 
            protein mỗi ngày—khoảng 65% những gì bạn tính họ cần. Bạn tự hỏi: "Vì sao có khoảng cách như vậy?"
          </p>
          <p className="text-base text-gray-700 leading-relaxed mb-3">
            Nếu tình huống này cảm thấy quen thuộc, bạn không đơn độc. Khoảng cách giữa yêu cầu tính toán và 
            lượng ăn thực tế xảy ra mỗi ngày trong thực hành lâm sàng. Đó không phải là thất bại—đó là thực tế của 
            việc cung cấp chăm sóc dinh dưỡng cho những người đang bệnh.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Hiểu vì sao điều này xảy ra—và rằng nó được dự kiến—giúp chúng ta diễn giải khoảng cách lượng ăn với 
            sự đồng cảm thay vì thất vọng, đưa ra quyết định thực tế, và cung cấp chăm sóc tốt hơn. Trang này 
            khám phá các yếu tố thực tế tạo ra những khoảng cách này và cách suy nghĩ về chúng một cách thực tế.
          </p>
        </div>
      </header>

      {/* 2. The Gap Between Calculation and Reality */}
      {/* Educational: Explains why calculated needs and actual intake differ.
          Normalizes gaps and sets realistic expectations. Uses visual comparison
          to help readers understand the concept. */}
      <section
        aria-labelledby="reality-gap-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="reality-gap-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Khoảng cách Giữa Tính toán và Thực tế
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Trong dinh dưỡng lâm sàng, thường có sự khác biệt giữa:
        </p>
        {/* Educational: Visual comparison helps readers understand the distinction
            between calculated requirements (ideal) and actual intake (reality). */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Yêu cầu Tính toán</h3>
            <p className="text-sm text-gray-700">
              Nhu cầu dinh dưỡng ước tính dựa trên phương trình, đánh giá lâm sàng, và hướng dẫn. 
              Điều này đại diện cho những gì chúng ta <em>hướng tới</em>, không nhất thiết những gì chúng ta có thể đạt được.
            </p>
          </div>
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Lượng Ăn Thực tế</h3>
            <p className="text-sm text-gray-700">
              Những gì bệnh nhân <em>thực sự</em> tiêu thụ hoặc nhận được. Đây là điều ảnh hưởng đến 
              kết quả sức khỏe, và nó thường ít hơn nhu cầu tính toán—và điều đó là ổn.
            </p>
          </div>
        </div>

        {/* Educational: Three key concepts that explain why gaps occur.
            Each concept builds understanding without blame. */}
        <div className="space-y-4 mt-6">
          {/* Educational: Helps readers understand that calculations have limitations
              and don't account for real-world barriers. */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Tính toán Giả định Điều kiện Lý tưởng</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Phương trình và hướng dẫn dinh dưỡng dựa trên nghiên cứu được thực hiện trong điều kiện tương đối có kiểm soát. 
              Chúng giả định bệnh nhân có thể ăn khi đói, có cảm giác ngon miệng bình thường, không bị gián đoạn 
              bởi thủ thuật, và có tiếp cận thực phẩm hấp dẫn vào thời điểm thích hợp. Trong thực tế, môi trường 
              lâm sàng xa rời lý tưởng. Bệnh nhân đang bệnh, thủ thuật gián đoạn bữa ăn, thuốc ảnh hưởng đến 
              cảm giác ngon miệng, và dịch vụ thực phẩm hoạt động theo lịch trình cố định. Tính toán cho chúng ta một mục tiêu, nhưng 
              nó không tính đến các rào cản thực tế mà bệnh nhân phải đối mặt.
            </p>
          </div>

          {/* Educational: Explains compounding effect of multiple barriers.
              Helps readers understand why gaps are so common. */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Bệnh nhân Thực tế Đối mặt Nhiều Rào cản</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Không giống như điều kiện lý tưởng được giả định bởi tính toán, bệnh nhân thực tế đối mặt với nhiều rào cản 
              đồng thời. Một bệnh nhân có thể buồn nôn do thuốc, bỏ lỡ bữa ăn do thủ thuật, 
              thấy thức ăn bệnh viện không hấp dẫn, và quá mệt mỏi để ăn—tất cả trong cùng một ngày. Những rào cản này 
              không chỉ cộng lại; chúng tích lũy. Khi một bệnh nhân buồn nôn, họ ít có khả năng ăn 
              ngay cả khi thức ăn có sẵn. Khi họ bỏ lỡ một bữa ăn do thủ thuật, họ có thể không cảm thấy đói 
              khi bữa ăn tiếp theo đến. Hiểu rằng nhiều rào cản hoạt động cùng nhau giúp giải thích 
              vì sao khoảng cách lượng ăn rất phổ biến.
            </p>
          </div>

          {/* Educational: Reframes intake as dynamic process, not static event.
              Helps readers understand why monitoring and adjustment matter. */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Lượng Ăn Là Một Quy trình, Không phải Sự kiện Đơn lẻ</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Chúng ta thường nghĩ về lượng ăn dinh dưỡng như một phương trình đơn giản: chỉ định thức ăn → bệnh nhân ăn → nhu cầu được đáp ứng. 
              Nhưng lượng ăn thực sự là một quy trình phức tạp xảy ra theo thời gian, bị ảnh hưởng bởi nhiều yếu tố. 
              Khả năng và sự sẵn sàng ăn của bệnh nhân thay đổi trong suốt ngày, từ ngày này sang ngày khác, và 
              khi tình trạng của họ thay đổi. Những gì họ có thể ăn vào thứ Hai sau phẫu thuật có thể rất khác 
              với những gì họ có thể ăn vào thứ Sáu khi họ phục hồi. Lượng ăn không phải là một sự kiện đơn lẻ chúng ta có thể kiểm soát—nó là 
              một quy trình đang diễn ra mà chúng ta theo dõi, hỗ trợ, và thích ứng khi tình huống bệnh nhân phát triển.
            </p>
          </div>
        </div>

        {/* Educational: Normalizes intake gaps as expected, not failures */}
        <ClinicalRealityCallout>
          <p className="mb-2">
            Khoảng cách lượng ăn là phổ biến và được dự kiến, đặc biệt trong bệnh cấp tính. Đây không phải là thất bại 
            của bệnh nhân, nhóm chăm sóc, hoặc hệ thống. Đó là một phần bình thường của thực hành dinh dưỡng lâm sàng.
          </p>
          <p>
            Tính toán nhu cầu cho chúng ta một mục tiêu, nhưng nhiều yếu tố ngoài tầm kiểm soát của chúng ta ảnh hưởng đến việc 
            mục tiêu đó có được đạt đến hay không. Mục tiêu không phải là sự hoàn hảo, mà là hiểu khoảng cách và đưa ra 
            quyết định thực tế, thực hành về chăm sóc dinh dưỡng.
          </p>
        </ClinicalRealityCallout>

        {/* Educational: Role-specific examples help different readers see themselves
            in the scenarios. Reduces frustration by normalizing the experience. */}
        {/* Practical Examples for Different Roles */}
        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mt-4">
          <h3 className="font-semibold text-gray-900 mb-3 text-sm">Tình huống Thực tế Bạn có thể Gặp:</h3>
          <div className="space-y-3 text-sm">
            <div>
              <p className="text-gray-700 font-medium mb-1">Là điều dưỡng ghi chép lượng ăn:</p>
              <p className="text-gray-600">
                Bạn ghi chú rằng một bệnh nhân được chỉ định 1.800 kcal/ngày chỉ ăn khoảng 50% mỗi bữa ăn. 
                Điều này không bất thường—đặc biệt nếu họ có thủ thuật hôm nay hoặc đang trải qua buồn nôn. 
                Ghi chép những gì họ thực sự tiêu thụ. Nhóm cần biết lượng ăn thực tế, không phải những gì được phục vụ.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">Là bác sĩ lâm sàng xem xét lượng ăn:</p>
              <p className="text-gray-600">
                Bạn thấy một bệnh nhân nhận được 70% nhu cầu tính toán. Trước khi điều chỉnh lệnh, hãy cân nhắc: 
                Điều này có được dự kiến cho tình huống lâm sàng của họ không? Họ có đang cải thiện không? Đôi khi 70% là 
                đầy đủ cho bối cảnh hiện tại, và lượng ăn sẽ cải thiện khi họ phục hồi.
              </p>
            </div>
            <div>
              <p className="text-gray-700 font-medium mb-1">Là sinh viên y khoa trong hội chẩn:</p>
              <p className="text-gray-600">
                Bạn nghe rằng một bệnh nhân không đáp ứng mục tiêu dinh dưỡng của họ. Đây là cơ hội học tập 
                —hãy hỏi vì sao. Hiểu các yếu tố (thủ thuật, triệu chứng, vấn đề hệ thống) 
                giúp bạn học cách diễn giải khoảng cách lượng ăn một cách thực tế.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Patient-Related Factors */}
      {/* Educational: Explains patient-specific barriers without blame.
          Emphasizes these are normal responses to illness, not patient failures.
          Each factor card normalizes a specific barrier. */}
      <section
        aria-labelledby="patient-factors-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="patient-factors-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Yếu tố Liên quan đến Bệnh nhân
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Trong bệnh tật, cơ thể và tâm trí phản ứng theo cách tự nhiên làm giảm lượng ăn. Đây không phải là 
          thất bại hoặc từ chối—chúng là phản ứng sinh lý và tâm lý bình thường khi bị bệnh. 
          <strong> Các yếu tố này là phổ biến và được dự kiến</strong> trong thực hành lâm sàng. Hiểu điều này 
          giúp chúng ta tiếp cận khoảng cách lượng ăn với sự đồng cảm thay vì thất vọng:
        </p>

        {/* Educational: Each factor card explains a specific barrier with
            emphasis on "common and expected" to reduce blame. */}
        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Cảm giác Ngon miệng Kém</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Mất cảm giác ngon miệng (chán ăn) là một trong những lý do phổ biến nhất cho giảm lượng ăn trong bệnh tật. 
              Nó có thể được gây ra bởi:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Phản ứng stress của cơ thể với bệnh tật (cytokine viêm ức chế cảm giác ngon miệng)</li>
              <li>Đau, khó chịu, hoặc buồn nôn</li>
              <li>Thuốc ảnh hưởng đến cảm giác ngon miệng</li>
              <li>Trầm cảm hoặc lo âu</li>
              <li>Mệt mỏi làm cho việc ăn cảm thấy như quá nhiều nỗ lực</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Cảm giác ngon miệng kém trong bệnh tật là phản ứng 
              sinh lý bình thường, không phải lựa chọn của bệnh nhân hoặc thiếu ý chí. Đó là cách cơ thể 
              bảo tồn năng lượng cho chữa lành.
            </p>
          </article>

          <article className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">No Sớm</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Bệnh nhân có thể cảm thấy no sau khi chỉ ăn lượng nhỏ. Điều này có thể xảy ra do:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Làm rỗng dạ dày chậm do bệnh tật hoặc thuốc</li>
              <li>Chướng bụng hoặc áp lực</li>
              <li>Tiêu hóa chậm trong bệnh tật</li>
              <li>Thuốc ảnh hưởng đến nhu động dạ dày</li>
              <li>Lo âu ảnh hưởng đến tiêu hóa</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> No sớm là phản ứng bình thường với bệnh tật, 
              không phải dấu hiệu rằng bệnh nhân không cố gắng. Họ về mặt thể chất không thể ăn nhiều hơn, ngay cả khi họ muốn.
            </p>
          </article>

          <article className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Mệt mỏi</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Bệnh tật và điều trị gây mệt mỏi làm cho việc ăn trở nên kiệt sức về thể chất:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Nhai và nuốt đòi hỏi năng lượng mà bệnh nhân có thể không có</li>
              <li>Chuẩn bị bữa ăn hoặc tự ăn trở nên quá mệt mỏi</li>
              <li>Bệnh nhân có thể ngủ trong bữa ăn</li>
              <li>Mệt mỏi làm giảm động lực ăn</li>
              <li>Tác dụng phụ điều trị tích lũy mệt mỏi</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Mệt mỏi trong bệnh tật là bình thường. Ăn đòi hỏi 
              năng lượng, và khi bệnh nhân kiệt sức, ăn có thể cảm thấy quá tải. Đây không phải lười biếng—đó là 
              thực tế của việc bị bệnh.
            </p>
          </article>

          <article className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Thay đổi Vị giác</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Bệnh tật, thuốc, và điều trị có thể thay đổi đáng kể cách thức ăn có vị:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Vị kim loại từ thuốc hoặc điều trị</li>
              <li>Thay đổi nhận thức vị giác (rối loạn vị giác) làm thức ăn có vị nhạt, đắng, hoặc "sai"</li>
              <li>Mất cảm giác vị giác</li>
              <li>Thực phẩm từng là yêu thích trở nên không hấp dẫn</li>
              <li>Thay đổi khứu giác ảnh hưởng đến nhận thức vị giác</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Thay đổi vị giác là tác dụng phụ bình thường của bệnh tật 
              và điều trị. Khi thức ăn không có vị đúng, bệnh nhân tự nhiên ăn ít hơn. Đây không phải kén chọn—đó là 
              phản ứng sinh lý.
            </p>
          </article>

          <article className="border-l-4 border-pink-500 bg-pink-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Stress Tâm lý</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Stress của bệnh tật và nhập viện ảnh hưởng đáng kể đến ăn uống:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Lo âu về chẩn đoán, điều trị, hoặc kết quả</li>
              <li>Trầm cảm làm giảm quan tâm đến thức ăn</li>
              <li>Stress từ việc ở trong môi trường không quen thuộc</li>
              <li>Lo lắng về gia đình, công việc, hoặc tài chính</li>
              <li>Sợ hãi về an toàn thực phẩm, hạn chế, hoặc làm mọi thứ tồi tệ hơn</li>
              <li>Đau buồn, buồn bã, hoặc đau khổ cảm xúc</li>
              <li>Mất kiểm soát và độc lập</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Stress tâm lý trong bệnh tật là bình thường. 
              Đó không phải là khuyết điểm tính cách hoặc thiếu khả năng phục hồi—đó là phản ứng tự nhiên khi bị bệnh và 
              đối mặt với sự không chắc chắn. Stress trực tiếp ảnh hưởng đến cảm giác ngon miệng và tiêu hóa.
            </p>
          </article>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
            Cạm bẫy Phổ biến
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Tránh giả định một yếu tố đơn lẻ gây ra khoảng cách lượng ăn.</strong> Các yếu tố này thường xảy ra 
            cùng nhau. Một bệnh nhân có thể có cảm giác ngon miệng kém <em>và</em> no sớm <em>và</em> mệt mỏi 
            <em>và</em> thay đổi vị giác <em>và</em> stress tâm lý—tất cả cùng một lúc. Hiệu ứng tích lũy này là lý do tại sao khoảng cách lượng ăn rất phổ biến. Không phải bệnh nhân không cố gắng; 
            đó là nhiều phản ứng bình thường với bệnh tật đang hoạt động cùng nhau để giảm lượng ăn.
          </p>
        </div>
      </section>

      {/* 4. Illness-Related Factors */}
      {/* Educational: Explains how illness itself creates barriers to eating.
          Emphasizes these are direct consequences of being unwell, not patient choices.
          Helps readers understand why intake failure is expected in illness. */}
      <section
        aria-labelledby="illness-factors-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="illness-factors-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Yếu tố Liên quan đến Bệnh tật
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Bệnh tật tự nó tạo ra rào cản cho việc ăn. Đây là hậu quả trực tiếp của việc bị bệnh, không phải 
          lựa chọn hoặc thất bại của bệnh nhân. Hiểu cách bệnh tật ảnh hưởng đến lượng ăn giúp các bác sĩ lâm sàng diễn giải 
          khoảng cách một cách thực tế:
        </p>

        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-cyan-500 bg-cyan-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Viêm</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Khi cơ thể đang chống lại nhiễm trùng hoặc chữa lành từ chấn thương, viêm xảy ra. Phản ứng tự nhiên này 
              ảnh hưởng đến ăn uống theo nhiều cách:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Tín hiệu viêm ức chế cảm giác ngon miệng—đây là cách cơ thể bảo tồn năng lượng</li>
              <li>Bệnh nhân có thể cảm thấy nói chung không khỏe và không muốn ăn</li>
              <li>Sốt và khó chịu làm giảm quan tâm đến thức ăn</li>
              <li>Ngay cả khi bệnh nhân muốn ăn, viêm có thể làm cho việc ăn cảm thấy khó khăn</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Giảm cảm giác ngon miệng trong viêm là phản ứng 
              sinh lý bình thường. Khi viêm giải quyết, cảm giác ngon miệng thường trở lại.
            </p>
          </article>

          <article className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Đau</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Đau trực tiếp can thiệp vào việc ăn:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Đau làm giảm cảm giác ngon miệng và làm cho việc ăn khó chịu</li>
              <li>Nhai hoặc nuốt có thể đau (ví dụ: sau phẫu thuật, với loét miệng)</li>
              <li>Đau bụng làm cho việc ăn cảm thấy rủi ro hoặc khó chịu</li>
              <li>Thuốc giảm đau có thể gây buồn nôn hoặc buồn ngủ</li>
              <li>Bệnh nhân có thể tránh ăn để ngăn chặn kích hoạt đau</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Khi bệnh nhân đau, ăn trở thành 
              ưu tiên thấp hơn. Quản lý đau thường ưu tiên hơn dinh dưỡng, và điều đó là phù hợp.
            </p>
          </article>

          <article className="border-l-4 border-orange-500 bg-orange-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Buồn nôn</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Buồn nôn là một trong những rào cản phổ biến nhất cho việc ăn trong bệnh tật:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Buồn nôn làm cho ý nghĩ về thức ăn không hấp dẫn</li>
              <li>Bệnh nhân có thể sợ ăn vì họ sợ nôn</li>
              <li>Ngay cả lượng nhỏ thức ăn cũng có thể kích hoạt buồn nôn</li>
              <li>Buồn nôn có thể liên tục hoặc đến theo đợt</li>
              <li>Mùi thức ăn có thể kích hoạt buồn nôn</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Buồn nôn trong bệnh tật là bình thường. Không phải 
              bệnh nhân không muốn ăn—họ về mặt thể chất không thể dung nạp thức ăn khi buồn nôn. Đây là 
              protective mechanism.
            </p>
          </article>

          <article className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Dyspnea (Breathing Difficulties)</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              When patients have trouble breathing, eating becomes challenging:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Breathing takes priority over eating—patients focus on getting air, not food</li>
              <li>Chewing and swallowing require holding breath briefly, which is difficult when dyspneic</li>
              <li>Eating increases oxygen demand, making breathing feel harder</li>
              <li>Patients may need oxygen during meals, which can interfere with eating</li>
              <li>Anxiety about breathing can reduce appetite</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được mong đợi.</strong> Khi bệnh nhân đang vật lộn để thở, ăn 
              hiểu được không phải là ưu tiên. Thở đến trước, và đó là phù hợp.
            </p>
          </article>

          <article className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Functional Limitations</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Illness can limit a patient's ability to physically eat:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Weakness or paralysis preventing self-feeding</li>
              <li>Difficulty swallowing (dysphagia) requiring modified textures or tube feeding</li>
              <li>Hand tremors, coordination problems, or weakness making it hard to hold utensils</li>
              <li>Positioning restrictions (e.g., must stay flat, can't sit up to eat)</li>
              <li>Dependence on others to feed them, which may not always be available</li>
              <li>Fatigue making the physical act of eating too exhausting</li>
            </ul>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được mong đợi.</strong> Hạn chế chức năng là hậu quả của bệnh tật 
              hoặc điều trị, không phải lựa chọn của bệnh nhân. Bệnh nhân có thể muốn ăn nhưng về mặt thể chất không thể làm như vậy 
              một cách độc lập hoặc an toàn.
            </p>
          </article>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Thực Tế Lâm Sàng
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Các yếu tố liên quan đến bệnh tật này thường xảy ra cùng nhau. Một bệnh nhân có thể có viêm 
            <em>và</em> đau <em>và</em> buồn nôn <em>và</em> khó thở <em>và</em> hạn chế 
            chức năng—tất cả cùng một lúc. Hiệu ứng kết hợp này giải thích tại sao khoảng cách lượng ăn vào rất phổ biến 
            trong bệnh cấp tính. Đây không phải là thất bại—đó là thực tế của việc không khỏe.
          </p>
        </div>
      </section>

      {/* 5. Care-Delivery Factors */}
      {/* Educational: Explains practical issues in care delivery that affect intake.
          Highlights "Prescribed ≠ Delivered" concept. Helps readers understand
          system-level factors without blaming individuals. */}
      <section
        aria-labelledby="care-delivery-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="care-delivery-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Care-Delivery Factors
        </h2>
        <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4 mb-4">
          <p className="text-sm font-semibold text-red-900 mb-2 uppercase tracking-wide">
            Thực Tế Lâm Sàng
          </p>
          <p className="text-base text-gray-900 leading-relaxed font-semibold mb-2">
            Được Kê Đơn ≠ Được Cung Cấp
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            What is <strong>prescribed</strong> (ordered, planned, recommended) is often different from what 
            is <strong>delivered</strong> (actually consumed or received). This gap is common and expected. 
            Only delivered nutrition affects patient outcomes—a perfect prescription that isn't consumed 
            doesn't help the patient.
          </p>
        </div>
        <p className="text-base text-gray-700 leading-relaxed">
          How care is delivered—from meal service to feeding tube management—affects intake. These practical 
          issues are inherent to providing care in busy clinical environments:
        </p>

        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-red-500 bg-red-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Fasting for Procedures</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Patients frequently miss meals due to fasting requirements:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>NPO (nothing by mouth) orders before procedures, surgeries, or tests</li>
              <li>Extended fasting periods when procedures are delayed</li>
              <li>Multiple procedures requiring repeated fasting over several days</li>
              <li>Unclear or overly conservative NPO orders extending beyond necessary time</li>
              <li>Delayed meal service after procedures, even when NPO is lifted</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Một bệnh nhân được đặt cho bữa sáng, bữa trưa, và bữa tối có thể bỏ lỡ bữa trưa 
              entirely if they're NPO from midnight for a 2 PM procedure. Even after the procedure, they 
              may not receive a meal until dinner time—missing an entire meal.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Cho điều dưỡng:</strong> Bạn có thể thấy bệnh nhân NPO trong thời gian dài do 
              procedure delays or multiple tests. This is expected, not a documentation error. 
              <strong>For medical students:</strong> Understanding that procedures require fasting helps 
              explain why intake gaps occur even when nutrition is ordered.
            </p>
            <p className="text-sm text-gray-600 italic mt-1">
              <strong>Điều này là phổ biến và được mong đợi.</strong> Nhịn ăn cho thủ thuật là cần thiết cho an toàn, 
              không phải thất bại hệ thống. Những gián đoạn này là các phần được mong đợi của chăm sóc lâm sàng.
            </p>
          </article>

          <article className="border-l-4 border-indigo-500 bg-indigo-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Missed Meals</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Meals may be missed for reasons beyond fasting:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Meals arrive during procedures, tests, or when patient is sleeping</li>
              <li>Patient is off the unit for imaging or other tests during meal times</li>
              <li>Meals are delayed due to staffing or logistics issues</li>
              <li>Patient is too unwell to eat when meal arrives</li>
              <li>Meals are removed before patient can eat (e.g., due to procedure timing)</li>
              <li>Patient refuses meal, and no alternative is offered in time</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Một bệnh nhân được đặt cho ba bữa ăn mỗi ngày có thể chỉ nhận được hai nếu 
              breakfast arrives while they're in radiology, lunch is removed because they're going to 
              surgery, and dinner arrives when they're too nauseous to eat.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được mong đợi.</strong> Trong môi trường lâm sàng bận rộn, bữa ăn có thể bị bỏ lỡ 
              do các ưu tiên cạnh tranh. Đây không phải là thất bại—đó là thực tế của chăm sóc phức tạp.
            </p>
          </article>

          <article className="border-l-4 border-teal-500 bg-teal-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Feeding Interruptions</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Tube feeding is frequently interrupted, reducing delivered nutrition:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Holds for procedures, tests, or medications</li>
              <li>Pump malfunctions or disconnections</li>
              <li>High gastric residuals requiring rate reduction or temporary hold</li>
              <li>Tube dislodgement or clogging</li>
              <li>Patient positioning issues affecting tolerance</li>
              <li>Overnight alarms that aren't addressed immediately</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Một bệnh nhân được đặt cho 1,600 kcal/ngày qua cho ăn qua ống liên tục 
              at 80 mL/hour may only receive 1,000-1,200 kcal/day due to:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mt-1">
              <li>4-hour hold before procedure + 4-hour hold after = 8 hours without feeding (33% reduction)</li>
              <li>Rate reduced to 40 mL/hour for tolerance issues (50% reduction)</li>
              <li>Overnight pump alarm that wasn't addressed for 2 hours</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Cho điều dưỡng theo dõi cho ăn qua ống:</strong> Kiểm tra <strong>thể tích được cung cấp</strong> của máy bơm, 
              not just the ordered rate. The ordered rate tells you what was prescribed, but the delivered 
              volume tells you what the patient actually received.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được mong đợi.</strong> Gián đoạn cho ăn qua ống là cần thiết cho 
              thủ thuật, an toàn, và khả năng dung nạp. Mục tiêu là theo dõi và giảm thiểu khoảng cách, không loại bỏ 
              tất cả gián đoạn.
            </p>
          </article>

          <article className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Poor Timing of Meals</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Meal timing may not align with when patients can actually eat:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Fixed meal times that don't match patient appetite patterns</li>
              <li>Meals served when patient is nauseous, in pain, or too tired</li>
              <li>Meals arrive during peak medication side effects</li>
              <li>Insufficient time between meals for digestion</li>
              <li>Meals served when patient is most symptomatic (e.g., morning nausea)</li>
              <li>No snacks available between scheduled meals when patient feels able to eat</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Một bệnh nhân với buồn nôn buổi sáng có thể không thể ăn bữa sáng lúc 
              8 AM but feel ready to eat at 10 AM. However, the next meal isn't until noon, and by then 
              they may be nauseous again or have missed their window of opportunity.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Cho điều dưỡng:</strong> Bạn có thể nhận thấy bệnh nhân không thể ăn trong thời gian bữa ăn 
              đã lên lịch do triệu chứng, thủ thuật, hoặc ngủ. Đây là một thực tế phổ biến. Ghi chép lượng ăn vào thực tế 
              (không chỉ những gì được phục vụ) giúp nhóm hiểu tình huống thực tế.
            </p>
            <p className="text-sm text-gray-600 italic mt-1">
              <strong>Điều này là phổ biến và được mong đợi.</strong> Thời gian bữa ăn cố định là cần thiết cho hoạt động 
              dịch vụ thực phẩm hiệu quả. Đây là một ràng buộc hệ thống, không phải thất bại. Chúng ta làm việc trong những 
              ràng buộc này trong khi tìm cách tối ưu hóa lượng ăn vào.
            </p>
          </article>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Thực tế Lâm sàng
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Dinh dưỡng được kê đơn (những gì được chỉ định) và dinh dưỡng được cung cấp (những gì thực sự được tiêu thụ) 
            thường khác nhau. Khoảng cách này là bình thường và được dự kiến. Đánh giá lượng ăn thường xuyên giúp nhận diện 
            khoảng cách thực sự giữa kê đơn và cung cấp, cho phép các bác sĩ lâm sàng đưa ra quyết định có thông tin 
            về chăm sóc dinh dưỡng.
          </p>
        </div>
      </section>

      {/* 6. System & Workflow Factors */}
      {/* Educational: Explains system-level challenges that affect intake.
          Maintains system-focused tone, not blaming individuals. Helps readers
          understand structural constraints in healthcare delivery. */}
      <section
        aria-labelledby="system-workflow-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="system-workflow-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Yếu tố Hệ thống & Quy trình Làm việc
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Hệ thống y tế và quy trình làm việc tạo ra các thách thức vốn có ảnh hưởng đến lượng ăn. Đây không phải là 
          thất bại của nhân viên hoặc phòng ban cá nhân—chúng là thực tế của việc cung cấp chăm sóc trong môi trường bận rộn, phức tạp 
          . Hiểu các yếu tố cấp hệ thống này giúp giải thích vì sao khoảng cách lượng ăn xảy ra ngay cả 
          khi mọi người đang làm hết sức mình:
        </p>

        <div className="space-y-4 mt-4">
          <article className="border-l-4 border-blue-500 bg-blue-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Hạn chế Nhân sự</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Nhân sự hạn chế ảnh hưởng đến chăm sóc dinh dưỡng theo nhiều cách:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Không đủ nhân viên để hỗ trợ bệnh nhân với bữa ăn</li>
              <li>Nhân viên bị kéo sang nhu cầu chăm sóc bệnh nhân khác trong giờ ăn</li>
              <li>Không đủ thời gian để khuyến khích ăn hoặc cung cấp lựa chọn thay thế</li>
              <li>Khả năng hạn chế để theo dõi cho ăn qua ống hoặc phản ứng với báo động kịp thời</li>
              <li>Tỷ lệ bệnh nhân-nhân viên cao làm cho sự chú ý cá nhân hóa khó khăn</li>
              <li>Mệt mỏi nhân viên ảnh hưởng đến khả năng cung cấp hỗ trợ dinh dưỡng tối ưu</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Một điều dưỡng có thể muốn giúp bệnh nhân ăn, nhưng nếu họ đang quản lý 
              nhiều bệnh nhân với nhu cầu chăm sóc cạnh tranh, hỗ trợ bữa ăn có thể không khả thi. Đây không phải là 
              thất bại của điều dưỡng—đó là ràng buộc hệ thống.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Hạn chế nhân sự là vấn đề cấp hệ thống, 
              không phải thất bại cá nhân. Nhân viên y tế làm hết sức trong nguồn lực có sẵn, nhưng 
              nhân sự hạn chế ảnh hưởng đến tất cả khía cạnh chăm sóc, bao gồm dinh dưỡng.
            </p>
          </article>

          <article className="border-l-4 border-purple-500 bg-purple-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Thiếu Theo dõi</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Theo dõi không đầy đủ lượng ăn dinh dưỡng có thể cho phép khoảng cách không được chú ý:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Không có quy trình có hệ thống để theo dõi lượng ăn thực tế vs. dinh dưỡng được chỉ định</li>
              <li>Máy bơm cho ăn qua ống không được kiểm tra thường xuyên về thể tích được cung cấp</li>
              <li>Tài liệu lượng ăn không được xem xét hoặc hành động một cách nhất quán</li>
              <li>Không có cảnh báo hoặc cờ khi lượng ăn rơi xuống dưới ngưỡng</li>
              <li>Khả năng hiển thị hạn chế của xu hướng lượng ăn theo thời gian</li>
              <li>Khoảng cách giữa các ca trong tính liên tục theo dõi</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Cho ăn qua ống của bệnh nhân có thể đang chạy ở tốc độ được chỉ định, nhưng 
              nếu không ai kiểm tra thể tích được cung cấp của máy bơm, gián đoạn có thể không được chú ý. Hệ thống 
              giả định cung cấp khớp với lệnh, nhưng thực tế có thể khác.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Khoảng cách theo dõi là vấn đề cấp hệ thống liên quan 
              đến thiết kế quy trình làm việc, không phải giám sát cá nhân. Không có quy trình theo dõi có hệ thống, khoảng cách lượng ăn 
              có thể tồn tại không được chú ý.
            </p>
          </article>

          <article className="border-l-4 border-green-500 bg-green-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Khoảng cách Giao tiếp</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Thách thức giao tiếp giữa các thành viên nhóm ảnh hưởng đến chăm sóc dinh dưỡng:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Mục tiêu dinh dưỡng không được truyền đạt rõ ràng cho tất cả thành viên nhóm</li>
              <li>Mối quan tâm lượng ăn không được truyền giữa các ca một cách hiệu quả</li>
              <li>Khuyến nghị chuyên gia dinh dưỡng không được chia sẻ nhất quán với nhân viên điều dưỡng</li>
              <li>Thay đổi tình trạng bệnh nhân ảnh hưởng đến lượng ăn không được truyền đạt kịp thời</li>
              <li>Thực phẩm hoặc bổ sung do gia đình cung cấp không được truyền đạt cho nhóm</li>
              <li>Nhiều kênh giao tiếp (biểu đồ, lời nói, điện tử) dẫn đến thông tin bị bỏ lỡ</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Chuyên gia dinh dưỡng có thể khuyến nghị một cách tiếp cận cụ thể để cải thiện lượng ăn, 
              nhưng nếu điều này không được truyền đạt rõ ràng cho nhân viên điều dưỡng, nó có thể không được thực hiện. Đây 
              không phải lỗi của ai—đó là vấn đề hệ thống giao tiếp.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Khoảng cách giao tiếp vốn có trong 
              hệ thống y tế phức tạp với nhiều thành viên nhóm, ca, và kênh giao tiếp. Đây 
              là thách thức cấp hệ thống, không phải thất bại giao tiếp cá nhân.
            </p>
          </article>

          <article className="border-l-4 border-amber-500 bg-amber-50 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Theo dõi Không Đầy đủ</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Theo dõi hạn chế về hỗ trợ dinh dưỡng có thể cho phép khoảng cách lượng ăn tồn tại:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Không có quy trình có hệ thống để kiểm tra liệu cách tiếp cận hỗ trợ dinh dưỡng có hiệu quả không</li>
              <li>Bổ sung được chỉ định nhưng không được cung cấp hoặc tiêu thụ nhất quán</li>
              <li>Điều chỉnh chế độ ăn được thực hiện nhưng không được theo dõi để đánh giá tác động</li>
              <li>Mối quan tâm lượng ăn được nhận diện nhưng không được xem xét lại</li>
              <li>Không có trách nhiệm rõ ràng cho việc theo dõi hỗ trợ dinh dưỡng</li>
              <li>Thời gian hoặc nguồn lực hạn chế cho theo dõi dinh dưỡng đang diễn ra</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed mt-2">
              <strong>Ví dụ:</strong> Bổ sung protein cao có thể được chỉ định, nhưng nếu không có theo dõi 
              để đảm bảo chúng thực sự đang được cung cấp và tiêu thụ, hiệu quả dự định có thể không đạt được. 
              Đây không phải là thất bại của nhân viên cá nhân—đó là vấn đề hệ thống với quy trình theo dõi.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Điều này là phổ biến và được dự kiến.</strong> Theo dõi không đầy đủ là vấn đề cấp hệ thống 
              liên quan đến thiết kế quy trình làm việc và phân bổ nguồn lực, không phải bỏ bê cá nhân. Không có quy trình theo dõi có hệ thống 
              , hỗ trợ dinh dưỡng có thể không đạt được hiệu quả dự định.
            </p>
          </article>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-amber-900 mb-2 uppercase tracking-wide">
            Cạm bẫy Phổ biến
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Tránh đổ lỗi cho cá nhân về vấn đề cấp hệ thống.</strong> Các yếu tố hệ thống và quy trình làm việc này 
            không phải về hiệu suất hoặc nỗ lực cá nhân. Chúng là về cách hệ thống y tế được 
            cấu trúc và cung cấp nguồn lực. Nhân viên y tế làm hết sức trong ràng buộc hệ thống, nhưng những 
            ràng buộc này ảnh hưởng đến chăm sóc dinh dưỡng. Hiểu điều này giúp chúng ta giải quyết vấn đề cấp hệ thống thay vì 
            đổ lỗi cho cá nhân.
          </p>
        </div>
      </section>

      {/* 7. How Clinicians Interpret Intake Shortfalls */}
      {/* Educational: Provides practical reasoning framework for interpreting gaps.
          Helps readers develop clinical judgment skills. Focuses on trends,
          context, and realistic expectations rather than perfection. */}
      <section
        aria-labelledby="interpretation-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="interpretation-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Cách Các Bác sĩ Lâm sàng Diễn giải Thiếu hụt Lượng Ăn
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Hiểu rằng khoảng cách lượng ăn là bình thường và được dự kiến giúp các bác sĩ lâm sàng diễn giải chúng một cách thực tế 
          và đưa ra quyết định thực tế. Đây là cách các bác sĩ lâm sàng có kinh nghiệm tiếp cận thiếu hụt lượng ăn:
        </p>

        <div className="space-y-4 mt-4">
          <article className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Xem Xu hướng, Không phải Ngày Đơn lẻ</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Các bác sĩ lâm sàng có kinh nghiệm hiểu rằng một ngày lượng ăn thấp thường không đáng lo ngại—nó 
              được dự kiến trong bệnh tật. Thay vào đó, họ tập trung vào mô hình theo thời gian:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li>Lượng ăn có đang cải thiện trong vài ngày không?</li>
              <li>Nó có ổn định ở mức hợp lý không?</li>
              <li>Nó có đang giảm theo thời gian không?</li>
              <li>Có mô hình liên quan đến thủ thuật hoặc triệu chứng không?</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Ví dụ:</strong> Một bệnh nhân ăn 40% bữa ăn vào thứ Hai (ngày sau phẫu thuật) nhưng 70% 
              vào thứ Sáu cho thấy xu hướng cải thiện. Điều này có ý nghĩa hơn một ngày thấp đơn lẻ. Các bác sĩ lâm sàng 
              xem quỹ đạo, không phải giá trị riêng lẻ.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Cho điều dưỡng ghi chép lượng ăn:</strong> Đừng lo lắng nếu một ngày cho thấy lượng ăn thấp—đặc biệt 
              sau thủ thuật hoặc trong bệnh cấp tính. Điều quan trọng là mô hình trong 3-5 ngày. Bệnh nhân có 
              đang cải thiện không? Đó là điều nhóm cần biết.
            </p>
          </article>

          <article className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Ưu tiên Khoảng cách Protein</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Mặc dù cả năng lượng (calo) và protein đều quan trọng, các bác sĩ lâm sàng thường ưu tiên lượng ăn protein 
              vì:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li>Protein cần thiết cho chữa lành, chức năng miễn dịch, và duy trì khối lượng cơ</li>
              <li>Thiếu hụt protein có thể có hậu quả lâm sàng ngay lập tức hơn thiếu hụt năng lượng</li>
              <li>Nhu cầu protein thường khó đáp ứng hơn nhu cầu năng lượng</li>
              <li>Bổ sung protein có thể khả thi hơn tăng tổng lượng ăn</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Ví dụ:</strong> Một bệnh nhân nhận được 80% nhu cầu năng lượng nhưng chỉ 50% nhu cầu protein 
              có thể có cân nhắc khác với người thiếu cả hai. Các bác sĩ lâm sàng thường ưu tiên giải quyết 
              khoảng cách protein khi đưa ra quyết định về hỗ trợ dinh dưỡng.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Cho các bác sĩ lâm sàng:</strong> Khi xem xét lượng ăn, hãy kiểm tra cả năng lượng và protein riêng biệt. 
              Hiểu cái nào bị ảnh hưởng nhiều hơn giúp cung cấp thông tin cho lập luận lâm sàng về quyết định hỗ trợ dinh dưỡng 
              .
            </p>
          </article>

          <article className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Cân bằng Rủi ro Thiếu ăn vs. Thừa ăn</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Các bác sĩ lâm sàng phải cân bằng các mối quan tâm cạnh tranh:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li><strong>Cân nhắc thiếu ăn:</strong> Dinh dưỡng không đầy đủ có thể làm suy yếu chữa lành, suy yếu 
              chức năng miễn dịch, và dẫn đến mất cơ</li>
              <li><strong>Cân nhắc thừa ăn:</strong> Hỗ trợ dinh dưỡng tích cực có thể gây biến chứng 
              (hội chứng tái cho ăn, tăng đường huyết, quá tải dịch) đặc biệt ở bệnh nhân có rối loạn chức năng cơ quan</li>
              <li><strong>Bối cảnh quan trọng:</strong> Sự cân bằng thay đổi dựa trên tình trạng bệnh nhân, mức độ nghiêm trọng, 
              và quỹ đạo lâm sàng</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Ví dụ:</strong> Một bệnh nhân ổn định với cảm giác ngon miệng tốt có thể dung nạp lượng dinh dưỡng cao hơn. 
              Tuy nhiên, một bệnh nhân có rối loạn chức năng cơ quan có thể cần hỗ trợ dinh dưỡng thận trọng hơn, dần dần 
              để tránh biến chứng. Các bác sĩ lâm sàng xem xét các yếu tố này dựa trên tình huống lâm sàng.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Cho các bác sĩ lâm sàng:</strong> Mục tiêu không phải lúc nào cũng là dinh dưỡng tối đa—đó là dinh dưỡng 
              phù hợp cho bối cảnh lâm sàng. Đôi khi chấp nhận khoảng cách lượng ăn vừa phải an toàn hơn 
              ép lượng ăn cao hơn có thể gây hại.
            </p>
          </article>

          <article className="bg-indigo-50 border border-indigo-200 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Đánh giá lại Khi Tình trạng Phát triển</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Tình trạng bệnh nhân thay đổi, và nhu cầu dinh dưỡng và khả năng lượng ăn thay đổi cùng với chúng. Các bác sĩ lâm sàng 
              thường xuyên đánh giá lại:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li>Khi bệnh nhân phục hồi, khả năng lượng ăn thường cải thiện</li>
              <li>Khi triệu chứng giải quyết, rào cản cho việc ăn giảm</li>
              <li>Khi tình trạng ổn định, mục tiêu dinh dưỡng có thể thay đổi</li>
              <li>Khi thủ thuật hoàn thành, gián đoạn giảm</li>
              <li>Khi thuốc thay đổi, tác dụng phụ ảnh hưởng đến lượng ăn có thể thay đổi</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Ví dụ:</strong> Một bệnh nhân chỉ có thể dung nạp 50% bữa ăn trong bệnh cấp tính 
              có thể cải thiện lên 80% khi triệu chứng giải quyết. Các bác sĩ lâm sàng điều chỉnh kỳ vọng và cách tiếp cận khi 
              tình trạng bệnh nhân phát triển, thay vì duy trì cùng cách tiếp cận trong suốt.
            </p>
            <p className="text-sm text-gray-600 italic mt-2">
              <strong>Cho tất cả nhân viên y tế:</strong> Đánh giá lượng ăn không phải là sự kiện một lần—nó là 
              quy trình đang diễn ra. Đánh giá lại thường xuyên giúp nhận diện khi cách tiếp cận hiệu quả, khi chúng 
              cần điều chỉnh, và khi khoảng cách lượng ăn đang giải quyết tự nhiên khi bệnh nhân phục hồi.
            </p>
          </article>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-4">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Thực tế Lâm sàng
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Các bác sĩ lâm sàng có kinh nghiệm không mong đợi lượng ăn hoàn hảo. Họ xem xu hướng, ưu tiên điều quan trọng nhất 
            (thường là protein), cân bằng rủi ro, và điều chỉnh khi tình trạng bệnh nhân phát triển. Cách tiếp cận thực tế này 
            nhận ra rằng khoảng cách lượng ăn là bình thường và tập trung vào những gì có thể đạt được và phù hợp 
            cho tình huống của mỗi bệnh nhân.
          </p>
        </div>
      </section>

      {/* 8. What to Take Away */}
      {/* Educational: Summarizes three key points for retention.
          Reinforces main messages: gaps are common, calculations are starting points,
          monitoring matters more than perfection. */}
      <section
        aria-labelledby="takeaway-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="takeaway-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Điều Cần Rút ra
        </h2>
        <p className="text-base text-gray-700 leading-relaxed mb-4">
          Khi bạn làm việc với bệnh nhân trải qua khoảng cách lượng ăn, hãy nhớ ba điểm cần thiết này:
        </p>

        <div className="space-y-4">
          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Thiếu hụt Lượng Ăn Là Phổ biến</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Khoảng cách lượng ăn không bất thường, không mong đợi, hoặc dấu hiệu rằng có điều gì đó đã sai. Chúng là 
              phổ biến và được dự kiến, đặc biệt trong bệnh cấp tính. Nhiều yếu tố—liên quan đến bệnh nhân, 
              liên quan đến bệnh tật, cung cấp chăm sóc, và yếu tố hệ thống—hoạt động cùng nhau để tạo ra những khoảng cách này.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Hãy nhớ:</strong> Khi bạn thấy một bệnh nhân ăn 60-70% nhu cầu tính toán, đây không phải là 
              khủng hoảng—nó thường bình thường cho tình huống lâm sàng đó. Khoảng cách lượng ăn là quy tắc, không phải ngoại lệ, 
              trong thực hành dinh dưỡng lâm sàng.
            </p>
          </div>

          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Tính toán Là Điểm Khởi đầu</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Tính toán nhu cầu dinh dưỡng cho chúng ta một mục tiêu để hướng tới, nhưng nó chỉ là khởi đầu. 
              Tính toán giả định điều kiện lý tưởng hiếm khi tồn tại trong môi trường lâm sàng thực tế. Chúng không 
              tính đến nhiều rào cản mà bệnh nhân phải đối mặt—thay đổi cảm giác ngon miệng, thủ thuật, triệu chứng, ràng buộc hệ thống 
              , và nhiều hơn nữa.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Hãy nhớ:</strong> Yêu cầu tính toán là hướng dẫn, không phải mệnh lệnh. Nó giúp chúng ta 
              hiểu những gì chúng ta đang hướng tới, nhưng lượng ăn thực tế thường sẽ khác—và điều đó là ổn. 
              Tính toán là điểm khởi đầu cho lập kế hoạch, không phải mục tiêu cứng nhắc phải được đáp ứng.
            </p>
          </div>

          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3 text-lg">Theo dõi và Điều chỉnh Quan trọng Hơn Sự Hoàn hảo</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-2">
              Điều quan trọng nhất không phải là đạt được 100% nhu cầu tính toán, mà là:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
              <li><strong>Theo dõi lượng ăn thực tế</strong> để hiểu những gì bệnh nhân thực sự đang nhận được</li>
              <li><strong>Xem xu hướng</strong> theo thời gian, không chỉ giá trị một ngày</li>
              <li><strong>Điều chỉnh cách tiếp cận</strong> dựa trên những gì thực sự đang xảy ra</li>
              <li><strong>Đánh giá lại</strong> khi tình trạng bệnh nhân phát triển</li>
              <li><strong>Tập trung vào những gì có thể đạt được</strong> và phù hợp cho bối cảnh lâm sàng</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Hãy nhớ:</strong> Lượng ăn hoàn hảo hiếm khi có thể đạt được hoặc cần thiết. Điều quan trọng là 
              hiểu khoảng cách, theo dõi xu hướng, và thực hiện điều chỉnh thực tế. Theo dõi thường xuyên 
              và điều chỉnh thấu đáo dẫn đến kết quả tốt hơn so với phấn đấu cho một mục tiêu hoàn hảo không thể đạt được.
            </p>
          </div>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4 mt-6">
          <p className="text-sm font-semibold text-blue-900 mb-2 uppercase tracking-wide">
            Thực tế Lâm sàng
          </p>
          <p className="text-sm text-gray-700 leading-relaxed">
            Thiếu hụt lượng ăn là phổ biến. Tính toán cho chúng ta điểm khởi đầu, nhưng chúng không đảm bảo 
            lượng ăn. Điều quan trọng nhất là theo dõi những gì bệnh nhân thực sự nhận được, hiểu vì sao khoảng cách 
            xảy ra, và thực hiện điều chỉnh thực tế dựa trên hoàn cảnh thực tế. Cách tiếp cận này—tập trung 
            vào theo dõi và điều chỉnh thay vì sự hoàn hảo—dẫn đến chăm sóc dinh dưỡng tốt hơn và kết quả bệnh nhân tốt hơn 
            .
          </p>
        </div>
      </section>

      {/* 9. Call-to-Action */}
      {/* Educational: Encourages practical application of learning.
          Links to tools for hands-on practice. Supportive, practical tone
          helps readers feel capable of applying the concepts. */}
      <section
        aria-labelledby="cta-heading"
        className="space-y-6 rounded-lg border border-gray-200 bg-white p-6 sm:p-8"
      >
        <h2
          id="cta-heading"
          className="text-xl font-semibold sm:text-2xl text-gray-900"
        >
          Đưa Điều này Vào Thực hành
        </h2>
        <p className="text-base text-gray-700 leading-relaxed">
          Bây giờ bạn đã hiểu vì sao khoảng cách lượng ăn xảy ra, đây là các cách thực tế để áp dụng kiến thức này:
        </p>

        <div className="space-y-4 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Sử dụng Công cụ 03 để Hình dung Khoảng cách
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Link href="/tools/intake-assessment" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Công cụ So sánh Lượng Ăn vs. Nhu cầu
              </Link> giúp bạn thấy khoảng cách giữa yêu cầu tính toán và lượng ăn thực tế. 
              Hình dung này làm cho việc hiểu mức độ khoảng cách và nhận diện 
              mô hình theo thời gian dễ dàng hơn.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Thử nó:</strong> Nhập nhu cầu tính toán của bệnh nhân và lượng ăn thực tế của họ. 
              Công cụ sẽ cho bạn thấy khoảng cách một cách trực quan, giúp bạn thấy liệu thiếu hụt là trong 
              năng lượng, protein, hoặc cả hai. Hình dung thực tế này củng cố rằng khoảng cách là bình thường 
              và giúp bạn diễn giải chúng trong ngữ cảnh.
            </p>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Xem lại Giả định Công cụ 02
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              <Link href="/tools/energy-protein-calculator" className="text-blue-600 hover:text-blue-800 hover:underline font-medium">
                Máy tính Năng lượng & Protein (Công cụ 02)
              </Link> giúp bạn ước tính nhu cầu dinh dưỡng. Bây giờ bạn đã hiểu khoảng cách lượng ăn, 
              hãy xem lại công cụ này với quan điểm mới.
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Hãy nhớ:</strong> Các con số từ Công cụ 02 là điểm khởi đầu, không phải mục tiêu cứng nhắc. 
              Khi bạn tính nhu cầu, hãy nhớ rằng lượng ăn thực tế có thể sẽ thấp hơn—và điều đó 
              được dự kiến. Sử dụng khoảng tính toán như hướng dẫn cho lập kế hoạch, nhưng đừng ngạc nhiên hoặc 
              thất vọng khi lượng ăn thiếu. Tính toán giúp bạn hiểu những gì bạn đang hướng tới, 
              nhưng theo dõi lượng ăn thực tế cho bạn biết những gì thực sự đang xảy ra.
            </p>
          </div>

          <div className="bg-purple-50 border border-purple-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-2 text-lg">
              Áp dụng Lập luận vào Ví dụ Ca bệnh
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-3">
              Khi bạn làm việc với bệnh nhân, hãy thực hành áp dụng lập luận từ trang này:
            </p>
            <ul className="list-disc space-y-2 pl-5 text-sm text-gray-700 mb-3">
              <li>Khi bạn thấy khoảng cách lượng ăn, hãy hỏi: <em>"Các yếu tố nào đang góp phần?"</em> Cân nhắc 
              yếu tố liên quan đến bệnh nhân, liên quan đến bệnh tật, cung cấp chăm sóc, và hệ thống.</li>
              <li>Xem xu hướng trong vài ngày, không chỉ giá trị một ngày. Lượng ăn có đang cải thiện, 
              ổn định, hoặc giảm không?</li>
              <li>Diễn giải khoảng cách trong ngữ cảnh. Khoảng cách 30% ở bệnh nhân vừa phẫu thuật khác 
              với khoảng cách 30% ở bệnh nhân ổn định.</li>
              <li>Tập trung vào theo dõi và điều chỉnh thay vì đạt được lượng ăn hoàn hảo.</li>
            </ul>
            <p className="text-sm text-gray-700 leading-relaxed">
              <strong>Thực hành:</strong> Lần tới khi bạn xem xét ghi chép lượng ăn của bệnh nhân, hãy sử dụng 
              khung này. Nhận diện các yếu tố góp phần vào bất kỳ khoảng cách nào, đánh giá xu hướng, và cân nhắc 
              cách tiếp cận nào thực tế và phù hợp. Lập luận thực tế này sẽ giúp bạn 
              hiểu chăm sóc dinh dưỡng tốt hơn.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-300 rounded-lg p-4 mt-6">
          <p className="text-sm text-gray-700 leading-relaxed">
            <strong>Bạn có thể làm được.</strong> Hiểu vì sao khoảng cách lượng ăn xảy ra là bước đầu tiên. 
            Sử dụng các công cụ này và áp dụng lập luận này trong thực hành sẽ giúp bạn diễn giải khoảng cách lượng ăn 
            một cách thực tế và đưa ra quyết định thực tế về chăm sóc dinh dưỡng. Hãy nhớ: thiếu hụt lượng ăn 
            là phổ biến, tính toán là điểm khởi đầu, và theo dõi và điều chỉnh 
            quan trọng hơn sự hoàn hảo.
          </p>
        </div>
      </section>

      {/* Footer Note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Lưu ý:</strong> Tài nguyên này chỉ dùng cho mục đích giáo dục. Tình huống bệnh nhân cá nhân khác nhau, 
          và phán đoán lâm sàng nên luôn hướng dẫn quyết định chăm sóc dinh dưỡng. Khi còn nghi ngờ, hãy tham khảo với 
          chuyên gia dinh dưỡng đã đăng ký và nhóm lâm sàng.
        </p>
      </div>
    </main>
  );
}

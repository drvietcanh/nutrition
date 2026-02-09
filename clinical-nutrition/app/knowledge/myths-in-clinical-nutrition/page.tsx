'use client';

/**
 * Myths in Clinical nutrition page
 * 
 * Educational purpose: This page helps readers recognize common misconceptions
 * in clinical nutrition practice, understand why these beliefs persist, and learn
 * evidence-based approaches to improve safe nutrition care.
 * 
 * Design philosophy: Non-judgmental, educational approach that encourages reflection
 * and learning without shaming, alarmist language, or treatment advice.
 */

import { useState } from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';
import MythCard from './components/MythCard';
import { myths, type Myth } from './data/myths';
import { Card, CardHeader, CardContent } from '../../components/Card';

export default function MythsInClinicalNutritionPage() {
  const [expandedMyth, setExpandedMyth] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Filter myths based on search term - educational: helps users find relevant content
  const filteredMyths = myths.filter(myth =>
    myth.myth.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whyItSoundsRight.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whatActuallyHappens.toLowerCase().includes(searchTerm.toLowerCase()) ||
    myth.whatToUnderstandInstead.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleMyth = (id: string) => {
    setExpandedMyth(expandedMyth === id ? null : id);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Section 1: Title & Introduction */}
        {/* Educational: Sets context and explains the purpose without judgment */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Hiểu lầm phổ biến trong Dinh dưỡng lâm sàng
          </h1>
          <div className="max-w-3xl mx-auto text-left space-y-6">
            <section className="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                Bạn đã bao giờ tự hỏi vì sao một số thực hành dinh dưỡng vẫn tồn tại dù bằng chứng cho thấy điều ngược lại? 
                Nhiều quan niệm phổ biến trong dinh dưỡng lâm sàng xuất phát từ <strong>sự đơn giản hóa quá mức</strong>—biến các khái niệm 
                phức tạp, cá thể hóa thành các quy tắc đơn giản dễ nhớ và áp dụng hơn.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Mặc dù các cách tiếp cận đơn giản này có thể cảm thấy an toàn và dễ hiểu, <strong>dinh dưỡng lâm sàng đòi hỏi 
                bối cảnh và phán đoán</strong>. Điều hiệu quả với một bệnh nhân có thể không hiệu quả với bệnh nhân khác. Cùng một can thiệp 
                có thể phù hợp hoặc không phù hợp tùy thuộc vào tình trạng bệnh nhân, tiên lượng, trạng thái chuyển hóa, và 
                mục tiêu chăm sóc. Hiếm khi có câu trả lời phổ quát—chỉ có những câu hỏi thấu đáo và quyết định dựa trên bằng chứng.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Tài nguyên này khám phá các hiểu lầm phổ biến không phải để chỉ trích, mà để hiểu. Chúng tôi tò mò về 
                vì sao những quan niệm này vẫn tồn tại và cách chúng ta có thể tiếp cận chăm sóc dinh dưỡng với sự tinh tế hơn. 
                <strong> Sửa chữa những hiểu lầm này cải thiện chăm sóc bệnh nhân</strong> bằng cách giúp chúng ta đưa ra các quyết định 
                phù hợp hơn, cá thể hóa hơn phục vụ tốt hơn nhu cầu của bệnh nhân.
              </p>
            </section>
            <section className="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h2 className="font-semibold text-gray-900 mb-3">Cách sử dụng Tài nguyên Này</h2>
              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                Dù bạn là điều dưỡng ghi chép lượng ăn, sinh viên y khoa trong buổi hội chẩn, hay bác sĩ viết lệnh dinh dưỡng, 
                bạn có thể đã gặp những quan niệm phổ biến này. Tài nguyên này giúp bạn:
              </p>
              <ul className="text-gray-700 text-sm space-y-2 list-disc pl-6">
                <li><strong>Nhận diện</strong> khi các quan niệm phổ biến có thể cần được đặt câu hỏi trong thực hành hàng ngày</li>
                <li><strong>Hiểu</strong> vì sao những quan niệm này vẫn tồn tại (chúng thường có nguồn gốc logic)</li>
                <li><strong>Học</strong> lập luận lâm sàng đằng sau các cách tiếp cận dựa trên bằng chứng</li>
                <li><strong>Cải thiện</strong> sử dụng an toàn các công cụ đánh giá và can thiệp dinh dưỡng</li>
              </ul>
              <p className="text-gray-700 text-xs mt-4 italic">
                <strong>Lưu ý:</strong> Thuật ngữ y tế được giải thích trong ngữ cảnh. Nếu bạn gặp thuật ngữ không quen thuộc, 
                hãy coi đó là cơ hội để xây dựng vốn từ vựng lâm sàng của bạn.
              </p>
            </section>
          </div>
        </header>

        {/* Section 2: Why myths Persist in Clinical nutrition */}
        {/* Educational: Helps readers understand the logical origins of misconceptions */}
        <section className="mb-12 bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-8" aria-labelledby="why-myths-persist-heading">
          <h2 id="why-myths-persist-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Vì sao Những quan niệm Này vẫn tồn tại?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Hiểu vì sao hiểu lầm vẫn tồn tại giúp chúng ta nhận diện chúng trong thực hành và tiếp cận thay đổi với sự đồng cảm. 
            Những quan niệm này thường tiếp tục vì:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Mong muốn Quy tắc Đơn giản</h3>
              <p className="text-sm text-gray-700">
                Quy tắc đơn giản cảm thấy an toàn và dễ áp dụng hơn các cách tiếp cận phức tạp, cá thể hóa. 
                "2000 kcal cho mọi người" dễ nhớ hơn tính toán nhu cầu cá nhân, dù kém chính xác hơn. 
                Trong môi trường lâm sàng bận rộn, quy tắc đơn giản giảm mệt mỏi quyết định và cảm thấy dễ quản lý hơn.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Phụ thuộc Quá mức vào Số liệu hoặc Xét nghiệm</h3>
              <p className="text-sm text-gray-700">
                Số liệu và giá trị xét nghiệm cảm thấy khách quan và chắc chắn, nhưng chúng không kể toàn bộ câu chuyện. 
                Chỉ tập trung vào một giá trị xét nghiệm (như albumin) hoặc một con số cụ thể (như BMI) có thể khiến chúng ta 
                bỏ lỡ bức tranh lâm sàng rộng hơn và nhu cầu cá nhân của bệnh nhân.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Diễn giải Sai hướng dẫn</h3>
              <p className="text-sm text-gray-700">
                Hướng dẫn lâm sàng cung cấp khuyến nghị dựa trên bằng chứng, nhưng chúng nhằm hướng dẫn phán đoán, 
                không thay thế nó. Khi hướng dẫn được áp dụng quá cứng nhắc hoặc không xem xét bối cảnh bệnh nhân, 
                chúng có thể dẫn đến chăm sóc không phù hợp. Hướng dẫn là công cụ, không phải quy tắc.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2">Trộn lẫn Lời khuyên Dinh dưỡng Cộng đồng với Chăm sóc lâm sàng</h3>
              <p className="text-sm text-gray-700">
                Lời khuyên dinh dưỡng chung cho dân số khỏe mạnh (như "ăn ít carb" hoặc "nhiều protein hơn là tốt hơn") 
                không phải lúc nào cũng áp dụng cho bệnh nhân bệnh, nằm viện. Điều phù hợp cho sức khỏe cộng đồng có thể không 
                phù hợp trong môi trường lâm sàng nơi bệnh nhân có nhu cầu chuyển hóa khác nhau.
              </p>
            </article>
          </div>
        </section>

        {/* Search functionality */}
        {/* Educational: Helps users find specific misconceptions they're interested in */}
        <div className="mb-6 sm:mb-8">
          <label htmlFor="myth-search" className="sr-only">Tìm kiếm hiểu lầm và quan niệm sai</label>
          <input
            id="myth-search"
            type="search"
            placeholder="Tìm kiếm hiểu lầm và quan niệm sai..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            aria-label="Tìm kiếm hiểu lầm và quan niệm sai"
          />
        </div>

        {/* Section 3: Myth sections */}
        {/* Educational: Each myth card provides structured learning about misconceptions */}
        <section className="mb-12" aria-labelledby="myths-heading">
          <h2 id="myths-heading" className="text-2xl font-bold text-gray-900 mb-6">
            Hiểu lầm phổ biến trong Thực hành
          </h2>
          {filteredMyths.length === 0 ? (
            <div className="text-center py-12 text-gray-500" role="status" aria-live="polite">
              Không tìm thấy hiểu lầm nào khớp với tìm kiếm của bạn.
            </div>
          ) : (
            <ol className="space-y-4" aria-label="List of common misconceptions">
              {filteredMyths.map((myth) => (
                <li key={myth.id}>
                  <MythCard
                    myth={myth}
                    isExpanded={expandedMyth === myth.id}
                    onToggle={() => toggleMyth(myth.id)}
                  />
                </li>
              ))}
            </ol>
          )}
        </section>

        {/* Section 4: Common themes */}
        {/* Educational: Helps readers identify patterns across misconceptions */}
        <section className="mb-12 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-lg" aria-labelledby="common-themes-heading">
          <h2 id="common-themes-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Chủ đề Chung xuyên suốt Các hiểu lầm Này
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Khi bạn suy ngẫm về những hiểu lầm này, bạn sẽ nhận thấy một số chủ đề lặp lại xuất hiện xuyên suốt các quan niệm khác nhau. 
            Hiểu những chủ đề này giúp chúng ta nhận diện khi các mô hình tư duy tương tự có thể đang ảnh hưởng đến thực hành của chúng ta:
          </p>
          <div className="space-y-6">
            <article className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl" aria-hidden="true">1.</span>
                Bối cảnh Quan trọng
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Cùng một can thiệp có thể phù hợp hoặc không phù hợp tùy thuộc vào tình trạng bệnh nhân, tiên lượng, 
                trạng thái chuyển hóa, và mục tiêu chăm sóc. Điều hiệu quả với bệnh nhân ngoại trú khỏe mạnh có thể không hiệu quả với bệnh nhân nằm viện. 
                Điều phù hợp cho một tình huống lâm sàng có thể không phù hợp cho tình huống khác. Xem xét toàn bộ bức tranh lâm sàng 
                trước khi áp dụng quy tắc hoặc hướng dẫn chung.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Ví dụ: Sụt cân có thể có lợi cho bệnh nhân ngoại trú béo phì, nhưng sụt cân không chủ ý ở bệnh nhân nằm viện 
                là đáng lo ngại, ngay cả khi họ béo phì.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl" aria-hidden="true">2.</span>
                Xu hướng quan trọng hơn Giá trị Đơn lẻ
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Một giá trị xét nghiệm, đo cân nặng, hoặc đếm calo đơn lẻ cho bạn biết rất ít. Điều quan trọng là xu hướng theo thời gian. 
                Bệnh nhân có đang cải thiện? Xấu đi? Ổn định? Giá trị đơn lẻ có thể gây hiểu lầm, nhưng xu hướng tiết lộ 
                bức tranh lâm sàng thực sự. Tập trung vào mô hình và thay đổi thay vì các con số riêng lẻ.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Ví dụ: Một ngày lượng ăn thấp không nhất thiết đáng lo ngại, nhưng mô hình lượng ăn giảm trong vài 
                ngày cần được chú ý.
              </p>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 text-lg flex items-center gap-2">
                <span className="text-indigo-600 text-2xl" aria-hidden="true">3.</span>
                Số liệu Hỗ trợ Tư duy, Không thay thế Nó
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Tính toán, giá trị xét nghiệm, và đo lường là công cụ để cung cấp thông tin cho phán đoán lâm sàng của bạn, không phải để thay thế nó. 
                Số liệu cung cấp dữ liệu, nhưng bạn cung cấp cách diễn giải. sử dụng tính toán và đo lường để hỗ trợ tư duy của bạn, 
                nhưng luôn xem xét hoàn cảnh cá nhân của bệnh nhân, phản ứng với can thiệp, và toàn bộ bức tranh lâm sàng. 
                Con số là điểm khởi đầu, không phải điểm kết thúc.
              </p>
              <p className="text-gray-600 text-sm mt-3 italic">
                Ví dụ: Nhu cầu calo đã tính là ước tính dựa trên phương trình. Theo dõi phản ứng của bệnh nhân và 
                điều chỉnh dựa trên cách họ thực sự đang làm, không chỉ dựa vào con số.
              </p>
            </article>
          </div>
        </section>

        {/* Section 5: What to Remember */}
        {/* Educational: Key principles to guide practice */}
        <section className="mb-12 p-6 bg-blue-50 border border-blue-200 rounded-lg" aria-labelledby="remember-heading">
          <h2 id="remember-heading" className="text-2xl font-bold text-gray-900 mb-4">
            Điều cần Nhớ
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Khi bạn suy ngẫm về những hiểu lầm phổ biến này, hãy ghi nhớ những nguyên tắc chính sau:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">1.</span>
                Cá thể hóa Quan trọng
              </h3>
              <p className="text-sm text-gray-700">
                Nhu cầu dinh dưỡng khác biệt đáng kể giữa các bệnh nhân. Điều hiệu quả với một bệnh nhân có thể không hiệu quả với bệnh nhân khác, 
                ngay cả với tình trạng tương tự. Đánh giá và tính toán nhu cầu cá nhân thường quan trọng.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">2.</span>
                Nhiều không phải Luôn tốt hơn
              </h3>
              <p className="text-sm text-gray-700">
                Mức đầy đủ thường là mục tiêu, không phải tối đa hóa. Chất dinh dưỡng quá mức có thể không mang lại lợi ích thêm và có thể gây vấn đề. Trọng tâm thường là đáp ứng nhu cầu thay vì vượt quá chúng.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">3.</span>
                Bối cảnh Rất quan trọng
              </h3>
              <p className="text-sm text-gray-700">
                Cùng một can thiệp có thể phù hợp hoặc không phù hợp tùy thuộc vào tình trạng bệnh nhân, 
                tiên lượng, và mục tiêu chăm sóc. Xem xét toàn bộ bức tranh lâm sàng thường quan trọng.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">4.</span>
                Bằng chứng Phát triển
              </h3>
              <p className="text-sm text-gray-700">
                Thực hành từng là tiêu chuẩn nhiều thập kỷ trước có thể không phù hợp với bằng chứng hiện tại. Cập nhật 
                hướng dẫn và cởi mở với việc cập nhật thực hành của bạn.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">5.</span>
                Đặt câu hỏi về Giả định
              </h3>
              <p className="text-sm text-gray-700">
                Khi bạn nghe "chúng ta luôn làm theo cách này," hãy hỏi vì sao. Hiểu lý do giúp bạn nhận diện 
                khi thực hành cần được cập nhật.
              </p>
            </article>
            <article className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <span className="text-blue-600" aria-hidden="true">6.</span>
                Hợp tác Cải thiện Chăm sóc
              </h3>
              <p className="text-sm text-gray-700">
                Làm việc với chuyên gia dinh dưỡng, điều dưỡng, bác sĩ, và các thành viên nhóm khác. Các quan điểm khác nhau giúp nhận diện 
                giả định và cải thiện ra quyết định.
              </p>
            </article>
          </div>
        </section>

        {/* Section 6: Safety & Perspective */}
        {/* Educational: Important disclaimers and context about using this resource */}
        <section className="mb-12 space-y-6" aria-labelledby="safety-heading">
          {/* Clear disclaimer */}
          <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg" role="alert" aria-live="polite">
            <h2 id="safety-heading" className="text-xl font-bold text-red-900 mb-3 flex items-center gap-2">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Lưu ý Quan trọng
            </h2>
            <p className="text-sm text-red-900 leading-relaxed font-medium">
              Tài nguyên này chỉ dùng cho mục đích giáo dục và không cấu thành tư vấn y tế, chẩn đoán, hoặc điều trị. 
              Thông tin được cung cấp không nên thay thế phán đoán lâm sàng chuyên nghiệp hoặc tư vấn nhóm đa ngành. 
              Luôn tham khảo ý kiến các chuyên gia y tế có trình độ cho các quyết định chăm sóc dinh dưỡng cụ thể cho bệnh nhân.
            </p>
          </div>

          {/* Main content */}
          <div className="p-6 bg-amber-50 border border-amber-200 rounded-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              An toàn & Quan điểm
            </h2>
            <div className="space-y-6">
              <article className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Công cụ Dinh dưỡng Giúp hướng dẫn Sự chú ý
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Công cụ đánh giá dinh dưỡng, máy tính, công cụ sàng lọc, và hướng dẫn được thiết kế để giúp bạn 
                  nhận diện các lĩnh vực cần chú ý và cung cấp khung tư duy về chăm sóc dinh dưỡng. Chúng giúp 
                  bạn tập trung vào điều quan trọng nhất và đảm bảo bạn không bỏ lỡ các cân nhắc quan trọng. Hãy coi chúng như 
                  công cụ điều hướng chỉ bạn đúng hướng, không phải điểm đến.
                </p>
              </article>

              <article className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Chúng không thay thế Chăm sóc Đa ngành
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Không có công cụ, tính toán, hoặc hướng dẫn nào có thể thay thế chuyên môn và hợp tác của nhóm đa ngành. 
                  Chăm sóc dinh dưỡng hiệu quả đòi hỏi đầu vào từ chuyên gia dinh dưỡng đã đăng ký, bác sĩ, điều dưỡng, dược sĩ, 
                  vật lý trị liệu, và các chuyên gia khác, mỗi người mang lại quan điểm độc đáo. Công cụ hỗ trợ 
                  ra quyết định nhóm; chúng không loại bỏ nhu cầu hợp tác nhóm. Chăm sóc dinh dưỡng tốt nhất xảy ra 
                  khi các thành viên nhóm làm việc cùng nhau, chia sẻ kiến thức và quan điểm.
                </p>
              </article>

              <article className="bg-white p-5 rounded-lg border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3 text-lg">
                  Phán đoán lâm sàng Vẫn là Trung tâm
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Phán đoán lâm sàng—khả năng của bạn để đánh giá, diễn giải, và ra quyết định dựa trên toàn bộ bức tranh lâm sàng—là 
                  không thể thay thế. Công cụ cung cấp dữ liệu và gợi ý, nhưng bạn phải diễn giải thông tin đó trong bối cảnh 
                  tình huống bệnh nhân độc đáo. Xem xét tình trạng bệnh nhân, tiên lượng, mục tiêu chăm sóc, sở thích gia đình, 
                  và nguồn lực cơ sở. Số liệu và hướng dẫn cung cấp thông tin cho phán đoán của bạn; chúng không thay thế nó. Khi công cụ 
                  và phán đoán lâm sàng xung đột, hãy tin vào phán đoán của bạn và tham khảo với nhóm của bạn.
                </p>
              </article>

              <div className="bg-blue-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Khi còn nghi ngờ, Hãy tham khảo
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed mb-3">
                  Nếu bạn không chắc chắn về quyết định dinh dưỡng, hãy tham khảo với:
                </p>
                <ul className="text-sm text-gray-700 space-y-1 list-disc pl-6">
                  <li><strong>Chuyên gia Dinh dưỡng Đã đăng ký:</strong> Chuyên gia đánh giá và lập kế hoạch dinh dưỡng</li>
                  <li><strong>Nhóm hỗ trợ Dinh dưỡng lâm sàng:</strong> Cho các trường hợp phức tạp cần hỗ trợ dinh dưỡng chuyên biệt</li>
                  <li><strong>Nhóm lâm sàng Của bạn:</strong> Bác sĩ, điều dưỡng, và các nhà cung cấp khác biết bệnh nhân</li>
                  <li><strong>Hướng dẫn lâm sàng:</strong> khuyến nghị dựa trên bằng chứng hiện tại từ các tổ chức chuyên nghiệp</li>
                </ul>
              </div>

              <div className="border-t border-gray-300 pt-4">
                <h3 className="font-semibold text-gray-900 mb-2">
                  Về tài nguyên Này
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Tất cả thông tin dựa trên hướng dẫn lâm sàng hiện tại từ các tổ chức dinh dưỡng hàng đầu bao gồm 
                  ASPEN (Hiệp hội Dinh dưỡng Tĩnh mạch và Ống thông Hoa kỳ), ESPEN (Hiệp hội Dinh dưỡng lâm sàng và Chuyển hóa Châu âu), 
                  và Học viện Dinh dưỡng và Chế độ ăn. Mục tiêu của chúng tôi là hỗ trợ thực hành dinh dưỡng an toàn, 
                  dựa trên bằng chứng thông qua giáo dục và suy ngẫm, không phải chỉ trích. Cập nhật thường xuyên đảm bảo 
                  phù hợp với bằng chứng mới nhất.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 7: Call-to-Action */}
        {/* Educational: Encourages continued learning and application */}
        <section className="mb-8 p-8 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg" aria-labelledby="cta-heading">
          <div className="text-center mb-6">
            <h2 id="cta-heading" className="text-2xl font-bold text-gray-900 mb-3">
              Sẵn sàng Áp dụng Những gì Bạn đã Học?
            </h2>
            <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
              Hiểu những hiểu lầm này là có giá trị, nhưng đưa kiến thức đó vào thực hành là nơi học tập thực sự xảy ra. 
              Chúng tôi mời bạn tiếp tục hành trình của mình với các bước tiếp theo hỗ trợ này:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <article className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3 mx-auto" aria-hidden="true">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Khám phá Công cụ Đánh giá</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Thực hành với các công cụ đánh giá và tính toán dinh dưỡng tương tác của chúng tôi. Các công cụ này giúp bạn áp dụng những gì bạn đã học 
                một cách thực hành, xây dựng sự tự tin khi bạn làm việc qua các tình huống thực tế.
              </p>
              <div className="text-center">
                <a 
                  href="/tools" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Khám phá Công cụ
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3 mx-auto" aria-hidden="true">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Đọc tổng quan Đánh giá</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Đào sâu hiểu biết của bạn bằng cách đọc tổng quan toàn diện của chúng tôi về quy trình đánh giá dinh dưỡng lâm sàng. 
                Xem cách sàng lọc, ước tính nhu cầu, và đánh giá lượng ăn hoạt động cùng nhau để tạo thành bức tranh hoàn chỉnh.
              </p>
              <div className="text-center">
                <a 
                  href="/knowledge/assessment-process" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Đọc tổng quan
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>

            <article className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3 mx-auto" aria-hidden="true">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2 text-center">Áp dụng vào Ví dụ Ca bệnh</h3>
              </div>
              <p className="text-sm text-gray-700 mb-4 text-center">
                Đưa học tập của bạn vào thực hành bằng cách làm việc qua các ví dụ ca bệnh. Xem cách các nguyên tắc bạn đã học áp dụng 
                vào các tình huống bệnh nhân thực tế, xây dựng kỹ năng lập luận lâm sàng của bạn trên đường đi.
              </p>
              <div className="text-center">
                <a 
                  href="/cases" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium hover:underline"
                >
                  Xem ca bệnh
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          </div>

          <blockquote className="mt-8 p-5 bg-white rounded-lg border border-gray-200 max-w-3xl mx-auto text-center">
            <p className="text-sm text-gray-700 leading-relaxed italic">
              "Hãy nhớ, học tập là một hành trình, không phải điểm đến. Mỗi lần gặp bệnh nhân là cơ hội để áp dụng những gì bạn đã học 
              và tiếp tục phát triển trong thực hành của bạn. Bạn đang xây dựng các kỹ năng sẽ phục vụ bạn và bệnh nhân của bạn tốt."
            </p>
          </blockquote>
        </section>

        {/* Related tools */}
        <section className="mb-12 space-y-4" aria-labelledby="tools-heading">
          <h2 id="tools-heading" className="text-2xl font-bold text-gray-900">
            Công cụ liên quan
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Các công cụ giáo dục này giúp bạn thực hành các nguyên tắc đã học và hiểu cách áp dụng chúng trong đánh giá dinh dưỡng:
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
            <Card href="/tools/malnutrition-screening">
              <CardHeader icon={CheckCircle} title="Nguy cơ Suy dinh dưỡng" />
              <CardContent>
                <p className="text-body-sm">
                  Khám phá cách các công cụ sàng lọc đánh giá nguy cơ suy dinh dưỡng,
                  hiểu rằng sàng lọc là điểm khởi đầu, không phải chẩn đoán.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/intake-assessment">
              <CardHeader icon={CheckCircle} title="Đánh giá Lượng ăn" />
              <CardContent>
                <p className="text-body-sm">
                  So sánh lượng dinh dưỡng thực tế ăn vào với nhu cầu ước tính,
                  minh họa khoảng cách thường gặp trong thực hành lâm sàng.
                </p>
              </CardContent>
            </Card>
            <Card href="/tools/bmi-body-composition">
              <CardHeader icon={CheckCircle} title="BMI & Thành phần cơ thể" />
              <CardContent>
                <p className="text-body-sm">
                  Tính các chỉ số cơ bản như BMI, IBW, ABW, và BSA,
                  hiểu rằng các chỉ số này là công cụ hỗ trợ, không phải câu trả lời cuối cùng.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </main>
  );
}

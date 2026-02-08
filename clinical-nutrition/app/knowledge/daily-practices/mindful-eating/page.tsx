import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Heart, Brain, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ăn uống Chánh niệm",
  description:
    "Ăn uống chánh niệm (mindful eating) là cách ăn uống có ý thức, chú ý đến cảm giác, hương vị, và tín hiệu của cơ thể. Lợi ích và cách thực hành.",
  keywords: [
    "ăn uống chánh niệm",
    "mindful eating",
    "ý thức ăn uống",
    "quan hệ với thức ăn",
    "sức khỏe tâm thần",
    "kiểm soát cân nặng",
  ],
};

export default function MindfulEatingPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Ăn uống Chánh niệm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Brain className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Ăn uống Chánh niệm</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Ăn uống chánh niệm (mindful eating) là cách ăn uống có ý thức, chú ý đến cảm giác, hương vị, 
          và tín hiệu của cơ thể. Không chỉ là ăn gì, mà còn là cách ăn - chậm rãi, có ý thức, 
          và tận hưởng từng miếng ăn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Ăn uống chánh niệm</strong> là ăn uống có ý thức, chú ý đến cảm giác và tín hiệu cơ thể
          </li>
          <li>
            <strong>Lợi ích:</strong> Kiểm soát cân nặng tốt hơn, tiêu hóa tốt hơn, quan hệ lành mạnh với thức ăn
          </li>
          <li>
            <strong>Thực hành:</strong> Ăn chậm, chú ý đến hương vị, nhận biết khi no, không phân tâm khi ăn
          </li>
          <li>
            <strong>Không phải chế độ ăn:</strong> Đây là cách tiếp cận ăn uống, không phải quy tắc cứng nhắc
          </li>
          <li>
            <strong>Phù hợp với mọi người:</strong> Có thể áp dụng với bất kỳ chế độ ăn nào
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Ăn uống Chánh niệm là gì?</h2>
        <div className="space-y-4">
          <Card>
            <p className="text-body-sm mb-3">
              <strong>Ăn uống chánh niệm</strong> là cách ăn uống có ý thức, chú ý đến:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi ăn chánh niệm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Chú ý đến hương vị, kết cấu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ăn chậm, nhai kỹ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Nhận biết khi no</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Không phân tâm (TV, điện thoại)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tận hưởng từng miếng ăn</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi ăn không chánh niệm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ăn nhanh, nuốt vội</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Phân tâm (TV, điện thoại)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Không nhận biết khi no</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ăn theo cảm xúc (stress, buồn)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ăn quá nhiều hoặc quá ít</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Ăn uống chánh niệm giống như "lắng nghe" cơ thể khi ăn. Thay vì ăn vội vàng trong khi xem TV, 
              bạn ngồi xuống, chú ý đến món ăn, nhai kỹ, và cảm nhận khi nào cơ thể no. 
              Giống như khi bạn "lắng nghe" một người bạn nói, bạn chú ý và hiểu rõ hơn.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích của Ăn uống Chánh niệm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Kiểm soát Cân nặng</h3>
            <p className="text-body-sm">
              Ăn chánh niệm giúp bạn nhận biết khi no, tránh ăn quá nhiều. 
              Nghiên cứu cho thấy người ăn chánh niệm thường có cân nặng khỏe mạnh hơn.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Tiêu hóa Tốt hơn</h3>
            <p className="text-body-sm">
              Ăn chậm, nhai kỹ giúp tiêu hóa tốt hơn. Nước bọt và enzyme tiêu hóa có thời gian hoạt động, 
              giảm đầy hơi, chướng bụng.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Tận hưởng Thức ăn</h3>
            <p className="text-body-sm">
              Khi chú ý đến hương vị, bạn tận hưởng thức ăn nhiều hơn. 
              Điều này giúp bạn hài lòng với ít thức ăn hơn.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quan hệ lành mạnh với Thức ăn</h3>
            <p className="text-body-sm">
              Ăn chánh niệm giúp bạn hiểu rõ hơn về mối quan hệ với thức ăn, 
              giảm ăn theo cảm xúc, và có quan hệ lành mạnh hơn.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách thực hành Ăn uống Chánh niệm</h2>
        <Card>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">1. Trước khi Ăn</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ngồi xuống, không đứng ăn</li>
                  <li>• Tắt TV, điện thoại, máy tính</li>
                  <li>• Nhìn món ăn, ngửi mùi thơm</li>
                  <li>• Hỏi bản thân: "Tôi có thực sự đói không?"</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">2. Trong khi Ăn</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Ăn chậm, nhai kỹ (ít nhất 20-30 lần nhai)</li>
                  <li>• Chú ý đến hương vị, kết cấu, nhiệt độ</li>
                  <li>• Đặt đũa/muỗng xuống giữa các miếng ăn</li>
                  <li>• Tận hưởng từng miếng ăn</li>
                  <li>• Không vội vàng</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">3. Nhận biết Khi No</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Dừng lại giữa bữa ăn để kiểm tra: "Tôi còn đói không?"</li>
                  <li>• Nhận biết cảm giác no (không còn đói, nhưng chưa quá no)</li>
                  <li>• Dừng ăn khi cảm thấy no, không cần ăn hết đĩa</li>
                  <li>• Có thể để dành phần còn lại</li>
                </ul>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Heart className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-1">4. Sau khi Ăn</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Dừng lại một chút sau bữa ăn</li>
                  <li>• Cảm nhận cảm giác no, hài lòng</li>
                  <li>• Không cảm thấy tội lỗi về những gì đã ăn</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực hành</h2>
        <ExampleBox variant="tip" title="Ví dụ: Ăn một Bữa ăn Chánh niệm">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">Trước khi ăn:</p>
              <p className="text-sm text-gray-700">
                Ngồi xuống bàn, tắt TV. Nhìn món ăn (ví dụ: cơm + canh chua cá + rau muống). 
                Ngửi mùi thơm. Hỏi: "Tôi có đói không?" - Có.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Bắt đầu ăn:</p>
              <p className="text-sm text-gray-700">
                Lấy một miếng cá, đưa vào miệng. Nhai chậm, cảm nhận vị chua của canh, 
                vị ngọt của cá, kết cấu mềm. Nhai ít nhất 20 lần. Nuốt. Đặt đũa xuống. 
                Lấy một miếng rau muống, nhai chậm, cảm nhận vị giòn, hơi đắng nhẹ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Giữa bữa ăn:</p>
              <p className="text-sm text-gray-700">
                Dừng lại, đặt đũa xuống. Hỏi: "Tôi còn đói không?" - Vẫn còn đói một chút. 
                Tiếp tục ăn, nhưng chậm hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">Khi cảm thấy no:</p>
              <p className="text-sm text-gray-700">
                Dừng lại. Cảm nhận: "Tôi đã no, không còn đói nữa, nhưng chưa quá no." 
                Để dành phần còn lại. Cảm thấy hài lòng.
              </p>
            </div>
          </div>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Ăn Chánh niệm vs Không Chánh niệm</h2>
        <ComparisonCard
          title="Ví dụ So sánh"
          items={[
            {
              label: "Bữa trưa",
              good: "Ngồi xuống, tắt TV, ăn chậm, nhai kỹ, dừng khi no = ăn đủ, hài lòng, tiêu hóa tốt",
              bad: "Vừa ăn vừa xem TV, ăn nhanh, nuốt vội, ăn hết đĩa = ăn quá nhiều, đầy bụng",
              note: "Ăn chánh niệm giúp nhận biết khi no và ăn đúng lượng"
            },
            {
              label: "Snack",
              good: "Ngồi xuống, chú ý đến hương vị, ăn chậm, nhận biết khi đủ = ăn ít hơn, hài lòng",
              bad: "Vừa ăn vừa làm việc, không chú ý, ăn hết túi = ăn quá nhiều, không nhận biết",
              note: "Chú ý khi ăn giúp kiểm soát lượng ăn tốt hơn"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bắt đầu nhỏ:</strong> Thử ăn chánh niệm một bữa/ngày, không cần tất cả bữa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đặt đũa xuống:</strong> Đặt đũa/muỗng xuống giữa các miếng ăn giúp bạn ăn chậm hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nhai kỹ:</strong> Nhai ít nhất 20-30 lần trước khi nuốt. Giúp tiêu hóa tốt và nhận biết khi no.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không phân tâm:</strong> Tắt TV, điện thoại khi ăn. Chú ý đến món ăn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Linh hoạt:</strong> Không cần hoàn hảo. Một vài bữa chánh niệm tốt hơn không có bữa nào.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Ăn chánh niệm là chế độ ăn kiêng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ăn chánh niệm không phải là chế độ ăn kiêng. 
                Đây là cách tiếp cận ăn uống, có thể áp dụng với bất kỳ chế độ ăn nào.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải ăn chánh niệm mọi lúc"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không cần hoàn hảo. Bắt đầu với một bữa/ngày, 
                hoặc thậm chí một vài miếng ăn chánh niệm. Quan trọng là thực hành, không phải hoàn hảo.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Ăn chánh niệm chỉ dành cho người có vấn đề"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ăn chánh niệm có lợi cho mọi người - giúp tiêu hóa tốt, 
                kiểm soát cân nặng, và tận hưởng thức ăn nhiều hơn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/portion-sizes">
            <h3 className="heading-5 mb-2">Hiểu về Portion Sizes</h3>
            <p className="text-sm text-gray-600">
              Ăn chánh niệm giúp nhận biết khẩu phần phù hợp
            </p>
          </Card>
          <Card href="/knowledge/nutrition-stress">
            <h3 className="heading-5 mb-2">Dinh dưỡng và Stress</h3>
            <p className="text-sm text-gray-600">
              Ăn chánh niệm giúp giảm ăn theo cảm xúc
            </p>
          </Card>
          <Card href="/knowledge/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Ăn chánh niệm hỗ trợ kiểm soát cân nặng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Ăn uống chánh niệm là công cụ hữu ích, 
          nhưng không thay thế điều trị cho các rối loạn ăn uống. Nếu bạn có rối loạn ăn uống 
          hoặc quan hệ không lành mạnh với thức ăn, hãy tham khảo chuyên gia sức khỏe tâm thần 
          hoặc chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

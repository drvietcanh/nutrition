import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Clock, AlertCircle, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Intermittent Fasting: Hiểu đúng",
  description:
    "Hướng dẫn về intermittent fasting (nhịn ăn gián đoạn) - các phương pháp, lợi ích, rủi ro, và ai nên/không nên thử.",
  keywords: [
    "intermittent fasting",
    "nhịn ăn gián đoạn",
    "IF",
    "fasting",
    "weight loss",
  ],
};

export default function IntermittentFastingPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề Đặc biệt", href: "/knowledge/special-topics" },
          { label: "Intermittent Fasting" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Clock className="w-8 h-8 text-purple-600" aria-hidden="true" />
          <h1 className="heading-1">Intermittent Fasting: Hiểu đúng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Intermittent fasting (IF) - nhịn ăn gián đoạn - là một phương pháp ăn uống theo thời gian, 
          không phải theo loại thực phẩm. Hiểu đúng về IF giúp bạn quyết định xem nó có phù hợp với mình không.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Intermittent Fasting</strong> = Ăn trong khoảng thời gian nhất định, nhịn ăn trong khoảng thời gian khác
          </li>
          <li>
            <strong>Không phải</strong> về loại thực phẩm, mà về <strong>khi nào</strong> ăn
          </li>
          <li>
            <strong>Phương pháp phổ biến:</strong> 16:8 (nhịn 16 giờ, ăn 8 giờ), 5:2 (ăn bình thường 5 ngày, ít 2 ngày)
          </li>
          <li>
            <strong>Không phù hợp cho tất cả:</strong> Phụ nữ mang thai, trẻ em, người có bệnh lý đặc biệt không nên
          </li>
          <li>
            <strong>Quan trọng:</strong> Vẫn cần ăn đủ dinh dưỡng trong thời gian ăn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Intermittent Fasting là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Intermittent Fasting (IF)</strong> là một phương pháp ăn uống theo thời gian. 
            Bạn chia ngày thành hai khoảng: khoảng thời gian ăn (eating window) và khoảng thời gian nhịn ăn (fasting window).
          </p>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              <strong>16:8 Method:</strong> Nhịn ăn 16 giờ (ví dụ: 8 giờ tối đến 12 giờ trưa hôm sau), 
              ăn trong 8 giờ (ví dụ: 12 giờ trưa đến 8 giờ tối). Trong thời gian ăn, bạn vẫn ăn bình thường, 
              đủ dinh dưỡng.
            </p>
          </ExampleBox>

          <Card>
            <h3 className="heading-4 mb-3">Các Phương pháp phổ biến</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Phương pháp</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Cách thực hiện</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Phù hợp</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900"><strong>16:8</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Nhịn 16 giờ, ăn 8 giờ</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Người mới bắt đầu</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900"><strong>18:6</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Nhịn 18 giờ, ăn 6 giờ</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Người đã quen</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900"><strong>5:2</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Ăn bình thường 5 ngày, 500-600 calo 2 ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Người muốn linh hoạt</td>
                  </tr>
                  <tr className="bg-neutral-50">
                    <td className="px-4 py-3 text-sm font-medium text-neutral-900"><strong>OMAD</strong></td>
                    <td className="px-4 py-3 text-sm text-neutral-700">One Meal A Day - 1 bữa/ngày</td>
                    <td className="px-4 py-3 text-sm text-neutral-700">Người có kinh nghiệm</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích và Rủi ro</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Lợi ích Tiềm năng</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Giảm cân:</strong> Có thể giúp giảm cân bằng cách giảm tổng calo</li>
              <li>• <strong>Đơn giản:</strong> Không cần đếm calo, chỉ cần chú ý thời gian</li>
              <li>• <strong>Linh hoạt:</strong> Có thể điều chỉnh theo lịch trình</li>
              <li>• <strong>Một số nghiên cứu:</strong> Có thể cải thiện đường huyết, cholesterol (cần nghiên cứu thêm)</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Rủi ro và Tác dụng phụ</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Đói, mệt mỏi:</strong> Đặc biệt khi mới bắt đầu</li>
              <li>• <strong>Đau đầu:</strong> Có thể xảy ra khi nhịn ăn</li>
              <li>• <strong>Khó tập trung:</strong> Một số người khó tập trung khi đói</li>
              <li>• <strong>Nguy cơ ăn quá nhiều:</strong> Sau khi nhịn, dễ ăn quá nhiều</li>
              <li>• <strong>Ảnh hưởng phụ nữ:</strong> Có thể ảnh hưởng chu kỳ kinh nguyệt</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ai Nên và Không Nên Thử?</h2>
        <ComparisonCard
          title="Phù hợp vs Không Phù hợp"
          items={[
            {
              label: "Có thể thử (với thận trọng)",
              good: "Người khỏe mạnh, muốn giảm cân, đã tham khảo bác sĩ",
              bad: undefined,
            },
            {
              label: "KHÔNG nên thử",
              good: undefined,
              bad: "Phụ nữ mang thai, trẻ em, người có tiền sử rối loạn ăn uống, người đái tháo đường (đặc biệt dùng insulin), người có bệnh lý đặc biệt",
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành (Nếu Thử)</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bắt đầu từ từ:</strong> Bắt đầu với 12:12 (nhịn 12 giờ), sau đó tăng dần
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống nước:</strong> Uống nhiều nước trong thời gian nhịn ăn
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đủ dinh dưỡng:</strong> Trong thời gian ăn, vẫn cần ăn đủ, đa dạng, không chỉ calo
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Lắng nghe cơ thể:</strong> Nếu cảm thấy không tốt, dừng lại
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
              <p className="text-sm font-semibold mb-1">"IF là cách tốt nhất để giảm cân"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> IF có thể giúp giảm cân, nhưng không phải cách duy nhất. 
                Quan trọng là tạo calorie deficit, không phải phương pháp.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Có thể ăn gì cũng được trong thời gian ăn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Vẫn cần ăn đủ dinh dưỡng. Ăn toàn đồ không tốt vẫn không tốt, 
                dù có IF hay không.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"IF phù hợp cho tất cả mọi người"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> IF không phù hợp cho nhiều người, đặc biệt phụ nữ mang thai, 
                trẻ em, người có bệnh lý đặc biệt.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Các cách quản lý cân nặng khác
            </p>
          </Card>
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Hiểu về calorie deficit
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Intermittent fasting không phù hợp cho tất cả mọi người. 
          <strong>KHÔNG nên thử nếu:</strong> Bạn đang mang thai, cho con bú, dưới 18 tuổi, có tiền sử rối loạn 
          ăn uống, đái tháo đường (đặc biệt dùng insulin), hoặc có bệnh lý đặc biệt. Luôn tham khảo bác sĩ trước 
          khi thử bất kỳ phương pháp ăn uống mới nào.
        </p>
      </Callout>
    </main>
  );
}

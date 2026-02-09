import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Plane, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng khi Đi du lịch",
  description:
    "Practical tips về dinh dưỡng khi đi du lịch. Cách ăn uống lành mạnh khi đi máy bay, ở khách sạn, và khám phá ẩm thực địa phương.",
  keywords: [
    "dinh dưỡng du lịch",
    "travel nutrition",
    "ăn uống khi đi du lịch",
    "healthy travel",
  ],
};

export default function NutritionTravelPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Dinh dưỡng khi Đi du lịch" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Plane className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng khi Đi du lịch</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đi du lịch không có nghĩa là bạn phải từ bỏ thói quen ăn uống lành mạnh. 
          Với một vài tips đơn giản, bạn vẫn có thể ăn uống tốt và tận hưởng ẩm thực địa phương.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chuẩn bị snack lành mạnh</strong> khi đi máy bay, tàu
          </li>
          <li>
            <strong>Uống đủ nước</strong> - đặc biệt khi đi máy bay
          </li>
          <li>
            <strong>Linh hoạt</strong> - thử ẩm thực địa phương nhưng vẫn chú ý đến sức khỏe
          </li>
          <li>
            <strong>Chọn nhà hàng thông minh</strong> - tìm món lành mạnh trong menu
          </li>
          <li>
            <strong>Không cần hoàn hảo</strong> - một vài bữa "không hoàn hảo" không sao
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Dinh dưỡng khi Đi máy bay</h2>
        <Card>
          <h3 className="heading-4 mb-3">Tips cho Chuyến bay</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Mang snack lành mạnh</p>
                <p className="text-sm text-gray-700">
                  Trái cây, quả hạch, bánh mì nguyên cám. Tránh đồ ăn sẵn ở sân bay (thường đắt và không tốt).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Uống đủ nước</p>
                <p className="text-sm text-gray-700">
                  Không khí trong máy bay khô, dễ mất nước. Uống nước thay vì cà phê, rượu.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">Chọn bữa ăn trên máy bay thông minh</p>
                <p className="text-sm text-gray-700">
                  Nếu có bữa ăn, chọn món có rau củ, protein nạc. Tránh đồ chiên, nhiều muối.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ăn uống ở Điểm đến</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Tips khi Ăn ở Nhà hàng</h3>
            <TipCard
              tips={[
                { type: 'tip', text: 'Đọc menu trước: Tìm món có rau củ, protein nạc, không chiên' },
                { type: 'tip', text: 'Yêu cầu điều chỉnh: Có thể yêu cầu rau thay khoai tây chiên, nước sốt riêng' },
                { type: 'tip', text: 'Chia đôi khẩu phần: khẩu phần nhà hàng thường lớn, có thể chia đôi hoặc mang về' },
                { type: 'check', text: 'Chọn món nướng, hấp thay vì chiên' },
                { type: 'check', text: 'Bắt đầu với salad hoặc soup để no hơn' },
                { type: 'warning', text: 'Chú ý đồ uống: Nước ngọt, rượu có thể thêm nhiều calo' },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Thử ẩm thực Địa phương một cách Lành mạnh</h3>
            <p className="text-body-sm mb-3">
              Thử ẩm thực địa phương là một phần của trải nghiệm du lịch, nhưng bạn vẫn có thể chọn lựa thông minh:
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Chọn món:</strong> Tìm món có rau củ, protein nạc, không quá nhiều dầu mỡ
              </p>
              <p>
                <strong>khẩu phần:</strong> Chia sẻ món với người đi cùng để thử nhiều món mà không ăn quá nhiều
              </p>
              <p>
                <strong>Cân bằng:</strong> Một bữa "đặc biệt" không sao, nhưng cố gắng ăn lành mạnh ở các bữa khác
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <TipCard
          tips={[
            { type: 'tip', text: 'Nghiên cứu trước: Tìm nhà hàng lành mạnh ở điểm đến trước khi đi' },
            { type: 'tip', text: 'Mang snack: Trái cây, quả hạch để tránh đói và chọn đồ không tốt' },
            { type: 'tip', text: 'Uống nước: đặc biệt quan trọng khi đi du lịch, dễ quên uống nước' },
            { type: 'check', text: 'Bữa sáng tại khách sạn: Chọn trứng, yến mạch, trái cây thay vì bánh ngọt' },
            { type: 'check', text: 'Đi bộ khám phá: Vừa tập thể dục, vừa tìm nhà hàng địa phương tốt' },
            { type: 'warning', text: 'Chú ý an toàn thực phẩm: Ở một số nơi, tránh nước máy, rau sống, đồ ăn đường phố không rõ nguồn gốc' },
            { type: 'info', text: 'Linh hoạt: Không cần hoàn hảo, một vài bữa "đặc biệt" là bình thường khi du lịch' },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <ExampleBox variant="info" title="Tình huống: Du lịch 3 ngày">
          <p className="mb-2">
            <strong>Ngày 1 (Đi máy bay):</strong> Mang snack (trái cây, quả hạch), uống nhiều nước, 
            chọn bữa ăn có rau trên máy bay.
          </p>
          <p className="mb-2">
            <strong>Ngày 2 (Khám phá):</strong> Bữa sáng tại khách sạn (trứng, trái cây), 
            bữa trưa tại nhà hàng địa phương (chọn món nướng, có rau), bữa tối thử đặc sản (chia sẻ với bạn).
          </p>
          <p>
            <strong>Ngày 3 (Về):</strong> Bữa sáng lành mạnh, bữa trưa nhẹ trước khi về, 
            mang snack cho chuyến bay về.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/eating-out-healthy">
            <h3 className="heading-5 mb-2">Ăn uống Lành mạnh khi Đi ăn Ngoài</h3>
            <p className="text-sm text-gray-600">
              Tips chọn món lành mạnh ở nhà hàng
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người bận rộn</h3>
            <p className="text-sm text-gray-600">
              Tips dinh dưỡng khi không có nhiều thời gian
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Khi đi du lịch, đặc biệt đến các nước khác, 
          hãy chú ý đến an toàn thực phẩm. Tránh nước máy, rau sống, và đồ ăn đường phố không rõ nguồn gốc 
          ở một số nơi. Nếu bạn có bệnh lý đặc biệt hoặc dị ứng thực phẩm, hãy chuẩn bị kỹ trước khi đi.
        </p>
      </Callout>
    </main>
  );
}

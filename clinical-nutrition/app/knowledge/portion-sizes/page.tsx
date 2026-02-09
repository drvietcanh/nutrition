import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { PortionSizeGuide } from "../../components/PortionSizeGuide";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Ruler, Hand, Apple, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Hiểu về Portion sizes (khẩu phần)",
  description:
    "Hướng dẫn cách ước lượng khẩu phần đúng với visual guide và comparisons. sử dụng bàn tay và các công cụ đơn giản để đo khẩu phần.",
  keywords: [
    "portion sizes",
    "khẩu phần",
    "serving size",
    "đo khẩu phần",
    "dinh dưỡng",
  ],
};

export default function PortionSizesPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Hiểu về Portion sizes" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Hand className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Hiểu về Portion sizes (khẩu phần)</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          khẩu phần (portion size) là lượng thực phẩm bạn ăn trong một lần. Hiểu về khẩu phần giúp 
          bạn kiểm soát lượng calo và dinh dưỡng, đặc biệt quan trọng nếu bạn đang quản lý cân nặng 
          hoặc có bệnh lý cần kiểm soát lượng ăn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>khẩu phần</strong> = Lượng thực phẩm bạn ăn trong một lần
          </li>
          <li>
            <strong>Serving size</strong> = Lượng thực phẩm được khuyến nghị (trên nhãn)
          </li>
          <li>
            sử dụng <strong>bàn tay</strong> để ước lượng khẩu phần (đơn giản, luôn có sẵn)
          </li>
          <li>
            khẩu phần thực tế thường <strong>lớn hơn</strong> serving size khuyến nghị
          </li>
          <li>
            Quan trọng là <strong>ước lượng đúng</strong>, không cần chính xác 100%
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">khẩu phần vs Serving size</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Sự khác biệt</h3>
            <div className="space-y-3 text-body-sm">
              <p>
                <strong>Serving size (khẩu phần Khuyến nghị):</strong> Lượng thực phẩm được khuyến nghị 
                trên nhãn thực phẩm hoặc hướng dẫn dinh dưỡng. Đây là lượng tiêu chuẩn để tính toán dinh dưỡng.
              </p>
              <p>
                <strong>Portion size (khẩu phần thực tế):</strong> Lượng thực phẩm bạn thực sự ăn. 
                Có thể lớn hơn hoặc nhỏ hơn serving size.
              </p>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ">
            <p className="mb-2">
              <strong>Nhãn ghi:</strong> Serving size = 1 bát cơm (200g) = 200 calo
            </p>
            <p>
              <strong>Bạn ăn:</strong> 1.5 bát cơm = 300 calo (khẩu phần thực tế lớn hơn serving size)
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách ước lượng khẩu phần: sử dụng Bàn tay</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Hướng dẫn sử dụng Bàn tay</h3>
            <PortionSizeGuide
              items={[
                { food: "Protein (thịt, cá, đậu)", portion: "100g", visual: "Bằng lòng bàn tay (không tính ngón tay)", calories: "~150-250 calo" },
                { food: "Carbohydrate (cơm, bánh mì)", portion: "80g (nấu chín)", visual: "Bằng nắm tay", calories: "~200 calo" },
                { food: "Chất béo (dầu, bơ)", portion: "1 muỗng canh", visual: "Bằng ngón tay cái", calories: "~120 calo" },
                { food: "Rau củ", portion: "100-150g", visual: "Bằng 2 bàn tay", calories: "~20-50 calo" },
                { food: "Trái cây", portion: "1 quả nhỏ", visual: "Bằng nắm tay", calories: "~60-80 calo" },
                { food: "Quả hạch", portion: "30g", visual: "Bằng lòng bàn tay nhỏ", calories: "~180 calo" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Mẹo">
            <p>
              Bàn tay của bạn tỷ lệ với cơ thể bạn. Người lớn hơn có bàn tay lớn hơn, 
              nên khẩu phần cũng tự động lớn hơn. Đây là cách tự nhiên để điều chỉnh khẩu phần!
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ khẩu phần Cụ thể</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Protein</h3>
            <PortionSizeGuide
              items={[
                { food: "Thịt gà nạc", portion: "100g", visual: "Bằng lòng bàn tay, dày ~1cm", calories: "165 calo" },
                { food: "Cá hồi", portion: "100g", visual: "Bằng lòng bàn tay", calories: "200 calo" },
                { food: "Trứng", portion: "2 quả", visual: "2 quả trứng gà", calories: "140 calo" },
                { food: "Đậu phụ", portion: "150g", visual: "Bằng lòng bàn tay", calories: "120 calo" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Carbohydrate</h3>
            <PortionSizeGuide
              items={[
                { food: "Cơm trắng (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "200 calo" },
                { food: "Bánh mì", portion: "1 lát", visual: "Bằng lòng bàn tay", calories: "80 calo" },
                { food: "Khoai tây", portion: "1 củ vừa", visual: "Bằng nắm tay", calories: "150 calo" },
                { food: "Mì ống (nấu chín)", portion: "1 bát", visual: "Bằng nắm tay", calories: "200 calo" },
                { food: "Bún (Việt Nam)", portion: "1 tô", visual: "Bằng nắm tay", calories: "~110 calo" },
                { food: "Phở (bánh phở)", portion: "1 tô", visual: "Bằng nắm tay", calories: "~100 calo" },
                { food: "Bánh cuốn (Việt Nam)", portion: "1 đĩa", visual: "Bằng nắm tay", calories: "~120 calo" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Rau củ và Trái cây</h3>
            <PortionSizeGuide
              items={[
                { food: "Rau xanh (rau cải, rau muống)", portion: "100g", visual: "Bằng 2 bàn tay", calories: "20-30 calo" },
                { food: "Cà rốt, cà chua", portion: "100g", visual: "Bằng 1-2 bàn tay", calories: "30-40 calo" },
                { food: "Táo", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "80 calo" },
                { food: "Chuối", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "100 calo" },
                { food: "Ổi (Việt Nam)", portion: "1 quả vừa", visual: "Bằng nắm tay", calories: "~60 calo" },
                { food: "Xoài (Việt Nam)", portion: "1 quả nhỏ", visual: "Bằng nắm tay", calories: "~100 calo" },
                { food: "Thanh long (Việt Nam)", portion: "1 quả nhỏ", visual: "Bằng nắm tay", calories: "~60 calo" },
              ]}
            />
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: khẩu phần Đúng vs Quá nhiều</h2>
        <ComparisonCard
          title="Ví dụ So sánh"
          items={[
            {
              label: "Bữa trưa",
              good: "1 lòng bàn tay thịt gà + 1 nắm tay cơm + 2 bàn tay rau = ~450 calo",
              bad: "2 lòng bàn tay thịt gà + 2 nắm tay cơm + ít rau = ~800 calo",
              note: "khẩu phần quá nhiều có thể gấp đôi calo!"
            },
            {
              label: "Bữa tối",
              good: "1 lòng bàn tay cá + 1 nắm tay khoai tây + 2 bàn tay rau = ~400 calo",
              bad: "2 lòng bàn tay cá + 2 nắm tay khoai tây + ít rau = ~750 calo",
              note: "Chú ý đến tổng khẩu phần, không chỉ một loại thực phẩm"
            },
            {
              label: "Bữa ăn Việt Nam (Phở)",
              good: "1 tô phở với ít bánh phở + nhiều rau sống + thịt nạc = ~400 calo",
              bad: "1 tô phở lớn với nhiều bánh phở + ít rau + nhiều thịt mỡ = ~700 calo",
              note: "Có thể điều chỉnh khẩu phần phở bằng cách yêu cầu ít bánh phở, nhiều rau"
            },
            {
              label: "Bữa ăn Việt Nam (Bún)",
              good: "1 tô bún với ít bún + nhiều rau + tôm/cá nạc = ~350 calo",
              bad: "1 tô bún lớn với nhiều bún + ít rau + nhiều dầu mỡ = ~600 calo",
              note: "Bún có thể là bữa ăn lành mạnh nếu có đủ rau và protein nạc"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <Ruler className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>sử dụng bàn tay:</strong> Cách đơn giản nhất, luôn có sẵn, không cần dụng cụ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Ruler className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ước lượng, không cần chính xác:</strong> Quan trọng là có ý thức về khẩu phần, 
                không cần đo chính xác đến từng gram.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Ruler className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý khi ăn ngoài:</strong> khẩu phần ở nhà hàng thường lớn hơn khẩu phần ở nhà. 
                Có thể chia đôi hoặc mang về.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <Ruler className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đọc nhãn:</strong> Kiểm tra serving size trên nhãn để biết bạn ăn bao nhiêu.
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
              <p className="text-sm font-semibold mb-1">"Phải đo chính xác bằng cân"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ước lượng bằng bàn tay đã đủ tốt. Quan trọng là có ý thức 
                về khẩu phần, không cần chính xác 100%.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"khẩu phần nhỏ hơn luôn tốt hơn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> khẩu phần phù hợp với nhu cầu mới tốt. Quá nhỏ có thể thiếu 
                dinh dưỡng, quá lớn có thể thừa calo.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Tất cả thực phẩm có cùng khẩu phần"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> khẩu phần khác nhau tùy loại thực phẩm. Rau củ có thể ăn nhiều, 
                nhưng chất béo nên ăn ít.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/healthy-plate">
            <h3 className="heading-5 mb-2">Cân bằng Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách chia đĩa ăn với khẩu phần phù hợp
            </p>
          </Card>
          <Card href="/knowledge/daily-practices/reading-food-labels">
            <h3 className="heading-5 mb-2">Đọc nhãn Thực phẩm</h3>
            <p className="text-sm text-gray-600">
              Hiểu serving size trên nhãn thực phẩm
            </p>
          </Card>
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Mối liên hệ giữa khẩu phần và calo
            </p>
          </Card>
          <Card href="/knowledge/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách sử dụng khẩu phần để quản lý cân nặng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. khẩu phần khuyến nghị là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Nhu cầu của mỗi người khác nhau tùy theo tuổi, giới tính, 
          hoạt động, và tình trạng sức khỏe. Nếu bạn có bệnh lý đặc biệt hoặc cần kiểm soát khẩu phần 
          chặt chẽ, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { UtensilsCrossed, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cách Nấu Ăn lành mạnh Kiểu Việt Nam",
  description:
    "Hướng dẫn các phương pháp nấu ăn truyền thống Việt Nam lành mạnh - luộc, hấp, kho, nướng, xào. Cách giữ dinh dưỡng và giảm dầu mỡ, muối.",
  keywords: [
    "nấu ăn Việt Nam",
    "phương pháp nấu ăn",
    "luộc",
    "hấp",
    "kho",
    "nướng",
    "xào",
    "lành mạnh",
  ],
};

export default function VietnameseCookingMethodsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực hành Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Cách Nấu Ăn lành mạnh Kiểu Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Cách Nấu Ăn lành mạnh Kiểu Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Phương pháp nấu ăn truyền thống Việt Nam có nhiều cách lành mạnh, giúp giữ dinh dưỡng và tạo hương vị đậm đà. 
          Hiểu về các phương pháp này giúp bạn nấu ăn ngon miệng mà vẫn tốt cho sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Luộc, hấp:</strong> Giữ nhiều dinh dưỡng nhất, ít dầu mỡ
          </li>
          <li>
            <strong>Kho:</strong> Tạo hương vị đậm đà, nhưng cần chú ý muối
          </li>
          <li>
            <strong>Nướng:</strong> Tốt nếu không cháy, tránh cháy để tránh chất độc hại
          </li>
          <li>
            <strong>Xào:</strong> Nhanh, nhưng cần ít dầu
          </li>
          <li>
            <strong>Chiên:</strong> Nên hạn chế vì nhiều dầu mỡ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Phương pháp Nấu Ăn lành mạnh</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">1. Luộc</h3>
            <p className="text-body-sm text-green-900 mb-2">
              Luộc là phương pháp nấu ăn lành mạnh nhất, giữ nhiều dinh dưỡng và không cần dầu mỡ.
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Cách luộc:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Luộc rau: Nước sôi, cho rau vào, luộc nhanh (2-3 phút) để giữ màu xanh</li>
                <li>• Luộc thịt: Nước sôi, cho thịt vào, luộc chín, vớt bọt</li>
                <li>• Luộc cá: Nước sôi, cho cá vào, luộc chín, thêm gia vị</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Rau muống luộc:</strong> Nước sôi, cho rau vào, luộc 2-3 phút, vớt ra. 
                Có thể chấm nước mắm pha loãng. Giữ được vitamin C và chất xơ.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">2. Hấp</h3>
            <p className="text-body-sm text-blue-900 mb-2">
              Hấp giữ nhiều dinh dưỡng, không cần dầu mỡ, và tạo hương vị tự nhiên.
            </p>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Cách hấp:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Hấp cá: Cá + gừng, sả, hấp 10-15 phút</li>
                <li>• Hấp thịt: Thịt + gia vị, hấp 15-20 phút</li>
                <li>• Hấp rau: Rau + ít nước, hấp 5-10 phút</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Cá hấp gừng:</strong> Cá + gừng, sả, hấp 10-15 phút. 
                Giữ được protein, omega-3, và hương vị tự nhiên. Không cần dầu mỡ.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">3. Kho</h3>
            <p className="text-body-sm text-purple-900 mb-2">
              Kho tạo hương vị đậm đà, nhưng cần chú ý muối và đường.
            </p>
            <div className="bg-white rounded-lg p-3 border border-purple-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Cách kho lành mạnh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Giảm nước mắm, tăng gia vị tự nhiên (gừng, nghệ, sả)</li>
                <li>• Giảm đường, tăng vị ngọt tự nhiên (cà chua, dứa)</li>
                <li>• Kho chín mềm, không cần nhiều dầu</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Cá kho tộ:</strong> Cá + nước mắm (ít), đường (ít), gừng, nghệ, kho chín mềm. 
                Tạo hương vị đậm đà nhưng cần chú ý muối. Có thể thêm cà chua để giảm muối.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-orange-200 bg-orange-50">
            <h3 className="heading-4 mb-3 text-orange-900">4. Nướng</h3>
            <p className="text-body-sm text-orange-900 mb-2">
              Nướng tốt nếu không cháy, nhưng cần tránh cháy để tránh chất độc hại.
            </p>
            <div className="bg-white rounded-lg p-3 border border-orange-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Cách nướng lành mạnh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Nướng ở nhiệt độ vừa, không quá cao</li>
                <li>• Tránh cháy, cắt bỏ phần cháy nếu có</li>
                <li>• Ướp gia vị trước để giảm thời gian nướng</li>
              </ul>
            </div>
            <ExampleBox variant="warning" title="Lưu ý">
              <p className="text-sm">
                <strong>Tránh cháy:</strong> Phần cháy có thể chứa chất độc hại. 
                Nướng ở nhiệt độ vừa, lật thường xuyên, cắt bỏ phần cháy.
              </p>
            </ExampleBox>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 mb-3 text-yellow-900">5. Xào</h3>
            <p className="text-body-sm text-yellow-900 mb-2">
              Xào nhanh, nhưng cần ít dầu để lành mạnh.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Cách xào lành mạnh:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Dùng ít dầu (1-2 muỗng canh)</li>
                <li>• Xào nhanh, lửa lớn, để giữ độ giòn</li>
                <li>• Thêm nước nếu cần, tránh thêm dầu</li>
              </ul>
            </div>
            <ExampleBox variant="tip" title="Ví dụ">
              <p className="text-sm">
                <strong>Rau cải xào:</strong> Dùng ít dầu (1 muỗng canh), xào nhanh, lửa lớn. 
                Thêm nước nếu cần. Giữ được độ giòn và dinh dưỡng.
              </p>
            </ExampleBox>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Phương pháp tốt vs Không tốt</h2>
        <ComparisonCard
          title="Phương pháp Nấu Ăn"
          goodTitle="Phương pháp tốt"
          goodItems={[
            "Luộc: Giữ dinh dưỡng, không dầu mỡ",
            "Hấp: Giữ dinh dưỡng, hương vị tự nhiên",
            "Kho (ít muối): Hương vị đậm đà, ít dầu",
            "Nướng (không cháy): Ít dầu, hương vị thơm",
            "Xào (ít dầu): Nhanh, giữ độ giòn",
          ]}
          badTitle="Phương pháp Nên hạn chế"
          badItems={[
            "Chiên ngập dầu: Nhiều dầu mỡ, mất dinh dưỡng",
            "Kho (nhiều muối): Quá nhiều natri",
            "Nướng (cháy): Có thể chứa chất độc hại",
            "Xào (nhiều dầu): Nhiều chất béo không cần thiết",
            "Rang (nhiều dầu): Nhiều dầu mỡ",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips cho Từng Phương pháp</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Luộc Rau</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Nước sôi mới cho rau vào</li>
              <li>✓ Luộc nhanh (2-3 phút) để giữ màu xanh</li>
              <li>✓ Vớt ra ngay, không ngâm nước</li>
              <li>✓ Có thể dùng nước luộc để nấu canh</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Hấp Cá</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Thêm gừng, sả để khử mùi tanh</li>
              <li>✓ Hấp 10-15 phút, không quá lâu</li>
              <li>✓ Kiểm tra chín bằng cách dùng đũa chọc</li>
              <li>✓ Có thể thêm nước mắm pha loãng sau khi hấp</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Kho Thịt/Cá</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Giảm nước mắm, tăng gia vị tự nhiên</li>
              <li>✓ Thêm cà chua, dứa để giảm muối</li>
              <li>✓ Kho chín mềm, không cần nhiều dầu</li>
              <li>✓ Có thể kho với nước dừa thay vì nước</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Xào Rau</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Dùng ít dầu (1-2 muỗng canh)</li>
              <li>✓ Xào nhanh, lửa lớn</li>
              <li>✓ Thêm nước nếu cần, tránh thêm dầu</li>
              <li>✓ Có thể xào với tỏi để tăng hương vị</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Cách Nấu</h2>
        <ExampleBox variant="info" title="Canh Rau Muống">
          <p className="text-sm mb-2">
            <strong>Cách nấu:</strong> Nước sôi, cho rau muống vào, nấu 2-3 phút. 
            Thêm nước mắm (ít), tỏi phi. Không cần dầu mỡ nhiều.
          </p>
          <p className="text-sm">
            <strong>Lợi ích:</strong> Giữ được vitamin C, chất xơ. Ít dầu mỡ, lành mạnh.
          </p>
        </ExampleBox>

        <ExampleBox variant="info" title="Cá Kho Tộ">
          <p className="text-sm mb-2">
            <strong>Cách nấu:</strong> Cá + nước mắm (ít), đường (ít), gừng, nghệ, kho chín mềm. 
            Thêm cà chua để giảm muối.
          </p>
          <p className="text-sm">
            <strong>Lợi ích:</strong> Hương vị đậm đà, giàu protein. Chú ý muối.
          </p>
        </ExampleBox>

        <ExampleBox variant="info" title="Rau Cải Luộc">
          <p className="text-sm mb-2">
            <strong>Cách nấu:</strong> Nước sôi, cho rau cải vào, luộc 2-3 phút, vớt ra. 
            Chấm nước mắm pha loãng.
          </p>
          <p className="text-sm">
            <strong>Lợi ích:</strong> Giữ được vitamin K, folate, chất xơ. Không cần dầu mỡ.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Sodium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm muối trong món ăn Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/dietary-fats">
            <h3 className="heading-5 mb-2">Chất béo trong Chế độ ăn</h3>
            <p className="text-sm text-gray-600">
              Hiểu về chất béo và cách sử dụng dầu mỡ
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Phương pháp nấu ăn có thể ảnh hưởng đến 
          dinh dưỡng và sức khỏe. Hãy chọn phương pháp phù hợp với tình trạng sức khỏe của bạn 
          và tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { MapPin, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng Theo Vùng miền Việt Nam",
  description:
    "Đặc điểm dinh dưỡng theo vùng (Bắc, Trung, Nam), ưu và nhược điểm. Món ăn đặc trưng từng vùng. Cách cân bằng dinh dưỡng theo vùng.",
  keywords: [
    "vùng miền",
    "miền bắc",
    "miền trung",
    "miền nam",
    "đặc trưng",
    "regional nutrition",
  ],
};

export default function RegionalNutritionVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng Theo Vùng miền Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <MapPin className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng Theo Vùng miền Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Mỗi vùng miền Việt Nam có đặc điểm dinh dưỡng khác nhau do khí hậu, địa lý, và văn hóa. 
          Tìm hiểu về ưu và nhược điểm của từng vùng, và cách cân bằng dinh dưỡng.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Miền Bắc:</strong> Nhiều rau củ, ít cay, có thể nhiều muối (nước mắm)
          </li>
          <li>
            <strong>Miền Trung:</strong> Nhiều cay, nhiều mắm, có thể nhiều natri
          </li>
          <li>
            <strong>Miền Nam:</strong> Nhiều ngọt, nhiều dầu mỡ, có thể nhiều đường
          </li>
          <li>
            <strong>Cân bằng:</strong> Mỗi vùng có ưu và nhược điểm, cần điều chỉnh để cân bằng
          </li>
          <li>
            <strong>Đa dạng:</strong> Kết hợp món ăn từ nhiều vùng để có đa dạng dinh dưỡng
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Miền Bắc: Nhiều Rau Củ, Ít Cay</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Đặc điểm Dinh dưỡng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">✓ Ưu điểm:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li>• Nhiều rau củ (rau muống, rau cải, rau dền)</li>
                  <li>• Ít cay - phù hợp người không ăn cay</li>
                  <li>• Nhiều món luộc, hấp - lành mạnh</li>
                  <li>• Cân bằng dinh dưỡng (cơm + canh + món mặn + rau)</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">✗ Nhược điểm:</p>
                <ul className="space-y-1 text-sm text-red-900">
                  <li>• Có thể nhiều muối (nước mắm, mắm tôm)</li>
                  <li>• Một số món có nhiều mỡ (thịt mỡ, giò mỡ)</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Món Ăn Đặc trưng</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Phở bò:</strong> Bánh phở + thịt bò + rau thơm - cân bằng dinh dưỡng. 
                Lưu ý: nước dùng có thể nhiều natri.
              </p>
              <p>
                <strong>Bún chả:</strong> Bún + thịt nướng + rau sống - cân bằng. 
                Lưu ý: thịt nướng có thể nhiều chất béo.
              </p>
              <p>
                <strong>Bánh cuốn:</strong> Bánh cuốn + thịt + nước mắm - nhẹ, dễ tiêu.
              </p>
              <p>
                <strong>Canh chua:</strong> Cá + rau củ - giàu protein, vitamin. 
                Lưu ý: có thể nhiều đường.
              </p>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Cách cân bằng">
            <p className="mb-2">
              <strong>Giảm natri:</strong> Pha loãng nước mắm, giảm mắm tôm. 
              Tăng gia vị tự nhiên (tỏi, gừng).
            </p>
            <p>
              <strong>Tăng rau củ:</strong> Miền Bắc đã có nhiều rau củ, tiếp tục duy trì. 
              Rau củ là điểm mạnh của miền Bắc.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Miền Trung: Nhiều Cay, Nhiều Mắm</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Đặc điểm Dinh dưỡng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">✓ Ưu điểm:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li>• Nhiều hải sản tươi (cá biển, tôm, cua)</li>
                  <li>• Nhiều món nướng, hấp - lành mạnh</li>
                  <li>• Đa dạng món ăn</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">✗ Nhược điểm:</p>
                <ul className="space-y-1 text-red-900">
                  <li>• Rất nhiều cay - không phù hợp người không ăn cay</li>
                  <li>• Nhiều mắm (mắm tôm, mắm ruốc) - rất nhiều natri</li>
                  <li>• Một số món có nhiều dầu mỡ</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Món Ăn Đặc trưng</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Bún bò Huế:</strong> Bún + thịt bò + rau sống - cân bằng. 
                Lưu ý: rất cay, nước dùng có thể nhiều natri.
              </p>
              <p>
                <strong>Cơm hến:</strong> Cơm + hến + rau - giàu protein, vitamin. 
                Lưu ý: có thể nhiều mắm tôm (nhiều natri).
              </p>
              <p>
                <strong>Bánh bèo, bánh nậm:</strong> Bánh + tôm, thịt - nhẹ, dễ tiêu.
              </p>
            </div>
          </Card>

          <ExampleBox variant="warning" title="Cách cân bằng">
            <p className="mb-2">
              <strong>Giảm cay:</strong> Yêu cầu ít cay nếu không ăn được cay. 
              Cay quá có thể gây kích ứng dạ dày.
            </p>
            <p className="mb-2">
              <strong>Giảm mắm:</strong> Giảm mắm tôm, mắm ruốc - rất nhiều natri. 
              Dùng ít hoặc không dùng.
            </p>
            <p>
              <strong>Tăng rau củ:</strong> Tăng rau củ để cân bằng với cay và mắm.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Miền Nam: Nhiều Ngọt, Nhiều Dầu Mỡ</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Đặc điểm Dinh dưỡng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-sm font-semibold text-green-900 mb-2">✓ Ưu điểm:</p>
                <ul className="space-y-1 text-sm text-green-900">
                  <li>• Nhiều trái cây nhiệt đới (xoài, ổi, thanh long)</li>
                  <li>• Nhiều hải sản tươi</li>
                  <li>• Đa dạng món ăn</li>
                </ul>
              </div>
              <div className="bg-red-50 rounded-lg p-3 border border-red-200">
                <p className="text-sm font-semibold text-red-900 mb-2">✗ Nhược điểm:</p>
                <ul className="space-y-1 text-red-900">
                  <li>• Nhiều ngọt (đường trong món ăn) - không tốt cho người đái tháo đường</li>
                  <li>• Nhiều dầu mỡ (món chiên, xào) - nhiều calo, chất béo</li>
                  <li>• Một số món có nhiều nước cốt dừa - nhiều chất béo bão hòa</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Món Ăn Đặc trưng</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Cơm tấm:</strong> Cơm + sườn + trứng + đồ chua - cân bằng. 
                Lưu ý: có thể nhiều đường, dầu mỡ.
              </p>
              <p>
                <strong>Bánh mì:</strong> Bánh mì + thịt + rau củ - cân bằng. 
                Lưu ý: có thể nhiều pate, bơ (chất béo).
              </p>
              <p>
                <strong>Bún riêu:</strong> Bún + cua + rau - giàu protein, vitamin. 
                Lưu ý: có thể nhiều đường.
              </p>
              <p>
                <strong>Canh chua cá:</strong> Cá + rau củ - giàu dinh dưỡng. 
                Lưu ý: có thể nhiều đường.
              </p>
            </div>
          </Card>

          <ExampleBox variant="warning" title="Cách cân bằng">
            <p className="mb-2">
              <strong>Giảm đường:</strong> Yêu cầu ít đường trong món ăn. 
              Đường quá nhiều không tốt cho sức khỏe.
            </p>
            <p className="mb-2">
              <strong>Giảm dầu mỡ:</strong> Chọn món luộc, hấp thay vì chiên, xào. 
              Giảm calo, chất béo.
            </p>
            <p>
              <strong>Tăng rau củ:</strong> Tăng rau củ để cân bằng với ngọt và dầu mỡ.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Ưu và Nhược điểm Từng Vùng</h2>
        <ComparisonCard
          title="Tổng hợp"
          items={[
            {
              label: "Miền Bắc",
              good: "Nhiều rau củ, ít cay, nhiều món luộc hấp - lành mạnh",
              bad: "Có thể nhiều muối (nước mắm, mắm tôm)",
              note: "Điểm mạnh: Rau củ. Điểm yếu: Natri"
            },
            {
              label: "Miền Trung",
              good: "Nhiều hải sản tươi, nhiều món nướng hấp",
              bad: "Rất nhiều cay, nhiều mắm (rất nhiều natri)",
              note: "Điểm mạnh: Hải sản. Điểm yếu: Cay và natri"
            },
            {
              label: "Miền Nam",
              good: "Nhiều trái cây, nhiều hải sản, đa dạng",
              bad: "Nhiều đường, nhiều dầu mỡ, nhiều nước cốt dừa",
              note: "Điểm mạnh: Trái cây. Điểm yếu: Đường và chất béo"
            },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách cân bằng Dinh dưỡng Theo Vùng</h2>
        <Card>
          <h3 className="heading-4 mb-3">Tips Điều chỉnh</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">Miền Bắc:</p>
              <ul className="space-y-1 text-sm text-blue-900">
                <li>• Giảm nước mắm, mắm tôm - pha loãng, dùng ít</li>
                <li>• Duy trì nhiều rau củ - điểm mạnh</li>
                <li>• Chọn món luộc, hấp - lành mạnh</li>
              </ul>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">Miền Trung:</p>
              <ul className="space-y-1 text-sm text-purple-900">
                <li>• Giảm cay nếu không ăn được cay</li>
                <li>• Tránh hoặc giảm mắm tôm, mắm ruốc - rất nhiều natri</li>
                <li>• Tăng rau củ để cân bằng</li>
              </ul>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">Miền Nam:</p>
              <ul className="space-y-1 text-sm text-amber-900">
                <li>• Giảm đường trong món ăn</li>
                <li>• Chọn món luộc, hấp thay vì chiên, xào</li>
                <li>• Giảm nước cốt dừa - nhiều chất béo bão hòa</li>
                <li>• Tăng rau củ, trái cây tươi</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Kết hợp Món Ăn Từ Nhiều Vùng</h2>
        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Bữa ăn Đa dạng</h3>
          <div className="space-y-2 text-sm text-gray-700">
            <p>
              <strong>Bữa trưa:</strong> Cơm (chung) + <strong>cá kho</strong> (miền Bắc - ít cay) + 
              <strong> rau muống luộc</strong> (miền Bắc - nhiều rau) + <strong>canh chua cá</strong> (miền Nam - đa dạng)
            </p>
            <p>
              Kết hợp món ăn từ nhiều vùng tạo bữa ăn đa dạng, cân bằng dinh dưỡng, 
              không quá cay, không quá ngọt, không quá mặn.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Hiểu đặc điểm vùng:</strong> Biết ưu và nhược điểm của vùng bạn sống để điều chỉnh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Điều chỉnh:</strong> Giảm điểm yếu (muối, đường, dầu mỡ), tăng điểm mạnh (rau củ, hải sản).
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp:</strong> Kết hợp món ăn từ nhiều vùng để có đa dạng dinh dưỡng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Yêu cầu điều chỉnh:</strong> Khi ăn ngoài, yêu cầu ít muối, ít đường, ít cay 
                nếu cần.
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
              <p className="text-sm font-semibold mb-1">"Món ăn vùng nào cũng giống nhau"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không phải! Mỗi vùng có đặc điểm riêng về vị (cay, ngọt, mặn), 
                cách nấu, và thành phần. Hiểu đặc điểm giúp điều chỉnh tốt hơn.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Phải ăn đúng món vùng mình sống"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không cần! Có thể kết hợp món ăn từ nhiều vùng để có đa dạng 
                dinh dưỡng. Quan trọng là cân bằng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không thể điều chỉnh món ăn vùng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể! Yêu cầu ít muối, ít đường, ít cay khi nấu hoặc ăn ngoài. 
                Điều chỉnh là hoàn toàn bình thường.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vietnamese-foods-nutrition">
            <h3 className="heading-5 mb-2">Thực phẩm Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Giá trị dinh dưỡng thực phẩm Việt Nam
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong món ăn vùng miền
            </p>
          </Card>
          <Card href="/knowledge/vietnamese-cooking-methods">
            <h3 className="heading-5 mb-2">Cách Nấu Ăn lành mạnh Kiểu Việt Nam</h3>
            <p className="text-sm text-gray-600">
              Phương pháp nấu ăn theo vùng miền
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Đặc điểm dinh dưỡng theo vùng miền là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Mỗi vùng có đa dạng món ăn, và mỗi người có sở thích khác nhau. 
          Nếu bạn có bệnh lý đặc biệt hoặc cần chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

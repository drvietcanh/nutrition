import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { UtensilsCrossed, CheckCircle2, XCircle, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Đường phố Việt Nam: Ăn uống lành mạnh",
  description:
    "Cách chọn lựa đồ ăn đường phố lành mạnh, tránh rủi ro. Hướng dẫn với phở, bánh mì, bún, chè. Tips an toàn và điều chỉnh.",
  keywords: [
    "đồ ăn đường phố",
    "street food",
    "phở",
    "bánh mì",
    "bún",
    "ăn ngoài",
    "vệ sinh",
  ],
};

export default function StreetFoodVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Thực phẩm Đường phố Việt Nam: Ăn uống lành mạnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Đường phố Việt Nam: Ăn uống lành mạnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đồ ăn đường phố Việt Nam rất ngon và tiện lợi, nhưng làm sao để chọn lựa lành mạnh? 
          Tìm hiểu cách chọn đồ ăn đường phố tốt cho sức khỏe và tránh rủi ro.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Lựa chọn tốt:</strong> Phở, bánh mì, bún, cháo - cân bằng dinh dưỡng, có rau củ
          </li>
          <li>
            <strong>Lựa chọn nên hạn chế:</strong> Đồ chiên, đồ ngọt, đồ nhiều dầu mỡ
          </li>
          <li>
            <strong>An toàn:</strong> Chọn quán sạch sẽ, thực phẩm tươi, nấu chín kỹ
          </li>
          <li>
            <strong>Điều chỉnh:</strong> Yêu cầu ít muối, ít đường, nhiều rau
          </li>
          <li>
            <strong>khẩu phần:</strong> Chú ý đến khẩu phần - đồ ăn đường phố thường lớn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Lựa chọn Tốt: Đồ ăn đường phố Lành mạnh</h2>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Phở</h3>
            <div className="space-y-2 text-sm text-green-900">
              <p>
                <strong>Thành phần:</strong> Bánh phở (carbohydrate) + thịt bò/gà (protein) + rau thơm (vitamin) + nước dùng
              </p>
              <p>
                <strong>Dinh dưỡng:</strong> Cân bằng carbohydrate, protein, rau củ. Một tô phở trung bình có khoảng 400-500 calo.
              </p>
              <p>
                <strong>Tips:</strong> Yêu cầu ít nước mắm (giảm natri), nhiều rau thơm. 
                Chọn phở bò nạc thay vì phở bò có mỡ.
              </p>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Bánh mì</h3>
            <div className="space-y-2 text-sm text-green-900">
              <p>
                <strong>Thành phần:</strong> Bánh mì (carbohydrate) + thịt/chả (protein) + rau củ (vitamin) + pate/bơ (chất béo)
              </p>
              <p>
                <strong>Dinh dưỡng:</strong> Cân bằng nếu chọn đúng. Một ổ bánh mì trung bình có khoảng 300-400 calo.
              </p>
              <p>
                <strong>Tips:</strong> Chọn bánh mì với nhiều rau củ (dưa chuột, cà rốt, rau thơm), 
                ít pate, ít bơ. Chọn thịt nạc thay vì thịt mỡ.
              </p>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Bún</h3>
            <div className="space-y-2 text-sm text-green-900">
              <p>
                <strong>Thành phần:</strong> Bún (carbohydrate) + thịt/cá (protein) + rau sống (vitamin) + nước dùng
              </p>
              <p>
                <strong>Dinh dưỡng:</strong> Cân bằng, tương tự phở. Một tô bún trung bình có khoảng 350-450 calo.
              </p>
              <p>
                <strong>Tips:</strong> Chọn bún với nhiều rau sống, ít nước mắm. 
                Chọn bún bò, bún chả thay vì bún có nhiều dầu mỡ.
              </p>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3">Cháo</h3>
            <div className="space-y-2 text-sm text-green-900">
              <p>
                <strong>Thành phần:</strong> Gạo nấu cháo (carbohydrate) + thịt/cá (protein) + rau củ (vitamin)
              </p>
              <p>
                <strong>Dinh dưỡng:</strong> Dễ tiêu, phù hợp người ốm, người già. Một tô cháo có khoảng 200-300 calo.
              </p>
              <p>
                <strong>Tips:</strong> Chọn cháo với nhiều rau củ, thịt nạc. Yêu cầu ít muối.
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lựa chọn Nên hạn chế</h2>
        <Card className="border-red-200 bg-red-50">
          <h3 className="heading-4 text-red-900 mb-3">Đồ ăn nên hạn chế</h3>
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold text-red-900 mb-1">Đồ chiên</p>
              <p className="text-sm text-red-900">
                Chả giò chiên, khoai tây chiên, gà rán - nhiều chất béo, calo cao, mất dinh dưỡng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-red-900 mb-1">Đồ ngọt</p>
              <p className="text-sm text-red-900">
                Chè, nước ngọt, bánh kẹo - nhiều đường, ít dinh dưỡng, calo cao.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold text-red-900 mb-1">Đồ nhiều dầu Mỡ</p>
              <p className="text-sm text-red-900">
                Món xào nhiều dầu, món có nhiều mỡ - nhiều chất béo không tốt.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Lựa chọn Tốt vs Nên hạn chế</h2>
        <ComparisonCard
          goodTitle="Lựa chọn Tốt"
          goodItems={[
            "Phở bò nạc + nhiều rau thơm + ít nước mắm = Cân bằng dinh dưỡng, ít natri",
            "Bánh mì với nhiều rau củ, ít pate, thịt nạc = Cân bằng, nhiều vitamin",
            "Bún bò + nhiều rau sống + ít nước mắm = Cân bằng, nhiều rau củ",
            "Cháo thịt + rau củ = Dễ tiêu, phù hợp nhiều người"
          ]}
          badTitle="Lựa chọn Nên hạn chế"
          badItems={[
            "Chả giò chiên + nước ngọt = Nhiều chất béo, đường, ít dinh dưỡng",
            "Bánh mì nhiều pate, bơ, thịt mỡ = Nhiều chất béo, calo cao",
            "Bún nhiều dầu mỡ, ít rau = Nhiều calo, ít vitamin",
            "Chè ngọt, nước ngọt = Nhiều đường, ít dinh dưỡng"
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips an toàn</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn quán sạch sẽ:</strong> Quán có bàn ghế sạch, người bán sạch sẽ, 
                thực phẩm được bảo quản tốt.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thực phẩm tươi:</strong> Chọn quán có thực phẩm tươi, không có mùi lạ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nấu chín kỹ:</strong> đảm bảo thịt, cá được nấu chín kỹ. 
                Tránh thịt cá sống hoặc tái.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Rau sống:</strong> Rửa sạch rau sống trước khi ăn. 
                Nếu không chắc, chọn rau đã nấu chín.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Nước đá:</strong> Chọn nước đá sạch, đóng gói. 
                Tránh nước đá không rõ nguồn gốc.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách điều chỉnh Đồ ăn đường phố</h2>
        <Card>
          <h3 className="heading-4 mb-3">Yêu cầu Điều chỉnh</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">Giảm muối:</p>
              <p className="text-xs text-blue-800">
                "Cho ít nước mắm", "cho ít muối" - giúp giảm natri cho người tăng huyết áp
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-green-900 mb-1">Tăng rau:</p>
              <p className="text-xs text-green-800">
                "Cho nhiều rau", "cho thêm rau thơm" - tăng vitamin, chất xơ
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">Giảm đường:</p>
              <p className="text-xs text-purple-800">
                "Cho ít đường", "không đường" - giúp giảm calo, tốt cho người đái tháo đường
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">Chọn thịt nạc:</p>
              <p className="text-xs text-amber-800">
                "Cho thịt nạc", "không mỡ" - giảm chất béo, calo
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="tip" title="Ví dụ">
          <p className="mb-2">
            <strong>Phở:</strong> "Cho ít nước mắm, nhiều rau thơm, thịt bò nạc" - 
            Giảm natri, tăng vitamin, giảm chất béo.
          </p>
          <p>
            <strong>Bánh mì:</strong> "Cho nhiều rau củ, ít pate, ít bơ" - 
            Tăng vitamin, giảm chất béo.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">khẩu phần Đồ ăn đường phố</h2>
        <Card>
          <h3 className="heading-4 mb-3">Lưu ý về khẩu phần</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              Đồ ăn đường phố thường có <strong>khẩu phần lớn</strong> hơn bữa ăn ở nhà. 
              Một tô phở có thể có 2-3 bát cơm tương đương.
            </p>
            <p>
              <strong>Tips:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 pl-6">
              <li>• Chia đôi với người khác nếu khẩu phần quá lớn</li>
              <li>• Mang về một phần để ăn sau</li>
              <li>• Chọn khẩu phần nhỏ nếu có</li>
              <li>• Chú ý đến tổng calo trong ngày</li>
            </ul>
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
                <strong>Ưu tiên món có rau củ:</strong> Phở, bánh mì, bún có nhiều rau củ tốt hơn món chỉ có thịt.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Yêu cầu điều chỉnh:</strong> Đừng ngại yêu cầu ít muối, nhiều rau, thịt nạc.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn quán quen:</strong> Quán quen thường biết sở thích của bạn và có thể điều chỉnh dễ hơn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chú ý khẩu phần:</strong> Đồ ăn đường phố thường lớn. Chia đôi hoặc mang về nếu quá nhiều.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh đồ chiên:</strong> Đồ chiên nhiều chất béo, calo cao. Chọn món luộc, nấu thay vì chiên.
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
              <p className="text-sm font-semibold mb-1">"Đồ ăn đường phố luôn không tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không phải! Phở, bánh mì, bún có thể rất lành mạnh nếu chọn đúng 
                và yêu cầu điều chỉnh. Nhiều món đường phố cân bằng dinh dưỡng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không thể yêu cầu điều chỉnh"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể! Hầu hết người bán sẵn sàng điều chỉnh theo yêu cầu. 
                Yêu cầu ít muối, nhiều rau là hoàn toàn bình thường.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Đồ ăn đường phố không an toàn"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Nếu chọn quán sạch sẽ, thực phẩm tươi, nấu chín kỹ, 
                đồ ăn đường phố có thể an toàn. Quan trọng là chọn đúng quán.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/daily-practices/eating-out-healthy">
            <h3 className="heading-5 mb-2">Ăn uống Lành mạnh khi Đi ăn Ngoài</h3>
            <p className="text-sm text-gray-600">
              Hướng dẫn chung về ăn uống lành mạnh khi đi ăn ngoài
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong đồ ăn đường phố
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người bận rộn</h3>
            <p className="text-sm text-gray-600">
              Đồ ăn đường phố cho người bận rộn
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
          Thông tin này chỉ dành cho mục đích giáo dục. Đồ ăn đường phố có thể lành mạnh nếu chọn đúng, 
          nhưng cần chú ý đến vệ sinh và an toàn thực phẩm. Nếu bạn có bệnh lý đặc biệt hoặc nhạy cảm với 
          thực phẩm, hãy cẩn thận khi ăn đồ ăn đường phố và tham khảo ý kiến bác sĩ nếu cần.
        </p>
      </Callout>
    </main>
  );
}

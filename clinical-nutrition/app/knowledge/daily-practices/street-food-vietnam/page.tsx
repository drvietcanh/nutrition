import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { ComparisonCard } from "../../../components/ComparisonCard";
import { Utensils, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thực phẩm Đường phố Việt Nam: Ăn Uống lành mạnh",
  description:
    "Hướng dẫn cách ăn uống lành mạnh với đồ ăn đường phố Việt Nam. Lựa chọn tốt (phở, bánh mì, bún) và lựa chọn nên hạn chế. Tips an toàn và cách điều chỉnh.",
  keywords: [
    "đồ ăn đường phố",
    "street food",
    "phở",
    "bánh mì",
    "bún",
    "ăn uống lành mạnh",
    "an toàn thực phẩm",
  ],
};

export default function StreetFoodVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Thực hành Hàng ngày", href: "/knowledge/daily-practices" },
          { label: "Thực phẩm Đường phố Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Utensils className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Thực phẩm Đường phố Việt Nam: Ăn Uống lành mạnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đồ ăn đường phố Việt Nam rất đa dạng và ngon miệng, nhưng không phải tất cả đều lành mạnh. 
          Hiểu về cách chọn lựa và điều chỉnh giúp bạn thưởng thức đồ ăn đường phố mà vẫn tốt cho sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Lựa chọn tốt:</strong> Phở, bánh mì, bún, cháo - có đủ dinh dưỡng
          </li>
          <li>
            <strong>Lựa chọn nên hạn chế:</strong> Đồ chiên, đồ ngọt - nhiều dầu mỡ, đường
          </li>
          <li>
            <strong>Tips an toàn:</strong> Chọn nơi sạch sẽ, thực phẩm nóng, tránh đồ để lâu
          </li>
          <li>
            <strong>Cách điều chỉnh:</strong> Yêu cầu ít muối, ít đường, nhiều rau
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Lựa chọn Tốt</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-5 mb-2">Phở</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Thành phần:</strong> Bánh phở, thịt, rau thơm, hành
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (bánh phở), Protein (thịt), Vitamin (rau)
            </p>
            <p className="text-sm text-gray-700">
              <strong>Tips:</strong> Chọn phở gà thay vì phở bò (ít béo hơn). Thêm nhiều rau thơm.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bánh Mì</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Thành phần:</strong> Bánh mì, thịt/chả, rau, pate
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (bánh mì), Protein (thịt/chả), Rau
            </p>
            <p className="text-sm text-gray-700">
              <strong>Tips:</strong> Yêu cầu ít pate, nhiều rau. Chọn thịt nạc.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Bún</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Thành phần:</strong> Bún, thịt/cá, rau, nước dùng
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (bún), Protein (thịt/cá), Vitamin (rau)
            </p>
            <p className="text-sm text-gray-700">
              <strong>Tips:</strong> Chọn bún chả, bún riêu - có đủ dinh dưỡng.
            </p>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Cháo</h3>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Thành phần:</strong> Gạo, thịt/cá, rau, nước dùng
            </p>
            <p className="text-sm text-gray-700 mb-2">
              <strong>Dinh dưỡng:</strong> Carbohydrate (gạo), Protein (thịt/cá), Vitamin (rau)
            </p>
            <p className="text-sm text-gray-700">
              <strong>Tips:</strong> Cháo gà, cháo cá - dễ tiêu, giàu dinh dưỡng.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lựa chọn Nên hạn chế</h2>
        <Card>
          <div className="space-y-3">
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Đồ Chiên:</p>
              <p className="text-xs text-gray-700">
                Bánh rán, nem rán, khoai tây chiên - nhiều dầu mỡ, calo cao. Nên hạn chế.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Đồ Ngọt:</p>
              <p className="text-xs text-gray-700">
                Chè, bánh ngọt, nước ngọt - nhiều đường, calo cao. Nên hạn chế.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Đồ Nhiều Muối:</p>
              <p className="text-xs text-gray-700">
                Một số món có thể quá mặn. Yêu cầu ít muối nếu có thể.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh Lựa chọn</h2>
        <ComparisonCard
          title="Đồ Ăn Đường phố"
          goodTitle="Lựa chọn Tốt"
          goodItems={[
            "Phở gà - có đủ dinh dưỡng, ít béo",
            "Bánh mì (ít pate, nhiều rau) - cân bằng",
            "Bún chả - có protein, rau",
            "Cháo gà - dễ tiêu, giàu dinh dưỡng",
            "Bánh cuốn - ít dầu, có protein",
          ]}
          badTitle="Lựa chọn Nên hạn chế"
          badItems={[
            "Bánh rán, nem rán - nhiều dầu mỡ",
            "Chè, bánh ngọt - nhiều đường",
            "Đồ chiên ngập dầu - nhiều calo",
            "Nước ngọt - nhiều đường",
            "Món quá mặn - nhiều natri",
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips An toàn</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn nơi sạch sẽ:</strong> Quán có vệ sinh tốt, người bán sạch sẽ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Thực phẩm nóng:</strong> Chọn món nấu nóng, tránh đồ để lâu ở nhiệt độ phòng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Rau tươi:</strong> Chọn món có rau tươi, không héo.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh:</strong> Đồ để lâu, không có bảo quản, nơi có ruồi muỗi.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Điều chỉnh</h2>
        <Card>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Yêu cầu Ít Muối:</p>
              <p className="text-xs text-gray-700">
                "Cho ít nước mắm", "cho ít muối" - giúp giảm natri.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Yêu cầu Nhiều Rau:</p>
              <p className="text-xs text-gray-700">
                "Cho nhiều rau", "thêm rau" - tăng vitamin và chất xơ.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Yêu cầu Ít Đường:</p>
              <p className="text-xs text-gray-700">
                "Cho ít đường", "không đường" - giúp giảm calo.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Yêu cầu Ít Dầu:</p>
              <p className="text-xs text-gray-700">
                "Cho ít dầu", "ít mỡ" - giúp giảm chất béo.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <ExampleBox variant="info" title="Phở Gà">
          <p className="text-sm mb-2">
            <strong>Yêu cầu:</strong> "Cho ít nước mắm, nhiều rau thơm"
          </p>
          <p className="text-sm">
            <strong>Kết quả:</strong> Phở có đủ dinh dưỡng, ít muối, nhiều vitamin từ rau.
          </p>
        </ExampleBox>

        <ExampleBox variant="info" title="Bánh Mì">
          <p className="text-sm mb-2">
            <strong>Yêu cầu:</strong> "Ít pate, nhiều rau, thịt nạc"
          </p>
          <p className="text-sm">
            <strong>Kết quả:</strong> Bánh mì cân bằng, ít béo, nhiều rau.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/eating-out-healthy">
            <h3 className="heading-5 mb-2">Ăn Ngoài lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách ăn ngoài lành mạnh
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Sodium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm muối trong bữa ăn
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng Lối sống Bận rộn</h3>
            <p className="text-sm text-gray-600">
              Cách ăn uống khi bận rộn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. An toàn thực phẩm là quan trọng. 
          Hãy chọn nơi uy tín, sạch sẽ, và thực phẩm tươi. Nếu có vấn đề về sức khỏe, 
          hãy tham khảo bác sĩ trước khi ăn đồ ăn đường phố.
        </p>
      </Callout>
    </main>
  );
}

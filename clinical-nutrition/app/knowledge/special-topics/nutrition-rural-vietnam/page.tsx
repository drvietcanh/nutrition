import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { TreePine, Leaf, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người Sống ở Nông thôn",
  description:
    "Hướng dẫn tận dụng thực phẩm địa phương ở nông thôn Việt Nam - rau vườn, trái cây, cá sông, thịt gà vườn. Cách bảo quản và tips tận dụng vườn nhà.",
  keywords: [
    "nông thôn",
    "thực phẩm địa phương",
    "rau vườn",
    "trái cây địa phương",
    "cá sông",
    "thịt gà vườn",
    "bảo quản thực phẩm",
  ],
};

export default function NutritionRuralVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người Sống ở Nông thôn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <TreePine className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người Sống ở Nông thôn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Sống ở nông thôn có nhiều lợi thế về thực phẩm - rau vườn tươi, trái cây địa phương, 
          cá sông, thịt gà vườn. Tận dụng thực phẩm địa phương giúp bạn có chế độ ăn lành mạnh và tiết kiệm.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Thực phẩm tự trồng:</strong> Rau vườn, trái cây - tươi, không thuốc trừ sâu
          </li>
          <li>
            <strong>Thực phẩm địa phương:</strong> Cá sông, thịt gà vườn - tươi, ít chất bảo quản
          </li>
          <li>
            <strong>Cách bảo quản:</strong> Bảo quản thực phẩm tươi để dùng lâu
          </li>
          <li>
            <strong>Tips:</strong> Tận dụng vườn nhà, mua theo mùa, chia sẻ với hàng xóm
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Tự trồng</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Rau vườn và trái cây tự trồng là nguồn dinh dưỡng tốt, tươi, và không có thuốc trừ sâu.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Rau Vườn (100g)"
            rows={[
              { nutrient: "Rau muống", amount: "2.5", unit: "g chất xơ", note: "Giàu vitamin A, C, sắt" },
              { nutrient: "Rau cải", amount: "2.0", unit: "g chất xơ", note: "Giàu vitamin K, folate" },
              { nutrient: "Rau lang", amount: "3.0", unit: "g chất xơ", note: "Giàu vitamin A, beta-carotene" },
              { nutrient: "Đậu bắp", amount: "3.2", unit: "g chất xơ", note: "Giàu vitamin C, folate" },
            ]}
          />
          <ExampleBox variant="tip" title="Lợi ích">
            <p className="text-sm">
              Rau vườn <strong>tươi hơn</strong> (thu hoạch ngay), <strong>không có thuốc trừ sâu</strong> 
              (nếu trồng hữu cơ), và <strong>rẻ hơn</strong> (không cần mua). 
              Có thể trồng nhiều loại rau trong vườn nhà.
            </p>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Địa phương</h2>
        <Card>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Cá Sông:</p>
              <p className="text-xs text-gray-700">
                Cá sông tươi, giàu protein, omega-3. Ví dụ: Cá rô, cá trê, cá lóc. 
                Có thể đánh bắt hoặc mua ở chợ địa phương.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thịt Gà Vườn:</p>
              <p className="text-xs text-gray-700">
                Thịt gà vườn tươi, ít chất bảo quản, giàu protein. 
                Có thể nuôi gà vườn hoặc mua ở chợ địa phương.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Trái cây Địa phương:</p>
              <p className="text-xs text-gray-700">
                Trái cây theo mùa, tươi, giàu vitamin. Ví dụ: Xoài, ổi, thanh long, nhãn, chôm chôm.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cách Bảo quản</h2>
        <Card>
          <div className="space-y-3">
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Rau Củ:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Bảo quản ở nơi mát, khô ráo</li>
                <li>• Có thể phơi khô (rau khô) để dùng lâu</li>
                <li>• Có thể muối chua (dưa muối) để dùng lâu</li>
              </ul>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thịt, Cá:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Bảo quản lạnh (tủ lạnh) nếu có</li>
                <li>• Có thể phơi khô (cá khô) để dùng lâu</li>
                <li>• Có thể muối (thịt muối) để dùng lâu</li>
              </ul>
            </div>
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Trái cây:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Bảo quản ở nơi mát, khô ráo</li>
                <li>• Có thể làm mứt để dùng lâu</li>
                <li>• Có thể phơi khô (trái cây khô) để dùng lâu</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Tận dụng Vườn Nhà</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Trồng đa dạng:</strong> Trồng nhiều loại rau (rau muống, rau cải, đậu bắp) để có đa dạng dinh dưỡng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Trồng theo mùa:</strong> Trồng rau theo mùa để có năng suất cao và ít sâu bệnh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chia sẻ:</strong> Chia sẻ rau vườn với hàng xóm, đổi lấy thực phẩm khác.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bảo quản:</strong> Bảo quản rau vườn để dùng lâu (phơi khô, muối chua).
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn với Thực phẩm Địa phương</h2>
        <ExampleBox variant="info" title="Bữa trưa">
          <p className="text-sm mb-2">
            <strong>Thực đơn:</strong>
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm">
            <li>Cơm (từ lúa địa phương)</li>
            <li>Cá sông kho (cá rô, cá trê)</li>
            <li>Canh rau muống (rau vườn)</li>
            <li>Rau cải luộc (rau vườn)</li>
            <li>Trái cây (ổi, xoài từ vườn)</li>
          </ul>
          <p className="text-sm mt-2">
            <strong>Lợi ích:</strong> Tất cả thực phẩm đều tươi, địa phương, và giàu dinh dưỡng.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-on-budget">
            <h3 className="heading-5 mb-2">Dinh dưỡng với Ngân sách Hạn chế</h3>
            <p className="text-sm text-gray-600">
              Tận dụng thực phẩm địa phương để tiết kiệm
            </p>
          </Card>
          <Card href="/knowledge/seasonal-foods-vietnam">
            <h3 className="heading-5 mb-2">Thực phẩm Theo Mùa</h3>
            <p className="text-sm text-gray-600">
              Thực phẩm theo mùa ở nông thôn
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
          Thông tin này chỉ dành cho mục đích giáo dục. Thực phẩm địa phương có thể có lợi ích, 
          nhưng cần đảm bảo an toàn thực phẩm (vệ sinh, không có thuốc trừ sâu). 
          Hãy tham khảo chuyên gia dinh dưỡng nếu cần.
        </p>
      </Callout>
    </main>
  );
}

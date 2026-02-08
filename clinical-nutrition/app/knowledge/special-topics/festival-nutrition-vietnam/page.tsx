import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Gift, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Lễ hội Việt Nam",
  description:
    "Hướng dẫn cách ăn uống lành mạnh trong các lễ hội Việt Nam - Tết, Trung thu, và các lễ hội khác. Cách cân bằng và tips thực hành.",
  keywords: [
    "lễ hội Việt Nam",
    "Tết",
    "Trung thu",
    "bánh chưng",
    "bánh tét",
    "mứt",
    "ăn uống lành mạnh",
  ],
};

export default function FestivalNutritionVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng trong Lễ hội Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Gift className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng trong Lễ hội Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Lễ hội Việt Nam thường có nhiều món ăn đặc biệt, từ bánh chưng, bánh tét đến mứt, kẹo. 
          Hiểu về giá trị dinh dưỡng và cách ăn vừa phải giúp bạn thưởng thức lễ hội mà vẫn tốt cho sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Tết:</strong> Bánh chưng, bánh tét, mứt, thịt kho - nhiều calo, natri
          </li>
          <li>
            <strong>Trung thu:</strong> Bánh trung thu, trái cây - nhiều đường, calo
          </li>
          <li>
            <strong>Tips:</strong> Ăn vừa phải, cân bằng với rau củ, uống đủ nước
          </li>
          <li>
            <strong>Lợi ích:</strong> Thưởng thức văn hóa, nhưng cần điều độ
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tết - Món Ăn truyền thống</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Tết có nhiều món ăn đặc biệt, giàu calo và natri. Hiểu về giá trị dinh dưỡng giúp bạn ăn vừa phải.
          </p>
          <NutrientTable
            title="Giá trị Dinh dưỡng Món Ăn Tết (100g)"
            rows={[
              { nutrient: "Bánh chưng", amount: "181", unit: "calo", note: "Nhiều carbohydrate, ít protein" },
              { nutrient: "Bánh tét", amount: "200", unit: "calo", note: "Nhiều carbohydrate, ít protein" },
              { nutrient: "Thịt kho", amount: "250", unit: "calo", note: "Nhiều protein, natri" },
              { nutrient: "Mứt", amount: "300", unit: "calo", note: "Nhiều đường" },
            ]}
          />
          <ExampleBox variant="tip" title="Cách ăn Tết lành mạnh">
            <p className="text-sm mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Ăn bánh chưng/bánh tét vừa phải (1-2 miếng/ngày)</li>
              <li>Thịt kho - chọn thịt nạc, ít mỡ</li>
              <li>Mứt - ăn ít (1-2 miếng/ngày), nhiều đường</li>
              <li>Cân bằng với rau củ, trái cây</li>
              <li>Uống đủ nước</li>
            </ul>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Trung thu - Bánh và Trái cây</h2>
        <Card>
          <p className="text-body-sm mb-3">
            Trung thu có bánh trung thu (nhiều đường, calo) và trái cây (tốt cho sức khỏe).
          </p>
          <div className="space-y-3">
            <div className="bg-red-50 rounded-lg p-3 border border-red-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Bánh Trung thu:</p>
              <p className="text-xs text-gray-700">
                Nhiều đường, calo cao (200-300 calo/bánh). Nên ăn ít (1/4-1/2 bánh/ngày).
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Trái cây:</p>
              <p className="text-xs text-gray-700">
                Trái cây tươi (ổi, xoài, thanh long) - tốt cho sức khỏe, giàu vitamin, chất xơ.
              </p>
            </div>
          </div>
          <ExampleBox variant="tip" title="Cách ăn Trung thu lành mạnh">
            <p className="text-sm mb-2">
              <strong>Tips:</strong>
            </p>
            <ul className="list-disc list-inside space-y-1 text-sm">
              <li>Bánh trung thu - ăn ít (1/4-1/2 bánh/ngày)</li>
              <li>Ưu tiên trái cây tươi (ổi, xoài, thanh long)</li>
              <li>Chia sẻ bánh với gia đình, bạn bè</li>
              <li>Uống trà không đường với bánh</li>
            </ul>
          </ExampleBox>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Các Lễ hội Khác</h2>
        <Card>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Lễ hội Khác:</p>
              <p className="text-xs text-gray-700">
                Nhiều lễ hội có bánh, kẹo, đồ ngọt. Ăn vừa phải, cân bằng với bữa ăn chính.
              </p>
            </div>
            <ExampleBox variant="tip" title="Tips Chung">
              <p className="text-sm mb-2">
                <strong>Nguyên tắc:</strong>
              </p>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Ăn vừa phải, không ăn quá nhiều</li>
                <li>Cân bằng với bữa ăn chính (rau củ, protein)</li>
                <li>Uống đủ nước</li>
                <li>Vận động nhẹ sau khi ăn</li>
                <li>Thưởng thức văn hóa, nhưng điều độ</li>
              </ul>
            </ExampleBox>
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
                <strong>Ăn vừa phải:</strong> Thưởng thức món ăn lễ hội, nhưng không ăn quá nhiều.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Cân bằng:</strong> Ăn bữa ăn chính bình thường (rau củ, protein) trước khi ăn đồ lễ hội.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống đủ nước:</strong> Nước lọc tốt hơn nước ngọt, trà sữa.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Vận động:</strong> Đi bộ, vận động nhẹ sau khi ăn.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người có bệnh:</strong> Nếu có bệnh tiểu đường, cao huyết áp, hãy tham khảo bác sĩ.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách quản lý cân nặng trong lễ hội
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Sodium và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm muối trong món ăn lễ hội
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu về carbohydrate trong bánh chưng, bánh tét
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Món ăn lễ hội có thể nhiều calo, đường, natri. 
          Nếu bạn có bệnh tiểu đường, cao huyết áp, hoặc các vấn đề sức khỏe khác, 
          hãy tham khảo bác sĩ về cách ăn uống trong lễ hội.
        </p>
      </Callout>
    </main>
  );
}

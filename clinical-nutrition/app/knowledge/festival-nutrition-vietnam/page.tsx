import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { NutrientTable } from "../../components/NutrientTable";
import { Gift, CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng trong Lễ hội Việt Nam",
  description:
    "Cách ăn uống lành mạnh trong Tết, Trung thu, và các lễ hội khác. Hướng dẫn với bánh chưng, bánh tét, mứt, bánh trung thu. Tips để ăn vừa phải và cân bằng.",
  keywords: [
    "lễ hội",
    "tết",
    "trung thu",
    "bánh chưng",
    "bánh tét",
    "mứt",
    "bánh trung thu",
    "festival",
  ],
};

export default function FestivalNutritionVietnamPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề Đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng trong Lễ hội Việt Nam" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Gift className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng trong Lễ hội Việt Nam</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Lễ hội Việt Nam như Tết, Trung thu có nhiều món ăn đặc biệt. Làm sao để thưởng thức những món này 
          mà vẫn giữ được sức khỏe? Tìm hiểu cách ăn uống lành mạnh trong các dịp lễ hội.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Tết:</strong> Bánh chưng, bánh tét, mứt, thịt kho - nhiều carbohydrate, natri, đường
          </li>
          <li>
            <strong>Trung thu:</strong> Bánh trung thu - nhiều đường, chất béo, calo cao
          </li>
          <li>
            <strong>Tips:</strong> Ăn vừa phải, chia nhỏ, kết hợp với rau củ, uống nhiều nước
          </li>
          <li>
            <strong>Cân bằng:</strong> Không cần tránh hoàn toàn, chỉ cần ăn có ý thức
          </li>
          <li>
            <strong>Điều chỉnh:</strong> Có thể tự làm với ít đường, ít muối hơn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Tết: Bánh chưng, Bánh tét, Mứt, Thịt kho</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Giá trị Dinh dưỡng Món Ăn Tết</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Món Ăn Tết (100g)"
              rows={[
                { nutrient: "Bánh chưng", amount: "181", unit: "calo, 4g protein, 40g carb", highlight: "moderate", note: "Nhiều carbohydrate, ít protein" },
                { nutrient: "Bánh tét", amount: "181", unit: "calo, 4g protein, 40g carb", highlight: "moderate", note: "Tương tự bánh chưng" },
                { nutrient: "Mứt dừa", amount: "350", unit: "calo, 80g đường", highlight: "low", note: "Nhiều đường, calo cao" },
                { nutrient: "Mứt gừng", amount: "300", unit: "calo, 70g đường", highlight: "low", note: "Nhiều đường" },
                { nutrient: "Thịt kho tàu", amount: "250", unit: "calo, 20g protein", highlight: "moderate", note: "Nhiều natri, đường" },
                { nutrient: "Giò chả", amount: "200", unit: "calo, 18g protein", highlight: "moderate", note: "Nhiều natri" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Cách Ăn Tết Lành mạnh">
            <p className="mb-2">
              <strong>Bánh chưng/bánh tét:</strong> Ăn 1-2 miếng nhỏ (50-100g) mỗi bữa, không ăn quá nhiều. 
              Kết hợp với dưa hành, củ kiệu để có vitamin và giảm cảm giác ngán.
            </p>
            <p className="mb-2">
              <strong>Mứt:</strong> Ăn ít (1-2 miếng nhỏ), không ăn nhiều. Mứt có nhiều đường, calo cao. 
              Có thể thay bằng trái cây tươi.
            </p>
            <p>
              <strong>Thịt kho:</strong> Ăn vừa phải, kết hợp với rau củ. Có thể tự nấu với ít nước mắm, 
              ít đường hơn để giảm natri.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Trung thu: Bánh Trung thu</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Giá trị Dinh dưỡng Bánh Trung thu</h3>
            <NutrientTable
              title="Giá trị Dinh dưỡng Bánh Trung thu (1 cái ~100g)"
              rows={[
                { nutrient: "Bánh nướng đậu xanh", amount: "350", unit: "calo, 15g chất béo, 45g đường", highlight: "low", note: "Nhiều đường, chất béo, calo cao" },
                { nutrient: "Bánh nướng thập cẩm", amount: "400", unit: "calo, 20g chất béo, 50g đường", highlight: "low", note: "Nhiều đường, chất béo, calo cao" },
                { nutrient: "Bánh dẻo", amount: "300", unit: "calo, 10g chất béo, 60g đường", highlight: "low", note: "Nhiều đường" },
              ]}
            />
          </Card>

          <Callout variant="warning" title="Lưu ý">
            <p className="text-sm">
              Bánh trung thu có <strong>rất nhiều đường và chất béo</strong>. Một cái bánh trung thu có thể 
              bằng 1-2 bữa ăn về calo. Nên ăn ít (1/4-1/2 cái), chia nhỏ, không ăn nhiều một lúc.
            </p>
          </Callout>

          <ExampleBox variant="tip" title="Cách Ăn Trung thu Lành mạnh">
            <p className="mb-2">
              <strong>Chia nhỏ:</strong> Ăn 1/4-1/2 cái bánh mỗi lần, không ăn cả cái một lúc. 
              Chia với gia đình, bạn bè.
            </p>
            <p className="mb-2">
              <strong>Kết hợp:</strong> Ăn bánh với trà không đường, trái cây tươi. 
              Tránh uống nước ngọt cùng bánh.
            </p>
            <p>
              <strong>Thời gian:</strong> Ăn vào bữa phụ, không thay thế bữa chính. 
              Vẫn ăn đủ bữa chính với rau củ, protein.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành cho Lễ hội</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn vừa phải:</strong> Thưởng thức món ăn lễ hội nhưng không ăn quá nhiều. 
                1-2 miếng nhỏ là đủ.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chia nhỏ:</strong> Chia bánh, mứt thành phần nhỏ, ăn từ từ. 
                Chia với người khác để không ăn quá nhiều.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp với rau củ:</strong> Vẫn ăn đủ rau củ trong bữa chính. 
                Rau củ giúp cân bằng và giảm cảm giác ngán.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống nhiều nước:</strong> Uống nước lọc, trà không đường. 
                Tránh nước ngọt, rượu bia.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Vận động:</strong> Vận động nhẹ sau khi ăn. Đi bộ, tập thể dục nhẹ giúp tiêu hóa tốt.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tự làm:</strong> Có thể tự làm bánh, mứt với ít đường, ít muối hơn. 
                Điều chỉnh theo sở thích và nhu cầu.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Điều chỉnh Cho Người có Bệnh lý</h2>
        <Card>
          <h3 className="heading-4 mb-3">Người Đái tháo đường</h3>
          <p className="text-body-sm mb-2">
            Bánh chưng, bánh tét, mứt, bánh trung thu có nhiều carbohydrate và đường. 
            Người đái tháo đường cần đặc biệt chú ý:
          </p>
          <ul className="space-y-1 text-sm text-gray-700 pl-6">
            <li>• Ăn rất ít (1/4-1/2 miếng nhỏ)</li>
            <li>• Ăn sau bữa chính, không thay thế bữa chính</li>
            <li>• Kiểm tra đường huyết sau khi ăn</li>
            <li>• Ưu tiên bánh ít đường nếu có</li>
          </ul>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Người Tăng huyết áp</h3>
          <p className="text-body-sm mb-2">
            Thịt kho, giò chả có nhiều natri. Người tăng huyết áp cần:
          </p>
          <ul className="space-y-1 text-sm text-gray-700 pl-6">
            <li>• Ăn ít thịt kho, giò chả</li>
            <li>• Tự nấu với ít nước mắm, ít muối</li>
            <li>• Tăng rau củ, giảm món mặn</li>
            <li>• Uống nhiều nước</li>
          </ul>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Người Muốn Giảm Cân</h3>
          <p className="text-body-sm mb-2">
            Món ăn lễ hội có nhiều calo. Người muốn giảm cân cần:
          </p>
          <ul className="space-y-1 text-sm text-gray-700 pl-6">
            <li>• Ăn rất ít (1-2 miếng nhỏ)</li>
            <li>• Chia nhỏ, ăn từ từ</li>
            <li>• Tăng vận động để đốt calo</li>
            <li>• Vẫn ăn đủ bữa chính với rau củ</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Phải tránh hoàn toàn món ăn lễ hội"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Không cần! Bạn có thể thưởng thức món ăn lễ hội, chỉ cần ăn vừa phải. 
                Ăn 1-2 miếng nhỏ không gây hại.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Bánh chưng, bánh tét không tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bánh chưng, bánh tét có carbohydrate, protein, một số vitamin. 
                Vấn đề là lượng ăn, không phải bản thân bánh. Ăn vừa phải là tốt.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Lễ hội là dịp để ăn thả ga"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ăn quá nhiều trong lễ hội có thể gây tăng cân, tăng đường huyết, 
                tăng huyết áp. Vẫn cần ăn có ý thức, vừa phải.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/healthy-weight-management">
            <h3 className="heading-5 mb-2">Quản lý Cân nặng Lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách quản lý cân nặng trong lễ hội
            </p>
          </Card>
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Cách giảm natri trong món ăn lễ hội
            </p>
          </Card>
          <Card href="/knowledge/carbohydrates">
            <h3 className="heading-5 mb-2">Carbohydrate</h3>
            <p className="text-sm text-gray-600">
              Hiểu về carbohydrate trong bánh chưng, bánh tét
            </p>
          </Card>
          <Card href="/knowledge/diabetes-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Đái tháo đường</h3>
            <p className="text-sm text-gray-600">
              Cách ăn uống trong lễ hội cho người đái tháo đường
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Món ăn lễ hội có thể thưởng thức nhưng cần ăn vừa phải. 
          Nếu bạn có bệnh lý đặc biệt (đái tháo đường, tăng huyết áp, bệnh thận), hãy tham khảo chuyên gia 
          dinh dưỡng để được tư vấn phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

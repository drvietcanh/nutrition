import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { PortionSizeGuide } from "../../components/PortionSizeGuide";
import { NutrientTable } from "../../components/NutrientTable";
import { Beef, Fish, Egg, Bean, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Protein: Nguồn và Nhu cầu",
  description:
    "Hiểu về protein - chất dinh dưỡng quan trọng để xây dựng và sửa chữa cơ thể. Nguồn protein tốt, nhu cầu, và ví dụ thực tế.",
  keywords: [
    "protein",
    "đạm",
    "nhu cầu protein",
    "nguồn protein",
    "thịt",
    "cá",
    "đậu",
  ],
};

export default function ProteinSourcesNeedsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Protein: Nguồn và Nhu cầu" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Beef className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Protein: Nguồn và Nhu cầu</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Protein (đạm) là một trong ba chất dinh dưỡng đa lượng quan trọng. Protein giúp xây dựng 
          và sửa chữa cơ thể, tạo enzyme và hormone, và là thành phần của mọi tế bào. 
          Hiểu về nguồn protein và nhu cầu giúp bạn đảm bảo cơ thể có đủ protein.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Protein</strong> là chất dinh dưỡng quan trọng để xây dựng và sửa chữa cơ thể
          </li>
          <li>
            <strong>Nhu cầu:</strong> Khoảng 0.8-1.0g protein/kg cân nặng/ngày cho người khỏe mạnh
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Thịt nạc, cá, trứng, đậu, sữa, đậu phụ
          </li>
          <li>
            <strong>Protein động vật</strong> thường "hoàn chỉnh" hơn protein thực vật
          </li>
          <li>
            Phân bố protein đều trong ngày tốt hơn ăn nhiều một lúc
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Protein là gì và Vai trò của nó?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Protein</strong> được tạo thành từ các axit amin - giống như "viên gạch" xây dựng 
            cơ thể. Cơ thể cần protein để:
          </p>

          <Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Xây dựng và sửa chữa cơ bắp</li>
                  <li>• Tạo enzyme và hormone</li>
                  <li>• Hỗ trợ hệ miễn dịch</li>
                  <li>• Vận chuyển chất dinh dưỡng</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu protein:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Mất cơ bắp</li>
                  <li>• Yếu, mệt mỏi</li>
                  <li>• Chậm lành vết thương</li>
                  <li>• Suy giảm miễn dịch</li>
                </ul>
              </div>
            </div>
          </Card>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Giống như xây nhà cần gạch, cơ thể cần protein để xây dựng và sửa chữa. 
              Khi bạn tập thể dục, cơ bắp bị "tổn thương" nhẹ, và protein giúp sửa chữa và 
              làm cơ bắp mạnh hơn.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Protein</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nhu cầu Protein Hàng ngày</h3>
            <p className="text-body-sm mb-3">
              Nhu cầu protein phụ thuộc vào tuổi, giới tính, hoạt động, và tình trạng sức khỏe:
            </p>
            <NutrientTable
              rows={[
                { nutrient: "Người khỏe mạnh (ít vận động)", amount: "0.8", unit: "g/kg/ngày", note: "Ví dụ: 60kg = 48g protein" },
                { nutrient: "Người hoạt động vừa phải", amount: "1.0-1.2", unit: "g/kg/ngày", note: "Ví dụ: 60kg = 60-72g protein" },
                { nutrient: "Người tập thể dục nhiều", amount: "1.2-1.7", unit: "g/kg/ngày", note: "Ví dụ: 60kg = 72-102g protein" },
                { nutrient: "Người cao tuổi", amount: "1.0-1.2", unit: "g/kg/ngày", note: "Để duy trì cơ bắp" },
                { nutrient: "Phụ nữ mang thai", amount: "1.1", unit: "g/kg/ngày", note: "Tăng thêm 25g/ngày" },
                { nutrient: "Phụ nữ cho con bú", amount: "1.3", unit: "g/kg/ngày", note: "Tăng thêm 25g/ngày" },
              ]}
            />
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Tính toán">
            <p className="mb-2">
              <strong>Ví dụ:</strong> Một phụ nữ 30 tuổi, nặng 60kg, làm việc văn phòng và tập thể dục nhẹ.
            </p>
            <p className="mb-2">
              <strong>Nhu cầu:</strong> 60kg × 1.0g/kg = 60g protein/ngày
            </p>
            <p>
              <strong>Phân bố:</strong> ~20g protein mỗi bữa (sáng, trưa, tối) = 60g/ngày
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Protein Tốt</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Protein Động vật (Protein "Hoàn chỉnh")</h3>
            <p className="text-body-sm mb-3">
              Protein động vật chứa tất cả các axit amin cần thiết mà cơ thể không thể tự tạo ra.
            </p>
            <PortionSizeGuide
              items={[
                { food: "Thịt gà nạc", portion: "100g", visual: "Bằng lòng bàn tay", calories: "165 calo, 31g protein" },
                { food: "Thịt heo nạc", portion: "100g", visual: "Bằng lòng bàn tay", calories: "250 calo, 26g protein" },
                { food: "Thịt bò nạc", portion: "100g", visual: "Bằng lòng bàn tay", calories: "250 calo, 26g protein" },
                { food: "Cá hồi", portion: "100g", visual: "Bằng lòng bàn tay", calories: "200 calo, 25g protein" },
                { food: "Cá thu, cá ngừ", portion: "100g", visual: "Bằng lòng bàn tay", calories: "200 calo, 25g protein" },
                { food: "Cá basa (Việt Nam)", portion: "100g", visual: "Bằng lòng bàn tay", calories: "150 calo, 20g protein" },
                { food: "Tôm", portion: "100g", visual: "Bằng lòng bàn tay", calories: "100 calo, 24g protein" },
                { food: "Cua", portion: "100g", visual: "Bằng lòng bàn tay", calories: "87 calo, 18g protein" },
                { food: "Trứng", portion: "2 quả", visual: "2 quả trứng gà", calories: "140 calo, 12g protein" },
                { food: "Sữa", portion: "250ml (1 cốc)", visual: "1 cốc sữa", calories: "150 calo, 8g protein" },
                { food: "Sữa chua", portion: "200g (1 hộp)", visual: "1 hộp sữa chua", calories: "120 calo, 10g protein" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Protein Thực vật</h3>
            <p className="text-body-sm mb-3">
              Protein thực vật thường thiếu một số axit amin, nhưng kết hợp nhiều loại sẽ có đủ.
            </p>
            <PortionSizeGuide
              items={[
                { food: "Đậu phụ", portion: "150g", visual: "Bằng lòng bàn tay", calories: "120 calo, 12g protein" },
                { food: "Đậu đen, đậu đỏ", portion: "150g (nấu chín)", visual: "1 bát nhỏ", calories: "150 calo, 10g protein" },
                { food: "Đậu lăng", portion: "150g (nấu chín)", visual: "1 bát nhỏ", calories: "120 calo, 9g protein" },
                { food: "Quả hạch (hạnh nhân, óc chó)", portion: "30g", visual: "1 nắm tay nhỏ", calories: "180 calo, 6g protein" },
                { food: "Hạt chia, hạt lanh", portion: "30g", visual: "2 muỗng canh", calories: "150 calo, 5g protein" },
                { food: "Đậu phộng", portion: "30g", visual: "1 nắm tay nhỏ", calories: "170 calo, 7g protein" },
              ]}
            />
            <Callout variant="info" title="Mẹo cho Người Ăn Chay">
              <p className="text-body-sm">
                Kết hợp nhiều loại protein thực vật trong ngày để có đủ axit amin. 
                Ví dụ: Đậu + gạo, đậu phụ + rau, quả hạch + ngũ cốc.
              </p>
              <p className="text-body-sm mt-2">
                <strong>Ví dụ món ăn Việt Nam:</strong> Đậu phụ sốt cà chua + cơm, 
                đậu đen nấu chè + sữa chua, chả chay (từ đậu phụ) + rau.
              </p>
            </Callout>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn với Đủ Protein</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa Sáng (~20g protein)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 2 quả trứng (12g) + 1 lát bánh mì nguyên cám + rau</li>
              <li>• Sữa chua (10g) + yến mạch + quả hạch (6g) + trái cây</li>
              <li>• <strong>Đậu phụ xào (12g) + rau + cơm</strong> - Món ăn Việt Nam phổ biến</li>
              <li>• <strong>Cháo thịt gà (15g) + rau thơm</strong> - Bữa sáng Việt Nam</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa Trưa (~25g protein)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Thịt gà nạc 100g (31g) + rau + cơm</li>
              <li>• <strong>Cá kho tộ 100g (25g) + rau muống luộc + cơm</strong> - Món ăn Việt Nam</li>
              <li>• <strong>Canh chua cá (20g) + cơm + rau</strong> - Protein từ cá trong canh</li>
              <li>• Đậu đen 150g (10g) + gạo lứt + rau + quả hạch (7g)</li>
              <li>• <strong>Tôm rang me 100g (24g) + rau + cơm</strong> - Protein từ tôm</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa Tối (~25g protein)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Thịt heo nạc 100g (26g) + rau luộc + cơm</li>
              <li>• <strong>Thịt kho tiêu 100g (26g) + rau cải xào + cơm</strong> - Món ăn Việt Nam</li>
              <li>• Cá thu 100g (25g) + rau xào + khoai tây</li>
              <li>• <strong>Cá hấp gừng 100g (25g) + rau luộc + cơm</strong> - Phương pháp hấp lành mạnh</li>
              <li>• Đậu phụ 200g (16g) + đậu đỏ (10g) + rau + cơm</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Phân bố đều trong ngày:</strong> Ăn protein ở mỗi bữa tốt hơn ăn nhiều một lúc.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn protein nạc:</strong> Thịt nạc, cá, đậu tốt hơn thịt mỡ, đồ chiên.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp protein thực vật:</strong> Nếu ăn chay, kết hợp nhiều loại đậu, hạt, ngũ cốc.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đọc nhãn:</strong> Kiểm tra lượng protein trên nhãn thực phẩm để biết bạn ăn bao nhiêu.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm Phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Cần ăn nhiều protein để có cơ bắp"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Tập thể dục mới là yếu tố quan trọng nhất. 
                Ăn quá nhiều protein không tự động tạo cơ bắp, và có thể gây hại cho thận.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Protein thực vật không tốt bằng protein động vật"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Protein thực vật có thể tốt như protein động vật nếu bạn 
                kết hợp nhiều loại. Đậu + gạo tạo ra protein hoàn chỉnh.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần bổ sung protein powder"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Hầu hết người khỏe mạnh có thể đủ protein từ thực phẩm. 
                Protein powder chỉ cần nếu bạn không thể ăn đủ từ thực phẩm.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan về các Chất Dinh dưỡng Đa lượng</h3>
            <p className="text-sm text-gray-600">
              Hiểu về protein trong tổng thể dinh dưỡng
            </p>
          </Card>
          <Card href="/knowledge/healthy-plate">
            <h3 className="heading-5 mb-2">Cân bằng Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách cân bằng protein trong bữa ăn
            </p>
          </Card>
          <Card href="/knowledge/portion-sizes">
            <h3 className="heading-5 mb-2">Hiểu về Portion Sizes</h3>
            <p className="text-sm text-gray-600">
              Cách ước lượng khẩu phần protein
            </p>
          </Card>
          <Card href="/knowledge/elderly-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Người cao tuổi</h3>
            <p className="text-sm text-gray-600">
              Nhu cầu protein đặc biệt cho người cao tuổi
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nhu cầu protein của mỗi người khác nhau 
          tùy theo tuổi, giới tính, hoạt động, và tình trạng sức khỏe. Người có bệnh thận có thể 
          cần hạn chế protein. Nếu bạn có bệnh lý đặc biệt, hãy tham khảo chuyên gia dinh dưỡng 
          để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

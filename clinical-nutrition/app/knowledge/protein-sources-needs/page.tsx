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
        <h2 className="heading-2">Chất đạm (Protein) là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chất đạm (protein)</strong> là vật liệu xây dựng chính của cơ thể. 
            Cơ bắp, da, máu, men tiêu hóa, kháng thể… đều cần đạm để tạo và sửa chữa.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>👉 Có thể hiểu đơn giản:</strong> Đạm giống như "gạch" để xây và sửa cơ thể. 
              Giống như xây nhà cần gạch, cơ thể cần đạm để xây dựng và sửa chữa mọi bộ phận.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò chính của chất đạm</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Giữ và phát triển cơ bắp</strong> - giúp cơ bắp khỏe mạnh</li>
                  <li>• <strong>Hỗ trợ miễn dịch</strong> - tạo kháng thể chống bệnh</li>
                  <li>• <strong>Giúp lành vết thương</strong> - hồi phục sau bệnh, sau phẫu thuật</li>
                  <li>• <strong>Duy trì sức khỏe người cao tuổi</strong> - giữ cơ bắp, tránh té ngã</li>
                  <li>• Tạo enzyme và hormone</li>
                  <li>• Vận chuyển chất dinh dưỡng</li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu đạm:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• <strong>Mệt mỏi, yếu cơ</strong></li>
                  <li>• <strong>Sụt cân, suy dinh dưỡng</strong></li>
                  <li>• <strong>Dễ nhiễm trùng</strong> - hệ miễn dịch yếu</li>
                  <li>• <strong>Người già dễ té ngã</strong> - do mất cơ bắp</li>
                  <li>• Chậm lành vết thương</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Not more is Better */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Không phải ăn càng nhiều đạm càng tốt
        </h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50/30">
            <h3 className="heading-4 mb-3 text-red-900">❌ Ăn thiếu đạm có thể gây:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Mệt mỏi, yếu cơ</strong> - không đủ năng lượng, cơ bắp teo</li>
              <li>• <strong>Sụt cân, suy dinh dưỡng</strong> - cơ thể không đủ vật liệu xây dựng</li>
              <li>• <strong>Dễ nhiễm trùng</strong> - hệ miễn dịch yếu, không đủ kháng thể</li>
              <li>• <strong>Người già dễ té ngã</strong> - mất cơ bắp, yếu chân tay</li>
            </ul>
          </Card>

          <Card className="border-amber-200 bg-amber-50/30">
            <h3 className="heading-4 mb-3 text-amber-900">⚠️ Ăn quá nhiều đạm có thể:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• <strong>Tăng gánh nặng cho thận</strong> - thận phải làm việc nhiều hơn để đào thải</li>
              <li>• <strong>Gây khó tiêu, táo bón</strong> - đặc biệt nếu ít chất xơ</li>
              <li>• <strong>Không phù hợp với người bệnh thận mạn</strong> - có thể làm bệnh nặng hơn</li>
              <li>• Có thể gây mất nước nếu không uống đủ nước</li>
            </ul>
          </Card>

          <Callout variant="info" title="👉 Vì vậy">
            <p className="text-body-sm">
              <strong>Ăn đủ – đúng – phù hợp từng người</strong> quan trọng hơn ăn nhiều. 
              Mỗi người có nhu cầu khác nhau tùy theo tuổi, hoạt động, và tình trạng sức khỏe.
            </p>
          </Callout>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Protein</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Nhu cầu Protein hàng ngày</h3>
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

      {/* Vietnamese food protein Table */}
      <section className="space-y-4">
        <h2 className="heading-2">Bảng hàm lượng Đạm trong Thực phẩm Việt Nam</h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm">
            Số liệu dưới đây mang tính ước tính giáo dục, có thể thay đổi tùy theo cách chế biến và từng loại thực phẩm. 
            Không thay thế tư vấn cá nhân.
          </p>
        </Callout>
        
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200">
            <thead className="bg-green-100">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Đạm (g/100g)</th>
                <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-neutral-200">
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt heo nạc</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~20g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Phổ biến, dễ ăn</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt gà</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~22g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Ít béo hơn thịt đỏ</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt bò</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~26g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Giàu sắt</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~20g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Dễ tiêu, tốt cho tim mạch</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trứng gà</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~13g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Đạm chất lượng cao, rẻ</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu phụ</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~8g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Phù hợp người ăn chay</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đậu nành</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~36g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Đạm thực vật cao nhất</td>
              </tr>
              <tr className="bg-neutral-50">
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Sữa tươi</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">~3g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Bổ sung nhẹ</td>
              </tr>
              <tr>
                <td className="px-4 py-3 text-sm text-neutral-700"><strong>Sữa dinh dưỡng</strong></td>
                <td className="px-4 py-3 text-sm text-neutral-700 text-center">4-6g</td>
                <td className="px-4 py-3 text-sm text-neutral-700">Tùy loại</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn protein Tốt</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Đạm động vật và Đạm thực vật – Hiểu đúng</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="border border-blue-200 bg-blue-50/30 rounded-lg p-4">
                <h4 className="heading-5 mb-2 text-blue-900">Đạm động vật</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✅ <strong>Dễ hấp thu</strong> - cơ thể hấp thu tốt</li>
                  <li>✅ <strong>Đủ acid amin</strong> - có tất cả acid amin cần thiết</li>
                  <li>✅ <strong>Chất lượng cao</strong> - đạm "hoàn chỉnh"</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Ví dụ: Thịt, cá, trứng, sữa
                </p>
              </div>
              <div className="border border-green-200 bg-green-50/30 rounded-lg p-4">
                <h4 className="heading-5 mb-2 text-green-900">Đạm thực vật</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>✅ <strong>Ít béo</strong> - tốt cho tim mạch</li>
                  <li>✅ <strong>Nhiều chất xơ</strong> - tốt cho tiêu hóa</li>
                  <li>✅ <strong>Giá rẻ</strong> - phù hợp ngân sách</li>
                </ul>
                <p className="text-xs text-gray-600 mt-2">
                  Ví dụ: Đậu phụ, đậu nành, đậu đen, đậu đỏ
                </p>
              </div>
            </div>
            <Callout variant="info" title="👉 Tốt nhất là kết hợp cả hai">
              <p className="text-body-sm">
                Không nên thiên lệch chỉ ăn đạm động vật hoặc chỉ đạm thực vật. 
                Kết hợp cả hai giúp bạn có đủ dinh dưỡng và đa dạng hơn.
              </p>
            </Callout>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Protein động vật (Protein "Hoàn chỉnh")</h3>
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
                { food: "Tôm (Việt Nam)", portion: "100g", visual: "Bằng lòng bàn tay", calories: "100 calo, 24g protein" },
                { food: "Cua (Việt Nam)", portion: "100g", visual: "Bằng lòng bàn tay", calories: "87 calo, 18g protein" },
                { food: "Ốc (snails - Việt Nam)", portion: "100g", visual: "Bằng lòng bàn tay", calories: "90 calo, 16g protein" },
                { food: "Chả (Vietnamese sausage)", portion: "50g", visual: "Bằng nửa lòng bàn tay", calories: "120 calo, 8g protein" },
                { food: "Giò (Vietnamese ham)", portion: "50g", visual: "Bằng nửa lòng bàn tay", calories: "100 calo, 10g protein" },
                { food: "Trứng", portion: "2 quả", visual: "2 quả trứng gà", calories: "140 calo, 12g protein" },
                { food: "Sữa", portion: "250ml (1 cốc)", visual: "1 cốc sữa", calories: "150 calo, 8g protein" },
                { food: "Sữa chua", portion: "200g (1 hộp)", visual: "1 hộp sữa chua", calories: "120 calo, 10g protein" },
              ]}
            />
          </Card>

          <ExampleBox variant="info" title="Protein Việt Nam Phổ biến">
            <p className="mb-2">
              <strong>Tôm, cua, ốc</strong> là nguồn protein phổ biến và giá cả phải chăng ở Việt Nam. 
              Chúng thường được chế biến thành các món như: tôm rang me, cua rang me, ốc luộc, ốc xào.
            </p>
            <p className="mb-2">
              <strong>Chả và giò</strong> là các loại thịt chế biến truyền thống Việt Nam, thường được 
              dùng trong bữa ăn gia đình. Chả có thể làm từ thịt heo, thịt gà, hoặc cá. Giò thường làm từ thịt heo.
            </p>
            <p>
              <strong>Đậu phụ</strong> là nguồn protein thực vật rất phổ biến ở Việt Nam, có thể chế biến 
              thành nhiều món: đậu phụ chiên, đậu phụ sốt cà chua, đậu phụ kho.
            </p>
          </ExampleBox>

          <Card>
            <h3 className="heading-4 mb-3">Protein thực vật</h3>
            <p className="text-body-sm mb-3">
              Protein thực vật thường thiếu một số axit amin, nhưng kết hợp nhiều loại sẽ có đủ.
            </p>
            <PortionSizeGuide
              items={[
                { food: "Đậu phụ (Việt Nam)", portion: "150g", visual: "Bằng lòng bàn tay", calories: "120 calo, 12g protein" },
                { food: "Đậu đen, đậu đỏ (Việt Nam)", portion: "150g (nấu chín)", visual: "1 bát nhỏ", calories: "150 calo, 10g protein" },
                { food: "Đậu lăng", portion: "150g (nấu chín)", visual: "1 bát nhỏ", calories: "120 calo, 9g protein" },
                { food: "Quả hạch (hạnh nhân, óc chó)", portion: "30g", visual: "1 nắm tay nhỏ", calories: "180 calo, 6g protein" },
                { food: "Hạt chia, hạt lanh", portion: "30g", visual: "2 muỗng canh", calories: "150 calo, 5g protein" },
                { food: "Đậu phộng (Việt Nam)", portion: "30g", visual: "1 nắm tay nhỏ", calories: "170 calo, 7g protein" },
              ]}
            />
            <Callout variant="info" title="Mẹo cho Người ăn Chay">
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
        <h2 className="heading-2">Ví dụ Bữa ăn với Đủ protein</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa sáng (~20g protein)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 2 quả trứng (12g) + 1 lát bánh mì nguyên cám + rau</li>
              <li>• Sữa chua (10g) + yến mạch + quả hạch (6g) + trái cây</li>
              <li>• <strong>Đậu phụ xào (12g) + rau + cơm</strong> - Món ăn Việt Nam phổ biến</li>
              <li>• <strong>Cháo thịt gà (15g) + rau thơm</strong> - Bữa sáng Việt Nam</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa trưa (~25g protein)</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Thịt gà nạc 100g (31g) + rau + cơm</li>
              <li>• <strong>Cá kho tộ 100g (25g) + rau muống luộc + cơm</strong> - Món ăn Việt Nam</li>
              <li>• <strong>Canh chua cá (20g) + cơm + rau</strong> - Protein từ cá trong canh</li>
              <li>• Đậu đen 150g (10g) + gạo lứt + rau + quả hạch (7g)</li>
              <li>• <strong>Tôm rang me 100g (24g) + rau + cơm</strong> - Protein từ tôm</li>
              <li>• <strong>Cua rang me 100g (18g) + rau + cơm</strong> - Protein từ cua</li>
              <li>• <strong>Ốc xào 100g (16g) + rau + cơm</strong> - Protein từ ốc</li>
              <li>• <strong>Chả giò (2 cuốn) (16g) + rau + cơm</strong> - Protein từ chả</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa tối (~25g protein)</h3>
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

      {/* Application in Vietnamese meals */}
      <section className="space-y-4">
        <h2 className="heading-2">Áp dụng trong Bữa ăn Việt Nam</h2>
        <Card className="border-green-200 bg-green-50/30">
          <h3 className="heading-4 mb-3">Nguyên tắc cơ bản</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Mỗi bữa nên có 1 món đạm vừa phải</strong> - không cần quá nhiều, chỉ cần đủ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không cần bữa nào cũng ăn nhiều thịt</strong> - có thể thay bằng cá, đậu phụ, trứng
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người già, người bệnh → ưu tiên đạm dễ tiêu</strong> - cá, trứng, đậu phụ tốt hơn thịt đỏ
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="heading-4 mb-3">Ví dụ Bữa ăn Việt Nam Cân bằng</h3>
          <div className="space-y-3">
            <div className="border-l-4 border-green-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">Bữa trưa mẫu:</p>
              <p className="text-sm text-gray-700">
                1/2 bát cơm + <strong>cá kho tộ (100g = ~20g đạm)</strong> + canh chua + rau muống luộc
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">Bữa tối mẫu:</p>
              <p className="text-sm text-gray-700">
                1/2 bát cơm + <strong>đậu phụ sốt cà chua (150g = ~12g đạm)</strong> + thịt gà kho (50g = ~11g đạm) + rau xào
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-gray-900 mb-1">Cho người cao tuổi:</p>
              <p className="text-sm text-gray-700">
                Cháo cá (dễ tiêu) + <strong>trứng luộc (2 quả = ~12g đạm)</strong> + rau luộc mềm
              </p>
            </div>
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
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
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
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/macronutrients-overview">
            <h3 className="heading-5 mb-2">Tổng quan về các Chất dinh dưỡng Đa lượng</h3>
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
            <h3 className="heading-5 mb-2">Hiểu về Portion sizes</h3>
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

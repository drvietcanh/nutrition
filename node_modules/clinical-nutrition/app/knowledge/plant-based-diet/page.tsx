import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { NutrientTable } from "../../components/NutrientTable";
import { Leaf, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Plant-based Diet: Hướng dẫn",
  description:
    "Hướng dẫn về chế độ ăn dựa trên thực vật (plant-based diet). Lợi ích, thách thức, và cách đảm bảo đủ dinh dưỡng.",
  keywords: [
    "plant-based diet",
    "ăn chay",
    "vegetarian",
    "vegan",
    "thực vật",
    "protein thực vật",
  ],
};

export default function PlantBasedDietPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề Đặc biệt", href: "/knowledge/special-topics" },
          { label: "Plant-based Diet" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Plant-based Diet: Hướng dẫn</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chế độ ăn dựa trên thực vật (plant-based diet) tập trung vào thực phẩm từ thực vật như 
          rau củ, trái cây, ngũ cốc, đậu, quả hạch. Với kế hoạch đúng, chế độ ăn này có thể cung cấp 
          đủ dinh dưỡng và có lợi cho sức khỏe.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Plant-based</strong> = Ưu tiên thực phẩm từ thực vật, không nhất thiết loại bỏ hoàn toàn động vật
          </li>
          <li>
            <strong>Lợi ích:</strong> Có thể giảm nguy cơ bệnh tim, đái tháo đường, một số ung thư
          </li>
          <li>
            <strong>Thách thức:</strong> Cần chú ý đến protein, B12, sắt, canxi, omega-3
          </li>
          <li>
            <strong>Kết hợp đúng:</strong> Đậu + gạo, đậu + ngũ cốc tạo protein hoàn chỉnh
          </li>
          <li>
            <strong>Bổ sung:</strong> Có thể cần bổ sung B12, vitamin D, omega-3
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Plant-based Diet là gì?</h2>
        <Card>
          <h3 className="heading-4 mb-3">Các Loại Chế độ Ăn Dựa trên Thực vật</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Plant-based (Linh hoạt):</strong> Ưu tiên thực vật, nhưng vẫn có thể ăn một ít thịt, cá, sữa
            </p>
            <p>
              <strong>Vegetarian (Ăn chay):</strong> Không ăn thịt, cá, nhưng có thể ăn trứng, sữa
            </p>
            <p>
              <strong>Vegan (Thuần chay):</strong> Không ăn bất kỳ sản phẩm động vật nào (thịt, cá, trứng, sữa, mật ong)
            </p>
            <p>
              <strong>Pescatarian:</strong> Ăn chay + cá
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Lợi ích Sức khỏe</h2>
        <Card>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích Tiềm năng:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giảm nguy cơ bệnh tim</li>
                <li>• Giảm nguy cơ đái tháo đường type 2</li>
                <li>• Giảm nguy cơ một số ung thư</li>
                <li>• Giảm huyết áp</li>
                <li>• Quản lý cân nặng tốt hơn</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Lý do:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nhiều chất xơ</li>
                <li>• Ít chất béo bão hòa</li>
                <li>• Nhiều chất chống oxy hóa</li>
                <li>• Nhiều vitamin và khoáng chất</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thách thức Dinh dưỡng và Cách Giải quyết</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Protein</h3>
            <p className="text-body-sm mb-3">
              Protein thực vật thường thiếu một số axit amin. Giải pháp: Kết hợp nhiều loại.
            </p>
            <NutrientTable
              rows={[
                { nutrient: "Đậu + Gạo", amount: "Protein hoàn chỉnh", note: "Ví dụ: Cơm + đậu đen" },
                { nutrient: "Đậu + Ngũ cốc", amount: "Protein hoàn chỉnh", note: "Ví dụ: Đậu lăng + bánh mì" },
                { nutrient: "Đậu phụ + Rau", amount: "Đủ axit amin", note: "Đậu phụ có protein tốt" },
                { nutrient: "Quả hạch + Ngũ cốc", amount: "Bổ sung nhau", note: "Ví dụ: Bánh mì + bơ đậu phộng" },
              ]}
            />
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Vitamin B12</h3>
            <p className="text-body-sm mb-3">
              B12 chỉ có trong thực phẩm động vật. Người ăn chay/vegan cần bổ sung.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Nguồn cho Vegetarian:</strong> Trứng, sữa, sữa chua
              </p>
              <p>
                <strong>Cho Vegan:</strong> Cần bổ sung B12 (250-500mcg/ngày) hoặc thực phẩm tăng cường B12
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Sắt</h3>
            <p className="text-body-sm mb-3">
              Sắt thực vật (non-heme) khó hấp thu hơn sắt động vật. Giải pháp: Kết hợp với vitamin C.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Nguồn:</strong> Đậu, đậu lăng, rau xanh đậm, ngũ cốc tăng cường
              </p>
              <p>
                <strong>Mẹo:</strong> Ăn thực phẩm giàu sắt cùng với thực phẩm giàu vitamin C 
                (ví dụ: Đậu + ớt chuông) để hấp thu tốt hơn
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">4. Canxi</h3>
            <p className="text-body-sm mb-3">
              Người ăn chay có thể lấy từ sữa. Người vegan cần nguồn khác.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Nguồn:</strong> Sữa, sữa chua (vegetarian), đậu phụ, rau xanh đậm, 
                sữa thực vật tăng cường (vegan)
              </p>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">5. Omega-3</h3>
            <p className="text-body-sm mb-3">
              Omega-3 từ cá là tốt nhất. Người ăn chay/vegan cần nguồn khác.
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Nguồn:</strong> Hạt chia, hạt lanh, quả óc chó, dầu hạt lanh
              </p>
              <p>
                <strong>Lưu ý:</strong> Có thể cần bổ sung DHA/EPA (từ tảo) nếu không ăn cá
              </p>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Plant-based</h2>
        <Card>
          <h3 className="heading-4 mb-3">Bữa Trưa Đầy đủ Dinh dưỡng</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Đậu đen + Gạo lứt</p>
                <p className="text-sm text-gray-700">Protein hoàn chỉnh, carbohydrate, chất xơ</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Rau xanh đậm (rau chân vịt, bông cải)</p>
                <p className="text-sm text-gray-700">Sắt, canxi, folate, vitamin C</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Ớt chuông, cà chua</p>
                <p className="text-sm text-gray-700">Vitamin C (giúp hấp thu sắt)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900">Dầu ô liu</p>
                <p className="text-sm text-gray-700">Chất béo lành mạnh</p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips Thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp protein:</strong> Đậu + gạo, đậu + ngũ cốc để có protein hoàn chỉnh
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bổ sung B12:</strong> Nếu ăn chay/vegan, đảm bảo bổ sung B12
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp sắt + vitamin C:</strong> Ăn thực phẩm giàu sắt cùng với vitamin C
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Đa dạng:</strong> Ăn đa dạng thực phẩm thực vật để có đủ dinh dưỡng
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
              <p className="text-sm font-semibold mb-1">"Ăn chay/vegan luôn lành mạnh"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể ăn chay/vegan không lành mạnh nếu chỉ ăn đồ chế biến sẵn, 
                nhiều đường, ít rau củ. Quan trọng là chất lượng thực phẩm.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Không thể đủ protein từ thực vật"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Có thể đủ protein nếu kết hợp đúng (đậu + gạo, đậu + ngũ cốc).
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Cần ăn nhiều đậu phụ mỗi ngày"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đa dạng nguồn protein tốt hơn. Đậu, đậu lăng, quả hạch, 
                ngũ cốc đều có protein.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/protein-sources-needs">
            <h3 className="heading-5 mb-2">Protein: Nguồn và Nhu cầu</h3>
            <p className="text-sm text-gray-600">
              Hiểu về protein thực vật
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/vitamin-b12-energy">
            <h3 className="heading-5 mb-2">Vitamin B12 và Năng lượng</h3>
            <p className="text-sm text-gray-600">
              Quan trọng cho người ăn chay/vegan
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Cách hấp thu sắt từ thực vật tốt hơn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Chế độ ăn dựa trên thực vật có thể lành mạnh, 
          nhưng cần kế hoạch cẩn thận để đảm bảo đủ dinh dưỡng. Nếu bạn đang cân nhắc chuyển sang 
          chế độ ăn chay/vegan, đặc biệt nếu bạn có bệnh lý đặc biệt, hãy tham khảo chuyên gia dinh dưỡng 
          để được tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Moon, CheckCircle2, AlertCircle, Clock } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người Làm Ca Đêm",
  description:
    "Cách ăn uống khi làm ca đêm, quản lý giấc ngủ và dinh dưỡng. Timeline bữa ăn cho ca đêm. Tips thực hành để giữ sức khỏe khi làm ca đêm.",
  keywords: [
    "ca đêm",
    "night shift",
    "giấc ngủ",
    "timeline bữa ăn",
    "làm ca đêm",
  ],
};

export default function NutritionNightShiftPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chủ đề đặc biệt", href: "/knowledge/special-topics" },
          { label: "Dinh dưỡng cho Người Làm Ca Đêm" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Moon className="w-8 h-8 text-indigo-600" aria-hidden="true" />
          <h1 className="heading-1">Dinh dưỡng cho Người Làm Ca Đêm</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Làm ca đêm thay đổi nhịp sinh học và cách ăn uống. Tìm hiểu cách ăn uống lành mạnh khi làm ca đêm, 
          quản lý giấc ngủ, và giữ sức khỏe tốt.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Timeline bữa ăn:</strong> Ăn bữa chính trước ca đêm, snack nhẹ trong ca, bữa nhẹ sau ca
          </li>
          <li>
            <strong>Tránh:</strong> Caffeine, đồ ngọt, đồ nhiều chất béo trong ca đêm
          </li>
          <li>
            <strong>Giấc ngủ:</strong> Thực phẩm giúp ngủ tốt sau ca đêm (sữa, chuối, yến mạch)
          </li>
          <li>
            <strong>Hydration:</strong> Uống đủ nước, nhưng giảm nước trước khi ngủ
          </li>
          <li>
            <strong>Bữa ăn:</strong> Bữa chính trước ca, snack nhẹ trong ca, bữa nhẹ sau ca
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Timeline Bữa ăn Cho Ca Đêm</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Ví dụ: Ca Đêm 22:00 - 6:00</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">18:00 - Bữa Chính Trước Ca</p>
                  <p className="text-sm text-gray-700">
                    Ăn bữa chính đầy đủ trước khi bắt đầu ca. Ví dụ: Cơm + thịt/cá + rau + canh. 
                    Cung cấp năng lượng cho cả ca đêm.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">00:00 - Snack Nhẹ Giữa Ca</p>
                  <p className="text-sm text-gray-700">
                    Snack nhẹ, dễ tiêu. Ví dụ: Bánh mì + thịt, trứng luộc, chuối, sữa chua. 
                    Tránh đồ ngọt, caffeine.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">03:00 - Snack Nhẹ (Nếu Cần)</p>
                  <p className="text-sm text-gray-700">
                    Snack nhẹ nếu đói. Ví dụ: Trái cây, sữa chua, bánh mì nhỏ. 
                    Tránh đồ nhiều chất béo, khó tiêu.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900 mb-1">6:30 - Bữa Nhẹ Sau Ca</p>
                  <p className="text-sm text-gray-700">
                    Bữa nhẹ trước khi ngủ. Ví dụ: Sữa ấm, chuối, yến mạch. 
                    Thực phẩm giúp ngủ tốt, không quá no.
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Thực tế">
            <p className="mb-2">
              <strong>18:00 - Bữa chính:</strong> Cơm + thịt gà kho + rau + canh (600 calo, 30g protein)
            </p>
            <p className="mb-2">
              <strong>00:00 - Snack:</strong> Bánh mì + thịt (300 calo, 15g protein)
            </p>
            <p className="mb-2">
              <strong>6:30 - Bữa nhẹ:</strong> Sữa ấm + chuối (200 calo, 8g protein)
            </p>
            <p>
              <strong>Tổng:</strong> 1,100 calo, 53g protein - Đủ cho ca đêm, không quá no trước khi ngủ.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Nên tránh Khi Làm Ca Đêm</h2>
        <Card className="border-red-200 bg-red-50">
          <h3 className="heading-4 text-red-900 mb-3">Tránh Trong Ca Đêm</h3>
          <div className="space-y-2 text-sm text-red-900">
            <p>
              <strong>Caffeine:</strong> Cà phê, trà, nước ngọt có caffeine - làm khó ngủ sau ca. 
              Nếu cần, chỉ uống đầu ca, không uống cuối ca.
            </p>
            <p>
              <strong>Đồ ngọt:</strong> Bánh kẹo, nước ngọt - làm tăng đường huyết nhanh, sau đó giảm nhanh, 
              gây mệt mỏi. Không tốt cho năng lượng ổn định.
            </p>
            <p>
              <strong>Đồ nhiều chất béo:</strong> Đồ chiên, đồ nhiều mỡ - khó tiêu, làm mệt mỏi, 
              không tốt cho ca đêm.
            </p>
            <p>
              <strong>Đồ quá no:</strong> Bữa ăn quá lớn - khó tiêu, làm mệt mỏi, khó tập trung.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thực phẩm Tốt Cho Ca Đêm</h2>
        <Card className="border-green-200 bg-green-50">
          <h3 className="heading-4 text-green-900 mb-3">Lựa chọn Tốt</h3>
          <div className="space-y-2 text-sm text-green-900">
            <p>
              <strong>Bữa chính trước ca:</strong> Cơm + thịt/cá + rau + canh - cân bằng, đầy đủ dinh dưỡng, 
              cung cấp năng lượng ổn định.
            </p>
            <p>
              <strong>Snack trong ca:</strong> Bánh mì + thịt, trứng luộc, chuối, sữa chua - nhẹ, dễ tiêu, 
              cung cấp năng lượng.
            </p>
            <p>
              <strong>Bữa nhẹ sau ca:</strong> Sữa ấm, chuối, yến mạch - giúp ngủ tốt, không quá no.
            </p>
            <p>
              <strong>Nước:</strong> Nước lọc - giữ hydration, không ảnh hưởng giấc ngủ.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Quản lý Giấc Ngủ Sau Ca Đêm</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Thực phẩm Giúp Ngủ Tốt</h3>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                <strong>Sữa ấm:</strong> Chứa tryptophan, giúp ngủ tốt. Uống 1 cốc sữa ấm trước khi ngủ.
              </p>
              <p>
                <strong>Chuối:</strong> Chứa melatonin, magie - giúp ngủ tốt. Ăn 1 quả chuối trước khi ngủ.
              </p>
              <p>
                <strong>Yến mạch:</strong> Chứa melatonin - giúp ngủ tốt. Có thể ăn cháo yến mạch nhẹ.
              </p>
              <p>
                <strong>Tránh:</strong> Caffeine, đồ ngọt, đồ nhiều chất béo trước khi ngủ - làm khó ngủ.
              </p>
            </div>
          </Card>

          <ExampleBox variant="tip" title="Ví dụ Bữa Nhẹ Trước Khi Ngủ">
            <p className="mb-2">
              <strong>Sau ca đêm (6:30):</strong> Sữa ấm + chuối = Giúp ngủ tốt, không quá no.
            </p>
            <p>
              <strong>Tránh:</strong> Cà phê, bánh kẹo, đồ chiên - làm khó ngủ.
            </p>
          </ExampleBox>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Cách ăn Tốt vs Không Tốt</h2>
        <ComparisonCard
          goodTitle="Cách ăn Tốt"
          goodItems={[
            "Bữa chính trước ca: Cơm + thịt/cá + rau + canh - đầy đủ dinh dưỡng",
            "Snack trong ca: Bánh mì + thịt, trứng luộc - nhẹ, dễ tiêu",
            "Bữa nhẹ sau ca: Sữa ấm + chuối - giúp ngủ tốt",
            "Uống nước lọc - giữ hydration",
            "Tránh caffeine cuối ca - không ảnh hưởng giấc ngủ"
          ]}
          badTitle="Cách ăn Không Tốt"
          badItems={[
            "Bỏ bữa chính trước ca - thiếu năng lượng, mệt mỏi",
            "Snack nhiều cà phê, bánh kẹo - khó ngủ sau ca",
            "Bữa lớn sau ca - khó tiêu, khó ngủ",
            "Uống nhiều nước ngọt - nhiều đường, caffeine",
            "Caffeine cuối ca - khó ngủ, mệt mỏi"
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bữa chính trước ca:</strong> Ăn bữa chính đầy đủ 2-3 giờ trước khi bắt đầu ca. 
                Cung cấp năng lượng cho cả ca.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Snack nhẹ trong ca:</strong> Mang theo snack nhẹ (bánh mì, trứng, chuối) để ăn giữa ca. 
                Tránh đồ ngọt, caffeine.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Bữa nhẹ sau ca:</strong> Ăn bữa nhẹ trước khi ngủ (sữa ấm, chuối). 
                Không ăn quá no, không ăn đồ khó tiêu.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Tránh caffeine cuối ca:</strong> Không uống cà phê, trà cuối ca. 
                Chỉ uống đầu ca nếu cần.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống nước:</strong> Uống đủ nước trong ca, nhưng giảm nước 1-2 giờ trước khi ngủ 
                để không phải thức dậy đi vệ sinh.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chuẩn bị trước:</strong> Chuẩn bị bữa ăn và snack từ trước. 
                Không phải lo nghĩ khi mệt mỏi.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực tế: Một Ngày Làm Ca Đêm</h2>
        <Card>
          <h3 className="heading-4 mb-3">Timeline Bữa ăn</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-blue-900 mb-1">18:00 - Bữa Chính Trước Ca</p>
              <p className="text-sm text-blue-900">
                Cơm + thịt gà kho + rau + canh = 600 calo, 30g protein
              </p>
            </div>
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200">
              <p className="text-sm font-semibold text-amber-900 mb-1">00:00 - Snack Giữa Ca</p>
              <p className="text-sm text-amber-900">
                Bánh mì + thịt = 300 calo, 15g protein
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-purple-900 mb-1">6:30 - Bữa Nhẹ Sau Ca</p>
              <p className="text-sm text-purple-900">
                Sữa ấm + chuối = 200 calo, 8g protein
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200 mt-3">
              <p className="text-sm font-semibold text-green-900">
                Tổng: 1,100 calo, 53g protein - Đủ cho ca đêm, giúp ngủ tốt
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
              <p className="text-sm font-semibold mb-1">"Cần nhiều cà phê để tỉnh táo trong ca đêm"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Cà phê giúp tỉnh táo tạm thời nhưng làm khó ngủ sau ca. 
                Chỉ uống đầu ca nếu cần, không uống cuối ca.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Bỏ bữa chính trước ca để không buồn ngủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Bỏ bữa làm thiếu năng lượng, mệt mỏi, ảnh hưởng hiệu suất. 
                Ăn bữa chính trước ca là quan trọng.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Ăn nhiều sau ca để bù năng lượng"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ăn quá nhiều sau ca làm khó tiêu, khó ngủ. 
                Bữa nhẹ là đủ, không cần bữa lớn.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/nutrition-sleep">
            <h3 className="heading-5 mb-2">Dinh dưỡng và Giấc Ngủ</h3>
            <p className="text-sm text-gray-600">
              Mối liên hệ giữa dinh dưỡng và giấc ngủ
            </p>
          </Card>
          <Card href="/knowledge/nutrition-busy-lifestyle">
            <h3 className="heading-5 mb-2">Dinh dưỡng cho Người Bận rộn</h3>
            <p className="text-sm text-gray-600">
              Tips dinh dưỡng cho người có lịch trình đặc biệt
            </p>
          </Card>
          <Card href="/knowledge/calories-energy">
            <h3 className="heading-5 mb-2">Hiểu về Calo và năng lượng</h3>
            <p className="text-sm text-gray-600">
              Nhu cầu năng lượng cho người làm ca đêm
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Dinh dưỡng cho người làm ca đêm là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Mỗi người có lịch trình và nhu cầu khác nhau. 
          Nếu bạn có bệnh lý đặc biệt hoặc vấn đề về giấc ngủ, hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

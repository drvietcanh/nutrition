import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { ComparisonCard } from "../../components/ComparisonCard";
import { UtensilsCrossed, Apple, Wheat, Fish, Carrot, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cân bằng Bữa ăn: Đĩa ăn lành mạnh",
  description:
    "Hướng dẫn cách cân bằng bữa ăn với đĩa ăn lành mạnh. Visual guide với color coding để tạo bữa ăn đầy đủ dinh dưỡng.",
  keywords: [
    "cân bằng bữa ăn",
    "healthy plate",
    "meal balance",
    "dinh dưỡng",
    "bữa ăn lành mạnh",
  ],
};

export default function HealthyPlatePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Cân bằng Bữa ăn: Đĩa ăn lành mạnh" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">Cân bằng Bữa ăn: Đĩa ăn lành mạnh</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Cân bằng bữa ăn không phức tạp. Chỉ cần hiểu cách chia đĩa ăn của bạn thành các phần 
          phù hợp với các nhóm thực phẩm khác nhau. Đây là cách đơn giản để đảm bảo bạn nhận đủ 
          dinh dưỡng trong mỗi bữa ăn.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>1/2 đĩa</strong> nên là rau củ và trái cây (nhiều màu sắc)
          </li>
          <li>
            <strong>1/4 đĩa</strong> là protein (thịt nạc, cá, đậu, trứng)
          </li>
          <li>
            <strong>1/4 đĩa</strong> là carbohydrate (cơm, bánh mì, khoai tây)
          </li>
          <li>
            Thêm một ít chất béo lành mạnh (dầu ô liu, quả hạch)
          </li>
          <li>
            Uống nước thay vì đồ uống có đường
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Đĩa ăn lành mạnh là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Đĩa ăn lành mạnh</strong> (Healthy Plate) là một cách đơn giản để hình dung 
            cách chia bữa ăn của bạn. Thay vì đếm calo phức tạp, bạn chỉ cần nhìn vào đĩa và 
            đảm bảo các phần được chia đúng tỷ lệ.
          </p>

          <ExampleBox variant="info" title="Ví dụ đơn giản">
            <p>
              Hãy tưởng tượng đĩa ăn của bạn như một chiếc bánh được chia thành 4 phần:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>2 phần (1/2 đĩa) = Rau củ và trái cây</li>
              <li>1 phần (1/4 đĩa) = Protein</li>
              <li>1 phần (1/4 đĩa) = Carbohydrate</li>
            </ul>
            <p className="mt-2">
              Đơn giản vậy thôi! Không cần cân đo đong đếm phức tạp.
            </p>
          </ExampleBox>

          <Card>
            <h3 className="heading-4 mb-3">Cấu trúc Đĩa ăn lành mạnh</h3>
            <div className="space-y-4">
              <div className="rounded-lg border-2 border-green-200 bg-green-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Carrot className="w-5 h-5 text-green-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-green-900">1/2 Đĩa: Rau củ và Trái cây</h4>
                </div>
                <p className="text-sm text-green-900 mb-2">
                  Phần lớn nhất của đĩa nên là rau củ và trái cây. Chọn nhiều màu sắc khác nhau 
                  để có đa dạng vitamin và khoáng chất.
                </p>
                <p className="text-xs text-green-800">
                  <strong>Ví dụ:</strong> Rau xanh, cà chua, cà rốt, ớt chuông, dưa chuột, 
                  trái cây tươi
                </p>
              </div>

              <div className="rounded-lg border-2 border-blue-200 bg-blue-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Fish className="w-5 h-5 text-blue-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-blue-900">1/4 Đĩa: Protein</h4>
                </div>
                <p className="text-sm text-blue-900 mb-2">
                  Protein giúp xây dựng và sửa chữa cơ thể. Chọn protein nạc, ít chất béo.
                </p>
                <p className="text-xs text-blue-800">
                  <strong>Ví dụ:</strong> Thịt gà nạc, cá, thịt heo nạc, đậu, trứng, đậu phụ
                </p>
              </div>

              <div className="rounded-lg border-2 border-amber-200 bg-amber-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Wheat className="w-5 h-5 text-amber-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-amber-900">1/4 Đĩa: Carbohydrate</h4>
                </div>
                <p className="text-sm text-amber-900 mb-2">
                  Carbohydrate cung cấp năng lượng. Ưu tiên ngũ cốc nguyên cám.
                </p>
                <p className="text-xs text-amber-800">
                  <strong>Ví dụ:</strong> Cơm, bánh mì nguyên cám, khoai tây, mì ống, yến mạch
                </p>
              </div>

              <div className="rounded-lg border-2 border-purple-200 bg-purple-50 p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Apple className="w-5 h-5 text-purple-700" aria-hidden="true" />
                  <h4 className="text-sm font-semibold text-purple-900">Chất béo Lành mạnh</h4>
                </div>
                <p className="text-sm text-purple-900 mb-2">
                  Thêm một ít chất béo lành mạnh vào bữa ăn.
                </p>
                <p className="text-xs text-purple-800">
                  <strong>Ví dụ:</strong> Dầu ô liu, quả hạch, bơ, dầu cá
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Bữa ăn Cụ thể</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Bữa Trưa lành mạnh</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Carrot className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">1/2 Đĩa: Rau củ</p>
                  <p className="text-sm text-gray-700">
                    Rau xanh luộc, cà chua, dưa chuột, cà rốt
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">1/4 Đĩa: Protein</p>
                  <p className="text-sm text-gray-700">
                    Cá hồi nướng (100g) hoặc thịt gà nạc
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wheat className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">1/4 Đĩa: Carbohydrate</p>
                  <p className="text-sm text-gray-700">
                    Cơm trắng (1 bát) hoặc gạo lứt
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Apple className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">Chất béo</p>
                  <p className="text-sm text-gray-700">
                    Một ít dầu ô liu để trộn rau
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bữa Tối lành mạnh</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Carrot className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">1/2 Đĩa: Rau củ</p>
                  <p className="text-sm text-gray-700">
                    Salad rau xanh, cà chua, ớt chuông, bông cải xanh hấp
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Fish className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">1/4 Đĩa: Protein</p>
                  <p className="text-sm text-gray-700">
                    Thịt heo nạc nướng (100g) hoặc đậu phụ
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Wheat className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-gray-900">1/4 Đĩa: Carbohydrate</p>
                  <p className="text-sm text-gray-700">
                    Khoai tây nướng hoặc bánh mì nguyên cám
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">So sánh: Bữa ăn cân bằng vs Không Cân bằng</h2>
        <ComparisonCard
          title="Ví dụ So sánh"
          items={[
            {
              label: "Bữa trưa",
              good: "1/2 đĩa rau củ + 1/4 đĩa cá + 1/4 đĩa cơm + nước lọc",
              bad: "3/4 đĩa cơm + 1/4 đĩa thịt mỡ + ít rau + nước ngọt",
              note: "Bữa ăn cân bằng cung cấp đủ dinh dưỡng, bữa không cân bằng thiếu rau và có quá nhiều carbohydrate"
            },
            {
              label: "Bữa tối",
              good: "1/2 đĩa salad + 1/4 đĩa thịt gà nạc + 1/4 đĩa khoai tây + dầu ô liu",
              bad: "1/2 đĩa mì ống + 1/2 đĩa thịt mỡ + không có rau",
              note: "Bữa ăn cân bằng có đủ các nhóm thực phẩm, bữa không cân bằng thiếu rau và có quá nhiều một loại"
            },
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
                <strong>Bắt đầu với rau củ:</strong> Cho rau củ vào đĩa trước, chiếm 1/2 đĩa. 
                Điều này đảm bảo bạn ăn đủ rau.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn nhiều màu sắc:</strong> Rau củ và trái cây nhiều màu sắc cung cấp 
                nhiều loại vitamin và khoáng chất khác nhau.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Protein nạc:</strong> Chọn thịt nạc, cá, đậu thay vì thịt mỡ, đồ chiên.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ngũ cốc nguyên cám:</strong> Ưu tiên gạo lứt, bánh mì nguyên cám thay vì 
                gạo trắng, bánh mì trắng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Linh hoạt:</strong> Tỷ lệ này là hướng dẫn, không phải quy tắc cứng nhắc. 
                Điều chỉnh theo nhu cầu của bạn.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Điều chỉnh theo Nhu cầu</h2>
        <Card>
          <h3 className="heading-4 mb-3">Khi nào cần điều chỉnh?</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Người tập thể dục nhiều:</strong> Có thể cần nhiều carbohydrate hơn (1/3 đĩa) 
              để có đủ năng lượng.
            </p>
            <p>
              <strong>Người muốn giảm cân:</strong> Có thể tăng rau củ lên 2/3 đĩa, giảm carbohydrate 
              xuống 1/6 đĩa.
            </p>
            <p>
              <strong>Người cần nhiều protein:</strong> Có thể tăng protein lên 1/3 đĩa (ví dụ: 
              người cao tuổi, người tập thể dục).
            </p>
            <p>
              <strong>Người có bệnh đái tháo đường:</strong> Cần chú ý đến carbohydrate, có thể 
              cần điều chỉnh theo hướng dẫn của bác sĩ.
            </p>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Phải chia đúng 1/2, 1/4, 1/4 mỗi bữa"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Đây là hướng dẫn, không phải quy tắc cứng nhắc. 
                Quan trọng là đảm bảo đủ các nhóm thực phẩm trong ngày, không nhất thiết mỗi bữa.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Rau củ không quan trọng, chỉ cần protein và carb"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Rau củ cung cấp vitamin, khoáng chất, chất xơ quan trọng 
                mà protein và carb không có đủ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Carbohydrate làm tăng cân, nên tránh"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Carbohydrate là nguồn năng lượng chính. Vấn đề là loại và 
                lượng carbohydrate, không phải carbohydrate nói chung.
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
              Hiểu về carbohydrate, protein, và chất béo
            </p>
          </Card>
          <Card href="/knowledge/meal-planning">
            <h3 className="heading-5 mb-2">Lập Kế hoạch Bữa ăn</h3>
            <p className="text-sm text-gray-600">
              Cách lập kế hoạch bữa ăn cân bằng
            </p>
          </Card>
          <Card href="/knowledge/portion-sizes">
            <h3 className="heading-5 mb-2">Hiểu về Portion Sizes</h3>
            <p className="text-sm text-gray-600">
              Cách ước lượng khẩu phần đúng
            </p>
          </Card>
          <Card href="/knowledge/healthy-cooking-methods">
            <h3 className="heading-5 mb-2">Phương pháp Nấu ăn lành mạnh</h3>
            <p className="text-sm text-gray-600">
              Cách nấu ăn giữ được dinh dưỡng
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Đĩa ăn Lành mạnh là hướng dẫn chung, 
          không phải quy tắc cứng nhắc. Nhu cầu dinh dưỡng của mỗi người khác nhau tùy theo tuổi, 
          giới tính, hoạt động, và tình trạng sức khỏe. Nếu bạn có bệnh lý đặc biệt hoặc cần 
          chế độ ăn đặc biệt, hãy tham khảo chuyên gia dinh dưỡng.
        </p>
      </Callout>
    </main>
  );
}

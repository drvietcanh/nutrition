import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { TrendingUp, Apple, AlertCircle, Lightbulb } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Chỉ số Đường huyết (GI) và Tải lượng Đường huyết (GL)",
  description:
    "Hiểu về chỉ số đường huyết (GI) và tải lượng đường huyết (GL) - cách thực phẩm ảnh hưởng đến đường huyết và cách áp dụng trong dinh dưỡng lâm sàng.",
  keywords: [
    "chỉ số đường huyết",
    "glycemic index",
    "tải lượng đường huyết",
    "glycemic load",
    "đái tháo đường",
    "đường huyết",
    "carbohydrate",
  ],
};

export default function GlycemicIndexLoadPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chỉ số Đường huyết (GI) và Tải lượng Đường huyết (GL)" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Chỉ số Đường huyết (GI) và Tải lượng Đường huyết (GL)
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Khi bạn ăn thực phẩm có carbohydrate (tinh bột, đường), đường huyết sẽ tăng. 
          Nhưng không phải tất cả thực phẩm đều làm tăng đường huyết giống nhau. 
          GI và GL giúp chúng ta hiểu và so sánh điều này.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>GI (Glycemic Index)</strong> đo tốc độ thực phẩm làm tăng đường huyết
          </li>
          <li>
            <strong>GL (Glycemic Load)</strong> tính cả tốc độ và lượng carbohydrate trong khẩu phần
          </li>
          <li>Thực phẩm có GI thấp giúp đường huyết tăng chậm và ổn định hơn</li>
          <li>GL hữu ích hơn trong thực tế vì tính đến cả lượng ăn vào</li>
        </ul>
      </Callout>

      {/* What is GI */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Apple className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Chỉ số Đường huyết (GI) là gì?
        </h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chỉ số Đường huyết (Glycemic Index - GI)</strong> là một con số từ 0 đến 100 
            cho biết tốc độ một loại thực phẩm làm tăng đường huyết sau khi ăn.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-green-600">0-55</span>
                </div>
                <h3 className="heading-5 mb-2">GI Thấp</h3>
                <p className="text-sm text-gray-600">
                  Đường huyết tăng chậm, ổn định. Tốt cho sức khỏe.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Ví dụ: Yến mạch, đậu, táo
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-yellow-600">56-69</span>
                </div>
                <h3 className="heading-5 mb-2">GI Trung bình</h3>
                <p className="text-sm text-gray-600">
                  Đường huyết tăng vừa phải.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Ví dụ: Gạo lứt, khoai lang
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-red-600">70+</span>
                </div>
                <h3 className="heading-5 mb-2">GI Cao</h3>
                <p className="text-sm text-gray-600">
                  Đường huyết tăng nhanh, có thể gây dao động lớn.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Ví dụ: Bánh mì trắng, đường, gạo trắng
                </p>
              </div>
            </Card>
          </div>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 mt-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Nếu bạn ăn một miếng bánh mì trắng (GI cao), 
              đường huyết sẽ tăng nhanh như một chiếc xe chạy nhanh lên dốc. 
              Nhưng nếu bạn ăn một quả táo (GI thấp), đường huyết sẽ tăng từ từ, 
              như một chiếc xe đi chậm và ổn định.
            </p>
          </div>
        </div>
      </section>

      {/* What is GL */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <TrendingUp className="w-6 h-6 text-green-600" aria-hidden="true" />
          Tải lượng Đường huyết (GL) là gì?
        </h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Tải lượng Đường huyết (Glycemic Load - GL)</strong> tính đến cả{" "}
            <strong>tốc độ</strong> (GI) và <strong>lượng</strong> carbohydrate trong khẩu phần bạn ăn.
          </p>

          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <p className="text-sm font-medium text-gray-900 mb-2">Công thức tính GL:</p>
            <p className="text-base font-mono bg-white p-3 rounded border border-gray-300">
              GL = (GI × Lượng carbohydrate trong khẩu phần) ÷ 100
            </p>
          </div>

          <div className="space-y-3">
            <p className="text-body">
              <strong>Tại sao GL quan trọng hơn GI?</strong>
            </p>
            <div className="space-y-2 text-sm text-gray-700">
              <p>
                Ví dụ: Dưa hấu có GI cao (72), nhưng một miếng dưa hấu nhỏ chỉ chứa khoảng 6g carbohydrate. 
                GL của nó chỉ là 4 (thấp). Điều này có nghĩa là ăn một miếng dưa hấu nhỏ sẽ không làm 
                đường huyết tăng nhiều như bạn nghĩ.
              </p>
              <p>
                Ngược lại, một bát cơm trắng có GI trung bình (73) nhưng chứa nhiều carbohydrate (45g), 
                nên GL của nó là 33 (cao). Điều này có nghĩa là nó sẽ làm đường huyết tăng nhiều hơn.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-green-600">0-10</span>
                </div>
                <h3 className="heading-5 mb-2">GL Thấp</h3>
                <p className="text-sm text-gray-600">
                  Tốt cho sức khỏe, đặc biệt người đái tháo đường
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-yellow-600">11-19</span>
                </div>
                <h3 className="heading-5 mb-2">GL Trung bình</h3>
                <p className="text-sm text-gray-600">
                  Có thể ăn với lượng vừa phải
                </p>
              </div>
            </Card>

            <Card>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-red-600">20+</span>
                </div>
                <h3 className="heading-5 mb-2">GL Cao</h3>
                <p className="text-sm text-gray-600">
                  Nên hạn chế, đặc biệt người đái tháo đường
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Important */}
      <section className="space-y-4">
        <h2 className="heading-2">Tại sao GI và GL quan trọng trong Dinh dưỡng Lâm sàng?</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Quản lý Đái tháo đường</h3>
            <p className="text-body mb-3">
              Đối với người đái tháo đường, việc giữ đường huyết ổn định là rất quan trọng. 
              Thực phẩm có GI/GL thấp giúp:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
              <li>Đường huyết tăng chậm và ổn định hơn</li>
              <li>Giảm nguy cơ đường huyết tăng đột ngột</li>
              <li>Có thể giúp kiểm soát HbA1c tốt hơn</li>
              <li>Giảm cảm giác đói và thèm ăn</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Sức khỏe Tim mạch</h3>
            <p className="text-body">
              Chế độ ăn với nhiều thực phẩm GI thấp có thể giúp giảm nguy cơ bệnh tim mạch 
              và cải thiện các chỉ số lipid máu.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Quản lý Cân nặng</h3>
            <p className="text-body">
              Thực phẩm GI thấp thường giúp bạn cảm thấy no lâu hơn, có thể hỗ trợ 
              quản lý cân nặng và giảm cảm giác thèm ăn.
            </p>
          </Card>
        </div>
      </section>

      {/* Practical Application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách Áp dụng trong Thực tế
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Mẹo chọn thực phẩm</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Chọn thực phẩm nguyên cám:</strong> Gạo lứt thay vì gạo trắng, 
                  bánh mì nguyên cám thay vì bánh mì trắng
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Ăn nhiều rau và đậu:</strong> Chúng thường có GI thấp và nhiều chất xơ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">✓</span>
                <span>
                  <strong>Kết hợp với protein và chất béo:</strong> Giúp làm chậm hấp thu đường
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-0.5">✗</span>
                <span>
                  <strong>Hạn chế:</strong> Đường tinh luyện, nước ngọt, bánh kẹo, 
                  thực phẩm chế biến sẵn
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Ví dụ bữa ăn</h3>
            <div className="space-y-3">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="font-medium text-gray-900 mb-1">Bữa ăn tốt (GL thấp):</p>
                <p className="text-sm text-gray-700">
                  Cơm gạo lứt + thịt gà + rau xanh + đậu phụ. 
                  Tổng GL khoảng 15-20.
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-medium text-gray-900 mb-1">Bữa ăn cần cẩn thận (GL cao):</p>
                <p className="text-sm text-gray-700">
                  Cơm trắng nhiều + khoai tây chiên + nước ngọt. 
                  Tổng GL có thể trên 40.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Limitations */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Hạn chế và Lưu ý
        </h2>
        <Callout variant="warning" title="Điều quan trọng cần nhớ">
          <ul className="space-y-2 text-sm">
            <li>
              <strong>GI/GL không phải là tất cả:</strong> Chỉ là một công cụ hỗ trợ, 
              không phải quy tắc tuyệt đối. Cần xem xét toàn bộ chế độ ăn.
            </li>
            <li>
              <strong>Kết hợp với các yếu tố khác:</strong> Lượng ăn vào, cách chế biến, 
              thời gian ăn, và các thực phẩm khác trong bữa ăn đều ảnh hưởng.
            </li>
            <li>
              <strong>Mỗi người khác nhau:</strong> Phản ứng đường huyết có thể khác nhau 
              giữa các cá nhân. Cần theo dõi và điều chỉnh.
            </li>
            <li>
              <strong>Không chỉ dựa vào GI/GL:</strong> Cần xem xét giá trị dinh dưỡng tổng thể, 
              không chỉ GI/GL.
            </li>
          </ul>
        </Callout>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/diabetes-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Đái tháo đường</h3>
            <p className="text-sm text-gray-600">
              Tìm hiểu thêm về cách quản lý dinh dưỡng cho người đái tháo đường
            </p>
          </Card>
          <Card href="/knowledge/needs-estimation">
            <h3 className="heading-5 mb-2">Ước tính Nhu cầu Dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Hiểu cách ước tính nhu cầu dinh dưỡng tổng thể
            </p>
          </Card>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Không thay thế tư vấn y tế. 
          Nếu bạn có đái tháo đường hoặc các vấn đề sức khỏe khác, hãy tham khảo ý kiến 
          của chuyên gia dinh dưỡng hoặc bác sĩ để có kế hoạch ăn uống phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

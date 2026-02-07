import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { Leaf, Heart, Lightbulb, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Chất xơ trong Dinh dưỡng Lâm sàng",
  description:
    "Tìm hiểu về chất xơ - chất xơ hòa tan và không hòa tan, lợi ích sức khỏe, nhu cầu, nguồn thực phẩm, và cách áp dụng trong dinh dưỡng lâm sàng.",
  keywords: [
    "chất xơ",
    "dietary fiber",
    "chất xơ hòa tan",
    "chất xơ không hòa tan",
    "tiêu hóa",
    "đái tháo đường",
    "tim mạch",
  ],
};

export default function DietaryFiberPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chất xơ trong Dinh dưỡng Lâm sàng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Leaf className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Chất xơ trong Dinh dưỡng Lâm sàng
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chất xơ là một phần quan trọng của chế độ ăn lành mạnh, nhưng nhiều người không ăn đủ. 
          Tìm hiểu về các loại chất xơ, lợi ích sức khỏe, và cách tăng lượng chất xơ trong chế độ ăn.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất xơ hòa tan</strong> - giúp giảm cholesterol và ổn định đường huyết
          </li>
          <li>
            <strong>Chất xơ không hòa tan</strong> - giúp tiêu hóa và ngăn ngừa táo bón
          </li>
          <li>Nhu cầu: 25-30g/ngày cho người lớn</li>
          <li>Nguồn tốt: rau, trái cây, ngũ cốc nguyên cám, đậu</li>
        </ul>
      </Callout>

      {/* What is Fiber */}
      <section className="space-y-4">
        <h2 className="heading-2">Chất xơ là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Chất xơ</strong> là phần của thực vật mà cơ thể chúng ta không thể tiêu hóa. 
            Không giống như các chất dinh dưỡng khác (protein, carbohydrate, chất béo) được hấp thu, 
            chất xơ đi qua hệ tiêu hóa và có nhiều tác dụng quan trọng.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Khi bạn ăn một quả táo, phần thịt táo được tiêu hóa 
              và hấp thu, nhưng phần vỏ và chất xơ trong táo đi qua ruột và giúp làm sạch, 
              giống như một cây chổi quét dọn đường ruột.
            </p>
          </div>
        </div>
      </section>

      {/* Types of Fiber */}
      <section className="space-y-6">
        <h2 className="heading-2">Hai Loại Chất xơ Chính</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Soluble Fiber */}
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-3 text-blue-900 mb-3">Chất xơ Hòa tan</h3>
            <p className="text-body text-blue-900 mb-4">
              Hòa tan trong nước, tạo thành gel trong ruột. Giúp làm chậm tiêu hóa và hấp thu.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm cholesterol xấu (LDL)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ổn định đường huyết (tốt cho đái tháo đường)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp cảm thấy no lâu hơn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ sức khỏe tim mạch</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn thực phẩm:</p>
                <p className="text-xs text-gray-700">
                  Yến mạch, lúa mạch, đậu, đậu lăng, táo, cam, cà rốt, 
                  bông cải xanh, quả bơ
                </p>
              </div>
            </div>
          </Card>

          {/* Insoluble Fiber */}
          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-3 text-green-900 mb-3">Chất xơ Không hòa tan</h3>
            <p className="text-body text-green-900 mb-4">
              Không hòa tan trong nước, giúp thức ăn di chuyển nhanh hơn qua hệ tiêu hóa.
            </p>

            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ngăn ngừa và điều trị táo bón</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp phân mềm và dễ đi ngoài</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm nguy cơ bệnh trĩ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ sức khỏe đường ruột</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-1">Nguồn thực phẩm:</p>
                <p className="text-xs text-gray-700">
                  Gạo lứt, bánh mì nguyên cám, các loại hạt, rau xanh, 
                  cà rốt, cà chua, dưa chuột
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="rounded-lg border border-gray-200 bg-gray-50 p-4">
          <p className="text-sm text-gray-700">
            <strong>Lưu ý:</strong> Hầu hết thực phẩm chứa cả hai loại chất xơ, 
            nhưng một số có nhiều loại này hơn loại kia. Điều quan trọng là ăn đa dạng 
            các thực phẩm giàu chất xơ để nhận được cả hai loại.
          </p>
        </div>
      </section>

      {/* Health Benefits */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-red-600" aria-hidden="true" />
          Lợi ích Sức khỏe của Chất xơ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Tim mạch</h3>
            <p className="text-body-sm">
              Chất xơ hòa tan giúp giảm cholesterol xấu (LDL), từ đó giảm nguy cơ bệnh tim 
              và đột quỵ. Ăn đủ chất xơ có thể giảm nguy cơ bệnh tim đến 30%.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quản lý Đái tháo đường</h3>
            <p className="text-body-sm">
              Chất xơ làm chậm hấp thu đường, giúp đường huyết tăng chậm và ổn định hơn. 
              Điều này đặc biệt quan trọng cho người đái tháo đường.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Sức khỏe Tiêu hóa</h3>
            <p className="text-body-sm">
              Chất xơ giúp ngăn ngừa táo bón, giảm nguy cơ bệnh trĩ, và có thể giảm nguy cơ 
              ung thư đại tràng. Nó cũng hỗ trợ vi khuẩn tốt trong ruột.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Quản lý Cân nặng</h3>
            <p className="text-body-sm">
              Thực phẩm giàu chất xơ thường ít calo hơn và giúp bạn cảm thấy no lâu hơn, 
              hỗ trợ quản lý cân nặng.
            </p>
          </Card>
        </div>
      </section>

      {/* How Much Fiber */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên Ăn Bao nhiêu Chất xơ?</h2>
        <Card>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nam giới</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">30-38g/ngày</p>
                <p className="text-xs text-gray-600">Tùy theo tuổi và mức độ hoạt động</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Nữ giới</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">21-25g/ngày</p>
                <p className="text-xs text-gray-600">Tùy theo tuổi và mức độ hoạt động</p>
              </div>
            </div>

            <ExampleBox title="Ví dụ thực tế để đạt 25g chất xơ/ngày" className="mt-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-700">
                  <strong>1 bát yến mạch</strong> (4g) + <strong>1 quả táo</strong> (4g) + 
                  <strong>1 bát đậu</strong> (8g) + <strong>1 bát rau xanh</strong> (5g) + 
                  <strong>1 lát bánh mì nguyên cám</strong> (2g) + <strong>1 quả chuối</strong> (3g)
                </p>
                <p className="text-sm font-semibold text-green-700">
                  = 26g chất xơ (đạt mục tiêu!)
                </p>
              </div>
            </ExampleBox>
          </div>
        </Card>
      </section>

      {/* Practical Tips */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách Tăng Lượng Chất xơ trong Chế độ Ăn
        </h2>
        <div className="space-y-4">
          <TipCard
            title="Mẹo tăng chất xơ"
            tips={[
              "Bắt đầu từ từ: Tăng dần lượng chất xơ để cơ thể quen dần. Tăng đột ngột có thể gây đầy hơi, chướng bụng",
              "Uống nhiều nước: Chất xơ cần nước để hoạt động tốt. Nên uống ít nhất 8 ly nước/ngày",
              "Ăn trái cây và rau cả vỏ: Vỏ thường chứa nhiều chất xơ (như táo, khoai tây)",
              "Chọn ngũ cốc nguyên cám: Gạo lứt, bánh mì nguyên cám, yến mạch thay vì các sản phẩm tinh chế",
              "Thêm đậu vào bữa ăn: Đậu, đậu lăng là nguồn chất xơ tuyệt vời",
              "Ăn trái cây thay vì uống nước ép: Trái cây nguyên quả có nhiều chất xơ hơn nước ép"
            ]}
          />

          <ExampleBox title="Ví dụ bữa ăn giàu chất xơ trong ngày">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">Bữa sáng:</p>
                <p className="text-sm text-gray-700">
                  Yến mạch với quả mọng và hạt chia (~8g chất xơ)
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa trưa:</p>
                <p className="text-sm text-gray-700">
                  Salad với đậu, rau xanh, và bánh mì nguyên cám (~12g chất xơ)
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa tối:</p>
                <p className="text-sm text-gray-700">
                  Cơm gạo lứt với thịt và rau xanh (~6g chất xơ)
                </p>
              </div>
              <div className="bg-green-50 rounded p-3 border border-green-200 mt-3">
                <p className="text-sm font-semibold text-green-900">
                  Tổng cộng: ~26g chất xơ - đạt mục tiêu hàng ngày!
                </p>
              </div>
            </div>
          </ExampleBox>
        </div>
      </section>

      {/* Clinical Considerations */}
      <section className="space-y-4">
        <h2 className="heading-2">Lưu ý trong Dinh dưỡng Lâm sàng</h2>
        <div className="space-y-4">
          <Callout variant="warning" title="Một số tình trạng cần cẩn thận">
            <ul className="space-y-2 text-sm">
              <li>
                <strong>Bệnh viêm ruột (IBD):</strong> Trong giai đoạn cấp, có thể cần giảm chất xơ 
                tạm thời. Tham khảo ý kiến chuyên gia.
              </li>
              <li>
                <strong>Hẹp ruột:</strong> Có thể cần hạn chế chất xơ không hòa tan.
              </li>
              <li>
                <strong>Sau phẫu thuật tiêu hóa:</strong> Cần điều chỉnh theo hướng dẫn của bác sĩ.
              </li>
              <li>
                <strong>Người cao tuổi:</strong> Có thể cần tăng chất xơ từ từ và đảm bảo uống đủ nước.
              </li>
            </ul>
          </Callout>

          <Card>
            <h3 className="heading-4 mb-3">Tác dụng phụ có thể gặp</h3>
            <p className="text-body-sm mb-3">
              Khi tăng lượng chất xơ đột ngột, bạn có thể gặp:
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Đầy hơi, chướng bụng</li>
              <li>• Khí trong ruột</li>
              <li>• Táo bón (nếu không uống đủ nước)</li>
            </ul>
            <p className="text-sm text-gray-600 mt-3">
              <strong>Giải pháp:</strong> Tăng từ từ, uống nhiều nước, và cơ thể sẽ quen dần.
            </p>
          </Card>
        </div>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('dietary-fiber').map((article) => (
            <Card key={article.slug} href={article.href}>
              <h3 className="heading-5 mb-2">{article.title}</h3>
              <p className="text-sm text-gray-600">{article.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Safety Disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có các vấn đề về tiêu hóa 
          hoặc các bệnh lý khác, hãy tham khảo ý kiến của chuyên gia dinh dưỡng hoặc bác sĩ 
          trước khi thay đổi đáng kể lượng chất xơ trong chế độ ăn.
        </p>
      </Callout>
    </main>
  );
}

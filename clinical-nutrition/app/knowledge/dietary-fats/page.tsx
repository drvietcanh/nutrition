import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { ExampleBox } from "../../components/ExampleBox";
import { TipCard } from "../../components/TipCard";
import { ComparisonCard } from "../../components/ComparisonCard";
import { Heart, AlertTriangle, Lightbulb, CheckCircle2, XCircle } from "lucide-react";
import Link from "next/link";
import { getRelatedArticles } from "../../../lib/content/articles";

export const metadata: Metadata = {
  title: "Chất béo trong Chế độ Ăn: Hiểu các Loại và Ảnh hưởng Sức khỏe",
  description:
    "Tìm hiểu về các loại chất béo trong chế độ ăn - chất béo bão hòa, không bão hòa, trans fat - và cách chúng ảnh hưởng đến sức khỏe tim mạch và dinh dưỡng lâm sàng.",
  keywords: [
    "chất béo",
    "dietary fats",
    "trans fat",
    "chất béo bão hòa",
    "chất béo không bão hòa",
    "omega-3",
    "tim mạch",
    "rối loạn lipid máu",
  ],
};

export default function DietaryFatsPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Chất béo trong Chế độ Ăn" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Chất béo trong Chế độ Ăn: Hiểu các Loại và Ảnh hưởng Sức khỏe
          </h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Chất béo là một phần quan trọng của chế độ ăn, nhưng không phải tất cả chất béo đều giống nhau. 
          Hiểu về các loại chất béo khác nhau giúp bạn đưa ra lựa chọn tốt cho sức khỏe.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Chất béo không bão hòa</strong> (dầu ô liu, cá, quả hạch) - tốt cho sức khỏe
          </li>
          <li>
            <strong>Chất béo bão hòa</strong> (thịt đỏ, bơ) - nên hạn chế
          </li>
          <li>
            <strong>Trans fat</strong> (thực phẩm chế biến) - nên tránh hoàn toàn
          </li>
          <li>Chất béo cần thiết cho cơ thể, nhưng loại và lượng rất quan trọng</li>
        </ul>
      </Callout>

      {/* Why Fats Matter */}
      <section className="space-y-4">
        <h2 className="heading-2">Tại sao Chất béo Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            Chất béo không phải là "kẻ thù". Cơ thể chúng ta cần chất béo để:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="heading-5 mb-2">Chức năng cơ thể</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hấp thu vitamin A, D, E, K</li>
                <li>• Cung cấp năng lượng</li>
                <li>• Bảo vệ các cơ quan</li>
                <li>• Giữ ấm cơ thể</li>
              </ul>
            </Card>
            <Card>
              <h3 className="heading-5 mb-2">Sức khỏe</h3>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Hỗ trợ sức khỏe não bộ</li>
                <li>• Giúp sản xuất hormone</li>
                <li>• Duy trì làn da khỏe mạnh</li>
                <li>• Hỗ trợ chức năng tế bào</li>
              </ul>
            </Card>
          </div>
          <p className="text-body-sm text-gray-600">
            Vấn đề không phải là chất béo, mà là <strong>loại chất béo</strong> và{" "}
            <strong>lượng chất béo</strong> bạn ăn.
          </p>
        </div>
      </section>

      {/* Types of Fats */}
      <section className="space-y-6">
        <h2 className="heading-2">Các Loại Chất béo</h2>

        {/* Unsaturated Fats - Good */}
        <Card className="border-green-200 bg-green-50">
          <div className="flex items-start gap-3 mb-4">
            <CheckCircle2 className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="heading-3 text-green-900 mb-2">Chất béo Không bão hòa (Tốt)</h3>
              <p className="text-body text-green-900 mb-3">
                Đây là loại chất béo tốt cho sức khỏe. Nên chiếm phần lớn chất béo trong chế độ ăn.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Không bão hòa đơn</h4>
              <p className="text-sm text-gray-700 mb-2">
                Giúp giảm cholesterol xấu (LDL) và tăng cholesterol tốt (HDL).
              </p>
              <p className="text-xs text-gray-600">
                <strong>Nguồn:</strong> Dầu ô liu, dầu đậu phộng, quả bơ, quả hạch (hạnh nhân, 
                hạt điều), hạt (hạt bí, hạt hướng dương)
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-green-200">
              <h4 className="font-semibold text-gray-900 mb-2">Không bão hòa đa</h4>
              <p className="text-sm text-gray-700 mb-2">
                Quan trọng cho sức khỏe tim mạch và não bộ.
              </p>
              <p className="text-xs text-gray-600">
                <strong>Nguồn:</strong> Cá béo (cá hồi, cá thu, cá trích), dầu hạt cải, 
                quả óc chó, hạt lanh, Omega-3, Omega-6
              </p>
            </div>
          </div>

          <div className="mt-4 p-3 bg-white rounded border border-green-200">
            <p className="text-sm text-gray-700">
              <strong>Omega-3:</strong> Đặc biệt quan trọng, có trong cá béo. Giúp giảm viêm, 
            hỗ trợ sức khỏe tim và não. Nên ăn cá 2-3 lần/tuần hoặc bổ sung.
            </p>
          </div>

          <ExampleBox title="Ví dụ thực tế về Chất béo Tốt" className="mt-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-semibold mb-1">Bữa sáng:</p>
                <p className="text-sm text-gray-700">
                  Bánh mì với dầu ô liu + quả bơ (chất béo không bão hòa đơn)
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa trưa:</p>
                <p className="text-sm text-gray-700">
                  Cá hồi nướng (Omega-3) + salad với dầu hạt cải
                </p>
              </div>
              <div>
                <p className="text-sm font-semibold mb-1">Bữa phụ:</p>
                <p className="text-sm text-gray-700">
                  Một nắm hạnh nhân hoặc quả óc chó (chất béo tốt)
                </p>
              </div>
            </div>
          </ExampleBox>
        </Card>

        {/* Saturated Fats - Limit */}
        <Card className="border-yellow-200 bg-yellow-50">
          <div className="flex items-start gap-3 mb-4">
            <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="heading-3 text-yellow-900 mb-2">Chất béo Bão hòa (Nên Hạn chế)</h3>
              <p className="text-body text-yellow-900 mb-3">
                Có thể làm tăng cholesterol xấu (LDL) và nguy cơ bệnh tim. 
                Nên hạn chế, không quá 10% tổng năng lượng hàng ngày.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-4 border border-yellow-200">
            <p className="text-sm text-gray-700 mb-2">
              <strong>Nguồn:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700">
              <li>• Thịt đỏ (thịt bò, thịt heo) - đặc biệt phần mỡ</li>
              <li>• Bơ, mỡ động vật</li>
              <li>• Sữa nguyên kem, phô mai</li>
              <li>• Dầu dừa, dầu cọ (mặc dù có một số tranh cãi)</li>
              <li>• Thực phẩm chế biến sẵn</li>
            </ul>
            <p className="text-xs text-gray-600 mt-3">
              <strong>Lưu ý:</strong> Không cần tránh hoàn toàn, nhưng nên ăn với lượng vừa phải 
              và chọn nguồn chất béo tốt hơn khi có thể.
            </p>
          </div>
        </Card>

        {/* Trans Fats - Avoid */}
        <Card className="border-red-200 bg-red-50">
          <div className="flex items-start gap-3 mb-4">
            <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" aria-hidden="true" />
            <div className="flex-1">
              <h3 className="heading-3 text-red-900 mb-2">Trans Fat (Nên Tránh Hoàn toàn)</h3>
              <p className="text-body text-red-900 mb-3">
                Đây là loại chất béo xấu nhất. Làm tăng cholesterol xấu (LDL), 
                giảm cholesterol tốt (HDL), và tăng nguy cơ bệnh tim, đột quỵ.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-2">Trans Fat là gì?</h4>
              <p className="text-sm text-gray-700 mb-3">
                Trans fat được tạo ra khi dầu thực vật được xử lý bằng quá trình gọi là "hydrogen hóa" 
                để làm cho chúng cứng hơn và bảo quản lâu hơn.
              </p>
              <p className="text-sm text-gray-700">
                <strong>Vấn đề:</strong> Cơ thể chúng ta không thể xử lý tốt trans fat, 
                dẫn đến nhiều vấn đề sức khỏe.
              </p>
            </div>

            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h4 className="font-semibold text-gray-900 mb-2">Nguồn Trans Fat:</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Thực phẩm chế biến sẵn:</strong> Bánh quy, bánh ngọt, bánh rán, 
                    bánh kem, snack đóng gói
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Margarine cứng:</strong> (một số loại, kiểm tra nhãn)
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Thực phẩm chiên:</strong> Khoai tây chiên, gà rán, đồ chiên rán
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠</span>
                  <span>
                    <strong>Shortening:</strong> (mỡ thực vật) dùng trong làm bánh
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-red-100 rounded-lg p-4 border-2 border-red-300">
              <p className="text-sm font-semibold text-red-900 mb-2">
                Cách tránh Trans Fat:
              </p>
              <ul className="space-y-1 text-sm text-red-800">
                <li>✓ Đọc nhãn thực phẩm - tìm "trans fat", "partially hydrogenated oil"</li>
                <li>✓ Tránh thực phẩm chế biến sẵn, đóng gói</li>
                <li>✓ Chọn thực phẩm tự nhiên, chưa qua chế biến</li>
                <li>✓ Tự nấu ăn ở nhà khi có thể</li>
              </ul>
            </div>
          </div>
        </Card>
      </section>

      {/* Clinical Application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Heart className="w-6 h-6 text-blue-600" aria-hidden="true" />
          Ứng dụng trong Dinh dưỡng Lâm sàng
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Rối loạn Lipid máu (Mỡ máu cao)</h3>
            <p className="text-body mb-3">
              Đối với người có cholesterol cao hoặc rối loạn lipid máu:
            </p>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tăng chất béo không bão hòa:</strong> Dầu ô liu, cá, quả hạch, quả bơ
                </span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Giảm chất béo bão hòa:</strong> Hạn chế thịt đỏ, bơ, thực phẩm từ sữa nguyên kem
                </span>
              </li>
              <li className="flex items-start gap-2">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>
                  <strong>Tránh hoàn toàn trans fat:</strong> Đọc nhãn, tránh thực phẩm chế biến sẵn
                </span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Bệnh Tim mạch</h3>
            <p className="text-body">
              Chế độ ăn Địa Trung Hải (nhiều dầu ô liu, cá, quả hạch) đã được chứng minh 
              giúp giảm nguy cơ bệnh tim. Nguyên tắc chính: thay thế chất béo bão hòa bằng 
              chất béo không bão hòa.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Viêm và Bệnh Mạn tính</h3>
            <p className="text-body">
              Omega-3 (từ cá, quả óc chó, hạt lanh) có tác dụng chống viêm, có thể hỗ trợ 
              trong các bệnh viêm mạn tính như viêm khớp, bệnh tim.
            </p>
          </Card>
        </div>
      </section>

      {/* Practical Tips */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Mẹo Thực tế
        </h2>
        <ComparisonCard
          goodTitle="Nên làm"
          goodItems={[
            "Dùng dầu ô liu, dầu hạt cải để nấu ăn",
            "Ăn cá 2-3 lần/tuần (cá hồi, cá thu, cá trích)",
            "Thêm quả hạch, hạt vào bữa ăn (một nắm nhỏ)",
            "Chọn thịt nạc, bỏ da và mỡ",
            "Đọc nhãn thực phẩm để tránh trans fat"
          ]}
          badTitle="Nên tránh"
          badItems={[
            "Thực phẩm chế biến sẵn, đóng gói",
            "Đồ chiên rán, fast food",
            "Bánh kẹo, snack đóng gói",
            "Thịt đỏ nhiều mỡ, thường xuyên",
            "Margarine cứng (kiểm tra nhãn)"
          ]}
        />
      </section>

      {/* How Much Fat */}
      <section className="space-y-4">
        <h2 className="heading-2">Nên Ăn Bao nhiêu Chất béo?</h2>
        <Card>
          <p className="text-body mb-4">
            Theo khuyến nghị, chất béo nên chiếm <strong>20-35%</strong> tổng năng lượng hàng ngày:
          </p>
          <div className="space-y-3 text-sm">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded border border-green-200">
              <span className="font-medium">Chất béo không bão hòa</span>
              <span className="text-green-700 font-semibold">Phần lớn (15-25%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded border border-yellow-200">
              <span className="font-medium">Chất béo bão hòa</span>
              <span className="text-yellow-700 font-semibold">Hạn chế (&lt;10%)</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-red-50 rounded border border-red-200">
              <span className="font-medium">Trans fat</span>
              <span className="text-red-700 font-semibold">Tránh hoàn toàn (0%)</span>
            </div>
          </div>
          <p className="text-xs text-gray-600 mt-4">
            <strong>Ví dụ:</strong> Nếu bạn cần 2000 kcal/ngày, chất béo nên cung cấp 400-700 kcal 
            (khoảng 44-78g chất béo), và phần lớn nên là chất béo không bão hòa.
          </p>
        </Card>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {getRelatedArticles('dietary-fats').map((article) => (
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
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có rối loạn lipid máu, 
          bệnh tim mạch, hoặc các vấn đề sức khỏe khác, hãy tham khảo ý kiến của chuyên gia 
          dinh dưỡng hoặc bác sĩ để có kế hoạch ăn uống phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

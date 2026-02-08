import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Bone, CheckCircle2, AlertCircle, Milk, Fish, Leaf } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Canxi và Sức khỏe Xương",
  description:
    "Hiểu về canxi - khoáng chất quan trọng nhất cho xương chắc khỏe, nguồn thực phẩm giàu canxi, và cách phòng ngừa loãng xương.",
  keywords: [
    "canxi",
    "sức khỏe xương",
    "loãng xương",
    "sữa",
    "dinh dưỡng",
  ],
};

export default function CalciumBoneHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Canxi và Sức khỏe Xương" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Bone className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">Canxi và Sức khỏe Xương</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Canxi là khoáng chất quan trọng nhất cho xương và răng chắc khỏe. 
          99% canxi trong cơ thể nằm ở xương và răng. Đủ canxi giúp xương chắc khỏe, 
          ngăn ngừa loãng xương khi về già.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Canxi</strong> là khoáng chất chính tạo nên xương và răng
          </li>
          <li>
            cơ thể tích trữ canxi trong xương khi còn trẻ - <strong>quan trọng cho tuổi thiếu niên</strong>
          </li>
          <li>
            <strong>Sữa, sữa chua, phô mai</strong> là nguồn canxi tốt nhất
          </li>
          <li>
            <strong>Rau xanh, đậu, cá nhỏ</strong> cũng chứa canxi
          </li>
          <li>
            Vitamin D giúp cơ thể hấp thu canxi tốt hơn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Canxi là gì và Tại sao Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Canxi</strong> là khoáng chất phong phú nhất trong cơ thể. 
            Hầu hết canxi (99%) được lưu trữ trong xương và răng, giúp chúng chắc khỏe. 
            Phần còn lại (1%) có vai trò quan trọng trong chức năng cơ, thần kinh, và tim.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Xương giống như "ngân hàng canxi". 
              Khi còn trẻ, bạn "gửi" canxi vào xương. Khi về già, nếu không đủ canxi từ thức ăn, 
              cơ thể sẽ "rút" canxi từ xương, khiến xương yếu đi (loãng xương).
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Canxi</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Xây dựng và duy trì xương chắc khỏe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giữ răng chắc khỏe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ chức năng cơ bắp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ chức năng thần kinh</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Điều gì xảy ra khi thiếu?</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Xương yếu, dễ gãy (loãng xương)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ở trẻ em: còi xương, chậm lớn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Răng yếu, dễ sâu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Chuột rút, co thắt cơ</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Thực phẩm Giàu Canxi</h2>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 text-blue-900 mb-3 flex items-center gap-2">
              <Milk className="w-5 h-5" aria-hidden="true" />
              Sữa và Sản phẩm từ Sữa (Nguồn tốt nhất)
            </h3>
            <div className="bg-white rounded-lg p-3 border border-blue-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Milk className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Sữa:</strong> 1 cốc (250ml) ≈ 300mg canxi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Milk className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Sữa chua:</strong> 1 hộp (200g) ≈ 200-300mg canxi</span>
                </li>
                <li className="flex items-start gap-2">
                  <Milk className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Phô mai:</strong> 30g ≈ 200-250mg canxi</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Nguồn Khác</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✓ Nguồn tốt:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Fish className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Cá nhỏ ăn cả xương:</strong> cá cơm, cá mòi (100g ≈ 300-400mg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Rau xanh đậm:</strong> cải xoăn, bông cải xanh (100g ≈ 100-150mg)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Đậu phụ:</strong> 100g ≈ 100-200mg canxi</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Hạnh nhân:</strong> 30g ≈ 75mg canxi</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Ví dụ bữa ăn đủ canxi:</p>
                <p className="text-xs text-gray-700 mb-1">
                  <strong>Bữa sáng:</strong> 1 cốc sữa (300mg) + 1 hộp sữa chua (200mg) = 500mg
                </p>
                <p className="text-xs text-gray-700 mb-1">
                  <strong>Bữa trưa:</strong> Rau cải xào (150mg) + đậu phụ (150mg) = 300mg
                </p>
                <p className="text-xs text-gray-700">
                  <strong>Tổng:</strong> ~800mg (đủ cho người lớn)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cần bao nhiêu Canxi?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Nhu cầu canxi thay đổi theo tuổi, đặc biệt quan trọng ở tuổi thiếu niên và người cao tuổi:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Trẻ em & Thiếu niên (9-18 tuổi)</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">1300 mg/ngày</p>
                <p className="text-xs text-gray-600">
                  Quan trọng nhất! Xương đang phát triển nhanh
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người lớn (19-50 tuổi)</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">1000 mg/ngày</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ trên 50, Nam trên 70</h3>
                <p className="text-2xl font-bold text-purple-600 mb-1">1200 mg/ngày</p>
                <p className="text-xs text-gray-600">
                  Nguy cơ loãng xương cao hơn
                </p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ mang thai/cho con bú</h3>
                <p className="text-2xl font-bold text-amber-600 mb-1">1000-1300 mg/ngày</p>
                <p className="text-xs text-gray-600">
                  Cần cho cả mẹ và con
                </p>
              </div>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 1: Thiếu niên 15 tuổi</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Em An, 15 tuổi, không thích uống sữa, ít ăn rau, 
              chỉ thích ăn thịt và cơm. Cần 1300mg canxi/ngày.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Thử sữa chua, phô mai thay vì sữa</li>
              <li>Ăn cá nhỏ (cá cơm, cá mòi) 2-3 lần/tuần</li>
              <li>Thêm đậu phụ vào bữa ăn</li>
              <li>Ăn bông cải xanh, cải xoăn</li>
              <li>Nếu vẫn không đủ, tham khảo bác sĩ về viên bổ sung</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 2: Người cao tuổi, không uống sữa</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Bà Lan, 70 tuổi, không uống được sữa (không dung nạp lactose), 
              cần 1200mg canxi/ngày để phòng loãng xương.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Uống sữa không lactose hoặc sữa chua (dễ tiêu hóa hơn)</li>
              <li>Ăn cá nhỏ (cá cơm, cá mòi) thường xuyên</li>
              <li>Ăn đậu phụ, rau xanh đậm</li>
              <li>Tham khảo bác sĩ về viên bổ sung canxi + vitamin D</li>
            </ul>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Uống sữa hoặc sữa chua mỗi ngày:</strong> Dễ nhất để có đủ canxi
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp với vitamin D:</strong> Vitamin D giúp hấp thu canxi tốt hơn (ánh nắng, cá béo)
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Vận động thường xuyên:</strong> Tập thể dục giúp xương chắc khỏe
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người không uống sữa:</strong> Chọn cá nhỏ, đậu phụ, rau xanh, hoặc sữa không lactose
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
              <p className="text-sm font-semibold mb-1">"Chỉ cần uống sữa là đủ canxi"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Sữa là nguồn tốt, nhưng cần kết hợp với các nguồn khác và vitamin D. 
                Người không uống sữa vẫn có thể đủ canxi từ cá, rau xanh, đậu.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Càng nhiều canxi càng tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quá nhiều canxi (trên 2500mg/ngày) có thể gây sỏi thận. 
                Không nên tự ý uống viên canxi liều cao.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần canxi khi về già"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quan trọng nhất là tuổi thiếu niên (9-18 tuổi) - đây là lúc xương 
                tích trữ canxi nhiều nhất. Nếu thiếu ở tuổi này, xương sẽ yếu khi về già.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/vitamin-d">
            <h3 className="heading-5 mb-2">Vitamin D và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Vitamin D giúp hấp thu canxi
            </p>
          </Card>
          <Card href="/knowledge/elderly-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Người cao tuổi</h3>
            <p className="text-sm text-gray-600">
              Người cao tuổi cần nhiều canxi hơn
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có nguy cơ loãng xương, 
          hoặc đang cân nhắc bổ sung canxi, hãy tham khảo ý kiến của bác sĩ để được đánh giá 
          và tư vấn phù hợp. Không nên tự ý uống viên canxi liều cao.
        </p>
      </Callout>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Zap, CheckCircle2, AlertCircle, Beef, Milk, Egg } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin B12 và năng lượng",
  description:
    "Hiểu về vitamin B12 - vitamin quan trọng cho năng lượng, tạo máu, và chức năng thần kinh. đặc biệt quan trọng cho người ăn chay.",
  keywords: [
    "vitamin B12",
    "năng lượng",
    "thiếu máu",
    "ăn chay",
    "dinh dưỡng",
  ],
};

export default function VitaminB12EnergyPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin B12 và năng lượng" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Zap className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin B12 và năng lượng</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin B12 là vitamin quan trọng giúp cơ thể tạo ra năng lượng, tạo máu, và duy trì chức năng thần kinh. 
          Khác với nhiều vitamin khác, B12 chỉ có trong thực phẩm từ động vật, 
          nên người ăn chay cần đặc biệt chú ý.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin B12</strong> giúp tạo năng lượng, tạo máu, và chức năng thần kinh
          </li>
          <li>
            Chỉ có trong <strong>thực phẩm từ động vật</strong> (thịt, cá, trứng, sữa)
          </li>
          <li>
            <strong>Người ăn chay</strong> cần bổ sung B12 từ thực phẩm tăng cường hoặc viên uống
          </li>
          <li>
            Thiếu B12 gây mệt mỏi, thiếu máu, và tổn thương thần kinh
          </li>
          <li>
            Người cao tuổi có thể hấp thu B12 kém hơn
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Vitamin B12 là gì và Tại sao Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Vitamin B12</strong> (còn gọi là cobalamin) là một vitamin tan trong nước, 
            đóng vai trò quan trọng trong nhiều chức năng của cơ thể. 
            Điều đặc biệt là B12 chỉ có tự nhiên trong thực phẩm từ động vật.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Vitamin B12 giống như "công nhân" giúp cơ thể chuyển hóa thức ăn thành năng lượng, 
              tạo ra các tế bào máu mới, và giữ cho hệ thần kinh hoạt động tốt. 
              Không có đủ B12, cơ thể không thể làm những việc này hiệu quả.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Vitamin B12</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tạo năng lượng từ thức ăn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tạo hồng cầu (tế bào máu đỏ)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Duy trì chức năng thần kinh</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tạo DNA (vật liệu di truyền)</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Điều gì xảy ra khi thiếu?</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Mệt mỏi, yếu ớt</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Thiếu máu (giống thiếu sắt)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Tê bì tay chân, mất cảm giác</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Khó nhớ, lú lẫn</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Thực phẩm Giàu Vitamin B12</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 text-red-900 mb-3 flex items-center gap-2">
              <Beef className="w-5 h-5" aria-hidden="true" />
              Thực phẩm từ Động vật (Nguồn tự nhiên)
            </h3>
            <p className="text-body text-red-900 mb-3">
              Vitamin B12 chỉ có tự nhiên trong thực phẩm từ động vật. 
              Thực vật không tạo ra B12.
            </p>
            <div className="bg-white rounded-lg p-3 border border-red-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Thịt:</strong> thịt bò, thịt heo, thịt gà (100g ≈ 1-2mcg B12)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Gan:</strong> gan bò, gan heo (100g ≈ 50-70mcg B12) - nguồn rất tốt!</span>
                </li>
                <li className="flex items-start gap-2">
                  <Beef className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Cá:</strong> cá hồi, cá ngừ, cá thu (100g ≈ 3-5mcg B12)</span>
                </li>
                <li className="flex items-start gap-2">
                  <Egg className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Trứng:</strong> 1 quả trứng ≈ 0.5-1mcg B12</span>
                </li>
                <li className="flex items-start gap-2">
                  <Milk className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Sữa, sữa chua:</strong> 1 cốc (250ml) ≈ 1-1.5mcg B12</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 text-green-900 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" aria-hidden="true" />
              Thực phẩm Tăng cường (Cho người ăn chay)
            </h3>
            <p className="text-body text-green-900 mb-3">
              Nhiều thực phẩm chay được tăng cường B12. Kiểm tra nhãn để tìm "tăng cường B12" hoặc "fortified with B12".
            </p>
            <div className="bg-white rounded-lg p-3 border border-green-200">
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Sữa thực vật:</strong> sữa đậu nành, sữa hạnh nhân tăng cường</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Ngũ cốc ăn sáng:</strong> nhiều loại tăng cường B12</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Men dinh dưỡng (nutritional yeast):</strong> thường tăng cường B12</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span><strong>Viên uống bổ sung:</strong> người ăn chay thường cần bổ sung</span>
                </li>
              </ul>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cần bao nhiêu Vitamin B12?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Nhu cầu B12 không cao, nhưng quan trọng là phải có đủ:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người lớn</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">2.4 mcg/ngày</p>
                <p className="text-xs text-gray-600">
                  Tương đương: 100g thịt bò hoặc 2 quả trứng
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ mang thai</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">2.6 mcg/ngày</p>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ cho con bú</h3>
                <p className="text-2xl font-bold text-purple-600 mb-1">2.8 mcg/ngày</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4 border border-amber-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người ăn chay</h3>
                <p className="text-sm text-amber-900">
                  Cần thực phẩm tăng cường hoặc viên uống bổ sung
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
            <h3 className="heading-5 mb-2">Ví dụ 1: Người ăn chay</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Anh Minh, 30 tuổi, ăn chay 5 năm, gần đây thường mệt mỏi, 
              tê bì tay chân. Không ăn thịt, cá, trứng, sữa.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Chọn sữa đậu nành tăng cường B12 (kiểm tra nhãn)</li>
              <li>Ăn ngũ cốc ăn sáng tăng cường B12</li>
              <li>Dùng men dinh dưỡng (nutritional yeast) tăng cường B12</li>
              <li>Uống viên bổ sung B12 (25-100mcg/ngày hoặc 1000mcg/tuần)</li>
              <li>Tham khảo bác sĩ để xét nghiệm và tư vấn</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 2: Người cao tuổi</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Bà Hoa, 75 tuổi, ăn ít thịt, gần đây hay quên, mệt mỏi. 
              Có thể hấp thu B12 kém do tuổi tác.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Ăn thịt, cá, trứng 2-3 lần/tuần</li>
              <li>Uống sữa, sữa chua mỗi ngày</li>
              <li>Tham khảo bác sĩ về viên bổ sung B12 (có thể cần liều cao hơn)</li>
              <li>Xét nghiệm máu để kiểm tra mức B12</li>
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
                <strong>Người ăn thịt:</strong> Ăn thịt, cá, trứng, sữa thường xuyên là đủ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người ăn chay:</strong> Chọn thực phẩm tăng cường B12 hoặc uống viên bổ sung
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người cao tuổi:</strong> Có thể cần bổ sung do hấp thu kém
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiểm tra nhãn:</strong> Tìm "tăng cường B12" hoặc "fortified with B12"
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
              <p className="text-sm font-semibold mb-1">"Rau xanh, đậu có B12"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Thực vật không tạo ra B12. Một số tảo biển có B12 giả (không hoạt động). 
                Người ăn chay cần thực phẩm tăng cường hoặc viên uống.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần ăn trứng, sữa là đủ B12"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Trứng và sữa có B12 nhưng ít hơn thịt. Người ăn chay ovo-lacto 
                (ăn trứng, sữa) vẫn cần ăn đủ lượng hoặc bổ sung.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Mệt mỏi = thiếu B12"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Mệt mỏi có thể do nhiều nguyên nhân. Cần xét nghiệm máu để xác định 
                thiếu B12 hay không.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              B12 cũng quan trọng cho tạo máu
            </p>
          </Card>
          <Card href="/knowledge/protein-co-ban-trong-lam-sang">
            <h3 className="heading-5 mb-2">Protein cơ bản</h3>
            <p className="text-sm text-gray-600">
              Thịt là nguồn B12 tốt
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn ăn chay, có triệu chứng thiếu B12, 
          hoặc đang cân nhắc bổ sung, hãy tham khảo ý kiến của bác sĩ để được xét nghiệm và tư vấn phù hợp.
        </p>
      </Callout>
    </main>
  );
}

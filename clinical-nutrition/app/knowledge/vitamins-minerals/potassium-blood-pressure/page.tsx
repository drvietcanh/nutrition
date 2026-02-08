import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Heart, CheckCircle2, AlertCircle, Banana, Leaf, Apple } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kali và Huyết áp",
  description:
    "Hiểu về kali - khoáng chất quan trọng giúp kiểm soát huyết áp, nguồn thực phẩm giàu kali, và vai trò trong sức khỏe tim mạch.",
  keywords: [
    "kali",
    "potassium",
    "huyết áp",
    "tim mạch",
    "dinh dưỡng",
  ],
};

export default function PotassiumBloodPressurePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Kali và Huyết áp" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">Kali và Huyết áp</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Kali là khoáng chất quan trọng giúp kiểm soát huyết áp và duy trì sức khỏe tim mạch. 
          Đủ kali giúp cân bằng với natri (muối), giảm nguy cơ tăng huyết áp. 
          Hầu hết mọi người không ăn đủ kali.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Kali</strong> giúp kiểm soát huyết áp và sức khỏe tim mạch
          </li>
          <li>
            Cân bằng với <strong>natri (muối)</strong> - giúp giảm tác hại của muối
          </li>
          <li>
            <strong>Trái cây, rau củ, đậu</strong> là nguồn kali tốt nhất
          </li>
          <li>
            Hầu hết mọi người không ăn đủ kali (cần 3500-4700mg/ngày)
          </li>
          <li>
            Người bệnh thận cần hạn chế kali
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Kali là gì và Tại sao Quan trọng?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Kali</strong> là một khoáng chất thiết yếu đóng vai trò quan trọng trong nhiều chức năng của cơ thể, 
            đặc biệt là kiểm soát huyết áp và sức khỏe tim mạch. Kali hoạt động cùng với natri (muối) để duy trì cân bằng dịch trong cơ thể.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Natri (muối) giống như "kéo nước vào" cơ thể, làm tăng huyết áp. 
              Kali giống như "đẩy nước ra", giúp giảm huyết áp. Cần cân bằng giữa hai chất này.
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Kali</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp kiểm soát huyết áp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ chức năng tim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Duy trì cân bằng dịch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Heart className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ chức năng cơ và thần kinh</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Lợi ích sức khỏe:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm nguy cơ tăng huyết áp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm nguy cơ đột quỵ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm nguy cơ sỏi thận</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giảm mất xương</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Thực phẩm Giàu Kali</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Trái cây (Nguồn tốt nhất)</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Banana className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Chuối:</strong> 1 quả vừa ≈ 400mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Apple className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Cam:</strong> 1 quả vừa ≈ 240mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Apple className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Dưa hấu:</strong> 1 miếng (200g) ≈ 300mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Apple className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Mơ khô:</strong> 30g ≈ 300mg kali</span>
                  </li>
                </ul>
              </div>
              <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Mẹo:</p>
                <p className="text-xs text-gray-700">
                  Ăn 2-3 phần trái cây mỗi ngày giúp bạn có ~800-1200mg kali
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Rau củ và Đậu</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Khoai tây:</strong> 1 củ vừa nướng ≈ 900mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Rau bina:</strong> 100g nấu chín ≈ 500mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Bông cải xanh:</strong> 100g ≈ 300mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Đậu đen:</strong> 100g nấu chín ≈ 400mg kali</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Leaf className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Cà chua:</strong> 1 quả vừa ≈ 300mg kali</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Ví dụ bữa ăn:</p>
                <p className="text-xs text-gray-700 mb-1">
                  <strong>Bữa trưa:</strong> Khoai tây nướng (900mg) + rau bina (500mg) = 1400mg
                </p>
                <p className="text-xs text-gray-700">
                  <strong>Bữa tối:</strong> Đậu đen (400mg) + cà chua (300mg) = 700mg
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Cần Bao nhiêu Kali?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Nhu cầu kali khá cao, nhưng hầu hết mọi người không ăn đủ:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người lớn</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">3500-4700 mg/ngày</p>
                <p className="text-xs text-gray-600">
                  Tương đương: 5-7 phần trái cây/rau củ
                </p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Phụ nữ mang thai</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">4700 mg/ngày</p>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">
                <strong>Lưu ý:</strong> Người bệnh thận có thể cần hạn chế kali. 
                Nếu bạn có bệnh thận, hãy tham khảo bác sĩ về lượng kali phù hợp.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Kali và Huyết áp</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Kali giúp giảm huyết áp bằng cách:
            </p>
            <ul className="space-y-2 text-sm text-gray-700 list-disc pl-6">
              <li>Giúp cơ thể đào thải natri (muối) qua nước tiểu</li>
              <li>Làm giãn mạch máu, giảm áp lực</li>
              <li>Cân bằng với natri trong cơ thể</li>
            </ul>
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <p className="text-sm text-blue-900">
                <strong>Mẹo thực tế:</strong> Thay vì chỉ giảm muối, hãy tăng kali bằng cách ăn nhiều trái cây và rau củ. 
                Chế độ ăn DASH (giàu kali, ít natri) đã được chứng minh giúp giảm huyết áp.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ Thực tế</h2>
        <Card>
          <h3 className="heading-5 mb-2">Ví dụ: Người tăng huyết áp</h3>
          <p className="text-body-sm mb-2">
            <strong>Tình huống:</strong> Anh Nam, 45 tuổi, tăng huyết áp, ăn nhiều thịt, ít rau củ, 
            thường ăn mặn. Cần tăng kali, giảm natri.
          </p>
          <p className="text-body-sm mb-2">
            <strong>Giải pháp:</strong>
          </p>
          <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
            <li>Ăn 2-3 phần trái cây mỗi ngày (chuối, cam, dưa hấu)</li>
            <li>Ăn rau củ mỗi bữa (khoai tây, rau bina, bông cải xanh)</li>
            <li>Giảm muối trong nấu ăn</li>
            <li>Tránh thực phẩm chế biến sẵn (nhiều natri, ít kali)</li>
            <li>Ăn đậu 2-3 lần/tuần</li>
          </ul>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn nhiều trái cây và rau củ:</strong> Mỗi bữa nên có 1-2 phần
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn thực phẩm tươi:</strong> Thực phẩm chế biến sẵn thường ít kali, nhiều natri
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp với giảm muối:</strong> Tăng kali + giảm natri = hiệu quả tốt nhất
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Người bệnh thận:</strong> Cần hạn chế kali - tham khảo bác sĩ
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
              <p className="text-sm font-semibold mb-1">"Chỉ cần giảm muối là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Tăng kali cũng quan trọng như giảm muối. 
                Chế độ ăn giàu kali + ít natri có hiệu quả tốt nhất.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Càng nhiều kali càng tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quá nhiều kali có thể nguy hiểm, đặc biệt với người bệnh thận. 
                Không nên tự ý uống viên kali liều cao.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/sodium-health">
            <h3 className="heading-5 mb-2">Natri (Muối) và Sức khỏe</h3>
            <p className="text-sm text-gray-600">
              Kali cân bằng với natri
            </p>
          </Card>
          <Card href="/knowledge/hypertension-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Tăng huyết áp</h3>
            <p className="text-sm text-gray-600">
              Kali quan trọng cho kiểm soát huyết áp
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn có bệnh thận, tăng huyết áp, 
          hoặc đang dùng thuốc ảnh hưởng đến kali, hãy tham khảo ý kiến của bác sĩ về lượng kali phù hợp. 
          Không nên tự ý uống viên kali liều cao.
        </p>
      </Callout>
    </main>
  );
}

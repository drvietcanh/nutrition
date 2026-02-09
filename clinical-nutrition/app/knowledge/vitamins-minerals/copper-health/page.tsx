import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { ExampleBox } from "../../../components/ExampleBox";
import { NutrientTable } from "../../../components/NutrientTable";
import { Shield, Heart, AlertCircle, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Đồng và Sức khỏe",
  description:
    "Tìm hiểu về đồng - khoáng chất vi lượng quan trọng cho sức khỏe, chức năng miễn dịch, sản xuất tế bào máu, và bảo vệ tế bào khỏi tổn thương oxy hóa.",
  keywords: [
    "đồng",
    "copper",
    "khoáng chất",
    "miễn dịch",
    "tế bào máu",
    "chất chống oxy hóa",
    "hải sản",
  ],
};

export default function CopperHealthPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin & Khoáng chất", href: "/knowledge/vitamins-minerals" },
          { label: "Đồng và Sức khỏe" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Shield className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">Đồng và Sức khỏe</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Đồng là một khoáng chất vi lượng thiết yếu, đóng vai trò quan trọng trong nhiều chức năng của cơ thể, 
          bao gồm sản xuất tế bào máu, chức năng miễn dịch, và bảo vệ tế bào khỏi tổn thương oxy hóa.
        </p>
      </header>

      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Đồng</strong> là khoáng chất vi lượng thiết yếu
          </li>
          <li>
            Hỗ trợ <strong>sản xuất tế bào máu</strong> và <strong>chức năng miễn dịch</strong>
          </li>
          <li>
            Là một <strong>chất chống oxy hóa</strong>
          </li>
          <li>
            <strong>Nhu cầu:</strong> 900 microgram/ngày cho người lớn
          </li>
          <li>
            <strong>Nguồn tốt:</strong> Hải sản, quả hạch, hạt, ngũ cốc nguyên cám, đậu
          </li>
        </ul>
      </Callout>

      <section className="space-y-4">
        <h2 className="heading-2">Đồng là gì?</h2>
        <Card>
          <p className="text-body-sm mb-3">
            <strong>Đồng</strong> là một khoáng chất vi lượng mà cơ thể cần với số lượng nhỏ nhưng rất quan trọng. 
            Đồng hoạt động như một cofactor cho nhiều enzyme trong cơ thể.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Vai trò chính:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Sản xuất tế bào máu (hồng cầu)</li>
                <li>• Chức năng miễn dịch</li>
                <li>• Chất chống oxy hóa</li>
                <li>• Hỗ trợ sức khỏe xương</li>
                <li>• Hỗ trợ chức năng thần kinh</li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-900 mb-2">Khi thiếu:</p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Thiếu máu</li>
                <li>• Yếu, mệt mỏi</li>
                <li>• Vấn đề miễn dịch</li>
                <li>• Vấn đề xương</li>
              </ul>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ đơn giản">
          <p>
            Đồng giống như "công nhân hỗ trợ" trong nhà máy cơ thể. Nó giúp các enzyme hoạt động đúng cách, 
            đặc biệt là enzyme liên quan đến sản xuất tế bào máu và bảo vệ tế bào. 
            Không có đồng, cơ thể không thể sản xuất đủ tế bào máu, dẫn đến thiếu máu.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Vai trò của Đồng</h2>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50">
            <h3 className="heading-4 mb-3 text-red-900">1. Sản xuất Tế bào Máu</h3>
            <p className="text-body-sm text-red-900 mb-2">
              Đồng cần thiết để sản xuất hồng cầu (tế bào máu đỏ). Nó giúp hấp thu sắt và sử dụng sắt để tạo hồng cầu.
            </p>
            <p className="text-xs text-red-800">
              <strong>Khi thiếu đồng:</strong> Có thể dẫn đến thiếu máu, ngay cả khi có đủ sắt.
            </p>
          </Card>

          <Card className="border-blue-200 bg-blue-50">
            <h3 className="heading-4 mb-3 text-blue-900">2. Chức năng Miễn dịch</h3>
            <p className="text-body-sm text-blue-900 mb-2">
              Đồng hỗ trợ hệ miễn dịch bằng cách giúp tạo tế bào miễn dịch và chống lại nhiễm trùng.
            </p>
            <p className="text-xs text-blue-800">
              <strong>Khi thiếu đồng:</strong> Có thể dẫn đến dễ bị nhiễm trùng.
            </p>
          </Card>

          <Card className="border-green-200 bg-green-50">
            <h3 className="heading-4 mb-3 text-green-900">3. Chất chống Oxy hóa</h3>
            <p className="text-body-sm text-green-900 mb-2">
              Đồng là một phần của enzyme chống oxy hóa, giúp bảo vệ tế bào khỏi tổn thương oxy hóa.
            </p>
            <p className="text-xs text-green-800">
              <strong>Khi thiếu đồng:</strong> Tế bào dễ bị tổn thương hơn.
            </p>
          </Card>

          <Card className="border-purple-200 bg-purple-50">
            <h3 className="heading-4 mb-3 text-purple-900">4. Sức khỏe Xương và Thần kinh</h3>
            <p className="text-body-sm text-purple-900 mb-2">
              Đồng hỗ trợ sức khỏe xương và chức năng thần kinh bằng cách giúp tạo collagen và myelin.
            </p>
            <p className="text-xs text-purple-800">
              <strong>Khi thiếu đồng:</strong> Có thể dẫn đến vấn đề xương và thần kinh.
            </p>
          </Card>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nhu cầu Đồng</h2>
        <NutrientTable
          title="Nhu cầu Đồng hàng ngày"
          rows={[
            { nutrient: "Người lớn (19-70 tuổi)", amount: "900", unit: "microgram/ngày", note: "Cả nam và nữ" },
            { nutrient: "Người trên 70 tuổi", amount: "900", unit: "microgram/ngày", note: "Giữ nguyên" },
            { nutrient: "Phụ nữ mang thai", amount: "1000", unit: "microgram/ngày", note: "Tăng nhẹ" },
            { nutrient: "Phụ nữ cho con bú", amount: "1300", unit: "microgram/ngày", note: "Tăng" },
          ]}
        />
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Nguồn đồng tốt</h2>
        <Card>
          <h3 className="heading-4 mb-3">Thực phẩm Giàu đồng</h3>
          <div className="space-y-3">
            <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Hải sản:</p>
              <p className="text-xs text-gray-700">
                Hàu, tôm, cua, cá - rất giàu đồng. 
                <strong> Ở Việt Nam:</strong> Hàu, tôm, cua rất phổ biến và là nguồn đồng tốt.
              </p>
            </div>
            <div className="bg-green-50 rounded-lg p-3 border border-green-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Quả hạch và Hạt:</p>
              <p className="text-xs text-gray-700">
                Hạt điều, hạt hướng dương, hạt bí - giàu đồng. 
                <strong> Ở Việt Nam:</strong> Hạt điều, hạt bí rất phổ biến.
              </p>
            </div>
            <div className="bg-purple-50 rounded-lg p-3 border border-purple-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Ngũ cốc nguyên cám:</p>
              <p className="text-xs text-gray-700">
                Gạo lứt, yến mạch - có đồng. 
                <strong> Ở Việt Nam:</strong> Gạo lứt là lựa chọn tốt.
              </p>
            </div>
            <div className="bg-orange-50 rounded-lg p-3 border border-orange-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Đậu:</p>
              <p className="text-xs text-gray-700">
                Đậu đen, đậu đỏ, đậu lăng - có đồng. 
                <strong> Ở Việt Nam:</strong> Đậu đen, đậu đỏ rất phổ biến.
              </p>
            </div>
            <div className="bg-yellow-50 rounded-lg p-3 border border-yellow-200">
              <p className="text-sm font-semibold text-gray-900 mb-1">Thịt:</p>
              <p className="text-xs text-gray-700">
                Thịt nội tạng (gan), thịt đỏ - có đồng.
              </p>
            </div>
          </div>
        </Card>

        <ExampleBox variant="info" title="Ví dụ Bữa ăn Giàu đồng (Việt Nam)">
          <p className="mb-2">
            <strong>Bữa ăn Việt Nam</strong> có thể cung cấp đủ đồng:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mb-2">
            <li><strong>Tôm, cua:</strong> Rất giàu đồng</li>
            <li><strong>Đậu đen, đậu đỏ:</strong> Có đồng</li>
            <li><strong>Gạo lứt:</strong> Có đồng</li>
            <li><strong>Hạt điều, hạt bí:</strong> Snack giàu đồng</li>
          </ul>
          <p>
            Ăn đa dạng hải sản, đậu, ngũ cốc nguyên cám, và quả hạch giúp đảm bảo đủ đồng.
          </p>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thiếu đồng và Hậu quả</h2>
        <Callout variant="warning" title="Hậu quả của Thiếu đồng">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Thiếu máu:</strong> Ngay cả khi có đủ sắt, thiếu đồng có thể dẫn đến thiếu máu 
              vì đồng cần thiết để sử dụng sắt.
            </p>
            <p>
              <strong>Yếu, mệt mỏi:</strong> Do thiếu máu và vấn đề năng lượng.
            </p>
            <p>
              <strong>Vấn đề miễn dịch:</strong> Dễ bị nhiễm trùng.
            </p>
            <p>
              <strong>Vấn đề xương:</strong> Xương yếu, dễ gãy.
            </p>
            <p>
              <strong>Vấn đề thần kinh:</strong> Tê, yếu, vấn đề vận động.
            </p>
          </div>
        </Callout>

        <ExampleBox variant="tip" title="Ai có Nguy cơ Thiếu đồng?">
          <p className="text-sm">
            Thiếu đồng hiếm gặp ở người khỏe mạnh ăn đa dạng. Tuy nhiên, một số người có nguy cơ:
          </p>
          <ul className="list-disc list-inside space-y-1 text-sm mt-2">
            <li>Người ăn chay nghiêm ngặt (ít hải sản, thịt)</li>
            <li>Người có bệnh đường ruột (hấp thu kém)</li>
            <li>Người dùng quá nhiều kẽm bổ sung (có thể cản trở hấp thu đồng)</li>
          </ul>
        </ExampleBox>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Thừa đồng và Nguy cơ</h2>
        <Callout variant="error" title="Nguy cơ Thừa đồng">
          <div className="space-y-2 text-sm">
            <p>
              <strong>Thừa đồng</strong> từ thực phẩm hiếm gặp, nhưng có thể xảy ra nếu dùng quá nhiều bổ sung.
            </p>
            <p>
              <strong>Triệu chứng:</strong> Buồn nôn, nôn, đau bụng, tiêu chảy, tổn thương gan.
            </p>
            <p>
              <strong>Lưu ý:</strong> Không nên dùng bổ sung đồng trừ khi có chỉ định của bác sĩ. 
              Thực phẩm thường đủ để đáp ứng nhu cầu.
            </p>
          </div>
        </Callout>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn đa dạng:</strong> Hải sản, đậu, ngũ cốc nguyên cám, quả hạch - đảm bảo đủ đồng.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ở Việt Nam:</strong> Tôm, cua, đậu đen, đậu đỏ, gạo lứt, hạt điều, hạt bí 
                là nguồn đồng tốt và phổ biến.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kết hợp với sắt:</strong> Đồng giúp hấp thu và sử dụng sắt. 
                Ăn thực phẩm giàu đồng cùng với thực phẩm giàu sắt.
              </p>
            </div>
            <div className="flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Không tự ý bổ sung:</strong> Thực phẩm thường đủ. 
                Chỉ bổ sung khi có chỉ định của bác sĩ.
              </p>
            </div>
          </div>
        </Card>
      </section>

      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/iron-anemia">
            <h3 className="heading-5 mb-2">Sắt và Thiếu máu</h3>
            <p className="text-sm text-gray-600">
              Đồng giúp hấp thu và sử dụng sắt
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/zinc-immunity">
            <h3 className="heading-5 mb-2">Kẽm và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Kẽm và đồng đều quan trọng cho miễn dịch
            </p>
          </Card>
          <Card href="/knowledge/vitamins-minerals/selenium-immunity">
            <h3 className="heading-5 mb-2">Selenium và Miễn dịch</h3>
            <p className="text-sm text-gray-600">
              Selenium và đồng đều là chất chống oxy hóa
            </p>
          </Card>
          <Card href="/knowledge/antioxidants">
            <h3 className="heading-5 mb-2">Chất chống Oxy hóa</h3>
            <p className="text-sm text-gray-600">
              Đồng là một phần của hệ thống chống oxy hóa
            </p>
          </Card>
        </div>
      </section>

      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Hầu hết người khỏe mạnh có thể đủ đồng từ thực phẩm 
          nếu ăn đa dạng. Thiếu đồng hiếm gặp. Nếu bạn có triệu chứng thiếu đồng hoặc có bệnh lý đặc biệt, 
          hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng. Không tự ý bổ sung đồng trừ khi có chỉ định.
        </p>
      </Callout>
    </main>
  );
}

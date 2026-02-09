import type { Metadata } from "next";
import { Breadcrumb } from "../../components/Breadcrumb";
import { Card } from "../../components/Card";
import { Callout } from "../../components/Callout";
import { TrendingUp, Apple, AlertCircle, Lightbulb, Info, Users } from "lucide-react";
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
          Khi bạn ăn thực phẩm có tinh bột hoặc đường, đường huyết sẽ tăng. 
          Nhưng không phải món nào cũng làm tăng đường huyết giống nhau. 
          GI và GL giúp bạn hiểu rõ hơn về điều này.
        </p>
      </header>

      {/* Key points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>GI</strong> cho biết thực phẩm làm tăng đường huyết nhanh hay chậm
          </li>
          <li>
            <strong>GL</strong> tính cả tốc độ và lượng bạn ăn vào
          </li>
          <li>Thực phẩm GI thấp giúp đường huyết tăng chậm, ổn định hơn</li>
          <li>GL hữu ích hơn vì tính đến cả khẩu phần bạn ăn</li>
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
            <strong>Chỉ số Đường huyết (GI)</strong> là một con số từ 0 đến 100 
            cho biết món ăn làm tăng đường huyết nhanh hay chậm. 
            GI cao = tăng nhanh, GI thấp = tăng chậm.
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
              <strong>Ví dụ dễ hiểu:</strong> Ăn bánh mì trắng (GI cao) giống như xe chạy nhanh lên dốc - 
              đường huyết tăng nhanh. Ăn táo (GI thấp) giống như xe đi chậm - đường huyết tăng từ từ, ổn định.
            </p>
          </div>
        </div>
      </section>

      {/* GI is not always the same */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Info className="w-6 h-6 text-blue-600" aria-hidden="true" />
          GI không phải lúc nào cũng giống nhau
        </h2>
        <div className="space-y-4">
          <p className="text-body">
            Cùng một loại thực phẩm, nhưng GI có thể thay đổi tùy theo cách bạn nấu, 
            độ chín, nhiệt độ khi ăn, và ăn riêng hay ăn chung với món khác.
          </p>

          <Card>
            <h3 className="heading-4 mb-3">Cách nấu ảnh hưởng đến GI</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Nấu nhừ, xay, nghiền</strong> → GI tăng cao hơn
                <p className="text-xs text-gray-600 mt-1 ml-4">
                  Ví dụ: Khoai tây luộc nguyên củ có GI thấp hơn khoai tây nghiền. 
                  Cháo có GI cao hơn cơm vì gạo đã được nấu nhừ.
                </p>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Độ chín của trái cây</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Trái cây càng chín</strong> → GI càng cao
                <p className="text-xs text-gray-600 mt-1 ml-4">
                  Chuối xanh: GI thấp. Chuối chín vàng: GI trung bình. Chuối chín nẫu: GI cao.
                </p>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Nhiệt độ khi ăn</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Cơm nóng</strong> → GI cao hơn
              </li>
              <li>
                <strong>Cơm nguội</strong> → GI thấp hơn (do tinh bột kháng hình thành)
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Ăn riêng hay ăn chung</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Ăn cơm một mình</strong> → đường huyết tăng nhanh
              </li>
              <li>
                <strong>Ăn cơm kèm thịt, rau, dầu mỡ</strong> → đường huyết tăng chậm hơn
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Low GI ≠ Eat freely */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <AlertCircle className="w-6 h-6 text-amber-600" aria-hidden="true" />
          GI thấp ≠ Ăn thoải mái
        </h2>
        <div className="space-y-4">
          <p className="text-body">
            Nhiều người nghĩ thực phẩm GI thấp thì có thể ăn bao nhiêu cũng được. 
            Điều này <strong>không đúng</strong>.
          </p>

          <Callout variant="warning" title="Tại sao?">
            <ul className="space-y-2 text-sm">
              <li>
                Thực phẩm GI thấp nhưng <strong>ăn nhiều</strong> vẫn làm đường huyết tăng cao
              </li>
              <li>
                Ví dụ: Táo có GI thấp, nhưng ăn 3-4 quả cùng lúc vẫn làm đường huyết tăng đáng kể
              </li>
            </ul>
          </Callout>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của khẩu phần và GL</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>khẩu phần nhỏ</strong> → GL thấp → đường huyết tăng ít
              </p>
              <p>
                <strong>khẩu phần lớn</strong> → GL cao → đường huyết tăng nhiều
              </p>
              <div className="bg-gray-50 rounded-lg p-3 mt-3">
                <p className="font-medium mb-2">Ví dụ thực tế:</p>
                <ul className="space-y-1 text-xs">
                  <li>• Dưa hấu có GI cao, nhưng chỉ ăn 1-2 miếng nhỏ (GL thấp) thì không sao</li>
                  <li>• Cơm gạo lứt có GI trung bình, nhưng ăn 3-4 bát (GL cao) vẫn làm đường huyết tăng mạnh</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Individual differences */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Users className="w-6 h-6 text-purple-600" aria-hidden="true" />
          Mỗi người phản ứng đường huyết khác nhau
        </h2>
        <div className="space-y-4">
          <p className="text-body">
            Cùng một món ăn, nhưng mỗi người có thể tăng đường huyết khác nhau. 
            Điều này phụ thuộc vào nhiều yếu tố:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <h3 className="heading-5 mb-2">Tuổi tác</h3>
              <p className="text-sm text-gray-600">
                Người lớn tuổi thường nhạy cảm với đường hơn
              </p>
            </Card>

            <Card>
              <h3 className="heading-5 mb-2">Tình trạng sức khỏe</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Đái tháo đường: đường huyết tăng cao hơn</li>
                <li>• Gan nhiễm mỡ: xử lý đường kém hiệu quả</li>
                <li>• Thừa cân: kháng insulin, đường huyết tăng nhiều hơn</li>
              </ul>
            </Card>

            <Card>
              <h3 className="heading-5 mb-2">Lối sống</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ngủ ít: cơ thể xử lý đường kém</li>
                <li>• Stress: làm tăng đường huyết</li>
                <li>• Ít vận động: cơ thể không sử dụng đường hiệu quả</li>
              </ul>
            </Card>

            <Card>
              <h3 className="heading-5 mb-2">Lưu ý quan trọng</h3>
              <p className="text-sm text-gray-600">
                Bạn cần theo dõi đường huyết của chính mình để biết món nào phù hợp, 
                không nên áp dụng máy móc theo bảng GI/GL.
              </p>
            </Card>
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
            <strong>Tải lượng Đường huyết (GL)</strong> tính đến cả{" "}
            <strong>tốc độ</strong> (GI) và <strong>lượng</strong> bạn ăn vào. 
            GL cho biết mức độ tăng đường huyết thực tế khi bạn ăn một khẩu phần cụ thể.
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
                <strong>Ví dụ:</strong> Dưa hấu có GI cao (72), nhưng một miếng nhỏ chỉ chứa khoảng 6g carbohydrate. 
                GL của nó chỉ là 4 (thấp). Vậy nên ăn một miếng dưa hấu nhỏ sẽ không làm 
                đường huyết tăng nhiều như bạn nghĩ.
              </p>
              <p>
                <strong>Ngược lại:</strong> Một bát cơm trắng có GI trung bình (73) nhưng chứa nhiều carbohydrate (45g), 
                nên GL của nó là 33 (cao). Vậy nên nó sẽ làm đường huyết tăng nhiều hơn.
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

      {/* Why important */}
      <section className="space-y-4">
        <h2 className="heading-2">Tại sao GI và GL quan trọng trong Dinh dưỡng lâm sàng?</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">1. Đối với người đái tháo đường</h3>
            <p className="text-body mb-3">
              Giữ đường huyết ổn định rất quan trọng. Thực phẩm có GI/GL thấp giúp:
            </p>
            <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
              <li>Đường huyết tăng chậm và ổn định hơn</li>
              <li>Giảm nguy cơ đường huyết tăng đột ngột</li>
              <li>Giúp kiểm soát đường huyết tốt hơn</li>
              <li>Giảm cảm giác đói và thèm ăn</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">2. Đối với tim mạch</h3>
            <p className="text-body">
              Ăn nhiều thực phẩm GI thấp có thể giúp giảm nguy cơ bệnh tim mạch 
              và cải thiện mỡ máu.
            </p>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">3. Đối với cân nặng</h3>
            <p className="text-body">
              Thực phẩm GI thấp thường giúp bạn no lâu hơn, hỗ trợ 
              quản lý cân nặng và giảm cảm giác thèm ăn.
            </p>
          </Card>
        </div>
      </section>

      {/* Vietnamese food table */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Apple className="w-6 h-6 text-green-600" aria-hidden="true" />
          Bảng GI/GL các thực phẩm phổ biến ở Việt Nam
        </h2>
        <Callout variant="info" title="Lưu ý">
          <p className="text-sm mb-2">
            Giá trị dưới đây là ước tính trung bình, có thể thay đổi theo cách nấu và từng người.
          </p>
        </Callout>

        <div className="space-y-6">
          {/* Tinh bột */}
          <Card>
            <h3 className="heading-4 mb-3">🍚 Nhóm tinh bột – Cơm, Bún, Phở, Bánh</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Thực phẩm</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GI</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GL (khẩu phần thường ăn)</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Cơm trắng</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao (≈ 30–35)</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Ăn nhiều làm đường huyết tăng nhanh</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Cơm gạo lứt</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình (≈ 15–20)</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Tốt hơn cơm trắng nhưng vẫn cần kiểm soát lượng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Cháo trắng</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Rất cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Dễ làm đường huyết tăng mạnh</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Bún tươi</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình–cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Ít xơ, ăn nhanh đói</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Phở</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình–cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Phụ thuộc lượng bánh phở</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Bánh mì trắng</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình–cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Đường huyết tăng nhanh</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Bánh mì nguyên cám</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Tốt hơn bánh mì trắng</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Củ */}
          <Card>
            <h3 className="heading-4 mb-3">🥔 Nhóm củ – Khoai</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Thực phẩm</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GI</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GL</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Khoai lang luộc</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">No lâu hơn cơm trắng</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Khoai tây luộc</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Nghiền/xay → GI tăng</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Khoai tây chiên</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Không khuyến khích</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Trái cây */}
          <Card>
            <h3 className="heading-4 mb-3">🍌 Nhóm trái cây phổ biến</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Trái cây</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GI</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GL (1 khẩu phần)</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Chuối chín</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Chuối càng chín → GI càng cao</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Táo</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Phù hợp cho người đái tháo đường</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Cam</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Ăn nguyên múi tốt hơn ép</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Xoài chín</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình–cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Nên ăn lượng nhỏ</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Đu đủ</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Thấp–trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Ăn vừa phải</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Dưa hấu</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">GI cao nhưng GL thấp nếu ăn ít</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Đậu */}
          <Card>
            <h3 className="heading-4 mb-3">🫘 Nhóm đậu – Nguồn đạm thực vật</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Thực phẩm</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GI</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GL</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Đậu phụ</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Rất thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Hầu như không làm tăng đường huyết</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Đậu xanh (nấu nguyên hạt)</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Tốt cho kiểm soát đường huyết</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Chè đậu xanh (có đường)</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Do thêm đường</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Sữa đậu nành không đường</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Lựa chọn tốt</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Sữa đậu nành có đường</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình–cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Cần hạn chế</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* Sữa và đồ uống */}
          <Card>
            <h3 className="heading-4 mb-3">🥛 Nhóm sữa – Đồ uống</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-3 py-2 text-left">Thực phẩm</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GI</th>
                    <th className="border border-gray-300 px-3 py-2 text-center">GL</th>
                    <th className="border border-gray-300 px-3 py-2 text-left">Ghi chú</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Sữa tươi không đường</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-green-600 font-medium">Thấp</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Có thể dùng hàng ngày</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Sữa tươi có đường</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-yellow-600 font-medium">Trung bình</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Nên hạn chế</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-3 py-2">Nước ngọt có gas</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Không khuyến khích</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-3 py-2">Trà sữa</td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-center"><span className="text-red-600 font-medium">Rất cao</span></td>
                    <td className="border border-gray-300 px-3 py-2 text-xs">Dễ gây tăng đường huyết mạnh</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
        </div>

        <Callout variant="info" title="Cách dùng bảng GI/GL đúng cách">
          <ul className="space-y-2 text-sm">
            <li>
              <strong>❌ Không chọn thực phẩm chỉ dựa vào GI</strong>
            </li>
            <li>
              <strong>✅ Luôn quan tâm khẩu phần ăn (GL)</strong>
            </li>
            <li>
              <strong>✅ Ưu tiên:</strong> GI thấp – GL thấp, ăn kèm đạm, rau, chất béo tốt
            </li>
            <li>
              <strong>⚠️ Cùng một món ăn:</strong> Người này tăng đường nhiều, người khác tăng ít 
              → cần theo dõi và điều chỉnh cá nhân
            </li>
          </ul>
          <div className="mt-3 p-3 bg-blue-50 rounded border border-blue-200">
            <p className="text-sm font-medium text-blue-900">
              📌 Câu ghi nhớ: GI cho biết "tăng nhanh hay chậm", GL cho biết "tăng nhiều hay ít". 
              Muốn kiểm soát đường huyết tốt → phải xem cả hai.
            </p>
          </div>
        </Callout>
      </section>

      {/* Practical application - Vietnamese life */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Áp dụng nhanh trong đời sống Việt
        </h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-4 mb-3">Khi ăn cơm</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Nên ăn kèm: thịt/cá, rau xanh, dầu mỡ tốt (dầu oliu, dầu đậu nành)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Giảm lượng cơm trắng, thay một phần bằng cơm gạo lứt hoặc rau củ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Ăn rau trước, sau đó mới ăn cơm và thức ăn</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Khi ăn bún/phở</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Chú ý lượng bánh: không nên ăn quá nhiều bánh phở/bún</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Ăn kèm nhiều rau thơm, giá đỗ</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Thêm thịt/cá để làm chậm hấp thu đường</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>Hạn chế nước dùng quá ngọt</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Trái cây nên ăn lúc nào?</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Ăn sau bữa ăn chính (không ăn khi đói)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Chọn trái cây GI thấp: táo, cam, ổi</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold mt-0.5">•</span>
                <span>Ăn lượng vừa phải: 1-2 phần mỗi lần</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span>Tránh ép nước, nên ăn nguyên quả để có chất xơ</span>
              </li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Uống nước ngọt, sữa có đường</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span><strong>Nước ngọt có gas:</strong> hạn chế tối đa, chỉ uống khi thực sự cần thiết</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 font-bold mt-0.5">•</span>
                <span><strong>Sữa có đường:</strong> nên chuyển sang sữa không đường, hoặc chỉ uống 1 ly nhỏ/ngày</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-0.5">•</span>
                <span><strong>Trà sữa:</strong> nên tránh hoặc chỉ uống rất ít, không đường</span>
              </li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Practical application */}
      <section className="space-y-4">
        <h2 className="heading-2 flex items-center gap-2">
          <Lightbulb className="w-6 h-6 text-amber-600" aria-hidden="true" />
          Cách áp dụng trong thực tế
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
                  <strong>Kết hợp với đạm và chất béo:</strong> Giúp làm chậm hấp thu đường
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-600 font-bold mt-0.5">✗</span>
                <span>
                  <strong>Hạn chế:</strong> Đường, nước ngọt, bánh kẹo, 
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
              <strong>GI/GL không phải là tất cả:</strong> Chỉ là công cụ hỗ trợ, 
              không phải quy tắc tuyệt đối. Cần xem xét toàn bộ chế độ ăn.
            </li>
            <li>
              <strong>Kết hợp với các yếu tố khác:</strong> Lượng ăn vào, cách nấu, 
              thời gian ăn, và các món khác trong bữa ăn đều ảnh hưởng.
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
        
        <Card>
          <h3 className="heading-4 mb-3">GI/GL không phải là tất cả</h3>
          <p className="text-body mb-3">
            Mặc dù GI và GL rất hữu ích, nhưng chúng không phải là yếu tố duy nhất cần quan tâm:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-sm text-gray-700">
            <li><strong>Chất dinh dưỡng khác:</strong> vitamin, khoáng chất, chất xơ, đạm, chất béo tốt</li>
            <li><strong>Sức khỏe tổng thể:</strong> không chỉ tập trung vào đường huyết</li>
            <li><strong>Sở thích cá nhân:</strong> ăn uống phải phù hợp với khẩu vị và văn hóa</li>
            <li><strong>Cân bằng:</strong> không nên cực đoan, loại bỏ hoàn toàn thực phẩm GI cao</li>
          </ul>
        </Card>
      </section>

      {/* Related articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/diabetes-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Đái tháo đường</h3>
            <p className="text-sm text-gray-600">
              Tìm hiểu thêm về cách quản lý dinh dưỡng cho người đái tháo đường
            </p>
          </Card>
          <Card href="/knowledge/needs-estimation">
            <h3 className="heading-5 mb-2">Ước tính nhu cầu dinh dưỡng</h3>
            <p className="text-sm text-gray-600">
              Hiểu cách ước tính nhu cầu dinh dưỡng tổng thể
            </p>
          </Card>
        </div>
      </section>

      {/* Conclusion */}
      <section className="space-y-4">
        <h2 className="heading-2">Lời kết</h2>
        <Card>
          <p className="text-body mb-3">
            Hiểu đúng về GI và GL giúp bạn ăn uống thông minh hơn, đặc biệt nếu bạn đang quan tâm 
            đến đường huyết, tim mạch hoặc cân nặng. Nhưng hãy nhớ:
          </p>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span><strong>Không cần lo sợ quá mức:</strong> biết cách kết hợp và điều chỉnh khẩu phần là được</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span><strong>Linh hoạt trong ăn uống:</strong> không cần kiêng khem cực đoan</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span><strong>Theo dõi cá nhân:</strong> mỗi người phản ứng khác nhau, cần điều chỉnh phù hợp</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 font-bold mt-0.5">•</span>
              <span><strong>Tư vấn y tế:</strong> bài viết này chỉ mang tính giáo dục, không thay thế tư vấn của bác sĩ hoặc chuyên gia dinh dưỡng</span>
            </li>
          </ul>
          <p className="text-sm text-gray-600 mt-4 italic">
            Chúc bạn có một chế độ ăn uống lành mạnh và phù hợp với nhu cầu của mình!
          </p>
        </Card>
      </section>

      {/* Safety disclaimer */}
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

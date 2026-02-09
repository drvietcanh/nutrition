import type { Metadata } from "next";
import Link from "next/link";
import { Heart, CheckCircle, Info, AlertCircle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Người Tăng Huyết áp",
  description:
    "Hướng dẫn dinh dưỡng cho người tăng huyết áp: cách giảm muối, thực phẩm tốt cho huyết áp, và thực đơn mẫu Việt Nam.",
  keywords: [
    "tăng huyết áp",
    "dinh dưỡng tăng huyết áp",
    "giảm muối",
    "thực đơn tăng huyết áp",
    "huyết áp cao",
  ],
  openGraph: {
    title: "Dinh dưỡng cho Người Tăng Huyết áp",
    description:
      "Hướng dẫn dinh dưỡng cho người tăng huyết áp: cách giảm muối và thực đơn mẫu.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-tang-huyet-ap",
  },
};

export default function DinhDuongTangHuyetApPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Người Tăng Huyết áp" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng cho Người Tăng Huyết áp
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Tăng huyết áp là bệnh phổ biến ở Việt Nam. Ăn uống đúng cách có thể giúp kiểm soát huyết áp, 
            giảm nguy cơ biến chứng tim mạch, và có thể giảm nhu cầu thuốc.
          </p>
          <div className="rounded-lg border border-red-200 bg-red-50 p-4">
            <p className="text-sm text-red-900 mb-2">
              <strong>👉 Nguyên tắc chính:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-red-900">
              <li>Giảm muối trong ăn uống</li>
              <li>Ăn nhiều rau củ quả</li>
              <li>Chọn thực phẩm tốt cho tim mạch</li>
              <li>Hạn chế rượu bia</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này hướng dẫn cách ăn uống lành mạnh để kiểm soát huyết áp, 
            với các món ăn quen thuộc của người Việt.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Thông tin này giúp bạn hiểu về dinh dưỡng cho người tăng huyết áp. 
            Đây không phải là hướng dẫn điều trị. Nếu bạn bị tăng huyết áp, hãy tham khảo bác sĩ.
          </p>
        </Callout>
      </header>

      {/* 2. Why Salt Matters */}
      <section aria-labelledby="salt-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="salt-heading" className="heading-2 whitespace-nowrap">
            Vì sao Phải Giảm Muối?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Muối (natri) làm tăng huyết áp. Người Việt thường ăn quá nhiều muối - gấp 2-3 lần so với khuyến nghị.
          </p>

          <div className="bg-red-50 border border-red-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Muối có ở đâu?</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-900 mb-1">1. Muối ăn trực tiếp:</p>
                <p className="text-gray-700">Muối trong nấu ăn, nước mắm, nước tương, bột ngọt</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">2. Thực phẩm chế biến sẵn:</p>
                <p className="text-gray-700">Mì tôm, đồ hộp, thịt nguội, xúc xích, dưa muối, cà muối</p>
              </div>
              <div>
                <p className="font-medium text-gray-900 mb-1">3. Thực phẩm ngoài hàng:</p>
                <p className="text-gray-700">Đồ ăn ngoài hàng thường có nhiều muối để tăng hương vị</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Khuyến nghị về muối:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Người bình thường: Không quá 5g muối/ngày (khoảng 1 thìa cà phê)</li>
              <li>Người tăng huyết áp: Không quá 3g muối/ngày (khoảng 1/2 thìa cà phê)</li>
              <li>1 thìa canh nước mắm có khoảng 1.5-2g muối</li>
              <li>1 gói mì tôm có khoảng 2-3g muối</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 3. How to Reduce Salt */}
      <section aria-labelledby="reduce-salt-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="reduce-salt-heading" className="heading-2 whitespace-nowrap">
            Cách Giảm Muối trong Ăn uống
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="1. Nấu ăn tại nhà" />
              <CardContent>
                <p className="text-body-sm">
                  Nấu ăn tại nhà giúp bạn kiểm soát được lượng muối. Giảm dần muối và bột ngọt, 
                  dùng nhiều gia vị tự nhiên như tỏi, gừng, sả, nghệ.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="2. Dùng gia vị thay muối" />
              <CardContent>
                <p className="text-body-sm">
                  Thay vì dùng nhiều muối, hãy dùng tỏi, gừng, sả, nghệ, ớt, rau thơm. 
                  Chúng tạo hương vị đậm đà mà không cần nhiều muối.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="3. Hạn chế thực phẩm chế biến" />
              <CardContent>
                <p className="text-body-sm">
                  Tránh mì tôm, đồ hộp, thịt nguội, xúc xích, dưa muối, cà muối. 
                  Những thực phẩm này có rất nhiều muối.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="4. Đọc nhãn thực phẩm" />
              <CardContent>
                <p className="text-body-sm">
                  Khi mua thực phẩm đóng gói, xem lượng natri (sodium) trên nhãn. 
                  Nên chọn sản phẩm có ít hơn 300mg natri/100g.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="5. Giảm nước mắm, nước tương" />
              <CardContent>
                <p className="text-body-sm">
                  Nước mắm và nước tương có nhiều muối. Chỉ dùng 1-2 thìa canh/ngày, 
                  hoặc pha loãng với nước lọc.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="6. Không chấm thêm muối" />
              <CardContent>
                <p className="text-body-sm">
                  Khi ăn, không nên chấm thêm muối, nước mắm, hoặc nước tương. 
                  Thức ăn đã nấu đủ mặn rồi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3.5. Sodium Content Tables */}
      <section aria-labelledby="sodium-tables-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="sodium-tables-heading" className="heading-2 whitespace-nowrap">
            Bảng Hàm lượng Natri trong Thực phẩm Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <div className="space-y-4">
          <p className="text-body-lg">
            Dưới đây là bảng phân loại thực phẩm Việt Nam theo hàm lượng natri (muối) để giúp bạn lựa chọn phù hợp:
          </p>
          <p className="text-body-sm text-gray-600">
            <strong>Lưu ý:</strong> 1g muối = 400mg natri. Khuyến nghị cho người tăng huyết áp: không quá 3g muối/ngày (tương đương 1200mg natri/ngày).
          </p>

          {/* Very High Sodium */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader icon={AlertCircle} title="🔴 Rất Cao (&gt;1000mg/100g) - Tránh Hoàn Toàn" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có rất nhiều natri, nên tránh hoàn toàn:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Natri (mg/100g hoặc 100ml)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nước mắm</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~8000</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">1 thìa canh (~15ml) có ~1200mg natri</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Nước tương</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~6000</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">1 thìa canh (~15ml) có ~900mg natri</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Mì tôm gói</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~1500-2000/gói</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">1 gói mì tôm có ~2-3g muối</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Dưa muối</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~1000-1500</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Dưa cà muối, dưa hành</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cà muối</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~1000-1500</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cà pháo muối</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt nguội</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~1000-1500</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Thịt nguội, giò chả</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Xúc xích</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~1000-1500</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Xúc xích các loại</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bột ngọt (MSG)</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~12000</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">1 thìa cà phê (~5g) có ~600mg natri</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* High Sodium */}
          <Card className="border-orange-200 bg-orange-50/30">
            <CardHeader icon={AlertCircle} title="🟠 Cao (500-1000mg/100g) - Hạn chế Nghiêm ngặt" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có nhiều natri, nên hạn chế nghiêm ngặt:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-orange-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Natri (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Đồ hộp</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~500-800</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Cá hộp, thịt hộp, rau củ hộp</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh mì</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~400-600</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Bánh mì thường có muối để tạo vị</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phô mai</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~600-800</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Phô mai các loại</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Bánh quy mặn</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~500-700</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Bánh quy có muối</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Medium Sodium */}
          <Card className="border-yellow-200 bg-yellow-50/30">
            <CardHeader icon={Info} title="🟡 Trung bình (100-500mg/100g) - Ăn Vừa phải" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có natri trung bình, có thể ăn vừa phải:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-yellow-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Natri (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt, cá tươi</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~100-200</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Thịt lợn, thịt gà, cá tươi (chưa nấu)</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trứng</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~140</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Trứng gà, trứng vịt</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Sữa</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~50</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Sữa tươi (nhưng uống nhiều nên tổng lượng cao)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Low Sodium */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={CheckCircle} title="🟢 Thấp (&lt;100mg/100g) - Ăn Tự do" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Những thực phẩm này có ít natri, có thể ăn tự do:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-green-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Thực phẩm</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Natri (mg/100g)</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Hầu hết rau củ quả tươi</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt;10</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Rau muống, rau cải, cà chua, dưa chuột...</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Trái cây tươi</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt;10</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Chuối, cam, táo, ổi...</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Gạo</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">~5</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Gạo trắng, gạo lứt</td>
                    </tr>
                    <tr className="bg-neutral-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Ngũ cốc chưa chế biến</strong></td>
                      <td className="px-4 py-3 text-sm text-neutral-700 text-center">&lt;10</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Yến mạch, lúa mì nguyên hạt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Vietnamese Dishes Sodium Table */}
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={Info} title="🍲 Món Ăn Việt Nam theo Hàm lượng Natri" />
            <CardContent>
              <p className="text-body-sm mb-3">
                Dưới đây là phân loại một số món ăn Việt Nam phổ biến theo hàm lượng natri:
              </p>
              <div className="overflow-x-auto my-4">
                <table className="min-w-full divide-y divide-neutral-200 border border-neutral-200 bg-white">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Món ăn</th>
                      <th className="px-4 py-3 text-center text-sm font-semibold text-neutral-900">Hàm lượng Natri</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-neutral-900">Ghi chú</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-neutral-200">
                    <tr className="bg-red-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt kho tàu</strong></td>
                      <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Rất cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nhiều nước mắm, muối, đường</td>
                    </tr>
                    <tr className="bg-red-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Canh chua cá (nấu mặn)</strong></td>
                      <td className="px-4 py-3 text-sm text-red-700 text-center font-semibold">Cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nếu nấu với nhiều nước mắm, muối</td>
                    </tr>
                    <tr className="bg-orange-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Phở bò (nước dùng đậm)</strong></td>
                      <td className="px-4 py-3 text-sm text-orange-700 text-center font-semibold">Cao</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nước phở thường có nhiều muối</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Canh chua cá (nấu ít muối)</strong></td>
                      <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Trung bình</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nếu nấu ít muối, nhiều me, cà chua</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Cá hấp</strong></td>
                      <td className="px-4 py-3 text-sm text-yellow-700 text-center font-semibold">Thấp-trung bình</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nếu không chấm nhiều nước mắm</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau luộc</strong></td>
                      <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nếu không nêm muối</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Thịt gà luộc</strong></td>
                      <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Thấp</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Nếu không chấm muối, nước mắm</td>
                    </tr>
                    <tr className="bg-green-50">
                      <td className="px-4 py-3 text-sm text-neutral-700"><strong>Rau sống</strong></td>
                      <td className="px-4 py-3 text-sm text-green-700 text-center font-semibold">Rất thấp</td>
                      <td className="px-4 py-3 text-sm text-neutral-700">Rau sống không có muối</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <p className="text-sm font-semibold text-amber-900 mb-2">
              💡 Mẹo đọc nhãn thực phẩm
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Xem lượng natri (sodium) trên nhãn - tính bằng mg</li>
              <li>Chọn sản phẩm có ít hơn 300mg natri/100g</li>
              <li>Chú ý khẩu phần: nếu khẩu phần là 50g nhưng bạn ăn 100g, lượng natri sẽ gấp đôi</li>
              <li>Tránh sản phẩm có "sodium", "salt", "soda" trong thành phần đầu tiên</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 4. Foods Good for Blood Pressure */}
      <section aria-labelledby="good-foods-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="good-foods-heading" className="heading-2 whitespace-nowrap">
            Thực phẩm Tốt cho Huyết áp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Một số thực phẩm có thể giúp giảm huyết áp:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🥬 Rau củ quả</h3>
              <p className="text-sm text-gray-700 mb-2">
                Rau muống, rau cải, cà chua, chuối, khoai tây...
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giàu kali - giúp giảm huyết áp</li>
                <li>• Nhiều chất xơ</li>
                <li>• Ít calo, tốt cho cân nặng</li>
                <li>• Nên ăn ít nhất 5 phần/ngày</li>
              </ul>
            </Card>

            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🐟 Cá</h3>
              <p className="text-sm text-gray-700 mb-2">
                Cá thu, cá hồi, cá trê, cá lóc...
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giàu omega-3 - tốt cho tim mạch</li>
                <li>• Ít mỡ hơn thịt</li>
                <li>• Nên ăn 2-3 lần/tuần</li>
              </ul>
            </Card>

            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🥛 Sữa ít béo</h3>
              <p className="text-sm text-gray-700 mb-2">
                Sữa tươi, sữa chua không đường
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giàu canxi - tốt cho xương và huyết áp</li>
                <li>• Chọn sữa ít béo, không đường</li>
                <li>• Nên uống 1-2 ly/ngày</li>
              </ul>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <h3 className="heading-5 mb-2">🫘 Đậu và Hạt</h3>
              <p className="text-sm text-gray-700 mb-2">
                Đậu phụ, đậu xanh, đậu đỏ, hạt điều, hạt óc chó...
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giàu kali, magie</li>
                <li>• Nhiều chất xơ</li>
                <li>• Tốt cho tim mạch</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Foods to Avoid */}
      <section aria-labelledby="avoid-foods-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="avoid-foods-heading" className="heading-2 whitespace-nowrap">
            Thực phẩm Nên Hạn chế
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Thực phẩm có nhiều muối:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Mì tôm, đồ hộp, thịt nguội, xúc xích</li>
              <li>Dưa muối, cà muối, dưa cà</li>
              <li>Nước mắm, nước tương (dùng nhiều)</li>
              <li>Bột ngọt, bột nêm</li>
              <li>Đồ ăn ngoài hàng (thường có nhiều muối)</li>
            </ul>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Rượu bia:</h3>
            <p className="text-sm text-gray-700">
              Rượu bia làm tăng huyết áp. Nên hạn chế hoặc bỏ hoàn toàn. 
              Nếu uống, chỉ nên uống 1-2 ly rượu nhỏ/ngày (cho nam), 1 ly/ngày (cho nữ).
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Thực phẩm nhiều mỡ:</h3>
            <p className="text-sm text-gray-700">
              Thịt mỡ, đồ chiên rán nhiều dầu, bơ, mỡ động vật. 
              Nên chọn thịt nạc, dùng dầu thực vật, hạn chế chiên rán.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Sample Menu */}
      <section aria-labelledby="sample-menu-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="sample-menu-heading" className="heading-2 whitespace-nowrap">
            Thực đơn Mẫu Một Ngày
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌅 Bữa sáng (7:00)</h3>
                <p className="text-sm text-gray-700">
                  <strong>Lựa chọn 1:</strong> 1 tô phở bò (ít nước, nhiều rau) + Rau thơm<br />
                  <strong>Lựa chọn 2:</strong> 1 bát cháo thịt (ít muối) + Rau mùi<br />
                  <strong>Lựa chọn 3:</strong> 1 ổ bánh mì thịt nạc + 1 ly sữa tươi không đường
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌞 Bữa trưa (12:00)</h3>
                <p className="text-sm text-gray-700">
                  1.5 bát cơm + Cá hấp (với gừng, sả, ít muối) + Canh rau cải (ít muối) + Rau muống luộc + Rau sống
                </p>
                <p className="text-xs text-gray-600 italic mt-1">
                  → Cá hấp không cần nhiều muối, vẫn ngon nhờ gừng và sả. Canh nấu ít muối, nhiều rau.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍎 Bữa phụ chiều (15:00)</h3>
                <p className="text-sm text-gray-700">
                  1 quả chuối, hoặc 1 quả táo, hoặc 1 hộp sữa chua không đường
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌙 Bữa tối (18:00)</h3>
                <p className="text-sm text-gray-700">
                  1 bát cơm + Thịt gà luộc (không chấm muối) + Canh mướp (ít muối) + Đậu bắp luộc + Rau sống
                </p>
                <p className="text-xs text-gray-600 italic mt-1">
                  → Thịt luộc vẫn ngon, không cần chấm muối. Có thể chấm với nước mắm pha loãng (1 thìa nước mắm + 2 thìa nước lọc).
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💧 Uống nước</h3>
                <p className="text-sm text-gray-700">
                  Uống nước lọc suốt ngày, tổng cộng khoảng 1.5-2 lít. Có thể uống trà xanh, nước chanh không đường.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-4">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              💡 Mẹo nấu ăn ít muối nhưng vẫn ngon
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Dùng nhiều tỏi, gừng, sả, nghệ để tăng hương vị</li>
              <li>Nấu canh với nhiều rau, ít muối - rau tạo vị ngọt tự nhiên</li>
              <li>Hấp cá với gừng, sả - không cần muối vẫn thơm ngon</li>
              <li>Luộc thịt, không cần chấm muối - có thể chấm với nước mắm pha loãng</li>
              <li>Ăn nhiều rau sống - rau sống không cần muối</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Cooking Tips */}
      <section aria-labelledby="cooking-tips-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="cooking-tips-heading" className="heading-2 whitespace-nowrap">
            Cách Nấu ăn Ít Muối nhưng Vẫn Ngon
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="space-y-3">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="Thịt kho tàu" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu ít muối:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  <li>Giảm muối, giảm đường - dùng nhiều tỏi, gừng, sả</li>
                  <li>Thịt vẫn ngon nhờ có tỏi, gừng, sả tạo hương vị đậm đà</li>
                  <li>Có thể thêm nghệ để tăng màu sắc và hương vị</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="Canh chua cá" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu ít muối:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  <li>Dùng nhiều me, cà chua để tạo vị chua tự nhiên</li>
                  <li>Ít muối, ít bột ngọt - dùng nhiều rau (cà chua, đậu bắp, giá đỗ)</li>
                  <li>Rau tạo vị ngọt tự nhiên, không cần nhiều muối</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="Cá hấp" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu ít muối:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  <li>Hấp cá với gừng, sả, hành lá - không cần muối</li>
                  <li>Ăn kèm với nước mắm pha chua ngọt (ít nước mắm, nhiều chanh, đường)</li>
                  <li>Cá hấp vẫn thơm ngon, không cần nhiều muối</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related content */}
      <section aria-labelledby="related-heading" className="space-y-4">
        <h2 id="related-heading" className="text-xl font-semibold sm:text-2xl">
          Bài viết Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/knowledge/nau-an-lanh-manh-kieu-viet">
            <CardHeader icon={CheckCircle} title="Cách Nấu ăn Lành mạnh" />
            <CardContent>
              <p className="text-body-sm">
                Học cách nấu ăn lành mạnh với các phương pháp Việt Nam.
              </p>
            </CardContent>
          </Card>
          <Card href="/knowledge/dinh-duong-hang-ngay">
            <CardHeader icon={CheckCircle} title="Dinh dưỡng Hàng ngày" />
            <CardContent>
              <p className="text-body-sm">
                Hướng dẫn ăn uống cân bằng hàng ngày với thực phẩm Việt Nam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. Nếu bạn bị tăng huyết áp, 
          hãy tham khảo bác sĩ để được tư vấn dinh dưỡng phù hợp với tình trạng của bạn. 
          Dinh dưỡng chỉ là một phần trong điều trị tăng huyết áp, bạn vẫn cần dùng thuốc theo chỉ định của bác sĩ.
        </p>
      </div>
    </main>
  );
}

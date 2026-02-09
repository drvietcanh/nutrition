import type { Metadata } from "next";
import Link from "next/link";
import { UtensilsCrossed, CheckCircle, Info, Users, Apple } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng Hàng ngày cho Người Việt",
  description:
    "Hướng dẫn ăn uống cân bằng hàng ngày, khẩu phần phù hợp, và bữa ăn gia đình Việt Nam. Cách đọc nhãn thực phẩm và lựa chọn thực phẩm lành mạnh.",
  keywords: [
    "dinh dưỡng hàng ngày",
    "ăn uống cân bằng",
    "khẩu phần ăn",
    "bữa ăn gia đình",
    "thực phẩm Việt Nam",
  ],
  openGraph: {
    title: "Dinh dưỡng Hàng ngày cho Người Việt",
    description:
      "Hướng dẫn ăn uống cân bằng hàng ngày, khẩu phần phù hợp, và bữa ăn gia đình Việt Nam.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-hang-ngay",
  },
};

export default function DinhDuongHangNgayPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng Hàng ngày" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-blue-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng Hàng ngày cho Người Việt
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Ăn uống đúng cách không phải là điều phức tạp. Bạn không cần phải tính toán từng calo hay tuân theo 
            chế độ ăn khắt khe. Chỉ cần hiểu những nguyên tắc cơ bản và áp dụng vào bữa ăn hàng ngày của gia đình Việt Nam.
          </p>
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900 mb-2">
              <strong>👉 Nguyên tắc đơn giản:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-blue-900">
              <li>Ăn đa dạng các loại thực phẩm</li>
              <li>Cân bằng giữa cơm, rau, thịt cá</li>
              <li>Ăn đủ, không quá nhiều, không quá ít</li>
              <li>Uống đủ nước</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này giúp bạn hiểu cách ăn uống lành mạnh với các món ăn quen thuộc của người Việt, 
            không cần thay đổi quá nhiều thói quen hiện tại.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm mb-2">
            Nội dung này nhằm:
          </p>
          <ul className="list-disc space-y-1 pl-6 text-body-sm">
            <li>Giúp mọi người hiểu cách ăn uống cân bằng với thực phẩm Việt Nam</li>
            <li>Hướng dẫn cách lựa chọn và chế biến thực phẩm lành mạnh</li>
            <li>Giải thích cách đọc nhãn thực phẩm để lựa chọn tốt hơn</li>
          </ul>
          <p className="text-body-sm mt-3 font-semibold text-red-600">
            ⚠️ Lưu ý: Thông tin này chỉ mang tính giáo dục. Nếu bạn có vấn đề sức khỏe, hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.
          </p>
        </Callout>
      </header>

      {/* 2. What is Balanced Nutrition */}
      <section aria-labelledby="balanced-nutrition-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="balanced-nutrition-heading" className="heading-2 whitespace-nowrap">
            Ăn uống Cân bằng là gì?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Ăn uống cân bằng có nghĩa là bạn ăn đủ các nhóm thực phẩm cần thiết, không thiếu cũng không thừa. 
            Với người Việt, điều này có nghĩa là:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🍚 Tinh bột (Cơm, bánh mì, phở)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Cung cấp năng lượng chính cho cơ thể. Mỗi bữa nên có khoảng 1-2 bát cơm (tùy mức độ hoạt động).
              </p>
              <p className="text-xs text-gray-600 italic">
                Ví dụ: 1 bát cơm trắng, hoặc 1 tô phở, hoặc 2 lát bánh mì
              </p>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <h3 className="heading-5 mb-2">🥩 Đạm (Thịt, cá, trứng, đậu phụ)</h3>
              <p className="text-sm text-gray-700 mb-2">
                Giúp xây dựng và sửa chữa cơ thể. Mỗi bữa nên có khoảng 1 lòng bàn tay thịt/cá.
              </p>
              <p className="text-xs text-gray-600 italic">
                Ví dụ: 1 miếng thịt kho, 1 con cá rán, 2 quả trứng, hoặc 1 miếng đậu phụ
              </p>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🥬 Rau củ quả</h3>
              <p className="text-sm text-gray-700 mb-2">
                Cung cấp vitamin, chất xơ. Nên ăn nhiều rau, ít nhất 1-2 loại mỗi bữa.
              </p>
              <p className="text-xs text-gray-600 italic">
                Ví dụ: Rau muống xào, canh chua, rau sống, hoa quả tráng miệng
              </p>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <h3 className="heading-5 mb-2">🥛 Sữa và sản phẩm từ sữa</h3>
              <p className="text-sm text-gray-700 mb-2">
                Cung cấp canxi cho xương chắc khỏe. Nên uống 1-2 ly sữa/ngày hoặc ăn sữa chua.
              </p>
              <p className="text-xs text-gray-600 italic">
                Ví dụ: 1 ly sữa tươi, 1 hộp sữa chua, hoặc phô mai
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Vietnamese Family Meals */}
      <section aria-labelledby="family-meals-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="family-meals-heading" className="heading-2 whitespace-nowrap">
            Bữa ăn Gia đình Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bữa ăn gia đình Việt Nam truyền thống thường đã khá cân bằng. Hãy xem cách tối ưu hóa nó:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Bữa ăn Việt Nam điển hình</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">Bữa trưa/bữa tối thường có:</p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                  <li><strong>Cơm:</strong> 1-2 bát (tùy mức độ hoạt động)</li>
                  <li><strong>Canh:</strong> Canh chua, canh rau, canh thịt - vừa bổ sung nước, vừa có rau và đạm</li>
                  <li><strong>Món mặn:</strong> Thịt kho, cá rán, thịt luộc, hoặc đậu phụ</li>
                  <li><strong>Rau xào hoặc rau luộc:</strong> Rau muống, rau cải, đậu bắp...</li>
                  <li><strong>Rau sống:</strong> Rau thơm, giá đỗ, dưa chuột</li>
                </ul>
              </div>
              <div className="bg-white rounded p-3 border border-blue-200">
                <p className="text-xs font-semibold text-blue-900 mb-2">💡 Mẹo để bữa ăn lành mạnh hơn:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Ăn nhiều rau - nên có ít nhất 2 món rau trong bữa</li>
                  <li>Chọn thịt nạc, bỏ da, bỏ mỡ</li>
                  <li>Ăn cá 2-3 lần/tuần thay vì toàn thịt</li>
                  <li>Canh nên ít muối, ít bột ngọt</li>
                  <li>Ăn đủ cơm nhưng không quá nhiều</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Ví dụ bữa ăn mẫu trong tuần</h3>
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-medium text-gray-900 mb-1">Thứ Hai:</p>
                <p className="text-gray-700">Cơm + Canh chua cá + Rau muống xào tỏi + Trứng chiên</p>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-medium text-gray-900 mb-1">Thứ Ba:</p>
                <p className="text-gray-700">Cơm + Thịt kho tàu + Canh rau cải + Đậu bắp luộc</p>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-medium text-gray-900 mb-1">Thứ Tư:</p>
                <p className="text-gray-700">Cơm + Cá rán + Canh mướp + Rau sống</p>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-medium text-gray-900 mb-1">Thứ Năm:</p>
                <p className="text-gray-700">Cơm + Đậu phụ sốt cà chua + Canh chua tôm + Rau cải xào</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Portion Sizes */}
      <section aria-labelledby="portion-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="portion-heading" className="heading-2 whitespace-nowrap">
            Khẩu phần Ăn Phù hợp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Không cần cân đo chính xác, chỉ cần ước lượng bằng mắt và bằng tay:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader icon={CheckCircle} title="Cơm/Tinh bột" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>1 bát cơm</strong> (khoảng 200g) cho người ít vận động
                </p>
                <p className="text-body-sm mb-2">
                  <strong>1.5-2 bát cơm</strong> cho người lao động nặng hoặc tập thể dục
                </p>
                <p className="text-xs text-gray-600 italic">
                  Có thể thay bằng: 1 tô phở, 1 đĩa bún, hoặc 2 lát bánh mì
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Thịt/Cá/Đạm" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>1 lòng bàn tay</strong> (không tính ngón tay) cho mỗi bữa
                </p>
                <p className="text-body-sm mb-2">
                  Khoảng 80-100g thịt nạc, hoặc 1 con cá nhỏ, hoặc 2 quả trứng
                </p>
                <p className="text-xs text-gray-600 italic">
                  Nên ăn cá 2-3 lần/tuần, đậu phụ 1-2 lần/tuần
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Rau củ" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Nhiều hơn đạm</strong> - nên chiếm ít nhất 1/2 đĩa ăn
                </p>
                <p className="text-body-sm mb-2">
                  Mỗi bữa nên có ít nhất 1-2 loại rau khác nhau
                </p>
                <p className="text-xs text-gray-600 italic">
                  Ví dụ: Rau muống xào, canh rau, rau sống, hoa quả
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Chất béo" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>1 thìa canh dầu ăn</strong> cho mỗi bữa (khoảng 15ml)
                </p>
                <p className="text-body-sm mb-2">
                  Có thể từ dầu ăn, hoặc từ thịt mỡ, bơ
                </p>
                <p className="text-xs text-gray-600 italic">
                  Nên dùng dầu thực vật (dầu đậu nành, dầu hướng dương) thay vì mỡ động vật
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <p className="text-sm font-semibold text-amber-900 mb-2">
              💡 Lưu ý quan trọng
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Khẩu phần này chỉ là hướng dẫn chung. Tùy vào tuổi tác, giới tính, mức độ hoạt động, và tình trạng sức khỏe, 
              mỗi người có thể cần nhiều hơn hoặc ít hơn. Quan trọng là lắng nghe cơ thể - nếu bạn thấy đói, hãy ăn thêm. 
              Nếu bạn thấy no, đừng ép mình ăn thêm.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Reading Food Labels */}
      <section aria-labelledby="labels-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="labels-heading" className="heading-2 whitespace-nowrap">
            Cách đọc Nhãn Thực phẩm
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Khi mua thực phẩm đóng gói, nhãn thực phẩm giúp bạn biết mình đang ăn gì. Đây là cách đọc đơn giản:
          </p>

          <div className="bg-white border border-gray-200 rounded-lg p-5 space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Xem khẩu phần (Serving size)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Nhãn thường ghi "khẩu phần: 100g" hoặc "1 gói". Tất cả các thông tin dinh dưỡng bên dưới là cho khẩu phần đó. 
                Nếu bạn ăn gấp đôi, bạn cũng nhận gấp đôi calo và các chất dinh dưỡng.
              </p>
              <p className="text-xs text-gray-600 italic mt-1">
                Ví dụ: Nếu gói bánh ghi "khẩu phần: 30g, calo: 150", mà bạn ăn 60g, bạn đã ăn 300 calo.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Xem calo (Năng lượng)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Calo cho biết món này có bao nhiêu năng lượng. Người trưởng thành ít vận động cần khoảng 1,800-2,000 calo/ngày. 
                Nếu một món ăn có 500-600 calo, đó là khá nhiều cho một bữa.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Xem đường (Sugar)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Nên chọn thực phẩm có ít đường. Một sản phẩm có nhiều đường thường không tốt cho sức khỏe.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Nước ngọt, bánh kẹo thường có rất nhiều đường</li>
                <li>Nên chọn sản phẩm có ít hơn 10g đường/100g</li>
                <li>Trái cây tự nhiên có đường nhưng tốt hơn vì có chất xơ và vitamin</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Xem muối (Sodium/Natri)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Người Việt thường ăn quá nhiều muối. Nên chọn thực phẩm có ít muối.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Nên chọn sản phẩm có ít hơn 300mg muối/100g</li>
                <li>Mì tôm, đồ hộp, thịt nguội thường có rất nhiều muối</li>
                <li>Nên ăn ít những món này</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">5. Xem chất béo (Fat)</h3>
              <p className="text-sm text-gray-700 leading-relaxed mb-2">
                Chất béo cần thiết, nhưng nên chọn loại tốt và không quá nhiều.
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                <li>Nên tránh "trans fat" (chất béo chuyển hóa) - rất có hại</li>
                <li>Chất béo bão hòa (saturated fat) nên ít hơn 5g/100g</li>
                <li>Chất béo không bão hòa (unsaturated fat) tốt hơn</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-blue-900 mb-2">
              💡 Mẹo đơn giản
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thực phẩm càng ít chế biến càng tốt. Thay vì mua bánh mì đóng gói có nhiều chất bảo quản, 
              hãy mua bánh mì tươi. Thay vì mua nước ép đóng hộp có nhiều đường, hãy uống nước ép tươi hoặc ăn trái cây.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Practical Tips */}
      <section aria-labelledby="tips-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="tips-heading" className="heading-2 whitespace-nowrap">
            Mẹo Thực tế cho Bữa ăn Hàng ngày
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader icon={CheckCircle} title="Lập kế hoạch bữa ăn" />
              <CardContent>
                <p className="text-body-sm">
                  Lên kế hoạch bữa ăn trong tuần giúp bạn mua đúng thực phẩm, tránh lãng phí, và đảm bảo đa dạng. 
                  Ví dụ: Thứ Hai ăn cá, Thứ Ba ăn thịt, Thứ Tư ăn đậu phụ...
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Nấu tại nhà" />
              <CardContent>
                <p className="text-body-sm">
                  Nấu ăn tại nhà giúp bạn kiểm soát được lượng dầu, muối, đường. Bạn biết chính xác mình đang ăn gì, 
                  và thường rẻ hơn, ngon hơn đồ ăn ngoài.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Chia nhỏ bữa ăn" />
              <CardContent>
                <p className="text-body-sm">
                  Thay vì ăn 3 bữa lớn, có thể chia thành 5-6 bữa nhỏ. Điều này giúp bạn không cảm thấy đói quá, 
                  và cơ thể hấp thu dinh dưỡng tốt hơn.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Uống đủ nước" />
              <CardContent>
                <p className="text-body-sm">
                  Uống 6-8 ly nước/ngày (khoảng 1.5-2 lít). Nước lọc là tốt nhất. Hạn chế nước ngọt, cà phê có đường. 
                  Canh trong bữa ăn cũng giúp bổ sung nước.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Common Mistakes */}
      <section aria-labelledby="mistakes-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="mistakes-heading" className="heading-2 whitespace-nowrap">
            Những Sai lầm Thường gặp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Ăn quá nhiều cơm, ít rau</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nhiều người Việt ăn 2-3 bát cơm nhưng chỉ ăn rất ít rau. Điều này không cân bằng. 
              Nên ăn nhiều rau hơn, có thể giảm cơm xuống 1-1.5 bát và tăng rau lên.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Ăn quá nhiều thịt mỡ, ít cá</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thịt mỡ có nhiều chất béo không tốt. Nên chọn thịt nạc, và ăn cá 2-3 lần/tuần thay vì toàn thịt.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Nấu quá nhiều muối, bột ngọt</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Người Việt thường nấu mặn và dùng nhiều bột ngọt. Điều này không tốt cho huyết áp và thận. 
              Hãy giảm dần, dùng nhiều gia vị tự nhiên như tỏi, gừng, nghệ để tăng hương vị.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Bỏ bữa sáng</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Bữa sáng rất quan trọng, giúp cơ thể có năng lượng cho cả ngày. Không nên bỏ bữa sáng. 
              Có thể ăn đơn giản: 1 tô phở, 1 bát cháo, hoặc bánh mì với trứng.
            </p>
          </div>
        </div>
      </section>

      {/* 8. Sample Daily Menu */}
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
                  <strong>Lựa chọn 1:</strong> 1 tô phở bò (phở nhỏ, ít nước béo) + Rau thơm<br />
                  <strong>Lựa chọn 2:</strong> 1 bát cháo thịt + Rau mùi<br />
                  <strong>Lựa chọn 3:</strong> 1 ổ bánh mì thịt + 1 ly sữa tươi
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍎 Bữa phụ sáng (10:00)</h3>
                <p className="text-sm text-gray-700">
                  1 quả chuối, hoặc 1 quả táo, hoặc 1 hộp sữa chua
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌞 Bữa trưa (12:00)</h3>
                <p className="text-sm text-gray-700">
                  1.5 bát cơm + Canh chua cá + Rau muống xào tỏi + 1 miếng cá rán + Rau sống
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍊 Bữa phụ chiều (15:00)</h3>
                <p className="text-sm text-gray-700">
                  1 quả cam, hoặc 1 ly nước ép trái cây, hoặc 1 hộp sữa chua
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌙 Bữa tối (18:00)</h3>
                <p className="text-sm text-gray-700">
                  1 bát cơm + Thịt kho tàu (thịt nạc) + Canh rau cải + Đậu bắp luộc + Rau sống
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
              💡 Lưu ý
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thực đơn này chỉ là ví dụ. Bạn có thể thay đổi tùy theo sở thích và thực phẩm có sẵn. 
              Quan trọng là đảm bảo có đủ các nhóm thực phẩm: cơm, rau, đạm, và uống đủ nước.
            </p>
          </div>
        </div>
      </section>

      {/* Related content */}
      <section aria-labelledby="related-heading" className="space-y-4">
        <h2 id="related-heading" className="text-xl font-semibold sm:text-2xl">
          Bài viết Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/knowledge/thuc-pham-viet-nam-gia-tri-dinh-duong">
            <CardHeader icon={Apple} title="Thực phẩm Việt Nam và Giá trị Dinh dưỡng" />
            <CardContent>
              <p className="text-body-sm">
                Tìm hiểu về giá trị dinh dưỡng của các thực phẩm phổ biến ở Việt Nam.
              </p>
            </CardContent>
          </Card>
          <Card href="/knowledge/nau-an-lanh-manh-kieu-viet">
            <CardHeader icon={UtensilsCrossed} title="Cách Nấu ăn Lành mạnh Kiểu Việt" />
            <CardContent>
              <p className="text-body-sm">
                Học cách nấu ăn lành mạnh với các phương pháp và gia vị Việt Nam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục và hướng dẫn chung. 
          Nhu cầu dinh dưỡng của mỗi người khác nhau tùy theo tuổi tác, giới tính, mức độ hoạt động, và tình trạng sức khỏe. 
          Nếu bạn có vấn đề sức khỏe hoặc cần tư vấn dinh dưỡng cụ thể, hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.
        </p>
      </div>
    </main>
  );
}

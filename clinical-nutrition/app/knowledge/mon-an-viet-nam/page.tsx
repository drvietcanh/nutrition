import type { Metadata } from "next";
import Link from "next/link";
import { UtensilsCrossed, CheckCircle, Info, Coffee } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Món Ăn Việt Nam và Dinh dưỡng",
  description:
    "Tìm hiểu về giá trị dinh dưỡng của các món ăn Việt Nam phổ biến: phở, bún mì, cơm và món kèm, canh cháo súp, và đồ uống Việt Nam.",
  keywords: [
    "món ăn Việt Nam",
    "phở",
    "bún mì",
    "cơm",
    "canh cháo",
    "đồ uống Việt Nam",
  ],
  openGraph: {
    title: "Món Ăn Việt Nam và Dinh dưỡng",
    description:
      "Tìm hiểu về giá trị dinh dưỡng của các món ăn Việt Nam phổ biến.",
    url: "https://clinical-nutrition.edu.vn/knowledge/mon-an-viet-nam",
  },
};

export default function MonAnVietNamPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Món Ăn Việt Nam và Dinh dưỡng" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">
            Món Ăn Việt Nam và Dinh dưỡng
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Các món ăn Việt Nam không chỉ ngon mà còn có giá trị dinh dưỡng cao. 
            Hiểu về dinh dưỡng của các món ăn quen thuộc giúp bạn lựa chọn và kết hợp chúng một cách thông minh.
          </p>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm text-orange-900 mb-2">
              <strong>👉 Các món ăn Việt Nam thường:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-orange-900">
              <li>Có nhiều rau củ quả</li>
              <li>Dùng nhiều gia vị tự nhiên</li>
              <li>Cân bằng giữa tinh bột, đạm, và rau</li>
              <li>Nấu với phương pháp lành mạnh (luộc, hấp, xào)</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này giới thiệu giá trị dinh dưỡng của các món ăn Việt Nam phổ biến, 
            và cách ăn chúng một cách lành mạnh.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Thông tin này giúp bạn hiểu về dinh dưỡng của các món ăn Việt Nam. 
            Đây không phải là hướng dẫn điều trị.
          </p>
        </Callout>
      </header>

      {/* 2. Pho and Noodles */}
      <section aria-labelledby="pho-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pho-heading" className="heading-2 whitespace-nowrap">
            Phở và Các Món Bún, Mì
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={CheckCircle} title="🍜 Phở" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li><strong>Bánh phở:</strong> Tinh bột, cung cấp năng lượng (khoảng 200-300 calo cho 1 tô)</li>
                <li><strong>Thịt bò:</strong> Protein, sắt, vitamin B12</li>
                <li><strong>Nước phở:</strong> Có một số khoáng chất từ xương, nhưng thường có nhiều muối và đường</li>
                <li><strong>Rau thơm:</strong> Vitamin, chất xơ, chất chống oxy hóa</li>
              </ul>
              <div className="bg-white rounded-lg border border-blue-200 p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">💡 Cách ăn phở lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Chọn tô phở nhỏ hoặc vừa, không nên ăn tô lớn</li>
                  <li>Yêu cầu nhiều thịt nạc, nhiều rau (hành, rau thơm, giá đỗ)</li>
                  <li>Ăn ít nước phở (nước phở có nhiều muối và đường)</li>
                  <li>Không nên ăn quẩy (giò cháo quẩy) - có nhiều dầu mỡ</li>
                  <li>Chỉ nên ăn 1-2 lần/tuần, không nên ăn hàng ngày</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={CheckCircle} title="🍲 Bún bò, Bún riêu, Bún chả" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li><strong>Bún:</strong> Tinh bột, cung cấp năng lượng</li>
                <li><strong>Thịt/Cá:</strong> Protein, sắt, omega-3 (nếu là cá)</li>
                <li><strong>Rau sống:</strong> Vitamin, chất xơ</li>
                <li><strong>Nước dùng:</strong> Thường có nhiều muối</li>
              </ul>
              <div className="bg-white rounded-lg border border-green-200 p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">💡 Cách ăn lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Ăn nhiều rau sống, ít bún</li>
                  <li>Chọn thịt nạc, bỏ mỡ</li>
                  <li>Ăn ít nước dùng (có nhiều muối)</li>
                  <li>Có thể yêu cầu ít bún, nhiều rau</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50/30">
            <CardHeader icon={CheckCircle} title="🍝 Mì Quảng, Hủ Tiếu" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Tương tự phở và bún - có tinh bột, đạm, và rau</li>
                <li>Mì Quảng thường có nhiều dầu mỡ hơn</li>
                <li>Hủ tiếu thường nhẹ hơn, ít dầu mỡ</li>
              </ul>
              <div className="bg-white rounded-lg border border-yellow-200 p-4">
                <p className="text-sm font-semibold text-yellow-900 mb-2">💡 Cách ăn lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Chọn hủ tiếu thay vì mì quảng (ít dầu mỡ hơn)</li>
                  <li>Ăn nhiều rau, ít mì</li>
                  <li>Chọn thịt nạc, bỏ mỡ</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Rice and Side Dishes */}
      <section aria-labelledby="rice-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="rice-heading" className="heading-2 whitespace-nowrap">
            Cơm và Các Món Ăn Kèm
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <Card className="border-amber-200 bg-amber-50/30">
            <CardHeader icon={CheckCircle} title="🍚 Cơm" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>1 bát cơm (khoảng 200g) có khoảng 250-300 calo</li>
                <li>Cung cấp năng lượng chính cho cơ thể</li>
                <li>Gạo lứt có nhiều chất xơ và vitamin hơn gạo trắng</li>
              </ul>
              <div className="bg-white rounded-lg border border-amber-200 p-4">
                <p className="text-sm font-semibold text-amber-900 mb-2">💡 Cách ăn cơm cân bằng:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Mỗi bữa nên ăn 1-1.5 bát cơm (tùy mức độ hoạt động)</li>
                  <li>Nên chọn gạo lứt hoặc trộn gạo lứt với gạo trắng</li>
                  <li>Ăn cơm cùng với nhiều rau và đạm</li>
                  <li>Rau và đạm giúp làm chậm hấp thu đường từ cơm</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/30">
            <CardHeader icon={CheckCircle} title="🥘 Thịt Kho, Cá Kho" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Giàu protein, sắt, vitamin B12</li>
                <li>Cá kho có thêm omega-3 (tốt cho tim mạch)</li>
                <li>Thường có nhiều muối và đường (nếu nấu theo cách truyền thống)</li>
              </ul>
              <div className="bg-white rounded-lg border border-red-200 p-4">
                <p className="text-sm font-semibold text-red-900 mb-2">💡 Cách nấu lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Giảm muối, giảm đường - dùng nhiều tỏi, gừng, sả</li>
                  <li>Chọn thịt nạc, bỏ mỡ</li>
                  <li>Cá kho tốt hơn thịt kho (có omega-3)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={CheckCircle} title="🥬 Rau Xào, Rau Luộc" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Giàu vitamin, chất xơ, khoáng chất</li>
                <li>Ít calo, giúp no lâu</li>
                <li>Rau luộc giữ được nhiều dinh dưỡng hơn rau xào</li>
              </ul>
              <div className="bg-white rounded-lg border border-green-200 p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">💡 Cách nấu lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Luộc rau giữ được nhiều vitamin hơn xào</li>
                  <li>Nếu xào, chỉ dùng 1 thìa canh dầu, xào nhanh</li>
                  <li>Ăn nhiều rau - nên có ít nhất 2 món rau trong mỗi bữa</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Soup and Porridge */}
      <section aria-labelledby="soup-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="soup-heading" className="heading-2 whitespace-nowrap">
            Canh, Cháo, Súp Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={CheckCircle} title="🍲 Canh Chua, Canh Rau" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Canh chua cá: Có cá (protein, omega-3), rau (vitamin, chất xơ), nước (bổ sung nước)</li>
                <li>Canh rau: Có rau (vitamin, chất xơ), có thể có thịt hoặc tôm (protein)</li>
                <li>Bổ sung nước cho cơ thể</li>
                <li>Dễ tiêu hóa, tốt cho người bệnh, người già</li>
              </ul>
              <div className="bg-white rounded-lg border border-blue-200 p-4">
                <p className="text-sm font-semibold text-blue-900 mb-2">💡 Cách nấu lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Nấu với nhiều rau, ít muối, ít bột ngọt</li>
                  <li>Dùng nhiều me, cà chua để tạo vị chua tự nhiên</li>
                  <li>Chọn cá tươi, thịt nạc</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader icon={CheckCircle} title="🥣 Cháo" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Cháo thịt: Có gạo (tinh bột), thịt (protein), rau (vitamin)</li>
                <li>Dễ tiêu hóa, tốt cho người bệnh, trẻ em, người già</li>
                <li>Có thể thêm trứng, đậu phụ để tăng protein</li>
              </ul>
              <div className="bg-white rounded-lg border border-purple-200 p-4">
                <p className="text-sm font-semibold text-purple-900 mb-2">💡 Cách nấu lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Nấu với thịt nạc, không nên dùng thịt mỡ</li>
                  <li>Thêm nhiều rau (rau mùi, hành lá, giá đỗ)</li>
                  <li>Ít muối, ít bột ngọt</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 5. Vietnamese Beverages */}
      <section aria-labelledby="beverages-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="beverages-heading" className="heading-2 whitespace-nowrap">
            Đồ Uống Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={Coffee} title="🍵 Trà Xanh, Trà Đen" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Giàu chất chống oxy hóa</li>
                <li>Có caffeine (giúp tỉnh táo, nhưng không nên uống quá nhiều)</li>
                <li>Ít calo (nếu không thêm đường)</li>
                <li>Tốt cho sức khỏe nếu uống không đường</li>
              </ul>
              <div className="bg-white rounded-lg border border-green-200 p-4">
                <p className="text-sm font-semibold text-green-900 mb-2">💡 Cách uống lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Uống trà không đường hoặc ít đường</li>
                  <li>Không nên uống quá nhiều (không quá 3-4 ly/ngày)</li>
                  <li>Không nên uống trà ngay sau bữa ăn (làm giảm hấp thu sắt)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-yellow-200 bg-yellow-50/30">
            <CardHeader icon={CheckCircle} title="🥤 Nước Mía, Nước Dừa" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Nước mía: Có đường tự nhiên, một số khoáng chất, nhưng có nhiều đường</li>
                <li>Nước dừa: Có kali, một số khoáng chất, ít calo hơn nước mía</li>
                <li>Cả hai đều có đường, nên uống vừa phải</li>
              </ul>
              <div className="bg-white rounded-lg border border-yellow-200 p-4">
                <p className="text-sm font-semibold text-yellow-900 mb-2">💡 Cách uống lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Nước dừa tốt hơn nước mía (ít đường hơn)</li>
                  <li>Chỉ nên uống 1-2 ly/tuần, không nên uống hàng ngày</li>
                  <li>Nước lọc vẫn là tốt nhất</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="border-red-200 bg-red-50/30">
            <CardHeader icon={Info} title="☕ Cà Phê" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Giá trị dinh dưỡng:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-3">
                <li>Có caffeine (giúp tỉnh táo)</li>
                <li>Ít calo nếu uống đen, không đường</li>
                <li>Cà phê sữa đá có nhiều đường và sữa đặc (nhiều calo)</li>
              </ul>
              <div className="bg-white rounded-lg border border-red-200 p-4">
                <p className="text-sm font-semibold text-red-900 mb-2">💡 Cách uống lành mạnh:</p>
                <ul className="list-disc space-y-1 pl-4 text-xs text-gray-700">
                  <li>Uống cà phê đen, ít hoặc không đường</li>
                  <li>Hạn chế cà phê sữa đá (có nhiều đường và sữa đặc)</li>
                  <li>Không nên uống quá nhiều (không quá 2-3 ly/ngày)</li>
                  <li>Phụ nữ mang thai nên hạn chế (không quá 1-2 ly/ngày)</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Đồ uống có đường:</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nước ngọt, nước có gas, nước ép đóng hộp thường có rất nhiều đường. 
              Nên hạn chế hoặc tránh. Nếu muốn uống nước ép, hãy tự làm từ trái cây tươi, 
              không thêm đường. Nước lọc vẫn là lựa chọn tốt nhất.
            </p>
          </div>
        </div>
      </section>

      {/* 6. Tips for Healthy Vietnamese Eating */}
      <section aria-labelledby="tips-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="tips-heading" className="heading-2 whitespace-nowrap">
            Mẹo Ăn Uống Lành mạnh với Món Ăn Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader icon={CheckCircle} title="Ăn đa dạng" />
              <CardContent>
                <p className="text-body-sm">
                  Mỗi bữa nên có nhiều loại món khác nhau: cơm, canh, món mặn, rau xào, rau sống. 
                  Điều này giúp bạn nhận được đủ các chất dinh dưỡng.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Ăn nhiều rau" />
              <CardContent>
                <p className="text-body-sm">
                  Rau rất quan trọng trong bữa ăn Việt Nam. Nên có ít nhất 2 món rau trong mỗi bữa: 
                  canh rau, rau xào, hoặc rau sống.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Chọn thịt nạc" />
              <CardContent>
                <p className="text-body-sm">
                  Khi ăn thịt, hãy chọn thịt nạc, bỏ mỡ, bỏ da. Cá tốt hơn thịt - nên ăn cá 2-3 lần/tuần.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Giảm muối và đường" />
              <CardContent>
                <p className="text-body-sm">
                  Nhiều món Việt Nam có nhiều muối và đường. Hãy giảm dần, dùng nhiều gia vị tự nhiên 
                  (tỏi, gừng, sả) để tăng hương vị.
                </p>
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
          <Card href="/knowledge/dinh-duong-hang-ngay">
            <CardHeader icon={CheckCircle} title="Dinh dưỡng Hàng ngày" />
            <CardContent>
              <p className="text-body-sm">
                Hướng dẫn ăn uống cân bằng hàng ngày với thực phẩm Việt Nam.
              </p>
            </CardContent>
          </Card>
          <Card href="/knowledge/nau-an-lanh-manh-kieu-viet">
            <CardHeader icon={CheckCircle} title="Cách Nấu ăn Lành mạnh" />
            <CardContent>
              <p className="text-body-sm">
                Học cách nấu ăn lành mạnh với các phương pháp Việt Nam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. Giá trị dinh dưỡng có thể thay đổi 
          tùy theo cách chế biến và nguồn gốc thực phẩm. Nếu bạn có vấn đề sức khỏe, hãy tham khảo bác sĩ 
          hoặc chuyên gia dinh dưỡng.
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { UtensilsCrossed, CheckCircle, Info, Flame } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Cách Nấu ăn Lành mạnh Kiểu Việt",
  description:
    "Hướng dẫn các phương pháp nấu ăn tốt cho sức khỏe, cách giảm dầu mỡ, và sử dụng gia vị Việt Nam để tạo hương vị mà không cần nhiều muối.",
  keywords: [
    "nấu ăn lành mạnh",
    "phương pháp nấu ăn",
    "giảm dầu mỡ",
    "gia vị Việt Nam",
    "nấu ăn tốt cho sức khỏe",
  ],
  openGraph: {
    title: "Cách Nấu ăn Lành mạnh Kiểu Việt",
    description:
      "Hướng dẫn các phương pháp nấu ăn tốt cho sức khỏe với thực phẩm Việt Nam.",
    url: "https://clinical-nutrition.edu.vn/knowledge/nau-an-lanh-manh-kieu-viet",
  },
};

export default function NauAnLanhManhKieuVietPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Cách Nấu ăn Lành mạnh Kiểu Việt" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <UtensilsCrossed className="w-8 h-8 text-orange-600" aria-hidden="true" />
          <h1 className="heading-1">
            Cách Nấu ăn Lành mạnh Kiểu Việt
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Bạn không cần phải từ bỏ các món ăn Việt Nam yêu thích để có sức khỏe tốt. 
            Chỉ cần học cách nấu chúng một cách lành mạnh hơn - ít dầu mỡ, ít muối, nhưng vẫn ngon miệng.
          </p>
          <div className="rounded-lg border border-orange-200 bg-orange-50 p-4">
            <p className="text-sm text-orange-900 mb-2">
              <strong>👉 Nguyên tắc nấu ăn lành mạnh:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-orange-900">
              <li>Chọn phương pháp nấu ít dầu mỡ</li>
              <li>Dùng gia vị tự nhiên thay vì nhiều muối</li>
              <li>Giữ được dinh dưỡng trong rau củ</li>
              <li>Vẫn giữ được hương vị đậm đà</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này hướng dẫn bạn cách nấu các món ăn Việt Nam quen thuộc một cách lành mạnh hơn, 
            không làm mất đi hương vị đặc trưng.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Thông tin này giúp bạn học cách nấu ăn lành mạnh hơn. 
            Đây không phải là hướng dẫn điều trị. Nếu bạn có vấn đề sức khỏe, hãy tham khảo bác sĩ.
          </p>
        </Callout>
      </header>

      {/* 2. Cooking Methods */}
      <section aria-labelledby="methods-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="methods-heading" className="heading-2 whitespace-nowrap">
            Phương pháp Nấu ăn Tốt cho Sức khỏe
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Cách bạn nấu thức ăn ảnh hưởng rất nhiều đến dinh dưỡng và sức khỏe. Đây là các phương pháp tốt:
          </p>

          <div className="space-y-4">
            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="🥘 Luộc (Boiling)" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Rất tốt cho sức khỏe</strong> - ít hoặc không cần dầu mỡ.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giữ được nhiều dinh dưỡng trong nước luộc</li>
                  <li>Không cần dầu mỡ</li>
                  <li>Dễ tiêu hóa</li>
                  <li>Phù hợp với: Thịt, cá, rau, trứng</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Ví dụ: Thịt luộc, trứng luộc, rau luộc. Nước luộc có thể dùng làm canh.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader icon={CheckCircle} title="🍲 Hấp (Steaming)" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Tốt nhất cho sức khỏe</strong> - giữ được nhiều dinh dưỡng nhất.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giữ được hầu hết vitamin và khoáng chất</li>
                  <li>Không cần dầu mỡ</li>
                  <li>Giữ được hương vị tự nhiên</li>
                  <li>Phù hợp với: Cá, thịt gà, rau, bánh bao</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Ví dụ: Cá hấp, thịt gà hấp, rau hấp. Có thể hấp với gừng, sả để thơm.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <CardHeader icon={CheckCircle} title="🍳 Xào (Stir-frying)" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Tốt nếu dùng ít dầu</strong> - nhanh, giữ được độ giòn của rau.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Nấu nhanh, giữ được màu sắc và độ giòn</li>
                  <li>Chỉ cần 1 thìa canh dầu cho cả món</li>
                  <li>Nên xào lửa lớn, nhanh tay</li>
                  <li>Phù hợp với: Rau, thịt thái mỏng, mì</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Mẹo: Đun nóng chảo trước, cho dầu vào sau, xào nhanh để rau không bị mềm.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 bg-orange-50/30">
              <CardHeader icon={Flame} title="🔥 Nướng (Grilling/Roasting)" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Tốt nếu nướng đúng cách</strong> - không cần nhiều dầu.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Mỡ tự chảy ra, không cần thêm dầu</li>
                  <li>Tạo hương vị thơm ngon</li>
                  <li>Nên nướng than hoặc lò, không nướng trực tiếp lửa</li>
                  <li>Phù hợp với: Thịt, cá, rau củ</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Lưu ý: Không nướng quá cháy, có thể tạo chất độc hại.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader icon={Info} title="⚠️ Chiên rán (Deep-frying)" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Nên hạn chế</strong> - có nhiều dầu mỡ, mất dinh dưỡng.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Hấp thụ rất nhiều dầu mỡ</li>
                  <li>Mất nhiều vitamin do nhiệt độ cao</li>
                  <li>Có thể tạo chất độc hại nếu dầu quá nóng</li>
                  <li>Nên ăn ít, không nên ăn thường xuyên</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Nếu phải chiên: Dùng dầu mới, không chiên quá lâu, để ráo dầu sau khi chiên.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Reducing Oil and Fat */}
      <section aria-labelledby="reduce-oil-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="reduce-oil-heading" className="heading-2 whitespace-nowrap">
            Cách Giảm Dầu Mỡ trong Nấu ăn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Người Việt thường nấu với nhiều dầu mỡ. Đây là cách giảm mà vẫn giữ được hương vị:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5 space-y-3">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">1. Dùng chảo chống dính</h3>
              <p className="text-sm text-gray-700">
                Chảo chống dính giúp bạn nấu với rất ít dầu, thậm chí không cần dầu. 
                Chỉ cần 1-2 giọt dầu là đủ để xào rau.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">2. Đo dầu bằng thìa</h3>
              <p className="text-sm text-gray-700">
                Thay vì đổ dầu trực tiếp từ chai, hãy dùng thìa canh để đo. 
                Mỗi món xào chỉ cần 1 thìa canh dầu (khoảng 15ml) là đủ.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">3. Bỏ mỡ, bỏ da</h3>
              <p className="text-sm text-gray-700">
                Khi nấu thịt, hãy bỏ phần mỡ và da trước khi nấu. 
                Thịt nạc vẫn ngon và tốt cho sức khỏe hơn.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">4. Để ráo dầu sau khi chiên</h3>
              <p className="text-sm text-gray-700">
                Nếu phải chiên, hãy để thức ăn trên giấy thấm dầu hoặc rổ để dầu chảy ra. 
                Điều này giúp giảm lượng dầu bạn ăn vào.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-2">5. Chọn dầu tốt</h3>
              <p className="text-sm text-gray-700">
                Dùng dầu thực vật (dầu đậu nành, dầu hướng dương, dầu oliu) thay vì mỡ động vật. 
                Dầu thực vật tốt cho tim mạch hơn.
              </p>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 rounded-r-lg p-4">
            <p className="text-sm font-semibold text-green-900 mb-2">
              💡 Ví dụ thực tế
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thay vì chiên cá với nhiều dầu, bạn có thể: (1) Hấp cá với gừng, sả - vẫn ngon và không cần dầu, 
              hoặc (2) Rán cá với ít dầu trong chảo chống dính, sau đó để ráo dầu. 
              Cả hai cách đều giảm được rất nhiều dầu mỡ so với chiên ngập dầu.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Using Vietnamese Spices */}
      <section aria-labelledby="spices-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="spices-heading" className="heading-2 whitespace-nowrap">
            Sử dụng Gia vị Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Gia vị Việt Nam không chỉ tạo hương vị mà còn tốt cho sức khỏe. Dùng chúng để giảm muối:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🧄 Tỏi</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Lợi ích:</strong> Tốt cho tim mạch, chống viêm, tăng hương vị
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cách dùng:</strong> Băm nhỏ, phi thơm trước khi xào. Có thể dùng nhiều để tăng hương vị, giảm muối.
              </p>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <h3 className="heading-5 mb-2">🫚 Gừng</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Lợi ích:</strong> Tốt cho tiêu hóa, chống buồn nôn, làm ấm cơ thể
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cách dùng:</strong> Thái lát hoặc băm nhỏ, dùng khi hấp cá, nấu canh, hoặc ướp thịt.
              </p>
            </Card>

            <Card className="border-orange-200 bg-orange-50/30">
              <h3 className="heading-5 mb-2">🟡 Nghệ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Lợi ích:</strong> Chống viêm, tốt cho gan, làm đẹp da
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cách dùng:</strong> Bột nghệ hoặc nghệ tươi, dùng khi kho thịt, nấu canh, hoặc làm cà ri.
              </p>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🌿 Sả</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Lợi ích:</strong> Thơm, tốt cho tiêu hóa, kháng khuẩn
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cách dùng:</strong> Đập dập hoặc thái lát, dùng khi hấp, nấu canh, hoặc ướp thịt.
              </p>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <h3 className="heading-5 mb-2">🌶️ Ớt</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Lợi ích:</strong> Tăng trao đổi chất, giàu vitamin C
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cách dùng:</strong> Ớt tươi hoặc ớt bột, dùng vừa phải để tăng hương vị.
              </p>
            </Card>

            <Card className="border-blue-200 bg-blue-50/30">
              <h3 className="heading-5 mb-2">🌿 Rau thơm</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Lợi ích:</strong> Tăng hương vị, giàu vitamin, tốt cho tiêu hóa
              </p>
              <p className="text-sm text-gray-700">
                <strong>Cách dùng:</strong> Rau mùi, rau thơm, hành lá - dùng nhiều để tăng hương vị, giảm muối.
              </p>
            </Card>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <p className="text-sm font-semibold text-amber-900 mb-2">
              💡 Mẹo giảm muối
            </p>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thay vì dùng nhiều muối và bột ngọt, hãy dùng nhiều tỏi, gừng, sả, và rau thơm. 
              Chúng tạo hương vị đậm đà mà không cần nhiều muối. Ví dụ: Thịt kho với nhiều tỏi, gừng, 
              sả sẽ ngon và không cần nhiều muối như cách nấu thông thường.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Preserving Nutrients */}
      <section aria-labelledby="nutrients-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="nutrients-heading" className="heading-2 whitespace-nowrap">
            Cách Giữ được Dinh dưỡng trong Rau củ
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Rau củ rất dễ mất dinh dưỡng khi nấu. Đây là cách giữ được nhiều nhất:
          </p>

          <div className="space-y-3">
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">1. Nấu nhanh, lửa lớn</h3>
              <p className="text-sm text-gray-700">
                Rau củ nấu càng nhanh càng giữ được nhiều vitamin. Xào rau nên xào lửa lớn, nhanh tay, 
                rau vừa chín tới là tắt bếp ngay.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">2. Không nấu quá chín</h3>
              <p className="text-sm text-gray-700">
                Rau củ nấu quá chín sẽ mất nhiều vitamin. Rau nên còn giòn, có màu xanh tươi, không nên nấu đến khi vàng úa.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">3. Dùng ít nước khi luộc</h3>
              <p className="text-sm text-gray-700">
                Khi luộc rau, chỉ cần ít nước, đủ để rau chín. Nước luộc có nhiều vitamin, có thể dùng làm canh.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">4. Ăn sống khi có thể</h3>
              <p className="text-sm text-gray-700">
                Rau sống giữ được 100% dinh dưỡng. Rau muống, rau cải, dưa chuột, cà chua có thể ăn sống. 
                Nhớ rửa sạch và ngâm nước muối loãng.
              </p>
            </div>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">5. Hấp thay vì luộc</h3>
              <p className="text-sm text-gray-700">
                Hấp rau giữ được nhiều vitamin hơn luộc vì không bị hòa tan vào nước. 
                Rau hấp vẫn giữ được màu xanh đẹp và giòn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Healthy Vietnamese Recipes */}
      <section aria-labelledby="recipes-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="recipes-heading" className="heading-2 whitespace-nowrap">
            Cách Nấu các Món Việt Lành mạnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Đây là cách nấu một số món Việt Nam quen thuộc một cách lành mạnh hơn:
          </p>

          <div className="space-y-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader icon={CheckCircle} title="Canh chua cá" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu lành mạnh:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Dùng cá tươi, bỏ da, bỏ mỡ</li>
                  <li>Nấu với nhiều rau: cà chua, đậu bắp, giá đỗ, rau thơm</li>
                  <li>Ít muối, ít bột ngọt - dùng nhiều me, cà chua để tạo vị chua tự nhiên</li>
                  <li>Có thể thêm sả, gừng để thơm</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Món này đã khá lành mạnh, chỉ cần giảm muối và bột ngọt là được.
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={CheckCircle} title="Thịt kho tàu" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu lành mạnh:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Chọn thịt nạc, bỏ mỡ trước khi nấu</li>
                  <li>Giảm đường, giảm muối - dùng nhiều tỏi, gừng, sả để tăng hương vị</li>
                  <li>Nấu lâu để thịt mềm, không cần nhiều dầu</li>
                  <li>Có thể thêm trứng luộc, đậu phụ</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Thịt kho vẫn ngon với ít đường và muối hơn, nhờ có tỏi, gừng, sả.
                </p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader icon={CheckCircle} title="Rau muống xào tỏi" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu lành mạnh:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Dùng chảo chống dính, chỉ cần 1 thìa canh dầu</li>
                  <li>Phi tỏi thơm trước, sau đó cho rau vào xào nhanh</li>
                  <li>Xào lửa lớn, rau vừa chín tới là tắt bếp</li>
                  <li>Ít muối, có thể dùng nước mắm thay vì muối</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Rau xào nhanh sẽ giữ được màu xanh đẹp và giòn, không bị mềm nhũn.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <CardHeader icon={CheckCircle} title="Cá hấp" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cách nấu lành mạnh:</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Hấp cá với gừng, sả, hành lá</li>
                  <li>Không cần dầu mỡ</li>
                  <li>Giữ được hương vị tự nhiên của cá</li>
                  <li>Ăn kèm với nước mắm pha chua ngọt (ít đường)</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Cá hấp là cách nấu tốt nhất cho sức khỏe, giữ được nhiều dinh dưỡng nhất.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Common Mistakes to Avoid */}
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
            <h3 className="font-semibold text-gray-900 mb-2">Đổ quá nhiều dầu vào chảo</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Nhiều người đổ dầu trực tiếp từ chai, không đo lường. Điều này khiến bạn dùng quá nhiều dầu. 
              Hãy dùng thìa để đo - chỉ cần 1 thìa canh cho mỗi món xào.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Nấu rau quá chín</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Rau nấu quá chín sẽ mất vitamin và không ngon. Rau nên còn giòn, có màu xanh tươi. 
              Xào rau chỉ cần 2-3 phút là đủ.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Dùng quá nhiều muối và bột ngọt</h3>
            <p className="text-sm text-gray-700 leading-relaxed">
              Thay vì dùng nhiều muối, hãy dùng nhiều gia vị tự nhiên như tỏi, gừng, sả. 
              Chúng tạo hương vị đậm đà mà không cần nhiều muối.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">Chiên rán quá thường xuyên</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Chiên rán có nhiều dầu mỡ. Hãy thay đổi: thay vì chiên cá, hãy hấp hoặc nướng. 
                Thay vì chiên đậu phụ, hãy sốt cà chua hoặc nấu canh.
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
          <Card href="/knowledge/dinh-duong-hang-ngay">
            <CardHeader icon={UtensilsCrossed} title="Dinh dưỡng Hàng ngày" />
            <CardContent>
              <p className="text-body-sm">
                Hướng dẫn ăn uống cân bằng hàng ngày với thực phẩm Việt Nam.
              </p>
            </CardContent>
          </Card>
          <Card href="/knowledge/thuc-pham-viet-nam-gia-tri-dinh-duong">
            <CardHeader icon={Apple} title="Thực phẩm Việt Nam" />
            <CardContent>
              <p className="text-body-sm">
                Tìm hiểu về giá trị dinh dưỡng của các thực phẩm phổ biến ở Việt Nam.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer note */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <p className="text-sm text-gray-700 leading-relaxed">
          <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. Cách nấu ăn có thể thay đổi tùy theo 
          sở thích và điều kiện. Nếu bạn có vấn đề sức khỏe, hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.
        </p>
      </div>
    </main>
  );
}

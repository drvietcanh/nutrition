import type { Metadata } from "next";
import Link from "next/link";
import { Apple, CheckCircle, Leaf, Fish, Wheat, UtensilsCrossed } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Thực phẩm Việt Nam và Giá trị Dinh dưỡng",
  description:
    "Tìm hiểu về giá trị dinh dưỡng của các thực phẩm phổ biến ở Việt Nam: rau củ quả, thịt cá, gạo, đậu phụ và các sản phẩm từ đậu.",
  keywords: [
    "thực phẩm Việt Nam",
    "giá trị dinh dưỡng",
    "rau củ quả",
    "thịt cá",
    "gạo",
    "đậu phụ",
  ],
  openGraph: {
    title: "Thực phẩm Việt Nam và Giá trị Dinh dưỡng",
    description:
      "Tìm hiểu về giá trị dinh dưỡng của các thực phẩm phổ biến ở Việt Nam.",
    url: "https://clinical-nutrition.edu.vn/knowledge/thuc-pham-viet-nam-gia-tri-dinh-duong",
  },
};

export default function ThucPhamVietNamGiaTriDinhDuongPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Thực phẩm Việt Nam và Giá trị Dinh dưỡng" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Apple className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Thực phẩm Việt Nam và Giá trị Dinh dưỡng
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Việt Nam có nguồn thực phẩm phong phú và đa dạng. Hiểu về giá trị dinh dưỡng của các thực phẩm quen thuộc 
            giúp bạn lựa chọn và kết hợp chúng một cách thông minh để có bữa ăn lành mạnh.
          </p>
          <div className="rounded-lg border border-green-200 bg-green-50 p-4">
            <p className="text-sm text-green-900 mb-2">
              <strong>👉 Thực phẩm Việt Nam thường:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-green-900">
              <li>Tươi ngon, ít chế biến</li>
              <li>Đa dạng về rau củ quả</li>
              <li>Nhiều cá, hải sản</li>
              <li>Dùng nhiều gia vị tự nhiên</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này giới thiệu giá trị dinh dưỡng của các thực phẩm phổ biến ở Việt Nam, 
            giúp bạn hiểu tại sao chúng tốt cho sức khỏe và cách sử dụng chúng.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Thông tin này giúp bạn hiểu về giá trị dinh dưỡng của thực phẩm Việt Nam. 
            Đây không phải là hướng dẫn điều trị. Nếu bạn có vấn đề sức khỏe, hãy tham khảo bác sĩ.
          </p>
        </Callout>
      </header>

      {/* 2. Vegetables and Fruits */}
      <section aria-labelledby="vegetables-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="vegetables-heading" className="heading-2 whitespace-nowrap">
            Rau củ Quả Việt Nam
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Việt Nam có rất nhiều loại rau củ quả tươi ngon, giàu vitamin và chất xơ:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🥬 Rau lá xanh</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Rau muống, rau cải, rau ngót, rau dền, rau mồng tơi...</strong>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giàu vitamin A, C, K</li>
                <li>• Nhiều chất xơ, ít calo</li>
                <li>• Giúp tiêu hóa tốt</li>
                <li>• Nên ăn hàng ngày</li>
              </ul>
              <p className="text-xs text-gray-600 italic mt-2">
                Cách ăn: Luộc, xào, nấu canh, hoặc ăn sống
              </p>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🥒 Rau củ</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Bí đao, mướp, đậu bắp, cà chua, dưa chuột...</strong>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nhiều nước, ít calo</li>
                <li>• Giàu vitamin và khoáng chất</li>
                <li>• Giúp no lâu</li>
                <li>• Tốt cho da và mắt</li>
              </ul>
              <p className="text-xs text-gray-600 italic mt-2">
                Cách ăn: Nấu canh, luộc, xào, hoặc ăn sống
              </p>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <h3 className="heading-5 mb-2">🍌 Trái cây</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Chuối, cam, xoài, đu đủ, thanh long, dưa hấu...</strong>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Giàu vitamin C, A</li>
                <li>• Nhiều chất xơ</li>
                <li>• Có đường tự nhiên (tốt hơn đường tinh luyện)</li>
                <li>• Nên ăn 2-3 phần/ngày</li>
              </ul>
              <p className="text-xs text-gray-600 italic mt-2">
                Cách ăn: Ăn tươi, làm nước ép, hoặc trộn salad
              </p>
            </Card>

            <Card className="border-purple-200 bg-purple-50/30">
              <h3 className="heading-5 mb-2">🌶️ Gia vị và Rau thơm</h3>
              <p className="text-sm text-gray-700 mb-2">
                <strong>Tỏi, gừng, nghệ, hành, rau mùi, rau thơm...</strong>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Tăng hương vị, giảm nhu cầu muối</li>
                <li>• Có chất chống viêm tự nhiên</li>
                <li>• Tốt cho tiêu hóa</li>
                <li>• Nên dùng thường xuyên</li>
              </ul>
              <p className="text-xs text-gray-600 italic mt-2">
                Cách dùng: Ướp thịt, nấu canh, hoặc ăn sống
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* 3. Meat, Fish, Seafood */}
      <section aria-labelledby="protein-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="protein-heading" className="heading-2 whitespace-nowrap">
            Thịt, Cá, Hải sản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Việt Nam có nguồn đạm phong phú từ cả động vật và thực vật:
          </p>

          <div className="space-y-4">
            <Card className="border-blue-200 bg-blue-50/30">
              <CardHeader icon={Fish} title="🐟 Cá và Hải sản" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Cá đồng:</strong> Cá lóc, cá trê, cá rô, cá chép...<br />
                  <strong>Cá biển:</strong> Cá thu, cá hồi, cá ngừ, tôm, cua, mực...
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giàu protein, ít mỡ</li>
                  <li>Cá biển có nhiều omega-3 (tốt cho tim mạch, não)</li>
                  <li>Dễ tiêu hóa hơn thịt</li>
                  <li>Nên ăn 2-3 lần/tuần</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Cách chế biến tốt: Hấp, nướng, kho, nấu canh. Hạn chế chiên rán nhiều dầu.
                </p>
              </CardContent>
            </Card>

            <Card className="border-red-200 bg-red-50/30">
              <CardHeader icon={CheckCircle} title="🥩 Thịt" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Thịt lợn, thịt bò, thịt gà, thịt vịt...</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giàu protein, sắt, vitamin B12</li>
                  <li>Nên chọn thịt nạc, bỏ da, bỏ mỡ</li>
                  <li>Thịt gà, thịt lợn nạc tốt hơn thịt mỡ</li>
                  <li>Nên ăn vừa phải, không quá nhiều</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Cách chế biến tốt: Luộc, hấp, kho. Hạn chế chiên rán, nướng than.
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <CardHeader icon={CheckCircle} title="🥚 Trứng" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Trứng gà, trứng vịt</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giàu protein chất lượng cao</li>
                  <li>Có vitamin D, B12, sắt</li>
                  <li>Rẻ, dễ mua, dễ chế biến</li>
                  <li>Có thể ăn 1 quả/ngày (người khỏe mạnh)</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Cách chế biến tốt: Luộc, hấp, chiên ít dầu. Trứng luộc là tốt nhất.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 4. Rice and Grains */}
      <section aria-labelledby="grains-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="grains-heading" className="heading-2 whitespace-nowrap">
            Gạo và Ngũ cốc
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Gạo là lương thực chính của người Việt. Hiểu về các loại gạo giúp bạn lựa chọn tốt hơn:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="border-amber-200 bg-amber-50/30">
              <h3 className="heading-5 mb-2">🍚 Gạo trắng</h3>
              <p className="text-sm text-gray-700 mb-2">
                Gạo thường dùng hàng ngày, đã xay xát kỹ.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Cung cấp năng lượng nhanh</li>
                <li>• Dễ tiêu hóa</li>
                <li>• Ít chất xơ và vitamin hơn gạo lứt</li>
                <li>• Vẫn tốt nếu ăn vừa phải</li>
              </ul>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <h3 className="heading-5 mb-2">🌾 Gạo lứt</h3>
              <p className="text-sm text-gray-700 mb-2">
                Gạo còn giữ lớp cám bên ngoài, chưa xay xát kỹ.
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Nhiều chất xơ hơn gạo trắng</li>
                <li>• Giàu vitamin B, khoáng chất</li>
                <li>• Giúp no lâu hơn</li>
                <li>• Tốt cho người tiểu đường</li>
              </ul>
              <p className="text-xs text-gray-600 italic mt-2">
                Có thể trộn gạo lứt với gạo trắng để quen dần
              </p>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <h3 className="heading-5 mb-2">🌽 Ngũ cốc khác</h3>
              <p className="text-sm text-gray-700 mb-2">
                Khoai lang, khoai tây, bắp, bánh mì...
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li>• Khoai lang: Nhiều chất xơ, vitamin A</li>
                <li>• Bắp: Có chất xơ, vitamin</li>
                <li>• Bánh mì: Nên chọn bánh mì nguyên cám</li>
                <li>• Có thể thay thế một phần cơm</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* 5. Tofu and Legumes */}
      <section aria-labelledby="legumes-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="legumes-heading" className="heading-2 whitespace-nowrap">
            Đậu phụ và Các sản phẩm từ Đậu
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Đậu phụ và các sản phẩm từ đậu là nguồn đạm thực vật tốt, rẻ, và phổ biến ở Việt Nam:
          </p>

          <div className="space-y-4">
            <Card className="border-purple-200 bg-purple-50/30">
              <CardHeader icon={CheckCircle} title="🧈 Đậu phụ" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  Được làm từ đậu nành, rất phổ biến trong bữa ăn Việt Nam.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giàu protein, ít mỡ</li>
                  <li>Có canxi (nếu làm với calcium sulfate)</li>
                  <li>Rẻ, dễ mua, dễ chế biến</li>
                  <li>Tốt cho tim mạch</li>
                  <li>Có thể thay thế thịt 1-2 lần/tuần</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Cách chế biến: Rán, sốt cà chua, nấu canh, hoặc ăn sống với nước mắm
                </p>
              </CardContent>
            </Card>

            <Card className="border-green-200 bg-green-50/30">
              <CardHeader icon={Leaf} title="🫘 Đậu các loại" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  <strong>Đậu xanh, đậu đỏ, đậu đen, đậu nành...</strong>
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giàu protein, chất xơ</li>
                  <li>Nhiều vitamin và khoáng chất</li>
                  <li>Giúp no lâu</li>
                  <li>Có thể nấu chè, nấu cháo, hoặc nấu canh</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Ví dụ: Chè đậu xanh, cháo đậu đỏ, canh đậu phụ
                </p>
              </CardContent>
            </Card>

            <Card className="border-yellow-200 bg-yellow-50/30">
              <CardHeader icon={CheckCircle} title="🥛 Sữa đậu nành" />
              <CardContent>
                <p className="text-body-sm mb-2">
                  Nước đậu nành, một thức uống phổ biến ở Việt Nam.
                </p>
                <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700 mb-2">
                  <li>Giàu protein thực vật</li>
                  <li>Có canxi (nếu bổ sung)</li>
                  <li>Ít chất béo bão hòa hơn sữa bò</li>
                  <li>Tốt cho người không uống được sữa bò</li>
                </ul>
                <p className="text-xs text-gray-600 italic">
                  Nên chọn sữa đậu nành không đường hoặc ít đường
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 6. How to Choose and Combine */}
      <section aria-labelledby="combine-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="combine-heading" className="heading-2 whitespace-nowrap">
            Cách Lựa chọn và Kết hợp
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Để có bữa ăn cân bằng với thực phẩm Việt Nam, hãy nhớ:
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Nguyên tắc đơn giản</h3>
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">1. Đa dạng thực phẩm</p>
                <p className="text-sm text-gray-700">
                  Mỗi bữa nên có nhiều loại thực phẩm khác nhau. Ví dụ: Cơm + Cá + Rau muống + Canh chua + Rau sống.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">2. Ưu tiên thực phẩm tươi</p>
                <p className="text-sm text-gray-700">
                  Thực phẩm tươi thường tốt hơn thực phẩm đóng hộp. Mua ở chợ, siêu thị, chọn rau củ quả tươi ngon.
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">3. Cân bằng các nhóm</p>
                <p className="text-sm text-gray-700">
                  Mỗi bữa nên có: Cơm (tinh bột) + Thịt/Cá/Đậu phụ (đạm) + Rau (vitamin, chất xơ) + Canh (nước, rau).
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 mb-1">4. Ăn theo mùa</p>
                <p className="text-sm text-gray-700">
                  Rau củ quả theo mùa thường tươi ngon hơn, rẻ hơn, và có nhiều dinh dưỡng hơn.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Ví dụ kết hợp tốt</h3>
            <div className="space-y-2 text-sm">
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-medium text-gray-900 mb-1">Bữa trưa:</p>
                <p className="text-gray-700">1.5 bát cơm + Canh chua cá + Rau muống xào + Rau sống</p>
                <p className="text-xs text-gray-600 italic mt-1">
                  → Có đủ: Tinh bột (cơm) + Đạm (cá) + Rau (canh chua, rau muống, rau sống)
                </p>
              </div>
              <div className="bg-white rounded p-3 border border-green-200">
                <p className="font-medium text-gray-900 mb-1">Bữa tối:</p>
                <p className="text-gray-700">1 bát cơm + Thịt kho tàu + Canh rau cải + Đậu bắp luộc</p>
                <p className="text-xs text-gray-600 italic mt-1">
                  → Có đủ: Tinh bột (cơm) + Đạm (thịt) + Rau (canh, đậu bắp)
                </p>
              </div>
            </div>
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
          <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. Giá trị dinh dưỡng có thể thay đổi tùy theo 
          cách chế biến và nguồn gốc thực phẩm. Nếu bạn có vấn đề sức khỏe, hãy tham khảo bác sĩ hoặc chuyên gia dinh dưỡng.
        </p>
      </div>
    </main>
  );
}

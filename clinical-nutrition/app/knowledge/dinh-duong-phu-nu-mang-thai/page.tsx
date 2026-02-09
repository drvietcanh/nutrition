import type { Metadata } from "next";
import Link from "next/link";
import { Baby, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export const metadata: Metadata = {
  title: "Dinh dưỡng cho Phụ nữ Mang thai và Cho con bú",
  description:
    "Hướng dẫn dinh dưỡng cho phụ nữ mang thai và cho con bú: 3 giai đoạn thai kỳ, thực phẩm nên ăn và nên tránh, bổ sung sắt, acid folic, canxi.",
  keywords: [
    "dinh dưỡng mang thai",
    "phụ nữ mang thai",
    "dinh dưỡng cho con bú",
    "sắt",
    "acid folic",
    "canxi",
  ],
  openGraph: {
    title: "Dinh dưỡng cho Phụ nữ Mang thai và Cho con bú",
    description:
      "Hướng dẫn dinh dưỡng cho phụ nữ mang thai và cho con bú với thực phẩm Việt Nam.",
    url: "https://clinical-nutrition.edu.vn/knowledge/dinh-duong-phu-nu-mang-thai",
  },
};

export default function DinhDuongPhuNuMangThaiPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng cho Phụ nữ Mang thai và Cho con bú" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Baby className="w-8 h-8 text-pink-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng cho Phụ nữ Mang thai và Cho con bú
          </h1>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Dinh dưỡng trong thai kỳ và khi cho con bú rất quan trọng cho sức khỏe của cả mẹ và bé. 
            Ăn uống đúng cách giúp thai nhi phát triển tốt, mẹ khỏe mạnh, và có đủ sữa cho con bú.
          </p>
          <div className="rounded-lg border border-pink-200 bg-pink-50 p-4">
            <p className="text-sm text-pink-900 mb-2">
              <strong>👉 Nguyên tắc chính:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-sm text-pink-900">
              <li>Ăn đa dạng, đủ chất dinh dưỡng</li>
              <li>Bổ sung đủ sắt, acid folic, canxi</li>
              <li>Ăn nhiều rau củ quả</li>
              <li>Tránh thực phẩm có hại</li>
            </ul>
          </div>
          <p className="text-body">
            Trang này hướng dẫn dinh dưỡng cho phụ nữ mang thai và cho con bú, 
            với các thực phẩm quen thuộc của người Việt.
          </p>
        </div>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Thông tin này giúp bạn hiểu về dinh dưỡng khi mang thai và cho con bú. 
            Đây không phải là hướng dẫn điều trị. Nếu bạn đang mang thai, hãy tham khảo bác sĩ.
          </p>
        </Callout>
      </header>

      {/* 2. Three Trimesters */}
      <section aria-labelledby="trimesters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="trimesters-heading" className="heading-2 whitespace-nowrap">
            Dinh dưỡng theo 3 Giai đoạn Thai kỳ
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={CheckCircle} title="🌱 3 Tháng Đầu (Tam cá nguyệt 1)" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Đặc điểm:</strong> Thai nhi bắt đầu hình thành, mẹ thường bị ốm nghén.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Nhu cầu dinh dưỡng:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Chưa cần tăng nhiều calo (chỉ cần thêm khoảng 100-200 calo/ngày)</li>
                    <li>Quan trọng nhất: Bổ sung acid folic (ngăn dị tật ống thần kinh)</li>
                    <li>Bổ sung sắt để phòng thiếu máu</li>
                    <li>Ăn đủ protein, vitamin, khoáng chất</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Thực phẩm nên ăn:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Rau xanh (rau muống, rau cải) - giàu acid folic</li>
                    <li>Thịt đỏ, gan, trứng - giàu sắt</li>
                    <li>Trái cây tươi - vitamin C giúp hấp thu sắt</li>
                    <li>Đậu phụ, đậu các loại - protein và acid folic</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Xử lý ốm nghén:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Chia nhỏ bữa ăn - ăn 5-6 bữa nhỏ thay vì 3 bữa lớn</li>
                    <li>Ăn bánh mì khô, bánh quy vào buổi sáng để giảm buồn nôn</li>
                    <li>Tránh thức ăn có mùi mạnh, nhiều dầu mỡ</li>
                    <li>Uống đủ nước, có thể uống nước chanh, gừng</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={CheckCircle} title="🌿 3 Tháng Giữa (Tam cá nguyệt 2)" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Đặc điểm:</strong> Thai nhi phát triển nhanh, mẹ thường cảm thấy khỏe hơn.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Nhu cầu dinh dưỡng:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Cần thêm khoảng 300-350 calo/ngày</li>
                    <li>Tăng cường protein (thịt, cá, trứng, đậu phụ)</li>
                    <li>Bổ sung canxi (sữa, tôm, cua, cá nhỏ)</li>
                    <li>Tiếp tục bổ sung sắt và acid folic</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Thực phẩm nên ăn:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Sữa, sữa chua - giàu canxi</li>
                    <li>Cá, tôm, cua - canxi và omega-3</li>
                    <li>Thịt, trứng, đậu phụ - protein</li>
                    <li>Rau củ quả đa dạng - vitamin và chất xơ</li>
                    <li>Gạo, bánh mì - năng lượng</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 bg-purple-50/30">
            <CardHeader icon={CheckCircle} title="🌳 3 Tháng Cuối (Tam cá nguyệt 3)" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Đặc điểm:</strong> Thai nhi phát triển mạnh nhất, mẹ cần nhiều năng lượng và dinh dưỡng.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Nhu cầu dinh dưỡng:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Cần thêm khoảng 450-500 calo/ngày</li>
                    <li>Tiếp tục tăng cường protein, canxi, sắt</li>
                    <li>Ăn nhiều rau củ quả để tránh táo bón</li>
                    <li>Uống đủ nước (2-2.5 lít/ngày)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Thực phẩm nên ăn:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Tất cả các nhóm thực phẩm, tăng lượng lên</li>
                    <li>Ăn nhiều rau để tránh táo bón</li>
                    <li>Uống nhiều nước, nước canh</li>
                    <li>Chia nhỏ bữa ăn vì bụng bị chèn ép</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 3. Important Nutrients */}
      <section aria-labelledby="nutrients-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="nutrients-heading" className="heading-2 whitespace-nowrap">
            Chất Dinh dưỡng Quan trọng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader icon={CheckCircle} title="🩸 Sắt (Iron)" />
            <CardContent>
              <p className="text-body-sm mb-2">
                <strong>Tại sao cần:</strong> Phòng thiếu máu, giúp vận chuyển oxy cho mẹ và bé.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Thực phẩm giàu sắt:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Thịt đỏ (thịt bò, thịt lợn nạc)</li>
                    <li>Gan (gan lợn, gan gà) - ăn 1-2 lần/tuần</li>
                    <li>Trứng</li>
                    <li>Đậu phụ, đậu các loại</li>
                    <li>Rau xanh (rau muống, rau cải)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Mẹo hấp thu sắt tốt hơn:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Ăn thực phẩm giàu sắt cùng với thực phẩm giàu vitamin C (cam, chanh, cà chua)</li>
                    <li>Không uống trà, cà phê ngay sau bữa ăn (làm giảm hấp thu sắt)</li>
                    <li>Bác sĩ thường kê bổ sung sắt - uống theo chỉ định</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-green-200 bg-green-50/30">
            <CardHeader icon={CheckCircle} title="🌿 Acid Folic (Folate)" />
            <CardContent>
              <p className="text-body-sm mb-2">
                <strong>Tại sao cần:</strong> Ngăn dị tật ống thần kinh ở thai nhi (quan trọng nhất trong 3 tháng đầu).
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Thực phẩm giàu acid folic:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Rau xanh (rau muống, rau cải, rau ngót)</li>
                    <li>Đậu các loại (đậu xanh, đậu đỏ, đậu đen)</li>
                    <li>Trái cây (cam, chuối, đu đủ)</li>
                    <li>Gan</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Lưu ý:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Nên bổ sung acid folic từ trước khi mang thai và trong 3 tháng đầu</li>
                    <li>Bác sĩ thường kê bổ sung acid folic - uống theo chỉ định</li>
                    <li>Ăn nhiều rau xanh cũng giúp bổ sung acid folic</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-blue-200 bg-blue-50/30">
            <CardHeader icon={CheckCircle} title="🦴 Canxi (Calcium)" />
            <CardContent>
              <p className="text-body-sm mb-2">
                <strong>Tại sao cần:</strong> Xây dựng xương và răng cho thai nhi, giữ xương mẹ chắc khỏe.
              </p>
              <div className="space-y-2">
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Thực phẩm giàu canxi:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Sữa, sữa chua, phô mai</li>
                    <li>Cá nhỏ ăn cả xương (cá cơm, cá mòi)</li>
                    <li>Tôm, cua (ăn cả vỏ)</li>
                    <li>Đậu phụ (nếu làm với calcium sulfate)</li>
                    <li>Rau xanh (rau cải, rau muống)</li>
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900 mb-1">Lưu ý:</p>
                  <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
                    <li>Nên uống 2-3 ly sữa/ngày hoặc ăn sữa chua</li>
                    <li>Nếu không uống được sữa, có thể bổ sung canxi theo chỉ định bác sĩ</li>
                    <li>Vitamin D giúp hấp thu canxi - nên phơi nắng sáng 15-20 phút/ngày</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 4. Foods to Avoid */}
      <section aria-labelledby="avoid-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="avoid-heading" className="heading-2 whitespace-nowrap">
            Thực phẩm Nên Tránh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">⚠️ Thực phẩm có thể gây hại:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li><strong>Rượu bia:</strong> Tuyệt đối không uống - có thể gây dị tật thai nhi</li>
              <li><strong>Thịt sống, cá sống:</strong> Có thể chứa vi khuẩn, ký sinh trùng</li>
              <li><strong>Trứng sống:</strong> Có thể chứa vi khuẩn salmonella</li>
              <li><strong>Phô mai mềm chưa tiệt trùng:</strong> Có thể chứa vi khuẩn listeria</li>
              <li><strong>Cá có nhiều thủy ngân:</strong> Cá mập, cá kiếm, cá thu lớn - nên tránh</li>
              <li><strong>Cà phê:</strong> Hạn chế, không quá 200mg caffeine/ngày (khoảng 1-2 ly cà phê nhỏ)</li>
              <li><strong>Đồ ăn nhanh, đồ chế biến sẵn:</strong> Có nhiều muối, đường, chất bảo quản</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Lưu ý về cá:</h3>
            <p className="text-sm text-gray-700 mb-2">
              Cá rất tốt cho thai nhi (giàu omega-3, protein), nhưng cần chọn đúng loại:
            </p>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li><strong>Nên ăn:</strong> Cá hồi, cá trê, cá lóc, cá rô, tôm, cua (2-3 lần/tuần)</li>
              <li><strong>Nên tránh:</strong> Cá mập, cá kiếm, cá thu lớn (có nhiều thủy ngân)</li>
              <li>Nên nấu chín kỹ, không ăn cá sống</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Nutrition While Breastfeeding */}
      <section aria-labelledby="breastfeeding-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="breastfeeding-heading" className="heading-2 whitespace-nowrap">
            Dinh dưỡng khi Cho con bú
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <p className="text-body-lg">
            Khi cho con bú, mẹ cần nhiều năng lượng và dinh dưỡng hơn cả khi mang thai để tạo sữa cho con.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Nhu cầu dinh dưỡng:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Cần thêm khoảng 500 calo/ngày so với bình thường</li>
              <li>Uống nhiều nước (2.5-3 lít/ngày) - nước rất quan trọng để tạo sữa</li>
              <li>Tiếp tục bổ sung sắt, canxi</li>
              <li>Ăn đủ protein, vitamin, khoáng chất</li>
            </ul>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-5">
            <h3 className="font-semibold text-gray-900 mb-3">Thực phẩm nên ăn:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Tất cả các nhóm thực phẩm, tăng lượng lên</li>
              <li>Uống nhiều nước, nước canh, sữa</li>
              <li>Ăn nhiều rau củ quả</li>
              <li>Thịt, cá, trứng, đậu phụ - đủ protein</li>
              <li>Sữa, sữa chua - đủ canxi</li>
            </ul>
          </div>

          <div className="bg-amber-50 border-l-4 border-amber-500 rounded-r-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-2">💡 Mẹo tăng sữa:</h3>
            <ul className="list-disc space-y-1 pl-5 text-sm text-gray-700">
              <li>Uống nhiều nước - uống nước trước và sau khi cho con bú</li>
              <li>Ăn đủ calo - không nên ăn kiêng khi cho con bú</li>
              <li>Cho con bú thường xuyên - càng bú nhiều, sữa càng nhiều</li>
              <li>Nghỉ ngơi đủ - mệt mỏi có thể làm giảm sữa</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. Sample Menu */}
      <section aria-labelledby="sample-menu-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="sample-menu-heading" className="heading-2 whitespace-nowrap">
            Thực đơn Mẫu Một Ngày (Khi Mang thai)
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-200 rounded-lg p-6">
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌅 Bữa sáng (7:00)</h3>
                <p className="text-sm text-gray-700">
                  1 tô phở bò (nhiều thịt, nhiều rau) + 1 ly sữa tươi
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍎 Bữa phụ sáng (10:00)</h3>
                <p className="text-sm text-gray-700">
                  1 quả chuối, hoặc 1 hộp sữa chua, hoặc 1 quả táo
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌞 Bữa trưa (12:00)</h3>
                <p className="text-sm text-gray-700">
                  1.5-2 bát cơm + Canh chua cá (nhiều rau) + Rau muống xào + Cá rán + Rau sống
                </p>
                <p className="text-xs text-gray-600 italic mt-1">
                  → Có đủ: Cơm (năng lượng) + Cá (protein, omega-3) + Rau (vitamin, chất xơ)
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🍊 Bữa phụ chiều (15:00)</h3>
                <p className="text-sm text-gray-700">
                  1 ly sữa, hoặc 1 quả cam, hoặc 1 nắm hạt
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌙 Bữa tối (18:00)</h3>
                <p className="text-sm text-gray-700">
                  1.5-2 bát cơm + Thịt kho tàu (thịt nạc) + Canh rau cải + Đậu bắp luộc + Rau sống
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">🌙 Bữa phụ tối (21:00)</h3>
                <p className="text-sm text-gray-700">
                  1 ly sữa ấm, hoặc 1 hộp sữa chua
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-2">💧 Uống nước</h3>
                <p className="text-sm text-gray-700">
                  Uống nước lọc suốt ngày, tổng cộng khoảng 2-2.5 lít. Có thể uống nước canh, sữa, nước trái cây.
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
            <CardHeader icon={CheckCircle} title="Dinh dưỡng Hàng ngày" />
            <CardContent>
              <p className="text-body-sm">
                Hướng dẫn ăn uống cân bằng hàng ngày với thực phẩm Việt Nam.
              </p>
            </CardContent>
          </Card>
          <Card href="/knowledge/thuc-pham-viet-nam-gia-tri-dinh-duong">
            <CardHeader icon={CheckCircle} title="Thực phẩm Việt Nam" />
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
          <strong>Lưu ý:</strong> Thông tin này chỉ mang tính giáo dục. Nếu bạn đang mang thai hoặc cho con bú, 
          hãy tham khảo bác sĩ để được tư vấn dinh dưỡng phù hợp với tình trạng của bạn. 
          Bổ sung vitamin và khoáng chất nên theo chỉ định của bác sĩ.
        </p>
      </div>
    </main>
  );
}

import type { Metadata } from "next";
import { Breadcrumb } from "../../../components/Breadcrumb";
import { Card } from "../../../components/Card";
import { Callout } from "../../../components/Callout";
import { Sun, CheckCircle2, AlertCircle, Bone, Milk, Fish } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vitamin D và Sức khỏe Xương",
  description:
    "Hiểu về vitamin D - vai trò quan trọng trong sức khỏe xương, nguồn thực phẩm, và cách đảm bảo đủ vitamin D cho cơ thể.",
  keywords: [
    "vitamin D",
    "sức khỏe xương",
    "canxi",
    "ánh nắng mặt trời",
    "dinh dưỡng",
  ],
};

export default function VitaminDPage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Kiến thức", href: "/knowledge" },
          { label: "Vitamin D và Sức khỏe Xương" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Sun className="w-8 h-8 text-yellow-600" aria-hidden="true" />
          <h1 className="heading-1">Vitamin D và Sức khỏe Xương</h1>
        </div>
        <p className="text-body-lg text-gray-700">
          Vitamin D là một vitamin đặc biệt - cơ thể có thể tạo ra nó khi tiếp xúc với ánh nắng mặt trời. 
          Vitamin D giúp cơ thể hấp thu canxi, rất quan trọng cho xương chắc khỏe. 
          Hiểu về vitamin D giúp bạn đảm bảo cơ thể có đủ lượng cần thiết.
        </p>
      </header>

      {/* Key Points */}
      <Callout variant="info" title="Điểm chính">
        <ul className="space-y-2 text-sm">
          <li>
            <strong>Vitamin D</strong> giúp cơ thể hấp thu canxi - cần thiết cho xương chắc khỏe
          </li>
          <li>
            cơ thể có thể tạo vitamin D từ <strong>ánh nắng mặt trời</strong>
          </li>
          <li>
            Một số thực phẩm như <strong>cá béo, lòng đỏ trứng, sữa tăng cường</strong> chứa vitamin D
          </li>
          <li>
            Người cao tuổi, người ít ra ngoài, hoặc sống ở vùng ít nắng có thể thiếu vitamin D
          </li>
          <li>
            Thiếu vitamin D có thể dẫn đến xương yếu, dễ gãy
          </li>
        </ul>
      </Callout>

      {/* What is Vitamin D */}
      <section className="space-y-4">
        <h2 className="heading-2">Vitamin D là gì?</h2>
        <div className="space-y-4">
          <p className="text-body">
            <strong>Vitamin D</strong> là một vitamin đặc biệt vì cơ thể có thể tự tạo ra nó khi da tiếp xúc với ánh nắng mặt trời. 
            Không giống như nhiều vitamin khác, bạn không nhất thiết phải lấy vitamin D chỉ từ thực phẩm.
          </p>

          <div className="rounded-lg border border-blue-200 bg-blue-50 p-4">
            <p className="text-sm text-blue-900">
              <strong>Ví dụ đơn giản:</strong> Khi bạn ra ngoài trời vào buổi sáng, ánh nắng chiếu vào da, 
              cơ thể sẽ tự động bắt đầu tạo vitamin D. Đây là cách tự nhiên nhất để có vitamin D!
            </p>
          </div>

          <Card>
            <h3 className="heading-4 mb-3">Vai trò của Vitamin D</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Chức năng chính:</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giúp cơ thể hấp thu canxi từ thức ăn</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Giữ xương chắc khỏe, ngăn ngừa loãng xương</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ chức năng cơ bắp</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Bone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Hỗ trợ hệ miễn dịch</span>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 mb-2">Điều gì xảy ra khi thiếu?</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Xương yếu, dễ gãy (loãng xương)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Đau cơ, yếu cơ</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-4 h-4 text-amber-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span>Ở trẻ em: còi xương (xương mềm, biến dạng)</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Sources */}
      <section className="space-y-4">
        <h2 className="heading-2">Nguồn Vitamin D</h2>
        <div className="space-y-4">
          <Card className="border-yellow-200 bg-yellow-50">
            <h3 className="heading-4 text-yellow-900 mb-3 flex items-center gap-2">
              <Sun className="w-5 h-5" aria-hidden="true" />
              Ánh nắng Mặt trời (Nguồn chính)
            </h3>
            <p className="text-body text-yellow-900 mb-3">
              cơ thể tạo vitamin D khi da tiếp xúc với ánh nắng. Chỉ cần 10-15 phút mỗi ngày, 
              vài lần một tuần là đủ cho hầu hết mọi người.
            </p>
            <div className="bg-white rounded-lg p-3 border border-yellow-200">
              <p className="text-xs font-semibold text-gray-900 mb-1">Lưu ý:</p>
              <ul className="text-xs text-gray-700 space-y-1">
                <li>• Thời gian tốt nhất: sáng sớm (7-9h) hoặc chiều muộn (4-6h)</li>
                <li>• Tránh nắng gắt giữa trưa để bảo vệ da</li>
                <li>• Người da sẫm màu cần thời gian lâu hơn</li>
                <li>• Mùa đông, vùng ít nắng: có thể cần bổ sung từ thực phẩm</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="heading-4 mb-3">Thực phẩm chứa Vitamin D</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm font-semibold text-green-700 mb-2">✓ Nguồn tốt:</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <Fish className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Cá béo:</strong> cá hồi, cá thu, cá ngừ (100g cá hồi ≈ 400-600 IU)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Milk className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Lòng đỏ trứng:</strong> 1 quả trứng ≈ 40 IU</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Milk className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Sữa tăng cường:</strong> 1 cốc (250ml) ≈ 100 IU</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Milk className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span><strong>Nấm:</strong> nấm được phơi nắng chứa nhiều vitamin D</span>
                  </li>
                </ul>
              </div>
              <div className="bg-blue-50 rounded-lg p-3 border border-blue-200">
                <p className="text-xs font-semibold text-gray-900 mb-2">Ví dụ bữa ăn:</p>
                <p className="text-xs text-gray-700 mb-2">
                  <strong>Bữa sáng:</strong> 1 quả trứng + 1 cốc sữa tăng cường = ~140 IU
                </p>
                <p className="text-xs text-gray-700">
                  <strong>Bữa trưa:</strong> 100g cá hồi nướng = ~400-600 IU
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Nhu cầu hàng ngày: 600-800 IU (người lớn)
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* How Much */}
      <section className="space-y-4">
        <h2 className="heading-2">Cần bao nhiêu Vitamin D?</h2>
        <Card>
          <div className="space-y-4">
            <p className="text-body">
              Nhu cầu vitamin D thay đổi theo tuổi và tình trạng sức khỏe:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người lớn (19-70 tuổi)</h3>
                <p className="text-2xl font-bold text-blue-600 mb-1">600 IU/ngày</p>
                <p className="text-xs text-gray-600">
                  Hoặc 15-20 phút nắng sáng, vài lần/tuần
                </p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                <h3 className="font-semibold text-gray-900 mb-2">Người trên 70 tuổi</h3>
                <p className="text-2xl font-bold text-green-600 mb-1">800 IU/ngày</p>
                <p className="text-xs text-gray-600">
                  Da ít tạo vitamin D hơn khi già, cần bổ sung nhiều hơn
                </p>
              </div>
            </div>
            <div className="rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm text-amber-900">
                <strong>Lưu ý:</strong> Nếu bạn ít ra ngoài, sống ở vùng ít nắng, hoặc có da sẫm màu, 
                có thể cần bổ sung vitamin D từ thực phẩm hoặc viên uống. Nên tham khảo ý kiến bác sĩ trước khi bổ sung.
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Real Examples */}
      <section className="space-y-4">
        <h2 className="heading-2">Ví dụ thực tế</h2>
        <div className="space-y-4">
          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 1: Người làm việc văn phòng</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Anh Nam, 35 tuổi, làm việc trong văn phòng từ 8h-17h, 
              ít ra ngoài trời. Da sẫm màu.
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Đi bộ 15 phút vào buổi sáng trước khi vào văn phòng (7h-8h)</li>
              <li>Ăn cá hồi 2-3 lần/tuần</li>
              <li>Uống sữa tăng cường vitamin D mỗi ngày</li>
              <li>Hoặc tham khảo bác sĩ về viên uống bổ sung</li>
            </ul>
          </Card>

          <Card>
            <h3 className="heading-5 mb-2">Ví dụ 2: Người cao tuổi</h3>
            <p className="text-body-sm mb-2">
              <strong>Tình huống:</strong> Bà Lan, 75 tuổi, ít ra ngoài vì sợ ngã, sống ở miền Bắc (mùa đông ít nắng).
            </p>
            <p className="text-body-sm mb-2">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="space-y-1 text-sm text-gray-700 list-disc pl-6">
              <li>Ngồi gần cửa sổ có nắng 15-20 phút mỗi ngày (nếu có nắng)</li>
              <li>Ăn trứng, cá béo thường xuyên</li>
              <li>Uống sữa tăng cường vitamin D</li>
              <li>Tham khảo bác sĩ về viên uống bổ sung (thường cần 800-1000 IU/ngày)</li>
            </ul>
          </Card>
        </div>
      </section>

      {/* Tips */}
      <section className="space-y-4">
        <h2 className="heading-2">Tips thực hành</h2>
        <Card>
          <div className="space-y-3">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ra ngoài trời thường xuyên:</strong> Chỉ cần 10-15 phút nắng sáng, vài lần/tuần là đủ
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Ăn cá béo:</strong> Cá hồi, cá thu 2-3 lần/tuần
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Chọn sữa tăng cường:</strong> Nhiều loại sữa có thêm vitamin D
              </p>
            </div>
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" aria-hidden="true" />
              <p className="text-sm text-gray-700">
                <strong>Kiểm tra xét nghiệm:</strong> Nếu nghi ngờ thiếu, có thể xét nghiệm máu để kiểm tra
              </p>
            </div>
          </div>
        </Card>
      </section>

      {/* Misconceptions */}
      <section className="space-y-4">
        <h2 className="heading-2">Hiểu lầm phổ biến</h2>
        <Callout variant="warning" title="Hiểu lầm thường gặp">
          <div className="space-y-3">
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần uống sữa là đủ vitamin D"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Sữa thường không chứa nhiều vitamin D tự nhiên. 
                Cần chọn sữa "tăng cường vitamin D" hoặc kết hợp với nguồn khác như ánh nắng, cá béo.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Càng nhiều vitamin D càng tốt"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Quá nhiều vitamin D có thể gây hại (ngộ độc). 
                Không nên tự ý uống liều cao mà không có chỉ định của bác sĩ.
              </p>
            </div>
            <div>
              <p className="text-sm font-semibold mb-1">"Chỉ cần ánh nắng là đủ"</p>
              <p className="text-sm">
                <strong>Sự thật:</strong> Ở vùng ít nắng, mùa đông, hoặc người ít ra ngoài, 
                có thể cần bổ sung từ thực phẩm hoặc viên uống.
              </p>
            </div>
          </div>
        </Callout>
      </section>

      {/* Related Articles */}
      <section className="space-y-4">
        <h2 className="heading-2">Bài viết Liên quan</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card href="/knowledge/vitamins-minerals/calcium-bone-health">
            <h3 className="heading-5 mb-2">Canxi và Sức khỏe Xương</h3>
            <p className="text-sm text-gray-600">
              Vitamin D giúp hấp thu canxi - tìm hiểu về canxi
            </p>
          </Card>
          <Card href="/knowledge/elderly-nutrition">
            <h3 className="heading-5 mb-2">Dinh dưỡng Người cao tuổi</h3>
            <p className="text-sm text-gray-600">
              Người cao tuổi có nguy cơ thiếu vitamin D cao hơn
            </p>
          </Card>
        </div>
      </section>

      {/* Safety Disclaimer */}
      <Callout variant="error" title="Lưu ý quan trọng">
        <p className="text-sm">
          Thông tin này chỉ dành cho mục đích giáo dục. Nếu bạn nghi ngờ thiếu vitamin D, 
          có vấn đề về xương, hoặc đang cân nhắc bổ sung vitamin D, hãy tham khảo ý kiến 
          của bác sĩ hoặc chuyên gia dinh dưỡng để được đánh giá và tư vấn phù hợp với tình trạng của bạn.
        </p>
      </Callout>
    </main>
  );
}

import Link from "next/link";
import { Heart, AlertCircle, CheckCircle, Info } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function HypertensionNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Tăng huyết áp" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Tăng huyết áp: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Tăng huyết áp là một trong những bệnh mạn tính phổ biến nhất, ảnh hưởng đến hàng triệu người
          trên toàn thế giới. Dinh dưỡng đóng vai trò quan trọng trong cả phòng ngừa và kiểm soát
          tăng huyết áp. Trang này cung cấp hướng dẫn giáo dục về các nguyên tắc dinh dưỡng dựa trên
          bằng chứng cho bệnh nhân tăng huyết áp.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp các bác sĩ, điều dưỡng,
            và sinh viên y khoa hiểu các nguyên tắc dinh dưỡng trong quản lý tăng huyết áp. Nó không
            thay thế phán đoán lâm sàng hoặc tư vấn từ chuyên gia dinh dưỡng đã đăng ký.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters in Hypertension */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng trong Tăng huyết áp?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Nhiều nghiên cứu đã chứng minh mối liên hệ chặt chẽ giữa chế độ ăn và huyết áp. Các yếu tố
            dinh dưỡng có thể ảnh hưởng trực tiếp đến huyết áp bao gồm:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Natri (muối):</strong> Lượng natri cao trong chế độ ăn có liên quan đến tăng huyết áp
              ở nhiều người. Giảm natri có thể giúp giảm huyết áp, đặc biệt ở những người nhạy cảm với muối.
            </li>
            <li>
              <strong>Kali:</strong> Kali có tác dụng bảo vệ, giúp giảm huyết áp bằng cách đối kháng với
              tác dụng của natri và thư giãn mạch máu.
            </li>
            <li>
              <strong>Cân nặng:</strong> Thừa cân và béo phì là yếu tố nguy cơ quan trọng của tăng huyết áp.
              Giảm cân có thể giúp giảm huyết áp đáng kể.
            </li>
            <li>
              <strong>Chế độ ăn tổng thể:</strong> Các nghiên cứu như DASH (Dietary Approaches to Stop
              Hypertension) đã chứng minh rằng một chế độ ăn giàu trái cây, rau quả, và sản phẩm sữa ít béo
              có thể giúp giảm huyết áp.
            </li>
          </ul>
          <p>
            Hiểu các nguyên tắc dinh dưỡng này giúp các bác sĩ lâm sàng tư vấn bệnh nhân một cách hiệu quả
            và hỗ trợ kiểm soát huyết áp thông qua thay đổi lối sống.
          </p>
        </div>
      </section>

      {/* 3. Basic Nutrition Principles */}
      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng Cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        {/* DASH Diet */}
        <Card>
          <CardHeader
            icon={CheckCircle}
            title="Chế độ Ăn DASH (Dietary Approaches to Stop Hypertension)"
          />
          <CardContent>
            <p className="text-body mb-4">
              DASH diet là một chế độ ăn được thiết kế đặc biệt để giúp giảm huyết áp. Nhiều nghiên cứu
              đã chứng minh hiệu quả của DASH diet trong việc giảm huyết áp, đặc biệt khi kết hợp với
              hạn chế natri.
            </p>
            <h3 className="heading-4 mb-3">Các thành phần chính của DASH diet:</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Trái cây và rau quả:</strong> 4-5 phần mỗi ngày. Cung cấp kali, magie, và chất xơ.
              </li>
              <li>
                <strong>Sản phẩm sữa ít béo:</strong> 2-3 phần mỗi ngày. Cung cấp canxi và protein.
              </li>
              <li>
                <strong>Ngũ cốc nguyên hạt:</strong> 6-8 phần mỗi ngày. Cung cấp chất xơ và năng lượng.
              </li>
              <li>
                <strong>Protein nạc:</strong> Thịt nạc, cá, gia cầm, đậu. Hạn chế thịt đỏ.
              </li>
              <li>
                <strong>Hạn chế:</strong> Natri, chất béo bão hòa, đường, và thực phẩm chế biến sẵn.
              </li>
            </ul>
            <p className="text-body-sm mt-4 italic">
              <strong>Lưu ý:</strong> DASH diet là một hướng dẫn giáo dục. Trong thực hành, các bác sĩ lâm sàng
              sẽ điều chỉnh dựa trên sở thích, văn hóa, và khả năng của từng bệnh nhân.
            </p>
          </CardContent>
        </Card>

        {/* Sodium */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Natri (Muối)</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Khuyến nghị:</strong> Hầu hết các hướng dẫn khuyến nghị hạn chế natri xuống{" "}
              <strong>&lt; 2.3g/ngày</strong> (tương đương &lt; 6g muối/ngày) cho người lớn. Một số hướng dẫn
              khuyến nghị mục tiêu thấp hơn (&lt; 1.5g/ngày) cho những người có nguy cơ cao hoặc đã bị
              tăng huyết áp.
            </p>
            <p>
              <strong>Nguồn natri ẩn:</strong> Phần lớn natri trong chế độ ăn không đến từ muối ăn mà từ
              thực phẩm chế biến sẵn, thực phẩm đóng hộp, và thức ăn nhanh. Các nguồn chính bao gồm:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Thực phẩm chế biến sẵn (đồ hộp, đông lạnh)</li>
              <li>Thức ăn nhanh và nhà hàng</li>
              <li>Nước sốt, gia vị (nước tương, tương ớt, mayonnaise)</li>
              <li>Thịt chế biến (xúc xích, thịt nguội, thịt xông khói)</li>
              <li>Bánh mì và các sản phẩm bánh nướng</li>
              <li>Phô mai và các sản phẩm sữa chế biến</li>
            </ul>
            <p>
              <strong>Đọc nhãn thực phẩm:</strong> Hướng dẫn bệnh nhân đọc nhãn dinh dưỡng để nhận biết
              lượng natri. Một sản phẩm được coi là "ít natri" nếu có &lt; 140mg natri mỗi khẩu phần.
            </p>
          </div>
        </div>

        {/* Potassium */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Kali (Potassium)</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Vai trò:</strong> Kali giúp giảm huyết áp bằng cách:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Đối kháng với tác dụng của natri</li>
              <li>Thư giãn mạch máu</li>
              <li>Giảm tác động của hệ renin-angiotensin-aldosterone</li>
            </ul>
            <p>
              <strong>Khuyến nghị:</strong> Người lớn nên tiêu thụ khoảng <strong>3.5-4.7g kali/ngày</strong>{" "}
              từ thực phẩm. Tuy nhiên, cần thận trọng ở những người có bệnh thận hoặc đang dùng thuốc
              ảnh hưởng đến kali.
            </p>
            <p>
              <strong>Nguồn kali tốt:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Trái cây: chuối, cam, dưa hấu, bơ</li>
              <li>Rau quả: khoai tây, cà chua, rau lá xanh, đậu</li>
              <li>Sản phẩm sữa ít béo</li>
              <li>Cá và thịt nạc</li>
            </ul>
            <Callout variant="warning" title="Lưu ý quan trọng">
              <p className="text-body-sm">
                Ở những người có <strong>bệnh thận mạn</strong> hoặc đang dùng thuốc ảnh hưởng đến kali
                (ví dụ: ACE inhibitors, potassium-sparing diuretics), cần theo dõi kali máu và có thể
                cần hạn chế kali. Luôn xem xét bệnh lý kèm và thuốc đang dùng.
              </p>
            </Callout>
          </div>
        </div>

        {/* Other Nutrients */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Các Chất Dinh dưỡng Khác</h3>
          <div className="space-y-3 text-body-sm">
            <p>
              <strong>Magnesium:</strong> Một số nghiên cứu cho thấy magie có thể giúp giảm huyết áp nhẹ.
              Nguồn tốt: rau lá xanh, các loại hạt, ngũ cốc nguyên hạt, đậu.
            </p>
            <p>
              <strong>Canxi:</strong> Canxi từ sản phẩm sữa có thể có tác dụng bảo vệ nhẹ. Tuy nhiên,
              bổ sung canxi không được khuyến nghị cho mục đích giảm huyết áp.
            </p>
            <p>
              <strong>Chất xơ:</strong> Chế độ ăn giàu chất xơ (từ trái cây, rau, ngũ cốc nguyên hạt)
              có liên quan đến huyết áp thấp hơn và sức khỏe tim mạch tốt hơn.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Nutrition Adjustments by Disease Status */}
      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Dinh dưỡng Theo Tình trạng Bệnh
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Điều chỉnh dinh dưỡng cho bệnh nhân tăng huyết áp cần được cá nhân hóa dựa trên nhiều yếu tố:
          </p>

          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">Mức độ Tăng huyết áp</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Tăng huyết áp độ 1 (140-159/90-99 mmHg):</strong> Bắt đầu với thay đổi lối sống,
                bao gồm DASH diet và hạn chế natri &lt; 2.3g/ngày.
              </li>
              <li>
                <strong>Tăng huyết áp độ 2 (≥ 160/100 mmHg):</strong> Thường cần thuốc kết hợp với
                thay đổi lối sống. Có thể cần hạn chế natri nghiêm ngặt hơn (&lt; 1.5g/ngày).
              </li>
              <li>
                <strong>Tăng huyết áp kháng trị:</strong> Cần đánh giá kỹ về tuân thủ, thuốc, và các
                yếu tố góp phần. Dinh dưỡng vẫn quan trọng nhưng cần kết hợp với quản lý thuốc tích cực.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
            <h3 className="heading-4">Bệnh lý Kèm</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Bệnh thận:</strong> Cần hạn chế natri, và có thể cần hạn chế kali, phosphorus
                tùy theo giai đoạn bệnh thận.
              </li>
              <li>
                <strong>Đái tháo đường:</strong> Kết hợp DASH diet với quản lý carbohydrate. Chú ý
                đến glycemic control.
              </li>
              <li>
                <strong>Suy tim:</strong> Hạn chế natri nghiêm ngặt (&lt; 2g/ngày) và có thể cần hạn chế dịch.
              </li>
              <li>
                <strong>Thừa cân/Béo phì:</strong> Giảm cân là một trong những can thiệp hiệu quả nhất
                để giảm huyết áp. Mục tiêu giảm 5-10% cân nặng có thể giúp giảm huyết áp đáng kể.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">Độ nhạy cảm với Muối</h3>
            <p className="text-body-sm">
              Không phải tất cả mọi người đều nhạy cảm với muối. Một số người có thể giảm huyết áp đáng kể
              khi giảm natri, trong khi những người khác có thể không có phản ứng rõ ràng. Tuy nhiên,
              hạn chế natri vẫn được khuyến nghị cho tất cả người tăng huyết áp vì lợi ích sức khỏe tổng thể.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Managing Nutritional Complications */}
      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Trong quá trình quản lý tăng huyết áp, có thể gặp một số vấn đề dinh dưỡng cần được giải quyết:
          </p>

          <Card>
            <CardHeader icon={AlertCircle} title="Khó tuân thủ Hạn chế Natri" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Vấn đề:</strong> Nhiều bệnh nhân gặp khó khăn trong việc giảm natri do thói quen ăn uống
                và sự phổ biến của thực phẩm chế biến sẵn.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Giáo dục về nguồn natri ẩn trong thực phẩm</li>
                <li>Hướng dẫn đọc nhãn dinh dưỡng</li>
                <li>Sử dụng gia vị thay thế (tỏi, gừng, chanh, thảo mộc)</li>
                <li>Giảm dần natri thay vì cắt giảm đột ngột</li>
                <li>Nấu ăn tại nhà thay vì ăn ngoài</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={Info} title="Tăng Kali ở Bệnh nhân Có Bệnh Thận" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Vấn đề:</strong> DASH diet khuyến khích tăng kali, nhưng ở bệnh nhân có bệnh thận mạn
                (đặc biệt giai đoạn 3-5), tăng kali có thể nguy hiểm.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Đánh giá chức năng thận trước khi khuyến nghị tăng kali</li>
                <li>Điều chỉnh DASH diet cho bệnh nhân có bệnh thận</li>
                <li>Theo dõi kali máu thường xuyên</li>
                <li>Tham khảo chuyên gia dinh dưỡng khi cần</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={AlertCircle} title="Thiếu Dinh dưỡng do Hạn chế Quá mức" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Vấn đề:</strong> Một số bệnh nhân có thể hạn chế quá mức, dẫn đến thiếu dinh dưỡng
                hoặc giảm chất lượng cuộc sống.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Giải pháp:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Nhấn mạnh cân bằng, không phải loại bỏ hoàn toàn</li>
                <li>Giáo dục về thực phẩm lành mạnh thay vì chỉ tập trung vào hạn chế</li>
                <li>Theo dõi tình trạng dinh dưỡng tổng thể</li>
                <li>Điều chỉnh dựa trên đáp ứng và khả năng tuân thủ</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* 6. Drug-Nutrition Interactions */}
      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Dinh dưỡng-Thuốc
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Một số thuốc điều trị tăng huyết áp có tương tác với dinh dưỡng cần được lưu ý:
          </p>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Thuốc Lợi tiểu (Diuretics)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Thiazide diuretics:</strong> Có thể gây mất kali và magie. Có thể cần bổ sung
                hoặc tăng kali trong chế độ ăn. Tuy nhiên, cần thận trọng ở bệnh nhân có bệnh thận.
              </li>
              <li>
                <strong>Loop diuretics:</strong> Cũng có thể gây mất kali và magie. Theo dõi điện giải.
              </li>
              <li>
                <strong>Potassium-sparing diuretics:</strong> Giữ kali, có thể dẫn đến tăng kali máu,
                đặc biệt nếu kết hợp với chế độ ăn giàu kali hoặc bổ sung kali.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">ACE Inhibitors và ARBs</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Có thể gây tăng kali máu, đặc biệt ở bệnh nhân có bệnh thận hoặc đang dùng
                potassium-sparing diuretics.
              </li>
              <li>
                Cần theo dõi kali máu, đặc biệt khi bắt đầu thuốc hoặc thay đổi chế độ ăn.
              </li>
              <li>
                Có thể cần hạn chế kali trong chế độ ăn ở một số bệnh nhân.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Thời điểm Ăn uống</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Hầu hết thuốc huyết áp có thể uống với hoặc không với thức ăn, nhưng nên uống đều đặn
                cùng một thời điểm mỗi ngày.
              </li>
              <li>
                Một số thuốc (ví dụ: một số beta-blockers) có thể uống với thức ăn để giảm tác dụng phụ.
              </li>
              <li>
                Luôn kiểm tra hướng dẫn sử dụng thuốc cụ thể.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Monitoring & Reassessment */}
      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi & Đánh giá lại
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Theo dõi đều đặn là quan trọng để đánh giá hiệu quả của can thiệp dinh dưỡng và điều chỉnh
            khi cần:
          </p>

          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader icon={CheckCircle} title="Huyết áp" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi huyết áp thường xuyên</li>
                  <li>Đánh giá đáp ứng với thay đổi dinh dưỡng</li>
                  <li>Mục tiêu: &lt; 130/80 mmHg (theo hầu hết hướng dẫn)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Cân nặng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi cân nặng hàng tuần (nếu đang giảm cân)</li>
                  <li>Mục tiêu: giảm 5-10% cân nặng nếu thừa cân</li>
                  <li>Đánh giá BMI</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Điện giải" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Kali máu (đặc biệt nếu dùng diuretics hoặc ACE inhibitors)</li>
                  <li>Magie (nếu dùng diuretics)</li>
                  <li>Natri (nếu có triệu chứng hoặc nghi ngờ mất cân bằng)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Tuân thủ" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Đánh giá tuân thủ chế độ ăn</li>
                  <li>Ước tính lượng natri ăn vào (nếu có thể)</li>
                  <li>Điều chỉnh dựa trên khả năng và sở thích</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Callout variant="info" title="Tần suất Đánh giá lại">
            <p className="text-body-sm">
              Đánh giá lại dinh dưỡng nên được thực hiện:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Sau 2-4 tuần khi bắt đầu thay đổi chế độ ăn</li>
              <li>Khi huyết áp không đạt mục tiêu</li>
              <li>Khi có thay đổi thuốc</li>
              <li>Khi có bệnh lý mới hoặc thay đổi tình trạng sức khỏe</li>
              <li>Định kỳ mỗi 3-6 tháng nếu ổn định</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 8. Common Clinical Pitfalls */}
      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Các Cạm bẫy Lâm sàng Phổ biến
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong>Hạn chế natri quá mức không cần thiết:</strong> Một số bác sĩ có thể khuyến nghị
              hạn chế natri quá mức (&lt; 1g/ngày) mà không cần thiết, có thể ảnh hưởng đến chất lượng
              cuộc sống và tuân thủ. Hầu hết bệnh nhân có thể đạt mục tiêu với &lt; 2.3g/ngày.
            </li>
            <li>
              <strong>Bỏ qua các yếu tố khác:</strong> Chỉ tập trung vào natri mà bỏ qua cân nặng, hoạt động
              thể chất, stress, và các yếu tố lối sống khác cũng quan trọng trong kiểm soát huyết áp.
            </li>
            <li>
              <strong>Không xem xét tương tác thuốc:</strong> Không đánh giá tương tác giữa chế độ ăn
              (đặc biệt là kali) và thuốc huyết áp, có thể dẫn đến tăng hoặc giảm kali máu nguy hiểm.
            </li>
            <li>
              <strong>Không điều chỉnh cho bệnh lý kèm:</strong> Áp dụng cùng một chế độ ăn cho tất cả
              bệnh nhân mà không xem xét bệnh thận, suy tim, hoặc các bệnh lý khác cần điều chỉnh đặc biệt.
            </li>
            <li>
              <strong>Không theo dõi đáp ứng:</strong> Khuyến nghị thay đổi chế độ ăn nhưng không theo dõi
              huyết áp, cân nặng, hoặc các chỉ số khác để đánh giá hiệu quả.
            </li>
            <li>
              <strong>Không giáo dục bệnh nhân đầy đủ:</strong> Chỉ nói "ăn ít muối" mà không giải thích
              nguồn natri ẩn, cách đọc nhãn, hoặc cách nấu ăn ít muối, dẫn đến tuân thủ kém.
            </li>
          </ul>
        </div>
      </section>

      {/* 9. References & Guidelines */}
      <section aria-labelledby="references-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="references-heading" className="heading-2 whitespace-nowrap">
            Tài liệu Tham khảo & Hướng dẫn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Các hướng dẫn chính thức về dinh dưỡng trong tăng huyết áp:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>
              <strong>American Heart Association (AHA):</strong> Hướng dẫn về chế độ ăn và lối sống
              để giảm huyết áp, bao gồm DASH diet.
            </li>
            <li>
              <strong>American College of Cardiology (ACC):</strong> Hướng dẫn về quản lý tăng huyết áp,
              bao gồm vai trò của dinh dưỡng.
            </li>
            <li>
              <strong>National Heart, Lung, and Blood Institute (NHLBI):</strong> Thông tin chi tiết về
              DASH diet và nghiên cứu DASH.
            </li>
            <li>
              <strong>World Health Organization (WHO):</strong> Khuyến nghị về giảm natri trong chế độ ăn.
            </li>
          </ul>
          <Callout variant="info" title="Khi nào Cần Tham khảo Chuyên gia Dinh dưỡng">
            <p className="text-body-sm">
              Nên tham khảo chuyên gia dinh dưỡng đã đăng ký khi:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Bệnh nhân có nhiều bệnh lý kèm cần điều chỉnh phức tạp</li>
              <li>Tuân thủ kém dù đã giáo dục cơ bản</li>
              <li>Cần kế hoạch bữa ăn chi tiết</li>
              <li>Có vấn đề dinh dưỡng phức tạp (ví dụ: bệnh thận + tăng huyết áp)</li>
              <li>Bệnh nhân yêu cầu hoặc có nguồn lực để tham khảo</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 10. Safety Disclaimer */}
      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">
          Nhắc nhở An toàn
        </h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Nó không cung cấp tư vấn y tế,
            chẩn đoán, hoặc điều trị, không tạo mối quan hệ bác sĩ–bệnh nhân, và không được sử dụng để
            ra quyết định lâm sàng hoặc kê đơn chế độ ăn, thức ăn, hoặc thuốc.
          </p>
          <p className="text-body-sm mt-2">
            Tất cả các khuyến nghị dinh dưỡng cần được điều chỉnh dựa trên đánh giá lâm sàng toàn diện,
            bệnh lý kèm, thuốc đang dùng, và sở thích cá nhân của từng bệnh nhân. Khi còn nghi ngờ,
            hãy tham khảo ý kiến của chuyên gia dinh dưỡng đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </Callout>
      </section>

      {/* Related Tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">
          Công cụ Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein, đặc biệt hữu ích nếu bệnh nhân cần giảm cân.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần Cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng trong quản lý cân nặng cho bệnh nhân tăng huyết áp.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

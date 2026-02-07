import Link from "next/link";
import { Heart, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function HeartFailureNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Suy tim" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Heart className="w-8 h-8 text-red-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Suy tim: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Suy tim là một hội chứng lâm sàng phức tạp ảnh hưởng đến khả năng bơm máu của tim. Dinh dưỡng
          đóng vai trò quan trọng trong quản lý suy tim, đặc biệt là quản lý natri, dịch, và cân nặng.
          Trang này cung cấp hướng dẫn giáo dục về các nguyên tắc dinh dưỡng dựa trên bằng chứng cho
          bệnh nhân suy tim.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp các bác sĩ, điều dưỡng,
            và sinh viên y khoa hiểu các nguyên tắc dinh dưỡng trong quản lý suy tim. Nó không thay thế
            phán đoán lâm sàng hoặc tư vấn từ chuyên gia dinh dưỡng đã đăng ký.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng trong Suy tim?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Dinh dưỡng trong suy tim tập trung vào việc giảm gánh cho tim và quản lý các triệu chứng:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Quản lý dịch:</strong> Hạn chế natri và dịch giúp giảm quá tải dịch, một trong những
              nguyên nhân chính gây khó thở và phù ở bệnh nhân suy tim.
            </li>
            <li>
              <strong>Giảm gánh tim:</strong> Quá tải dịch làm tăng gánh cho tim, khiến tim phải làm việc
              nhiều hơn. Giảm dịch giúp giảm gánh này.
            </li>
            <li>
              <strong>Quản lý cân nặng:</strong> Thừa cân làm tăng gánh cho tim, trong khi suy dinh dưỡng
              (cardiac cachexia) có thể làm suy yếu cơ tim. Cần cân bằng giữa hai cực này.
            </li>
            <li>
              <strong>Phòng ngừa biến chứng:</strong> Quản lý dinh dưỡng tốt giúp giảm nguy cơ nhập viện
              và cải thiện chất lượng cuộc sống.
            </li>
          </ul>
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

        {/* Sodium */}
        <Card>
          <CardHeader icon={AlertCircle} title="Natri (Muối)" />
          <CardContent>
            <p className="text-body mb-4">
              Hạn chế natri là nền tảng của quản lý dinh dưỡng trong suy tim. Natri giữ nước trong cơ thể,
              làm tăng thể tích máu và gánh cho tim.
            </p>
            <p className="text-body-sm mb-3">
              <strong>Khuyến nghị:</strong>
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-sm mb-4">
              <li>
                <strong>Suy tim nhẹ-trung bình (NYHA I-II):</strong> Hạn chế natri &lt; 2-3g/ngày
                (tương đương &lt; 5-7.5g muối/ngày)
              </li>
              <li>
                <strong>Suy tim nặng (NYHA III-IV):</strong> Hạn chế natri &lt; 2g/ngày
                (tương đương &lt; 5g muối/ngày), có thể cần &lt; 1.5g/ngày trong một số trường hợp
              </li>
            </ul>
            <p className="text-body-sm mb-3">
              <strong>Nguồn natri ẩn:</strong> Tương tự như trong tăng huyết áp, phần lớn natri đến từ
              thực phẩm chế biến sẵn, đồ hộp, và thức ăn nhanh.
            </p>
            <p className="text-body-sm">
              <strong>Lưu ý:</strong> Hạn chế natri quá mức (&lt; 1g/ngày) có thể không cần thiết và
              ảnh hưởng đến chất lượng cuộc sống. Mục tiêu là giảm đủ để quản lý triệu chứng mà vẫn
              duy trì tuân thủ.
            </p>
          </CardContent>
        </Card>

        {/* Fluid */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Dịch (Nước)</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Khuyến nghị:</strong> Hạn chế dịch thường được khuyến nghị ở bệnh nhân suy tim,
              đặc biệt khi có triệu chứng quá tải dịch hoặc suy tim nặng.
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>
                <strong>Suy tim nhẹ-trung bình:</strong> Thường 1.5-2L/ngày hoặc không cần hạn chế nghiêm ngặt
              </li>
              <li>
                <strong>Suy tim nặng:</strong> 1.5L/ngày hoặc ít hơn, tùy thuộc vào triệu chứng và đáp ứng
              </li>
              <li>
                <strong>Lưu ý:</strong> Bao gồm tất cả dịch (nước, nước trái cây, súp, cà phê, trà, v.v.)
              </li>
            </ul>
            <p>
              <strong>Theo dõi cân nặng:</strong> Cân nặng hàng ngày là một công cụ quan trọng để theo dõi
              quá tải dịch. Tăng cân nhanh (1-2 kg trong 1-2 ngày) có thể báo hiệu quá tải dịch.
            </p>
            <Callout variant="warning" title="Lưu ý quan trọng">
              <p className="text-body-sm">
                Hạn chế dịch quá mức có thể dẫn đến mất nước và suy thận, đặc biệt ở người lớn tuổi hoặc
                trong thời tiết nóng. Luôn đánh giá dấu hiệu quá tải dịch (phù, khó thở) và điều chỉnh
                dựa trên đáp ứng lâm sàng.
              </p>
            </Callout>
          </div>
        </div>

        {/* Energy & Weight */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Năng lượng & Cân nặng</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Thừa cân:</strong> Thừa cân làm tăng gánh cho tim. Giảm cân có thể giúp cải thiện
              triệu chứng và chức năng tim, nhưng cần thận trọng và từ từ.
            </p>
            <p>
              <strong>Suy dinh dưỡng (Cardiac Cachexia):</strong> Một số bệnh nhân suy tim, đặc biệt suy tim
              nặng, có thể bị suy dinh dưỡng và mất cơ. Điều này có thể làm suy yếu cơ tim và làm trầm trọng
              suy tim. Cần tăng năng lượng và protein, nhưng phải cân bằng với hạn chế dịch.
            </p>
            <p>
              <strong>Mục tiêu:</strong> Duy trì cân nặng ổn định, tránh cả thừa cân và suy dinh dưỡng.
            </p>
          </div>
        </div>

        {/* Protein */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Protein</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Nhu cầu:</strong> Đủ protein để duy trì khối nạc, đặc biệt quan trọng ở bệnh nhân có
              nguy cơ suy dinh dưỡng. Khuyến nghị: 1.0-1.2 g/kg cân nặng/ngày.
            </p>
            <p>
              <strong>Lưu ý:</strong> Tránh quá nhiều protein một lúc vì có thể tăng gánh thận. Phân bố
              đều trong ngày.
            </p>
            <Callout variant="warning" title="Lưu ý quan trọng">
              <p className="text-body-sm">
                Ở những người có <strong>suy tim kèm suy thận</strong>, có thể cần hạn chế protein
                (0.8 g/kg). Luôn đánh giá chức năng thận.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* 4. Adjustments by Disease Status */}
      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Dinh dưỡng Theo Mức độ Suy tim
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">NYHA Class I-II (Suy tim nhẹ-trung bình)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Natri: &lt; 2-3g/ngày</li>
              <li>Dịch: 1.5-2L/ngày hoặc không cần hạn chế nghiêm ngặt</li>
              <li>Quản lý cân nặng: Giảm cân nếu thừa cân, duy trì nếu bình thường</li>
              <li>Protein: 1.0-1.2 g/kg</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-red-200 bg-red-50/50 p-5">
            <h3 className="heading-4">NYHA Class III-IV (Suy tim nặng)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Natri: &lt; 2g/ngày, có thể cần &lt; 1.5g/ngày</li>
              <li>Dịch: 1.5L/ngày hoặc ít hơn, tùy thuộc vào triệu chứng</li>
              <li>Quản lý cân nặng: Cẩn thận với suy dinh dưỡng, có thể cần tăng năng lượng và protein</li>
              <li>Protein: 1.2 g/kg hoặc cao hơn nếu có suy dinh dưỡng (cẩn thận với dịch)</li>
              <li>Theo dõi chặt chẽ cân nặng hàng ngày</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">Suy tim + Suy thận</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>Điều chỉnh kép: Hạn chế natri, dịch, và có thể protein</li>
              <li>Điều chỉnh potassium và phosphorus tùy theo chức năng thận</li>
              <li>Cần đánh giá và quản lý cẩn thận bởi nhóm đa ngành</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 5. Managing Complications */}
      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={AlertTriangle} title="Quá tải Dịch" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Dấu hiệu:</strong> Phù (chân, tay, mặt), tăng cân nhanh, khó thở, tăng khi nằm,
              ho khan, mệt mỏi.
            </p>
            <p className="text-body-sm mb-3">
              <strong>Xử trí:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
              <li>Tăng hạn chế natri và dịch</li>
              <li>Tăng liều lợi tiểu (theo chỉ định bác sĩ)</li>
              <li>Theo dõi cân nặng hàng ngày</li>
              <li>Đánh giá dấu hiệu sinh tồn</li>
            </ul>
            <p className="text-body-sm">
              <strong>Phòng ngừa:</strong> Tuân thủ hạn chế natri và dịch, theo dõi cân nặng hàng ngày,
              nhận biết sớm các dấu hiệu quá tải dịch.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Suy dinh dưỡng (Cardiac Cachexia)" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Vấn đề:</strong> Một số bệnh nhân suy tim nặng có thể bị suy dinh dưỡng và mất cơ,
              làm suy yếu cơ tim và làm trầm trọng suy tim.
            </p>
            <p className="text-body-sm mb-3">
              <strong>Giải pháp:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
              <li>Tăng năng lượng và protein (cẩn thận với dịch)</li>
              <li>Sử dụng thực phẩm giàu năng lượng nhưng ít dịch</li>
              <li>Bổ sung dinh dưỡng nếu cần (dưới sự giám sát)</li>
              <li>Theo dõi albumin, prealbumin</li>
            </ul>
            <p className="text-body-sm">
              <strong>Thách thức:</strong> Cần tăng năng lượng và protein nhưng vẫn hạn chế dịch, đòi hỏi
              kế hoạch dinh dưỡng cẩn thận.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="Rối loạn Điện giải" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Hạ kali:</strong> Do lợi tiểu, có thể cần bổ sung kali hoặc tăng kali trong chế độ ăn
              (nếu không có bệnh thận).
            </p>
            <p className="text-body-sm mb-3">
              <strong>Tăng kali:</strong> Có thể xảy ra với ACE inhibitors/ARBs, đặc biệt nếu có bệnh thận.
              Có thể cần hạn chế kali.
            </p>
            <p className="text-body-sm mb-3">
              <strong>Hạ magie:</strong> Cũng có thể xảy ra với lợi tiểu, có thể cần bổ sung.
            </p>
            <p className="text-body-sm">
              <strong>Theo dõi:</strong> Điện giải nên được theo dõi thường xuyên, đặc biệt khi thay đổi
              thuốc hoặc có triệu chứng.
            </p>
          </CardContent>
        </Card>
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
          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Lợi tiểu (Diuretics)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Thiazide và loop diuretics:</strong> Gây mất kali và magie. Có thể cần bổ sung
                hoặc tăng kali trong chế độ ăn (nếu không có bệnh thận).
              </li>
              <li>
                <strong>Potassium-sparing diuretics:</strong> Giữ kali, có thể dẫn đến tăng kali máu,
                đặc biệt nếu kết hợp với ACE inhibitors/ARBs hoặc chế độ ăn giàu kali.
              </li>
              <li>
                <strong>Lưu ý:</strong> Theo dõi kali máu thường xuyên, điều chỉnh dựa trên kết quả.
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
                Có thể cần hạn chế kali trong chế độ ăn ở một số bệnh nhân.
              </li>
              <li>
                Theo dõi kali máu, đặc biệt khi bắt đầu thuốc hoặc thay đổi chế độ ăn.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Digoxin</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Hạ kali và magie có thể làm tăng nguy cơ độc tính digoxin.
              </li>
              <li>
                Cần đảm bảo đủ kali và magie, đặc biệt nếu đang dùng lợi tiểu.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Warfarin</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Vitamin K trong rau lá xanh có thể ảnh hưởng đến tác dụng của warfarin.
              </li>
              <li>
                Không nên tránh hoàn toàn rau lá xanh, nhưng nên ăn đều đặn với lượng ổn định.
              </li>
              <li>
                Theo dõi INR thường xuyên.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Monitoring */}
      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi & Đánh giá lại
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="grid gap-4 sm:grid-cols-2">
            <Card>
              <CardHeader icon={CheckCircle} title="Cân nặng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi hàng ngày, cùng một thời điểm (sáng, sau khi đi vệ sinh, trước ăn)</li>
                  <li>Tăng &gt; 1-2 kg trong 1-2 ngày có thể báo hiệu quá tải dịch</li>
                  <li>Ghi chép để theo dõi xu hướng</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Triệu chứng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Khó thở, đặc biệt khi nằm</li>
                  <li>Phù (chân, tay, mặt)</li>
                  <li>Ho khan</li>
                  <li>Mệt mỏi</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Điện giải" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Kali (đặc biệt nếu dùng lợi tiểu hoặc ACE inhibitors)</li>
                  <li>Magie (nếu dùng lợi tiểu)</li>
                  <li>Natri (nếu có triệu chứng hoặc nghi ngờ mất cân bằng)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Chức năng Thận" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Creatinine, eGFR</li>
                  <li>Đặc biệt quan trọng nếu có suy tim + suy thận</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Callout variant="info" title="Tần suất Đánh giá lại">
            <p className="text-body-sm">
              Đánh giá lại dinh dưỡng nên được thực hiện:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Sau 1-2 tuần khi bắt đầu hoặc thay đổi hạn chế natri/dịch</li>
              <li>Khi có triệu chứng quá tải dịch hoặc thay đổi cân nặng</li>
              <li>Khi có thay đổi thuốc</li>
              <li>Khi có bệnh lý mới hoặc thay đổi tình trạng sức khỏe</li>
              <li>Định kỳ mỗi 1-3 tháng nếu ổn định</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 8. Pitfalls */}
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
              <strong>Hạn chế dịch quá mức:</strong> Hạn chế dịch quá mức có thể dẫn đến mất nước và
              suy thận, đặc biệt ở người lớn tuổi hoặc trong thời tiết nóng. Cần cân bằng giữa quản lý
              quá tải dịch và tránh mất nước.
            </li>
            <li>
              <strong>Không theo dõi cân nặng thường xuyên:</strong> Cân nặng hàng ngày là công cụ quan trọng
              để phát hiện sớm quá tải dịch. Không theo dõi có thể bỏ sót các dấu hiệu sớm.
            </li>
            <li>
              <strong>Bỏ qua tương tác thuốc:</strong> Không đánh giá tương tác giữa chế độ ăn (đặc biệt là
              kali) và thuốc suy tim, có thể dẫn đến tăng hoặc giảm kali máu nguy hiểm.
            </li>
            <li>
              <strong>Không điều chỉnh cho bệnh lý kèm:</strong> Áp dụng cùng một chế độ ăn cho tất cả
              bệnh nhân mà không xem xét suy thận, đái tháo đường, hoặc các bệnh lý khác cần điều chỉnh đặc biệt.
            </li>
            <li>
              <strong>Bỏ qua suy dinh dưỡng:</strong> Chỉ tập trung vào hạn chế natri/dịch mà bỏ qua
              suy dinh dưỡng ở bệnh nhân suy tim nặng, có thể làm trầm trọng suy tim.
            </li>
            <li>
              <strong>Không giáo dục bệnh nhân đầy đủ:</strong> Chỉ nói "ăn ít muối" mà không giải thích
              nguồn natri ẩn, cách đọc nhãn, hoặc tầm quan trọng của theo dõi cân nặng, dẫn đến tuân thủ kém.
            </li>
          </ul>
        </div>
      </section>

      {/* 9. References */}
      <section aria-labelledby="references-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="references-heading" className="heading-2 whitespace-nowrap">
            Tài liệu Tham khảo & Hướng dẫn
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>
              <strong>American Heart Association (AHA):</strong> Hướng dẫn về quản lý suy tim, bao gồm
              vai trò của dinh dưỡng.
            </li>
            <li>
              <strong>European Society of Cardiology (ESC):</strong> Hướng dẫn về chẩn đoán và điều trị
              suy tim, bao gồm quản lý dinh dưỡng.
            </li>
            <li>
              <strong>Heart Failure Society of America (HFSA):</strong> Hướng dẫn về quản lý suy tim.
            </li>
          </ul>
          <Callout variant="info" title="Khi nào Cần Tham khảo Chuyên gia Dinh dưỡng">
            <p className="text-body-sm">
              Nên tham khảo chuyên gia dinh dưỡng đã đăng ký khi:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Bệnh nhân có suy tim nặng (NYHA III-IV) cần quản lý phức tạp</li>
              <li>Có suy dinh dưỡng hoặc nguy cơ suy dinh dưỡng</li>
              <li>Có nhiều bệnh lý kèm (suy thận, đái tháo đường) cần điều chỉnh kép</li>
              <li>Tuân thủ kém dù đã giáo dục cơ bản</li>
              <li>Cần kế hoạch bữa ăn chi tiết</li>
            </ul>
          </Callout>
        </div>
      </section>

      {/* 10. Safety */}
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
            mức độ suy tim, thuốc đang dùng, bệnh lý kèm, và sở thích cá nhân của từng bệnh nhân. Quản lý
            suy tim yêu cầu sự hợp tác chặt chẽ giữa bệnh nhân, bác sĩ, và chuyên gia dinh dưỡng. Khi còn
            nghi ngờ, hãy tham khảo ý kiến của chuyên gia dinh dưỡng đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </Callout>
      </section>

      {/* Related Tools */}
      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">
          Công cụ Liên quan
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/fluid-requirements">
            <CardHeader icon={CheckCircle} title="Máy tính Nhu cầu Dịch" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu dịch với điều chỉnh cho suy tim, giúp xác định mức hạn chế dịch phù hợp.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">
                Tính toán nhu cầu năng lượng và protein, đặc biệt hữu ích nếu bệnh nhân cần quản lý cân nặng
                hoặc có suy dinh dưỡng.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function DiabetesNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Đái tháo đường" },
        ]}
      />

      {/* 1. Title & Introduction */}
      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Đái tháo đường: Hướng dẫn Giáo dục
          </h1>
        </div>
        <p className="text-body-lg">
          Đái tháo đường là một bệnh mạn tính phổ biến ảnh hưởng đến cách cơ thể sử dụng glucose (đường).
          Dinh dưỡng đóng vai trò trung tâm trong quản lý đái tháo đường, giúp kiểm soát đường huyết,
          phòng ngừa biến chứng, và duy trì sức khỏe tổng thể. Trang này cung cấp hướng dẫn giáo dục về
          các nguyên tắc dinh dưỡng dựa trên bằng chứng cho bệnh nhân đái tháo đường.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp các bác sĩ, điều dưỡng,
            và sinh viên y khoa hiểu các nguyên tắc dinh dưỡng trong quản lý đái tháo đường. Nó không
            thay thế phán đoán lâm sàng hoặc tư vấn từ chuyên gia dinh dưỡng đã đăng ký.
          </p>
        </Callout>
      </header>

      {/* 2. Why Nutrition Matters in Diabetes */}
      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng trong Đái tháo đường?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Dinh dưỡng là nền tảng của quản lý đái tháo đường. Không giống như nhiều bệnh mạn tính khác,
            đái tháo đường yêu cầu sự chú ý liên tục đến lượng và loại thực phẩm tiêu thụ vì chúng ảnh hưởng
            trực tiếp đến đường huyết.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Kiểm soát đường huyết:</strong> Carbohydrate trong thức ăn được chuyển hóa thành glucose,
              ảnh hưởng trực tiếp đến đường huyết. Hiểu cách quản lý carbohydrate là chìa khóa để kiểm soát
              đường huyết.
            </li>
            <li>
              <strong>Phòng ngừa biến chứng:</strong> Quản lý đường huyết tốt giúp phòng ngừa các biến chứng
              mạn tính như bệnh thận, bệnh mắt, bệnh thần kinh, và bệnh tim mạch.
            </li>
            <li>
              <strong>Quản lý cân nặng:</strong> Nhiều người đái tháo đường type 2 có thừa cân hoặc béo phì.
              Giảm cân có thể cải thiện kiểm soát đường huyết và giảm nhu cầu thuốc.
            </li>
            <li>
              <strong>Sức khỏe tim mạch:</strong> Người đái tháo đường có nguy cơ cao bị bệnh tim mạch.
              Chế độ ăn lành mạnh giúp quản lý cholesterol, huyết áp, và các yếu tố nguy cơ tim mạch khác.
            </li>
          </ul>
          <p>
            Hiểu các nguyên tắc dinh dưỡng này giúp các bác sĩ lâm sàng tư vấn bệnh nhân một cách hiệu quả
            và hỗ trợ quản lý đái tháo đường thông qua thay đổi lối sống và điều chỉnh chế độ ăn.
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

        {/* Carbohydrate */}
        <Card>
          <CardHeader icon={CheckCircle} title="Carbohydrate (Tinh bột/Đường)" />
          <CardContent>
            <p className="text-body mb-4">
              Carbohydrate là chất dinh dưỡng có tác động lớn nhất đến đường huyết. Quản lý carbohydrate
              là nền tảng của dinh dưỡng trong đái tháo đường.
            </p>
            <h3 className="heading-4 mb-3">Carbohydrate Counting</h3>
            <p className="text-body-sm mb-3">
              Đếm carbohydrate là một phương pháp phổ biến để quản lý đường huyết. Một "serving" carbohydrate
              thường tương đương với 15g carbohydrate và làm tăng đường huyết khoảng 30-50 mg/dL (tùy thuộc
              vào độ nhạy cảm insulin).
            </p>
            <ul className="list-disc space-y-2 pl-6 text-body-sm mb-4">
              <li>
                <strong>Mục tiêu:</strong> Thường 45-60g carbohydrate mỗi bữa ăn chính, 15-30g cho bữa phụ
                (điều chỉnh dựa trên nhu cầu cá nhân, hoạt động, và thuốc).
              </li>
              <li>
                <strong>Phân bố:</strong> Phân bố carbohydrate đều trong ngày giúp tránh tăng đường huyết
                đột ngột sau bữa ăn.
              </li>
              <li>
                <strong>Nguồn tốt:</strong> Ngũ cốc nguyên hạt, trái cây, rau quả, đậu, sản phẩm sữa ít béo.
              </li>
            </ul>

            <h3 className="heading-4 mb-3">Glycemic Index (GI) và Glycemic Load (GL)</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Glycemic Index:</strong> Đo tốc độ carbohydrate làm tăng đường huyết. Thực phẩm có
                GI thấp (&lt; 55) làm tăng đường huyết chậm hơn so với thực phẩm có GI cao (&gt; 70).
              </li>
              <li>
                <strong>Glycemic Load:</strong> Tính đến cả GI và lượng carbohydrate. GL = (GI × lượng carbohydrate) / 100.
              </li>
              <li>
                <strong>Ứng dụng:</strong> Ưu tiên thực phẩm có GI thấp đến trung bình có thể giúp kiểm soát
                đường huyết tốt hơn, nhưng tổng lượng carbohydrate vẫn quan trọng hơn.
              </li>
            </ul>

            <h3 className="heading-4 mb-3 mt-4">Chất xơ</h3>
            <p className="text-body-sm">
              Chất xơ, đặc biệt là chất xơ hòa tan, có thể làm chậm hấp thu carbohydrate và giúp kiểm soát
              đường huyết. Khuyến nghị: 25-30g chất xơ mỗi ngày từ trái cây, rau quả, ngũ cốc nguyên hạt, và đậu.
            </p>
          </CardContent>
        </Card>

        {/* Protein */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Protein</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Nhu cầu:</strong> Người đái tháo đường thường không cần nhiều protein hơn người không
              bị đái tháo đường. Khuyến nghị: 0.8-1.0 g/kg cân nặng/ngày (tương tự người khỏe mạnh).
            </p>
            <p>
              <strong>Lưu ý:</strong> Một số nghiên cứu cho thấy protein có thể làm tăng đường huyết nhẹ,
              nhưng tác động này thường nhỏ so với carbohydrate. Protein không nên được sử dụng để "bù" cho
              carbohydrate thấp.
            </p>
            <p>
              <strong>Nguồn tốt:</strong> Thịt nạc, cá, gia cầm, đậu, sản phẩm sữa ít béo, trứng. Ưu tiên
              protein thực vật và cá có thể tốt cho sức khỏe tim mạch.
            </p>
            <Callout variant="warning" title="Lưu ý quan trọng">
              <p className="text-body-sm">
                Ở những người có <strong>bệnh thận mạn</strong> (một biến chứng phổ biến của đái tháo đường),
                có thể cần hạn chế protein. Luôn đánh giá chức năng thận trước khi khuyến nghị protein.
              </p>
            </Callout>
          </div>
        </div>

        {/* Fat */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Chất béo</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Vai trò:</strong> Chất béo không ảnh hưởng trực tiếp đến đường huyết, nhưng quan trọng
              cho sức khỏe tim mạch. Người đái tháo đường có nguy cơ cao bị bệnh tim mạch, vì vậy loại chất béo
              rất quan trọng.
            </p>
            <p>
              <strong>Chất béo tốt (nên ăn):</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Chất béo không bão hòa đơn: dầu ô liu, bơ, các loại hạt</li>
              <li>Chất béo không bão hòa đa: cá béo (cá hồi, cá thu), hạt lanh, quả óc chó</li>
              <li>Omega-3: cá béo, hạt chia, quả óc chó</li>
            </ul>
            <p>
              <strong>Chất béo cần hạn chế:</strong>
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Chất béo bão hòa: thịt đỏ, bơ, phô mai, thực phẩm chế biến sẵn</li>
              <li>Chất béo trans: thực phẩm chế biến sẵn, đồ chiên, bánh ngọt</li>
            </ul>
            <p>
              <strong>Khuyến nghị:</strong> Hạn chế chất béo bão hòa &lt; 7% tổng năng lượng, tránh chất béo trans.
            </p>
          </div>
        </div>

        {/* Energy & Weight Management */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Năng lượng & Quản lý Cân nặng</h3>
          <div className="space-y-3 text-body">
            <p>
              <strong>Đái tháo đường Type 2:</strong> Nhiều người có thừa cân hoặc béo phì. Giảm cân 5-10%
              có thể cải thiện đáng kể kiểm soát đường huyết và giảm nhu cầu thuốc.
            </p>
            <p>
              <strong>Calorie deficit:</strong> Để giảm cân, cần tạo calorie deficit 500-750 kcal/ngày,
              thường dẫn đến giảm 0.5-1 kg/tuần. Tuy nhiên, cần đảm bảo đủ dinh dưỡng và không giảm quá nhanh.
            </p>
            <p>
              <strong>Đái tháo đường Type 1:</strong> Thường không cần giảm cân. Mục tiêu là duy trì cân nặng
              ổn định và kiểm soát đường huyết tốt.
            </p>
            <p>
              <strong>Lưu ý:</strong> Giảm cân quá nhanh hoặc quá nhiều có thể nguy hiểm, đặc biệt ở người lớn tuổi
              hoặc có bệnh lý kèm. Luôn theo dõi và điều chỉnh dựa trên đáp ứng.
            </p>
          </div>
        </div>
      </section>

      {/* 4. Nutrition Adjustments by Disease Status */}
      <section aria-labelledby="adjustments-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="adjustments-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Dinh dưỡng Theo Loại Thuốc & Hoạt động
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Điều chỉnh dinh dưỡng cho bệnh nhân đái tháo đường cần được cá nhân hóa dựa trên loại thuốc,
            hoạt động thể chất, và các yếu tố khác:
          </p>

          <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
            <h3 className="heading-4">Theo Loại Thuốc</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Insulin:</strong> Timing với bữa ăn là quan trọng. Insulin tác dụng nhanh được
                tiêm trước bữa ăn dựa trên lượng carbohydrate. Insulin tác dụng dài cung cấp nền tảng và
                không phụ thuộc vào bữa ăn.
              </li>
              <li>
                <strong>Metformin:</strong> Uống với bữa ăn để giảm tác dụng phụ đường tiêu hóa. Không
                ảnh hưởng trực tiếp đến timing carbohydrate.
              </li>
              <li>
                <strong>Sulfonylureas (ví dụ: glipizide, glyburide):</strong> Kích thích tiết insulin,
                có thể gây hạ đường huyết nếu bỏ bữa ăn hoặc ăn ít carbohydrate. Cần ăn đều đặn.
              </li>
              <li>
                <strong>DPP-4 inhibitors, GLP-1 agonists:</strong> Ít nguy cơ hạ đường huyết, linh hoạt
                hơn về timing bữa ăn.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
            <h3 className="heading-4">Theo Hoạt động Thể chất</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Trước tập thể dục:</strong> Nếu đường huyết &lt; 100 mg/dL, có thể cần ăn 15-30g
                carbohydrate trước khi tập. Nếu đường huyết 100-250 mg/dL, có thể tập mà không cần ăn thêm.
              </li>
              <li>
                <strong>Sau tập thể dục:</strong> Tập thể dục có thể làm giảm đường huyết trong và sau
                khi tập. Có thể cần ăn thêm carbohydrate hoặc giảm insulin sau tập.
              </li>
              <li>
                <strong>Tập thể dục kéo dài:</strong> Có thể cần ăn carbohydrate trong khi tập (15-30g
                mỗi 30-60 phút) để tránh hạ đường huyết.
              </li>
              <li>
                <strong>Lưu ý:</strong> Điều chỉnh dựa trên đáp ứng cá nhân và theo dõi đường huyết trước,
                trong, và sau tập.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-amber-200 bg-amber-50/50 p-5">
            <h3 className="heading-4">Theo Bệnh lý Kèm</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Bệnh thận (Diabetic Nephropathy):</strong> Có thể cần hạn chế protein (0.8 g/kg)
                và điều chỉnh natri, potassium, phosphorus tùy theo giai đoạn bệnh thận.
              </li>
              <li>
                <strong>Tăng huyết áp:</strong> Kết hợp DASH diet với quản lý carbohydrate. Hạn chế natri.
              </li>
              <li>
                <strong>Rối loạn lipid máu:</strong> Tập trung vào chất béo lành mạnh, hạn chế chất béo
                bão hòa và trans.
              </li>
              <li>
                <strong>Bệnh tim mạch:</strong> Chế độ ăn Địa Trung Hải hoặc DASH diet có thể phù hợp.
              </li>
            </ul>
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
            Trong quá trình quản lý đái tháo đường, có thể gặp một số vấn đề dinh dưỡng cần được giải quyết:
          </p>

          <Card>
            <CardHeader icon={AlertTriangle} title="Hạ đường huyết (Hypoglycemia)" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Vấn đề:</strong> Đường huyết &lt; 70 mg/dL, có thể xảy ra do quá nhiều insulin,
                quá ít carbohydrate, hoặc tập thể dục quá mức.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Triệu chứng:</strong> Run, đổ mồ hôi, lo lắng, đói, yếu, lú lẫn, nhức đầu.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Xử trí ngay:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Ăn 15-20g carbohydrate tác dụng nhanh (nước trái cây, kẹo, glucose tablets)</li>
                <li>Kiểm tra đường huyết sau 15 phút</li>
                <li>Nếu vẫn thấp, lặp lại</li>
                <li>Sau khi đường huyết ổn định, ăn bữa ăn hoặc bữa phụ để tránh hạ đường huyết lại</li>
              </ul>
              <p className="text-body-sm">
                <strong>Phòng ngừa:</strong> Ăn đều đặn, không bỏ bữa, điều chỉnh insulin/thuốc dựa trên
                lượng ăn và hoạt động, theo dõi đường huyết thường xuyên.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={AlertCircle} title="Tăng đường huyết (Hyperglycemia)" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Vấn đề:</strong> Đường huyết cao kéo dài (&gt; 180-200 mg/dL) có thể dẫn đến biến chứng.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Nguyên nhân dinh dưỡng:</strong> Quá nhiều carbohydrate, không tuân thủ chế độ ăn,
                bỏ qua thuốc/insulin.
              </p>
              <p className="text-body-sm mb-3">
                <strong>Xử trí:</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Điều chỉnh lượng carbohydrate</li>
                <li>Đảm bảo tuân thủ thuốc/insulin</li>
                <li>Uống đủ nước (nếu không có hạn chế dịch)</li>
                <li>Theo dõi ketone nếu đường huyết rất cao (type 1)</li>
              </ul>
              <p className="text-body-sm">
                <strong>Ketoacidosis (DKA) - Cấp cứu:</strong> Ở type 1, đường huyết rất cao kèm ketone
                cao có thể dẫn đến DKA, cần điều trị cấp cứu ngay.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader icon={Info} title="Biến chứng Mạn tính & Dinh dưỡng" />
            <CardContent>
              <p className="text-body-sm mb-3">
                <strong>Bệnh thận (Diabetic Nephropathy):</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Có thể cần hạn chế protein (0.8 g/kg hoặc thấp hơn tùy giai đoạn)</li>
                <li>Điều chỉnh natri, potassium, phosphorus</li>
                <li>Quản lý dịch nếu có phù</li>
              </ul>
              <p className="text-body-sm mb-3">
                <strong>Bệnh thần kinh (Diabetic Neuropathy):</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm mb-3">
                <li>Chế độ ăn đặc biệt có thể không cần thiết, nhưng kiểm soát đường huyết tốt là quan trọng</li>
                <li>Một số người có thể cần điều chỉnh do ảnh hưởng đến tiêu hóa (gastroparesis)</li>
              </ul>
              <p className="text-body-sm mb-3">
                <strong>Bệnh mắt (Diabetic Retinopathy):</strong>
              </p>
              <ul className="list-disc space-y-1 pl-6 text-body-sm">
                <li>Chất chống oxy hóa (vitamin C, E, lutein) có thể có lợi, nhưng bằng chứng không rõ ràng</li>
                <li>Kiểm soát đường huyết và huyết áp là quan trọng nhất</li>
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
            Một số thuốc điều trị đái tháo đường và thuốc khác có tương tác với dinh dưỡng cần được lưu ý:
          </p>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Insulin</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                <strong>Timing với bữa ăn:</strong> Insulin tác dụng nhanh (lispro, aspart, glulisine) được
                tiêm ngay trước hoặc sau bữa ăn, dựa trên lượng carbohydrate.
              </li>
              <li>
                <strong>Carbohydrate-to-insulin ratio:</strong> Tỷ lệ này khác nhau giữa các bệnh nhân
                (ví dụ: 1 đơn vị insulin cho 10-15g carbohydrate). Được điều chỉnh dựa trên đáp ứng.
              </li>
              <li>
                <strong>Correction factor:</strong> Lượng insulin cần để giảm đường huyết xuống mục tiêu
                (ví dụ: 1 đơn vị giảm 30-50 mg/dL).
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Metformin</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Uống với bữa ăn để giảm tác dụng phụ đường tiêu hóa (buồn nôn, tiêu chảy).
              </li>
              <li>
                Có thể gây thiếu vitamin B12 nếu dùng lâu dài. Có thể cần bổ sung hoặc theo dõi B12.
              </li>
              <li>
                Không ảnh hưởng trực tiếp đến timing carbohydrate.
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Sulfonylureas</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Kích thích tiết insulin, có thể gây hạ đường huyết nếu bỏ bữa ăn hoặc ăn ít carbohydrate.
              </li>
              <li>
                Cần ăn đều đặn, không bỏ bữa.
              </li>
              <li>
                Uống với bữa ăn hoặc trước bữa ăn (tùy thuốc cụ thể).
              </li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Alcohol</h3>
            <ul className="list-disc space-y-2 pl-6 text-body-sm">
              <li>
                Có thể gây hạ đường huyết, đặc biệt nếu uống khi đói hoặc kết hợp với insulin/sulfonylureas.
              </li>
              <li>
                Nên uống với thức ăn và uống có chừng mực (1-2 ly/ngày cho phụ nữ, 2-3 ly/ngày cho nam).
              </li>
              <li>
                Theo dõi đường huyết khi uống rượu.
              </li>
              <li>
                Một số đồ uống có cồn có carbohydrate (bia, rượu ngọt), cần tính vào tổng carbohydrate.
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
              <CardHeader icon={CheckCircle} title="HbA1c" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Đo mức độ kiểm soát đường huyết trung bình 2-3 tháng</li>
                  <li>Mục tiêu: &lt; 7% (có thể điều chỉnh dựa trên tuổi, bệnh lý kèm)</li>
                  <li>Đo mỗi 3-6 tháng</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Đường huyết (Self-monitoring)" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi trước và sau bữa ăn</li>
                  <li>Mục tiêu: 80-130 mg/dL trước ăn, &lt; 180 mg/dL sau ăn</li>
                  <li>Tần suất tùy thuộc vào loại thuốc và mức độ kiểm soát</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Cân nặng" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Theo dõi hàng tuần nếu đang giảm cân</li>
                  <li>Mục tiêu: giảm 5-10% nếu thừa cân (type 2)</li>
                  <li>Duy trì cân nặng ổn định (type 1)</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader icon={CheckCircle} title="Lipid Profile" />
              <CardContent>
                <ul className="list-disc space-y-1 pl-6 text-body-sm">
                  <li>Cholesterol, LDL, HDL, triglycerides</li>
                  <li>Đo mỗi năm hoặc thường xuyên hơn nếu có bệnh tim mạch</li>
                  <li>Mục tiêu: LDL &lt; 100 mg/dL (hoặc &lt; 70 nếu có bệnh tim mạch)</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Callout variant="info" title="Tần suất Đánh giá lại">
            <p className="text-body-sm">
              Đánh giá lại dinh dưỡng nên được thực hiện:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Sau 2-4 tuần khi bắt đầu thay đổi chế độ ăn hoặc thuốc</li>
              <li>Khi HbA1c không đạt mục tiêu</li>
              <li>Khi có thay đổi thuốc</li>
              <li>Khi có biến chứng mới hoặc thay đổi tình trạng sức khỏe</li>
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
              <strong>Loại bỏ hoàn toàn carbohydrate:</strong> Một số bệnh nhân nghĩ rằng cần loại bỏ
              hoàn toàn carbohydrate, nhưng điều này không đúng và có thể nguy hiểm. Carbohydrate là nguồn
              năng lượng quan trọng và cần được quản lý, không loại bỏ.
            </li>
            <li>
              <strong>Quá tập trung vào đường huyết mà bỏ qua chất lượng dinh dưỡng tổng thể:</strong> Chỉ
              tập trung vào kiểm soát đường huyết mà bỏ qua sức khỏe tim mạch, cân nặng, hoặc các yếu tố
              dinh dưỡng khác.
            </li>
            <li>
              <strong>Không điều chỉnh theo thuốc và hoạt động:</strong> Áp dụng cùng một chế độ ăn cho
              tất cả bệnh nhân mà không xem xét loại thuốc (ví dụ: insulin vs metformin), hoạt động thể chất,
              hoặc các yếu tố cá nhân khác.
            </li>
            <li>
              <strong>Không giáo dục về hạ đường huyết:</strong> Không hướng dẫn bệnh nhân nhận biết và
              xử trí hạ đường huyết, có thể dẫn đến tình huống nguy hiểm.
            </li>
            <li>
              <strong>Bỏ qua bệnh lý kèm:</strong> Chỉ tập trung vào đái tháo đường mà bỏ qua bệnh thận,
              tăng huyết áp, hoặc các bệnh lý khác cần điều chỉnh dinh dưỡng.
            </li>
            <li>
              <strong>Không theo dõi đáp ứng:</strong> Khuyến nghị thay đổi chế độ ăn nhưng không theo dõi
              HbA1c, đường huyết, hoặc các chỉ số khác để đánh giá hiệu quả.
            </li>
            <li>
              <strong>Quá cứng nhắc:</strong> Áp dụng quy tắc cứng nhắc mà không linh hoạt dựa trên sở thích,
              văn hóa, và khả năng của bệnh nhân, dẫn đến tuân thủ kém.
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
            Các hướng dẫn chính thức về dinh dưỡng trong đái tháo đường:
          </p>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>
              <strong>American Diabetes Association (ADA):</strong> Hướng dẫn về dinh dưỡng và lối sống
              trong quản lý đái tháo đường, bao gồm carbohydrate counting, glycemic index, và quản lý cân nặng.
            </li>
            <li>
              <strong>Academy of Nutrition and Dietetics:</strong> Hướng dẫn chi tiết về dinh dưỡng y tế
              trong đái tháo đường.
            </li>
            <li>
              <strong>International Diabetes Federation (IDF):</strong> Hướng dẫn toàn cầu về quản lý đái tháo đường.
            </li>
            <li>
              <strong>European Association for the Study of Diabetes (EASD):</strong> Hướng dẫn về dinh dưỡng
              và lối sống trong đái tháo đường.
            </li>
          </ul>
          <Callout variant="info" title="Khi nào Cần Tham khảo Chuyên gia Dinh dưỡng">
            <p className="text-body-sm">
              Nên tham khảo chuyên gia dinh dưỡng đã đăng ký khi:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm mt-2">
              <li>Bệnh nhân mới được chẩn đoán đái tháo đường</li>
              <li>Đường huyết không kiểm soát tốt dù đã điều chỉnh thuốc</li>
              <li>Cần học carbohydrate counting hoặc meal planning chi tiết</li>
              <li>Có biến chứng (bệnh thận, bệnh tim) cần điều chỉnh phức tạp</li>
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
            loại đái tháo đường, thuốc đang dùng, hoạt động thể chất, bệnh lý kèm, và sở thích cá nhân
            của từng bệnh nhân. Quản lý đái tháo đường yêu cầu sự hợp tác chặt chẽ giữa bệnh nhân, bác sĩ,
            và chuyên gia dinh dưỡng. Khi còn nghi ngờ, hãy tham khảo ý kiến của chuyên gia dinh dưỡng
            đã đăng ký và nhóm lâm sàng của bạn.
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
                Tính toán nhu cầu năng lượng và protein, đặc biệt hữu ích nếu bệnh nhân cần giảm cân
                (type 2) hoặc quản lý cân nặng.
              </p>
            </CardContent>
          </Card>
          <Card href="/tools/bmi-body-composition">
            <CardHeader icon={CheckCircle} title="BMI & Thành phần Cơ thể" />
            <CardContent>
              <p className="text-body-sm">
                Đánh giá BMI và thành phần cơ thể, quan trọng trong quản lý cân nặng cho bệnh nhân đái tháo đường.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

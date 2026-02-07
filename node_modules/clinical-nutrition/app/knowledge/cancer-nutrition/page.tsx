import Link from "next/link";
import { Activity, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { Callout } from "../../components/Callout";
import { Card, CardHeader, CardContent } from "../../components/Card";
import { Breadcrumb } from "../../components/Breadcrumb";

export default function CancerNutritionPage() {
  return (
    <main className="mx-auto max-w-3xl space-y-8 px-4 py-8 sm:px-6 lg:px-8 sm:py-12">
      <Breadcrumb
        items={[
          { label: "Cơ sở Kiến thức", href: "/knowledge" },
          { label: "Dinh dưỡng trong Ung thư" },
        ]}
      />

      <header className="space-y-4">
        <div className="flex items-center gap-3">
          <Activity className="w-8 h-8 text-green-600" aria-hidden="true" />
          <h1 className="heading-1">
            Dinh dưỡng trong Ung thư: Hướng dẫn Giáo dục (Tổng quan)
          </h1>
        </div>
        <p className="text-body-lg">
          Ung thư và điều trị ung thư ảnh hưởng sâu sắc đến dinh dưỡng. Dinh dưỡng đóng vai trò quan trọng
          trong duy trì sức khỏe, hỗ trợ điều trị, quản lý tác dụng phụ, và cải thiện chất lượng cuộc sống.
          Trang này cung cấp hướng dẫn giáo dục tổng quan về dinh dưỡng trong ung thư.
        </p>
        <Callout variant="info" title="Mục đích Giáo dục">
          <p className="text-body-sm">
            Trang này được thiết kế cho <strong>mục đích giáo dục</strong>, giúp hiểu các nguyên tắc dinh dưỡng
            trong quản lý ung thư. Lưu ý: Dinh dưỡng trong ung thư rất đa dạng và phụ thuộc vào loại ung thư,
            giai đoạn, và điều trị.
          </p>
        </Callout>
      </header>

      <section aria-labelledby="why-matters-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="why-matters-heading" className="heading-2 whitespace-nowrap">
            Vì sao Dinh dưỡng Quan trọng trong Ung thư?
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <p>
            Bệnh nhân ung thư có nguy cơ cao suy dinh dưỡng do nhiều yếu tố:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Tăng chuyển hóa:</strong> Ung thư và điều trị làm tăng tiêu hao năng lượng và protein.
            </li>
            <li>
              <strong>Giảm lượng ăn:</strong> Chán ăn, buồn nôn, nôn, thay đổi vị giác, khó nuốt.
            </li>
            <li>
              <strong>Giảm hấp thu:</strong> Tác dụng phụ của điều trị ảnh hưởng đến tiêu hóa.
            </li>
            <li>
              <strong>Mất chất dinh dưỡng:</strong> Tiêu chảy, nôn, mất qua đường tiêu hóa.
            </li>
          </ul>
          <p>
            Suy dinh dưỡng trong ung thư có thể làm giảm khả năng chịu đựng điều trị, tăng biến chứng,
            giảm chất lượng cuộc sống, và ảnh hưởng đến tiên lượng.
          </p>
        </div>
      </section>

      <section aria-labelledby="principles-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="principles-heading" className="heading-2 whitespace-nowrap">
            Nguyên tắc Dinh dưỡng Cơ bản
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={CheckCircle} title="Năng lượng" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Nhu cầu:</strong> Có thể tăng do tăng chuyển hóa. Khuyến nghị: 30-35 kcal/kg/ngày,
              có thể cần cao hơn (35-40 kcal/kg) nếu có suy dinh dưỡng hoặc đang điều trị tích cực.
            </p>
            <p className="text-body-sm">
              <strong>Lưu ý:</strong> Một số bệnh nhân ung thư có thừa cân, cần điều chỉnh khác.
            </p>
          </CardContent>
        </Card>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Protein</h3>
          <p className="text-body-sm mb-3">
            <strong>Nhu cầu:</strong> Tăng do tăng chuyển hóa và nhu cầu chữa lành. Khuyến nghị: 1.2-1.5 g/kg/ngày,
            có thể cần cao hơn (1.5-2.0 g/kg) nếu có suy dinh dưỡng hoặc đang điều trị tích cực.
          </p>
          <p className="text-body-sm">
            <strong>Chất lượng:</strong> Ưu tiên protein chất lượng cao (thịt, cá, trứng, sữa).
          </p>
        </div>

        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
          <h3 className="heading-3">Vi chất</h3>
          <p className="text-body-sm mb-3">
            <strong>Thiếu hụt phổ biến:</strong> Sắt, B12, folate, vitamin D, kẽm do giảm lượng ăn, giảm hấp thu,
            hoặc mất qua đường tiêu hóa.
          </p>
          <p className="text-body-sm">
            <strong>Giải pháp:</strong> Bổ sung vi chất nếu cần, theo dõi thường xuyên. Lưu ý: Một số chất chống
            oxy hóa có thể tương tác với hóa trị/xạ trị, cần thận trọng.
          </p>
        </div>
      </section>

      <section aria-labelledby="treatment-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="treatment-heading" className="heading-2 whitespace-nowrap">
            Điều chỉnh Theo Giai đoạn & Điều trị
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <div className="space-y-4 rounded-lg border border-blue-200 bg-blue-50/50 p-5">
          <h3 className="heading-4">Trước Điều trị</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Đánh giá và cải thiện tình trạng dinh dưỡng nếu có thể</li>
            <li>Giáo dục về tác dụng phụ có thể xảy ra</li>
            <li>Chuẩn bị cho điều trị</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-lg border border-red-200 bg-red-50/50 p-5">
          <h3 className="heading-4">Trong Điều trị</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Quản lý tác dụng phụ (buồn nôn, nôn, tiêu chảy, thay đổi vị giác)</li>
            <li>Tăng năng lượng và protein nếu có suy dinh dưỡng</li>
            <li>Bổ sung dinh dưỡng nếu cần</li>
            <li>Điều chỉnh dựa trên đáp ứng và khả năng dung nạp</li>
          </ul>
        </div>

        <div className="space-y-4 rounded-lg border border-green-200 bg-green-50/50 p-5">
          <h3 className="heading-4">Sau Điều trị</h3>
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Phục hồi dinh dưỡng</li>
            <li>Quản lý tác dụng phụ kéo dài</li>
            <li>Duy trì sức khỏe và phòng ngừa tái phát</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="symptoms-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="symptoms-heading" className="heading-2 whitespace-nowrap">
            Quản lý Tác dụng Phụ & Triệu chứng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={AlertTriangle} title="Buồn nôn & Nôn" />
          <CardContent>
            <p className="text-body-sm mb-3">
              <strong>Giải pháp:</strong> Ăn nhiều bữa nhỏ, tránh thức ăn có mùi mạnh, thức ăn lạnh có thể
              dễ chịu hơn, uống nước giữa các bữa ăn.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Thay đổi Vị giác" />
          <CardContent>
            <p className="text-body-sm">
              <strong>Giải pháp:</strong> Sử dụng gia vị và thảo mộc, thử thức ăn có vị khác, súc miệng
              trước khi ăn, tránh kim loại (dùng đồ nhựa).
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={AlertCircle} title="Khó nuốt" />
          <CardContent>
            <p className="text-body-sm">
              <strong>Giải pháp:</strong> Thức ăn mềm, lỏng, cắt nhỏ, tránh thức ăn khô, cứng. Có thể cần
              chế độ ăn đặc biệt hoặc bổ sung dinh dưỡng.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Tiêu chảy" />
          <CardContent>
            <p className="text-body-sm">
              <strong>Giải pháp:</strong> Tránh thức ăn nhiều chất xơ, chất béo, tránh sữa nếu không dung nạp,
              uống đủ nước, có thể cần bổ sung điện giải.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="complications-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="complications-heading" className="heading-2 whitespace-nowrap">
            Quản lý Biến chứng Dinh dưỡng
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>

        <Card>
          <CardHeader icon={AlertTriangle} title="Suy dinh dưỡng" />
          <CardContent>
            <p className="text-body-sm mb-3">
              Rất phổ biến trong ung thư. Tăng năng lượng và protein, bổ sung dinh dưỡng nếu cần, theo dõi
              albumin, prealbumin.
            </p>
            <p className="text-body-sm">
              <strong>Bổ sung dinh dưỡng:</strong> Có thể cần bổ sung dinh dưỡng qua đường miệng, ống thông,
              hoặc TPN tùy thuộc vào tình trạng.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader icon={Info} title="Cachexia (Suy mòn Ung thư)" />
          <CardContent>
            <p className="text-body-sm">
              Mất cơ và mỡ không chỉ do giảm lượng ăn mà còn do tăng chuyển hóa và viêm. Quản lý phức tạp,
              có thể cần thuốc hỗ trợ (ví dụ: megestrol acetate) và bổ sung dinh dưỡng tích cực.
            </p>
          </CardContent>
        </Card>
      </section>

      <section aria-labelledby="interactions-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="interactions-heading" className="heading-2 whitespace-nowrap">
            Tương tác Dinh dưỡng-Điều trị
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Hóa trị</h3>
            <p className="text-body-sm mb-3">
              Tác dụng phụ: buồn nôn, nôn, tiêu chảy, thay đổi vị giác, loét miệng. Điều chỉnh dinh dưỡng
              dựa trên tác dụng phụ cụ thể.
            </p>
            <p className="text-body-sm">
              <strong>Lưu ý:</strong> Một số chất chống oxy hóa có thể tương tác với hóa trị, cần thận trọng
              khi bổ sung.
            </p>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Xạ trị</h3>
            <p className="text-body-sm mb-3">
              Tác dụng phụ phụ thuộc vào vị trí xạ trị:
            </p>
            <ul className="list-disc space-y-1 pl-6 text-body-sm">
              <li>Đầu-cổ: khó nuốt, thay đổi vị giác, loét miệng</li>
              <li>Ngực: khó nuốt, viêm thực quản</li>
              <li>Bụng: buồn nôn, tiêu chảy</li>
            </ul>
          </div>

          <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6">
            <h3 className="heading-4">Phẫu thuật</h3>
            <p className="text-body-sm">
              Trước phẫu thuật: cải thiện tình trạng dinh dưỡng nếu có thể. Sau phẫu thuật: phục hồi dinh dưỡng,
              hỗ trợ chữa lành vết thương.
            </p>
          </div>
        </div>
      </section>

      <section aria-labelledby="monitoring-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="monitoring-heading" className="heading-2 whitespace-nowrap">
            Theo dõi
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Cân nặng (hàng tuần hoặc thường xuyên hơn)</li>
            <li>Albumin, prealbumin</li>
            <li>Lượng ăn vào</li>
            <li>Tác dụng phụ và triệu chứng</li>
            <li>Vi chất (nếu có thiếu hụt)</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="pitfalls-heading" className="space-y-5">
        <div className="flex items-center gap-3">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
          <h2 id="pitfalls-heading" className="heading-2 whitespace-nowrap">
            Các Cạm bẫy
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-neutral-300 to-transparent"></div>
        </div>
        <div className="space-y-4 text-body-lg">
          <ul className="list-disc space-y-2 pl-6 text-body-sm">
            <li>Không đánh giá và quản lý tác dụng phụ sớm</li>
            <li>Không tăng năng lượng và protein đủ để đáp ứng nhu cầu tăng</li>
            <li>Bổ sung chất chống oxy hóa quá mức mà không xem xét tương tác với điều trị</li>
            <li>Không điều chỉnh theo loại ung thư và điều trị</li>
          </ul>
        </div>
      </section>

      <section aria-labelledby="safety-heading" className="space-y-4">
        <h2 id="safety-heading" className="heading-3">Nhắc nhở An toàn</h2>
        <Callout variant="error" title="Quan trọng">
          <p className="text-body-sm">
            Trang này chỉ dùng cho <strong>mục đích giáo dục</strong>. Dinh dưỡng trong ung thư rất đa dạng
            và phụ thuộc vào loại ung thư, giai đoạn, điều trị, và đáp ứng cá nhân. Luôn tham khảo chuyên gia
            dinh dưỡng và nhóm lâm sàng.
          </p>
        </Callout>
      </section>

      <section aria-labelledby="tools-heading" className="space-y-4">
        <h2 id="tools-heading" className="heading-3">Công cụ Liên quan</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Card href="/tools/energy-protein-calculator">
            <CardHeader icon={CheckCircle} title="Máy tính Năng lượng & Protein" />
            <CardContent>
              <p className="text-body-sm">Tính toán nhu cầu năng lượng và protein với điều chỉnh cho ung thư.</p>
            </CardContent>
          </Card>
          <Card href="/tools/refeeding-syndrome-risk">
            <CardHeader icon={CheckCircle} title="Đánh giá Nguy cơ Tái cho Ăn" />
            <CardContent>
              <p className="text-body-sm">Đánh giá nguy cơ hội chứng tái cho ăn ở bệnh nhân ung thư có suy dinh dưỡng.</p>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

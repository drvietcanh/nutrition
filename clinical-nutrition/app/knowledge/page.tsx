import Link from "next/link";

export default function KnowledgePage() {
  return (
    <main className="mx-auto max-w-4xl space-y-8 px-4 py-8">
      <header className="space-y-3">
        <h1 className="text-2xl font-semibold sm:text-3xl">
          Cơ sở Kiến thức Dinh dưỡng Lâm sàng
        </h1>
        <p className="text-base text-neutral-700 sm:text-lg">
          Nội dung giáo dục giải thích các khái niệm dinh dưỡng lâm sàng, quy trình đánh giá, và lập luận lâm sàng.
        </p>
      </header>

      <section className="space-y-6">
        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/myths-in-clinical-nutrition"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Hiểu lầm & Quan niệm Sai trong Dinh dưỡng Lâm sàng
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Điều chỉnh dựa trên bằng chứng cho các hiểu lầm phổ biến vẫn tồn tại trong thực hành y tế và điều dưỡng.
            Tìm hiểu sự thật đằng sau các hiểu lầm phổ biến về nhu cầu calo, nhu cầu protein, quy trình NPO, và nhiều hơn nữa.
          </p>
          <Link
            href="/knowledge/myths-in-clinical-nutrition"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Đọc thêm →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/assessment-process"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Đánh giá Dinh dưỡng Lâm sàng: Hướng dẫn Đơn giản về Toàn bộ Quy trình
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Hiểu quy trình đánh giá dinh dưỡng lâm sàng đầy đủ từ sàng lọc đến theo dõi.
            Tìm hiểu cách sàng lọc, ước tính nhu cầu, và đánh giá lượng ăn kết nối để tạo thành bức tranh hoàn chỉnh.
          </p>
          <Link
            href="/knowledge/assessment-process"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Đọc thêm →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/needs-estimation"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Ước tính Nhu cầu Dinh dưỡng: Vì sao Khoảng Quan trọng Hơn Số Chính xác
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Tìm hiểu vì sao nhu cầu dinh dưỡng là ước tính, không phải mục tiêu chính xác. Hiểu các phương pháp ước tính khác nhau,
            tầm quan trọng của khoảng, và vì sao đánh giá lại là cần thiết.
          </p>
          <Link
            href="/knowledge/needs-estimation"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Đọc thêm →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/why-intake-falls-short"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Vì sao Lượng Dinh dưỡng Ăn vào Thường Thiếu so với Nhu cầu Đã Tính
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Hiểu các yếu tố thực tế—liên quan đến bệnh nhân, hệ thống, và lâm sàng—tạo ra khoảng cách
            giữa nhu cầu dinh dưỡng đã tính và lượng ăn thực tế trong môi trường nội trú và ngoại trú.
          </p>
          <Link
            href="/knowledge/why-intake-falls-short"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Đọc thêm →
          </Link>
        </div>

        <div className="rounded-lg border border-neutral-200 bg-white p-6">
          <h2 className="text-xl font-semibold mb-3">
            <Link
              href="/knowledge/intake-assessment"
              className="text-blue-700 hover:text-blue-900 hover:underline"
            >
              Đánh giá Lượng Ăn: Hiểu Người Bệnh Thực sự Nhận được Gì
            </Link>
          </h2>
          <p className="text-base text-neutral-700 mb-3">
            Khám phá sự khác biệt giữa dinh dưỡng được kê đơn và được cung cấp, vì sao lượng ăn thường thiếu,
            và tầm quan trọng của xu hướng so với dữ liệu một ngày.
          </p>
          <Link
            href="/knowledge/intake-assessment"
            className="inline-flex items-center text-base font-medium text-blue-700 hover:text-blue-900 underline"
          >
            Đọc thêm →
          </Link>
        </div>
      </section>

      <section className="rounded-lg border border-neutral-200 bg-white p-6">
        <h2 className="text-xl font-semibold mb-3">
          Công cụ Tương tác
        </h2>
        <p className="text-base text-neutral-700 mb-4">
          Thực hành những gì bạn đã học với các công cụ tương tác của chúng tôi:
        </p>
        <ul className="list-disc space-y-2 pl-6 text-base text-neutral-700">
          <li>
            <Link href="/tools/malnutrition-screening" className="text-blue-700 hover:text-blue-900 hover:underline">
              Công cụ Sàng lọc Suy Dinh dưỡng
            </Link>
          </li>
          <li>
            <Link href="/tools/energy-protein-calculator" className="text-blue-700 hover:text-blue-900 hover:underline">
              Máy tính Năng lượng & Protein
            </Link>
          </li>
          <li>
            <Link href="/tools/intake-assessment" className="text-blue-700 hover:text-blue-900 hover:underline">
              Bảng Đánh giá Lượng Ăn
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}

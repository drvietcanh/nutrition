import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Giáo dục Dinh dưỡng Lâm sàng & Công cụ
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Nền tảng giáo dục công cộng giải thích các khái niệm dinh dưỡng lâm sàng và cung cấp 
            công cụ tương tác hỗ trợ (nhưng không thay thế) tư duy lâm sàng.
          </p>
        </div>

        {/* Main Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Knowledge Base Card */}
          <Link
            href="/knowledge"
            className="group block bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-blue-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
                Cơ sở Kiến thức
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Nội dung giáo dục giải thích các khái niệm dinh dưỡng lâm sàng, quy trình đánh giá, 
              hiểu lầm và quan niệm sai, và nguyên tắc lập luận lâm sàng.
            </p>
            <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800">
              Khám phá Kiến thức →
            </span>
          </Link>

          {/* Tools Card */}
          <Link
            href="/tools"
            className="group block bg-white rounded-xl border-2 border-gray-200 p-8 hover:border-green-500 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center group-hover:bg-green-200 transition-colors">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                Công cụ Tương tác
              </h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Thực hành với các công cụ tương tác để sàng lọc suy dinh dưỡng, tính toán năng lượng và protein, 
              và đánh giá lượng ăn vào.
            </p>
            <span className="inline-flex items-center text-green-600 font-medium group-hover:text-green-800">
              Sử dụng Công cụ →
            </span>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Liên kết Nhanh</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link
              href="/knowledge/myths-in-clinical-nutrition"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Hiểu lầm & Quan niệm Sai</h3>
              <p className="text-sm text-gray-600">
                Điều chỉnh dựa trên bằng chứng cho các hiểu lầm phổ biến
              </p>
            </Link>
            <Link
              href="/knowledge/assessment-process"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Quy trình Đánh giá</h3>
              <p className="text-sm text-gray-600">
                Hướng dẫn đầy đủ về đánh giá dinh dưỡng lâm sàng
              </p>
            </Link>
            <Link
              href="/tools/malnutrition-screening"
              className="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Công cụ Sàng lọc</h3>
              <p className="text-sm text-gray-600">
                Sàng lọc suy dinh dưỡng tương tác
              </p>
            </Link>
            <Link
              href="/tools/energy-protein-calculator"
              className="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Máy tính Năng lượng & Protein</h3>
              <p className="text-sm text-gray-600">
                Tính toán nhu cầu dinh dưỡng
              </p>
            </Link>
            <Link
              href="/knowledge/why-intake-falls-short"
              className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:bg-blue-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Vì sao Lượng Ăn Thường Thiếu</h3>
              <p className="text-sm text-gray-600">
                Hiểu các yếu tố thực tế
              </p>
            </Link>
            <Link
              href="/tools/intake-assessment"
              className="p-4 rounded-lg border border-gray-200 hover:border-green-500 hover:bg-green-50 transition-colors"
            >
              <h3 className="font-semibold text-gray-900 mb-2">Đánh giá Lượng Ăn</h3>
              <p className="text-sm text-gray-600">
                Đánh giá lượng dinh dưỡng thực tế
              </p>
            </Link>
          </div>
        </div>

        {/* About Section */}
        <div className="bg-blue-50 rounded-xl border border-blue-200 p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Về Nền tảng Này</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Nền tảng này được thiết kế để hỗ trợ các chuyên gia y tế hiểu các khái niệm dinh dưỡng lâm sàng 
            và áp dụng thực hành dựa trên bằng chứng. Tất cả nội dung mang tính giáo dục và nên được sử dụng 
            để hỗ trợ, không thay thế, phán đoán lâm sàng và hợp tác đa ngành.
          </p>
          <p className="text-sm text-gray-600 italic">
            Lưu ý: Công cụ và hướng dẫn cung cấp thông tin cho phán đoán của bạn; chúng không thay thế nó. Khi còn nghi ngờ, 
            hãy tham khảo ý kiến của chuyên gia dinh dưỡng đã đăng ký và nhóm lâm sàng của bạn.
          </p>
        </div>
      </main>
    </div>
  );
}

export function SkipLinks() {
  return (
    <div className="sr-only focus-within:not-sr-only focus-within:absolute focus-within:z-50 focus-within:m-2 focus-within:p-2 focus-within:bg-white focus-within:border focus-within:border-blue-500 focus-within:rounded">
      <a
        href="#main-content"
        className="block px-4 py-2 text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Bỏ qua đến nội dung chính
      </a>
      <a
        href="#navigation"
        className="block px-4 py-2 text-blue-600 underline focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Bỏ qua đến điều hướng
      </a>
    </div>
  );
}

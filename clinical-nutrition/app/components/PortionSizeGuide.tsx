interface PortionSizeItem {
  food: string;
  portion: string;
  visual: string;
  calories?: string;
}

interface PortionSizeGuideProps {
  title?: string;
  items: PortionSizeItem[];
  className?: string;
}

export function PortionSizeGuide({ title, items, className = "" }: PortionSizeGuideProps) {
  return (
    <div className={`rounded-lg border border-neutral-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}>
      {title && (
        <h3 className="heading-4 mb-4">{title}</h3>
      )}
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-b border-neutral-200 pb-4 last:border-b-0 last:pb-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-900 mb-1">{item.food}</p>
                <p className="text-sm text-gray-700 mb-1">
                  <strong>Khẩu phần:</strong> {item.portion}
                </p>
                <p className="text-xs text-gray-600 italic">
                  <strong>So sánh:</strong> {item.visual}
                </p>
                {item.calories && (
                  <p className="text-xs text-gray-500 mt-1">
                    ~{item.calories} calo
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-xs text-blue-900">
          <strong>Mẹo:</strong> Sử dụng bàn tay để ước lượng khẩu phần:
          <ul className="list-disc list-inside mt-1 space-y-1">
            <li>Lòng bàn tay = 1 phần protein (~100g)</li>
            <li>Nắm tay = 1 phần carbohydrate (~80g)</li>
            <li>Ngón tay cái = 1 phần chất béo (~1 muỗng canh)</li>
            <li>2 bàn tay = 1 phần rau củ</li>
          </ul>
        </p>
      </div>
    </div>
  );
}

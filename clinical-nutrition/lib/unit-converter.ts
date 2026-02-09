/**
 * Vietnamese Unit Converter
 * 
 * Chuyển đổi giữa các đơn vị Việt Nam (bát, thìa, đĩa...) và gram
 */

export type VietnameseUnit = 
  | 'bat'           // Bát
  | 'thia-canh'      // Thìa canh
  | 'thia-ca-phe'    // Thìa cà phê
  | 'dia'            // Đĩa
  | 'to'             // Tô
  | 'cai'            // Cái (cho trái cây, củ)
  | 'qua'            // Quả
  | 'mieng'          // Miếng
  | 'bo'             // Bó (rau)
  | 'gram';          // Gram (đơn vị chuẩn)

export interface UnitConversion {
  unit: VietnameseUnit;
  toGrams: number;
  description: string;
  category?: 'liquid' | 'solid' | 'both';
}

/**
 * Bảng chuyển đổi đơn vị Việt Nam phổ biến
 * 
 * Lưu ý: Các giá trị này là ước tính trung bình, có thể thay đổi tùy theo:
 * - Kích thước bát, thìa thực tế
 * - Loại thực phẩm (đặc, lỏng, rời...)
 * - Cách đong đo
 */
export const unitConversions: Record<string, UnitConversion[]> = {
  // Rice & Grains
  'rice': [
    { unit: 'bat', toGrams: 150, description: '1 bát cơm vừa', category: 'solid' },
    { unit: 'bat', toGrams: 100, description: '1 bát cơm nhỏ', category: 'solid' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
  
  // Noodles
  'noodles': [
    { unit: 'to', toGrams: 250, description: '1 tô phở/bún vừa', category: 'solid' },
    { unit: 'to', toGrams: 200, description: '1 tô phở/bún nhỏ', category: 'solid' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
  
  // Meat & Fish
  'meat-fish': [
    { unit: 'mieng', toGrams: 100, description: '1 miếng vừa (khoảng 1 lòng bàn tay)', category: 'solid' },
    { unit: 'mieng', toGrams: 50, description: '1 miếng nhỏ', category: 'solid' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
  
  // Vegetables
  'vegetables': [
    { unit: 'bo', toGrams: 100, description: '1 bó rau nhỏ', category: 'solid' },
    { unit: 'cai', toGrams: 100, description: '1 củ/cái vừa', category: 'solid' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
  
  // Fruits
  'fruits': [
    { unit: 'qua', toGrams: 100, description: '1 quả vừa', category: 'solid' },
    { unit: 'qua', toGrams: 150, description: '1 quả lớn', category: 'solid' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
  
  // Liquids (sauces, oils, etc.)
  'liquids': [
    { unit: 'thia-canh', toGrams: 15, description: '1 muỗng canh (15ml)', category: 'liquid' },
    { unit: 'thia-ca-phe', toGrams: 5, description: '1 muỗng cà phê (5ml)', category: 'liquid' },
    { unit: 'gram', toGrams: 1, description: '1 gram (≈1ml cho nước)', category: 'liquid' },
  ],
  
  // Dishes
  'dishes': [
    { unit: 'dia', toGrams: 100, description: '1 đĩa bánh cuốn/món ăn vừa', category: 'solid' },
    { unit: 'dia', toGrams: 150, description: '1 đĩa lớn', category: 'solid' },
    { unit: 'to', toGrams: 300, description: '1 tô món ăn vừa', category: 'both' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
  
  // General (default)
  'general': [
    { unit: 'bat', toGrams: 150, description: '1 bát vừa', category: 'both' },
    { unit: 'thia-canh', toGrams: 15, description: '1 muỗng canh', category: 'both' },
    { unit: 'thia-ca-phe', toGrams: 5, description: '1 muỗng cà phê', category: 'both' },
    { unit: 'gram', toGrams: 1, description: '1 gram', category: 'solid' },
  ],
};

/**
 * Chuyển đổi từ đơn vị Việt Nam sang gram
 */
export function convertToGrams(
  amount: number,
  unit: VietnameseUnit,
  category: string = 'general'
): number {
  const conversions = unitConversions[category] || unitConversions['general'];
  const conversion = conversions.find(c => c.unit === unit);
  
  if (!conversion) {
    // Nếu không tìm thấy, thử tìm trong general
    const generalConversion = unitConversions['general'].find(c => c.unit === unit);
    if (generalConversion) {
      return amount * generalConversion.toGrams;
    }
    // Nếu vẫn không tìm thấy và là gram, trả về chính nó
    if (unit === 'gram') {
      return amount;
    }
    // Mặc định: giả sử 1 đơn vị = 100g (ước tính an toàn)
    console.warn(`Không tìm thấy chuyển đổi cho đơn vị ${unit}, sử dụng ước tính 100g`);
    return amount * 100;
  }
  
  return amount * conversion.toGrams;
}

/**
 * Chuyển đổi từ gram sang đơn vị Việt Nam
 */
export function convertFromGrams(
  grams: number,
  targetUnit: VietnameseUnit,
  category: string = 'general'
): number {
  const conversions = unitConversions[category] || unitConversions['general'];
  const conversion = conversions.find(c => c.unit === targetUnit);
  
  if (!conversion) {
    // Nếu không tìm thấy, thử tìm trong general
    const generalConversion = unitConversions['general'].find(c => c.unit === targetUnit);
    if (generalConversion) {
      return grams / generalConversion.toGrams;
    }
    // Nếu vẫn không tìm thấy và là gram, trả về chính nó
    if (targetUnit === 'gram') {
      return grams;
    }
    // Mặc định: giả sử 1 đơn vị = 100g
    console.warn(`Không tìm thấy chuyển đổi cho đơn vị ${targetUnit}, sử dụng ước tính 100g`);
    return grams / 100;
  }
  
  return grams / conversion.toGrams;
}

/**
 * Lấy danh sách đơn vị có sẵn cho một category
 */
export function getAvailableUnits(category: string = 'general'): UnitConversion[] {
  return unitConversions[category] || unitConversions['general'];
}

/**
 * Lấy mô tả đơn vị
 */
export function getUnitDescription(unit: VietnameseUnit): string {
  const descriptions: Record<VietnameseUnit, string> = {
    'bat': 'Bát',
    'thia-canh': 'Muỗng canh',
    'thia-ca-phe': 'Muỗng cà phê',
    'dia': 'Đĩa',
    'to': 'Tô',
    'cai': 'Cái',
    'qua': 'Quả',
    'mieng': 'Miếng',
    'bo': 'Bó',
    'gram': 'Gram',
  };
  
  return descriptions[unit] || unit;
}

/**
 * Format số với đơn vị
 */
export function formatAmount(amount: number, unit: VietnameseUnit): string {
  const unitName = getUnitDescription(unit);
  // Làm tròn đến 1 chữ số thập phân nếu cần
  const rounded = Math.round(amount * 10) / 10;
  return `${rounded} ${unitName}`;
}

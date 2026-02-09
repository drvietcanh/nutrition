/**
 * Vietnamese Dishes Database
 * 
 * Database các món ăn Việt Nam phổ biến với thông tin dinh dưỡng và đánh giá theo bệnh
 */

export type DishCategory = 
  | 'pho-noodles'    // Phở, bún, mì
  | 'rice-dishes'    // Cơm và món kèm
  | 'soups'          // Canh, cháo, súp
  | 'stir-fried'     // Món xào
  | 'steamed'        // Món hấp
  | 'salads'         // Gỏi, nộm
  | 'drinks';        // Đồ uống

export interface VietnameseDish {
  id: string;
  name: string;
  nameEn?: string;
  category: DishCategory;
  
  // Thông tin cơ bản
  description: string;
  commonPortion: {
    description: string;
    weight: number; // grams
  };
  
  // Thành phần chính (đơn giản hóa)
  mainIngredients: string[];
  
  // Dinh dưỡng (per common portion)
  nutrition: {
    calories: number;
    protein: number; // g
    carbs: number; // g
    fat: number; // g
    fiber?: number; // g
    sodium?: number; // mg
  };
  
  // Đánh giá theo bệnh
  diseaseAssessment: {
    diabetes?: {
      glycemicLoad?: number;
      assessment: 'excellent' | 'good' | 'moderate' | 'poor';
      notes: string;
    };
    gout?: {
      assessment: 'excellent' | 'good' | 'moderate' | 'poor';
      notes: string;
    };
    kidney?: {
      assessment: 'excellent' | 'good' | 'moderate' | 'poor';
      notes: string;
    };
    hypertension?: {
      assessment: 'excellent' | 'good' | 'moderate' | 'poor';
      notes: string;
    };
    cardiovascular?: {
      assessment: 'excellent' | 'good' | 'moderate' | 'poor';
      notes: string;
    };
  };
  
  // Mẹo điều chỉnh để phù hợp với bệnh
  adjustmentTips?: {
    [disease: string]: string[];
  };
}

export const vietnameseDishes: VietnameseDish[] = [
  // Pho & Noodles
  {
    id: 'pho-bo',
    name: 'Phở bò',
    nameEn: 'Beef pho',
    category: 'pho-noodles',
    description: 'Phở bò với bánh phở, thịt bò, nước dùng, và rau thơm',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Bánh phở', 'Thịt bò', 'Nước dùng', 'Rau thơm'],
    nutrition: {
      calories: 350,
      protein: 20,
      carbs: 45,
      fat: 8,
      fiber: 2,
      sodium: 1200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 10,
        assessment: 'moderate',
        notes: 'GL trung bình. Nên ăn nhiều rau, ít nước dùng, chọn tô nhỏ',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt bò có purin cao. Nước dùng đậm đặc có nhiều purin. Nên hạn chế',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Natri cao từ nước dùng. Thịt bò có kali và phốt pho trung bình',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao từ nước dùng (khoảng 1200mg). Nên ăn ít nước dùng hoặc yêu cầu nước nhạt',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Thịt bò có cholesterol và chất béo bão hòa. Chọn thịt nạc, bỏ mỡ',
      },
    },
    adjustmentTips: {
      diabetes: [
        'Yêu cầu nhiều rau, ít bánh phở',
        'Ăn ít nước dùng (nước có đường)',
        'Chọn tô nhỏ hoặc vừa',
      ],
      gout: [
        'Tránh hoặc hạn chế nghiêm ngặt',
        'Nếu ăn, chọn phở gà thay vì phở bò',
        'Ăn ít nước dùng (có nhiều purin)',
      ],
      hypertension: [
        'Yêu cầu nước dùng nhạt (ít muối)',
        'Ăn ít nước dùng',
        'Không chấm thêm nước mắm',
      ],
    },
  },
  {
    id: 'pho-ga',
    name: 'Phở gà',
    nameEn: 'Chicken pho',
    category: 'pho-noodles',
    description: 'Phở gà với bánh phở, thịt gà, nước dùng, và rau thơm',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Bánh phở', 'Thịt gà', 'Nước dùng', 'Rau thơm'],
    nutrition: {
      calories: 320,
      protein: 22,
      carbs: 45,
      fat: 6,
      fiber: 2,
      sodium: 1100,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 10,
        assessment: 'moderate',
        notes: 'GL trung bình. Tốt hơn phở bò một chút',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình. Tốt hơn thịt bò. Nên ăn vừa phải',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Natri cao từ nước dùng',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao từ nước dùng. Nên ăn ít nước dùng',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà (bỏ da) tốt hơn thịt bò cho tim mạch',
      },
    },
  },
  {
    id: 'bun-bo',
    name: 'Bún bò',
    nameEn: 'Beef vermicelli',
    category: 'pho-noodles',
    description: 'Bún bò với bún, thịt bò, nước dùng, và rau sống',
    commonPortion: {
      description: '1 tô vừa',
      weight: 250,
    },
    mainIngredients: ['Bún', 'Thịt bò', 'Nước dùng', 'Rau sống'],
    nutrition: {
      calories: 420,
      protein: 25,
      carbs: 50,
      fat: 12,
      fiber: 1.5,
      sodium: 800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 13,
        assessment: 'moderate',
        notes: 'GL trung bình. Nên ăn nhiều rau sống, ít bún',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt bò có purin cao. Nên hạn chế',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri cao từ nước dùng. Nên ăn ít nước dùng',
      },
    },
  },
  {
    id: 'bun-cha',
    name: 'Bún chả',
    nameEn: 'Grilled pork with noodles',
    category: 'pho-noodles',
    description: 'Bún chả với bún, thịt heo nướng, nước mắm pha, và rau sống',
    commonPortion: {
      description: '1 phần',
      weight: 250,
    },
    mainIngredients: ['Bún', 'Thịt heo nướng', 'Nước mắm pha', 'Rau sống'],
    nutrition: {
      calories: 420,
      protein: 25,
      carbs: 50,
      fat: 12,
      fiber: 1.5,
      sodium: 800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 13,
        assessment: 'moderate',
        notes: 'GL trung bình. Nên ăn nhiều rau sống, ít bún',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt heo có purin cao. Nước mắm có nhiều natri',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước mắm. Nên chấm ít nước mắm',
      },
    },
  },
  {
    id: 'bun-rieu',
    name: 'Bún riêu',
    nameEn: 'Crab noodle soup',
    category: 'pho-noodles',
    description: 'Bún riêu với bún, riêu cua, đậu phụ, và rau sống',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Bún', 'Riêu cua', 'Đậu phụ', 'Rau sống'],
    nutrition: {
      calories: 380,
      protein: 22,
      carbs: 48,
      fat: 10,
      fiber: 2,
      sodium: 900,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 12,
        assessment: 'moderate',
        notes: 'GL trung bình. Đậu phụ tốt cho đái tháo đường',
      },
      gout: {
        assessment: 'poor',
        notes: 'Cua có purin cao. Nên hạn chế',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri cao từ nước dùng',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Cua có cholesterol. Đậu phụ tốt cho tim mạch',
      },
    },
  },

  // Rice Dishes
  {
    id: 'com-thit-kho',
    name: 'Cơm thịt kho',
    nameEn: 'Rice with braised pork',
    category: 'rice-dishes',
    description: 'Cơm trắng với thịt heo kho tàu',
    commonPortion: {
      description: '1 bát cơm + thịt kho',
      weight: 250,
    },
    mainIngredients: ['Cơm trắng', 'Thịt heo', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 450,
      protein: 25,
      carbs: 55,
      fat: 12,
      fiber: 0.5,
      sodium: 1500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 33,
        assessment: 'poor',
        notes: 'GL cao do cơm trắng. Nên giảm lượng cơm, thay bằng gạo lứt',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt heo có purin cao. Nước mắm có nhiều natri',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao từ nước mắm và muối. Nên giảm muối khi nấu',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Thịt mỡ có cholesterol và chất béo bão hòa cao',
      },
    },
    adjustmentTips: {
      diabetes: [
        'Giảm lượng cơm trắng, thay bằng gạo lứt',
        'Thêm nhiều rau xanh',
        'Ăn rau trước, sau đó mới ăn cơm',
      ],
      hypertension: [
        'Giảm muối và nước mắm khi nấu',
        'Dùng nhiều tỏi, gừng, sả thay muối',
        'Không chấm thêm nước mắm',
      ],
    },
  },
  {
    id: 'com-ca-kho',
    name: 'Cơm cá kho',
    nameEn: 'Rice with braised fish',
    category: 'rice-dishes',
    description: 'Cơm trắng với cá kho tộ',
    commonPortion: {
      description: '1 bát cơm + cá kho',
      weight: 250,
    },
    mainIngredients: ['Cơm trắng', 'Cá', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 400,
      protein: 28,
      carbs: 55,
      fat: 8,
      fiber: 0.5,
      sodium: 1200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 33,
        assessment: 'poor',
        notes: 'GL cao do cơm trắng. Nên giảm lượng cơm',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá đồng có purin trung bình. Tốt hơn thịt đỏ',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước mắm. Nên giảm muối khi nấu',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Cá tốt cho tim mạch, có omega-3',
      },
    },
  },
  {
    id: 'com-ga-luoc',
    name: 'Cơm gà luộc',
    nameEn: 'Rice with boiled chicken',
    category: 'rice-dishes',
    description: 'Cơm trắng với thịt gà luộc, rau luộc',
    commonPortion: {
      description: '1 bát cơm + thịt gà + rau',
      weight: 300,
    },
    mainIngredients: ['Cơm trắng', 'Thịt gà', 'Rau luộc'],
    nutrition: {
      calories: 420,
      protein: 30,
      carbs: 50,
      fat: 8,
      fiber: 2,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 33,
        assessment: 'moderate',
        notes: 'GL cao do cơm trắng. Nên giảm lượng cơm, thêm rau',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình. Bỏ da, bỏ nước luộc',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu không chấm muối/nước mắm',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà nạc (bỏ da) tốt cho tim mạch',
      },
    },
  },

  // Soups
  {
    id: 'canh-chua-ca',
    name: 'Canh chua cá',
    nameEn: 'Sour fish soup',
    category: 'soups',
    description: 'Canh chua cá với cá, cà chua, dứa, đậu bắp, và rau thơm',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Cá', 'Cà chua', 'Dứa', 'Đậu bắp', 'Rau thơm'],
    nutrition: {
      calories: 120,
      protein: 15,
      carbs: 8,
      fat: 3,
      fiber: 2,
      sodium: 600,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 3,
        assessment: 'good',
        notes: 'GL thấp. Nhiều rau củ tốt cho đái tháo đường',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình. Chọn cá đồng tốt hơn cá biển',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình. Nên nấu ít muối, nhiều me/cà chua',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Cá tốt cho tim mạch. Nhiều rau củ',
      },
    },
    adjustmentTips: {
      hypertension: [
        'Nấu ít muối, nhiều me và cà chua để tạo vị chua',
        'Dùng nhiều rau củ (cà chua, đậu bắp)',
      ],
    },
  },
  {
    id: 'canh-rau',
    name: 'Canh rau',
    nameEn: 'Vegetable soup',
    category: 'soups',
    description: 'Canh rau với rau cải, cà chua, hoặc các loại rau khác',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Rau cải', 'Cà chua', 'Nước dùng'],
    nutrition: {
      calories: 40,
      protein: 2,
      carbs: 6,
      fat: 0.5,
      fiber: 2,
      sodium: 300,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp. Nhiều chất xơ, tốt cho đái tháo đường',
      },
      gout: {
        assessment: 'excellent',
        notes: 'Rau có purin rất thấp. Ăn tự do',
      },
      kidney: {
        assessment: 'good',
        notes: 'Rau có kali và phốt pho thấp (nếu không phải rau ngót, đậu)',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu nấu ít muối',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Rau củ rất tốt cho tim mạch',
      },
    },
  },
  {
    id: 'chao',
    name: 'Cháo',
    nameEn: 'Rice porridge',
    category: 'soups',
    description: 'Cháo trắng hoặc cháo thịt/cá',
    commonPortion: {
      description: '1 bát cháo',
      weight: 250,
    },
    mainIngredients: ['Gạo', 'Nước', 'Thịt/Cá (tùy chọn)'],
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 35,
      fat: 2,
      fiber: 0.5,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 25,
        assessment: 'moderate',
        notes: 'GL trung bình. Cháo dễ tiêu hóa, đường huyết tăng nhanh hơn',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu không nêm muối',
      },
    },
  },

  // Stir-fried
  {
    id: 'rau-xao',
    name: 'Rau xào',
    nameEn: 'Stir-fried vegetables',
    category: 'stir-fried',
    description: 'Rau xào với tỏi, dầu ăn',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 150,
    },
    mainIngredients: ['Rau cải', 'Tỏi', 'Dầu ăn'],
    nutrition: {
      calories: 80,
      protein: 2,
      carbs: 5,
      fat: 5,
      fiber: 2,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp. Nhiều chất xơ',
      },
      gout: {
        assessment: 'excellent',
        notes: 'Rau có purin rất thấp',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu xào ít muối',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Rau tốt cho tim mạch. Dùng dầu thực vật',
      },
    },
  },
  {
    id: 'thit-kho-tau',
    name: 'Thịt kho tàu',
    nameEn: 'Braised pork with eggs',
    category: 'rice-dishes',
    description: 'Thịt heo kho với trứng, nước dừa, nước mắm',
    commonPortion: {
      description: '1 phần vừa',
      weight: 150,
    },
    mainIngredients: ['Thịt heo', 'Trứng', 'Nước dừa', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 350,
      protein: 25,
      carbs: 8,
      fat: 22,
      fiber: 0,
      sodium: 1800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 3,
        assessment: 'moderate',
        notes: 'GL thấp nhưng có đường. Nên giảm đường khi nấu',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt heo có purin cao. Nước dùng đậm đặc có nhiều purin',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao từ nước mắm và muối',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Thịt mỡ có cholesterol và chất béo bão hòa cao. Lòng đỏ trứng có cholesterol cao',
      },
    },
  },

  // Steamed
  {
    id: 'ca-hap',
    name: 'Cá hấp',
    nameEn: 'Steamed fish',
    category: 'steamed',
    description: 'Cá hấp với gừng, sả, hành lá',
    commonPortion: {
      description: '1 miếng cá vừa',
      weight: 150,
    },
    mainIngredients: ['Cá', 'Gừng', 'Sả', 'Hành lá'],
    nutrition: {
      calories: 150,
      protein: 25,
      carbs: 2,
      fat: 4,
      fiber: 0.5,
      sodium: 100,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0.5,
        assessment: 'excellent',
        notes: 'GL rất thấp. Protein tốt, không có carb',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình. Chọn cá đồng tốt hơn',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Cá có kali và phốt pho trung bình',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp nếu không chấm nhiều nước mắm',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Cá rất tốt cho tim mạch, có omega-3',
      },
    },
  },
  {
    id: 'ga-luoc',
    name: 'Gà luộc',
    nameEn: 'Boiled chicken',
    category: 'steamed',
    description: 'Thịt gà luộc, bỏ da',
    commonPortion: {
      description: '1 phần vừa',
      weight: 100,
    },
    mainIngredients: ['Thịt gà', 'Nước'],
    nutrition: {
      calories: 165,
      protein: 31,
      carbs: 0,
      fat: 3.6,
      fiber: 0,
      sodium: 74,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0,
        assessment: 'excellent',
        notes: 'Không có carb, protein tốt',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình. Bỏ da, bỏ nước luộc',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp nếu không chấm muối',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Thịt gà nạc (bỏ da) rất tốt cho tim mạch',
      },
    },
  },
];

/**
 * Search dishes by name
 */
export function searchDishes(query: string): VietnameseDish[] {
  if (!query.trim()) return [];

  const lowerQuery = query.toLowerCase();
  return vietnameseDishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(lowerQuery) ||
      dish.nameEn?.toLowerCase().includes(lowerQuery) ||
      dish.description.toLowerCase().includes(lowerQuery)
  );
}

/**
 * Get dishes by category
 */
export function getDishesByCategory(category: DishCategory): VietnameseDish[] {
  return vietnameseDishes.filter((dish) => dish.category === category);
}

/**
 * Get dish by ID
 */
export function getDishById(id: string): VietnameseDish | undefined {
  return vietnameseDishes.find((dish) => dish.id === id);
}

/**
 * Get dishes suitable for disease
 */
export function getDishesByDisease(
  disease: 'diabetes' | 'gout' | 'kidney' | 'hypertension' | 'cardiovascular',
  level: 'excellent' | 'good' | 'moderate' | 'poor' = 'good'
): VietnameseDish[] {
  return vietnameseDishes.filter((dish) => {
    const assessment = dish.diseaseAssessment[disease];
    if (!assessment) return false;
    return assessment.assessment === level;
  });
}

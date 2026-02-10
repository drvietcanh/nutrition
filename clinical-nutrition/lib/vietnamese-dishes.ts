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
  // ========== BỔ SUNG MÓN ĂN MỚI ==========
  {
    id: 'canh-kho-qua',
    name: 'Canh khổ qua',
    nameEn: 'Bitter melon soup',
    category: 'soups',
    description: 'Canh khổ qua nhồi thịt',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Khổ qua', 'Thịt heo', 'Nước dùng'],
    nutrition: {
      calories: 100,
      protein: 12,
      carbs: 5,
      fat: 3,
      fiber: 2,
      sodium: 500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp. Khổ qua tốt cho đái tháo đường',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt heo có purin cao. Có thể thay bằng đậu phụ',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri trung bình. Nên nấu ít muối',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Thịt heo có cholesterol. Chọn thịt nạc',
      },
    },
    adjustmentTips: {
      gout: ['Thay thịt heo bằng đậu phụ'],
      hypertension: ['Nấu ít muối, nhiều khổ qua'],
    },
  },
  {
    id: 'canh-rau-muong',
    name: 'Canh rau muống',
    nameEn: 'Water spinach soup',
    category: 'soups',
    description: 'Canh rau muống nấu với tôm hoặc thịt',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Rau muống', 'Tôm/Thịt', 'Nước dùng'],
    nutrition: {
      calories: 60,
      protein: 8,
      carbs: 4,
      fat: 1,
      fiber: 2,
      sodium: 400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp. Nhiều chất xơ',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Tôm có purin cao. Có thể chỉ nấu rau',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Rau muống có kali cao',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu nấu ít muối',
      },
    },
  },
  {
    id: 'ca-kho-to',
    name: 'Cá kho tộ',
    nameEn: 'Braised fish in clay pot',
    category: 'rice-dishes',
    description: 'Cá kho tộ với nước mắm, đường, ớt',
    commonPortion: {
      description: '1 phần vừa',
      weight: 150,
    },
    mainIngredients: ['Cá', 'Nước mắm', 'Đường', 'Ớt'],
    nutrition: {
      calories: 180,
      protein: 25,
      carbs: 5,
      fat: 6,
      fiber: 0,
      sodium: 1500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'good',
        notes: 'GL thấp. Nên giảm đường khi nấu',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao từ nước mắm. Nên giảm muối',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Cá tốt cho tim mạch',
      },
    },
    adjustmentTips: {
      hypertension: ['Giảm nước mắm, dùng nhiều ớt và gừng thay muối'],
    },
  },
  {
    id: 'tom-kho',
    name: 'Tôm kho',
    nameEn: 'Braised shrimp',
    category: 'rice-dishes',
    description: 'Tôm kho với nước mắm, đường',
    commonPortion: {
      description: '1 phần vừa',
      weight: 100,
    },
    mainIngredients: ['Tôm', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 120,
      protein: 20,
      carbs: 3,
      fat: 2,
      fiber: 0,
      sodium: 1200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'good',
        notes: 'GL thấp. Nên giảm đường',
      },
      gout: {
        assessment: 'poor',
        notes: 'Tôm có purin cao. Nên hạn chế',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước mắm',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Tôm có cholesterol. Nên ăn vừa phải',
      },
    },
  },
  {
    id: 'rau-muong-xao',
    name: 'Rau muống xào',
    nameEn: 'Stir-fried water spinach',
    category: 'stir-fried',
    description: 'Rau muống xào tỏi',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 150,
    },
    mainIngredients: ['Rau muống', 'Tỏi', 'Dầu ăn'],
    nutrition: {
      calories: 70,
      protein: 3,
      carbs: 5,
      fat: 4,
      fiber: 2,
      sodium: 150,
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
      kidney: {
        assessment: 'moderate',
        notes: 'Rau muống có kali cao',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri thấp nếu xào ít muối',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Rau tốt cho tim mạch',
      },
    },
  },
  {
    id: 'thit-bo-xao',
    name: 'Thịt bò xào',
    nameEn: 'Stir-fried beef',
    category: 'stir-fried',
    description: 'Thịt bò xào với rau củ',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 150,
    },
    mainIngredients: ['Thịt bò', 'Rau củ', 'Dầu ăn'],
    nutrition: {
      calories: 250,
      protein: 25,
      carbs: 8,
      fat: 12,
      fiber: 2,
      sodium: 600,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'good',
        notes: 'GL thấp. Nhiều đạm, ít carb',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt bò có purin cao. Nên hạn chế',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Thịt bò có cholesterol. Chọn thịt nạc',
      },
    },
  },
  {
    id: 'mi-xao',
    name: 'Mì xào',
    nameEn: 'Stir-fried noodles',
    category: 'stir-fried',
    description: 'Mì xào với thịt và rau củ',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 250,
    },
    mainIngredients: ['Mì', 'Thịt', 'Rau củ', 'Dầu ăn'],
    nutrition: {
      calories: 450,
      protein: 20,
      carbs: 60,
      fat: 15,
      fiber: 2,
      sodium: 800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 15,
        assessment: 'moderate',
        notes: 'GL trung bình. Nên ăn nhiều rau, ít mì',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
    },
  },
  {
    id: 'thit-nuong',
    name: 'Thịt nướng',
    nameEn: 'Grilled meat',
    category: 'stir-fried',
    description: 'Thịt heo/bò nướng',
    commonPortion: {
      description: '1 phần vừa',
      weight: 100,
    },
    mainIngredients: ['Thịt heo/bò', 'Gia vị'],
    nutrition: {
      calories: 250,
      protein: 25,
      carbs: 2,
      fat: 15,
      fiber: 0,
      sodium: 500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0.5,
        assessment: 'good',
        notes: 'GL rất thấp. Nhiều đạm',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt có purin cao. Nên hạn chế',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Thịt mỡ có cholesterol và chất béo bão hòa cao',
      },
    },
  },
  {
    id: 'ca-nuong',
    name: 'Cá nướng',
    nameEn: 'Grilled fish',
    category: 'stir-fried',
    description: 'Cá nướng với gia vị',
    commonPortion: {
      description: '1 con cá vừa',
      weight: 200,
    },
    mainIngredients: ['Cá', 'Gia vị'],
    nutrition: {
      calories: 200,
      protein: 30,
      carbs: 1,
      fat: 8,
      fiber: 0,
      sodium: 300,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0,
        assessment: 'excellent',
        notes: 'Không có carb. Protein tốt',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu không ướp nhiều muối',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Cá rất tốt cho tim mạch',
      },
    },
  },
  {
    id: 'goi-ga',
    name: 'Gỏi gà',
    nameEn: 'Chicken salad',
    category: 'salads',
    description: 'Gỏi gà với rau sống, nước mắm pha',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 200,
    },
    mainIngredients: ['Thịt gà', 'Rau sống', 'Nước mắm pha'],
    nutrition: {
      calories: 180,
      protein: 20,
      carbs: 8,
      fat: 6,
      fiber: 2,
      sodium: 600,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'excellent',
        notes: 'GL rất thấp. Nhiều rau, ít carb',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước mắm. Chấm ít',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà nạc tốt cho tim mạch',
      },
    },
  },
  {
    id: 'nom-dua-chuot',
    name: 'Nộm dưa chuột',
    nameEn: 'Cucumber salad',
    category: 'salads',
    description: 'Nộm dưa chuột với rau thơm, nước mắm pha',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 150,
    },
    mainIngredients: ['Dưa chuột', 'Rau thơm', 'Nước mắm pha'],
    nutrition: {
      calories: 40,
      protein: 1,
      carbs: 6,
      fat: 0.5,
      fiber: 1.5,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp. Nhiều nước, ít kcal',
      },
      gout: {
        assessment: 'excellent',
        notes: 'Rau có purin rất thấp',
      },
      kidney: {
        assessment: 'excellent',
        notes: 'Kali và phốt pho thấp',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu chấm ít nước mắm',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Rau củ rất tốt cho tim mạch',
      },
    },
  },
  {
    id: 'nuoc-mia',
    name: 'Nước mía',
    nameEn: 'Sugarcane juice',
    category: 'drinks',
    description: 'Nước mía ép',
    commonPortion: {
      description: '1 ly (250ml)',
      weight: 250,
    },
    mainIngredients: ['Mía'],
    nutrition: {
      calories: 100,
      protein: 0,
      carbs: 25,
      fat: 0,
      fiber: 0,
      sodium: 5,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 15,
        assessment: 'poor',
        notes: 'GL cao. Nhiều đường. Nên hạn chế',
      },
      kidney: {
        assessment: 'good',
        notes: 'Kali và phốt pho thấp',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
      },
    },
  },
  {
    id: 'nuoc-dua',
    name: 'Nước dừa',
    nameEn: 'Coconut water',
    category: 'drinks',
    description: 'Nước dừa tươi',
    commonPortion: {
      description: '1 trái (300ml)',
      weight: 300,
    },
    mainIngredients: ['Dừa'],
    nutrition: {
      calories: 60,
      protein: 1,
      carbs: 15,
      fat: 0,
      fiber: 0,
      sodium: 30,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 5,
        assessment: 'moderate',
        notes: 'GL trung bình. Có đường tự nhiên',
      },
      kidney: {
        assessment: 'poor',
        notes: 'Kali rất cao. Hạn chế với bệnh thận',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri thấp, kali cao - tốt cho THA',
      },
    },
  },
  {
    id: 'tra-da',
    name: 'Trà đá',
    nameEn: 'Iced tea',
    category: 'drinks',
    description: 'Trà đá không đường',
    commonPortion: {
      description: '1 ly (250ml)',
      weight: 250,
    },
    mainIngredients: ['Trà', 'Nước'],
    nutrition: {
      calories: 2,
      protein: 0,
      carbs: 0,
      fat: 0,
      fiber: 0,
      sodium: 3,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0,
        assessment: 'excellent',
        notes: 'Không có đường. Tốt cho đái tháo đường',
      },
      kidney: {
        assessment: 'excellent',
        notes: 'Kali và phốt pho thấp',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Trà tốt cho tim mạch',
      },
    },
  },
  {
    id: 'ca-phe',
    name: 'Cà phê',
    nameEn: 'Coffee',
    category: 'drinks',
    description: 'Cà phê đen hoặc cà phê sữa',
    commonPortion: {
      description: '1 ly nhỏ (50ml)',
      weight: 50,
    },
    mainIngredients: ['Cà phê', 'Sữa đặc (nếu có)', 'Đường (nếu có)'],
    nutrition: {
      calories: 25,
      protein: 1,
      carbs: 2,
      fat: 1,
      fiber: 0,
      sodium: 5,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0.5,
        assessment: 'good',
        notes: 'Cà phê đen không đường tốt. Cà phê sữa có đường nên hạn chế',
      },
      kidney: {
        assessment: 'good',
        notes: 'Kali và phốt pho thấp',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Caffeine có thể làm tăng huyết áp tạm thời',
      },
    },
    adjustmentTips: {
      diabetes: ['Uống cà phê đen không đường', 'Hạn chế cà phê sữa'],
      hypertension: ['Uống ít, không uống khi huyết áp cao'],
    },
  },
  // ========== BỔ SUNG THÊM MÓN ĂN ==========
  {
    id: 'bun-thit-nuong',
    name: 'Bún thịt nướng',
    nameEn: 'Grilled pork with vermicelli',
    category: 'pho-noodles',
    description: 'Bún với thịt heo nướng, nước mắm pha, rau sống',
    commonPortion: {
      description: '1 phần',
      weight: 250,
    },
    mainIngredients: ['Bún', 'Thịt heo nướng', 'Nước mắm pha', 'Rau sống'],
    nutrition: {
      calories: 450,
      protein: 25,
      carbs: 50,
      fat: 12,
      fiber: 2,
      sodium: 900,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 13,
        assessment: 'moderate',
        notes: 'GL trung bình. Nên ăn nhiều rau, ít bún',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt heo có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước mắm',
      },
    },
  },
  {
    id: 'bun-oc',
    name: 'Bún ốc',
    nameEn: 'Snail noodle soup',
    category: 'pho-noodles',
    description: 'Bún với ốc, nước dùng chua cay',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Bún', 'Ốc', 'Nước dùng', 'Rau thơm'],
    nutrition: {
      calories: 350,
      protein: 18,
      carbs: 48,
      fat: 8,
      fiber: 2,
      sodium: 1000,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 12,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Ốc có purin trung bình',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước dùng',
      },
    },
  },
  {
    id: 'mi-quang',
    name: 'Mì Quảng',
    nameEn: 'Quang noodles',
    category: 'pho-noodles',
    description: 'Mì Quảng với thịt, tôm, trứng, nước dùng',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Mì', 'Thịt', 'Tôm', 'Trứng', 'Nước dùng'],
    nutrition: {
      calories: 480,
      protein: 28,
      carbs: 55,
      fat: 15,
      fiber: 2,
      sodium: 1100,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 16,
        assessment: 'moderate',
        notes: 'GL trung bình. Nên ăn nhiều rau',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt và tôm có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước dùng',
      },
    },
  },
  {
    id: 'com-tam',
    name: 'Cơm tấm',
    nameEn: 'Broken rice',
    category: 'rice-dishes',
    description: 'Cơm tấm với sườn, chả, trứng',
    commonPortion: {
      description: '1 phần',
      weight: 300,
    },
    mainIngredients: ['Cơm tấm', 'Sườn', 'Chả', 'Trứng'],
    nutrition: {
      calories: 650,
      protein: 35,
      carbs: 70,
      fat: 20,
      fiber: 1,
      sodium: 1200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 38,
        assessment: 'poor',
        notes: 'GL cao do cơm. Nên giảm lượng cơm',
      },
      gout: {
        assessment: 'poor',
        notes: 'Sườn heo có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước mắm và muối',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Nhiều chất béo bão hòa từ sườn và chả',
      },
    },
  },
  {
    id: 'com-ga-xoi-mo',
    name: 'Cơm gà xôi mỡ',
    nameEn: 'Rice with chicken and sticky rice',
    category: 'rice-dishes',
    description: 'Cơm gà với xôi mỡ',
    commonPortion: {
      description: '1 phần',
      weight: 300,
    },
    mainIngredients: ['Cơm', 'Thịt gà', 'Xôi mỡ'],
    nutrition: {
      calories: 550,
      protein: 30,
      carbs: 65,
      fat: 15,
      fiber: 1,
      sodium: 400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 40,
        assessment: 'poor',
        notes: 'GL cao. Xôi mỡ có GI cao',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Xôi mỡ có chất béo bão hòa',
      },
    },
  },
  {
    id: 'com-chay',
    name: 'Cơm chay',
    nameEn: 'Vegetarian rice',
    category: 'rice-dishes',
    description: 'Cơm với các món chay',
    commonPortion: {
      description: '1 phần',
      weight: 300,
    },
    mainIngredients: ['Cơm', 'Đậu phụ', 'Rau củ'],
    nutrition: {
      calories: 400,
      protein: 15,
      carbs: 60,
      fat: 8,
      fiber: 3,
      sodium: 300,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 33,
        assessment: 'moderate',
        notes: 'GL cao do cơm. Nên giảm lượng cơm',
      },
      gout: {
        assessment: 'good',
        notes: 'Đậu phụ có purin thấp',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Thực phẩm chay tốt cho tim mạch',
      },
    },
  },
  {
    id: 'chao-ga',
    name: 'Cháo gà',
    nameEn: 'Chicken porridge',
    category: 'soups',
    description: 'Cháo gà với thịt gà, hành lá',
    commonPortion: {
      description: '1 bát cháo',
      weight: 300,
    },
    mainIngredients: ['Gạo', 'Thịt gà', 'Hành lá'],
    nutrition: {
      calories: 250,
      protein: 20,
      carbs: 35,
      fat: 5,
      fiber: 0.5,
      sodium: 400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 25,
        assessment: 'moderate',
        notes: 'GL trung bình. Cháo dễ tiêu hóa',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình. Bỏ nước luộc',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu không nêm muối',
      },
    },
  },
  {
    id: 'chao-ca',
    name: 'Cháo cá',
    nameEn: 'Fish porridge',
    category: 'soups',
    description: 'Cháo cá với cá, hành lá',
    commonPortion: {
      description: '1 bát cháo',
      weight: 300,
    },
    mainIngredients: ['Gạo', 'Cá', 'Hành lá'],
    nutrition: {
      calories: 220,
      protein: 22,
      carbs: 30,
      fat: 4,
      fiber: 0.5,
      sodium: 350,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 22,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Cá tốt cho tim mạch',
      },
    },
  },
  {
    id: 'sup-cua',
    name: 'Súp cua',
    nameEn: 'Crab soup',
    category: 'soups',
    description: 'Súp cua với trứng, nấm',
    commonPortion: {
      description: '1 bát súp',
      weight: 200,
    },
    mainIngredients: ['Cua', 'Trứng', 'Nấm', 'Bột năng'],
    nutrition: {
      calories: 150,
      protein: 15,
      carbs: 12,
      fat: 5,
      fiber: 1,
      sodium: 800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 4,
        assessment: 'good',
        notes: 'GL thấp',
      },
      gout: {
        assessment: 'poor',
        notes: 'Cua có purin cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Cua có cholesterol',
      },
    },
  },
  {
    id: 'canh-bi-do',
    name: 'Canh bí đỏ',
    nameEn: 'Pumpkin soup',
    category: 'soups',
    description: 'Canh bí đỏ với thịt hoặc tôm',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Bí đỏ', 'Thịt/Tôm', 'Nước dùng'],
    nutrition: {
      calories: 80,
      protein: 8,
      carbs: 10,
      fat: 2,
      fiber: 2,
      sodium: 400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 3,
        assessment: 'good',
        notes: 'GL thấp. Bí đỏ tốt cho đái tháo đường',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Bí đỏ có kali trung bình',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp nếu nấu ít muối',
      },
    },
  },
  {
    id: 'canh-ngot',
    name: 'Canh ngót',
    nameEn: 'Sweet leaf soup',
    category: 'soups',
    description: 'Canh rau ngót với thịt băm',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Rau ngót', 'Thịt băm', 'Nước dùng'],
    nutrition: {
      calories: 70,
      protein: 10,
      carbs: 5,
      fat: 1,
      fiber: 2,
      sodium: 350,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp. Rau ngót tốt',
      },
      kidney: {
        assessment: 'poor',
        notes: 'Rau ngót có kali rất cao',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp',
      },
    },
  },
  {
    id: 'dau-phu-xao-ca-chua',
    name: 'Đậu phụ xào cà chua',
    nameEn: 'Tofu stir-fried with tomato',
    category: 'stir-fried',
    description: 'Đậu phụ xào với cà chua',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 200,
    },
    mainIngredients: ['Đậu phụ', 'Cà chua', 'Dầu ăn'],
    nutrition: {
      calories: 150,
      protein: 12,
      carbs: 8,
      fat: 8,
      fiber: 2,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'excellent',
        notes: 'GL rất thấp. Đậu phụ tốt',
      },
      gout: {
        assessment: 'excellent',
        notes: 'Đậu phụ có purin thấp',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Đậu phụ có phốt pho trung bình',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri thấp',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Đậu phụ tốt cho tim mạch',
      },
    },
  },
  {
    id: 'thit-kho-trung',
    name: 'Thịt kho trứng',
    nameEn: 'Braised pork with eggs',
    category: 'rice-dishes',
    description: 'Thịt heo kho với trứng',
    commonPortion: {
      description: '1 phần vừa',
      weight: 150,
    },
    mainIngredients: ['Thịt heo', 'Trứng', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 320,
      protein: 28,
      carbs: 6,
      fat: 20,
      fiber: 0,
      sodium: 1600,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'moderate',
        notes: 'GL thấp nhưng có đường',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt heo có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Thịt mỡ và lòng đỏ trứng có cholesterol cao',
      },
    },
  },
  {
    id: 'ca-chien',
    name: 'Cá chiên',
    nameEn: 'Fried fish',
    category: 'stir-fried',
    description: 'Cá chiên vàng',
    commonPortion: {
      description: '1 con cá vừa',
      weight: 150,
    },
    mainIngredients: ['Cá', 'Dầu ăn'],
    nutrition: {
      calories: 250,
      protein: 28,
      carbs: 2,
      fat: 14,
      fiber: 0,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0.5,
        assessment: 'good',
        notes: 'GL rất thấp',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Chiên nhiều dầu. Nên hấp thay vì chiên',
      },
    },
  },
  {
    id: 'ga-xe-phay',
    name: 'Gà xé phay',
    nameEn: 'Shredded chicken',
    category: 'salads',
    description: 'Gà xé phay với rau sống, nước mắm pha',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 200,
    },
    mainIngredients: ['Thịt gà', 'Rau sống', 'Nước mắm pha'],
    nutrition: {
      calories: 200,
      protein: 25,
      carbs: 6,
      fat: 7,
      fiber: 2,
      sodium: 500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'excellent',
        notes: 'GL rất thấp',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước mắm',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà nạc tốt',
      },
    },
  },
  {
    id: 'goi-cuon',
    name: 'Gỏi cuốn',
    nameEn: 'Fresh spring rolls',
    category: 'salads',
    description: 'Gỏi cuốn với tôm, thịt, rau sống',
    commonPortion: {
      description: '2 cuốn',
      weight: 150,
    },
    mainIngredients: ['Bánh tráng', 'Tôm', 'Thịt', 'Rau sống'],
    nutrition: {
      calories: 180,
      protein: 15,
      carbs: 20,
      fat: 4,
      fiber: 2,
      sodium: 400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 6,
        assessment: 'good',
        notes: 'GL thấp. Nhiều rau',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Tôm có purin cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước mắm',
      },
    },
  },
  {
    id: 'nem-ran',
    name: 'Nem rán',
    nameEn: 'Fried spring rolls',
    category: 'stir-fried',
    description: 'Nem rán với thịt, rau củ',
    commonPortion: {
      description: '2 cái',
      weight: 100,
    },
    mainIngredients: ['Bánh tráng', 'Thịt', 'Rau củ', 'Dầu ăn'],
    nutrition: {
      calories: 280,
      protein: 12,
      carbs: 25,
      fat: 15,
      fiber: 2,
      sodium: 500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 8,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt có purin',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Chiên nhiều dầu, nhiều chất béo',
      },
    },
  },
  {
    id: 'banh-xeo',
    name: 'Bánh xèo',
    nameEn: 'Vietnamese pancake',
    category: 'stir-fried',
    description: 'Bánh xèo với tôm, thịt, giá đỗ',
    commonPortion: {
      description: '1 cái vừa',
      weight: 200,
    },
    mainIngredients: ['Bột gạo', 'Tôm', 'Thịt', 'Giá đỗ', 'Dầu ăn'],
    nutrition: {
      calories: 350,
      protein: 15,
      carbs: 40,
      fat: 15,
      fiber: 2,
      sodium: 600,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 12,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Tôm và thịt có purin',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
    },
  },
  {
    id: 'banh-cuon',
    name: 'Bánh cuốn',
    nameEn: 'Steamed rice rolls',
    category: 'pho-noodles',
    description: 'Bánh cuốn với thịt băm, nước mắm',
    commonPortion: {
      description: '1 đĩa',
      weight: 200,
    },
    mainIngredients: ['Bánh cuốn', 'Thịt băm', 'Nước mắm'],
    nutrition: {
      calories: 280,
      protein: 15,
      carbs: 35,
      fat: 8,
      fiber: 1,
      sodium: 700,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 10,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước mắm',
      },
    },
  },
  {
    id: 'banh-mi',
    name: 'Bánh mì',
    nameEn: 'Vietnamese sandwich',
    category: 'pho-noodles',
    description: 'Bánh mì với thịt, pate, rau',
    commonPortion: {
      description: '1 ổ',
      weight: 150,
    },
    mainIngredients: ['Bánh mì', 'Thịt', 'Pate', 'Rau'],
    nutrition: {
      calories: 350,
      protein: 18,
      carbs: 45,
      fat: 12,
      fiber: 2,
      sodium: 900,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 17,
        assessment: 'moderate',
        notes: 'GL trung bình. Bánh mì trắng có GI cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ bánh mì và pate',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Pate có cholesterol',
      },
    },
  },
  {
    id: 'xoi-ga',
    name: 'Xôi gà',
    nameEn: 'Sticky rice with chicken',
    category: 'rice-dishes',
    description: 'Xôi với thịt gà',
    commonPortion: {
      description: '1 phần',
      weight: 200,
    },
    mainIngredients: ['Xôi', 'Thịt gà'],
    nutrition: {
      calories: 450,
      protein: 25,
      carbs: 55,
      fat: 10,
      fiber: 1,
      sodium: 300,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 30,
        assessment: 'poor',
        notes: 'GL cao. Xôi có GI cao',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà nạc tốt',
      },
    },
  },
  {
    id: 'xoi-lac',
    name: 'Xôi lạc',
    nameEn: 'Sticky rice with peanuts',
    category: 'rice-dishes',
    description: 'Xôi với lạc',
    commonPortion: {
      description: '1 phần',
      weight: 200,
    },
    mainIngredients: ['Xôi', 'Lạc'],
    nutrition: {
      calories: 480,
      protein: 15,
      carbs: 60,
      fat: 18,
      fiber: 3,
      sodium: 5,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 32,
        assessment: 'poor',
        notes: 'GL cao',
      },
      kidney: {
        assessment: 'poor',
        notes: 'Lạc có kali và phốt pho cao',
      },
      cardiovascular: {
        assessment: 'moderate',
        notes: 'Lạc có chất béo tốt nhưng nhiều kcal',
      },
    },
  },
  {
    id: 'che-dau-xanh',
    name: 'Chè đậu xanh',
    nameEn: 'Mung bean sweet soup',
    category: 'drinks',
    description: 'Chè đậu xanh với đường',
    commonPortion: {
      description: '1 bát',
      weight: 200,
    },
    mainIngredients: ['Đậu xanh', 'Đường', 'Nước cốt dừa'],
    nutrition: {
      calories: 200,
      protein: 8,
      carbs: 35,
      fat: 3,
      fiber: 4,
      sodium: 10,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 12,
        assessment: 'moderate',
        notes: 'GL trung bình. Có đường',
      },
      kidney: {
        assessment: 'poor',
        notes: 'Đậu xanh có kali và phốt pho rất cao',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
      },
    },
  },
  {
    id: 'che-dau-do',
    name: 'Chè đậu đỏ',
    nameEn: 'Red bean sweet soup',
    category: 'drinks',
    description: 'Chè đậu đỏ với đường',
    commonPortion: {
      description: '1 bát',
      weight: 200,
    },
    mainIngredients: ['Đậu đỏ', 'Đường', 'Nước cốt dừa'],
    nutrition: {
      calories: 220,
      protein: 10,
      carbs: 38,
      fat: 3,
      fiber: 5,
      sodium: 8,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 13,
        assessment: 'moderate',
        notes: 'GL trung bình. Có đường',
      },
      kidney: {
        assessment: 'poor',
        notes: 'Đậu đỏ có kali và phốt pho rất cao',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
      },
    },
  },
  {
    id: 'sinh-to',
    name: 'Sinh tố',
    nameEn: 'Smoothie',
    category: 'drinks',
    description: 'Sinh tố trái cây với sữa, đường',
    commonPortion: {
      description: '1 ly (250ml)',
      weight: 250,
    },
    mainIngredients: ['Trái cây', 'Sữa', 'Đường'],
    nutrition: {
      calories: 180,
      protein: 5,
      carbs: 35,
      fat: 3,
      fiber: 2,
      sodium: 50,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 18,
        assessment: 'moderate',
        notes: 'GL trung bình-cao. Có đường và sữa',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Sữa có phốt pho. Trái cây có kali',
      },
    },
    adjustmentTips: {
      diabetes: ['Không thêm đường', 'Dùng sữa không đường', 'Chọn trái cây ít đường'],
    },
  },
  // ========== BỔ SUNG THÊM MÓN ĂN (TIẾP) ==========
  {
    id: 'com-rang',
    name: 'Cơm rang',
    nameEn: 'Fried rice',
    category: 'rice-dishes',
    description: 'Cơm rang với thịt, trứng, rau củ',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 250,
    },
    mainIngredients: ['Cơm', 'Thịt', 'Trứng', 'Rau củ', 'Dầu ăn'],
    nutrition: {
      calories: 500,
      protein: 20,
      carbs: 60,
      fat: 18,
      fiber: 2,
      sodium: 800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 35,
        assessment: 'poor',
        notes: 'GL cao. Cơm rang có GI cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
    },
  },
  {
    id: 'com-chien-duong-chau',
    name: 'Cơm chiên Dương Châu',
    nameEn: 'Yangzhou fried rice',
    category: 'rice-dishes',
    description: 'Cơm chiên với tôm, thịt, trứng, rau củ',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 250,
    },
    mainIngredients: ['Cơm', 'Tôm', 'Thịt', 'Trứng', 'Rau củ'],
    nutrition: {
      calories: 520,
      protein: 25,
      carbs: 62,
      fat: 18,
      fiber: 2,
      sodium: 900,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 36,
        assessment: 'poor',
        notes: 'GL cao',
      },
      gout: {
        assessment: 'poor',
        notes: 'Tôm có purin cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
    },
  },
  {
    id: 'bun-ga-nuong',
    name: 'Bún gà nướng',
    nameEn: 'Grilled chicken with vermicelli',
    category: 'pho-noodles',
    description: 'Bún với gà nướng, nước mắm pha, rau sống',
    commonPortion: {
      description: '1 phần',
      weight: 250,
    },
    mainIngredients: ['Bún', 'Gà nướng', 'Nước mắm pha', 'Rau sống'],
    nutrition: {
      calories: 400,
      protein: 28,
      carbs: 48,
      fat: 10,
      fiber: 2,
      sodium: 700,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 12,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước mắm',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà nạc tốt',
      },
    },
  },
  {
    id: 'bun-mam',
    name: 'Bún mắm',
    nameEn: 'Fermented fish noodle soup',
    category: 'pho-noodles',
    description: 'Bún với mắm, cá, tôm, rau sống',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Bún', 'Mắm', 'Cá', 'Tôm', 'Rau sống'],
    nutrition: {
      calories: 420,
      protein: 30,
      carbs: 50,
      fat: 10,
      fiber: 2,
      sodium: 1500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 13,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'poor',
        notes: 'Cá và tôm có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao từ mắm',
      },
    },
  },
  {
    id: 'hu-tieu-nam-vang',
    name: 'Hủ tiếu Nam Vang',
    nameEn: 'Phnom Penh noodles',
    category: 'pho-noodles',
    description: 'Hủ tiếu với thịt, tôm, trứng, nước dùng',
    commonPortion: {
      description: '1 tô vừa',
      weight: 300,
    },
    mainIngredients: ['Hủ tiếu', 'Thịt', 'Tôm', 'Trứng', 'Nước dùng'],
    nutrition: {
      calories: 450,
      protein: 30,
      carbs: 52,
      fat: 12,
      fiber: 2,
      sodium: 1100,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 13,
        assessment: 'moderate',
        notes: 'GL trung bình',
      },
      gout: {
        assessment: 'poor',
        notes: 'Tôm có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao từ nước dùng',
      },
    },
  },
  {
    id: 'canh-chua-tom',
    name: 'Canh chua tôm',
    nameEn: 'Sour shrimp soup',
    category: 'soups',
    description: 'Canh chua với tôm, cà chua, dứa, đậu bắp',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Tôm', 'Cà chua', 'Dứa', 'Đậu bắp', 'Rau thơm'],
    nutrition: {
      calories: 100,
      protein: 12,
      carbs: 6,
      fat: 2,
      fiber: 2,
      sodium: 500,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'good',
        notes: 'GL thấp',
      },
      gout: {
        assessment: 'poor',
        notes: 'Tôm có purin cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
    },
  },
  {
    id: 'canh-rau-cai',
    name: 'Canh rau cải',
    nameEn: 'Mustard greens soup',
    category: 'soups',
    description: 'Canh rau cải với thịt băm',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Rau cải', 'Thịt băm', 'Nước dùng'],
    nutrition: {
      calories: 50,
      protein: 6,
      carbs: 4,
      fat: 1,
      fiber: 2,
      sodium: 300,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt có purin',
      },
      kidney: {
        assessment: 'moderate',
        notes: 'Rau cải có kali trung bình',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri thấp',
      },
    },
  },
  {
    id: 'canh-mang',
    name: 'Canh măng',
    nameEn: 'Bamboo shoot soup',
    category: 'soups',
    description: 'Canh măng với thịt',
    commonPortion: {
      description: '1 bát canh',
      weight: 200,
    },
    mainIngredients: ['Măng', 'Thịt', 'Nước dùng'],
    nutrition: {
      calories: 60,
      protein: 8,
      carbs: 5,
      fat: 1,
      fiber: 2,
      sodium: 400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp',
      },
    },
  },
  {
    id: 'thit-heo-xao-chua-ngot',
    name: 'Thịt heo xào chua ngọt',
    nameEn: 'Sweet and sour pork',
    category: 'stir-fried',
    description: 'Thịt heo xào với cà chua, dứa, nước sốt chua ngọt',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 200,
    },
    mainIngredients: ['Thịt heo', 'Cà chua', 'Dứa', 'Nước sốt', 'Dầu ăn'],
    nutrition: {
      calories: 300,
      protein: 22,
      carbs: 20,
      fat: 15,
      fiber: 2,
      sodium: 800,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 6,
        assessment: 'moderate',
        notes: 'GL trung bình. Có đường trong nước sốt',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt heo có purin cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước sốt',
      },
    },
  },
  {
    id: 'ga-xao-sa-ot',
    name: 'Gà xào sả ớt',
    nameEn: 'Chicken stir-fried with lemongrass and chili',
    category: 'stir-fried',
    description: 'Gà xào với sả, ớt, gia vị',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 200,
    },
    mainIngredients: ['Thịt gà', 'Sả', 'Ớt', 'Gia vị', 'Dầu ăn'],
    nutrition: {
      calories: 250,
      protein: 28,
      carbs: 5,
      fat: 12,
      fiber: 1,
      sodium: 600,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Thịt gà có purin trung bình',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri trung bình',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Thịt gà nạc tốt',
      },
    },
  },
  {
    id: 'ca-loc-kho-tieu',
    name: 'Cá lóc kho tiêu',
    nameEn: 'Braised snakehead fish with pepper',
    category: 'rice-dishes',
    description: 'Cá lóc kho với tiêu, nước mắm',
    commonPortion: {
      description: '1 phần vừa',
      weight: 150,
    },
    mainIngredients: ['Cá lóc', 'Tiêu', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 170,
      protein: 24,
      carbs: 3,
      fat: 6,
      fiber: 0,
      sodium: 1400,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'good',
        notes: 'GL thấp',
      },
      gout: {
        assessment: 'moderate',
        notes: 'Cá có purin trung bình',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri rất cao',
      },
      cardiovascular: {
        assessment: 'good',
        notes: 'Cá tốt cho tim mạch',
      },
    },
  },
  {
    id: 'tom-rim',
    name: 'Tôm rim',
    nameEn: 'Braised shrimp',
    category: 'rice-dishes',
    description: 'Tôm rim với nước mắm, đường',
    commonPortion: {
      description: '1 phần vừa',
      weight: 100,
    },
    mainIngredients: ['Tôm', 'Nước mắm', 'Đường'],
    nutrition: {
      calories: 110,
      protein: 18,
      carbs: 2,
      fat: 2,
      fiber: 0,
      sodium: 1100,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0.5,
        assessment: 'good',
        notes: 'GL thấp',
      },
      gout: {
        assessment: 'poor',
        notes: 'Tôm có purin cao',
      },
      hypertension: {
        assessment: 'poor',
        notes: 'Natri cao',
      },
    },
  },
  {
    id: 'rau-luoc',
    name: 'Rau luộc',
    nameEn: 'Boiled vegetables',
    category: 'steamed',
    description: 'Rau luộc với nước',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 150,
    },
    mainIngredients: ['Rau', 'Nước'],
    nutrition: {
      calories: 30,
      protein: 2,
      carbs: 5,
      fat: 0.3,
      fiber: 2,
      sodium: 10,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 1,
        assessment: 'excellent',
        notes: 'GL rất thấp',
      },
      gout: {
        assessment: 'excellent',
        notes: 'Rau có purin rất thấp',
      },
      kidney: {
        assessment: 'good',
        notes: 'Tùy loại rau - một số có kali cao',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
      },
      cardiovascular: {
        assessment: 'excellent',
        notes: 'Rau rất tốt cho tim mạch',
      },
    },
  },
  {
    id: 'thit-luoc',
    name: 'Thịt luộc',
    nameEn: 'Boiled meat',
    category: 'steamed',
    description: 'Thịt heo/bò luộc',
    commonPortion: {
      description: '1 phần vừa',
      weight: 100,
    },
    mainIngredients: ['Thịt', 'Nước'],
    nutrition: {
      calories: 200,
      protein: 25,
      carbs: 0,
      fat: 10,
      fiber: 0,
      sodium: 50,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 0,
        assessment: 'excellent',
        notes: 'Không có carb',
      },
      gout: {
        assessment: 'poor',
        notes: 'Thịt có purin cao. Bỏ nước luộc',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp nếu không chấm muối',
      },
    },
    adjustmentTips: {
      gout: ['Bỏ nước luộc (có nhiều purin)', 'Luộc 2 lần, bỏ nước đầu'],
    },
  },
  {
    id: 'goi-suon',
    name: 'Gỏi sườn',
    nameEn: 'Pork rib salad',
    category: 'salads',
    description: 'Gỏi sườn với rau sống, nước mắm pha',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 200,
    },
    mainIngredients: ['Sườn', 'Rau sống', 'Nước mắm pha'],
    nutrition: {
      calories: 280,
      protein: 22,
      carbs: 8,
      fat: 16,
      fiber: 2,
      sodium: 700,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'good',
        notes: 'GL thấp',
      },
      gout: {
        assessment: 'poor',
        notes: 'Sườn có purin cao',
      },
      hypertension: {
        assessment: 'moderate',
        notes: 'Natri từ nước mắm',
      },
      cardiovascular: {
        assessment: 'poor',
        notes: 'Sườn có nhiều chất béo bão hòa',
      },
    },
  },
  {
    id: 'nom-hoa-chuoi',
    name: 'Nộm hoa chuối',
    nameEn: 'Banana flower salad',
    category: 'salads',
    description: 'Nộm hoa chuối với rau thơm, nước mắm pha',
    commonPortion: {
      description: '1 đĩa vừa',
      weight: 150,
    },
    mainIngredients: ['Hoa chuối', 'Rau thơm', 'Nước mắm pha'],
    nutrition: {
      calories: 50,
      protein: 2,
      carbs: 8,
      fat: 0.5,
      fiber: 3,
      sodium: 200,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 2,
        assessment: 'excellent',
        notes: 'GL rất thấp',
      },
      gout: {
        assessment: 'excellent',
        notes: 'Rau có purin rất thấp',
      },
      hypertension: {
        assessment: 'good',
        notes: 'Natri thấp',
      },
    },
  },
  {
    id: 'nuoc-chanh',
    name: 'Nước chanh',
    nameEn: 'Lemonade',
    category: 'drinks',
    description: 'Nước chanh với đường',
    commonPortion: {
      description: '1 ly (250ml)',
      weight: 250,
    },
    mainIngredients: ['Chanh', 'Đường', 'Nước'],
    nutrition: {
      calories: 100,
      protein: 0,
      carbs: 25,
      fat: 0,
      fiber: 0,
      sodium: 2,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 15,
        assessment: 'moderate',
        notes: 'GL trung bình. Có đường',
      },
      kidney: {
        assessment: 'excellent',
        notes: 'Kali và phốt pho thấp',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
      },
    },
    adjustmentTips: {
      diabetes: ['Không thêm đường', 'Dùng đường ăn kiêng'],
    },
  },
  {
    id: 'nuoc-sam',
    name: 'Nước sâm',
    nameEn: 'Herbal drink',
    category: 'drinks',
    description: 'Nước sâm với các loại thảo mộc',
    commonPortion: {
      description: '1 ly (250ml)',
      weight: 250,
    },
    mainIngredients: ['Thảo mộc', 'Đường', 'Nước'],
    nutrition: {
      calories: 80,
      protein: 0,
      carbs: 20,
      fat: 0,
      fiber: 0,
      sodium: 5,
    },
    diseaseAssessment: {
      diabetes: {
        glycemicLoad: 10,
        assessment: 'moderate',
        notes: 'GL trung bình. Có đường',
      },
      hypertension: {
        assessment: 'excellent',
        notes: 'Natri rất thấp',
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

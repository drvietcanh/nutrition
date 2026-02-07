/**
 * Article Metadata System
 * 
 * Centralized system for managing article metadata, including:
 * - Article information (title, description, category, tags)
 * - Related articles
 * - Tool links
 * - Search and navigation support
 */

export type ArticleLevel = 'foundation' | 'intermediate' | 'advanced';
export type TargetAudience = 'professional' | 'general' | 'both';
export type ArticleCategory = 
  | 'clinical-foundations'
  | 'chronic-diseases'
  | 'vitamins-minerals'
  | 'daily-practices'
  | 'life-stages'
  | 'special-topics'
  | 'general-nutrition';

export interface ArticleMetadata {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  tags: string[];
  relatedArticles: string[]; // slugs of related articles
  toolLinks?: string[]; // tool slugs
  level: ArticleLevel;
  targetAudience: TargetAudience;
  href: string; // full path to article
  icon?: string; // lucide-react icon name
}

/**
 * All article metadata
 * This should be kept in sync with actual articles
 */
export const articles: ArticleMetadata[] = [
  // Clinical Foundations
  {
    slug: 'myths-in-clinical-nutrition',
    title: 'Hiểu lầm & Quan niệm Sai trong Dinh dưỡng Lâm sàng',
    description: 'Điều chỉnh dựa trên bằng chứng cho các hiểu lầm phổ biến',
    category: 'clinical-foundations',
    tags: ['myths', 'misconceptions', 'clinical', 'evidence-based'],
    relatedArticles: ['assessment-process', 'needs-estimation', 'why-intake-falls-short'],
    level: 'foundation',
    targetAudience: 'professional',
    href: '/knowledge/myths-in-clinical-nutrition',
  },
  {
    slug: 'assessment-process',
    title: 'Quy trình Đánh giá Dinh dưỡng Lâm sàng',
    description: 'Hướng dẫn đầy đủ về đánh giá dinh dưỡng lâm sàng',
    category: 'clinical-foundations',
    tags: ['assessment', 'screening', 'evaluation', 'clinical'],
    relatedArticles: ['nutrition-assessment-overview', 'needs-estimation', 'intake-assessment'],
    toolLinks: ['malnutrition-screening', 'energy-protein-calculator', 'intake-assessment'],
    level: 'foundation',
    targetAudience: 'professional',
    href: '/knowledge/assessment-process',
  },
  {
    slug: 'needs-estimation',
    title: 'Ước tính Nhu cầu Dinh dưỡng',
    description: 'Vì sao khoảng quan trọng hơn số chính xác',
    category: 'clinical-foundations',
    tags: ['needs', 'estimation', 'calculation', 'requirements'],
    relatedArticles: ['assessment-process', 'why-intake-falls-short', 'intake-assessment'],
    toolLinks: ['energy-protein-calculator'],
    level: 'foundation',
    targetAudience: 'professional',
    href: '/knowledge/needs-estimation',
  },
  {
    slug: 'intake-assessment',
    title: 'Đánh giá Lượng Ăn',
    description: 'Hiểu người bệnh thực sự nhận được gì',
    category: 'clinical-foundations',
    tags: ['intake', 'assessment', 'consumption', 'evaluation'],
    relatedArticles: ['assessment-process', 'why-intake-falls-short', 'needs-estimation'],
    toolLinks: ['intake-assessment'],
    level: 'foundation',
    targetAudience: 'professional',
    href: '/knowledge/intake-assessment',
  },
  {
    slug: 'why-intake-falls-short',
    title: 'Vì sao Lượng Ăn Thường Thiếu',
    description: 'Các yếu tố thực tế tạo ra khoảng cách',
    category: 'clinical-foundations',
    tags: ['intake', 'gaps', 'barriers', 'clinical'],
    relatedArticles: ['intake-assessment', 'needs-estimation', 'assessment-process'],
    level: 'foundation',
    targetAudience: 'professional',
    href: '/knowledge/why-intake-falls-short',
  },

  // General Nutrition
  {
    slug: 'calories-energy',
    title: 'Hiểu về Calo và Năng lượng',
    description: 'Giải thích calo, TDEE, BMR với ví dụ thực tế. Hiểu về năng lượng trong thực phẩm',
    category: 'general-nutrition',
    tags: ['calories', 'energy', 'TDEE', 'BMR', 'metabolism', 'weight-management'],
    relatedArticles: ['macronutrients-overview', 'healthy-weight-management', 'meal-planning'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/calories-energy',
  },
  {
    slug: 'healthy-plate',
    title: 'Cân bằng Bữa ăn: Đĩa Ăn Lành mạnh',
    description: 'Hướng dẫn cách cân bằng bữa ăn với đĩa ăn lành mạnh. Visual guide với color coding',
    category: 'general-nutrition',
    tags: ['healthy-plate', 'meal-balance', 'nutrition', 'meal-planning'],
    relatedArticles: ['macronutrients-overview', 'meal-planning', 'portion-sizes'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/healthy-plate',
  },
  {
    slug: 'protein-sources-needs',
    title: 'Protein: Nguồn và Nhu cầu',
    description: 'Hiểu về protein - nguồn protein tốt, nhu cầu, và ví dụ thực tế',
    category: 'general-nutrition',
    tags: ['protein', 'sources', 'needs', 'meat', 'fish', 'beans'],
    relatedArticles: ['macronutrients-overview', 'healthy-plate', 'portion-sizes', 'elderly-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/protein-sources-needs',
  },
  {
    slug: 'macronutrients-overview',
    title: 'Tổng quan về các Chất Dinh dưỡng Đa lượng',
    description: 'Tổng quan về carbohydrate, protein, và chất béo',
    category: 'general-nutrition',
    tags: ['macronutrients', 'carbohydrates', 'protein', 'fats', 'basics'],
    relatedArticles: ['carbohydrates', 'dietary-fats', 'hydration', 'calories-energy'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/macronutrients-overview',
  },
  {
    slug: 'carbohydrates',
    title: 'Carbohydrate (Tinh bột và Đường)',
    description: 'Hiểu về carbohydrate - nguồn năng lượng chính',
    category: 'general-nutrition',
    tags: ['carbohydrates', 'sugar', 'energy', 'diabetes', 'glycemic-index'],
    relatedArticles: ['macronutrients-overview', 'glycemic-index-load', 'diabetes-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/carbohydrates',
  },
  {
    slug: 'dietary-fats',
    title: 'Chất béo trong Chế độ Ăn',
    description: 'Hiểu các loại chất béo và ảnh hưởng sức khỏe',
    category: 'general-nutrition',
    tags: ['fats', 'cholesterol', 'heart-health', 'omega-3'],
    relatedArticles: ['macronutrients-overview', 'hypertension-nutrition', 'heart-failure-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/dietary-fats',
  },
  {
    slug: 'dietary-fiber',
    title: 'Chất xơ trong Dinh dưỡng Lâm sàng',
    description: 'Hiểu về chất xơ hòa tan và không hòa tan, lợi ích sức khỏe',
    category: 'general-nutrition',
    tags: ['fiber', 'digestion', 'gut-health', 'diabetes'],
    relatedArticles: ['carbohydrates', 'diabetes-nutrition', 'gut-health-probiotics'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/dietary-fiber',
  },
  {
    slug: 'sodium-health',
    title: 'Natri (Muối) và Sức khỏe',
    description: 'Hiểu về natri trong chế độ ăn và cách giảm natri',
    category: 'general-nutrition',
    tags: ['sodium', 'salt', 'hypertension', 'heart-health'],
    relatedArticles: ['hypertension-nutrition', 'heart-failure-nutrition', 'ckd-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/sodium-health',
  },
  {
    slug: 'glycemic-index-load',
    title: 'Chỉ số Đường huyết (GI) và Tải lượng Đường huyết (GL)',
    description: 'Hiểu cách thực phẩm ảnh hưởng đến đường huyết',
    category: 'general-nutrition',
    tags: ['glycemic-index', 'diabetes', 'blood-sugar', 'carbohydrates'],
    relatedArticles: ['carbohydrates', 'diabetes-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/glycemic-index-load',
  },
  {
    slug: 'hydration',
    title: 'Hydration: Nước và Dịch',
    description: 'Hiểu về nhu cầu nước và hydration',
    category: 'general-nutrition',
    tags: ['hydration', 'water', 'fluids', 'health'],
    relatedArticles: ['ckd-nutrition', 'heart-failure-nutrition', 'elderly-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/hydration',
  },

  // Chronic Diseases
  {
    slug: 'cardiovascular-disease-nutrition',
    title: 'Dinh dưỡng trong Bệnh Tim mạch',
    description: 'Hướng dẫn dinh dưỡng tổng quan cho bệnh tim mạch. Nguyên tắc dinh dưỡng lành mạnh cho tim',
    category: 'chronic-diseases',
    tags: ['cardiovascular', 'heart-health', 'cholesterol', 'blood-pressure'],
    relatedArticles: ['hypertension-nutrition', 'heart-failure-nutrition', 'dietary-fats', 'sodium-health'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/cardiovascular-disease-nutrition',
  },
  {
    slug: 'diabetes-nutrition',
    title: 'Dinh dưỡng Đái tháo đường',
    description: 'Hướng dẫn về carbohydrate counting, quản lý đường huyết',
    category: 'chronic-diseases',
    tags: ['diabetes', 'blood-sugar', 'carbohydrates', 'insulin'],
    relatedArticles: ['carbohydrates', 'glycemic-index-load', 'hypertension-nutrition'],
    toolLinks: ['energy-protein-calculator'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/diabetes-nutrition',
  },
  {
    slug: 'hypertension-nutrition',
    title: 'Dinh dưỡng Tăng huyết áp',
    description: 'Hướng dẫn về DASH diet, quản lý natri và kali',
    category: 'chronic-diseases',
    tags: ['hypertension', 'blood-pressure', 'sodium', 'dash-diet'],
    relatedArticles: ['sodium-health', 'heart-failure-nutrition', 'dietary-fats'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/hypertension-nutrition',
  },
  {
    slug: 'heart-failure-nutrition',
    title: 'Dinh dưỡng Suy tim',
    description: 'Hướng dẫn về quản lý natri, dịch, và cân nặng trong suy tim',
    category: 'chronic-diseases',
    tags: ['heart-failure', 'sodium', 'fluids', 'cardiac'],
    relatedArticles: ['hypertension-nutrition', 'sodium-health', 'hydration'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/heart-failure-nutrition',
  },
  {
    slug: 'ckd-nutrition',
    title: 'Dinh dưỡng Bệnh thận mạn (CKD)',
    description: 'Hướng dẫn dinh dưỡng trong bệnh thận mạn theo giai đoạn',
    category: 'chronic-diseases',
    tags: ['ckd', 'kidney', 'protein', 'phosphorus', 'potassium'],
    relatedArticles: ['dialysis-nutrition', 'sodium-health', 'hydration'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/ckd-nutrition',
  },
  {
    slug: 'dialysis-nutrition',
    title: 'Dinh dưỡng Lọc máu',
    description: 'Hướng dẫn dinh dưỡng cho bệnh nhân lọc máu',
    category: 'chronic-diseases',
    tags: ['dialysis', 'kidney', 'protein', 'phosphorus'],
    relatedArticles: ['ckd-nutrition'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/dialysis-nutrition',
  },
  {
    slug: 'liver-disease-nutrition',
    title: 'Dinh dưỡng Bệnh gan mạn',
    description: 'Hướng dẫn dinh dưỡng trong bệnh gan mạn',
    category: 'chronic-diseases',
    tags: ['liver', 'protein', 'sodium', 'ascites'],
    relatedArticles: ['ckd-nutrition', 'sodium-health'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/liver-disease-nutrition',
  },
  {
    slug: 'copd-nutrition',
    title: 'Dinh dưỡng COPD',
    description: 'Hướng dẫn dinh dưỡng trong bệnh phổi tắc nghẽn mạn tính',
    category: 'chronic-diseases',
    tags: ['copd', 'lungs', 'energy', 'breathing'],
    relatedArticles: ['cancer-nutrition'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/copd-nutrition',
  },
  {
    slug: 'cancer-nutrition',
    title: 'Dinh dưỡng Ung thư',
    description: 'Hướng dẫn tổng quan về dinh dưỡng trong ung thư',
    category: 'chronic-diseases',
    tags: ['cancer', 'oncology', 'protein', 'energy', 'side-effects'],
    relatedArticles: ['copd-nutrition'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/cancer-nutrition',
  },
  {
    slug: 'ibd-nutrition',
    title: 'Dinh dưỡng Bệnh viêm ruột (IBD)',
    description: 'Hướng dẫn dinh dưỡng trong Crohn và Ulcerative Colitis',
    category: 'chronic-diseases',
    tags: ['ibd', 'crohn', 'colitis', 'digestion', 'fiber'],
    relatedArticles: ['dietary-fiber', 'gut-health-probiotics'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/ibd-nutrition',
  },
  {
    slug: 'dyslipidemia-nutrition',
    title: 'Dinh dưỡng Rối loạn Lipid máu',
    description: 'Hướng dẫn về quản lý chất béo, cholesterol, và triglycerides',
    category: 'chronic-diseases',
    tags: ['cholesterol', 'lipids', 'fats', 'heart-health'],
    relatedArticles: ['dietary-fats', 'heart-failure-nutrition'],
    level: 'intermediate',
    targetAudience: 'both',
    href: '/knowledge/dyslipidemia-nutrition',
  },

  // Vitamins & Minerals
  {
    slug: 'vitamin-c-immunity',
    title: 'Vitamin C và Miễn dịch',
    description: 'Hiểu về vitamin C - vitamin quan trọng cho hệ miễn dịch, chữa lành vết thương',
    category: 'vitamins-minerals',
    tags: ['vitamin-c', 'immunity', 'ascorbic-acid', 'antioxidants'],
    relatedArticles: ['antioxidants-foods', 'iron-anemia'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/vitamin-c-immunity',
  },
  {
    slug: 'vitamin-a-eye-health',
    title: 'Vitamin A và Sức khỏe Mắt',
    description: 'Hiểu về vitamin A - vitamin quan trọng cho sức khỏe mắt, hệ miễn dịch, và da',
    category: 'vitamins-minerals',
    tags: ['vitamin-a', 'eye-health', 'beta-carotene', 'retinol'],
    relatedArticles: ['antioxidants-foods', 'pregnancy-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/vitamin-a-eye-health',
  },
  {
    slug: 'magnesium-health',
    title: 'Magnesium và Sức khỏe',
    description: 'Hiểu về magnesium - khoáng chất quan trọng cho cơ bắp, thần kinh, tim mạch, và xương',
    category: 'vitamins-minerals',
    tags: ['magnesium', 'muscles', 'nerves', 'heart-health', 'bones', 'sleep'],
    relatedArticles: ['calcium-bone-health', 'nutrition-sleep'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/magnesium-health',
  },
  {
    slug: 'folate-pregnancy',
    title: 'Folate và Phụ nữ Mang thai',
    description: 'Hiểu về folate (axit folic) - vitamin quan trọng cho phụ nữ mang thai. Ngăn ngừa dị tật ống thần kinh',
    category: 'vitamins-minerals',
    tags: ['folate', 'folic-acid', 'pregnancy', 'neural-tube-defects', 'B9'],
    relatedArticles: ['pregnancy-nutrition', 'iron-anemia'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/folate-pregnancy',
  },
  {
    slug: 'vitamin-k-blood-clotting',
    title: 'Vitamin K và Đông máu',
    description: 'Hiểu về vitamin K - vitamin quan trọng cho đông máu và sức khỏe xương',
    category: 'vitamins-minerals',
    tags: ['vitamin-k', 'blood-clotting', 'warfarin', 'bones'],
    relatedArticles: ['calcium-bone-health'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/vitamin-k-blood-clotting',
  },
  {
    slug: 'vitamin-d',
    title: 'Vitamin D và Sức khỏe Xương',
    description: 'Hiểu về vitamin D - vai trò quan trọng trong sức khỏe xương',
    category: 'vitamins-minerals',
    tags: ['vitamin-d', 'bone-health', 'calcium', 'sunlight'],
    relatedArticles: ['calcium-bone-health', 'elderly-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/vitamin-d',
  },
  {
    slug: 'iron-anemia',
    title: 'Sắt và Thiếu máu',
    description: 'Hiểu về sắt - khoáng chất quan trọng để tạo máu',
    category: 'vitamins-minerals',
    tags: ['iron', 'anemia', 'blood', 'pregnancy'],
    relatedArticles: ['pregnancy-nutrition', 'vitamin-b12-energy'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/iron-anemia',
  },
  {
    slug: 'calcium-bone-health',
    title: 'Canxi và Sức khỏe Xương',
    description: 'Hiểu về canxi - khoáng chất quan trọng nhất cho xương',
    category: 'vitamins-minerals',
    tags: ['calcium', 'bone-health', 'osteoporosis'],
    relatedArticles: ['vitamin-d', 'elderly-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/calcium-bone-health',
  },
  {
    slug: 'vitamin-b12-energy',
    title: 'Vitamin B12 và Năng lượng',
    description: 'Hiểu về vitamin B12 - vitamin quan trọng cho năng lượng',
    category: 'vitamins-minerals',
    tags: ['vitamin-b12', 'energy', 'anemia', 'vegan'],
    relatedArticles: ['iron-anemia'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/vitamin-b12-energy',
  },
  {
    slug: 'potassium-blood-pressure',
    title: 'Kali và Huyết áp',
    description: 'Hiểu về kali - khoáng chất quan trọng giúp kiểm soát huyết áp',
    category: 'vitamins-minerals',
    tags: ['potassium', 'blood-pressure', 'hypertension', 'ckd'],
    relatedArticles: ['hypertension-nutrition', 'ckd-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/potassium-blood-pressure',
  },
  {
    slug: 'zinc-immunity',
    title: 'Kẽm và Miễn dịch',
    description: 'Hiểu về kẽm - khoáng chất quan trọng cho hệ miễn dịch',
    category: 'vitamins-minerals',
    tags: ['zinc', 'immunity', 'wound-healing'],
    relatedArticles: [],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/vitamins-minerals/zinc-immunity',
  },

  // Daily Practices
  {
    slug: 'reading-food-labels',
    title: 'Đọc Nhãn Thực phẩm',
    description: 'Hướng dẫn cách đọc và hiểu nhãn thực phẩm',
    category: 'daily-practices',
    tags: ['food-labels', 'nutrition-facts', 'shopping'],
    relatedArticles: ['sodium-health', 'carbohydrates', 'dietary-fats'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/daily-practices/reading-food-labels',
  },
  {
    slug: 'weekly-meal-planning',
    title: 'Lập Kế hoạch Bữa ăn Tuần',
    description: 'Hướng dẫn step-by-step cách lập kế hoạch bữa ăn cho cả tuần với templates',
    category: 'daily-practices',
    tags: ['weekly-meal-planning', 'meal-planning', 'organization', 'templates'],
    relatedArticles: ['meal-planning', 'meal-prep', 'nutrition-on-budget', 'healthy-plate'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/weekly-meal-planning',
  },
  {
    slug: 'meal-prep',
    title: 'Chuẩn bị Bữa ăn (Meal Prep)',
    description: 'Hướng dẫn cách chuẩn bị bữa ăn trước để tiết kiệm thời gian và ăn uống lành mạnh',
    category: 'daily-practices',
    tags: ['meal-prep', 'meal-preparation', 'time-saving', 'preparation'],
    relatedArticles: ['weekly-meal-planning', 'meal-planning', 'healthy-cooking-methods'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/meal-prep',
  },
  {
    slug: 'portion-sizes',
    title: 'Hiểu về Portion Sizes (Khẩu phần)',
    description: 'Hướng dẫn cách ước lượng khẩu phần đúng với visual guide và comparisons',
    category: 'daily-practices',
    tags: ['portion-sizes', 'serving-size', 'measurement', 'hand-guide'],
    relatedArticles: ['healthy-plate', 'reading-food-labels', 'calories-energy', 'healthy-weight-management'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/portion-sizes',
  },
  {
    slug: 'meal-planning',
    title: 'Lập Kế hoạch Bữa ăn',
    description: 'Hướng dẫn cách lập kế hoạch bữa ăn đơn giản, thực tế',
    category: 'daily-practices',
    tags: ['meal-planning', 'meal-prep', 'organization'],
    relatedArticles: ['healthy-cooking-methods', 'nutrition-on-budget', 'weekly-meal-planning'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/daily-practices/meal-planning',
  },
  {
    slug: 'healthy-cooking-methods',
    title: 'Phương pháp Nấu ăn Lành mạnh',
    description: 'Hướng dẫn các phương pháp nấu ăn lành mạnh',
    category: 'daily-practices',
    tags: ['cooking', 'preparation', 'healthy'],
    relatedArticles: ['meal-planning', 'dietary-fats'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/daily-practices/healthy-cooking-methods',
  },
  {
    slug: 'eating-out-healthy',
    title: 'Ăn uống Lành mạnh khi Đi ăn Ngoài',
    description: 'Hướng dẫn cách chọn lựa thực phẩm lành mạnh khi đi ăn ngoài',
    category: 'daily-practices',
    tags: ['eating-out', 'restaurants', 'healthy-choices'],
    relatedArticles: ['meal-planning', 'reading-food-labels'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/daily-practices/eating-out-healthy',
  },
  {
    slug: 'smart-snacking',
    title: 'Snacking Thông minh',
    description: 'Hướng dẫn cách snack thông minh',
    category: 'daily-practices',
    tags: ['snacking', 'snacks', 'healthy'],
    relatedArticles: ['meal-planning', 'nutrition-on-budget'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/daily-practices/smart-snacking',
  },
  {
    slug: 'nutrition-on-budget',
    title: 'Dinh dưỡng với Ngân sách Hạn hẹp',
    description: 'Hướng dẫn cách ăn uống lành mạnh với ngân sách hạn hẹp',
    category: 'daily-practices',
    tags: ['budget', 'affordable', 'shopping'],
    relatedArticles: ['meal-planning', 'smart-snacking', 'weekly-meal-planning'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/daily-practices/nutrition-on-budget',
  },
  {
    slug: 'nutrition-busy-lifestyle',
    title: 'Dinh dưỡng cho Người Bận rộn',
    description: 'Quick tips và hướng dẫn dinh dưỡng cho người có lối sống bận rộn',
    category: 'daily-practices',
    tags: ['busy-lifestyle', 'time-saving', 'quick-meals', 'convenience'],
    relatedArticles: ['weekly-meal-planning', 'meal-prep', 'smart-snacking'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/nutrition-busy-lifestyle',
  },
  {
    slug: 'nutrition-travel',
    title: 'Dinh dưỡng khi Đi Du lịch',
    description: 'Practical tips về dinh dưỡng khi đi du lịch. Cách ăn uống lành mạnh khi đi máy bay, ở khách sạn',
    category: 'daily-practices',
    tags: ['travel', 'nutrition-travel', 'eating-out', 'healthy-travel'],
    relatedArticles: ['eating-out-healthy', 'nutrition-busy-lifestyle'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/nutrition-travel',
  },

  // Life Stages
  {
    slug: 'infant-nutrition',
    title: 'Dinh dưỡng cho Trẻ sơ sinh (0-12 tháng)',
    description: 'Hướng dẫn dinh dưỡng cho trẻ sơ sinh từ 0-12 tháng. Sữa mẹ, sữa công thức, và bắt đầu ăn dặm',
    category: 'life-stages',
    tags: ['infant', 'baby', 'breastfeeding', 'formula', 'weaning'],
    relatedArticles: ['pregnancy-nutrition', 'breastfeeding-nutrition', 'children-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/infant-nutrition',
  },
  {
    slug: 'breastfeeding-nutrition',
    title: 'Dinh dưỡng cho Phụ nữ Cho con bú',
    description: 'Hướng dẫn dinh dưỡng cho phụ nữ cho con bú. Nhu cầu dinh dưỡng tăng, thực phẩm quan trọng',
    category: 'life-stages',
    tags: ['breastfeeding', 'lactation', 'postpartum', 'nutrition'],
    relatedArticles: ['pregnancy-nutrition', 'infant-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/breastfeeding-nutrition',
  },
  {
    slug: 'pregnancy-nutrition',
    title: 'Dinh dưỡng cho Phụ nữ Mang thai',
    description: 'Hướng dẫn dinh dưỡng cho phụ nữ mang thai',
    category: 'life-stages',
    tags: ['pregnancy', 'prenatal', 'folate', 'iron'],
    relatedArticles: ['iron-anemia', 'calcium-bone-health', 'folate-pregnancy', 'breastfeeding-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/life-stages/pregnancy-nutrition',
  },
  {
    slug: 'children-nutrition',
    title: 'Dinh dưỡng cho Trẻ em và Thanh thiếu niên',
    description: 'Hướng dẫn dinh dưỡng cho trẻ em và thanh thiếu niên',
    category: 'life-stages',
    tags: ['children', 'teens', 'growth', 'development'],
    relatedArticles: ['pregnancy-nutrition', 'elderly-nutrition', 'infant-nutrition', 'teen-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/life-stages/children-nutrition',
  },
  {
    slug: 'teen-nutrition',
    title: 'Dinh dưỡng cho Thanh thiếu niên',
    description: 'Hướng dẫn dinh dưỡng cho thanh thiếu niên (13-18 tuổi). Nhu cầu tăng trưởng, năng lượng, protein',
    category: 'life-stages',
    tags: ['teen', 'adolescent', 'growth', 'puberty', 'development'],
    relatedArticles: ['children-nutrition', 'exercise-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/teen-nutrition',
  },
  {
    slug: 'elderly-nutrition',
    title: 'Dinh dưỡng cho Người cao tuổi',
    description: 'Hướng dẫn dinh dưỡng cho người cao tuổi',
    category: 'life-stages',
    tags: ['elderly', 'aging', 'protein', 'vitamin-d'],
    relatedArticles: ['vitamin-d', 'calcium-bone-health', 'hydration', 'protein-sources-needs'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/elderly-nutrition',
  },

  // Special Topics
  {
    slug: 'exercise-nutrition',
    title: 'Dinh dưỡng cho Người Tập thể dục',
    description: 'Hướng dẫn dinh dưỡng cho người tập thể dục. Pre/post workout nutrition, nhu cầu protein, carbohydrate',
    category: 'special-topics',
    tags: ['exercise', 'workout', 'sports-nutrition', 'pre-workout', 'post-workout'],
    relatedArticles: ['protein-sources-needs', 'carbohydrates', 'hydration'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/exercise-nutrition',
  },
  {
    slug: 'intermittent-fasting',
    title: 'Intermittent Fasting: Hiểu đúng',
    description: 'Hướng dẫn về intermittent fasting (nhịn ăn gián đoạn) - các phương pháp, lợi ích, rủi ro',
    category: 'special-topics',
    tags: ['intermittent-fasting', 'IF', 'fasting', 'weight-loss'],
    relatedArticles: ['healthy-weight-management', 'calories-energy'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/intermittent-fasting',
  },
  {
    slug: 'plant-based-diet',
    title: 'Plant-based Diet: Hướng dẫn',
    description: 'Hướng dẫn về chế độ ăn dựa trên thực vật (plant-based diet). Lợi ích, thách thức, và cách đảm bảo đủ dinh dưỡng',
    category: 'special-topics',
    tags: ['plant-based', 'vegetarian', 'vegan', 'protein-thực-vật'],
    relatedArticles: ['protein-sources-needs', 'vitamin-b12-energy', 'iron-anemia'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/plant-based-diet',
  },
  {
    slug: 'nutrition-sleep',
    title: 'Dinh dưỡng và Giấc ngủ',
    description: 'Mối liên hệ giữa dinh dưỡng và giấc ngủ. Thực phẩm giúp ngủ tốt, thực phẩm nên tránh trước khi ngủ',
    category: 'special-topics',
    tags: ['nutrition-sleep', 'sleep', 'insomnia', 'melatonin', 'tryptophan'],
    relatedArticles: ['magnesium-health'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/nutrition-sleep',
  },
  {
    slug: 'nutrition-stress',
    title: 'Dinh dưỡng và Stress',
    description: 'Mối liên hệ giữa dinh dưỡng và stress. Thực phẩm giúp giảm stress, thực phẩm nên tránh',
    category: 'special-topics',
    tags: ['nutrition-stress', 'stress', 'anxiety', 'food-mood'],
    relatedArticles: ['nutrition-sleep', 'magnesium-health'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/nutrition-stress',
  },
  {
    slug: 'gut-health-probiotics',
    title: 'Sức khỏe Đường ruột và Probiotics',
    description: 'Hiểu về sức khỏe đường ruột, probiotics, và prebiotics',
    category: 'special-topics',
    tags: ['gut-health', 'probiotics', 'prebiotics', 'digestion'],
    relatedArticles: ['dietary-fiber', 'ibd-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/special-topics/gut-health-probiotics',
  },
  {
    slug: 'omega-3-heart-health',
    title: 'Omega-3 và Sức khỏe Tim mạch',
    description: 'Hiểu về omega-3 - chất béo tốt quan trọng cho tim mạch',
    category: 'special-topics',
    tags: ['omega-3', 'heart-health', 'fish', 'fats'],
    relatedArticles: ['dietary-fats', 'heart-failure-nutrition'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/special-topics/omega-3-heart-health',
  },
  {
    slug: 'healthy-weight-management',
    title: 'Quản lý Cân nặng Lành mạnh',
    description: 'Hướng dẫn cách quản lý cân nặng lành mạnh',
    category: 'special-topics',
    tags: ['weight-management', 'weight-loss', 'calories'],
    relatedArticles: ['macronutrients-overview', 'meal-planning'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/special-topics/healthy-weight-management',
  },
  {
    slug: 'nutrition-myths-public',
    title: 'Hiểu lầm Dinh dưỡng Phổ biến',
    description: 'Điều chỉnh các hiểu lầm dinh dưỡng phổ biến trong công chúng',
    category: 'special-topics',
    tags: ['myths', 'misconceptions', 'public'],
    relatedArticles: ['myths-in-clinical-nutrition'],
    level: 'foundation',
    targetAudience: 'general',
    href: '/knowledge/special-topics/nutrition-myths-public',
  },
  {
    slug: 'antioxidants-foods',
    title: 'Chất chống Oxy hóa trong Thực phẩm',
    description: 'Hiểu về chất chống oxy hóa - hợp chất tự nhiên trong thực phẩm',
    category: 'special-topics',
    tags: ['antioxidants', 'vitamins', 'health'],
    relatedArticles: ['vitamin-c-immunity', 'vitamin-a-eye-health'],
    level: 'foundation',
    targetAudience: 'both',
    href: '/knowledge/special-topics/antioxidants-foods',
  },
];

/**
 * Get article metadata by slug
 */
export function getArticle(slug: string): ArticleMetadata | undefined {
  return articles.find(article => article.slug === slug);
}

/**
 * Get all articles in a category
 */
export function getArticlesByCategory(category: ArticleCategory): ArticleMetadata[] {
  return articles.filter(article => article.category === category);
}

/**
 * Get related articles for a given article slug
 */
export function getRelatedArticles(slug: string, limit: number = 5): ArticleMetadata[] {
  const article = getArticle(slug);
  if (!article) return [];

  const related = article.relatedArticles
    .map(relatedSlug => getArticle(relatedSlug))
    .filter((article): article is ArticleMetadata => article !== undefined)
    .slice(0, limit);

  return related;
}

/**
 * Search articles by query (searches title, description, and tags)
 */
export function searchArticles(query: string): ArticleMetadata[] {
  const lowerQuery = query.toLowerCase();
  return articles.filter(article => 
    article.title.toLowerCase().includes(lowerQuery) ||
    article.description.toLowerCase().includes(lowerQuery) ||
    article.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
  );
}

/**
 * Get articles by tag
 */
export function getArticlesByTag(tag: string): ArticleMetadata[] {
  return articles.filter(article => 
    article.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get all unique categories
 */
export function getCategories(): ArticleCategory[] {
  return Array.from(new Set(articles.map(article => article.category)));
}

/**
 * Get all unique tags
 */
export function getTags(): string[] {
  const allTags = articles.flatMap(article => article.tags);
  return Array.from(new Set(allTags)).sort();
}

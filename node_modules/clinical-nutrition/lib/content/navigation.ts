/**
 * Navigation utilities
 * 
 * Generate navigation structure from article metadata
 */

import { articles, getArticlesByCategory, type ArticleCategory } from './articles';
import {
  BookOpen,
  Activity,
  Heart,
  Droplet,
  Sun,
  Calendar,
  Baby,
  Users,
  Leaf,
  AlertCircle,
  ClipboardCheck,
  Calculator,
  FileText,
  UtensilsCrossed,
  Wheat,
  Zap,
  Beef,
  Shield,
  Eye,
  Moon,
  Brain,
  Clock,
  Plane,
  Container,
  Hand,
  Ruler,
  DollarSign,
  Apple,
  TrendingUp,
  Pill,
  AlertTriangle,
  Milk,
  Gift,
  ShoppingCart,
  MapPin,
} from 'lucide-react';

// Icon mapping for categories and common topics
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  // General icons
  BookOpen,
  Activity,
  Heart,
  Droplet,
  Sun,
  Calendar,
  Baby,
  Users,
  Leaf,
  AlertCircle,
  ClipboardCheck,
  Calculator,
  FileText,
  UtensilsCrossed,
  Wheat,
  Zap,
  Beef,
  Shield,
  Eye,
  Moon,
  Brain,
  Clock,
  Plane,
  Container,
  Hand,
  Ruler,
  DollarSign,
  Apple,
  TrendingUp,
  Pill,
  AlertTriangle,
  Milk,
};

// Category labels and icons
const categoryConfig: Record<ArticleCategory, { label: string; href: string; icon: React.ComponentType<{ className?: string }> }> = {
  'clinical-foundations': {
    label: 'Cơ sở Kiến thức',
    href: '/knowledge/clinical-foundations',
    icon: BookOpen,
  },
  'chronic-diseases': {
    label: 'Dinh dưỡng Bệnh mạn tính',
    href: '/knowledge/chronic-diseases',
    icon: Activity,
  },
  'vitamins-minerals': {
    label: 'Vitamin & Khoáng chất',
    href: '/knowledge/vitamins-minerals',
    icon: Pill,
  },
  'daily-practices': {
    label: 'Dinh dưỡng Hàng ngày',
    href: '/knowledge/daily-practices',
    icon: Calendar,
  },
  'life-stages': {
    label: 'Dinh dưỡng Theo độ tuổi',
    href: '/knowledge/life-stages',
    icon: Baby,
  },
  'special-topics': {
    label: 'chủ đề đặc biệt',
    href: '/knowledge/special-topics',
    icon: Leaf,
  },
  'general-nutrition': {
    label: 'Dinh dưỡng Tổng quát',
    href: '/knowledge/general-nutrition',
    icon: Apple,
  },
};

// Get icon for article based on slug/keywords
function getArticleIcon(slug: string, tags: string[]): React.ComponentType<{ className?: string }> {
  // Try to match by slug keywords first
  if (slug.includes('vitamin-d') || slug.includes('sun')) return Sun;
  if (slug.includes('vitamin-c') || slug.includes('immunity')) return Shield;
  if (slug.includes('vitamin-a') || slug.includes('eye')) return Eye;
  if (slug.includes('magnesium')) return Activity;
  if (slug.includes('folate') || slug.includes('pregnancy')) return Baby;
  if (slug.includes('vitamin-k') || slug.includes('blood')) return Droplet;
  if (slug.includes('iron') || slug.includes('anemia')) return Droplet;
  if (slug.includes('calcium') || slug.includes('bone')) return Heart;
  if (slug.includes('potassium')) return Heart;
  if (slug.includes('zinc')) return Shield;
  if (slug.includes('protein')) return Beef;
  if (slug.includes('carbohydrate') || slug.includes('carb')) return Wheat;
  if (slug.includes('fat') || slug.includes('cholesterol')) return Heart;
  if (slug.includes('calorie') || slug.includes('energy')) return Zap;
  if (slug.includes('hydration') || slug.includes('water')) return Droplet;
  if (slug.includes('meal-planning') || slug.includes('meal-prep')) return Calendar;
  if (slug.includes('portion')) return Hand;
  if (slug.includes('travel')) return Plane;
  if (slug.includes('busy')) return Clock;
  if (slug.includes('infant') || slug.includes('baby')) return Baby;
  if (slug.includes('breastfeeding') || slug.includes('lactation')) return Milk;
  if (slug.includes('teen') || slug.includes('adolescent')) return Users;
  if (slug.includes('exercise') || slug.includes('workout')) return Activity;
  if (slug.includes('fasting')) return Clock;
  if (slug.includes('plant-based') || slug.includes('vegan')) return Leaf;
  if (slug.includes('sleep')) return Moon;
  if (slug.includes('stress')) return Brain;
  if (slug.includes('cardiovascular') || slug.includes('heart')) return Heart;
  if (slug.includes('diabetes')) return Activity;
  if (slug.includes('hypertension')) return Activity;
  if (slug.includes('kidney') || slug.includes('ckd') || slug.includes('dialysis')) return Droplet;
  if (slug.includes('liver')) return Activity;
  if (slug.includes('copd') || slug.includes('lung')) return Activity;
  if (slug.includes('cancer')) return Pill;
  if (slug.includes('ibd') || slug.includes('gut')) return Leaf;
  if (slug.includes('assessment') || slug.includes('screening')) return ClipboardCheck;
  if (slug.includes('needs') || slug.includes('estimation')) return Calculator;
  if (slug.includes('intake')) return UtensilsCrossed;
  if (slug.includes('myth')) return AlertCircle;
  
  // Vietnamese food and practices
  if (slug.includes('vietnamese-food') || slug.includes('vietnamese-foods')) return Apple;
  if (slug.includes('vietnamese-cooking') || slug.includes('cooking-methods')) return UtensilsCrossed;
  if (slug.includes('smart-shopping') || slug.includes('shopping')) return DollarSign;
  if (slug.includes('family-meal') || slug.includes('family-meals')) return UtensilsCrossed;
  if (slug.includes('street-food')) return UtensilsCrossed;
  if (slug.includes('festival') || slug.includes('tet') || slug.includes('trung-thu')) return Gift;
  if (slug.includes('fermented-food') || slug.includes('nuoc-mam')) return UtensilsCrossed;
  if (slug.includes('manual-labor') || slug.includes('cong-nhan')) return Activity;
  if (slug.includes('night-shift') || slug.includes('ca-dem')) return Moon;
  if (slug.includes('rural') || slug.includes('nong-thon')) return Leaf;
  if (slug.includes('seasonal') || slug.includes('theo-mua')) return Calendar;
  if (slug.includes('regional') || slug.includes('vung-mien')) return Activity;
  
  // Default to category icon
  return FileText;
}

export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
}

export interface NavGroup {
  label: string;
  href: string;
  items: NavItem[];
}

/**
 * Generate navigation groups from article metadata
 */
export function generateNavigationGroups(): NavGroup[] {
  const groups: NavGroup[] = [];

  // Get all categories
  const categories: ArticleCategory[] = [
    'clinical-foundations',
    'general-nutrition',
    'chronic-diseases',
    'vitamins-minerals',
    'daily-practices',
    'life-stages',
    'special-topics',
  ];

  for (const category of categories) {
    const categoryArticles = getArticlesByCategory(category);
    if (categoryArticles.length === 0) continue;

    const config = categoryConfig[category];
    const items: NavItem[] = categoryArticles
      .sort((a, b) => a.title.localeCompare(b.title))
      .map((article) => ({
        label: article.title,
        href: article.href,
        icon: getArticleIcon(article.slug, article.tags),
      }));

    groups.push({
      label: config.label,
      href: config.href,
      items,
    });
  }

  return groups;
}

# Kế Hoạch Tối Ưu Giao Diện - Trang Web Dinh Dưỡng Lâm Sàng

## 📋 Tổng Quan

Tài liệu này trình bày kế hoạch cải thiện giao diện, layout, spacing, và icons cho trang web dinh dưỡng lâm sàng để trở nên khoa học, chuyên nghiệp và đẹp mắt hơn.

---

## 🎯 Mục Tiêu

1. **Tăng tính chuyên nghiệp**: Giao diện phản ánh tính khoa học và đáng tin cậy
2. **Cải thiện trải nghiệm người dùng**: Dễ đọc, dễ điều hướng, dễ sử dụng
3. **Tối ưu accessibility**: Đảm bảo truy cập cho mọi người dùng
4. **Responsive design**: Hoạt động tốt trên mọi thiết bị
5. **Visual hierarchy**: Rõ ràng, dễ quét nội dung

---

## 🎨 1. Typography (Chữ viết)

### 1.1 Font System
**Hiện tại**: Geist Sans (body), Geist Mono (code)
**Đề xuất**: Giữ Geist Sans, nhưng tối ưu sizing và weights

```css
/* Font Scale - Dựa trên 16px base */
--font-size-xs: 0.75rem;    /* 12px */
--font-size-sm: 0.875rem;   /* 14px */
--font-size-base: 1rem;     /* 16px */
--font-size-lg: 1.125rem;    /* 18px */
--font-size-xl: 1.25rem;    /* 20px */
--font-size-2xl: 1.5rem;    /* 24px */
--font-size-3xl: 1.875rem;  /* 30px */
--font-size-4xl: 2.25rem;   /* 36px */

/* Line Heights - Tối ưu cho đọc */
--line-height-tight: 1.25;
--line-height-normal: 1.5;
--line-height-relaxed: 1.75;
--line-height-loose: 2;
```

### 1.2 Typography Hierarchy

**Headings**:
- H1: `text-4xl sm:text-5xl font-bold` (36-48px) - Line height: 1.2
- H2: `text-3xl sm:text-4xl font-semibold` (30-36px) - Line height: 1.3
- H3: `text-2xl sm:text-3xl font-semibold` (24-30px) - Line height: 1.4
- H4: `text-xl sm:text-2xl font-semibold` (20-24px) - Line height: 1.4

**Body Text**:
- Large: `text-lg` (18px) - Line height: 1.75 - Cho intro paragraphs
- Base: `text-base` (16px) - Line height: 1.75 - Cho body text
- Small: `text-sm` (14px) - Line height: 1.6 - Cho captions, metadata

**Special Text**:
- Code/Technical: `font-mono text-sm` với background highlight
- Emphasis: `font-semibold` thay vì `font-bold` cho inline emphasis

### 1.3 Letter Spacing
- Headings: `tracking-tight` (-0.025em)
- Uppercase labels: `tracking-wide` (0.05em)
- Body: Default

---

## 🎨 2. Color System (Hệ thống màu)

### 2.1 Primary Colors - Màu chủ đạo
**Đề xuất**: Màu xanh dương khoa học, tin cậy

```css
/* Primary Blue - Màu chủ đạo */
--color-primary-50: #eff6ff;   /* Lightest */
--color-primary-100: #dbeafe;
--color-primary-200: #bfdbfe;
--color-primary-300: #93c5fd;
--color-primary-400: #60a5fa;
--color-primary-500: #3b82f6;  /* Main */
--color-primary-600: #2563eb;  /* Hover */
--color-primary-700: #1d4ed8;  /* Active */
--color-primary-800: #1e40af;
--color-primary-900: #1e3a8a;  /* Darkest */
```

### 2.2 Semantic Colors - Màu ngữ nghĩa

**Success/Positive** (Green):
```css
--color-success-50: #f0fdf4;
--color-success-500: #22c55e;
--color-success-700: #15803d;
```

**Warning/Caution** (Amber):
```css
--color-warning-50: #fffbeb;
--color-warning-500: #f59e0b;
--color-warning-700: #b45309;
```

**Error/Danger** (Red):
```css
--color-error-50: #fef2f2;
--color-error-500: #ef4444;
--color-error-700: #b91c1c;
```

**Info** (Cyan):
```css
--color-info-50: #ecfeff;
--color-info-500: #06b6d4;
--color-info-700: #0e7490;
```

### 2.3 Neutral Colors - Màu trung tính
```css
--color-gray-50: #f9fafb;   /* Backgrounds */
--color-gray-100: #f3f4f6;
--color-gray-200: #e5e7eb;   /* Borders */
--color-gray-300: #d1d5db;
--color-gray-400: #9ca3af;
--color-gray-500: #6b7280;   /* Secondary text */
--color-gray-600: #4b5563;
--color-gray-700: #374151;   /* Body text */
--color-gray-800: #1f2937;   /* Headings */
--color-gray-900: #111827;   /* Strong emphasis */
```

### 2.4 Background Colors
```css
--bg-primary: #ffffff;
--bg-secondary: #f9fafb;
--bg-tertiary: #f3f4f6;
--bg-accent: #eff6ff;  /* Light blue tint */
```

---

## 📐 3. Spacing System (Hệ thống khoảng cách)

### 3.1 Spacing Scale
**Dựa trên 4px base unit** (Tailwind default)

```css
/* Padding & Margins */
--spacing-1: 0.25rem;   /* 4px */
--spacing-2: 0.5rem;    /* 8px */
--spacing-3: 0.75rem;   /* 12px */
--spacing-4: 1rem;      /* 16px */
--spacing-5: 1.25rem;   /* 20px */
--spacing-6: 1.5rem;    /* 24px */
--spacing-8: 2rem;      /* 32px */
--spacing-10: 2.5rem;   /* 40px */
--spacing-12: 3rem;     /* 48px */
--spacing-16: 4rem;     /* 64px */
--spacing-20: 5rem;     /* 80px */
```

### 3.2 Content Spacing Guidelines

**Page Level**:
- Max width: `max-w-4xl` (896px) cho content, `max-w-6xl` (1152px) cho landing
- Horizontal padding: `px-4 sm:px-6 lg:px-8` (16-32px)
- Vertical padding: `py-8 sm:py-12` (32-48px)

**Section Level**:
- Between sections: `space-y-8 sm:space-y-12` (32-48px)
- Section padding: `p-6 sm:p-8` (24-32px)

**Component Level**:
- Card padding: `p-6 sm:p-8` (24-32px)
- Card gap: `gap-4 sm:gap-6` (16-24px)
- List spacing: `space-y-2` cho compact, `space-y-3` cho comfortable

**Text Level**:
- Paragraph margin: `mb-4` (16px)
- Heading margin: `mb-4 sm:mb-6` (16-24px)
- Line height: `leading-relaxed` (1.75) cho body text

---

## 🎯 4. Icons System (Hệ thống icon)

### 4.1 Icon Library Recommendation
**Đề xuất**: **Lucide Icons** hoặc **Heroicons v2**

**Lý do**:
- ✅ Consistent design language
- ✅ Lightweight (SVG)
- ✅ Accessible (aria-label support)
- ✅ Customizable (stroke width, colors)
- ✅ Medical/science icons available

### 4.2 Icon Categories

**Navigation Icons**:
- Home: `Home`
- Knowledge: `BookOpen`, `GraduationCap`
- Tools: `Calculator`, `Activity`
- Menu: `Menu`, `X`

**Content Icons**:
- Information: `Info`, `AlertCircle`
- Success: `CheckCircle`, `Check`
- Warning: `AlertTriangle`, `Alert`
- Error: `XCircle`, `AlertOctagon`

**Medical/Nutrition Icons**:
- Nutrition: `Apple`, `UtensilsCrossed`
- Health: `Heart`, `Activity`
- Assessment: `ClipboardCheck`, `FileText`
- Calculator: `Calculator`, `Plus`

**Action Icons**:
- Read more: `ArrowRight`, `ChevronRight`
- External link: `ExternalLink`
- Download: `Download`
- Print: `Printer`

### 4.3 Icon Sizing
```css
/* Icon Sizes */
--icon-xs: 0.75rem;    /* 12px */
--icon-sm: 1rem;      /* 16px */
--icon-base: 1.25rem; /* 20px */
--icon-lg: 1.5rem;    /* 24px */
--icon-xl: 2rem;      /* 32px */
```

### 4.4 Icon Usage Guidelines
- **Inline with text**: `w-4 h-4` (16px) với `inline-block align-middle`
- **Standalone**: `w-6 h-6` (24px) hoặc `w-8 h-8` (32px)
- **Large feature**: `w-12 h-12` (48px) hoặc `w-16 h-16` (64px)
- **Stroke width**: `stroke-2` (2px) cho most icons, `stroke-1.5` cho small icons

---

## 🏗️ 5. Layout & Grid System

### 5.1 Container Widths
```css
/* Content Containers */
--container-sm: 640px;   /* Small screens */
--container-md: 768px;
--container-lg: 1024px;
--container-xl: 1280px;
--container-2xl: 1536px;

/* Content Max Widths */
--content-narrow: 65ch;   /* ~832px - Optimal reading width */
--content-normal: 75ch;   /* ~960px */
--content-wide: 90ch;     /* ~1152px */
```

### 5.2 Grid System
**Đề xuất**: Sử dụng CSS Grid với responsive breakpoints

```css
/* Grid Layouts */
.grid-1 { grid-template-columns: 1fr; }
.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }

/* Responsive */
@media (min-width: 640px) {
  .sm\:grid-2 { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .lg\:grid-3 { grid-template-columns: repeat(3, 1fr); }
}
```

### 5.3 Card Layout
```css
/* Card Base */
.card {
  background: white;
  border-radius: 0.75rem;  /* 12px */
  border: 1px solid var(--color-gray-200);
  padding: 1.5rem;  /* 24px */
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
}

/* Card Hover */
.card:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-color: var(--color-primary-300);
}
```

---

## 🎨 6. Visual Enhancements

### 6.1 Shadows
```css
/* Shadow System */
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-base: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
```

### 6.2 Borders
```css
/* Border Radius */
--radius-sm: 0.25rem;   /* 4px */
--radius-base: 0.5rem;  /* 8px */
--radius-md: 0.75rem;   /* 12px */
--radius-lg: 1rem;      /* 16px */
--radius-xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

### 6.3 Transitions
```css
/* Transition Timing */
--transition-fast: 150ms;
--transition-base: 200ms;
--transition-slow: 300ms;

/* Easing */
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--ease-out: cubic-bezier(0, 0, 0.2, 1);
```

---

## 📱 7. Responsive Design

### 7.1 Breakpoints
```css
/* Tailwind Default Breakpoints */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Laptops */
xl: 1280px  /* Desktops */
2xl: 1536px /* Large desktops */
```

### 7.2 Mobile-First Approach
- Base styles: Mobile (< 640px)
- Progressive enhancement: Larger screens
- Touch targets: Minimum 44x44px
- Text size: Minimum 16px để tránh zoom trên iOS

---

## ♿ 8. Accessibility (Khả năng truy cập)

### 8.1 Color Contrast
- **Text on white**: Minimum 4.5:1 (WCAG AA)
- **Large text**: Minimum 3:1 (WCAG AA)
- **Interactive elements**: Minimum 3:1 contrast

### 8.2 Focus States
```css
/* Focus Ring */
.focus-ring {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-primary-500);
}
```

### 8.3 ARIA Labels
- Tất cả icons cần `aria-label` hoặc `aria-hidden="true"`
- Buttons cần descriptive text
- Links cần clear context

---

## 🎯 9. Component-Specific Improvements

### 9.1 Navigation
- **Header**: Fixed hoặc sticky với shadow
- **Breadcrumbs**: Cho deep pages
- **Active states**: Clear visual indication

### 9.2 Cards
- **Hover effects**: Subtle lift với shadow
- **Border colors**: Change on hover
- **Spacing**: Consistent padding

### 9.3 Callouts/Notes
- **Color coding**: Info (blue), Warning (amber), Error (red), Success (green)
- **Icons**: Left-aligned với text
- **Borders**: Left border accent (4px)

### 9.4 Forms
- **Inputs**: Clear labels, helpful placeholders
- **Validation**: Inline error messages
- **Focus states**: Prominent focus rings

### 9.5 Tables
- **Zebra striping**: Alternating row colors
- **Headers**: Bold với background
- **Responsive**: Horizontal scroll trên mobile

---

## 📦 10. Implementation Plan

### Phase 1: Foundation (Week 1)
1. ✅ Cập nhật `globals.css` với design tokens
2. ✅ Tạo component library (Button, Card, Input)
3. ✅ Cài đặt icon library (Lucide Icons)

### Phase 2: Core Pages (Week 2)
1. ✅ Cải thiện landing page (`app/page.tsx`)
2. ✅ Cải thiện knowledge base page
3. ✅ Cải thiện tool pages

### Phase 3: Components (Week 3)
1. ✅ Cải thiện callout components
2. ✅ Cải thiện navigation components
3. ✅ Cải thiện form components

### Phase 4: Polish (Week 4)
1. ✅ Fine-tune spacing
2. ✅ Add animations/transitions
3. ✅ Accessibility audit
4. ✅ Performance optimization

---

## 📚 11. Resources & References

### Design Systems
- **Material Design**: https://material.io/design
- **Ant Design**: https://ant.design/
- **Chakra UI**: https://chakra-ui.com/

### Icon Libraries
- **Lucide Icons**: https://lucide.dev/
- **Heroicons**: https://heroicons.com/
- **Phosphor Icons**: https://phosphoricons.com/

### Typography
- **Type Scale**: https://type-scale.com/
- **Font Pairing**: https://www.fontpair.co/

### Color Tools
- **Coolors**: https://coolors.co/
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/

---

## ✅ Checklist

### Typography
- [ ] Cập nhật font sizes theo scale
- [ ] Tối ưu line heights
- [ ] Cải thiện heading hierarchy

### Colors
- [ ] Implement color system
- [ ] Test contrast ratios
- [ ] Update component colors

### Spacing
- [ ] Standardize padding/margins
- [ ] Optimize content width
- [ ] Improve section spacing

### Icons
- [ ] Install icon library
- [ ] Replace inline SVGs
- [ ] Add aria-labels

### Layout
- [ ] Improve grid system
- [ ] Enhance card layouts
- [ ] Optimize responsive breakpoints

### Accessibility
- [ ] Test keyboard navigation
- [ ] Verify focus states
- [ ] Check screen reader compatibility

---

## 🎉 Kết Luận

Kế hoạch này cung cấp roadmap chi tiết để cải thiện giao diện trang web dinh dưỡng lâm sàng. Bắt đầu với Foundation (Phase 1) và triển khai từng bước để đảm bảo chất lượng và tính nhất quán.

**Ưu tiên**: Typography → Colors → Spacing → Icons → Components

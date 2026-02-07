# Hướng Dẫn Triển Khai Cải Thiện Giao Diện

## 🚀 Bắt Đầu Nhanh

### Bước 1: Cài Đặt Icon Library

```bash
npm install lucide-react
```

Hoặc nếu muốn dùng Heroicons:

```bash
npm install @heroicons/react
```

### Bước 2: Import Design Tokens

File `design-tokens.css` đã được tạo và import vào `globals.css`. Các biến CSS có sẵn trong toàn bộ ứng dụng.

### Bước 3: Sử Dụng Icons

**Với Lucide Icons:**

```tsx
import { BookOpen, Calculator, Info } from 'lucide-react';

// Sử dụng trong component
<BookOpen className="w-6 h-6 text-blue-600" />
```

**Với Heroicons:**

```tsx
import { BookOpenIcon, CalculatorIcon } from '@heroicons/react/24/outline';

<BookOpenIcon className="w-6 h-6 text-blue-600" />
```

---

## 📝 Ví Dụ Component Cải Thiện

### 1. Card Component với Icon

```tsx
import { BookOpen } from 'lucide-react';
import Link from 'next/link';

export function KnowledgeCard({ title, description, href, icon: Icon = BookOpen }) {
  return (
    <Link
      href={href}
      className="group block bg-white rounded-xl border-2 border-gray-200 p-8 
                 hover:border-blue-500 hover:shadow-lg transition-all focus-ring"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center 
                       group-hover:bg-blue-200 transition-colors">
          <Icon className="w-6 h-6 text-blue-600" aria-hidden="true" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">
          {title}
        </h2>
      </div>
      <p className="text-gray-700 leading-relaxed mb-4">
        {description}
      </p>
      <span className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800">
        Khám phá Kiến thức →
      </span>
    </Link>
  );
}
```

### 2. Callout Component Cải Thiện

```tsx
import { Info, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

type CalloutVariant = 'info' | 'warning' | 'error' | 'success';

const iconMap = {
  info: Info,
  warning: AlertTriangle,
  error: XCircle,
  success: CheckCircle,
};

const colorMap = {
  info: {
    bg: 'bg-blue-50',
    border: 'border-blue-500',
    text: 'text-blue-900',
    icon: 'text-blue-600',
  },
  warning: {
    bg: 'bg-amber-50',
    border: 'border-amber-500',
    text: 'text-amber-900',
    icon: 'text-amber-600',
  },
  error: {
    bg: 'bg-red-50',
    border: 'border-red-500',
    text: 'text-red-900',
    icon: 'text-red-600',
  },
  success: {
    bg: 'bg-green-50',
    border: 'border-green-500',
    text: 'text-green-900',
    icon: 'text-green-600',
  },
};

export function Callout({ 
  variant = 'info', 
  title, 
  children 
}: { 
  variant?: CalloutVariant;
  title?: string;
  children: React.ReactNode;
}) {
  const Icon = iconMap[variant];
  const colors = colorMap[variant];

  return (
    <div className={`${colors.bg} border-l-4 ${colors.border} rounded-r-lg p-4 sm:p-5`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${colors.icon} flex-shrink-0 mt-0.5`} aria-hidden="true" />
        <div className="flex-1">
          {title && (
            <h3 className={`text-sm font-bold ${colors.text} mb-2 uppercase tracking-wide`}>
              {title}
            </h3>
          )}
          <div className={`text-sm ${colors.text} leading-relaxed`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### 3. Button Component Cải Thiện

```tsx
import { ArrowRight } from 'lucide-react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  icon: Icon,
  iconPosition = 'right',
  ...props
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
  icon?: React.ComponentType<{ className?: string }>;
  iconPosition?: 'left' | 'right';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus-ring';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
    secondary: 'bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300',
    outline: 'border-2 border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const iconSizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && (
        <Icon className={`${iconSizeClasses[size]} mr-2`} aria-hidden="true" />
      )}
      {children}
      {Icon && iconPosition === 'right' && (
        <Icon className={`${iconSizeClasses[size]} ml-2`} aria-hidden="true" />
      )}
    </button>
  );
}
```

---

## 🎨 Sử Dụng Design Tokens trong Tailwind

### Cấu hình Tailwind để sử dụng CSS Variables

Tạo hoặc cập nhật `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
          400: 'var(--color-primary-400)',
          500: 'var(--color-primary-500)',
          600: 'var(--color-primary-600)',
          700: 'var(--color-primary-700)',
          800: 'var(--color-primary-800)',
          900: 'var(--color-primary-900)',
        },
        success: {
          50: 'var(--color-success-50)',
          500: 'var(--color-success-500)',
          700: 'var(--color-success-700)',
        },
        warning: {
          50: 'var(--color-warning-50)',
          500: 'var(--color-warning-500)',
          700: 'var(--color-warning-700)',
        },
        error: {
          50: 'var(--color-error-50)',
          500: 'var(--color-error-500)',
          700: 'var(--color-error-700)',
        },
        info: {
          50: 'var(--color-info-50)',
          500: 'var(--color-info-500)',
          700: 'var(--color-info-700)',
        },
      },
      spacing: {
        // Sử dụng CSS variables nếu cần
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        base: 'var(--radius-base)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
        xl: 'var(--radius-xl)',
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        base: 'var(--shadow-base)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
        xl: 'var(--shadow-xl)',
      },
      transitionDuration: {
        fast: 'var(--transition-fast)',
        base: 'var(--transition-base)',
        slow: 'var(--transition-slow)',
      },
    },
  },
};

export default config;
```

---

## 📋 Checklist Triển Khai

### Phase 1: Foundation ✅
- [x] Tạo `design-tokens.css`
- [x] Import vào `globals.css`
- [ ] Cài đặt icon library
- [ ] Cập nhật `tailwind.config.ts`

### Phase 2: Components
- [ ] Tạo `Button` component mới
- [ ] Tạo `Callout` component cải thiện
- [ ] Tạo `Card` component với icons
- [ ] Cập nhật `GlobalDisclaimerBanner`

### Phase 3: Pages
- [ ] Cải thiện `app/page.tsx` (landing)
- [ ] Cải thiện `app/knowledge/page.tsx`
- [ ] Cải thiện các tool pages
- [ ] Cải thiện article pages

### Phase 4: Polish
- [ ] Thêm animations/transitions
- [ ] Test responsive trên nhiều devices
- [ ] Accessibility audit
- [ ] Performance optimization

---

## 🔍 Kiểm Tra Chất Lượng

### Accessibility Checklist
- [ ] Tất cả interactive elements có focus states
- [ ] Color contrast đạt WCAG AA (4.5:1)
- [ ] Icons có aria-labels hoặc aria-hidden
- [ ] Keyboard navigation hoạt động tốt
- [ ] Screen reader compatibility

### Performance Checklist
- [ ] Icons được tree-shaken (chỉ import cần thiết)
- [ ] CSS được minified trong production
- [ ] Images được optimized
- [ ] Font loading optimized

### Visual Checklist
- [ ] Spacing nhất quán
- [ ] Typography hierarchy rõ ràng
- [ ] Colors phù hợp với brand
- [ ] Icons consistent style
- [ ] Responsive trên mọi breakpoints

---

## 📚 Tài Liệu Tham Khảo

- **Lucide Icons**: https://lucide.dev/icons/
- **Tailwind CSS**: https://tailwindcss.com/docs
- **WCAG Guidelines**: https://www.w3.org/WAI/WCAG21/quickref/
- **Design Tokens**: https://www.designtokens.org/

---

## 💡 Tips & Best Practices

1. **Icons**: Luôn thêm `aria-hidden="true"` nếu icon chỉ decorative, hoặc `aria-label` nếu có ý nghĩa
2. **Spacing**: Sử dụng spacing scale nhất quán (4px base unit)
3. **Colors**: Test contrast ratios trước khi deploy
4. **Performance**: Lazy load icons nếu có thể
5. **Accessibility**: Test với keyboard và screen reader

---

## 🎯 Next Steps

1. **Bắt đầu với Phase 1**: Cài đặt icon library và cập nhật config
2. **Tạo component library**: Bắt đầu với Button và Callout
3. **Áp dụng từng trang**: Bắt đầu với landing page
4. **Iterate và improve**: Thu thập feedback và cải thiện

import { LucideIcon } from 'lucide-react';

type IconSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl';

interface IconProps {
  icon: LucideIcon;
  size?: IconSize;
  className?: string;
  'aria-label'?: string;
  'aria-hidden'?: boolean;
}

const sizeClasses: Record<IconSize, string> = {
  xs: 'w-3 h-3',
  sm: 'w-4 h-4',
  base: 'w-5 h-5',
  lg: 'w-6 h-6',
  xl: 'w-8 h-8',
  '2xl': 'w-12 h-12',
};

export function Icon({
  icon: IconComponent,
  size = 'base',
  className = '',
  'aria-label': ariaLabel,
  'aria-hidden': ariaHidden = !ariaLabel,
}: IconProps) {
  return (
    <IconComponent
      className={`${sizeClasses[size]} ${className}`}
      aria-label={ariaLabel}
      aria-hidden={ariaHidden}
    />
  );
}

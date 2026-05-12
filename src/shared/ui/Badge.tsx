import { type ReactNode } from 'react'
import { cn } from '../lib/cn'

export type BadgeVariant = 'neutral' | 'success' | 'error' | 'processing'
export type BadgeSize = 'sm' | 'md'

export type BadgeProps = {
  variant?: BadgeVariant
  size?: BadgeSize
  className?: string
  children: ReactNode
}

export default function Badge({
  variant = 'neutral',
  size = 'sm',
  className,
  children,
}: BadgeProps) {
  const sizeClasses =
    size === 'md'
      ? 'px-2.5 py-1 text-sm'
      : 'px-2 py-0.5 text-xs'

  const variantClasses =
    variant === 'success'
      ? 'bg-accent-green/30 border-accent-green/60 text-text-main'
      : variant === 'error'
        ? 'bg-error/15 border-error/40 text-error'
        : variant === 'processing'
          ? 'bg-primary/25 border-primary/50 text-text-secondary'
          : 'bg-card-soft border-border text-text-secondary'

  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border font-medium',
        sizeClasses,
        variantClasses,
        className,
      )}
    >
      {children}
    </span>
  )
}


import { type ReactNode } from 'react'
import { cn } from '../lib/cn'

export type CardVariant = 'default' | 'soft' | 'outline'

export type CardProps = {
  variant?: CardVariant
  className?: string
  children?: ReactNode
}

export default function Card({
  variant = 'default',
  className,
  children,
}: CardProps) {
  const variantClasses =
    variant === 'soft'
      ? 'bg-card-soft border border-border'
      : variant === 'outline'
        ? 'bg-transparent border border-border'
        : 'bg-card border border-border'

  return (
    <div className={cn('rounded-md p-6', variantClasses, className)}>
      {children}
    </div>
  )
}


import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-background hover:bg-primary-dark font-medium text-base md:text-lg py-3 md:py-4 px-6 md:px-8',
        accent: 'bg-accent text-white hover:bg-accent-dark font-medium text-base md:text-lg py-3 md:py-4 px-6 md:px-8',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-background font-medium text-base md:text-lg py-3 md:py-4 px-6 md:px-8',
        ghost: 'hover:bg-primary/10 text-primary font-medium',
        highlight: 'bg-highlight text-white hover:bg-highlight-dark font-medium text-base md:text-lg py-3 md:py-4 px-6 md:px-8',
      },
      size: {
        default: 'text-base md:text-lg py-3 md:py-4 px-6 md:px-8',
        sm: 'text-sm py-2.5 px-4',
        lg: 'text-lg md:text-xl py-4 md:py-5 px-8 md:px-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }


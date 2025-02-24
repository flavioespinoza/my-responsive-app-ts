import { forwardRef } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
  variant?: 'default' | 'outline'
  size?: 'default' | 'icon'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
          variant === 'outline'
            ? 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground'
            : 'bg-primary text-primary-foreground hover:bg-primary/90',
          size === 'icon' ? 'h-10 w-10' : 'h-10 px-4 py-2',
          className // Now guaranteed to be a string
        )}
        {...props}
      />
    )
  }
)

Button.displayName = 'Button'

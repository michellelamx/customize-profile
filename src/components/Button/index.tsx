import { Slot } from '@radix-ui/react-slot'
import { type VariantProps } from 'class-variance-authority'
import { buttonVariants } from './variants'
import { CSSProperties, forwardRef } from 'react'
import './main.css'


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  customStyle?: CSSProperties
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, asChild = false, customStyle, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const classes = `${buttonVariants({ variant })} ${className || ''}`.trim()

    return (
      <Comp className={classes} ref={ref} {...props} style={customStyle}>
        {props.children}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

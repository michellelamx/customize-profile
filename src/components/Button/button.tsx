import { type VariantProps } from 'class-variance-authority'
import { ButtonHTMLAttributes, forwardRef } from 'react'
import { buttonVariants } from './variants'

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, ...props },
    ref,
  ) => {
    const classes =
      `${buttonVariants({ variant })} ${className || ''}`.trim()

    return (
      <button className={classes} ref={ref} {...props}>
        {props.children}
      </button>
    )
  },
)
Button.displayName = 'Button'

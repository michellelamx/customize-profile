import { Button as ShadButton } from './button'
import './main.css'
import { CSSProperties, forwardRef, ReactNode } from 'react'

interface ShadButtonProps {
  onClick?: () => void
  variant?: 'rounded' | 'squared'
  customStyle?: CSSProperties
  children: ReactNode
  className?: string,
  disabled?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ShadButtonProps>(
  (
    {
      children,
      variant = 'rounded',
      className,
      customStyle,
      onClick,
      ...props
    },
    ref,
  ) => {
    return (
      <ShadButton
        className={className}
        ref={ref}
        variant={variant}
        style={customStyle}
        onClick={onClick}
        {...props}
      >
        {children}
      </ShadButton>
    )
  },
)
Button.displayName = 'Button'

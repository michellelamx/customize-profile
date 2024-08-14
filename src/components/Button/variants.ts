import { cva } from 'class-variance-authority'

export const buttonVariants = cva('lt-button', {
  variants: {
    variant: {
      rounded: 'rounded',
      squared: 'squared',
    },
  },
  defaultVariants: {
    variant: 'rounded',
  },
})

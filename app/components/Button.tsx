// components/ui/Button.tsx


import { ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '../lib/utils' // si usas shadcn, sino define cn más abajo

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props 
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl font-bold transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-2 transition'
  
  const variants = {
    primary: 'bg-white text-black hover:bg-teal',
    secondary: 'bg-black text-white hover:bg-gray-800',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black'
  }
  
  const sizes = {
    sm: 'px-3 py-1 text-sm',
    md: 'px-6 py-2 text-lg',
    lg: 'px-8 py-4 text-lg'
  }
  
  const widthClass = fullWidth ? 'w-full' : 'w-full md:w-auto'
  
  return (
    <button 
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        widthClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
// components/ui/Button.tsx


import { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '../lib/utils'

type BaseProps = {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

// Unión de tipos para soportar tanto atributos de botón como de enlace
type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: never }
type AnchorProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }

export function Button({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  ...props 
}: ButtonProps | AnchorProps) {
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-xl font-bold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-1 active:translate-y-0 text-center'
  
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
  
  const combinedClassName = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    widthClass,
    className
  )

  // Si tiene href, es un Link (Componente de servidor amigable)
  if ('href' in props && props.href) {
    return (
      <Link 
        className={combinedClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={props.href}
      >
        {children}
      </Link>
    )
  }

  // De lo contrario, es un botón estándar
  return (
    <button 
      className={combinedClassName}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  )
}
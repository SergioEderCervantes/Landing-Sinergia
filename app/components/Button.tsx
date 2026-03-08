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
  const baseStyles = 'btn-shimmer relative overflow-hidden inline-flex items-center justify-center font-bold rounded-lg transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5 hover:bg-teal  hover:scale-[1.015] active:scale-[0.985] text-center'

  const variants = {
    primary: 'bg-white text-black hover:shadow-[0_8px_30px_rgba(20,184,166,0.22)]',
    secondary: 'bg-black text-white hover:bg-gray-800 hover:shadow-[0_8px_30px_rgba(20,184,166,0.22)]',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-black',
  }

  const sizes = {
    sm: 'text-sm px-6 py-3.5',
    md: 'text-sm md:text-base px-6 md:px-8 py-3.5 md:py-4',
    lg: 'text-base md:text-lg px-8 md:px-10 py-4 md:py-5',
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

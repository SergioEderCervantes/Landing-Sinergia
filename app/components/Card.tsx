// components/Card.tsx
'use client'
import React, { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'

interface CardProps {
  title?: string
  description?: string
  icon?: string
}

const Card: React.FC<CardProps> = ({ 
  title = "Title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque dolor, sapiente quaerat inventore est voluptatem nobis voluptate",
  icon
}) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const lightRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

  // Inicializar posición al montar
  useEffect(() => {
    if (!lightRef.current) return
    
    // Setear posición inicial con GSAP (no con CSS)
    gsap.set(lightRef.current, {
      x: 0,
      y: 0
    })
  }, [])

  useEffect(() => {
    if (!cardRef.current || !lightRef.current) return

    const card = cardRef.current
    const light = lightRef.current

    if (isHovering) {
      // GSAP quickTo para smooth tracking
      const xTo = gsap.quickTo(light, 'x', { duration: 0.6, ease: 'power3.out' })
      const yTo = gsap.quickTo(light, 'y', { duration: 0.6, ease: 'power3.out' })

      const handleMouseMove = (e: MouseEvent) => {
        const rect = card.getBoundingClientRect()
        const x = e.clientX - rect.left - 200
        const y = e.clientY - rect.top - 200
        
        xTo(x)
        yTo(y)
      }

      card.addEventListener('mousemove', handleMouseMove)
      
      return () => {
        card.removeEventListener('mousemove', handleMouseMove)
      }
    } else {
      // Animar de regreso al centro cuando sale el mouse
      gsap.to(light, {
        x: 0,
        y: 0,
        duration: 1,
        ease: 'power3.out'
      })
    }
  }, [isHovering])

  return (
    <div 
      ref={cardRef}
      className='relative flex flex-col my-8 size-full border border-white/10 rounded-xl p-8 overflow-hidden group hover:border-teal transition-colors duration-500'
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/2 backdrop-blur-sm" />
      
      {/* Light source - tracking solo en hover */}
      <div 
        ref={lightRef}
        className="absolute size-60 bg-lavender-web/30 group-hover:bg-lavender-web/50 rounded-full blur-3xl transition-opacity duration-500 pointer-events-none"
        style={{
          opacity: isHovering ? 1 : 0.6,
          willChange: 'transform',
          // Posición inicial centrada CON TRANSLATE
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)' // Esto es el baseline
        }}
      />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent" />
      
      {/* Content - relative to stay above backgrounds */}
      <div className="relative z-10">
        <div className="flex text-center min-h-20">
          {icon && (
            <img 
              className='absolute top-0 left-0 size-20 border border-white/20 rounded-xl bg-black/50 backdrop-blur-sm' 
              src={icon} 
              alt="logo" 
            />
          )}
          <h4 className='text-xl font-bold w-full'>{title}</h4>
        </div>
        
        <div className="text-gray-400 mt-8 px-4">
          {description}
        </div>
      </div>
      
    </div>
  )
}

export default Card
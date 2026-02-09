// components/Card.tsx
import React from 'react';

interface CardProps {
  title?: string;
  description?: string;
  icon?: string;
}

const Card: React.FC<CardProps> = ({ 
  title = "Title",
  description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse atque dolor, sapiente quaerat inventore est voluptatem nobis voluptate",
  icon
}) => {
  return (
    <div className='relative flex flex-col my-8 size-full border border-white/10 rounded-xl p-8 overflow-hidden group hover:border-teal transition-colors duration-500'>
      {/* Glassmorphism background */}
      <div className="absolute inset-0 bg-white/2 backdrop-blur-sm" />
      
      {/* Light source - top right */}
      <div className="absolute -top-25 -right-25 size-60 bg-lavender-web/30 rounded-full blur-3xl group-hover:bg-lavender-web/40 transition-all duration-500" />
      
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-white/5 via-transparent to-transparent" />
      
      {/* Content - relative to stay above backgrounds */}
      <div className="relative z-10">
        <div className="flex text-center min-h-20 ">
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
      
      {/* Hover effect - border glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: 'radial-gradient(circle at center, rgba(71, 191, 215, 0.2) 0%, transparent 70%)',
           }}
      />
    </div>
  );
};

export default Card;
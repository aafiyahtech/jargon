
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FancyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'subtle' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FancyButton: React.FC<FancyButtonProps> = ({ 
  children, 
  variant = 'default', 
  size = 'md',
  className,
  ...props 
}) => {
  return (
    <button
      className={cn(
        'relative overflow-hidden rounded-full transition-all duration-300',
        'font-medium border',
        'hover:shadow-lg active:scale-95 group',
        variant === 'default' && 'bg-accent text-white border-transparent',
        variant === 'subtle' && 'bg-secondary text-primary border-transparent',
        variant === 'outline' && 'bg-transparent text-primary border-primary',
        variant === 'ghost' && 'bg-transparent text-primary border-transparent hover:bg-secondary',
        size === 'sm' && 'text-xs px-4 py-1.5',
        size === 'md' && 'text-sm px-6 py-2.5',
        size === 'lg' && 'text-base px-8 py-3',
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center justify-center">
        {children}
      </span>
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-accent/80 to-primary/80 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
    </button>
  );
};

export default FancyButton;

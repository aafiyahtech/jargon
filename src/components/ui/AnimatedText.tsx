
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  delay?: number;
  once?: boolean;
}

export function AnimatedText({
  text,
  className,
  wordClassName,
  delay = 0,
  once = false,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const words = text.split(' ');

  return (
    <div className={cn('overflow-hidden', className)}>
      <div className="flex flex-wrap">
        {words.map((word, i) => (
          <span
            key={i}
            className={cn(
              'inline-block transform transition-transform duration-700 ease-out opacity-0',
              isVisible && 'opacity-100 translate-y-0',
              wordClassName
            )}
            style={{
              transitionDelay: `${delay + i * 50}ms`,
              transform: isVisible ? 'translateY(0)' : 'translateY(2rem)',
            }}
          >
            {word}{' '}
          </span>
        ))}
      </div>
    </div>
  );
}

export default AnimatedText;

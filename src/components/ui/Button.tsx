import React from 'react';
import { cn } from '../../utils/cn';
import { motion, HTMLMotionProps } from 'motion/react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outline' | 'ghost';
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center px-8 py-4 text-base font-display font-bold transition-all duration-300 outline-none select-none rounded-2xl",
          variant === 'primary' && "bg-primary text-inverted hover:bg-secondary hover:text-inverted shadow-sm hover:shadow-md",
          variant === 'secondary' && "bg-secondary text-inverted hover:bg-primary border border-secondary hover:border-primary shadow-sm hover:shadow-md",
          variant === 'tertiary' && "bg-tertiary text-inverted hover:bg-primary shadow-sm hover:shadow-md",
          variant === 'outline' && "bg-transparent text-primary hover:text-secondary border border-primary/20 hover:border-secondary hover:bg-primary/5",
          variant === 'ghost' && "bg-transparent text-text-muted hover:text-primary hover:bg-surface",
          className
        )}
        {...props as any}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

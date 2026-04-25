import React from 'react';
import { cn } from '../../utils/cn';
import { motion } from 'motion/react';

interface CardProps extends React.ComponentPropsWithoutRef<'div'> {
  variant?: 'default' | 'muted' | 'outline';
  glowOnHover?: boolean;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
  key?: string | number;
}

export function Card({ className, children, variant = 'default', glowOnHover = false, delay = 0, ...props }: CardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.3, delay: delay, ease: "easeOut" }}
      whileHover={glowOnHover ? { scale: 1.02, y: -4 } : { scale: 1.01, y: -2 }}
      className={cn(
        "p-8 relative overflow-hidden transition-shadow duration-300",
        variant === 'default' && "clay-card",
        variant === 'muted' && "clay-card bg-bg-base",
        variant === 'outline' && "clay-card border border-primary/10",
        glowOnHover 
          ? "hover:shadow-[0_20px_40px_-5px_rgba(0,0,0,0.1)] hover:shadow-primary/20" 
          : "hover:shadow-lg",
        className
      )}
      {...props as any}
    >
      {children}
    </motion.div>
  );
}

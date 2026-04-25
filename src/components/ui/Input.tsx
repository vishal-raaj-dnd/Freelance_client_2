import React from 'react';
import { cn } from '../../utils/cn';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3 w-full">
        {label && (
          <label htmlFor={id} className="text-text-muted text-xs uppercase tracking-wider font-bold pl-4">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={cn(
            "clay-input w-full px-6 py-4 text-text-main outline-none focus:ring-2 focus:ring-primary/20 placeholder:text-text-muted/60 transition-all font-sans",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

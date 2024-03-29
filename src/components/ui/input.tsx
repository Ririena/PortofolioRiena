import * as React from "react";

import { cn } from "@/lib/utils";
import { TypeAnimation } from "react-type-animation";
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholderAnimation?: any[];
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, placeholder, placeholderAnimation, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {placeholderAnimation && (
          <TypeAnimation
            sequence={placeholderAnimation}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="absolute inset-y-0 left-3 flex items-center text-muted-foreground"
          />
        )}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };

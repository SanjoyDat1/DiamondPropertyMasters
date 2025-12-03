import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";
    
    const variants = {
      primary: "bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl",
      secondary: "bg-neutral-900 text-white hover:bg-neutral-800",
      ghost: "hover:bg-neutral-100 text-neutral-700",
      outline: "border-2 border-neutral-300 hover:border-primary hover:text-primary",
    };

    const sizes = {
      sm: "h-12 px-5 text-sm min-h-[48px]",
      md: "h-14 px-6 text-base min-h-[48px]",
      lg: "h-16 px-8 text-lg min-h-[48px]",
    };

    return (
      <Comp
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };


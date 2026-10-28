import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-btn font-semibold transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:pointer-events-none disabled:opacity-55 [&_svg]:pointer-events-none [&_svg]:shrink-0 select-none active:scale-[0.98]",
  {
    variants: {
      variant: {
        primary:
          "bg-brand-600 text-white shadow-soft hover:bg-brand-700 hover:shadow-card hover:-translate-y-0.5",
        accent:
          "bg-sky-500 text-white shadow-soft hover:bg-sky-600 hover:-translate-y-0.5",
        gold:
          "bg-gold-400 text-ink shadow-soft hover:bg-gold-500 hover:text-white hover:-translate-y-0.5",
        outline:
          "border border-line bg-white text-brand-700 hover:bg-brand-50 hover:border-brand-300",
        outlineDark:
          "border border-white/30 bg-transparent text-white hover:bg-white/10 hover:border-white/55",
        ghost: "text-brand-700 hover:bg-brand-50",
        white:
          "bg-white text-brand-700 shadow-soft hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-card",
        link: "text-brand-600 underline-offset-4 hover:underline rounded-md px-0",
      },
      size: {
        sm: "h-10 px-4 text-sm [&_svg]:size-4",
        md: "h-12 px-6 text-[0.95rem] [&_svg]:size-[1.15rem]",
        lg: "h-13 px-7 text-base [&_svg]:size-5",
        icon: "size-11 [&_svg]:size-5",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };

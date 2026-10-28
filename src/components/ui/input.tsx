import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "flex h-12 w-full rounded-2xl border border-line bg-white px-4 text-[0.95rem] text-ink shadow-[inset_0_1px_2px_rgba(15,32,51,0.03)] transition-colors duration-200 placeholder:text-muted/70 focus-visible:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-200",
          className,
        )}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };

import * as React from "react";
import { cn } from "@/lib/utils";

const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => {
  return (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-28 w-full rounded-2xl border border-line bg-white px-4 py-3 text-[0.95rem] text-ink shadow-[inset_0_1px_2px_rgba(15,32,51,0.03)] transition-colors duration-200 placeholder:text-muted/70 focus-visible:border-brand-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/25 disabled:cursor-not-allowed disabled:opacity-60 aria-[invalid=true]:border-red-400 aria-[invalid=true]:ring-red-200 resize-y",
        className,
      )}
      {...props}
    />
  );
});
Textarea.displayName = "Textarea";

export { Textarea };

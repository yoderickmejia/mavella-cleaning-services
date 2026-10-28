import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";

export function Field({
  label,
  htmlFor,
  error,
  required,
  optional,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  optional?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <Label htmlFor={htmlFor} className="flex items-center gap-1">
        {label}
        {required && <span className="text-brand-500">*</span>}
        {optional && <span className="font-normal text-muted/70">(optional)</span>}
      </Label>
      {children}
      {error ? (
        <p role="alert" className="text-sm font-medium text-red-600">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function FormStatus({
  state,
  successMessage,
  errorMessage,
}: {
  state: "success" | "error";
  successMessage: string;
  errorMessage: string;
}) {
  const ok = state === "success";
  return (
    <div
      role="status"
      className={cn(
        "flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-sm font-medium",
        ok
          ? "border-brand-200 bg-brand-50 text-brand-800"
          : "border-red-200 bg-red-50 text-red-700",
      )}
    >
      <span
        className={cn(
          "mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full text-white",
          ok ? "bg-brand-600" : "bg-red-500",
        )}
        aria-hidden
      >
        {ok ? "✓" : "!"}
      </span>
      <p>{ok ? successMessage : errorMessage}</p>
    </div>
  );
}

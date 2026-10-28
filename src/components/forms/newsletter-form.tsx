"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newsletterSchema, type NewsletterInput } from "@/lib/schemas";
import { newsletter } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function NewsletterForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<NewsletterInput>({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "", company: "" },
  });

  async function onSubmit(values: NewsletterInput) {
    const res = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("request_failed");
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="w-full">
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("company")}
      />
      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor="nl-email" className="sr-only">
            {newsletter.fieldPlaceholder}
          </label>
          <Input
            id="nl-email"
            type="email"
            autoComplete="email"
            placeholder={newsletter.fieldPlaceholder}
            aria-invalid={!!errors.email}
            className="h-13 border-transparent bg-white"
            {...register("email")}
          />
        </div>
        <Button type="submit" size="lg" variant="accent" disabled={isSubmitting}>
          {isSubmitting ? "Signing up…" : newsletter.submitLabel}
        </Button>
      </div>
      {errors.email && (
        <p role="alert" className="mt-2 text-sm font-medium text-white">
          {errors.email.message}
        </p>
      )}
      {isSubmitSuccessful && (
        <p role="status" className="mt-2 text-sm font-medium text-white">
          You&apos;re in! Thanks for subscribing — a little more freshness is on its way.
        </p>
      )}
    </form>
  );
}

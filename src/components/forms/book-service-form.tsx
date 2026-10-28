"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import { quoteSchema, type QuoteInput } from "@/lib/schemas";
import { serviceOptions } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Field, FormStatus } from "./field";

/** Compact "Book a Service" card form used inline on the home page. */
export function BookServiceForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: { fullName: "", phone: "", email: "", service: "", company: "" },
  });

  async function onSubmit(values: QuoteInput) {
    const res = await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("request_failed");
    reset();
  }

  const deliveryFailed = isSubmitted && !isSubmitSuccessful;

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-4">
      {isSubmitSuccessful && (
        <FormStatus
          state="success"
          successMessage="Thank you! We've received your request and will be in touch soon."
          errorMessage=""
        />
      )}
      {deliveryFailed && (
        <FormStatus
          state="error"
          successMessage=""
          errorMessage="Something went wrong. Please try again or call us directly."
        />
      )}

      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden className="hidden" {...register("company")} />

      <Field label="Full Name" htmlFor="b-name" required error={errors.fullName?.message}>
        <Input id="b-name" autoComplete="name" placeholder="Jane Doe" aria-invalid={!!errors.fullName} {...register("fullName")} />
      </Field>
      <Field label="Phone Number" htmlFor="b-phone" required error={errors.phone?.message}>
        <Input id="b-phone" type="tel" autoComplete="tel" placeholder="(555) 014-2080" aria-invalid={!!errors.phone} {...register("phone")} />
      </Field>
      <Field label="Email Address" htmlFor="b-email" required error={errors.email?.message}>
        <Input id="b-email" type="email" autoComplete="email" placeholder="jane@email.com" aria-invalid={!!errors.email} {...register("email")} />
      </Field>
      <Field label="Choose a Service" htmlFor="b-service" required error={errors.service?.message}>
        <Controller
          control={control}
          name="service"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger id="b-service" aria-invalid={!!errors.service}>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map((s) => (
                  <SelectItem key={s} value={s}>
                    {s}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          )}
        />
      </Field>

      <Button type="submit" variant="gold" size="lg" disabled={isSubmitting} className="mt-1 w-full">
        {isSubmitting ? "Sending…" : "Submit Request"}
        {!isSubmitting && <ArrowRight />}
      </Button>
    </form>
  );
}

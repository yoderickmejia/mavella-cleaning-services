"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { quoteSchema, type QuoteInput } from "@/lib/schemas";
import { serviceOptions, propertyTypeOptions, quote } from "@/lib/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Field, FormStatus } from "./field";

export function QuoteForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<QuoteInput>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      phone: "",
      email: "",
      service: "",
      propertyType: "",
      preferredDate: "",
      propertySize: "",
      details: "",
      company: "",
    },
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
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
      {isSubmitSuccessful && (
        <FormStatus
          state="success"
          successMessage="Thank you! We've received your request and will be in touch soon to discuss your quote."
          errorMessage=""
        />
      )}
      {deliveryFailed && (
        <FormStatus
          state="error"
          successMessage=""
          errorMessage="Something went wrong sending your request. Please try again or call us directly."
        />
      )}

      {/* Honeypot */}
      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("company")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="q-name" required error={errors.fullName?.message}>
          <Input
            id="q-name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
        </Field>
        <Field label="Phone Number" htmlFor="q-phone" required error={errors.phone?.message}>
          <Input
            id="q-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 014-2080"
            aria-invalid={!!errors.phone}
            {...register("phone")}
          />
        </Field>
      </div>

      <Field label="Email Address" htmlFor="q-email" required error={errors.email?.message}>
        <Input
          id="q-email"
          type="email"
          autoComplete="email"
          placeholder="jane@email.com"
          aria-invalid={!!errors.email}
          {...register("email")}
        />
      </Field>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Type of Service" htmlFor="q-service" required error={errors.service?.message}>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="q-service" aria-invalid={!!errors.service}>
                  <SelectValue placeholder="Choose a service" />
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
        <Field
          label="Property Type"
          htmlFor="q-property"
          optional
          error={errors.propertyType?.message}
        >
          <Controller
            control={control}
            name="propertyType"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="q-property" aria-invalid={!!errors.propertyType}>
                  <SelectValue placeholder="Choose a property type" />
                </SelectTrigger>
                <SelectContent>
                  {propertyTypeOptions.map((p) => (
                    <SelectItem key={p} value={p}>
                      {p}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Preferred Date" htmlFor="q-date" optional error={errors.preferredDate?.message}>
          <Input id="q-date" type="date" {...register("preferredDate")} />
        </Field>
        <Field label="Property Size" htmlFor="q-size" optional error={errors.propertySize?.message}>
          <Input id="q-size" placeholder="e.g. 3 bed / 2 bath, ~1,500 sq ft" {...register("propertySize")} />
        </Field>
      </div>

      <Field label="Additional Details" htmlFor="q-details" optional error={errors.details?.message}>
        <Textarea
          id="q-details"
          rows={4}
          placeholder="Tell us about any areas that need extra attention…"
          {...register("details")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1 w-full sm:w-auto">
        {isSubmitting ? "Sending…" : quote.submitLabel}
        {!isSubmitting && <Send />}
      </Button>
    </form>
  );
}

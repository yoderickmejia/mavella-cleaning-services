"use client";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/schemas";
import { serviceOptions, contact } from "@/lib/site";
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

export function ContactForm() {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful, isSubmitted },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      company: "",
    },
  });

  async function onSubmit(values: ContactInput) {
    const res = await fetch("/api/contact", {
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
          successMessage="Thanks for reaching out! We've got your message and will reply as soon as we can."
          errorMessage=""
        />
      )}
      {deliveryFailed && (
        <FormStatus
          state="error"
          successMessage=""
          errorMessage="Something went wrong sending your message. Please try again or call us directly."
        />
      )}

      <input
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
        {...register("company")}
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" htmlFor="c-name" required error={errors.fullName?.message}>
          <Input
            id="c-name"
            autoComplete="name"
            placeholder="Jane Doe"
            aria-invalid={!!errors.fullName}
            {...register("fullName")}
          />
        </Field>
        <Field label="Email Address" htmlFor="c-email" required error={errors.email?.message}>
          <Input
            id="c-email"
            type="email"
            autoComplete="email"
            placeholder="jane@email.com"
            aria-invalid={!!errors.email}
            {...register("email")}
          />
        </Field>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" htmlFor="c-phone" optional error={errors.phone?.message}>
          <Input
            id="c-phone"
            type="tel"
            autoComplete="tel"
            placeholder="(555) 014-2080"
            {...register("phone")}
          />
        </Field>
        <Field label="Service Needed" htmlFor="c-service" optional error={errors.service?.message}>
          <Controller
            control={control}
            name="service"
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger id="c-service">
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
      </div>

      <Field label="Your Message" htmlFor="c-message" required error={errors.message?.message}>
        <Textarea
          id="c-message"
          rows={5}
          placeholder="Tell us what's on your mind…"
          aria-invalid={!!errors.message}
          {...register("message")}
        />
      </Field>

      <Button type="submit" size="lg" disabled={isSubmitting} className="mt-1 w-full sm:w-auto">
        {isSubmitting ? "Sending…" : contact.submitLabel}
        {!isSubmitting && <Send />}
      </Button>
    </form>
  );
}

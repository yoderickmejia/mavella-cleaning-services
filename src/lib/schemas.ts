import { z } from "zod";

const name = z.string().trim().min(2, "Please enter your full name.").max(80);
const email = z.string().trim().min(1, "Email address is required.").email("Please enter a valid email address.");
const phone = z
  .string()
  .trim()
  .min(7, "Please enter a valid phone number.")
  .max(25, "Please enter a valid phone number.")
  .regex(/^[+()\-\s\d]+$/, "Please enter a valid phone number.");

export const quoteSchema = z.object({
  fullName: name,
  phone,
  email,
  service: z.string().trim().min(1, "Please choose a service."),
  propertyType: z.string().trim().optional().or(z.literal("")),
  preferredDate: z.string().trim().optional().or(z.literal("")),
  propertySize: z.string().trim().max(60).optional().or(z.literal("")),
  details: z.string().trim().max(1500).optional().or(z.literal("")),
  // honeypot
  company: z.string().max(0).optional(),
});

export type QuoteInput = z.infer<typeof quoteSchema>;

export const contactSchema = z.object({
  fullName: name,
  email,
  phone: phone.optional().or(z.literal("")),
  service: z.string().trim().optional().or(z.literal("")),
  message: z.string().trim().min(10, "Please add a few details so we can help.").max(1500),
  company: z.string().max(0).optional(),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const newsletterSchema = z.object({
  email,
  company: z.string().max(0).optional(),
});

export type NewsletterInput = z.infer<typeof newsletterSchema>;

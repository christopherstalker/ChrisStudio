import { z } from "zod";

export const budgetOptions = [
  "$2k - $5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k+",
] as const;

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name."),
  email: z
    .string()
    .trim()
    .min(1, "Please enter your email address.")
    .email("Please enter a valid email address."),
  company: z.string().trim().min(1, "Please enter your company name."),
  budget: z.enum(budgetOptions, {
    required_error: "Please select a project budget.",
  }),
  description: z
    .string()
    .trim()
    .min(1, "Please describe your project.")
    .min(20, "Please include at least a few details about your project."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

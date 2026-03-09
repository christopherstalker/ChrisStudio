import { z } from "zod";

export const budgetOptions = [
  "",
  "$2k - $5k",
  "$5k - $10k",
  "$10k - $25k",
  "$25k+",
] as const;

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email address."),
  company: z.string().optional(),
  budget: z.enum(budgetOptions),
  description: z.string().min(20, "Please include at least a few details about your project."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

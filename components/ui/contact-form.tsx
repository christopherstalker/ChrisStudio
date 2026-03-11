"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { InputField, SelectField, TextareaField } from "@/components/ui/form-fields";
import {
  budgetOptions,
  contactSchema,
  type ContactFormValues,
} from "@/lib/contact-schema";

type SuccessState = {
  inquiryId: string;
  message: string;
};

type SubmissionStatus = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [serverError, setServerError] = useState<string | null>(null);
  const [successState, setSuccessState] = useState<SuccessState | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    mode: "onSubmit",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      company: "",
      budget: undefined,
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (values) => {
    setServerError(null);
    setSubmissionStatus("sending");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = (await response.json()) as {
        message?: string;
        inquiryId?: string;
        errors?: Record<string, string[] | undefined>;
      };

      if (!response.ok) {
        if (data.errors) {
          for (const [field, messages] of Object.entries(data.errors)) {
            if (messages?.[0]) {
              setError(field as keyof ContactFormValues, {
                type: "server",
                message: messages[0],
              });
            }
          }
        }

        setServerError(data.message ?? "Something went wrong while sending the form.");
        setSubmissionStatus("error");
        return;
      }

      setSuccessState({
        inquiryId: data.inquiryId ?? "N/A",
        message:
          data.message ??
          "Thanks for the brief. I will review it and reply with next steps within one business day.",
      });
      setSubmissionStatus("success");
      reset();
    } catch {
      setServerError("Network error. Please try again in a moment.");
      setSubmissionStatus("error");
    }
  });

  if (successState) {
    return (
      <div className="surface surface-interactive p-8 sm:p-10">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent/10 text-accent">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div className="space-y-4">
            <div>
              <p className="eyebrow mb-3">Inquiry received</p>
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-ink">
                Thanks. The brief is in.
              </h3>
              <p className="mt-3 max-w-xl text-base leading-7">{successState.message}</p>
            </div>
            <div className="surface-muted rounded-[22px] p-4">
              <p className="text-sm font-medium text-ink">
                Reference ID: <span className="font-mono">{successState.inquiryId}</span>
              </p>
              <p className="mt-2 text-sm text-muted">
                If the project looks aligned, the next reply will usually include a
                proposed call structure, timeline assumptions, and the best next step.
              </p>
            </div>
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setSuccessState(null);
                setSubmissionStatus("idle");
              }}
            >
              Submit Another Inquiry
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="surface surface-interactive p-6 sm:p-8 lg:p-10">
      <div className="grid gap-6 sm:grid-cols-2">
        <InputField
          label="Name"
          required
          autoComplete="name"
          placeholder="Your name"
          error={errors.name?.message}
          {...register("name")}
        />
        <InputField
          label="Email"
          required
          autoComplete="email"
          placeholder="you@company.com"
          error={errors.email?.message}
          {...register("email")}
        />
        <InputField
          label="Company"
          autoComplete="organization"
          placeholder="Company name"
          error={errors.company?.message}
          {...register("company")}
        />
        <SelectField
          label="Project Budget"
          required
          error={errors.budget?.message}
          {...register("budget")}
        >
          <option value="">Select a range</option>
          {budgetOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </SelectField>
      </div>

      <div className="mt-6">
        <TextareaField
          label="Project Description"
          required
          placeholder="What are you building, what is not working today, and what would a successful outcome look like?"
          hint="A few concrete details make it much easier to respond usefully."
          error={errors.description?.message}
          {...register("description")}
        />
      </div>

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          {submissionStatus === "error" && serverError ? (
            <p className="text-sm text-red-600">{serverError}</p>
          ) : null}
          {submissionStatus !== "error" ? (
            <p className="text-sm text-muted">
              Serious inquiries only. Typical response time is within one business day.
            </p>
          ) : null}
        </div>
        <Button type="submit" size="lg" trailingIcon={!isSubmitting} disabled={isSubmitting}>
          {submissionStatus === "sending" ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              <span>Sending</span>
            </>
          ) : (
            "Send Inquiry"
          )}
        </Button>
      </div>
    </form>
  );
}

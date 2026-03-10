import { forwardRef } from "react";

import { cn } from "@/lib/utils";

type SharedFieldProps = {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
};

const baseFieldStyles =
  "w-full rounded-[20px] border border-line bg-white/90 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-accent/50 focus:ring-4 focus:ring-accent/10";

export const InputField = forwardRef<
  HTMLInputElement,
  SharedFieldProps & React.InputHTMLAttributes<HTMLInputElement>
>(function InputField({ label, error, hint, required, className, ...props }, ref) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        ref={ref}
        required={required}
        aria-invalid={error ? "true" : "false"}
        className={cn(
          baseFieldStyles,
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className,
        )}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
      {!error && hint ? <span className="mt-2 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
});

export const SelectField = forwardRef<
  HTMLSelectElement,
  SharedFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>
>(function SelectField(
  { label, error, hint, required, className, children, ...props },
  ref,
) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <select
        ref={ref}
        required={required}
        aria-invalid={error ? "true" : "false"}
        className={cn(
          baseFieldStyles,
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
      {!error && hint ? <span className="mt-2 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
});

export const TextareaField = forwardRef<
  HTMLTextAreaElement,
  SharedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(function TextareaField({ label, error, hint, required, className, ...props }, ref) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <textarea
        ref={ref}
        required={required}
        aria-invalid={error ? "true" : "false"}
        className={cn(
          baseFieldStyles,
          "min-h-[172px] resize-y",
          error && "border-red-300 focus:border-red-400 focus:ring-red-100",
          className,
        )}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
      {!error && hint ? <span className="mt-2 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
});

InputField.displayName = "InputField";
SelectField.displayName = "SelectField";
TextareaField.displayName = "TextareaField";


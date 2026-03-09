import { cn } from "@/lib/utils";

type SharedFieldProps = {
  label: string;
  error?: string;
  hint?: string;
  required?: boolean;
};

const baseFieldStyles =
  "w-full rounded-[20px] border border-line bg-white/90 px-4 py-3 text-[15px] text-ink outline-none transition focus:border-accent/50 focus:ring-4 focus:ring-accent/10";

export function InputField({
  label,
  error,
  hint,
  required,
  className,
  ...props
}: SharedFieldProps & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <input
        className={cn(baseFieldStyles, error && "border-red-300 focus:border-red-400 focus:ring-red-100", className)}
        {...props}
      />
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
      {!error && hint ? <span className="mt-2 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
}

export function SelectField({
  label,
  error,
  hint,
  required,
  className,
  children,
  ...props
}: SharedFieldProps & React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <select
        className={cn(baseFieldStyles, error && "border-red-300 focus:border-red-400 focus:ring-red-100", className)}
        {...props}
      >
        {children}
      </select>
      {error ? <span className="mt-2 block text-sm text-red-600">{error}</span> : null}
      {!error && hint ? <span className="mt-2 block text-sm text-muted">{hint}</span> : null}
    </label>
  );
}

export function TextareaField({
  label,
  error,
  hint,
  required,
  className,
  ...props
}: SharedFieldProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-ink">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      <textarea
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
}

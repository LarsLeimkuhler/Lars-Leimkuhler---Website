"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle, WarningCircle, PaperPlaneTilt } from "@phosphor-icons/react";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: typeof errors = {};
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please use a valid email address.";
    }
    if (message.length < 10) {
      nextErrors.message = "A few sentences, please — at least 10 characters.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;

    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("Server error");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="rounded-2xl border border-border-faint bg-bg-elevated p-8"
          >
            <CheckCircle
              weight="fill"
              className="w-8 h-8 text-accent mb-4"
              aria-hidden
            />
            <p className="font-display text-h3 text-ink">Thanks — message sent.</p>
            <p className="mt-3 text-[1.0625rem] text-ink-muted max-w-md">
              I read everything that lands here and reply within a week. If it
              has been longer than that, the easiest fallback is email.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 mono-label transition-colors hover:text-ink"
            >
              ← Send another message
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onSubmit={handleSubmit}
            className="space-y-7"
            noValidate
          >
            <Field label="Your name" name="name" optional>
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                className="field-input"
                placeholder="Optional"
              />
            </Field>

            <Field
              label="Email"
              name="email"
              error={errors.email}
              helper="I'll only use this to reply."
            >
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                aria-invalid={Boolean(errors.email)}
                className="field-input"
              />
            </Field>

            <Field
              label="Message"
              name="message"
              error={errors.message}
              helper="A few sentences about what you're working on is plenty."
            >
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                aria-invalid={Boolean(errors.message)}
                className="field-input resize-y"
              />
            </Field>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-bg-elevated text-[0.9375rem] font-medium transition-all duration-300 hover:bg-accent disabled:opacity-60"
              >
                <span>
                  {status === "submitting" ? "Sending..." : "Send message"}
                </span>
                <PaperPlaneTilt
                  weight="regular"
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </button>

              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-1.5 text-[0.9375rem] text-accent"
                >
                  <WarningCircle weight="fill" className="w-4 h-4" />
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      <style>{`
        .field-input {
          width: 100%;
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border-faint);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 1rem;
          color: var(--color-ink);
          font-family: var(--font-sans);
          transition: border-color 200ms, box-shadow 200ms;
        }
        .field-input::placeholder { color: var(--color-ink-faint); }
        .field-input:focus {
          outline: none;
          border-color: var(--color-accent);
          box-shadow: 0 0 0 4px color-mix(in oklab, var(--color-accent) 12%, transparent);
        }
        .field-input[aria-invalid="true"] {
          border-color: var(--color-accent);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  name,
  helper,
  error,
  optional,
  children,
}: {
  label: string;
  name: string;
  helper?: string;
  error?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-[0.9375rem] font-medium text-ink mb-2"
      >
        {label}
        {optional && (
          <span className="ml-2 mono-label">Optional</span>
        )}
      </label>
      {children}
      {error ? (
        <p className="mt-2 text-[0.8125rem] text-accent">{error}</p>
      ) : helper ? (
        <p className="mt-2 text-[0.8125rem] text-ink-muted">{helper}</p>
      ) : null}
    </div>
  );
}

"use client";

import { type FocusEvent, type FormEvent, useCallback, useState } from "react";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { normalizeEmail, validateNewsletterEmail } from "@/lib/validate-email";
import { useSubscribeNewsletterMutation } from "@/store/api/autodhunApi";
import type { ApiError } from "@/types/api";

type NewsletterStatus = "idle" | "submitting" | "success" | "already" | "error";

function getApiErrorMessage(error: unknown): string {
  if (error && typeof error === "object" && "data" in error) {
    const data = (error as FetchBaseQueryError).data as ApiError | undefined;
    if (data && typeof data.message === "string" && data.message.trim()) {
      return data.message;
    }
  }
  return "Something went wrong. Please try again.";
}

export function FooterNewsletter() {
  const [status, setStatus] = useState<NewsletterStatus>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [fieldError, setFieldError] = useState<string | null>(null);
  const [subscribe] = useSubscribeNewsletterMutation();

  const validateField = useCallback((raw: string): string | null => {
    const error = validateNewsletterEmail(raw);
    setFieldError(error);
    return error;
  }, []);

  const onSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.currentTarget;
      const email = normalizeEmail(String(new FormData(form).get("email") ?? ""));

      const validationError = validateField(email);
      if (validationError) {
        setStatus("error");
        setMessage(validationError);
        return;
      }

      setStatus("submitting");
      setMessage(null);
      setFieldError(null);

      try {
        const result = await subscribe({ email, source: "footer" }).unwrap();
        setStatus(result.alreadySubscribed ? "already" : "success");
        setMessage(result.message);
        form.reset();
      } catch (err) {
        setStatus("error");
        setMessage(getApiErrorMessage(err));
      }
    },
    [subscribe, validateField]
  );

  const onFieldChange = useCallback(() => {
    if (status === "error" || fieldError) {
      setStatus("idle");
      setMessage(null);
      setFieldError(null);
    }
  }, [status, fieldError]);

  const onEmailBlur = useCallback(
    (event: FocusEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;
      if (!value.trim()) {
        setFieldError(null);
        return;
      }
      validateField(value);
    },
    [validateField]
  );

  const showForm = status !== "success" && status !== "already";
  const statusClass =
    status === "error"
      ? "footer-newsletter-status--error"
      : status === "already"
        ? "footer-newsletter-status--info"
        : "footer-newsletter-status--success";

  return (
    <section className="footer-newsletter" aria-label="Newsletter signup">
      <div className="footer-newsletter-inner">
        <div className="newsletter-text">
          <p className="footer-newsletter-title">Stay Tuned - Get Music Updates First</p>
        </div>
        <div className="footer-newsletter-action">
          {!showForm && message ? (
            <p className={`footer-newsletter-status ${statusClass}`} role="status">
              {message}
            </p>
          ) : (
            <>
              {(status === "error" && message) || fieldError ? (
                <p className="footer-newsletter-status footer-newsletter-status--error" role="alert">
                  {fieldError ?? message}
                </p>
              ) : null}
              <form className="footer-newsletter-form" onSubmit={onSubmit} noValidate>
                <label className="sr-only" htmlFor="footer-email">
                  Enter your email
                </label>
                <input
                  suppressHydrationWarning
                  aria-invalid={Boolean(fieldError || (status === "error" && message))}
                  className={`footer-newsletter-input${fieldError || (status === "error" && message) ? " footer-newsletter-input--error" : ""}`}
                  id="footer-email"
                  inputMode="email"
                  name="email"
                  placeholder="Enter your email"
                  type="text"
                  autoComplete="email"
                  disabled={status === "submitting"}
                  onBlur={onEmailBlur}
                  onChange={onFieldChange}
                />
                <button
                  suppressHydrationWarning
                  className="footer-newsletter-button"
                  type="submit"
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? "Subscribing…" : "Subscribe"}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

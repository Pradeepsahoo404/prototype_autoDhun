"use client";

import { type FormEvent, useCallback, useState } from "react";

const cardClass = "contact-form-tile tile-elevation-general w-full min-w-0";

export function GetInTouchForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const onSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("Name") ?? "").trim();
    const email = String(data.get("Email") ?? "").trim();
    const phone = String(data.get("Phone") ?? "").trim();
    const message = String(data.get("Message") ?? "").trim();
    if (!name || !email || !phone || !message) {
      setStatus("error");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    window.setTimeout(() => {
      setStatus("sent");
      form.reset();
    }, 450);
  }, []);

  const onFieldChange = useCallback(() => {
    if (status === "error") {
      setStatus("idle");
    }
  }, [status]);

  return (
    <div className={cardClass}>
      {status === "sent" ? (
        <div aria-label="General Contact Form success" className="contact-form-success success-message w-form-done" role="region" tabIndex={-1}>
          Thank you! Your submission has been received!
        </div>
      ) : (
        <>
          {status === "error" ? (
            <div
              aria-label="General Contact Form failure"
              className="contact-form-fail w-form-fail"
              role="region"
              tabIndex={-1}
            >
              Oops! Something went wrong while submitting the form.
            </div>
          ) : null}

          <div className="form-block-contact w-form">
            <form
              aria-label="General Contact Form"
              className="form-contact"
              data-name="General Contact Form"
              id="wf-form-General-Contact-Form"
              name="wf-form-General-Contact-Form"
              noValidate
              onSubmit={onSubmit}
            >
              <div className="input-wrap">
                <label className="field-label" htmlFor="Name">
                  Name
                </label>
                <input
                  required
                  autoComplete="name"
                  className="field-contact w-input"
                  disabled={status === "sending"}
                  id="Name"
                  maxLength={256}
                  name="Name"
                  placeholder="Your name"
                  type="text"
                  onChange={onFieldChange}
                />
              </div>
              <div className="input-wrap">
                <label className="field-label" htmlFor="Email">
                  Email
                </label>
                <input
                  required
                  autoComplete="email"
                  className="field-contact w-input"
                  disabled={status === "sending"}
                  id="Email"
                  maxLength={256}
                  name="Email"
                  placeholder="Email"
                  type="email"
                  onChange={onFieldChange}
                />
              </div>
              <div className="input-wrap">
                <label className="field-label" htmlFor="Phone">
                  Phone Number
                </label>
                <input
                  required
                  autoComplete="tel"
                  className="field-contact w-input"
                  disabled={status === "sending"}
                  id="Phone"
                  maxLength={256}
                  name="Phone"
                  placeholder="Phone"
                  type="tel"
                  onChange={onFieldChange}
                />
              </div>
              <div className="input-wrap">
                <label className="field-label" htmlFor="Message">
                  Message
                </label>
                <textarea
                  required
                  className="field-contact text-area w-input"
                  disabled={status === "sending"}
                  id="Message"
                  maxLength={5000}
                  name="Message"
                  placeholder="Type your message here"
                  rows={5}
                  onChange={onFieldChange}
                />
              </div>

              <input
                className="cta-gradient w-button"
                data-wait="Please wait..."
                disabled={status === "sending"}
                type="submit"
                value={status === "sending" ? "Please wait..." : "Submit"}
              />
            </form>
          </div>
        </>
      )}
    </div>
  );
}

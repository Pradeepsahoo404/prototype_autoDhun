/** Practical RFC 5322–style check (no consecutive dots, requires TLD). */
const EMAIL_PATTERN =
  /^[a-zA-Z0-9](?:[a-zA-Z0-9._%+-]{0,62}[a-zA-Z0-9])?@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;

export function normalizeEmail(value: string): string {
  return value.trim().toLowerCase();
}

/** Returns an error message, or `null` when the email is valid. */
export function validateNewsletterEmail(value: string): string | null {
  const email = normalizeEmail(value);

  if (!email) {
    return "Please enter your email address.";
  }

  if (email.length > 256) {
    return "Email address is too long.";
  }

  if (email.includes("..")) {
    return "Please enter a valid email address.";
  }

  if (!EMAIL_PATTERN.test(email)) {
    return "Please enter a valid email address.";
  }

  return null;
}

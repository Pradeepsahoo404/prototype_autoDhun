/** Strip to digits for tel: links and country-code handling. */
function phoneDigits(phone: string): string {
  return phone.replace(/\D/g, "");
}

/** Show site phone with India country code (e.g. +91 9135555656). */
export function formatIndiaPhoneDisplay(phone: string): string {
  const digits = phoneDigits(phone);
  if (!digits) return phone;

  const national =
    digits.startsWith("91") && digits.length > 10 ? digits.slice(2) : digits;
  return `+91 ${national}`;
}

/** tel: href with +91 country code. */
export function formatIndiaPhoneTelHref(phone: string): string {
  const digits = phoneDigits(phone);
  if (!digits) return "tel:";

  if (digits.startsWith("91")) return `tel:+${digits}`;
  return `tel:+91${digits}`;
}

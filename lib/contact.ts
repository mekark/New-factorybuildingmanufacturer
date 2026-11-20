// Contact details shared by the hero and the call-to-action sections.

/** National number (10 digits) — used for display copy only. */
export const PHONE_NUMBER = "9790924754";

export const PHONE_DISPLAY = "+91 97909 24754";

/** E.164 for native `tel:` links (no JS). */
export const PHONE_TEL_HREF = "tel:+919790924754";

export const WHATSAPP_MESSAGE =
  "Hello Mekark, I would like to discuss turnkey industrial factory construction, in-house PEB manufacturing, civil/MEP works, or factory expansion for my project.";

/** WhatsApp wa.me expects country code without "+" or leading zero. */
export const WHATSAPP_HREF = `https://wa.me/91${PHONE_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_MESSAGE,
)}`;

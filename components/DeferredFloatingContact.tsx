"use client";

import { useEffect, useState } from "react";
import FloatingContact from "./FloatingContact";

const SHOW_AFTER_MS = 4000;

/** Call / WhatsApp FABs load after 4s or first scroll so they do not compete with LCP / INP. */
export default function DeferredFloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      setVisible(true);
    };

    const timer = window.setTimeout(reveal, SHOW_AFTER_MS);
    window.addEventListener("scroll", reveal, { once: true, passive: true });

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="hidden md:contents">
      <FloatingContact />
    </div>
  );
}
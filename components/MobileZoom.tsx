"use client";

import { useLayoutEffect } from "react";

// Sets --mobile-zoom (viewport / 390) so the 390px Figma column always fits the
// viewport — including iPhone SE (375px), where zoom is ~0.96 (not clamped to 1).
const MOBILE_WIDTH = 390;
const MIN_ZOOM = 0.82; // ~320px wide phones
const MAX_ZOOM = 1.5;

export function mobileZoomForWidth(width: number) {
  return Math.min(Math.max(width / MOBILE_WIDTH, MIN_ZOOM), MAX_ZOOM);
}

export default function MobileZoom() {
  useLayoutEffect(() => {
    const root = document.documentElement;
    const update = () => {
      root.style.setProperty(
        "--mobile-zoom",
        String(mobileZoomForWidth(root.clientWidth)),
      );
    };
    // Device-emulation switches (and rotation) can fire `resize` before the new
    // viewport width is applied, so also observe the root element and re-check
    // on the next frames.
    let raf = 0;
    const updateSoon = () => {
      update();
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        update();
        raf = requestAnimationFrame(update);
      });
    };
    update();
    window.addEventListener("resize", updateSoon);
    window.addEventListener("orientationchange", updateSoon);
    window.visualViewport?.addEventListener("resize", updateSoon);
    const observer =
      typeof ResizeObserver !== "undefined" ? new ResizeObserver(update) : null;
    observer?.observe(root);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", updateSoon);
      window.removeEventListener("orientationchange", updateSoon);
      window.visualViewport?.removeEventListener("resize", updateSoon);
      observer?.disconnect();
    };
  }, []);

  return null;
}

"use client";

import { useEffect, useState } from "react";
import { preconnect } from "react-dom";
import GhlContactForm from "@/components/forms/GhlContactForm";

const GHL_ORIGIN = "https://api.advanceedgellc.com";
const FORM_HEIGHT = 531; // matches GhlContactForm's default iframe height

/**
 * Hero contact form, loaded quickly but without blocking the first paint.
 *
 * - The connection to the GHL server is opened while the page is still
 *   loading (preconnect), so the form downloads faster when it starts.
 * - The real form mounts the moment the page has finished loading, or
 *   earlier if the visitor moves the mouse, scrolls, taps or types.
 * - Until then a same-size placeholder holds the space.
 *
 * GhlContactForm itself is unchanged.
 */
export default function DeferredGhlContactForm() {
  // React 19 hoists this into <head> during server rendering.
  preconnect(GHL_ORIGIN);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    if (showForm) return;

    const events = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;
    const load = () => setShowForm(true);

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));

    let frame: number | undefined;
    const loadAfterPaint = () => {
      frame = window.requestAnimationFrame(load);
    };

    if (document.readyState === "complete") loadAfterPaint();
    else window.addEventListener("load", loadAfterPaint, { once: true });

    return () => {
      events.forEach((e) => window.removeEventListener(e, load));
      window.removeEventListener("load", loadAfterPaint);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [showForm]);

  if (showForm) return <GhlContactForm />;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-md md:p-4">
      <div
        className="flex items-center justify-center rounded-lg bg-white/90"
        style={{ height: FORM_HEIGHT }}
        role="status"
        aria-label="Loading contact form"
      >
        <span className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-[#FF9A28]" />
      </div>
    </div>
  );
}

"use client";

import { useEffect } from "react";

const LOADER_SRC = "https://widgets.leadconnectorhq.com/loader.js";
const RESOURCES_URL = "https://widgets.leadconnectorhq.com/chat-widget/loader.js";
const WIDGET_ID = "6a3eb91b00578e71d11476bf";

/**
 * GoHighLevel chat bubble.
 *
 * The chat script is large, so it is added only once the visitor interacts
 * with the page (moves the mouse, scrolls, taps, types) or 4 seconds after
 * the page has finished loading — whichever comes first. The bubble still
 * appears for everyone, it just doesn't compete with the page's first paint.
 */
export default function GhlChatWidget() {
  useEffect(() => {
    if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) return;

    const events = ["pointermove", "pointerdown", "scroll", "keydown", "touchstart"] as const;
    let timer: number | undefined;
    let loaded = false;

    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();
      const s = document.createElement("script");
      s.src = LOADER_SRC;
      s.async = true;
      s.setAttribute("data-resources-url", RESOURCES_URL);
      s.setAttribute("data-widget-id", WIDGET_ID);
      document.body.appendChild(s);
    };

    const startTimer = () => {
      timer = window.setTimeout(load, 4000);
    };

    function cleanup() {
      events.forEach((e) => window.removeEventListener(e, load));
      window.removeEventListener("load", startTimer);
      if (timer) window.clearTimeout(timer);
    }

    events.forEach((e) => window.addEventListener(e, load, { once: true, passive: true }));
    if (document.readyState === "complete") startTimer();
    else window.addEventListener("load", startTimer, { once: true });

    return cleanup;
  }, []);

  return null;
}
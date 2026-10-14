"use client";

import Script from "next/script";

const CALENDAR_ID = "s54GZdTRGQGhxQIVqVvU";

type GhlBookingCalendarProps = {
  className?: string;
  /** Unique iframe id. Give each copy on a page its own id (e.g. the pop-up). */
  iframeId?: string;
  /** Height reserved before the embed script resizes the calendar to fit. */
  minHeight?: number;
  /**
   * Fill the parent's height and scroll inside the calendar instead of
   * growing to fit. Use this in pop-ups: GHL's script only auto-resizes
   * calendars that are on the page when it loads, not ones added later.
   */
  fillContainer?: boolean;
};

/** GoHighLevel booking calendar (api.advanceedgellc.com). */
export default function GhlBookingCalendar({
  className = "",
  iframeId = `${CALENDAR_ID}_1791993401152`,
  minHeight = 700,
  fillContainer = false,
}: GhlBookingCalendarProps) {
  return (
    <>
      {/* Same script as the contact form; Next.js only loads it once per page */}
      <Script
        src="https://api.advanceedgellc.com/js/form_embed.js"
        strategy="afterInteractive"
      />

      <iframe
        src={`https://api.advanceedgellc.com/widget/booking/${CALENDAR_ID}`}
        id={iframeId}
        title="Book a call with AdvanceEdge"
        allow="payment"
        scrolling={fillContainer ? "yes" : "no"}
        className={className}
        style={
          fillContainer
            ? { width: "100%", height: "100%", border: "none", display: "block" }
            : {
                width: "100%",
                minHeight: `${minHeight}px`,
                border: "none",
                overflow: "hidden",
              }
        }
      />
    </>
  );
}
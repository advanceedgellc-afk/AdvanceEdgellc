"use client";

import GhlBookingCalendar from "@/components/forms/GhlBookingCalendar";

/**
 * The booking pop-up's markup. Kept in src/components (which Tailwind scans)
 * so its classes are always generated.
 */
export default function BookingModal({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-stretch justify-center bg-black/60 backdrop-blur-sm sm:items-center sm:p-4 md:p-6"
      onClick={onClose}
    >
      {/*
        Phones: full-screen sheet (dvh keeps it inside the visible area when the
        browser's address bar shows or hides).
        Tablet and up: centred card, up to 1024px wide and 92% of the screen tall.
      */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        className="relative flex h-dvh w-full flex-col overflow-hidden bg-white shadow-2xl sm:h-[92dvh] sm:max-w-5xl sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Compact header so the calendar gets most of the height */}
        <div className="flex flex-shrink-0 items-center justify-between gap-4 bg-gradient-to-r from-[#0a0d1e] to-[#1a1d2e] px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] text-white sm:px-6 sm:py-4 md:px-8">
          <div className="min-w-0">
            <h2
              id="booking-modal-title"
              className="font-marcellus text-xl leading-tight sm:text-2xl md:text-3xl"
            >
              Book a Call
            </h2>
            <p className="hidden font-dm text-sm text-gray-300 sm:block">
              Schedule a meeting with our team to discuss your needs
            </p>
          </div>

          <button
            onClick={onClose}
            type="button"
            aria-label="Close booking window"
            className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-red-500 text-lg text-white shadow-lg transition-colors hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            ✕
          </button>
        </div>

        {/* Calendar fills the rest and scrolls inside itself on every screen size */}
        <div className="min-h-0 flex-1 bg-white pb-[env(safe-area-inset-bottom)]">
          <GhlBookingCalendar
            iframeId="s54GZdTRGQGhxQIVqVvU_modal"
            fillContainer
          />
        </div>
      </div>
    </div>
  );
}
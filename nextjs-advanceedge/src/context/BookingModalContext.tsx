"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import GhlBookingCalendar from "@/components/forms/GhlBookingCalendar";

type BookingModalContextType = {
  openBookingModal: () => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined
);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingModal = useCallback(() => setIsOpen(true), []);
  const closeBookingModal = useCallback(() => setIsOpen(false), []);

  // While open: close on Escape and stop the page behind from scrolling.
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeBookingModal();
    };
    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, closeBookingModal]);

  return (
    <BookingModalContext.Provider value={{ openBookingModal, closeBookingModal }}>
      {children}

      {/* Global Booking Modal (rendered once) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          onClick={closeBookingModal}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-modal-title"
           className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full h-[95vh] md:h-[92vh] overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeBookingModal}
              className="absolute top-6 right-6 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors z-50 shadow-lg"
              aria-label="Close booking window"
              type="button"
            >
              ✕
            </button>

            <div className="bg-gradient-to-r from-[#0a0d1e] to-[#1a1d2e] p-8 text-white flex-shrink-0">
              <h2 id="booking-modal-title" className="font-marcellus text-3xl mb-2">
                Book a Call
              </h2>
              <p className="font-dm text-gray-300">
                Schedule a meeting with our team to discuss your needs
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-4 md:p-8 bg-white">
              {/* Own iframe id so it never clashes with the calendar on /book-a-call */}
              <GhlBookingCalendar iframeId="s54GZdTRGQGhxQIVqVvU_modal" minHeight={600} />
            </div>
          </div>
        </div>
      )}
    </BookingModalContext.Provider>
  );
}

export function useBookingModal() {
  const ctx = useContext(BookingModalContext);
  if (!ctx) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return ctx;
}
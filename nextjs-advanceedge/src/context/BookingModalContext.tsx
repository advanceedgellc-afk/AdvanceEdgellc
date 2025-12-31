"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type BookingModalContextType = {
  openBookingModal: () => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined
);

export function BookingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openBookingModal = () => setIsOpen(true);
  const closeBookingModal = () => setIsOpen(false);

  // Load / reload TidyCal script when modal opens
  useEffect(() => {
    if (!isOpen) return;

    const existingScript = document.querySelector(
      'script[src="https://asset-tidycal.b-cdn.net/js/embed.js"]'
    ) as HTMLScriptElement | null;
    if (existingScript) existingScript.remove();

    if (typeof window !== "undefined" && "TidyCal" in window) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (window as any).TidyCal;
    }

    const script = document.createElement("script");
    script.src = "https://asset-tidycal.b-cdn.net/js/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, [isOpen]);

  return (
    <BookingModalContext.Provider
      value={{ openBookingModal, closeBookingModal }}
    >
      {children}

      {/* Global Booking Modal (rendered once) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center  mt-4 p-4 backdrop-blur-sm"
          onClick={closeBookingModal}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-8xl w-full max-h-[100vh]  overflow-hidden relative flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeBookingModal}
              className="absolute top-6 right-6 p-2 bg-red-500 hover:bg-red-600 rounded-full transition-colors z-50 shadow-lg"
              aria-label="Close modal"
              type="button"
            >
              ✕
            </button>

            <div className="bg-gradient-to-r from-[#0a0d1e] to-[#1a1d2e] p-8 text-white flex-shrink-0">
              <h2 className="font-marcellus text-3xl mb-2">Book a Call</h2>
              <p className="font-dm text-gray-300">
                Schedule a meeting with our team to discuss your needs
              </p>
            </div>

            <div className="flex-1 overflow-y-auto p-8 bg-white">
              <div
                className="tidycal-embed"
                data-path="victor-daniel/website"
              ></div>
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

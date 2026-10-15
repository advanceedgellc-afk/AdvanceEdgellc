"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import BookingModal from "@/components/BookingModal";

type BookingModalContextType = {
  openBookingModal: () => void;
  closeBookingModal: () => void;
};

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined,
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
    <BookingModalContext.Provider
      value={{ openBookingModal, closeBookingModal }}
    >
      {children}

      {/* Global Booking Modal (rendered once) */}
      {isOpen && <BookingModal onClose={closeBookingModal} />}
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
// src/app/layout.tsx
import type { Metadata } from "next";
import { DM_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";
import "bootstrap-icons/font/bootstrap-icons.css";

// Import client wrapper
import ScrollDownArrow from "@/components/ScrollDownArrow";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Advance Edge LLC - Empowering Legal Professionals",
  description:
    "High-quality case acquisition, expert virtual agents, and cutting-edge digital marketing services for law firms.",
  icons: {
    icon: [
      {
        rel: "icon",
        url: "/favicon.png",
        type: "image/png",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${dmSans.variable} ${marcellus.variable}`}
    >
      <body className={`${dmSans.className} antialiased`}>
        <BookingModalProvider>
          <Header />
          <main className="min-h-screen relative">
            {children}
            <ScrollDownArrow />
          </main>
          <Footer />
        </BookingModalProvider>
      </body>
    </html>
  );
}

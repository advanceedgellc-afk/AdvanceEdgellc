// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { DM_Sans, Marcellus } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import ScrollToTop from "@/components/ScrollToTop";
import GhlChatWidget from "@/components/GhlChatWidget";

/* ---------------- Fonts ---------------- */

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

/* ---------------- Metadata ---------------- */

export const metadata: Metadata = {
  // Every relative canonical, og:url and og:image resolves against this address.
  metadataBase: new URL("https://www.advanceedgellc.com"),
  title: "Legal Intake & Operations Partner for Law Firms | AdvanceEdge",
  description:
    "Human-led, AI-accelerated legal intake, case qualification, medical records and back-office support for Mass Tort and PI firms.",
  icons: {
    icon: [{ rel: "icon", url: "/favicon.png", type: "image/png" }],
  },
  verification: {
    google: "b2Hg1yNFiU8dS1TOMMXy03tkG3PcPPM9gUnb4OELBHY",
  },
};

/* ---------------- Viewport ---------------- */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF9A28",
};

/* ---------------- Root Layout ---------------- */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${dmSans.variable} ${marcellus.variable}`}
    >
      <body
        suppressHydrationWarning
        className={`${dmSans.className} antialiased`}
      >
        {/* Google Tag Manager — loaded by Next.js right after the page becomes interactive */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-M99ZNLFC');`}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M99ZNLFC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}

        <BookingModalProvider>
          <Header />

          {/* Each page supplies its own <main>, so this wrapper is a plain div */}
          <div className="min-h-screen relative">
            {children}
            <ScrollDownArrow />
          </div>

          <Footer />
          <ScrollToTop />
          <GhlChatWidget />
        </BookingModalProvider>
      </body>
    </html>
  );
}
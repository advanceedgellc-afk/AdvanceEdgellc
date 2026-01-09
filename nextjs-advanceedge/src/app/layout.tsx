// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { DM_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import ScrollToTop from "@/components/ScrollToTop";

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
  title: "Advance Edge LLC - Empowering Legal Professionals",
  description:
    "High-quality case acquisition, expert virtual agents, and cutting-edge digital marketing services for law firms.",
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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-M99ZNLFC');
            `,
          }}
        />
        {/* End Google Tag Manager */}

        {/* Bootstrap Icons */}
        <style>{`
          @font-face {
            font-family: 'bootstrap-icons';
            src: url('/fonts/bootstrap-icons.woff2') format('woff2');
            font-display: swap;
            font-weight: 400;
            font-style: normal;
          }
        `}</style>
      </head>

      <body
        suppressHydrationWarning
        className={`${dmSans.className} antialiased`}
      >
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

          <main className="min-h-screen relative">
            {children}
            <ScrollDownArrow />
          </main>

          <Footer />
          <ScrollToTop />
        </BookingModalProvider>
      </body>
    </html>
  );
}

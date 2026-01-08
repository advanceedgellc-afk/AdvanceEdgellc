// src/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { DM_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";
import ScrollDownArrow from "@/components/ScrollDownArrow";
import ScrollToTop from "@/components/ScrollToTop";

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
  description: "High-quality case acquisition, expert virtual agents, and cutting-edge digital marketing services for law firms.",
  icons: {
    icon: [{ rel: "icon", url: "/favicon.png", type: "image/png" }],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FF9A28',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`scroll-smooth ${dmSans.variable} ${marcellus.variable}`}
    >
      <head>
        {/* ✅ Bootstrap Icons with font-display swap */}
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
      <body suppressHydrationWarning className={`${dmSans.className} antialiased`}>
        {/* ✅ GTM Script - IMMEDIATELY AFTER <body> tag (for Google Search Console verification) */}
        <script
          async
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-T8TF5FV2');
            `,
          }}
        />

        {/* ✅ GTM Noscript */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8TF5FV2" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        />

        <BookingModalProvider>
          <Header />
          <main className="min-h-screen relative">
            {children}
            <ScrollDownArrow />
          </main>
          <Footer />
          <ScrollToTop />
           {/* ✅ ADD THIS LINE */}
        </BookingModalProvider>
      </body>
    </html>
  );
}

// src/app/layout.tsx - GTM ADDED ✅
import type { Metadata } from "next";
import { DM_Sans, Marcellus } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookingModalProvider } from "@/context/BookingModalContext";
import "bootstrap-icons/font/bootstrap-icons.css";
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
  description: "High-quality case acquisition, expert virtual agents, and cutting-edge digital marketing services for law firms.",
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
      {/* ✅ GTM - HEAD (JavaScript version) */}
      <head>
        <script
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
      </head>
      <body className={`${dmSans.className} antialiased`}>
        {/* ✅ GTM - BODY (noscript fallback) */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: `
              <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T8TF5FV2"
              height="0" width="0" style="display:none;visibility:hidden"></iframe>
            `,
          }}
        />
        
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

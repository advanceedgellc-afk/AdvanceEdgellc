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
        {/* Google Tag Manager — loaded on the visitor's first interaction
            (scroll, tap, mouse move, key press) or 4 s after page load,
            whichever comes first, so it doesn't slow down the first paint. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,i){
  w.dataLayer=w.dataLayer||[];
  var start=new Date().getTime(),done=false,timer;
  var ev=['scroll','pointerdown','pointermove','keydown','touchstart'];
  function load(){
    if(done)return;done=true;
    ev.forEach(function(e){w.removeEventListener(e,load);});
    clearTimeout(timer);
    w.dataLayer.push({'gtm.start':start,event:'gtm.js'});
    var j=d.createElement('script');j.async=true;
    j.src='https://www.googletagmanager.com/gtm.js?id='+i;
    d.head.appendChild(j);
  }
  ev.forEach(function(e){w.addEventListener(e,load,{once:true,passive:true});});
  function later(){timer=setTimeout(load,4000);}
  if(d.readyState==='complete')later();else w.addEventListener('load',later,{once:true});
})(window,document,'GTM-M99ZNLFC');`}
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
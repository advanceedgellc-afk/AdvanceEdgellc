import Link from "next/link";
import HeroSection from "@/components/digitalSolutions/HeroSection";
import ScaleYourFirmSection from "@/components/digitalSolutions/ScaleYourFirmSection";
import WebDevelopmentSection from "@/components/digitalSolutions/WebDevelopmentSection";
import DigitalMarketingSection from "@/components/digitalSolutions/DigitalMarketingSection";
import WhyDigitalSolutions from "@/components/digitalSolutions/WhyDigitalSolutions";
import HowItWorks from "@/components/digitalSolutions/HowItWorks";
import WhyChooseAdvanceEdge from "@/components/digitalSolutions/WhyChooseAdvanceEdge";
import FAQSection from "@/components/digitalSolutions/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal Digital Marketing Solutions | AdvanceEdge Web, SEO & Paid Ads",
  description:
    "AdvanceEdge provides digital solutions for law firms, including web development, SEO, paid campaigns, and conversion optimization to drive consistent mass tort lead generation.",
    alternates: {
      canonical: "https://advanceedgellc.com/legal-digital-marketing-solutions",
    },
    
  openGraph: {
    title: "Legal Digital Marketing Solutions | AdvanceEdge Web, SEO & Paid Ads",
    description:
      "AdvanceEdge provides digital solutions for law firms, including web development, SEO, paid campaigns, and conversion optimization to drive consistent mass tort lead generation.",
    url: "https://advanceedgellc.com/legal-digital-marketing-solutions",
    type: "website",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the must-have features for a high-converting law firm website?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `A high-converting law firm website should have:
        🔹SEO-optimized pages for legal searches
        🔹Fast loading speed & mobile responsiveness
        🔹 Clear CTAs (Contact Forms, Live Chat)
        🔹 Google My Business & Local SEO setup
        🔹ADA compliance & security features
        
        We build websites designed to convert visitors into clients.,`
      },
    },
    {
      "@type": "Question",
      name: "How does SEO help law firms rank higher on Google?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `SEO improves your law firm’s visibility by optimizing:
        🔹 Practice area pages with relevant keywords
        🔹 Google Business Profile for local searches
        🔹 Backlinks from legal directories
        🔹 Technical SEO (site speed, schema markup)
        
        Our SEO strategies ensure higher rankings and more client inquiries.,`
      },
    },
    {
      "@type": "Question",
      name: "How can PPC advertising help law firms get more cases?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPC (Google Ads, LSAs, Facebook Ads) targets people actively searching for legal help. We optimize ad copy, landing pages, and bidding strategies to maximize your ROI and generate high-quality leads.",
      },
    },
    {
      "@type": "Question",
      name: "What makes your legal web development services unique?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `We design law firm websites that are:
        🔹SEO-optimized for better rankings
        🔹User-friendly & mobile-responsive
        🔹 Conversion-focused to generate leads
        🔹Compliant with legal marketing guidelines
        
        Our websites don’t just look good—they drive real case inquiries.,`
      },
    },
    {
      "@type": "Question",
      name: "AEO: How can law firms optimize for voice search and AI-driven results?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `To rank in voice search & AI-powered results, we optimize:
        🔹 FAQ-rich content with concise answers
        🔹 Schema markup for featured snippets
        🔹 Local SEO & Google My Business updates
        🔹 Conversational, question-based content
        
        This helps your firm appear in Siri, Alexa, and Google Assistant searches.,`
      },
    },
    {
      "@type": "Question",
      name: "AEO: How do featured snippets help law firms get more visibility?",
      acceptedAnswer: {
        "@type": "Answer",
        text: `Featured snippets boost rankings & click-through rates by:
        🔹Answering legal queries concisely
        🔹Using structured headings & lists
        🔹 Implementing FAQ schema for Google results
        
        We optimize your content to rank in “People Also Ask” and zero-click searches.,`
      },
    },
  ],
};

export default function DigitalMarketing() {
  return (

    <main>
{/* HeroSection */}
     <HeroSection/>
     {/* ScaleYourFirmSection */}
     <ScaleYourFirmSection/>
     {/* WebDevelopmentSection */}
     <WebDevelopmentSection/>
      {/* WebDevelopmentSection */}
      <DigitalMarketingSection/>
{/* WhyDigitalSolutions */}
      <WhyDigitalSolutions/>
      {/* HowItWorks */}
      <HowItWorks/>
      {/* FAQSection */}
      <FAQSection/>
      {/* WhyChooseAdvanceEdge */}
      <WhyChooseAdvanceEdge/>
    </main>
  );
}

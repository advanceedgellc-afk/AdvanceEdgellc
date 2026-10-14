import type { Metadata } from "next";
import GhlBookingCalendar from "@/components/forms/GhlBookingCalendar";

export const metadata: Metadata = {
  title: "Book a Call | AdvanceEdge Legal Intake & Operations",
  description:
    "Schedule a 30-minute call to map your intake and operations bottlenecks and see where a dedicated pod fits.",
  alternates: { canonical: "/book-a-call" },
};

export default function BookACallPage() {
  return (
    <main className="min-h-screen bg-[#050811] text-white">
      {/* Hero / Title */}
      <section className="bg-[#050811] border-b border-white/5 h-[400px] md:h-[500px] flex content-center items-center">
        <div className="max-w-6xl mx-auto px-4 pt-20">
          <h1 className="font-marcellus text-4xl md:text-5xl lg:text-6xl mb-4">
            Book A Call
          </h1>
          <p className="font-dm text-lg md:text-xl text-gray-300 max-w-2xl">
            Schedule a meeting with our team to discuss how AdvanceEdge can
            support your firm&apos;s growth and efficiency.
          </p>
        </div>
      </section>

      {/* Booking calendar */}
      <section className="bg-white">
        <div className="w-full max-w-5xl mx-auto px-4 py-10 md:py-16">
          <div className="bg-white rounded-2xl overflow-hidden">
            <GhlBookingCalendar />
          </div>
        </div>
      </section>
    </main>
  );
}
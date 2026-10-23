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
            {/* What to expect */}
      <section className="bg-[#050811] border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-14 md:py-20 font-dm">
          <h2 className="font-marcellus text-3xl md:text-4xl mb-4">
            What to Expect on Your Call
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-3xl">
            This is a 30-minute working session, not a sales pitch. We look at
            how your firm handles intake and operations today and show you
            where a dedicated AdvanceEdge pod could take work off your team.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg text-[#FF9A28] mb-2">1. Map your bottlenecks</h3>
              <p className="text-gray-300 leading-relaxed">
                We walk through your intake, case qualification, medical records
                and back-office workflow to find where leads, time or money are
                being lost.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg text-[#FF9A28] mb-2">2. See where we fit</h3>
              <p className="text-gray-300 leading-relaxed">
                We show you which tasks a trained AdvanceEdge team could handle,
                from after-hours call coverage to record retrieval and review,
                and how that works alongside your staff.
              </p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <h3 className="font-semibold text-lg text-[#FF9A28] mb-2">3. Leave with next steps</h3>
              <p className="text-gray-300 leading-relaxed">
                You get a clear recommendation on where to start, what it would
                take to launch, and the results to track, whether or not you
                decide to work with us.
              </p>
            </div>
          </div>

          <p className="text-gray-400 mt-10">
            Built for Mass Tort and personal injury firms, legal marketing
            agencies and growing practices of any size. Prefer to talk now?
            Call{" "}
            <a href="tel:+18329377738" className="text-[#FF9A28] hover:underline">
              832-937-7738
            </a>{" "}
            or email{" "}
            <a href="mailto:info@advanceedgellc.com" className="text-[#FF9A28] hover:underline">
              info@advanceedgellc.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
import type { Metadata } from "next";
import GhlBookingCalendar from "@/components/forms/GhlBookingCalendar";

const TITLE = "Book a Call | AdvanceEdge Legal Intake & Operations";
const DESCRIPTION =
  "Schedule a 30-minute call to map your intake and operations bottlenecks and see where a dedicated pod fits.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/book-a-call" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/book-a-call",
    type: "website",
  },
};

const steps = [
  {
    title: "1. Map your bottlenecks",
    text: "We walk through your intake, case qualification, medical records and back-office workflow to find where leads, time or money are being lost.",
  },
  {
    title: "2. See where we fit",
    text: "We show you which tasks a trained AdvanceEdge team could handle, from after-hours call coverage to record retrieval and review, and how that works alongside your staff.",
  },
  {
    title: "3. Leave with next steps",
    text: "You get a clear recommendation on where to start, what it would take to launch, and the results to track, whether or not you decide to work with us.",
  },
];

export default function BookACallPage() {
  return (
    <main className="min-h-screen bg-[#050811] text-white">
      {/* Hero */}
      <section className="flex min-h-[400px] items-center border-b border-white/5 bg-[#050811] md:min-h-[500px]">
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-28 md:pt-20">
          <h1 className="mb-4 font-marcellus text-4xl md:text-5xl lg:text-6xl">
            Book a Call
          </h1>
          <p className="max-w-2xl font-dm text-lg text-gray-300 md:text-xl">
            Schedule a meeting with our team to discuss how AdvanceEdge can
            support your firm&apos;s growth and efficiency.
          </p>
        </div>
      </section>

      {/* Booking calendar */}
      <section className="bg-white">
        <div className="mx-auto w-full max-w-5xl px-4 py-10 md:py-16">
          <div className="overflow-hidden rounded-2xl bg-white">
            <GhlBookingCalendar />
          </div>
        </div>
      </section>

      {/* What to expect */}
      <section className="border-t border-white/5 bg-[#050811]">
        <div className="mx-auto max-w-5xl px-4 py-14 font-dm md:py-20">
          <h2 className="mb-4 font-marcellus text-3xl md:text-4xl">
            What to Expect on Your Call
          </h2>
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-300">
            This is a 30-minute working session, not a sales pitch. We look at
            how your firm handles intake and operations today and show you
            where a dedicated AdvanceEdge pod could take work off your team.
          </p>

          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="mb-2 text-lg font-semibold text-[#FF9A28]">
                  {step.title}
                </h3>
                <p className="leading-relaxed text-gray-300">{step.text}</p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-gray-400">
            Built for Mass Tort and personal injury firms, legal marketing
            agencies and growing practices of any size. Prefer to talk now?
            Call{" "}
            <a
              href="tel:+18329377738"
              aria-label="Call AdvanceEdge at 832-937-7738"
              className="text-[#FF9A28] hover:underline"
            >
              832-937-7738
            </a>{" "}
            or email{" "}
            <a
              href="mailto:info@advanceedgellc.com"
              className="text-[#FF9A28] hover:underline"
            >
              info@advanceedgellc.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
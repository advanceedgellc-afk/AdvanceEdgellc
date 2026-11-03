import { Star } from "lucide-react";

/**
 * "Add AdvanceEdge as a preferred source on Google" button.
 *
 * A plain link to Google's own preference page, so it ships zero JavaScript
 * and doesn't affect PageSpeed (Google's publisher.js script is not needed).
 */
const GOOGLE_URL = "https://www.google.com/preferences/source?q=advanceedgellc.com";

type Props = {
  /** "card" = end of blog posts, "compact" = footer */
  variant?: "card" | "compact";
};

export default function GooglePreferredSource({ variant = "card" }: Props) {
  if (variant === "compact") {
    return (
      <a
        href={GOOGLE_URL}
        target="_blank"
        rel="noopener"
        title="Add AdvanceEdge as a preferred source on Google"
        className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-white px-4 py-2 font-dm text-sm font-semibold text-slate-800 shadow transition hover:shadow-md"
      >
        <Star className="h-4 w-4 fill-[#FF9A28] text-[#FF9A28]" aria-hidden="true" />
        Prefer us on Google
      </a>
    );
  }

  return (
    <div className="mt-10 flex flex-col gap-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-5 sm:flex-row sm:items-center sm:justify-between md:p-6">
      <div>
        <p className="font-semibold text-slate-100">Found this useful?</p>
        <p className="mt-1 text-sm text-slate-400">
          Add AdvanceEdge as a preferred source to see more of our guides in Google Search.
        </p>
      </div>
      <a
        href={GOOGLE_URL}
        target="_blank"
        rel="noopener"
        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 font-dm text-sm font-semibold text-slate-800 shadow transition hover:shadow-lg"
      >
        <Star className="h-5 w-5 fill-[#FF9A28] text-[#FF9A28]" aria-hidden="true" />
        Add as preferred source
      </a>
    </div>
  );
}

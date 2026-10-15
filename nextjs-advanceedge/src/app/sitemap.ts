import type { MetadataRoute } from "next";
import { client } from "@/sanity/client";

const SITE_URL = "https://www.advanceedgellc.com";

// Rebuild at most once an hour so new blog posts appear without a redeploy.
export const revalidate = 3600;

// Add any new page here when you create it.
const staticPages: Array<{ path: string; priority: number }> = [
  { path: "", priority: 1 },
  { path: "/about", priority: 0.8 },
  { path: "/contact", priority: 0.8 },
  { path: "/book-a-call", priority: 0.8 },
  { path: "/resources/blog", priority: 0.7 },

  // Intake leaders
  { path: "/services/intake-leaders/contact-center-intake-specialists", priority: 0.9 },
  { path: "/services/intake-leaders/case-qualification", priority: 0.9 },

  // Litigation teams
  { path: "/services/litigation-teams/medical-record-retrieval", priority: 0.9 },
  { path: "/services/litigation-teams/medical-record-review", priority: 0.9 },
  { path: "/services/litigation-teams/litigation-support-back-office", priority: 0.9 },

  // Firm owners & COOs
  { path: "/services/firm-owners-coos/virtual-legal-agents", priority: 0.9 },
  { path: "/services/firm-owners-coos/accounting-trust-bookkeeping", priority: 0.9 },
  { path: "/services/firm-owners-coos/case-acquisition", priority: 0.9 },
  { path: "/services/firm-owners-coos/digital-marketing", priority: 0.6 },

  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
];

type PostRef = { slug: string; updatedAt: string };

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const pages: MetadataRoute.Sitemap = staticPages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: now,
    priority,
  }));

  let posts: PostRef[] = [];
  try {
    posts = await client.fetch<PostRef[]>(
      `*[_type == "post" && defined(slug.current)]{ "slug": slug.current, "updatedAt": _updatedAt }`
    );
  } catch {
    // If Sanity is unreachable, still serve the main pages.
  }

  return [
    ...pages,
    ...posts.map((p) => ({
      url: `${SITE_URL}/resources/blog/${p.slug}`,
      lastModified: new Date(p.updatedAt),
      priority: 0.6,
    })),
  ];
}
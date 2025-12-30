// app/blog/page.tsx
import type { Metadata } from 'next'
import Link from "next/link";
import Image from "next/image";
import { type SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";
import BlogPostShare from "@/components/BlogPostShare";


interface Category {
  title: string;
  slug: { current: string };
}


interface Post extends SanityDocument {
  title: string;
  slug: { current: string };
  publishedAt: string;
  image?: string;
  excerpt?: string;
  seoDescription?: string;
  categories?: Category[];
  tags?: string[];
}


const POSTS_QUERY = `*[
  _type == "post" && defined(slug.current)
]|order(publishedAt desc){
  _id, 
  title, 
  slug, 
  excerpt,
  seoDescription,
  publishedAt,
  "image": image.asset->url,
  "categories": categories[]->{title, slug},
  tags
}`;


const options = { next: { revalidate: 30 } };


// ✅ NEW: SEO Meta tags for blog listing page
export const metadata: Metadata = {
  title: 'AdvanceEdge Legal Blog | Mass Torts, Legal Ops & Virtual Support Insights',
  description: 'Explore the AdvanceEdge legal blog for insights on mass tort litigation, legal operations, virtual legal agents, intake optimization, and digital marketing strategies.',
  openGraph: {
    title: 'Legal Growth Insights & Strategies | AdvanceEdge Blog',
    description: 'Deep dives on intake, advertising, and operations to help your law firm turn attention into signed cases.',
    type: 'website',
    url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/blog`,
    siteName: 'AdvanceEdge',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/og-blog.jpg`,
        width: 1200,
        height: 630,
        alt: 'AdvanceEdge Legal Growth Blog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Legal Growth Insights & Strategies | AdvanceEdge Blog',
    description: 'Deep dives on intake, advertising, and operations for law firms.',
    images: [`${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/og-blog.jpg`],
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://advanceedgellc.com'}/blog`,
  },
  robots: {
    index: true,
    follow: true,
  },
  keywords: ['law firm marketing', 'legal intake', 'law firm advertising', 'legal operations', 'client acquisition'],
}


export default async function Blog() {
  const posts = await client.fetch<Post[]>(POSTS_QUERY, {}, options);


  const allCategories = Array.from(
    new Map(
      posts
        .flatMap((post) => post.categories || [])
        .map((cat) => [cat.slug.current, cat])
    ).values()
  );


  return (
    <main className="bg-slate-950 text-slate-50">
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-gradient-to-br from-[#1a1f2e] via-[#050814] to-[#050711]">
        <div className="pointer-events-none absolute -right-40 top-[-40px] h-80 w-80 rounded-full bg-[#FF9A28]/20 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-[-40px] h-80 w-80 rounded-full bg-[#FF9A28]/10 blur-3xl" />


        {/* Flex container - centered */}
        <div className="relative z-10 min-h-[450px] md:min-h-[580px] flex items-center justify-center px-4 pt-24 pb-0">
          <div className="flex flex-col items-center justify-center text-center gap-6 max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-slate-200 animate-fadeInUp">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
              Insights for modern law firms
            </span>


            <h1 className="text-4xl md:text-6xl font-light tracking-tight leading-tight animate-fadeInUp animation-delay-200">
              Legal Growth
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF9A28] via-[#ffd08c] to-[#FF9A28]">
                Insights & Strategies
              </span>
            </h1>


            <p className="max-w-2xl text-base md:text-lg text-slate-300 animate-fadeInUp animation-delay-400">
              Deep dives on intake, advertising, and operations to help your firm
              turn attention into signed cases.
            </p>
          </div>
        </div>
      </section>


      {/* BLOG LIST */}
      <section className="py-16 md:py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {posts.length === 0 ? (
            <div className="py-20 text-center text-slate-300">
              <p className="text-lg md:text-xl">
                No articles yet. New content is coming soon.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {/* LEFT: POSTS */}
              <div className="lg:col-span-2">
                <div className="space-y-14 md:space-y-16">
                  {posts.map((post, idx) => {
                    const date = new Date(post.publishedAt).toLocaleDateString(
                      "en-US",
                      { year: "numeric", month: "short", day: "numeric" }
                    );


                    return (
                      <article
                        key={post._id}
                        className="group relative rounded-3xl border border-slate-800/80 bg-slate-900/60 p-4 md:p-5 lg:p-6 shadow-[0_18px_55px_rgba(15,23,42,0.75)] backdrop-blur-md overflow-hidden animate-cardIn"
                        style={{ animationDelay: `${(idx + 1) * 90}ms` }}
                      >
                        <div className="grid gap-6 md:gap-7 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1.2fr)] items-stretch">
                          {/* IMAGE */}
                          <Link
                            href={`/blog/${post.slug.current}`}
                            className="relative block overflow-hidden rounded-2xl bg-slate-800/70"
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                            <div className="relative h-52 md:h-full min-h-[220px]">
                              {post.image ? (
                                <Image
                                  src={post.image}
                                  alt={post.title}
                                  fill
                                  className="object-cover transition-transform duration-500 group-hover:scale-[1.06]"
                                  priority={idx === 0}
                                />
                              ) : (
                                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#FF9A28]/20 to-slate-900">
                                  <span className="text-5xl opacity-30">✦</span>
                                </div>
                              )}
                            </div>


                            <div className="absolute left-4 top-4 z-20">
                              <span className="inline-flex items-center gap-1 rounded-full bg-black/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-slate-100">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                                Article
                              </span>
                            </div>
                          </Link>


                          {/* CONTENT */}
                          <div className="flex flex-col h-full">
                            {/* Date + tags */}
                            <div className="mb-4 flex flex-wrap items-center gap-3 text-xs text-slate-300">
                              <span className="inline-flex items-center gap-2 rounded-full bg-slate-800/70 px-3 py-1 font-medium">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                                {date}
                              </span>


                              {post.categories && post.categories.length > 0 && (
                                <div className="flex flex-wrap gap-2">
                                  {post.categories.map((cat) => (
                                    <Link
                                      key={cat.slug.current}
                                      href={`/blog?category=${cat.slug.current}`}
                                      className="rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-[11px] font-medium text-slate-200 hover:border-[#FF9A28] hover:text-[#FF9A28] transition-colors"
                                    >
                                      {cat.title}
                                    </Link>
                                  ))}
                                </div>
                              )}
                            </div>


                            {/* Title */}
                            <Link href={`/blog/${post.slug.current}`}>
                              <h2 className="text-xl md:text-2xl font-semibold leading-snug text-slate-50 mb-3 line-clamp-2 group-hover:text-[#FF9A28] transition-colors">
                                {post.title}
                              </h2>
                            </Link>


                            {/* Tags */}
                            {post.tags && post.tags.length > 0 && (
                              <div className="mb-4 flex flex-wrap gap-2">
                                {post.tags.map((tag) => (
                                  <Link
                                    key={tag}
                                    href={`/blog?tag=${tag}`}
                                    className="rounded-full bg-slate-800/70 px-3 py-1 text-[11px] font-medium text-slate-200 hover:bg-[#FF9A28] hover:text-slate-950 transition-colors"
                                  >
                                    #{tag}
                                  </Link>
                                ))}
                              </div>
                            )}


                            {/* Meta */}
                            <div className="mt-auto flex flex-wrap items-center gap-5 text-xs text-slate-400 mb-4">
                              <span className="inline-flex items-center gap-1.5">
                                <span className="text-sm">👤</span> Admin
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <span className="text-sm">💬</span> 0 comments
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <span className="text-sm">👁️</span> Views
                              </span>
                            </div>


                            {/* Footer: Read more + share */}
                            <div className="flex flex-wrap items-center justify-between gap-4">
                              <Link
                                href={`/blog/${post.slug.current}`}
                                className="inline-flex items-center gap-2 rounded-full bg-[#FF9A28] px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-[#FF9A28]/30 transition-transform hover:-translate-y-0.5 hover:bg-[#ffb454]"
                              >
                                Read article
                                <span className="text-lg">↗</span>
                              </Link>


                              {/* ✅ UPDATED: Social share component - Fully Functional */}
                              <BlogPostShare
                                title={post.title}
                                slug={post.slug.current}
                              />
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>


              {/* RIGHT: SIDEBAR */}
              <aside className="lg:col-span-1">
                <div className="space-y-6 lg:space-y-7 sticky top-24">
                  {/* Recent Posts */}
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 md:p-6 backdrop-blur-md animate-fadeInUp animation-delay-200">
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                      Recent posts
                    </h3>
                    <ul className="space-y-3">
                      {posts.slice(0, 5).map((post) => (
                        <li key={post._id}>
                          <Link
                            href={`/blog/${post.slug.current}`}
                            className="text-sm text-slate-300 hover:text-[#FF9A28] transition-colors line-clamp-2"
                          >
                            {post.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* Categories */}
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 md:p-6 backdrop-blur-md animate-fadeInUp animation-delay-400">
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                      Categories
                    </h3>
                    <ul className="space-y-2">
                      {allCategories.map((category) => (
                        <li key={category.slug.current}>
                          <Link
                            href={`/blog?category=${category.slug.current}`}
                            className="flex items-center justify-between rounded-lg bg-slate-800/60 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-700/80 hover:text-[#FF9A28] transition-colors"
                          >
                            <span>{category.title}</span>
                            <span className="text-[10px] opacity-60">
                              
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>


                  {/* Archives */}
                  <div className="rounded-2xl border border-slate-800/80 bg-slate-900/70 p-5 md:p-6 backdrop-blur-md animate-fadeInUp animation-delay-600">
                    <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                      Archives
                    </h3>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {["December 2025", "November 2025", "October 2025", "September 2025"].map(
                        (label) => (
                          <li key={label}>
                            <button className="w-full text-left hover:text-[#FF9A28] transition-colors">
                              {label}
                            </button>
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </aside>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

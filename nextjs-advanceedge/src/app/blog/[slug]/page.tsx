// app/blog/[slug]/page.tsx
import { PortableText, type SanityDocument } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { Metadata } from 'next'
import { client } from "@/sanity/client";
import Link from "next/link";
import BlogPostShare from "@/components/BlogPostShare";


const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]{
  _id,
  title,
  "slug": slug.current,
  excerpt,
  seoTitle,
  seoDescription,
  "ogImage": ogImage.asset->url,
  image,
  publishedAt,
  author,
  readingTime,
  body,
  categories[]->{
    title
  },
  tags
}`;


const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;


const options = { next: { revalidate: 30 } };


type Props = {
  params: Promise<{ slug: string }>;
}


// ✅ NEW: generateMetadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await client.fetch(POST_QUERY, await params, options);


  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }


  const title = post.seoTitle || post.title;
  const description = post.seoDescription || post.excerpt || 'Read the latest legal insights from AdvanceEdge.';
  const url = `${process.env.NEXT_PUBLIC_SITE_URL || 'https://your-site.com'}/blog/${post.slug}`;
  const ogImage = post.ogImage || (post.image ? urlFor(post.image)?.width(1200).height(630).url() : null);


  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime: new Date(post.publishedAt).toISOString(),
      url,
      images: ogImage ? [{ url: ogImage }] : [],
      siteName: 'AdvanceEdge',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ogImage ? [ogImage] : [],
    },
    alternates: {
      canonical: url,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}


// ✅ NEW: Static generation for all posts
export async function generateStaticParams() {
  const posts = await client.fetch(
    `*[_type == "post" && publishedAt < now()]{"slug": slug.current}`
  );
  return posts.map((post: { slug: string }) => ({ slug: post.slug }));
}


export default async function BlogPost({ params }: Props) {
  const post = await client.fetch<SanityDocument>(POST_QUERY, await params, options);


  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-50">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Post Not Found
          </h1>
          <p className="text-slate-400 mb-6">
            The article you're looking for doesn't exist.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#FF9A28] hover:text-white transition-colors"
          >
            <span className="text-lg">←</span>
            Back to All Articles
          </Link>
        </div>
      </main>
    );
  }


  const postImageUrl = post.image
    ? urlFor(post.image)?.width(1600).height(900).url()
    : null;


  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });


  return (
    <main className="bg-slate-950 text-slate-50">
      {/* HERO - pure gradient, no image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0b1020] via-[#050814] to-[#020308]" />
        <div className="pointer-events-none absolute -right-40 top-10 h-80 w-80 rounded-full bg-[#FF9A28]/15 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-72 w-72 rounded-full bg-slate-800/40 blur-3xl" />


        <div className="relative z-10">
          <div className="max-w-6xl mx-auto flex content-center items-center h- md:h-[600px] px-4 md:px-6 pt-24 md:pt-32 pb-0 ">
            <div className="flex flex-col content-center gap-6 max-w-3xl">
              <Link
                href="/blog"
                className="inline-flex w-fit items-center gap-2 text-sm font-medium text-slate-300 hover:text-[#FF9A28] transition-colors"
              >
                <span className="text-lg">←</span>
                Back to Articles
              </Link>


              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                Legal Insights
              </div>


              <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight">
                {post.title}
              </h1>


              {post.excerpt && (
                <p className="max-w-2xl text-base md:text-lg text-slate-300">
                  {post.excerpt}
                </p>
              )}


              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
                  <p className="mb-1">Published</p>
                  <p className="text-sm font-medium text-slate-100">
                    {publishedDate}
                  </p>
                </div>


                {post.author && (
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400 pl-6 border-l border-slate-700">
                    <p className="mb-1">Author</p>
                    <p className="text-sm font-medium text-slate-100">
                      {post.author}
                    </p>
                  </div>
                )}


                {post.readingTime && (
                  <div className="text-xs uppercase tracking-[0.18em] text-slate-400 pl-6 border-l border-slate-700">
                    <p className="mb-1">Reading Time</p>
                    <p className="text-sm font-medium text-slate-100">
                      {post.readingTime} min
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* MAIN CONTENT + RIGHT SIDEBAR */}
      <section className="bg-slate-950 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          {/* Article + featured image */}
          <div className="lg:col-span-2 space-y-10">
            {postImageUrl && (
              <div className="rounded-3xl border border-slate-800/70 bg-slate-900/40 overflow-hidden shadow-[0_24px_70px_rgba(15,23,42,0.85)]">
                <img
                  src={postImageUrl}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}


            <article className="prose prose-invert prose-lg max-w-none prose-headings:text-slate-50 prose-headings:font-semibold prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl prose-p:text-slate-200 prose-p:leading-relaxed prose-a:text-[#FF9A28] hover:prose-a:text-[#ffb65b] prose-strong:text-slate-100 prose-em:text-slate-100 prose-li:text-slate-200 prose-li:marker:text-[#FF9A28] prose-blockquote:border-l-[#FF9A28]/60 prose-blockquote:text-slate-200 prose-code:text-[#FF9A28] prose-code:bg-slate-900/70 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-pre:bg-slate-900/80 prose-pre:border prose-pre:border-slate-800">
              {Array.isArray(post.body) && <PortableText value={post.body} />}
            </article>


            {/* ✅ UPDATED: Share Buttons with Icons */}
            <div className="mt-10 pt-8 border-t border-slate-800">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-4">
                Share this article
              </p>
              <BlogPostShare
                title={post.title}
                slug={post.slug}
              />
            </div>
          </div>


          {/* Right Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Post meta card */}
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/80 p-5 md:p-6 backdrop-blur-md">
              <h3 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-slate-200">
                <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
                Article details
              </h3>
              <ul className="space-y-3 text-xs text-slate-300">
                <li className="flex justify-between">
                  <span className="uppercase tracking-[0.18em] text-slate-500">
                    Published
                  </span>
                  <span className="text-slate-100 text-[11px]">
                    {publishedDate}
                  </span>
                </li>
                {post.author && (
                  <li className="flex justify-between">
                    <span className="uppercase tracking-[0.18em] text-slate-500">
                      Author
                    </span>
                    <span className="text-slate-100 text-[11px]">
                      {post.author}
                    </span>
                  </li>
                )}
                {post.readingTime && (
                  <li className="flex justify-between">
                    <span className="uppercase tracking-[0.18em] text-slate-500">
                      Reading Time
                    </span>
                    <span className="text-slate-100 text-[11px]">
                      {post.readingTime} min
                    </span>
                  </li>
                )}
              </ul>
            </div>


            {/* Simple CTA */}
            <div className="rounded-2xl border border-slate-800/80 bg-gradient-to-b from-slate-900 to-slate-950 p-5 md:p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-2">
                Next step
              </p>
              <h4 className="text-lg font-semibold text-slate-50 mb-3">
                Want help implementing these ideas?
              </h4>
              <p className="text-sm text-slate-300 mb-4">
                Book a call with the AdvanceEdge team to see how this applies to
                your firm's intake and marketing.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF9A28] px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-lg shadow-[#FF9A28]/30 transition-transform hover:-translate-y-0.5 hover:bg-[#ffb454]"
              >
                Book a strategy call
                <span className="text-sm">↗</span>
              </Link>
            </div>
          </aside>
        </div>
      </section>


      {/* RELATED / CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a1f2e] via-[#0b0f1d] to-[#050711]" />
        <div className="absolute -right-32 top-0 h-72 w-72 rounded-full bg-[#FF9A28]/25 blur-3xl" />
        <div className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-slate-700/40 blur-3xl" />


        <div className="relative max-w-5xl mx-auto px-4 md:px-6 z-10">
          <div className="rounded-3xl border border-slate-800/70 bg-slate-900/70 p-8 md:p-10 lg:p-12 backdrop-blur-md text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/80 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-slate-300 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF9A28]" />
              Ready to grow?
            </div>


            <h2 className="text-3xl md:text-4xl font-semibold text-slate-50 mb-4 tracking-tight">
              Turn your website into a client acquisition machine
            </h2>
            <p className="max-w-2xl mx-auto text-slate-300 mb-8 text-base md:text-lg">
              Schedule a strategy call with AdvanceEdge to build a customized
              growth system for your firm.
            </p>


            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#FF9A28] px-8 py-3 text-sm md:text-base font-semibold text-slate-950 shadow-lg shadow-[#FF9A28]/30 transition-transform hover:-translate-y-0.5 hover:bg-[#ffb454]"
              >
                Book a Call
                <span className="text-lg">↗</span>
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-7 py-3 text-sm md:text-base font-medium text-slate-100 hover:border-[#FF9A28] hover:text-[#FF9A28] transition-colors"
              >
                Read More Articles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

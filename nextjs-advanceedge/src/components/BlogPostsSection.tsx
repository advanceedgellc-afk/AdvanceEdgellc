// src/components/BlogPostsSection.tsx - REUSABLE COMPONENT
import Link from "next/link";
import Image from "next/image";
import { Gavel, ArrowRight } from "lucide-react";
import { urlFor } from "@/lib/sanity";
import type { Post } from "@/types/post";

interface BlogPostsSectionProps {
  posts: Post[];
}

export default function BlogPostsSection({ posts }: BlogPostsSectionProps) {
  return (
    <>
      {posts.length > 0 && (
        <section className="py-4 md:py-14 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-16 px-0">
              <div className="space-y-6 flex flex-col items-center justify-center">
                <div className="flex items-center gap-3 pb-5">
                  <div className="w-12 h-1 rounded-full bg-[#FF9A28]" />
                  <span className="font-dm text-sm font-bold tracking-widest text-[#D63000] uppercase">
                    Recent Articles
                  </span>
                </div>
              </div>

              <h2 className="font-marcellus text-4xl md:text-5xl text-slate-900 mb-4">
                Insights for Intake and Operations Leaders
              </h2>
            </div>

            {/* Posts Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {posts.map((post) => (
                <Link
                  key={post._id}
                  href={`/resources/blog/${post.slug.current}`}
                  className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Image */}
                  <div className="relative h-64 bg-gray-100 overflow-hidden">
                    {post.image ? (
                      <Image
                        src={urlFor(post.image)
                          .width(600)
                          .height(400)
                          .fit("crop")
                          .quality(75)
                          .url()!}
                        alt={post.title ?? "Blog image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="flex items-center justify-center h-full bg-gradient-to-br from-gray-100 to-gray-200">
                        <Gavel className="w-20 h-20 text-gray-400" />
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Date */}
                    <p className="text-sm text-orange-700 font-semibold mb-2">
                      {post.publishedAt
                        ? new Date(post.publishedAt).toLocaleDateString("en-US", {
                            timeZone: "UTC",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })
                        : "—"}
                    </p>

                    {/* Title */}
                    <h3 className="text-2xl font-marcellus mb-4 leading-tight group-hover:text-orange-500 transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-orange-700 font-semibold group-hover:gap-3 transition-all duration-300 hover:text-orange-600">
                      Read More{" "}
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            {/* View All Button */}
            <div className="text-center mt-12">
              <Link
                href="/resources/blog"
                className="inline-flex items-center gap-2 px-8 py-3 bg-orange-700 text-white font-semibold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                View All Articles
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}

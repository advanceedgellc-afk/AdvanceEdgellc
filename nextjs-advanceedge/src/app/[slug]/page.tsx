// ✅ Correct
import { PortableText, type SanityDocument } from "next-sanity";


import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
import { client } from "@/sanity/client";
import Link from "next/link";
import { notFound } from "next/navigation";

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? imageUrlBuilder({ projectId, dataset }).image(source)
    : null;

type Post = SanityDocument & {
  title?: string;
  publishedAt?: string;
  body?: unknown;
  image?: SanityImageSource;
};

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // ✅ AWAIT params first (Next.js 15+ requirement)
  const { slug } = await params;

  const post = await client.fetch<Post>(POST_QUERY, { slug });

  if (!post) {
    notFound();
  }

  const postImageUrl =
    post.image && urlFor(post.image)
      ? urlFor(post.image)!.width(550).height(310).url()
      : null;

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex flex-col gap-4">
      <Link href="/" className="hover:underline">
        ← Back to posts
      </Link>

      {postImageUrl && (
        <img
          src={postImageUrl}
          alt={post.title ?? "Post image"}
          className="aspect-video rounded-xl"
          width={550}
          height={310}
        />
      )}

      <h1 className="text-4xl font-bold mb-8">{post.title}</h1>

      <div className="prose">
        {post.publishedAt && (
          <p>Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
        )}
        {Array.isArray(post.body) && <PortableText value={post.body} />}
      </div>
    </main>
  );
}

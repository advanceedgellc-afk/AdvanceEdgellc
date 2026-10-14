import { notFound, permanentRedirect } from "next/navigation";
import { client } from "@/sanity/client";

/**
 * Blog posts used to be reachable at /<slug> as well as /resources/blog/<slug>,
 * which gave Google two copies of every post. Send old /<slug> links to the
 * real post page; anything that is not a post is a normal 404.
 */
export default async function LegacyPostRedirect({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const exists = await client.fetch<boolean>(
    `defined(*[_type == "post" && slug.current == $slug][0]._id)`,
    { slug }
  );

  if (!exists) notFound();
  permanentRedirect(`/resources/blog/${slug}`);
}
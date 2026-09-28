'use client';

import dynamic from 'next/dynamic';

const BlogPostShare = dynamic(() => import("@/components/BlogPostShare"), {
  ssr: false,
  loading: () => null,
});

interface BlogPostShareWrapperProps {
  title: string;
  slug: string;
}

export default function BlogPostShareWrapper({ title, slug }: BlogPostShareWrapperProps) {
  return <BlogPostShare title={title} slug={slug} />;
}

// src/lib/queries.ts
import { groq } from 'next-sanity'

export const postBySlugQuery = groq`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    "slug": slug.current,
    excerpt,
    seoTitle,
    seoDescription,
    "ogImage": ogImage.asset->url,
    "image": image.asset->url,
    publishedAt,
    body,
    categories[]->{
      _id,
      title
    },
    tags
  }
`

export const allPostsQuery = groq`
  *[_type == "post" && publishedAt < now()] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    "image": image.asset->url,
    publishedAt
  }[0...9]
`

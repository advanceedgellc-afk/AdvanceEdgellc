
import type { SanityImageSource } from "@sanity/image-url/lib/types/types"

export type Post = {
    _id: string
    title: string
    slug: {
      current: string
    }
    image?: SanityImageSource
    excerpt?: string
    publishedAt?: string
  }
  

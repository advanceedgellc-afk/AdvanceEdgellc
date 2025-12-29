import {createClient} from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import type {Image} from 'sanity'

export const client = createClient({
  projectId: 'hmmhq0cz',
  dataset: 'production',
  apiVersion: '2025-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source: Image | any) {
  return builder.image(source)
}

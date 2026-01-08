declare module "@sanity/image-url" {
    import type { SanityClient } from "@sanity/client";
    import type { SanityImageSource } from "@sanity/image-url/lib/types/types";
  
    interface ImageUrlBuilderOptions {
      projectId?: string;
      dataset?: string;
    }
  
    interface ImageUrlBuilder {
      image(source: SanityImageSource): ImageUrlBuilder;
      width(width: number): ImageUrlBuilder;
      height(height: number): ImageUrlBuilder;
      fit(value: "clip" | "crop" | "fill" | "fillmax" | "max" | "scale" | "min"): ImageUrlBuilder;
      quality(value: number): ImageUrlBuilder;
      url(): string;
    }
  
    export default function imageUrlBuilder(
      clientOrConfig: SanityClient | ImageUrlBuilderOptions
    ): ImageUrlBuilder;
  }
  
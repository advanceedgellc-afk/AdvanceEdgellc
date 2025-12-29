import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "hmmhq0cz",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
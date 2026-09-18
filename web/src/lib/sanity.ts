// web/src/lib/sanity.ts
import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION,
  useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: any) => builder.image(source);

export async function getSiteSettings() {
  return client.fetch(`*[_type == "siteSettings"][0]`);
}
export async function getResources() {
  return client.fetch(`*[_type == "resource"] | order(_createdAt desc)`);
}
// etc — one function per query you need

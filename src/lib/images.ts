import type { ImageMetadata } from 'astro';

const all = import.meta.glob<{ default: ImageMetadata }>('/src/assets/**/*.{webp,png,jpg}', { eager: true });

export function img(path: string): ImageMetadata {
  const mod = all[`/src/assets/${path}`];
  if (!mod) throw new Error(`Missing image: src/assets/${path}`);
  return mod.default;
}

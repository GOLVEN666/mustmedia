import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    authImage: z.string().optional(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    slug: z.string().optional(),
    summary: z.string().optional(),
    type: z.string().optional(),
  }),
});

export const collections = { blog };

import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const products = defineCollection({
  loader: glob({ 
    pattern: "**/*.json", 
    base: "./src/data/products" }),
  schema: z.object({
    name: z.string(),
    description: z.string(),
    price: z.string(),
    id: z.string().uuid(),
    imgSrc: z.string().url()
  }),
});

export const collections = { products };

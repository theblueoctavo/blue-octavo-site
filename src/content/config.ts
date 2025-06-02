import { defineCollection, z } from 'astro:content';

const writings = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  writings,
};
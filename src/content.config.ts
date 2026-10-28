import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Every writeup must match this schema or the build fails.
const writeups = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/writeups' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    platform: z.enum(['HTB', 'THM', 'VulnHub', 'CTF', 'Lab']),
    difficulty: z.enum(['Easy', 'Medium', 'Hard', 'Insane']).optional(),
    tags: z.array(z.string()).default([]),
    summary: z.string().optional(),
    // Keep writeups of active machines as drafts: they are never rendered.
    draft: z.boolean().default(true),
  }),
});

export const collections = { writeups };

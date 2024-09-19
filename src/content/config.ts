import { defineCollection, reference, z } from 'astro:content';

const baseSchema = z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    alt: z.string()
})

const newsCollection = baseSchema.extend({
    date: z.coerce.date({ message: 'Invalid date' }),
    tagline: z.string(),
    caption: z.string(),
    author: reference('authors'),
    draft: z.boolean({ message: 'Draft mode was not specified' }),
    type: z.enum(['Tip', 'Story', 'Announcement']),
    url: z.string().url({ message: 'You need to specify a valid url' }),
});

const authorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        handle: z.string().url({ message: 'Handle is not a valid url' })
    })
});

const markdownCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        cover: image().refine((img) => img.width >= 1080, {
            message: 'Cover image must be at least 1080px wide',
        }),
        coverDescription: z.string(),
    })
})

export const collections = {
    news: defineCollection({ type: 'content', schema: newsCollection }),
    authors: authorsCollection,
    markdown: markdownCollection,
};

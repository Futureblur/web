import { defineCollection, reference, z } from 'astro:content';

const newsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date({ message: 'Invalid date' }),
        author: reference('authors'),
        draft: z.boolean({ message: 'Draft mode was not specified' }),
        type: z.enum(['Tip', 'Story', 'Announcement']),
        cover: image().refine((img) => img.width >= 1080, {
            message: 'Cover image must be at least 1080px wide',
        }),
        coverDescription: z.string(),
        url: z.string().url({ message: 'You need to specify a valid url' }),
    }),
});

const authorsCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name: z.string(),
        handle: z.string().url({ message: 'Handle is not a valid url' })
    })
});

export const collections = {
    news: newsCollection,
    authors: authorsCollection,
};

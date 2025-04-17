import { defineCollection, reference, z } from 'astro:content';

const promotionDimError = {
    message: 'Promotion image dim level needs to be between 0 and 3'
};

const promotionCollection = defineCollection({
    type: 'data',
    schema: z.object({
        order: z.number().nonnegative(
            { message: 'Promotion object order needs to be positive.' }),
        hide: z.boolean().optional(),
        title: z.string(),
        subtitle: z.string(),
        image: z.string(),
        alt: z.string(),
        dimLevel: z.number()
            .min(0, promotionDimError)
            .max(3, promotionDimError)
            .optional(),
        cta: z.string(),
        url: z.string().url()
    })
})

const newsCollection = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        cover: image().refine((img) => img.width >= 1080, {
            message: 'Cover image must be at least 1080px wide',
        }),
        alt: z.string(),
        date: z.coerce.date({ message: 'Invalid date' }),
        tagline: z.string(),
        caption: z.string(),
        author: reference('authors'),
        draft: z.boolean({ message: 'Draft mode was not specified' }),
        type: z.enum(['Announcement', 'Tip', 'Update', 'Story', 'Investors']),
        url: z.string().url({ message: 'You need to specify a valid url' }),
    })
})

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
    promotion: promotionCollection,
    news: newsCollection,
    authors: authorsCollection,
    markdown: markdownCollection,
};

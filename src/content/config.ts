import { defineCollection, reference, z } from 'astro:content';

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
        type: z.enum(
            ['Announcement', 'Tip', 'Update', 'Story', 'Investors'],
            { message: 'Post type is invalid' }),
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

export type StoreContentFile = {
    name: string,
    type: string
}

const storeCollection = defineCollection({
    type: 'data',
    schema: z.object({
        name:
            z.string()
                .min(2, { message: 'Name must be longer than one character' })
                .max(80, { message: 'Name cannot be longer than 80 characters' }),
        shortName:
            z.string()
                .min(
                    2,
                    { message: 'Short name must be longer than one character' })
                .max(30, {
                    message: 'Short name cannot be longer than 30 characters'
                }),
        category: z.enum(['StarterKit'], { message: 'Invalid category' }),
        description: z.string(),
        releaseDate: z.coerce.date({ message: 'Invalid date' }),
        price: z.coerce.number()
            .min(0, { message: 'Price cannot be a negative value' })
            .max(999999, { message: 'Price cannot exceed 999999' })
            .multipleOf(
                0.01, 'Price cannot have more than two decimal digits'),
        details: z.object({
            contents: z.array(z.custom<StoreContentFile>())
                .nonempty({ message: 'Contents cannot be empty' }),
            usedIn: z.object({
                tutorial: z.object({
                    name: z.string(),
                    url: z.string().url({ message: 'Tutorial URL is invalid' })
                }),
                series: z.string(),
                level: z.number().min(1).max(3)
            }),
            meta: z.object({
                fileType: z.string(),
                size: z.string(),
                fileCount: z.number().positive(
                    { message: 'File count needs to be a positive number' }),
                authors: z.string().array().nonempty(
                    { message: 'Authors cannot be empty' }),
                credits: z.string().optional()
            })
        })
    })
})

export const collections = {
    news: newsCollection,
    authors: authorsCollection,
    markdown: markdownCollection,
    store: storeCollection,
};

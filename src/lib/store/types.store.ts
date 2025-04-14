import { type InferEntrySchema } from 'astro:content';

export type StoreItem = InferEntrySchema<'store'>;

export type StorePrice = {
    currency: string; amount: number;
}

export type StoreContentFile = {
    name: string,
    type: string
}


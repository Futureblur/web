import type { Language } from '@i18n/ui';
import { getLangFromUrl, useTranslations } from '@i18n/utils';
import type { CollectionEntry } from 'astro:content';
import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
    return Intl
        .DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })
        .format(date);
}

export function readingTime(html: string, lang: Language) {
    const textOnly = html.replace(/<[^>]+>/g, '');
    const wordCount = textOnly.split(/\s+/).length;
    const readingTimeMinutes = (wordCount / 200 + 1).toFixed();

    const t = useTranslations(lang);
    return `${readingTimeMinutes} ${t('post.readTime')}`;
}

export function getUsername(url: string) {
    let n = url.lastIndexOf('/');
    return url.substring(n + 1);
}

export function getTranslatedSlug(slug: string, basePath: string = '') {
    // Remove first slash if exists
    if (slug.charAt(0) === '/') {
        slug = slug.slice(1);
    }

    let lang = getLangFromUrl(new URL(`https://futureblur.com/${slug}`));
    let removedSlug = slug.replace(`${lang}`, '');
    return `/${lang}${basePath}${removedSlug}`;
}

// Returns false for the first 3 elements of news.
export function shouldLoadCardLazy(
    news: Array<CollectionEntry<'news'>>,
    post: CollectionEntry<'news'>,
) {
    return news.includes(post, 3);
}

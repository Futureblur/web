import type { Language } from '@i18n/ui';
import { useTranslations } from '@i18n/utils';
import type { CollectionEntry } from 'astro:content';

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

// Returns false for the first 3 elements of news.
export function shouldLoadCardLazy(
    news: Array<CollectionEntry<'news'>>,
    post: CollectionEntry<'news'>,
) {
    return news.includes(post, 3);
}

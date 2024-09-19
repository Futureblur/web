import type { Language } from '@i18n/ui';
import { getLangFromUrl, useTranslations } from '@i18n/utils';
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

export function getTranslatedSlug(slug: string) {
    let lang = getLangFromUrl(new URL(`https://news.futureblur.com/${slug}`));
    let removedSlug = slug.replace(`${lang}`, '');
    return `../../${lang}/news${removedSlug}`;
}


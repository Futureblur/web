import type { ui } from '@i18n/ui';
import { useTranslations } from '@i18n/utils';

import type { StoreItem } from './types.store';

export function isNew(item: StoreItem) {
    const now = new Date();
    const delta = now.getMonth() - item.releaseDate.getMonth() +
        12 * (now.getFullYear() - item.releaseDate.getFullYear());

    const maxMonthDelta = 2;

    return delta <= maxMonthDelta;
}

export function isFree(item: StoreItem) {
    return item.price.base.amount === 0;
}

export function getLocalizedPrice(price: number, lang: keyof typeof ui) {
    const t = useTranslations(lang);

    return price === 0 ? t('store.price.free') : price.toLocaleString(lang, {
        minimumFractionDigits: 2,
        style: 'currency',
        currency: 'USD',
        trailingZeroDisplay: 'stripIfInteger',
    });
}


import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import critters from 'astro-critters';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

const subdomain = process.env.BRANCH || '';

// https://astro.build/config
export default defineConfig({
    site: `https://${subdomain}futureblur.com`,
    prefetch: true,
    build: { format: 'preserve' },
    integrations: [
        tailwind(), sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: { en: 'en', de: 'de' },
            },
            serialize(item) {
                if (/admin/.test(item.url)) {
                    return undefined;
                }

                if (/soon/.test(item.url)) {
                    return undefined;
                }

                return item;
            }
        }),
        mdx(), critters(), robotsTxt()
    ],
    markdown: { shikiConfig: { theme: 'css-variables' } },
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false }
    },
});

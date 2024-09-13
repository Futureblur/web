import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import critters from 'astro-critters';
import pagefind from 'astro-pagefind';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

const subdomain = process.env.BRANCH || '';

// https://astro.build/config
export default defineConfig({
    site: `https://${subdomain}futureblur.com`,

    integrations: [
        tailwind(), sitemap({
            i18n: {
                defaultLocale: 'en',
                locales: { en: 'en', de: 'de' },
            },
        }),
        mdx(), pagefind(), critters(), robotsTxt()
    ],
    markdown: { shikiConfig: { theme: 'css-variables' } },
    i18n: {
        locales: ['en', 'de'],
        defaultLocale: 'en',
        routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false }
    },
});

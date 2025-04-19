import type { Metadata, NavBarDropdown, NavigationGroup, NavigationLink, Site } from '@types';

export const SITE: Site = {
    TITLE: 'Home',
    DESCRIPTION: 'Home of 3D.',
    COVER: '/images/glyph-banner.png',
    NUM_POSTS_ON_HOMEPAGE: 5,
};

export const NEWS: Metadata = {
    TITLE: 'Newsroom',
    DESCRIPTION: 'Latest updates and announcements from Futureblur.',
    COVER: '/images/newsroom-banner.png',
};

export const INVESTORS: Metadata = {
    TITLE: 'Investor Relations',
    DESCRIPTION: 'Latest updates and announcements from Futureblur.',
    COVER: '/images/investors-banner.png',
};

export const navBarLinks: NavigationLink[] = [
    {
        title: 'nav.title.store',
        url: 'https://store.futureblur.com',
        external: true,
    },
    { title: 'nav.title.products', url: 'https://fut.red/g', external: true },
    { title: 'nav.title.portfolio', url: 'https://fut.red/i', external: true },
    { title: 'nav.title.edu', url: 'https://fut.red/y', external: true }
];

export const navBarLinksBackup: NavigationLink[] = [
    {
        title: 'Store',
        url: 'https://store.futureblur.com',
        external: true,
    },
    { title: 'Services', url: 'services' },
    { title: 'Resources', url: 'resources' },
    { title: 'Contact', url: 'contact' },
];

export const navBarDropdowns: NavBarDropdown[] = [
    {
        id: 'Services',
        primary: {
            title: 'Futureblur for',
            links: [
                { title: 'Brands', url: 'for/brands' },
                { title: 'Creators', url: 'for/creators' },
                { title: 'Talent', url: 'for/talent' },
            ],
        },
        secondary: [
            {
                title: 'Services',
                links: [
                    {
                        title: 'Ads',
                        url: 'services/ads',
                    },
                    {
                        title: 'Design',
                        url: 'services/design',
                    },
                    {
                        title: 'Content',
                        url: 'services/content',
                    },
                    {
                        title: 'ArchViz',
                        url: 'https://skyscape3d.com/',
                        external: true,
                    },
                ],
            },
        ],
    },
    {
        id: 'Resources',
        primary: {
            title: 'Quicklinks',
            links: [
                {
                    title: 'Become a sponsor',
                    url: 'https://fut.red/sponsor',
                    external: true,
                },
                { title: 'Portfolio', url: 'https://fut.red/i', external: true },
                {
                    title: 'Open Source',
                    url: 'https://fut.red/g',
                    external: true,
                },
            ],
        },
        secondary: [
            {
                title: 'Get help',
                links: [
                    {
                        title: 'Contact support',
                        url: 'contact',
                    },
                    {
                        title: 'Community',
                        url: 'https://fut.red/d',
                        external: true,
                    },
                ],
            },
            {
                title: 'Company',
                links: [
                    {
                        title: 'Newsroom',
                        url: 'https://news.futureblur.com',
                        external: true,
                    },
                    {
                        title: 'About',
                        url: 'about',
                    },
                    {
                        title: 'Our Philosophy',
                        url: 'https://fut.red/philosophy',
                        external: true,
                    },
                    {
                        title: 'Brand Guidelines',
                        url: 'brand',
                    },
                ],
            },
        ],
    },
];

export const footerGroup: NavigationGroup[] = [
    {
        title: 'footer.resources',
        links: [
            {
                title: 'footer.legal',
                url: '/legal',
            },
            {
                title: 'footer.privacy',
                url: '/privacy',
            },
            {
                title: 'footer.terms',
                url: '/terms',
            },
            {
                title: 'footer.cookiePolicy',
                url: '/cookie-policy',
            },
            {
                title: 'footer.sitemap',
                url: '/sitemap',
            },

        ],
    },
    {
        title: 'footer.company',
        links: [
            {
                title: 'footer.newsroom',
                url: '/news',
            },
            {
                title: 'footer.about',
                url: '/soon/?about',
            },
            {
                title: 'footer.press',
                url: '/brand',
            },
            {
                title: 'footer.investors',
                url: '/investors',
            },
            {
                title: 'footer.contact',
                url: '/contact',
            },
        ],
    },
    {
        title: 'footer.socials',
        links: [
            {
                title: 'footer.instagram',
                url: 'https://fut.red/i',
                external: true,
            },
            {
                title: 'footer.youtube',
                url: 'https://fut.red/y',
                external: true,
            },
            {
                title: 'footer.github',
                url: 'https://fut.red/g',
                external: true,
            },
            {
                title: 'footer.threads',
                url: 'https://fut.red/threads',
                external: true,
            },
            {
                title: 'footer.linkedin',
                url: 'https://fut.red/l',
                external: true,
            },
        ],
    },
];


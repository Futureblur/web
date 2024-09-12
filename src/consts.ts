import type { Metadata, NavBarDropdown, NavigationGroup, NavigationLink, Site } from '@types';

export const SITE: Site = {
    TITLE: 'Futureblur',
    DESCRIPTION: 'Latest updates and announcements from Futureblur.',
    EMAIL: 'hello@futureblur.com',
    NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
    TITLE: 'Newsroom',
    DESCRIPTION: 'Latest updates and announcements from Futureblur.',
    COVER: '/images/newsroom-banner.png',
};

export const navBarLinks: NavigationLink[] = [
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
                title: 'footer.sitemap',
                url: '/soon/?sitemap',
            },
            {
                title: 'Cookie Policy',
                url: '/soon/?cookie-policy',
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
                url: '/soon/?brand',
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
        ],
    },
];


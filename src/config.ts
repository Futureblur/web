import type { NavBarDropdown, NavigationGroup, NavigationLink, } from './types/config.ts';

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
        title: 'Resources',
        links: [
            {
                title: 'Legal Notice',
                url: 'legal',
            },
            {
                title: 'Privacy Policy',
                url: 'pricacy',
            },
            {
                title: 'Terms of Service',
                url: 'terms',
            },
            {
                title: 'Site Map',
                url: 'sitemap',
            },
            {
                title: 'Cookie Policy',
                url: 'cookie-policy',
            },
        ],
    },
    {
        title: 'Company',
        links: [
            {
                title: 'Newsroom',
                url: 'newsroom',
            },
            {
                title: 'About',
                url: 'about',
            },
            {
                title: 'Press',
                url: 'brand',
            },
        ],
    },
    {
        title: 'Socials',
        links: [
            {
                title: 'Instagram',
                url: 'https://fut.red/i',
                external: true,
            },
            {
                title: 'YouTube',
                url: 'https://fut.red/y',
                external: true,
            },
            {
                title: 'GitHub',
                url: 'https://fut.red/g',
                external: true,
            },
        ],
    },
];

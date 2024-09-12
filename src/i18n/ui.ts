export const languages = ['en', 'de'] as const;

export type Language = typeof languages[number];

export const defaultLang = 'en';
export const showDefaultLang = true;

export const ui = {
    en: {
        'nav.search': 'Search',
        'nav.back': 'Back',
        'nav.backToTop': 'Back to top',
        'footer.resources': 'Resources',
        'footer.legal': 'Legal Notice',
        'footer.privacy': 'Privacy Policy',
        'footer.terms': 'Terms of Service',
        'footer.sitemap': 'Site Map',
        'footer.company': 'Company',
        'footer.newsroom': 'Newsroom',
        'footer.about': 'About',
        'footer.press': 'Press',
        'footer.socials': 'Socials',
        'footer.instagram': 'Instagram',
        'footer.youtube': 'YouTube',
        'footer.github': 'GitHub',
        'tag.announcement': 'Announcement',
        'tag.tip': 'Tip',
        'tag.story': 'Story',
        'post.draftMode': 'Draft Mode',
        'post.share': 'Share',
        'post.copied': 'Copied',
        'post.readTime': 'min read',
        'post.philosophyTitle': 'Futureblur\'s Philosophy',
        'post.philosophy':
            'Start with an incredible idea. Don\'t be afraid to reach for the stars. The first step is all about creating the prototype. But why stop there? Next up is polishing, where most of the time will be spent. Embrace the countless hours, because deep down we know it\'s worth it. Once happy with the results, repeat as often as needed. The journey isn\'t an easy one for sure, but that\'s exactly what makes it so special. So rewarding. So uplifting. So beautiful.',
        'post.by': 'Posted by',
        'title.latestNews': 'Latest News',
        '404.title': 'This page does not exist.',
        '404.back': 'Go back home',
        'soon.title': 'This page is in development. Check back later.'
    },
    de: {
        'nav.search': 'Suchen',
        'nav.back': 'Zurück',
        'nav.backToTop': 'Nach oben',
        'footer.resources': 'Ressourcen',
        'footer.legal': 'Impressum',
        'footer.privacy': 'Datenschutz',
        'footer.terms': 'AGB',
        'footer.sitemap': 'Sitemap',
        'footer.company': 'Futureblur',
        'footer.newsroom': 'Newsroom',
        'footer.about': 'Über uns',
        'footer.press': 'Presse',
        'footer.socials': 'Socials',
        'footer.instagram': 'Instagram',
        'footer.youtube': 'YouTube',
        'footer.github': 'GitHub',
        'tag.announcement': 'Ankündigung',
        'tag.tip': 'Tipp',
        'tag.story': 'Story',
        'post.draftMode': 'Entwurfsmodus',
        'post.share': 'Teilen',
        'post.copied': 'Kopiert',
        'post.readTime': 'Minuten Lesezeit',
        'post.philosophyTitle': 'Futureblurs Philosophie',
        'post.philosophy':
            'Jede Reise beginnt mit einer großen Idee. So groß, dass sie fast unmöglich scheint. Doch wie gelangt man ans Ziel? Das Rezept ist simpel: man nehme einen Prototyp und verbessere ihn so lange, bis er glänzt. Gut verrühren. Mit halb-fertigen Dingen geben wir uns nicht zufrieden, dafür sind wir nicht hier. Offenheit und Mut liegt in unserer DNA. Wir werden uns durchsetzen, uns den Thron erkämpfen, egal wie, wann, und wo.',
        'post.by': 'Veröffentlicht von',
        'title.latestNews': 'Das Neuste',
        '404.title': 'Diese Seite konnte nicht gefunden werden.',
        '404.back': 'Zurück nach Hause',
        'soon.title':
            'Diese Seite ist in Entwicklung. Schaue später noch einmal vorbei.'
    }
} as const;

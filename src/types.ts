export type Site = {
    TITLE: string; DESCRIPTION: string; EMAIL: string;
    NUM_POSTS_ON_HOMEPAGE: number;
};

export type Metadata = {
    TITLE: string; DESCRIPTION: string; COVER: string;
};

export type Socials = {
    NAME: string; HREF: string;
}[];

export type NavigationLink = {
    title: string; url: string;
    external?: boolean;
};

export type NavigationGroup = {
    title: string; links: NavigationLink[];
};

export type NavBarDropdown = {
    id: string; primary: NavigationGroup; secondary: NavigationGroup[];
};


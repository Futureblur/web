export type NavigationLink = {
  title: string;
  url: string;
  external?: boolean;
};

export type NavigationGroup = {
  title: string;
  links: NavigationLink[];
};

export type NavBarDropdown = {
  id: string;
  primary: NavigationGroup;
  secondary: NavigationGroup[];
};

export interface NavItem {
  label: string;
  /** path without leading slash */
  path?: string;
}

export const NavItems: NavItem[] = [
  {
    label: "Home",
    path: "",
  },
  {
    label: "About",
    path: "about",
  },
];

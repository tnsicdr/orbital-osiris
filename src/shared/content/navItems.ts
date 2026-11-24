import type { IconName } from "../maps/iconMap";

export interface NavItem {
  label: string;
  /** path without leading slash */
  path?: string;
  icon?: IconName;
}

export const NavItems: NavItem[] = [
  {
    label: "Home",
    path: "",
    icon: "home",
  },
  {
    label: "Posts",
    path: "posts",
    icon: "square-text",
  },
  {
    label: "About",
    path: "about",
    icon: "info",
  },
];

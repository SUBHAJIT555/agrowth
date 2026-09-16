export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavItem = NavLink & {
  children?: NavLink[];
  aliases?: string[];
};

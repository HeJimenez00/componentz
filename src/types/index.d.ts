export interface NavItem {
  title: string;
  href?: string;
  icon?: string;
  external?: boolean;
  disabled?: boolean;
}

export interface SidebarNavbarItem extends NavItem {
  items?: SidebarNavbarItem[];
}

export interface MainNavbarItem extends NavItem {
  items?: MainNavbarItem[];
}

export interface SideBarNavbarItem extends SidebarNavbarItem {}

import type { MainNavbarItem, SideBarNavbarItem } from "src/types";

interface DocsConfig {
  mainNavbar: MainNavbarItem[];
  sidebarNavbar: SideBarNavbarItem[];
}

export const docsConfig: DocsConfig = {
  mainNavbar: [
    {
      title: "mainItems",
      items: [
        {
          title: "Docs",
          href: "/docs/introduction",
        },
        {
          title: "Components",
          href: "/docs/components",
        },
        {
          title: "Templates",
          href: "/templates",
        },
        {
          title: "Blog",
          href: "/blog",
        },
      ],
    },
    {
      title: "secondaryItems",
      items: [
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "Login",
          href: "/Login",
        },
      ],
    },
  ],
  sidebarNavbar: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Templates",
          href: "/templates",
          items: [],
        },
      ],
    },
  ],
};
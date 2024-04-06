import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "OrioleDB",
  tagline: "The next-generation storage engine for PostgreSQL",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://orioledb.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "orioledb", // Usually your GitHub org/user name.
  projectName: "orioledb", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/orioledb/orioledb/edit/main/orioledb.com/docs/",
          sidebarCollapsed: false,
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/orioledb/orioledb/edit/main/orioledb.com/blog/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    defaultMode: "light",
    colorMode: {
      defaultMode: "light",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // title: "OrioleDB",
      logo: {
        alt: "OrioleDB",
        src: "img/logo-horizontal.png",
      },
      items: [
        {
          type: "dropdown",
          label: "Docs",
          position: "right",
          items: [
            {
              to: "/docs/",
              label: "Introduction",
              activeBaseRegex: "docs/$",
            },
            { to: "/docs/usage/getting-started", label: "Usage" },
            { to: "/docs/architecture/overview", label: "Architecture" },
            { to: "/docs/contributing/code-structure", label: "Contributing" },
          ],
        },
        { to: "/blog", label: "Blog", position: "right" },
        {
          href: "https://github.com/orioledb/orioledb",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Site",
          items: [
            {
              label: "Docs",
              to: "/docs",
            },
            {
              label: "Blog",
              to: "/blog",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/orioledb/orioledb",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/orioledb",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} OrioleDB, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    plugins: [
      [
        "@docusaurus/plugin-content-docs",
        {
          id: "docs-intro",
          path: "docs",
          routeBasePath: "/docs",
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
}

export default config

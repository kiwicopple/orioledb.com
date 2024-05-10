import { themes as prismThemes } from "prism-react-renderer"
import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"

const config: Config = {
  title: "OrioleDB",
  tagline: "The cloud-native storage engine for PostgreSQL",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://orioledb.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kiwcopple.github.io", // Usually your GitHub org/user name.
  projectName: "kiwcopple", // Usually your repo name.
  trailingSlash: false,

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
    stylesheets: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
      {
        href: "https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap",
        type: "text/css",
        crossorigin: "anonymous",
      },
    ],

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
          configureWebpack: () => ({
            resolve: {
              symlinks: false,
            },
          }),
        },
      ],
    ],
  } satisfies Preset.ThemeConfig,
}

export default config

// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion
import {themes as prismThemes} from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Mimir & Tyle Docs",
  tagline: "User and technical documentation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.mimir-org.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/documents/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "mimir-org", // Usually your GitHub org/user name.
  projectName: "documents", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/mimir-org/documents/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "mimir/docusaurus-social-card.jpg",
      algolia: {
        appId: "JWGV6PUW59",
        apiKey: "4058413b4cb33cd7bae2027afc566c7f",
        indexName: "uments",
        contextualSearch: true,
      },
      navbar: {
        title: "",
        logo: {
          alt: "Mimir Logo",
          src: "img/mimirDarkLogo.png",
          srcDark: "img/mimirLogo.png",
        },
        items: [
          {
            position: "left",
            label: "Installation Guide",
            to: "/installation-guide",
          },
          {
            type: "docSidebar",
            sidebarId: "mimirDocs",
            position: "left",
            label: "Mimir Docs",
            to: "./Mimir",
          },
          {
            type: "docSidebar",
            sidebarId: "tyleDocs",
            position: "left",
            label: "Tyle Docs",
            to: "./Tyle",
          },
          {
            type: "docSidebar",
            sidebarId: "tyleUserDocs",
            position: "left",
            label: "Tyle User Manual",
            to: "./TyleUserDocs",
          },
          {
            href: "https://github.com/mimir-org/mimir",
            label: "GitHub",
            position: "right",
          },
        ],
      },

      footer: {
        links: [
          {
            title: "Mimir Docs",
            items: [
              {
                label: "Mimir Docs",
                to: "/docs/Mimir/intro",
              },
              {
                label: "Tyle Docs",
                to: "/docs/Tyle/intro",
              },
              {
                label: "Tyle User Documentation",
                to: "/docs/TyleUserDocs/intro",
              },
            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

module.exports = config;

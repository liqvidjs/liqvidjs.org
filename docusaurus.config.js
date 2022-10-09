const path = require("path");

module.exports = {
  title: "Liqvid",
  tagline: "Create interactive videos in React",
  url: "https://liqvidjs.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "/favicon.ico",
  organizationName: "liqvidjs", // Usually your GitHub org/user name.
  projectName: "liqvid", // Usually your repo name.
  scripts: [
    "https://unpkg.com/@liqvid/host/lv-host.js",
  ],
  stylesheets: [
    // "https://lmqm.dev/css/ractive-player.css"
  ],
  themeConfig: {
    // search
    algolia: {
      appId: "55BTF917CY",
      apiKey: "23cae1f9bc583aa66b1b775b3eac0156",
      indexName: "liqvidjs",
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Algolia search parameters
      searchParameters: {},

      //... other Algolia params
    },
    colorMode: {
      disableSwitch: true
    },
    image: "https://liqvidjs.org/img/og.png",
    navbar: {
      title: "Liqvid",
      logo: {
        alt: "Liqvid",
        src: "img/logo.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          to: "blog/",
          activeBasePath: "blog",
          label: "Blog",
          position: "left",
        },
        {
          to: "faq",
          label: "FAQ",
          position: "left"
        },
        {
          href: "https://discord.gg/u8Qab99zHx",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/liqvidjs/liqvid",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Getting Started",
              to: "docs/",
            },
            {
              label: "API Reference",
              to: "docs/reference/css",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discord",
              href: "https://discord.gg/u8Qab99zHx"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/LiqvidJS"
            },
            {
              label: "Reddit",
              href: "https://reddit.com/r/liqvidjs/"
            }
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/liqvidjs/liqvid",
            },
            {
              label: "Product Hunt",
              href: "https://www.producthunt.com/posts/liqvid"
            }
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yuri Sulyma`,
    },
  },
  themes: ["./src/live-player"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/liqvidjs/liqvidjs.org/edit/main/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // editUrl:
        //     // "https://github.com/ysulyma/ractive-player/edit/master/website/blog/",
        // },
        theme: {
          customCss: [require.resolve("./src/css/custom.css")]
        },
      },
    ],
    // [
    //   "docusaurus-preset-shiki-twoslash",
    //   {
    //     themes: ["min-light"],
    //     defaultCompilerOptions: {
    //       types: ["node"]
    //     },
    //   }
    // ]
  ],
};

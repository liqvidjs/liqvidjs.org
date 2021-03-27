module.exports = {
  title: "RactivePlayer",
  tagline: "Create interactive videos in React",
  url: "https://ractive-player.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "ysulyma", // Usually your GitHub org/user name.
  projectName: "ractive-player", // Usually your repo name.
  scripts: [
    "/fake-fullscreen.js",
  ],
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    image: "https://d2og9lpzrymesl.cloudfront.net/r/rp-tutorial/icon.png",
    navbar: {
      title: "RactivePlayer",
      logo: {
        alt: "RactivePlayer",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        // {to: "tutorial", label: "Tutorial", position: "left"},
        {to: "faq", label: "FAQ", position: "left"},
        {
          href: "https://discord.gg/u8Qab99zHx",
          label: "Discord",
          position: "right",
        },
        {
          href: "https://github.com/ysulyma/ractive-player",
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
              label: "Reddit",
              href: "https://reddit.com/r/ractive_player/",
            }
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "blog",
            // },
            {
              label: "GitHub",
              href: "https://github.com/ysulyma/ractive-player",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Yuri Sulyma`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // editUrl:
            // "https://github.com/ysulyma/ractive-player/edit/master/website/",
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // editUrl:
        //     // "https://github.com/ysulyma/ractive-player/edit/master/website/blog/",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};

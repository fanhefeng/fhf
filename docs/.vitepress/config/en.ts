import { defineConfig, type DefaultTheme } from "vitepress";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const pkg = require("../../package.json");

export const en = defineConfig({
  lang: "en-US",
  description: "fhf's room",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/en" },
      { text: "Examples", link: "/en/markdown-examples" },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/en/markdown-examples" },
          { text: "Runtime API Examples", link: "/en/api-examples" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/fanhefeng/fhf/edit/main/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: `Copyright © ${new Date().getFullYear() - 0 > 2024 ? "2024-" + new Date().getFullYear() : 2024} fhf`,
    },

    docFooter: {
      prev: "Previous page",
      next: "Next page",
    },

    outline: {
      label: "On this page", // 默认 "On this page"
    },

    lastUpdated: {
      text: "Last updated",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "Change language",
    returnToTopLabel: "Return to top",
    sidebarMenuLabel: "Menu",
    darkModeSwitchLabel: "Appearance",
    lightModeSwitchTitle: "Switch to light theme",
    darkModeSwitchTitle: "Switch to dark theme",
  },
});

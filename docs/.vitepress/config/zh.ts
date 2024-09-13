import { defineConfig, type DefaultTheme } from "vitepress";
// import { createRequire } from "module";
// const require = createRequire(import.meta.url);
// const pkg = require("../../package.json");

export const zh = defineConfig({
  lang: "zh-Hans",
  description: "fhf的小屋",
  // 主题级别配置选项
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "首页", link: "/zh/" },
      { text: "示例", link: "/zh/markdown-examples" },
    ],
    sidebar: [
      {
        text: "示例",
        items: [
          { text: "Markdown示例", link: "/zh/markdown-examples" },
          { text: "API示例", link: "/zh/api-examples" },
        ],
      },
    ],
    editLink: {
      pattern: "https://github.com/fanhefeng/fhf/edit/main/docs/:path",
      text: "在 GitHub 上编辑此页面",
    },
    footer: {
      message: "基于 MIT 许可发布",
      copyright: `版权所有 © ${new Date().getFullYear() - 0 > 2024 ? "2024-" + new Date().getFullYear() : 2024} fhf`,
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    // https://vitepress.dev/zh/reference/default-theme-config#outline
    outline: {
      label: "页面导航",
    },
    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },
    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

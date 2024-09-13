import { defineConfig } from "vitepress";
export const shared = defineConfig({
  // 应用级配置选项
  title: "fhf", // 网站标题
  rewrites: {
    "zh/:rest*": ":rest*", // 匹配路由中zh开头的路径
  },
  lastUpdated: true, // 最后更新时间
  cleanUrls: true, // 清理URL
  metaChunk: true, // 将meta信息打包到单独的chunk中
  markdown: {
    math: true, // 启用数学公式
    codeTransformers: [
      // We use `[!!code` in demo to prevent transformation, here we revert it back.
      // {
      //   postprocess(code) {
      //     return code.replace(/\[\!\!code/g, "[!code"); // 将`[!!code`替换为`[!code`
      //   },
      // },
    ],
  },
  // sitemap: {
  //   hostname: "https://vitepress.dev", // 网站域名
  //   transformItems(items) {
  //     return items.filter((item) => !item.url.includes("migration")); // 过滤掉包含`migration`的URL
  //   },
  // },
  /* prettier-ignore */
  head: [
    // ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }], // 设置网站图标
    // ['link', { rel: 'icon', type:' image/x-icon', href: '/favicon.ico' }], // 设置网站图标
    ['link', { rel: 'icon', type: 'image/png', href: '/logo.png' }], // 设置网站图标
    // ['meta', { name: 'theme-color', content: '#5f67ee' }], // 设置主题颜色
    // ['meta', { property: 'og:type', content: 'website' }], // 设置网站类型
    // ['meta', { property: 'og:locale', content: 'zh' }], // 设置网站语言
    ['meta', { property: 'og:title', content: 'fhf' }], // 设置网站标题
    ['meta', { property: 'og:site_name', content: 'fhf' }], // 设置网站名称
    // ['meta', { property: 'og:image', content: 'https://vitepress.dev/vitepress-og.jpg' }], // 设置网站图片
    ['meta', { property: 'og:url', content: 'https://fanhefeng.github.io/fhf/' }], // 设置网站URL
    // ['script', { src: 'https://cdn.usefathom.com/script.js', 'data-site': 'AZBRSFGG', 'data-spa': 'auto', defer: '' }] // 引入Fathom统计脚本
  ],
  themeConfig: {
    logo: { src: "/logo.png", width: 24, height: 24 },
    socialLinks: [{ icon: "github", link: "https://github.com/fanhefeng" }],
    siteTitle: "FHF",
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "8J64VVRP8K",
    //     apiKey: "a18e2f4cc5665f6602c5631fd868adfd",
    //     indexName: "vitepress",
    //     locales: {
    //       ...zhSearch,
    //       ...ptSearch,
    //       ...ruSearch,
    //       ...esSearch,
    //       ...koSearch,
    //     },
    //   },
    // },
    // carbonAds: { code: "CEBDT27Y", placement: "vuejsorg" }, // 引入Carbon广告
  },
});

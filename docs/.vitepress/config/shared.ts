import { defineConfig } from "vitepress";

const base = "/fhf/";
export const shared = defineConfig({
  // 应用级配置选项
  base, // 部署到github pages时的路径，如果没有配置，会导致css样式丢失
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
    ['link', { rel: 'icon', type: 'image/png', href: `${base}/logo.png` }], // 设置网站图标
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
    socialLinks: [
      { icon: "github", link: "https://github.com/fanhefeng/fhf" },
      {
        icon: {
          svg: `<svg t="1726248467816" class="icon" viewBox="0 0 1138 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="8883" width="200" height="200"><path d="M914.432 518.144q27.648 21.504 38.912 51.712t9.216 62.976-14.336 65.536-31.744 59.392q-34.816 48.128-78.848 81.92t-91.136 56.32-94.72 35.328-89.6 18.944-75.264 7.68-51.712 1.536-49.152-2.56-68.096-10.24-78.336-21.504-79.872-36.352-74.24-55.296-59.904-78.848q-16.384-29.696-22.016-63.488t-5.632-86.016q0-22.528 7.68-51.2t27.136-63.488 53.248-75.776 86.016-90.112q51.2-48.128 105.984-85.504t117.248-57.856q28.672-10.24 63.488-11.264t57.344 11.264q10.24 11.264 19.456 23.04t12.288 29.184q3.072 14.336 0.512 27.648t-5.632 26.624-5.12 25.6 2.048 22.528q17.408 2.048 33.792-1.536t31.744-9.216 31.232-11.776 33.28-9.216q27.648-5.12 54.784-4.608t49.152 7.68 36.352 22.016 17.408 38.4q2.048 14.336-2.048 26.624t-8.704 23.04-7.168 22.016 1.536 23.552q3.072 7.168 14.848 13.312t27.136 12.288 32.256 13.312 29.184 16.384zM656.384 836.608q26.624-16.384 53.76-45.056t44.032-64 18.944-75.776-20.48-81.408q-19.456-33.792-47.616-57.344t-62.976-37.376-74.24-19.968-80.384-6.144q-78.848 0-139.776 16.384t-105.472 43.008-72.192 60.416-38.912 68.608q-11.264 33.792-6.656 67.072t20.992 62.976 42.496 53.248 57.856 37.888q58.368 25.6 119.296 32.256t116.224 0.512 100.864-21.504 74.24-33.792zM522.24 513.024q20.48 8.192 38.912 18.432t32.768 27.648q10.24 12.288 17.92 30.72t10.752 39.424 1.536 42.496-9.728 38.912q-8.192 18.432-19.968 37.376t-28.672 35.328-40.448 29.184-57.344 18.944q-61.44 11.264-117.76-11.264t-88.064-74.752q-12.288-39.936-13.312-70.656t16.384-66.56q13.312-27.648 40.448-51.712t62.464-38.912 75.264-17.408 78.848 12.8zM359.424 764.928q37.888 3.072 57.856-18.432t21.504-48.128-15.36-47.616-52.736-16.896q-27.648 3.072-43.008 23.552t-17.408 43.52 9.728 42.496 39.424 21.504zM778.24 6.144q74.752 0 139.776 19.968t113.664 57.856 76.288 92.16 27.648 122.88q0 33.792-16.384 50.688t-35.328 17.408-35.328-14.336-16.384-45.568q0-40.96-22.528-77.824t-59.392-64.512-84.48-43.52-96.768-15.872q-31.744 0-47.104-15.36t-14.336-34.304 18.944-34.304 51.712-15.36zM778.24 169.984q95.232 0 144.384 48.64t49.152 146.944q0 30.72-10.24 43.52t-22.528 11.264-22.528-14.848-10.24-35.84q0-60.416-34.816-96.256t-93.184-35.84q-19.456 0-28.672-10.752t-9.216-23.04 9.728-23.04 28.16-10.752z" p-id="8884"></path></svg>`,
        },
        link: "https://weibo.com/u/2278729957",
        ariaLabel: "Weibo",
      },
      {
        icon: {
          svg: `<svg t="1726247929041" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6266" width="200" height="200"><path d="M813.2864 234.5216h-53.0176l46.3872-46.3872c19.8912-19.8912 19.8912-59.648 0-79.5136s-59.648-19.8912-79.5136 0l-132.5312 125.9008h-159.0272l-132.5312-125.9008c-19.8912-19.8912-59.648-19.8912-79.5136 0s-19.8912 59.648 0 79.5136l46.3872 46.3872H216.9088c-92.7744 0-165.6576 72.8832-165.6576 165.6576v357.8112c0 99.4048 72.8832 172.288 165.6576 172.288h589.7216c92.7744 0 165.6576-72.8832 165.6576-165.6576V400.1792c6.6304-92.7744-66.2528-165.6576-159.0272-165.6576z m46.3872 523.4688a59.392 59.392 0 0 1-59.648 59.648H223.5392a59.392 59.392 0 0 1-59.648-59.648V406.8096a59.392 59.392 0 0 1 59.648-59.648h576.4864a59.392 59.392 0 0 1 59.648 59.648v351.1808z m-516.864-291.5328a59.392 59.392 0 0 0-59.648 59.648v59.648c0 33.1264 26.496 59.648 59.648 59.648s59.648-26.496 59.648-59.648v-59.648a59.392 59.392 0 0 0-59.648-59.648z m344.576 0a59.392 59.392 0 0 0-59.648 59.648v59.648c0 33.1264 26.496 59.648 59.648 59.648s59.648-26.496 59.648-59.648v-59.648a59.392 59.392 0 0 0-59.648-59.648z" p-id="6267"></path></svg>`,
        },
        link: "https://space.bilibili.com/87880522",
        ariaLabel: "Bilibili",
      },
      {
        icon: {
          svg: `<svg t="1726248431008" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7866" width="200" height="200"><path d="M937.4 423.9c-84 0-165.7-27.3-232.9-77.8v352.3c0 179.9-138.6 325.6-309.6 325.6S85.3 878.3 85.3 698.4c0-179.9 138.6-325.6 309.6-325.6 17.1 0 33.7 1.5 49.9 4.3v186.6c-15.5-6.1-32-9.2-48.6-9.2-76.3 0-138.2 65-138.2 145.3 0 80.2 61.9 145.3 138.2 145.3 76.2 0 138.1-65.1 138.1-145.3V0H707c0 134.5 103.7 243.5 231.6 243.5v180.3l-1.2 0.1" p-id="7867"></path></svg>`,
        },
        link: "https://www.douyin.com/user/MS4wLjABAAAAfGp5PR_3O4ZH3MG4LpoTtA2ObeEeIxYQOmnAWFsyvtw",
        ariaLabel: "Douyin",
      },
    ],
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

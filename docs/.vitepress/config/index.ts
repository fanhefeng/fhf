import { defineConfig } from "vitepress";
import { shared } from "./shared";
import { zh } from "./zh";
import { en } from "./en";

export default defineConfig({
  // 项目级别的配置选项
  base: "/fhf/", // 部署到github pages时的路径，如果没有配置，会导致css样式丢失
  srcDir: "src", // 指定源文件目录，源目录是 Markdown 源文件所在的位置
  outDir: "dist", // 指定输出目录，构建后生成的文件将放在此目录中
  vite: {
    // https://cn.vitejs.dev/config/shared-options.html#publicdir
    publicDir: "../public", // 指定 public 目录路径
  },
  ...shared,
  locales: {
    root: { label: "简体中文", ...zh },
    en: { label: "English", lang: "en-US", ...en },
  },
});

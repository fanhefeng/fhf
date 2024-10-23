---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "FHF"
  text: "欢迎来到我的小屋"
  tagline: 人生若只如初见
  actions:
    - theme: brand
      text: Markdown 示例
      link: /example/markdown-examples
    - theme: alt
      text: API 示例
      link: /example/api-examples
  image:
    src: /assets/images/fhf.jpg
    alt: fhf

features:
  - title: 分享
    icon:
      src: /assets/icon/share.svg
    details: 随便写写
    link: /share/resume_skill
  - title: 前端
    icon:
      src: /assets/icon/frontend.svg
    details: 什么是前端
    link: /frontend/introduction
  - title: 网络
    icon:
      src: /assets/icon/network.svg
    details: 网络相关知识
    link: /network/OSI
  - icon:
      # type FeatureIcon =
      # | string
      # | { src: string; alt?: string; width?: string; height: string }
      # | {
      #     light: string
      #     dark: string
      #     alt?: string
      #     width?: string
      #     height: string
      #   }
      src: /assets/icon/movie.svg
      alt: 电影图标
      width: 48
      height: 48
    title: 视频
    details: 腾讯视频
    link: https://v.qq.com/channel/movie
    # linkText: 点击前往
    rel: external
  - icon:
      src: /assets/icon/music.svg
    title: 音乐
    details: QQ音乐
    link: https://y.qq.com/
    rel: external
  - icon:
      src: /assets/icon/game.svg
    title: 游戏
    details: steam平台
    link: https://store.steampowered.com/
    rel: external
---

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);
  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}
.image-src {
  border-radius: 50%;
}
@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>

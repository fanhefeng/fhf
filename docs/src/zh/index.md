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
      link: /markdown-examples
    - theme: alt
      text: API 示例
      link: /api-examples
  image:
    src: /logo.png
    alt: fhf

features:
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

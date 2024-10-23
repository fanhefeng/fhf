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
			{ text: "首页", link: "/" },
			{ text: "关于我", link: "/me" },
		],
		sidebar: {
			"/example": [
				{
					text: "示例",
					items: [
						{ text: "Markdown示例", link: "/example/markdown-examples" },
						{ text: "API示例", link: "/example/api-examples" },
					],
				},
			],
			"/network": [
				{
					text: "网络",
					items: [
						{ text: "OSI", link: "/network/OSI" },
						{ text: "HTTP", link: "/network/http" },
					],
				},
			],
			"/frontend": [
				{
					text: "前端",
					items: [
						{ text: "什么是前端", link: "/frontend/introduction" },
						{
							text: "技术点",
							link: "/frontend/technology",
						},
						{
							text: "性能优化",
							link: "/frontend/performance",
						},
					],
				},
			],
			"/share": [
				{
					text: "分享",
					items: [
						{ text: "简历怎么写？", link: "/share/resume_skill" },
						{ text: "程序员——数字时代的炼金术师", link: "/share/programmer" },
					],
				},
			],
		},
		editLink: {
			pattern: "https://github.com/fanhefeng/fhf/edit/main/docs/src/:path",
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

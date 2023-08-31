export default {

	base: '/vitePressBlog/',// 简单说如下配置就会让你的项目的路径从 `https://domain.com/` 变成 `https://domain.com/base/`
	lang: 'en-US', // 页面 HTML 的 lang 属性 `<html lang="en-US">`
	title: '博客模板',
	description: '博客模板',
	head: [
		// 改变title的图标
		[
			'link',
			{
				rel: 'icon',
				href: '/img/logo.ico',//图片放在public文件夹下
			},
		],
	],
	// 主题配置
	themeConfig: {
		//   头部导航
		nav: [
			{ text: '首页', link: '/' },
			{ text: '关于', link: '/about/' }
		],
		//   侧边导航
		sidebar: [
			{ text: '前言', link: '/base/' },
			{
				text: '准备工作', link: '/base/prepare',
				items: [
					{
						text: '创建仓库',
						link: '/base/createRepository'
					}
				]
			},
			{ text: 'JavaScript', link: '/base/JavaScript/' }
		]
	}
}

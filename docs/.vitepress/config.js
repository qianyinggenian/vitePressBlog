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
			{ text: '准备工作', link: '/base/prepare' },
      { text: '创建仓库', link: '/base/createRepository' },
			{ text: '在本地创建项目', link: '/base/mkdir' },
			{ text: '配置项目', link: '/base/init' },
			{ text: '自动化部署', link: '/base/actions' }
		],
    search: {
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/qianyinggenian' },
      {
        icon: {
          svg: '<svg t="1693468931405" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5813" width="200" height="200"><title>QQ</title><path d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z" p-id="5814"></path></svg>'
        },
        link: 'https://im.qq.com/index/'
      },
      {
        icon: {
          svg: '<svg t="1693468643062" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3858" width="200" height="200"><title>CSDN</title><path d="M512 0c282.784 0 512 229.216 512 512s-229.216 512-512 512S0 794.784 0 512 229.216 0 512 0z m189.952 752l11.2-108.224c-31.904 9.536-100.928 16.128-147.712 16.128-134.464 0-205.728-47.296-195.328-146.304 11.584-110.688 113.152-145.696 232.64-145.696 54.784 0 122.432 8.8 151.296 18.336L768 272.704C724.544 262.24 678.272 256 599.584 256c-203.2 0-388.704 94.88-406.4 263.488C178.336 660.96 303.584 768 535.616 768c80.672 0 138.464-6.432 166.336-16z" fill="#515151" p-id="3859"></path></svg>'
        },
        link: 'https://blog.csdn.net/weixin_44980864?spm=1000.2115.3001.5343'
      },
      {
        icon: {
          svg: '<svg t="1693469155256" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6899" width="200" height="200"><title>gitee</title><path d="M512 512m-426.666667 0a426.666667 426.666667 0 1 0 853.333334 0 426.666667 426.666667 0 1 0-853.333334 0Z" fill="#C71D23" p-id="6900"></path><path d="M727.978667 464.64h-242.346667a21.077333 21.077333 0 0 0-21.034667 21.034667v52.650666a21.077333 21.077333 0 0 0 21.034667 21.077334h147.541333c11.605333 0 21.034667 9.429333 21.034667 21.077333v10.538667c0 34.901333-28.288 63.189333-63.189333 63.189333H390.826667a21.077333 21.077333 0 0 1-21.077334-21.034667V432.981333a63.189333 63.189333 0 0 1 63.232-63.189333h294.912a21.12 21.12 0 0 0 21.077334-21.077333l0.042666-52.650667a21.034667 21.034667 0 0 0-21.034666-21.12H432.981333a158.037333 158.037333 0 0 0-158.037333 158.037333v294.997334c0 11.605333 9.472 21.077333 21.077333 21.077333h310.784a142.208 142.208 0 0 0 142.250667-142.250667v-121.173333a21.077333 21.077333 0 0 0-21.077333-21.034667z" fill="#FFFFFF" p-id="6901"></path></svg>'
        },
        link: 'https://gitee.com/wkz_gitee'
      }
    ],
    lastUpdated: {
      text: '最后更新时间：',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
	},
  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-cn',
      link: ''
    },
    fr: {
      label: 'French',
      lang: 'fr', // optional, will be added  as `lang` attribute on `html` tag
      link: '' // default /fr/ -- shows on navbar translations menu, can be external
    }
  }
}

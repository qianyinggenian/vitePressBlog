## 在终端执行1-2步的命令
### 1、初始化项目，初始化成功后会出现package.json文件
```sh
yarn init -y
```
### 2、安装vitepress
```sh
yarn add -D vitepress
```
### 3、安装vitepress成功后，在package.json文件中添加下面的启动和编译命令

```json
  "scripts": {
    "docs:dev": "vitepress dev docs --open",
    "docs:build": "vitepress build docs",
    "docs:preview": "vitepress preview docs"
  }
```
### 4、创建和package.json同级的目录docs,在docs目录下创建index.md文件
### 5、在终端输入下面的命令，启动项目，项目启动成功后会启动在浏览器中打开项目，或者点击终端中的链接打开项目
```sh
yarn docs:dev
```
### 6、在项目启动成功后，在docs目中会出现 .vitepress 目录，若没有出现，请手动创建 .vitepress 目录。
### 7、在 .vitepress 目录中创建 config.js 文件，代码可参考如下代码, 具体配置请参考官方文档[site-config](https://vitepress.dev/reference/site-config),更改config后，需要重新启动项目
```js
export default {

	base: '/vitePressBlog/', // 若设置base,其变量值需和仓库名称一致，例如，GitHub 上的仓库名称为 vitePressBlog,则值为vitePressBlog
	lang: 'en-US', 
	title: '博客模板',
	description: '描述',
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
			{ text: '配置项目', link: '/base/init' }
		]
	}
}
```

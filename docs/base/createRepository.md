### 1、创建GitHub账号
### 2、登录后在右上角点击头像或添加创库按钮，在下拉菜单中选择 <u>New repository</u>，如下图。
![图1-1](/img/1.png)
### 3、在跳转的页面填写相应信息后创建仓库，如下图。
![img.png](/img/2.png)
### 4、创建仓库成功后，在仓库首页选择setting进行相应的设置，如下图。
![img.png](/img/3.png)
### 5、在跳转的页面选择Page，在展开的页面Build and deployment Source选择GitHub Actions，如下图。
![img.png](/img/4.png)
### 6、以上步骤完成后进行自动化配置，选择Actions，在展开的页面选择set up a workflow yourself ，如下图。
![img.png](/img/5.png)
### 7、在跳转的页面创建.yml文件，如创建deploy.yml,代码如下。
```yaml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
  #  branches: [master]
    branches:
      - main

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write

# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  # Build job
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      # - uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
      - name: Setup Node
        uses: actions/setup-node@v3
        with:
          node-version: 18
#          cache: npm # or pnpm / yarn
          cache: yarn
      - name: Setup Pages
        uses: actions/configure-pages@v3
      - name: Install dependencies
#        run: npm ci # or pnpm install / yarn install
        run:  yarn install
      - name: Build with VitePress
        run: |
          npm run docs:build # or pnpm docs:build / yarn docs:build
          touch docs/.vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v2
        with:
          path: docs/.vitepress/dist

  # Deployment job
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    needs: build
    runs-on: ubuntu-latest
    name: Deploy
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v2

```

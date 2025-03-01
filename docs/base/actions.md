### 1、以上的步骤都完成后，将代码提交至GitHub。

### 2、以上步骤完成后进行自动化部署配置，在要部署的分支中选择 Actions，在展开的页面选择 set up a workflow yourself ，如下图。
![5.png](/img/5.png)
### 3、在跳转的页面创建 .yml文件，如创建 deploy.yml, 需要注意的地方，branches的变量需填写实际要部署的分支名称
### 例如本模板部署的分支是 main 分支，代码如下。或者参考官方文档进行配置[deploy](https://vitepress.dev/guide/deploy#github-pages)
```yaml
# Sample workflow for building and deploying a VitePress site to GitHub Pages
#
name: Deploy VitePress site to Pages

on:
  # Runs on pushes targeting the `main` branch. Change this to `master` if you're
  # using the `master` branch as the default branch.
  push:
    branches: [main] # 需填写实际要部署的分支名称，本模板部署的是main

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
        uses: actions/checkout@v4
        with:
          fetch-depth: 0 # Not needed if lastUpdated is not enabled
      # - uses: pnpm/action-setup@v2 # Uncomment this if you're using pnpm
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 18
#          cache: npm # or pnpm / yarn
#         根据实际需要选择npm、pnpm或yarn，本模板使用yarn
          cache: yarn
      - name: Setup Pages
        uses: actions/configure-pages@v4
      - name: Install dependencies
#        run: npm ci # or pnpm install / yarn install
#        根据实际需要选择npm、pnpm或yarn，本模板使用yarn
        run:  yarn install
      - name: Build with VitePress
        run: |
          npm run docs:build # or pnpm docs:build / yarn docs:build
          touch docs/.vitepress/dist/.nojekyll
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
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
        uses: actions/deploy-pages@v4

```
### 4、新增 deploy.yml 后， 点击 Commit changes 按钮， 如下图
![8.png](/img/8.png)
### 5 执行以上步骤后，等几分钟部署成功后，如图中的红框位置中即可看到链接地址，执行相应操作即可在线预览。
![9.png](/img/9.png)

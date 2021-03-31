# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

- 安装 bootstrap 和@fortawesome/fontawesome-free npm 方式
- 在 main.js 中加载全局样式
- 加载谷歌字体 assets/css/index.css 中 @import 方式引入
- 引入样式
- 将 index.html 中的内容复制到 pages/index.vue 中
- 启动项目，访问正常，需要复制图片到 static/img/目录下，修改图片路径为/
- 将<nav>和<footer>标签放入 layouts/Default.vue 中，添加默认插槽<slot />

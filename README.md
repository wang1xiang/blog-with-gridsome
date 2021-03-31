# Default starter for Gridsome

This is the project you get when you run `gridsome create new-project`.

### 1. Install Gridsome CLI tool if you don't have

`npm install --global @gridsome/cli`

### 2. Create a Gridsome project

1. `gridsome create my-gridsome-site` to install default starter
2. `cd my-gridsome-site` to open the folder
3. `gridsome develop` to start a local dev server at `http://localhost:8080`
4. Happy coding 🎉🙌

#### 项目搭建过程

- 项目初始化

  - Fork[此项目](https://github.com/StartBootstrap/startbootstrap-clean-blog)到自己的仓库
  - 将 Fork 到的项目添加到当前工作区，便于复制
  - 安装 bootstrap 和@fortawesome/fontawesome-free npm 方式
  - 在 main.js 中加载全局样式
  - 加载谷歌字体 assets/css/index.css 中 @import 方式引入
  - 引入样式
  - 将 index.html 中的内容复制到 pages/index.vue 中
  - 启动项目，访问正常，需要复制图片到 static/img/目录下，修改图片路径为/
  - 将<nav>和<footer>标签放入 layouts/Default.vue 中，添加默认插槽<slot />
  - 添加页面 Post.vue、About.vue、Contact.vue，初始化页面完成

- 使用本地 md 文件管理文章内容

  - 在 GridSome 官网找到[source-filesystem](https://gridsome.org/plugins/@gridsome/source-filesystem)插件，转化文件内容为可以在组件中使用 GraphQL 获取的内容。
  - `npm install @gridsome/source-filesystem`安装
  - 在 gridsome.config.js 的 plugins 中进行配置
    ```js
    plugins: [
      {
        use: '@gridsome/source-filesystem', // 插件
        options: {
          typeName: 'BlogPost', // 类型，对应GraphQL中的查询
          path: './content/blog/**/*.md', // 文件路径
        },
      },
    ],
    ```
  - 创建 content/blog/article1.md 和 arttcle2.md 文件
  - 重启项目，报错
    ```
    Error: No transformer for 'text/markdown' is installed.
    ```
  - 原因是需要 Gridsome 的 Markdown 变换器[@gridsome/transformer-remark](https://gridsome.org/plugins/@gridsome/transformer-remark)，安装并重启
  - 打开 GraphQL 操作页面，查询数据得到结果，然后既可以渲染到页面上
    ```sql
    query {
      allBlogPost {
        edges {
          node {
            id
            path
            title
            content
          }
        }
      }
    }
    ```
  -

-

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

- 使用 strapi 接口数据
  
- [快速开始](https://strapi.io/documentation/developer-docs/latest/getting-started/quick-start.html#_1-install-strapi-and-create-a-new-project)安装并启动strapi应用，安装成功打开[**http://localhost:1337/**](http://localhost:1337/admin)，创建Content Type，比如post，添加id、title和content字段
  
  - 分配权限
  
    需要给publish角色以下权限，就可在postman中使用
  
    ![image-20210401081645397](C:\Users\xiang wang\AppData\Roaming\Typora\typora-user-images\image-20210401081645397.png)
  
  - 使用 postman 测试，[符合 REST API 的规范](https://strapi.io/documentation/developer-docs/latest/developer-resources/content-api/content-api.html#api-endpoints)
  
    ![image-20210401091814427](C:\Users\xiang wang\AppData\Roaming\Typora\typora-user-images\image-20210401091814427.png)
  
  - 
  
- 修改 Authenticated 权限，全选，添加用户，设置角色为 Authenticated

- 在 postman 测试登陆
  ```json
  localhost:1337/auth/local
  {
    "identifier": "756638369@qq.com",
    "password": "123456"
  }
  {
    "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjE3MjM2NTM1LCJleHAiOjE2MTk4Mjg1MzV9.8Ha5sZxLwSKERdQH3OOvWU9qNsGw2fabpL4uxuChJvQ",
    "user": {
        "id": 1,
        "username": "wangxiang",
        "email": "756638369@qq.com",
        "provider": "local",
        "confirmed": false,
        "blocked": false,
        "role": {
            "id": 1,
            "name": "Authenticated",
            "description": "Default role given to authenticated user.",
            "type": "authenticated"
        },
        "created_at": "2021-04-01T00:20:37.396Z",
        "updated_at": "2021-04-01T00:20:37.405Z"
    }
  }
  ```
  - 得到 jwt 就可以请求了
  
  - 可以使用 GraphQL 进行安装，安装 npm run strapi install graphql
  
  - 安装完成，打开 http://localhost:1337/graphql即可访问
  
  - 如何把 strapi 数据通过预取的方式集成到 gridsome 中，想要实现渲染前就拿到 strapi 中的数据，借助 gridsome 插件 [strapi](https://gridsome.org/plugins/@gridsome/source-strapi)
  
  - 使用
    ```js
    export default {
      plugins: [
        {
          use: '@gridsome/source-strapi',
          options: {
            apiURL: 'http://localhost:1337',
            queryLimit: 1000, // Defaults to 100
            contentTypes: ['article', 'user'],
            singleTypes: ['impressum'],
            // Possibility to login with a Strapi user,
            // when content types are not publicly available (optional).
            loginData: {
              identifier: '',
              password: '',
            },
          },
        },
      ],
    }
    ```
    
  - 重启项目，启动完成后就可以在 grapjQL 中访问 strapi 中的数据了
  
  - strapi 新增或删除数据后，gridsome 需要重启项目，因为在启动过程中拉取数据
  
    ![image-20210401084547980](C:\Users\xiang wang\AppData\Roaming\Typora\typora-user-images\image-20210401084547980.png)
  
  - 删除 post，重新创建，添加字段 title、content、cover、is_publish、created_name关联user
  
  - 创建 tags
  
  - 重启 gridsome，发现报错，因为没有权限，重置 post 和 tag 的权限
  
  - 修改页面，添加查询
  
    ```html
    <div v-for="item in $page.posts.edges" class="post-preview" :key="item.node.id">
        <a href="post.html">
            <h2 class="post-title">
                {{ item.node.title }}
            </h2>
            <h3 class="post-subtitle">
                {{ item.node.title }}
            </h3>
        </a>
        <p class="post-meta">
            Posted by
            <a href="#">{{ item.node.created_name.firstname + item.node.created_name.lastname }}</a>
            {{ item.node.created_at }}
        </p>
        <span v-for="tag in item.node.tags" :key="tag.id">
            <a href="">{{ tag.title }}</a>
            &nbsp;&nbsp;
        </span>
        <hr />
    </div>
    
    <page-query>
    query {
    	posts: allStrapiPost {
    		edges {
          node {
            id
            title
            created_name {
              id
              firstname
              lastname
            }
            created_at
            updated_at
            tags {
              id
              title
            }
          }
        }
      }
    }
    </page-query>
    ```
  
  - 加载[分页组件](https://gridsome.org/docs/pagination/#paginate-data)
  
    引入并注册Pager组件，页面中添加，查询时添加pageInfo
  
    ```html
    ...
    <!-- Pager -->
    <Pager :info="$page.posts.pageInfo"/>
    ...
    
    query ($page: Int){
    	posts: allStrapiPost (perPage: 2, page: $page) @paginate{
        pageInfo {
          totalPages
          currentPage
        }
    		edges {
          node {
            id
            title
            created_name {
              id
              firstname
              lastname
            }
            created_at
            updated_at
            tags {
              id
              title
            }
          }
        }
      }
    }
    </page-query>
    import { Pager } from 'gridsome'
    export default {
      name: 'Home',
      components: {
        Pager
      },
    }
    ```
  
  - 加载文章详情
  
    修改gridsome.config.js，添加templates
  
    ```js
     // 详情的模板页面 根据对应内容类型创建模板
    // 模板名称StrapiPost一定要写集合的名字 此时集合由'@gridsome/source-strapi'生成
    templates: {
        StrapiPost: [
            {
                path: '/post/:id', // 详情对应路由
                component: './src/templates/Post.vue',
            },
        ]
    },
    ```
  
    创建templates/Post.vue文章详情模板
  
    查询数据，替换模板
  
    ```vue
    <template>
      <Layout>
        <!-- Page Header -->
        <header class="masthead" :style="{backgroundImage: `url(http://localhost:1337${$page.post.cover.url})`}">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="post-heading">
                  <h1>{{ $page.post.title }}</h1>
                  <h2 class="subheading">
                    {{ $page.post.title }}
                  </h2>
                  <span class="meta"
                    >Posted by
                    <a href="#">{{ $page.post.created_name.firstname + $page.post.created_name.lastname  }}</a>
                    on {{$page.post.created_at}}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </header>
    
        <!-- Post Content -->
        <article>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto" v-html="$page.post.content">
              </div>
            </div>
          </div>
        </article>
      </Layout>
    </template>
    
    
    <page-query>
    query ($id: ID!){
    	post: strapiPost  (id: $id) {
    		id
        title
        content
        cover {
          url
        }
        created_name {
          id
          firstname
          lastname
        }
        created_at
        tags {
          id
          title
        }
      }
    }
    </page-query>
    <script>
    
    export default {
      name: 'Post',
      metaInfo: {
        title: 'Post',
      }
    }
    </script>
    <style></style>
    ```
  
  - 处理markdown格式文档
  
    使用[markdown-it](https://github.com/markdown-it/markdown-it)处理markdown格式数据
  
    ```vue
    <template>
    ...
     <div class="col-lg-8 col-md-10 mx-auto" v-html="mdToHtml($page.post.content)"></div>
    ...
    </template>
    <script>
    import MarkdownIt from 'markdown-it'
    const md = new MarkdownIt()
    
    export default {
      name: 'Post',
      metaInfo: {
        title: 'Post',
      },
      methods: {
        mdToHtml (markdown) {
          return md.render(markdown)
        }
      }
    }
    </script>
    ```
  
  - 文章标签
  
    修改gridsome.config.js，contentTypes添加tag
  
    ```js
    	{
          use: '@gridsome/source-strapi',
          options: {
            apiURL: 'http://localhost:1337',
            queryLimit: 1000, // Defaults to 100
            contentTypes: ['post', 'tag'], // StrapiPost
            // typeName: 'Strapi',
            // singleTypes: ['impressum'],
            // Possibility to login with a Strapi user,
            // when content types are not publicly available (optional).
            // loginData: {
            //   identifier: '',
            //   password: '',
            // },
          },
        },
    ```
  
    添加tag模板
  
    ```js
    StrapiTag: [
        {
            path: '/tag/:id', // 详情对应路由
            component: './src/templates/Tag.vue',
        },
    ]
    ```
  
    创建/templates/Tag.vue模板
  
    ```vue
    <template>
      <Layout>
        <!-- Page Header -->
        <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
          <div class="overlay"></div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 col-md-10 mx-auto">
                <div class="site-heading">
                  <h1># {{ $page.tag.title }}</h1>
                </div>
              </div>
            </div>
          </div>
        </header>
    
        <!-- Main Content -->
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-10 mx-auto">
              <div v-for="item in $page.tag.posts" class="post-preview" :key="item.id">
                <g-link :to="`/post/${item.id}`">
                  <h2 class="post-title">
                    {{ item.title }}
                  </h2>
                  <h3 class="post-subtitle">
                    {{ item.title }}
                  </h3>
                </g-link>
                <hr />
              </div>
              <!-- Pager -->
              <Pager :info="$page.posts.pageInfo"/>
            </div>
          </div>
        </div>
      </Layout>
    </template>
    <page-query>
    query ($id: ID!){
        strapiTag  (id: $id) {
        id
        title
        posts {
          id
          title
        }
      }
    }
    </page-query>
    
    <script>
    
    export default {
      name: 'Tag'
    }
    
    </script>
    <style>
    </style>
    ```
  
    
  
  - 基本设置





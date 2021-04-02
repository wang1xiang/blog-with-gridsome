// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-filesystem', // 插件
      options: {
        typeName: 'BlogPost', // 类型，对应GraphQL中的查询
        path: './content/blog/**/*.md', // 文件路径
      },
    },
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: 'http://localhost:1337',
        queryLimit: 1000, // Defaults to 100
        contentTypes: ['post', 'tag'], // StrapiPost配置集合
        // typeName: 'Strapi',
        singleTypes: ['general'], // 配置单节点
        // Possibility to login with a Strapi user,
        // when content types are not publicly available (optional).
        // loginData: {
        //   identifier: '',
        //   password: '',
        // },
      },
    },
  ],
  // 详情的模板页面 根据对应内容类型创建模板
  // 模板名称StrapiPost一定要写集合的名字 此时集合由'@gridsome/source-strapi'生成
  templates: {
    StrapiPost: [
      {
        path: '/post/:id', // 详情对应路由
        component: './src/templates/Post.vue',
      },
    ],
    StrapiTag: [
      {
        path: '/tag/:id', // 详情对应路由
        component: './src/templates/Tag.vue',
      },
    ],
  },
}

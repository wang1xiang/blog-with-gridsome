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
    }
  ],
}

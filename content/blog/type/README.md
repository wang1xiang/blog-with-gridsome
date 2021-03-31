### 修改 logo 和 ico 文件路径

> 1.在根目录的 company 中创建对应项目的文件夹<br> 2.在文件夹中添加 logo.png 和 favicon.ico<br> 3.修改 favicon.con，修改此处的'king'所创建的文件夹名称
>
> ```js
> <link rel="icon" href="<%= BASE_URL %>company/king/favicon.ico">
> ```
>
> 4.在 config.js 中，修改此处的'king'为所创建的文件夹名称
>
> ```js
> window.company = 'king'
> ```
### 开源特殊配置
> 开源客户要求：字体亮度提高
> 修改webpack.param.js文件IS_KAIYUAN = true，并重新打包
### 项目已使用插件

> 1.图表库[echarts](https://echarts.apache.org/zh/index.html)、[viser-vue](https://viserjs.gitee.io/demoHome.html)、[g6](https://antv-g6.gitee.io/zh)
>p
> 2.css动画库[animate.css](https://www.jq22.com/yanshi819/)
>
> 3.在线代码编辑器[codemirror](https://codemirror.net/)、[monaco-editor](https://www.npmjs.com/package/monaco-editor)
>
> 4.core表达式解析工具[cron-parser](https://www.npmjs.com/package/cron-parser)
>
> 5.core表达式解析工具[cron-parser](https://www.npmjs.com/package/cron-parser)
>
> 6.CSS 预处理[less](http://lesscss.cn/)
>
> 7.模拟接口[mock](http://mockjs.com/)
>
> 8.首页粒子效果[particles](https://www.npmjs.com/package/particlesjs)
>
> 9.二维码生成工具[qrcodejs2](https://www.npmjs.com/package/qrcodejs2)
>
> 10.动态id生成[uuid](https://www.npmjs.com/package/qrcodejs2)
>
> 11.vue剪切板[vue-clipboard2](https://github.com/Inndy/vue-clipboard2)
>
> 12.拖拽布局[vue-grid-layout](https://www.npmjs.com/package/vue-grid-layout)、[vuedraggable](https://www.npmjs.com/package/vuedraggable)
>
> 13.富文本编辑器[wangeditor](http://www.wangeditor.com/)
>
> 14.页面打印[vue-print-nb](https://www.npmjs.com/package/vue-print-nb)

### Project setup

```
yarn install
```

### Compiles and hot-reloads for development

```
yarn run serve
```

### Compiles and minifies for production

```
yarn run build
```

### Run your tests

```
yarn run test
```

### Lints and fixes files

```
yarn run lint
```

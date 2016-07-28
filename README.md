# 漂流书单
此项目是做的一个实训项目，前端部分由我独立实现  项目中前端部分用到的技术栈有vue+vue-router+webpack，后端采用java 编写，前后端分离，所有数据通过接口传输
此项目类似于豆瓣读书，用户可以在此平台上查看书籍详细信息以及查看标签下的书籍信息以及通过书籍名字搜索书籍，
以及对书籍进行“想读”，“已读”，“拥有”，评论等操作，以及设置个人信息，登录注册等功能

## Setup

``` bash
npm install
npm run dev
```

``` bash
npm run build
```

## 目录结构
<pre>
│  .gitignore          # 忽略无需git控制的文件  比如 node_modules
│  package.json        # 项目配置
│  readme.md           # 项目说明
│  index.html          # 首页
│
├─node_modules
│
├─build
│     │  webpack.base.config.js         # webpack 基础配置
│     │  webpack.dev.config.js          # webpack 开发配置
│     └─ webpack.prod.config.js         # webpack 生产配置
│
└─src
    │  app.vue         # 主vue
    │  main.js         # 启动配置
    │  router.js       # 路由
    │  filter.js       # 过滤器
    │  directive.js    # 指令
    │
    ├─components       # 组件
    │      index.vue
    │
    └─assets             
          │            
	      │
	      ├─ css 		# 公用css
    	  │
    	  │
    	  ├─ font 		# 字体
    	  │
    	  │
    	  └─ img 		# 图片资源
</pre>


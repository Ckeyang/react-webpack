# 前端页面开发结构
#####文档结构
    1.简介
## 简介
        基于react 开发的项目 , 通过webpack来构建和搭建服务器
        首字母大写 大写 大写
   
## 使用
        下载项目
        首先 npm install
        然后 npm run dev  
        linux 下守护进程启动方式
                npm install pm2 -g
                pm2 start server.js
        
##配置文件介绍
        根目录下config.js文件
              baseRoot: __dirname, //根目录
              port:8888, //端口
              host:"0.0.0.0", //地址
              contentBase:"./"  //根目录
        router文件夹下的router.js
              配置静态路由
        .babelrc文件
              主要用来控制js的版本
        .gitigore文件
              用来过滤部分目录或者文件
        .index.html
              模板html文件
        package.json 
              存放一些包文件
        webpack.config.js
              配置项目的所有东西
        
              
##目录介绍
        app 目录存放页面或者模块
        assets 存放less文件或者sass文件或者css文件
        build 目录不用管
        router 目录用来存放静态路由 采用hashrouter
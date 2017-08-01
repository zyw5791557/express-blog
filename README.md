[TOC]

## N-blog

使用 Express + MongoDB 搭建多人博客

## 开发环境

- Node.js: 	`6.10.0`
- MongoDB:     `3.2.0`
- Express:         `4.14.0`



## 主要依赖下载地址

[NodeJS](https://nodejs.org/en/)
[MongoDB](https://pan.baidu.com/s/1nvJWpfz)
>请自行删除除了Server文件夹以外的文件，自行指向data\db目录和log
>mongoDB GUI工具推荐Robomongo
>Express    `npm i express@4.14.0 -S`



## 项目启动

`命令工具windows下推荐cmder`

`推荐使用smart-npm进行依赖的安装`

https://www.npmjs.com/package/smart-npm

```bash
// 下载依赖
npm i 
// 运行项目
npm run dev
```


> 错误解决方案推荐

- mongo.config 里面不要有注释
- 删除 log 和 data 里面所有的配置文件，自行配置
- 如果出现 `dbexit:  rc: 100` 错误, 修复存储引擎 `mongod.exe -dbpath c:\Mongo\data\db -storageEngine=mmapv1`

[MongoDB启动报错](http://www.cnblogs.com/ksl666/p/6051733.html)
[启动失败解决方案](http://blog.csdn.net/lld2002/article/details/47083169)


*必须保证运行项目前 mongoDB服务正常启动，否则`npm run dev`可能node会重复调起`http://localhost:3000`,可自行前往项目根目录 index.js文件注释`c.exec("start http://localhost:3000")`*



正确启动 mongo 

![mongo](C:\Users\Administrator\Desktop\mongo.png)



## 项目大致 - 简易的博客

> 具有注册、登录、发表文章、留言、删除、编辑、浏览量、留言数及其展示。
>
> 留言及文章发表支持简易的 markdown 格式





![register](C:\Users\Administrator\Desktop\register.png)

![login](C:\Users\Administrator\Desktop\login.png)

![comments](C:\Users\Administrator\Desktop\comments.png)

![result](C:\Users\Administrator\Desktop\result.png)

![main](C:\Users\Administrator\Desktop\main.png)

![button](C:\Users\Administrator\Desktop\button.png)
# IYCMS 博客管理系统 前端源代码 [后端?](https://github.com/aa24615/iycms)


> 基于 Vue.js + element-ui 开发 由 vue-cli webpack 编译

## 核心文件
```
/src
/static
/index.html

```


## 开发前请安装node.js 并运行以下命令安装vue以及依赖




``` bash
$ npm i vue -g
$ npm i vue-cli -g
$ vue init webpack
    输入y 回车
    输入项目名称 如 app 回车
    再次回车
    输入作者 如 iycms 回车
    回车 输入y 回车
    输入n 回车
    输入n 回车
    输入n 回车
    选择第三项 No, I will handle that myself
$ npm i element-ui
# 安装依赖包资源较大,建议使用淘宝NPM国内镜像 详情请进 http://npm.taobao.org/
$ npm i
```
## 如何调试

``` bash
$ npm run dev
# 浏览器打开 http://127.0.0.1:8080 即可看到实时界面
```
## 如何编译

``` bash
$ npm run build
# 编译后,文件会存放到 /dist/下
```





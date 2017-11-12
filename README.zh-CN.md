# EggBorn.js Showcase: Watch Articles

这是EggBorn.js的案例，同时也是一个强大的工具，可以自动抓取文章的统计数字，诸如visits、 stars、 replies，等等。 

> Vue.js + Framework7 + Koa.js + Egg.js + MySQL + GitHub Passport

[![NPM version][npm-image]][npm-url]
[![NPM quality][quality-image]][quality-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NPM download][download-image]][download-url]
[![Gitter][gitter-image]][gitter-url]

[npm-image]: https://img.shields.io/npm/v/egg-born-showcase-watch-articles.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-born-showcase-watch-articles
[quality-image]: http://npm.packagequality.com/shield/egg-born-showcase-watch-articles.svg?style=flat-square
[quality-url]: http://packagequality.com/#?package=egg-born-showcase-watch-articles
[travis-image]: https://img.shields.io/travis/zhennann/egg-born-showcase-watch-articles.svg?style=flat-square
[travis-url]: https://travis-ci.org/zhennann/egg-born-showcase-watch-articles
[codecov-image]: https://img.shields.io/codecov/c/github/zhennann/egg-born-showcase-watch-articles.svg?style=flat-square
[codecov-url]: https://codecov.io/gh/zhennann/egg-born-showcase-watch-articles
[david-image]: https://img.shields.io/david/zhennann/egg-born-showcase-watch-articles.svg?style=flat-square
[david-url]: https://david-dm.org/zhennann/egg-born-showcase-watch-articles
[snyk-image]: https://snyk.io/test/npm/egg-born-showcase-watch-articles/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-born-showcase-watch-articles
[download-image]: https://img.shields.io/npm/dm/egg-born-showcase-watch-articles.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-born-showcase-watch-articles
[gitter-image]: https://badges.gitter.im/zhennann/egg-born.svg?style=flat-square
[gitter-url]: https://gitter.im/zhennann/egg-born?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge

## 体验案例

### 官网

- 网址：[http://wa.egg-born.org](http://wa.egg-born.org)
- 二维码：
<p>
    <img width="200" src="https://github.com/zhennann/egg-born-showcase-watch-articles/blob/master/docs/images/qrcode.png"></img>
</p>

### 截图
<p>
    <img width="200" src="https://github.com/zhennann/egg-born-showcase-watch-articles/blob/master/docs/images/1.jpg"></img>
</p>
<p>
    <img width="200" src="https://github.com/zhennann/egg-born-showcase-watch-articles/blob/master/docs/images/2.jpg"></img>
</p>

### 如何使用

将文章添加进系统，系统会使用相应的模式代码自动抓取文章的统计数字。如果没有相应的模式代码，您也可以创建一个。

### 模式库

欢迎fork仓库[watch-articles](https://github.com/zhennann/watch-articles)，创建您自己的模块代码，提交[PR](https://github.com/zhennann/watch-articles/pulls)，然后发布到这里！

| 模式代码  | 作者           |
| :------- | :---------------- |
| github-repo  | <img width="20" height="20" src="https://avatars2.githubusercontent.com/u/24246985?s=40&v=4"></img> [zhennann](https://github.com/zhennann) |
| cnode-topic | <img width="20" height="20" src="https://avatars2.githubusercontent.com/u/24246985?s=40&v=4"></img> [zhennann](https://github.com/zhennann) |
| juejin-im-post | <img width="20" height="20" src="https://avatars2.githubusercontent.com/u/24246985?s=40&v=4"></img> [zhennann](https://github.com/zhennann) |

## 快速开始

### 安装

```bash
$ npm install
```

### 配置MySQL 

修改文件: `src/backend/config/config.default.js`

``` javascript
  // mysql
  config.mysql = {
    clients: {
      // donot change the name  
      __ebdb: {
        host: '127.0.0.1',
        port: '3306',
        user: 'travis',
        password: '',
        database: 'watch-articles',
      },
    },
  };
```

### 运行

启动后端服务
```bash
$ npm run dev:backend
```

启动前端服务
```bash
$ npm run dev:front
```

### 测试

```bash
$ npm run test:backend
$ npm run cov:backend
```

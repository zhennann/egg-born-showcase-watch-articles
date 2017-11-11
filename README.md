# EggBorn.js ShowCase: Watch Articles

This is a showcase for EggBorn.js, and also is a powerful tool to watch articles's statistics, such as visits, stars, replies, etc. 

> Vue.js + Framework7 + Koa.js + Egg.js + MySQL + GitHub Passport

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![NPM download][download-image]][download-url]
[![Gitter][gitter-image]][gitter-url]

[npm-image]: https://img.shields.io/npm/v/egg-born-showcase-watch-articles.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-born-showcase-watch-articles
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

## Website

- Website: [http://wa.egg-born.org](http://wa.egg-born.org)
- QRCode: 
<p>
    <img width="200" src="https://github.com/zhennann/egg-born-showcase-watch-articles/blob/master/docs/images/qrcode.png"></img>
</p>

## Screenshots
<p>
    <img width="200" src="https://github.com/zhennann/egg-born-showcase-watch-articles/blob/master/docs/images/1.jpg"></img>
</p>
<p>
    <img width="200" src="https://github.com/zhennann/egg-born-showcase-watch-articles/blob/master/docs/images/2.jpg"></img>
</p>

### Installation

```bash
$ npm install
```

### Setup MySQL 

Edit file: `src/backend/config/config.default.js`

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

### Run

Start backend service
```bash
$ npm run dev:backend
```

Start front service
```bash
$ npm run dev:front
```

### Test

```bash
$ npm run test:backend
$ npm run cov:backend
```

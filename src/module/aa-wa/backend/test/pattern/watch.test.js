const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);
const patterns = require('../../src/watch/patterns');

describe('test/pattern/watch.test.js', () => {

  Object.keys(patterns).forEach(key => {
    const pattern = patterns[key];

    it(`watch pattern: ${key}`, async () => {
      const ctx = app.mockContext({ mockUrl: mockUrl() });
      const article = {
        url: pattern(null).meta.test,
        pattern: key,
      };
      const res = await ctx.service.watch.watchRun(article);
      res.error && console.log('error: ', res.error.message);
      res.ctx && console.log(key, res.ctx);
      assert(!res.error);
    });

  });

});

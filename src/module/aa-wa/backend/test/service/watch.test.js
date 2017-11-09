const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe('test/service/watch.test.js', () => {

  it('run', async () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = await ctx.service.watch.run();
    assert(!res);
  });

  it('matchPattern', () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = ctx.service.watch.matchPattern('https://github.com/zhennann/egg-born');
    assert(res);
  });

  it('watchRun: github-repo', async () => {
    const article = {
      url: 'https://github.com/zhennann/egg-born',
      pattern: 'github-repo',
    };

    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const data = await ctx.service.watch.watchRun(article);
    data.error && console.log('error: ', data.error.message);
    data.ctx && console.log('github-repo', data.ctx);
    assert(!data.error);
  });

});

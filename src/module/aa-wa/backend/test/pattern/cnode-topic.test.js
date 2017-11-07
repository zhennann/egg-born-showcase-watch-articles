const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe('test/pattern/cnode-topic.test.js', () => {

  it('watch', async () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const article = {
      url: 'https://cnodejs.org/topic/59eebce1f8d374775c0157d7',
      pattern: 'cnode-topic',
    };
    const res = await ctx.service.watch.watchRun(article);
    assert(!res.error);
  });
});

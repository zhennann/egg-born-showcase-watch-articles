const { app, mockUrl, assert } = require('egg-born-mock')(__dirname);

describe('test/service/watch.test.js', () => {

  it('run', async () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = await ctx.service.watch.run();
    assert(!res);
  });

  it('matchProvider', () => {
    const ctx = app.mockContext({ mockUrl: mockUrl() });
    const res = ctx.service.watch.matchProvider('https://cnodejs.org/topic/59eebce1f8d374775c0157d7');
    assert(res);
  });
});

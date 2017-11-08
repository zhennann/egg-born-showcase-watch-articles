module.exports = {
  schedule: {
    interval: '10s',
    type: 'worker',
  },
  async task(ctx) {
    try {
      await ctx.performAction({
        method: 'post',
        url: '/aa/wa/watch/run',
      });
    } catch (err) {
      console.log(err);
    }
  },
};

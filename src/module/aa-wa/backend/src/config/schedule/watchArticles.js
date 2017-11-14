module.exports = async function(ctx) {
  try {
    await ctx.performAction({
      method: 'post',
      url: '/aa/wa/watch/run',
    });
  } catch (err) {
    console.log(err);
  }
};

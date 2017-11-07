module.exports = ctx => {

  return {
    meta: {
      name: 'cnode-topic',
      version: '1.0.0',
      description: 'watch cnode topic',
      author: 'zhennann',
      test: 'https://cnodejs.org/topic/59eebce1f8d374775c0157d7',
    },
    sessions: [
      {
        request: {
          method: 'get',
          url: () => `https://cnodejs.org/api/v1/topic/${ctx.data.articleId}`,
          dataType: 'json',
        },
        response: {
          matches: [ 'stat' ],
        },
      },
    ],
    matches: {
      url: {
        regex: /\/\/cnodejs\.org\/topic\/([^\/\?#]+)/gi,
        matchPass: [
          {
            index: 1,
            data: 'articleId',
          },
        ],
      },
      stat: {
        onMatch: value => {
          const data = value.data;
          ctx.data.title = data.title;
          ctx.data.author = data.author.loginname;
          ctx.data.avatar = data.author.avatar_url;
          ctx.stat.reply = data.reply_count;
          ctx.stat.visit = data.visit_count;
        },
      },
    },

  };

};

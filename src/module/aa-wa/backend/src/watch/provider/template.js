
/**
 *  ctx.url
 *  ctx.data
 *  ctx.stat
 */

module.exports = ctx => {

  return {
    meta: {
      name: '',
      version: '1.0.0',
      description: '',
      author: '',
    },
    sessions: [
      {
        request: {
          method: 'get',
          url: ctx.url,
          dataType: 'text', // text or json
          data: '',
          headers: {
            Referer: '',
          },
        },
        response: {
          matches: [ 'stat' ],
          onData: () => {},
        },
      },
    ],
    matches: {
      url: {
        onMatch: () => {},
        regex: / /gi,
        matchPass: [
          {
            index: 1,
            data: 'articleId',
          },
        ],
        matchFail: [
          {
            index: 0,
            data: 'articleId',
          },
        ],
      },
      stat: {
        onMatch: () => {},
        regex: / /gi,
        matchPass: [
          {
            index: 1,
            data: 'title',
          },
        ],
        matchFail: [
          {
            index: 0,
            data: 'title',
          },
        ],
      },
    },
  };

};

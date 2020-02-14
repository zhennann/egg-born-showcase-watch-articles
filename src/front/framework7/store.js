// eslint-disable-next-line
export default function(Vue) {

  return {
    state: {
      hash: '',
    },
    mutations: {
      setHash(state, { hash }) {
        state.hash = hash;
      },
    },
  };

}


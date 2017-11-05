let Vue;

// import css
// eslint-disable-next-line
import CSS from './css/module.css';

// install
function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  // subcribe event: login
  Vue.prototype.$meta.eventHub.$on(
    Vue.prototype.$meta.constants.events.login, ({ view, options }) => {
      Vue.prototype.$meta.loginParams = { view, options };
      Vue.prototype.$f7.loginScreen();
    });
  Vue.prototype.$meta.eventHub.$on(
    Vue.prototype.$meta.constants.events.logout, () => {
      Vue.prototype.$meta.store.commit('auth/logout');
      Vue.prototype.$f7.loginScreen();
    });

  return cb({
    routes: require('./routes.js').default,
  });
}

// export
export default {
  install,
};

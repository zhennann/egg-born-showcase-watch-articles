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
    Vue.prototype.$meta.constant.event.login, params => {
      Vue.prototype.$meta.loginParams = params;
      Vue.prototype.$f7.loginScreen();
    });
  Vue.prototype.$meta.eventHub.$on(
    Vue.prototype.$meta.constant.event.logout, () => {
      Vue.prototype.$meta.store.commit('auth/logout');
      Vue.prototype.$f7.loginScreen();
    });

  // get auth first
  Vue.prototype.$meta.api.get('/api/aa/login/user/getAuth', { silent: true }).then(data => {
    data && Vue.prototype.$meta.store.commit('auth/login', { user: data });
  });

  return cb({
    routes: require('./routes.js').default,
    config: require('./config/config.js').default,
    locales: require('./config/locales.js').default,
  });
}

// export
export default {
  install,
};

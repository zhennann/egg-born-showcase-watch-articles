import axios from 'axios';

// eslint-disable-next-line
import Framework7 from 'framework7/dist/js/framework7.js';
import Framework7Vue from 'framework7-vue/dist/framework7-vue.js';


// eslint-disable-next-line
import Framework7Theme from 'framework7/dist/css/framework7.material.min.css'
// eslint-disable-next-line
import Framework7ThemeColors from 'framework7/dist/css/framework7.material.colors.min.css'
// eslint-disable-next-line
import MaterialIconsCSS from '../css/iconfont/material-icons.css'

// eslint-disable-next-line
import AppStyles from '../css/app.css';

import App from './app';
import config from '../config/config.js';
import locales from '../config/locales.js';

import loadmore from './components/loadmore.vue';

import store from './store.js';

let Vue;

// install
function install(_Vue, cb) {
  if (Vue) return console.error('already installed.');

  Vue = _Vue;

  Vue.use(Framework7Vue);

  Vue.prototype.$theme.material = true;

  // register components
  Vue.component('eb-load-more', loadmore);

  // return options
  return cb({
    meta: {
      provider: 'framework7',
    },
    store: store(Vue),
    axios,
    config,
    locales,
    options: {
      // Init Framework7 by passing parameters here
      framework7: {
        /* Uncomment to enable Material theme: */
        // material: true,
        routes: [],
        pushState: true,
        pushStateSeparator: '#',
        animateNavBackIcon: true,
        fastClicks: false,
        materialRipple: false,
        animatePages: false,
        activeState: true,
        cache: true,
        cacheDuration: -1,
        notificationHold: 3000,
      },
      // Register App Component
      components: {
        app: App,
      },
    },
  });
}

// export
export default {
  install,
};

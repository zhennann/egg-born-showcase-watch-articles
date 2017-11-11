<template>
  <!-- App -->
  <div id="app" :class="{'app-container':appContainerClass}">
    <!-- Statusbar -->
    <f7-statusbar></f7-statusbar>
    <!-- Main Views -->
    <f7-views tabs toolbar-through theme="bluegray">
      <f7-view id="mainView" ref="mainView" tab data-url="/aa/wa/articles" active main :init="inits.mainView" :params="params">
        <f7-pages></f7-pages>
      </f7-view>
      <f7-view id="view_2" ref="view_2" tab data-url="/aa/wa/mine" :init="inits.view_2">
        <f7-pages></f7-pages>
      </f7-view>
      <f7-view id="view_3" ref="view_3" tab data-url="/aa/login/profile" :init="inits.view_3">
        <f7-pages></f7-pages>
      </f7-view>
      <!-- Bottom Tabbar-->
      <f7-toolbar tabbar labels bottom class="viewsTabbar" @webkitTransitionEnd.native="onWebkitTransitionEnd">
        <f7-link href="#mainView" tab-link :text="$text('Articles')" iconMaterial="schedule" active></f7-link>
        <f7-link href="#view_2" tab-link :text="$text('Mine')" iconMaterial="event_note" @click="onViewClick('view_2')"></f7-link>
        <f7-link href="#view_3" tab-link :text="$text('Profile')" iconMaterial="account_box" @click="onViewClick('view_3')"></f7-link>
      </f7-toolbar>
    </f7-views>
    <!-- Login Screen -->
    <f7-login-screen id="demo-login-screen">
      <f7-view ref="view_login" data-url="/aa/login/login" :init="inits.view_login" navbar-through>
        <f7-pages></f7-pages>
      </f7-view>
    </f7-login-screen>
  </div>
</template>
<script>
/* eslint-disable */
const __hash = location.hash;
if (__hash !== '' && __hash !== '#') { // not check '#/'
  history.replaceState(null, '', location.pathname + location.search);
}
/* eslint-enable */
export default {
  data() {
    return {
      inits: {
        mainView: false,
        view_2: false,
        view_3: false,
        view_login: false,
      },
      params: {
        domCache: true,
        url: null,
        preroute: (view, options) => { return this.onPreroute(view, options); },
      },
      tabhref: '',
      appContainerClass: false,
    };
  },
  methods: {
    onWebkitTransitionEnd(event) {
      const toolbar = this.$$(event.target);
      if (toolbar.hasClass('toolbar-hidden')) {
        toolbar.hide();
      }
    },
    onPreroute(view, options) {
      if (!options.isBack) {
        //
        !options.__init && this.$f7.hideToolbar('.viewsTabbar');

        //
        const href = this.$$('.viewsTabbar a.active').attr('href');
        if (href !== '#mainView') {
          this.tabhref = href;
          this.$f7.showTab('#mainView');
        }
      } else {
        if (view.history.length === 2) {
          //
          this.$$('.viewsTabbar').show();
          //
          this.$nextTick(() => {
            this.$f7.showToolbar('.viewsTabbar');
          });
          //
          if (this.tabhref) {
            this.$f7.showTab(this.tabhref);
            this.tabhref = '';
          }
        }
      }
      return true;
    },
    onViewClick(view) {
      // check
      if (this.inits[view]) return;

      //
      this.inits[view] = true;
      this.$nextTick(() => {
        this.$refs[view].onF7Init(this.$f7);
        const res = this.$refs[view].f7View.router.load({
          url: this.$refs[view].$el.getAttribute('data-url'),
          reload: true,
          __init: true,
        });
        res && this.$f7.closeModal();
      });
    },
    onF7Init() {
      this.appContainerClass = this.$f7.device.os !== 'android' && this.$f7.device.os !== 'ios';
    },
  },
  mounted() {

    // load main
    this.onViewClick('mainView');
    // load login
    this.onViewClick('view_login');

    // store hash
    this.$store.commit('setHash', { hash: __hash });
  },
};

</script>
<style scoped>
.app-container {
  position: absolute;
  left: 0;
  right: 0;
  width: 500px;
  height: 100%;
  border: 1px solid dimgray;
  margin: auto;
}

</style>

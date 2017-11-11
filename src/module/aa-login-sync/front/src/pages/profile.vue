<template>
  <f7-page navbar-fixed class="eb-toolbar-bottom">
    <f7-navbar>
      <f7-nav-left>
        <img class="eb-logo" src="../../static/img/logo.png">
      </f7-nav-left>
      <f7-nav-center sliding>{{$text('Profile')}}</f7-nav-center>
    </f7-navbar>
    <f7-block>
      <div class="me">
        <div>
          <img class="avatar avatar48" :src="user && user.avatar">
        </div>
        <div class="name">{{user && user.displayName}}</div>
        <div class="status" v-if="!loggedIn">{{$text('Not LoggedIn')}}</div>
        <div class="login">
          <f7-button v-if="!loggedIn" @click="login" fill big color="orange">{{$text('Sign In')}}</f7-button>
          <f7-button v-if="loggedIn" @click="logout" fill big color="orange">{{$text('Log Out')}}</f7-button>
        </div>
      </div>
      <f7-link class="external github-star" target="_system" href="https://github.com/zhennann/egg-born-showcase-watch-articles">
        <img :src="require('../../static/img/github.png')">
        <span>GitHub</span>
      </f7-link>
    </f7-block>
  </f7-page>
</template>
<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: mapState({
    user: state => state.auth.user,
    loggedIn: state => state.auth.loggedIn,
  }),
  methods: {
    login() {
      this.$f7.loginScreen();
    },
    logout() {
      this.$api.post('user/logout').then(() => {
        this.$store.commit('auth/logout');
      });
    },
  },
};

</script>
<style scoped>
.me {
  border-radius: 6px;
  border-radius: 6px;
  background-color: #b58900;
  text-align: center;
  opacity: 0.8;
  width: 90%;
  position: relative;
  left: 0;
  right: 0;
  margin: auto;
}

.me img {
  margin-top: 20px;
}

.me .name {
  font-size: 20px;
  color: dimgray;
}

.me .status {
  font-size: 16px;
  color: dimgray;
}

.login {
  margin-top: 40px;
}

.login a {
  color: dimgray;
  font-size: 16px;
}

.github-star {
  position: absolute;
  bottom: 90px;
  right: 20px;
}

.github-star img {
  position: relative;
  top: 2px;
  width: 16px;
  height: 16px;
}

</style>

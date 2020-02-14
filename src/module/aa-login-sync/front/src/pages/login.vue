<template>
  <f7-page login-screen>
    <f7-login-screen-title>
      <div class="me">
        <div><img :src="require('../../static/img/logo.png')"></div>
        <div class="title1">EggBorn ShowCase</div>
        <div class="title2">Watch Articles</div>
      </div>
    </f7-login-screen-title>
    <div class="login">
      <f7-button @click="login" fill big color="bluegray">
        <img :src="require('../../static/img/github.png')">
        <span>Sign in with GitHub</span>
      </f7-button>
    </div>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      // eslint-disable-next-line
      location.assign('/api/aa/login/passport/github');
    },
  },

};

</script>
<style scoped>
.login-screen-content {
  padding-top: 0;
}

.me {
  text-align: center;
}

.me img {
  width: 48px;
}

.me .title1 {
  font-size: 20px;
  font-weight: bolder;
}

.me .title2 {
  font-size: 18px;
  font-weight: bolder;
}

.login {
  padding: 20px;
  opacity: 0.8;
}

.login img {
  width: 24px;
  height: 24px;
  position: relative;
  top: 5px;
}

.login a {
  color: #666;
  font-size: 16px;
}

</style>

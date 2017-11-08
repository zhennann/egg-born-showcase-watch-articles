<template>
  <f7-page login-screen>
    <f7-login-screen-title>
      <div class="me">
        <div><img :src="require('../../static/img/logo.png')"></div>
        <div class="name">EggBorn ShowCase: Watch Articles</div>
      </div>
    </f7-login-screen-title>
    <div class="wechat" @click="wechatLogin">
      <div><img :src="require('../../static/img/logo.png')"></div>
      <div class="name">Login with GitHub Account</div>
    </div>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    wechatLogin() {},
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

.me .name {
  font-size: 20px;
  font-weight: bolder;
}

.actions {
  font-size: smaller;
  text-align: right;
}

.actions a {
  padding: 6px;
  color: #666;
}

.wechat {
  text-align: center;
}

.wechat img {
  width: 48px;
}

.wechat .name {
  color: #666;
}

</style>

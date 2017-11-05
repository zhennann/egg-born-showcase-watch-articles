<template>
  <f7-page navbar-fixed>
    <f7-navbar>
      <f7-nav-left>
        <img class="app-logo" src="../../static/img/logo.png">
      </f7-nav-left>
      <f7-nav-center sliding>{{$text('Articles')}}</f7-nav-center>
    </f7-navbar>
    <f7-block inner>
      <p>{{message}}</p>
      <f7-list>
        <f7-list-item link="/aa/start/test" title="Version Check"></f7-list-item>
      </f7-list>
    </f7-block>
  </f7-page>
</template>
<script>
export default {
  data() {
    return {
      message: 'This is an egg-born module example!',
    };
  },
};

</script>
<style>
.app-logo {
  width: 32px;
  height: 32px;
  margin-left: 12px;
}

</style>

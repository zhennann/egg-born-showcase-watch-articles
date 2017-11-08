<template>
  <f7-page navbar-fixed>
    <f7-navbar title="test" :back-link="true" sliding></f7-navbar>
    <f7-block>
      <p>{{message}}</p>
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


</style>

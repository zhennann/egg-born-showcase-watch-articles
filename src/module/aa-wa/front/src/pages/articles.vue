<template>
  <f7-page navbar-fixed class="eb-toolbar-bottom" pull-to-refresh @ptr:refresh="onRefresh" :infinite-scroll-preloader="false" :infinite-scroll="true" @infinite="onInfinite">
    <f7-navbar>
      <f7-nav-left>
        <img class="eb-logo" src="../../static/img/logo.png">
      </f7-nav-left>
      <f7-nav-center sliding>{{$text('Articles')}}</f7-nav-center>
    </f7-navbar>
    <f7-block>
      <app-articles ref="articles" mode="all"></app-articles>
    </f7-block>
  </f7-page>
</template>
<script>
import articles from '../components/articles.vue';
export default {
  components: {
    'app-articles': articles,
  },
  data() {
    return {};
  },
  methods: {
    onRefresh(event, done) {
      this.$refs.articles.onRefresh(event, done);
    },
    onInfinite(event) {
      this.$refs.articles.onInfinite(event);
    },
    onArticleChanged() {
      this.$refs.articles.reload();
    },
  },
  beforeDestroy() {
    this.$meta.eventHub.$off('articleChanged', this.onArticleChanged);
  },
  mounted() {
    this.$meta.eventHub.$on('articleChanged', this.onArticleChanged);

    // load first hash
    const __hash = this.$store.state.hash;
    this.$store.commit('setHash', { hash: null });
    if (__hash !== '' && __hash !== '#' && __hash !== '#/') {
      this.$nextTick(() => {
        this.$f7.mainView.router.loadPage(__hash.substr(1));
      });
    }
  },
};

</script>
<style scoped>


</style>

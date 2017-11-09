<template>
  <div>
    <f7-card v-for="article of articles" :key="article.id" class="article">
      <f7-card-header>
        <div class="header">
          <div><img :src="article.avatar"></div>
          <div class="title"><a class="external" target="_system" :href="article.url">{{article.title}}</a></div>
        </div>
      </f7-card-header>
      <f7-card-content>
        <div class="stats">
          <div class="stat" v-for="stat of stats(article)">
            <label>{{stat.key}}:</label><span :class="stat.class">{{stat.value}}</span>
          </div>
        </div>
      </f7-card-content>
      <f7-card-footer>
        <span></span>
        <f7-button class="button-orange">{{ article.pattern }}</f7-button>
      </f7-card-footer>
    </f7-card>
    <eb-load-more ref="loadMore" @loadClear="onLoadClear" @loadMore="onLoadMore" :autoInit="true"></eb-load-more>
  </div>
</template>
<script>
export default {
  props: {
    mode: String,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    // eslint-disable-next-line
    onRefresh(event, done) {
      done();
      this.reload();
    },
    // eslint-disable-next-line
    onInfinite(event) {
      this.loadMore();
    },
    reload() {
      this.$refs.loadMore.reload();
    },
    loadMore() {
      this.$refs.loadMore.loadMore();
    },
    onLoadClear(done) {
      this.articles = [];
      done();
    },
    onLoadMore({ index, done }) {

      this.$api.post('article/list', { index })
        .then(data => {
          this.articles = this.articles.concat(data.list);
          done(null, data);
        })
        .catch(err => done(err));

    },
    stats(article) {
      const statNew = JSON.parse(article.statNew) || {};
      const statOld = JSON.parse(article.statOld) || {};

      return Object.keys(statNew).map(key => {
        const stat = { key, value: statNew[key] };
        stat.class = statNew[key] === statOld[key] ? 'normal' : 'changed';
        return stat;
      });
    },
  },
};

</script>
<style scoped>
.header {
  display: flex;
  align-items: center;
}

.header img {
  width: 36px;
  height: 36px;
  border-radius: 20%;
}

.header .title {
  padding-left: 6px;
}

.stats {
  display: flex;
  justify-content: flex-start;
}

.stats .stat {
  width: 33.33%;
}

.stats label,
.stats .normal {
  color: #778087;
}

.stats .changed {
  color: #E96A00;
}

</style>

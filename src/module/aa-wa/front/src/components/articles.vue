<template>
  <div>
    <f7-card v-for="article of articles" :key="article.id" class="article">
      <f7-card-header>
        <div class="header">
          <div><img :src="article.avatar"></div>
          <div class="title"><a class="external" target="_system" :href="article.url">{{article.title || article.error}}</a></div>
        </div>
      </f7-card-header>
      <f7-card-content>
        <div class="stats">
          <div class="stat" v-for="stat of stats(article)">
            <label>{{stat.key}}: </label><span :class="stat.class">{{stat.value}}</span>
          </div>
        </div>
      </f7-card-content>
      <f7-card-footer>
        <span></span>
        <span v-if="mode==='all'">
          {{ article.pattern.toUpperCase() }}
        </span>
        <f7-buttons v-if="mode==='mine'" class="buttons">
          <f7-button iconMaterial="visibility" @click="onFetch(article)"></f7-button>
          <f7-button iconMaterial="delete" @click="onDelete(article)"></f7-button>
        </f7-buttons>
      </f7-card-footer>
    </f7-card>
    <eb-load-more ref="loadMore" :onLoadClear="onLoadClear" :onLoadMore="onLoadMore" :autoInit="true"></eb-load-more>
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
      articlesMap: {},
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
      this.articlesMap = {};
      done();
    },
    onLoadMore({ index }) {

      return this.$api.post('article/list', { index, mode: this.mode }, { silent: true })
        .then(data => {
          data.list.forEach(article => {
            if (!this.articlesMap[article.url]) {
              this.articlesMap[article.url] = true;
              this.articles.push(article);
            }
          });
          return data;
        });

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
    onFetch(article) {
      this.$api.post('watch/fetch', { id: article.id }).then(() => {
        this.$api.post('article/item', { id: article.id }).then(data => {
          this.articles.splice(this.articles.findIndex(item => item.id === article.id), 1, data);
          this.$meta.eventHub.$emit('articleChanged', { type: 'fetch', data });
          this.$f7.addNotification({ message: this.$text('This article is fetched!') });
        });
      });
    },
    onDelete(article) {
      this.$f7.confirm(this.$text('Are you sure to delete this article?'), null, () => {
        this.$api.post('article/delete', { id: article.id }).then(data => {
          if (data) {
            this.articles.splice(this.articles.findIndex(item => item.id === article.id), 1);
            delete this.articlesMap[article.url];
            this.$meta.eventHub.$emit('articleChanged', { type: 'delete', data: { id: article.id } });
          }
        });
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

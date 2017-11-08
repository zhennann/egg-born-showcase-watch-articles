<template>
  <div class="eb-loadmore" v-if="doing || none || nomore || retry">
    <f7-preloader class="eb-preloader" v-if="doing"></f7-preloader>
    <div v-if="none">{{$text('No data')}}</div>
    <div v-if="nomore">{{$text('No more data')}}</div>
    <div v-if="retry">
      <f7-button round class="color-orange" @click="onRetry">{{$text('Load error, try again')}}</f7-button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    autoInit: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      finished: false,
      doing: false,
      index: 0,
      error: false,
    };
  },
  created() {
    // load first
    if (this.autoInit) {
      this.$nextTick(() => {
        this.reload();
      });
    }
  },
  computed: {
    none() {
      return !this.error && !this.doing && this.finished && this.index == 0;
    },
    nomore() {
      return !this.error && !this.doing && this.finished && this.index > 0;
    },
    retry() {
      return this.error;
    },
  },
  methods: {
    reload() {
      this.$emit('loadClear', () => {
        this.finished = false;
        this.doing = false;
        this.index = 0;
        this.error = false;
        this.loadMore();
      });
    },
    loadMore() {
      if (this.finished || this.doing) return;

      this.doing = true;
      this.error = false;

      this.$emit('loadMore', {
        index: this.index,
        done: (error, res) => {
          if (error) {
            this.error = true;
            this.doing = false;
          } else {
            this.error = false;
            this.doing = false;
            this.index = res.index;
            this.finished = res.finished;
          }
        },
      });
    },
    onRetry() {
      this.loadMore();
    },
  },
};

</script>
<style>
.eb-loadmore {
  text-align: center;
  color: #8e8e93;
  margin-top: 10px;
  margin-bottom: 10px;
  position: relative;
  height: 50px;
}

.eb-preloader {
  margin-top: 0;
  top: 0;
}

</style>

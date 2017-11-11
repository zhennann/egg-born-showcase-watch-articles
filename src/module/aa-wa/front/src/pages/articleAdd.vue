<template>
  <f7-page navbar-fixed>
    <f7-navbar back-link="Back" :title="$text('Add Article')" sliding>
      <f7-nav-right>
        <f7-link @click="onSubmit">{{$text('Submit')}}</f7-link>
      </f7-nav-right>
    </f7-navbar>
    <f7-block>
      <f7-list form>
        <f7-list-item :class="{'form-group--error': $v.form.url.$error}">
          <f7-label class="form__label" floating>{{$text('Article\'s Url')}}</f7-label>
          <f7-input type="text" v-model="form.url" @input="$v.form.url.$touch()" />
        </f7-list-item>
      </f7-list>
      <blockquote class="info">{{$text('For more information, see')}}
        <f7-link class="external" target="_system" href="https://github.com/zhennann/egg-born-showcase-watch-articles">{{$text('Patterns Library')}}</f7-link>
      </blockquote>
    </f7-block>
  </f7-page>
</template>
<script>
import { required, url } from 'vuelidate/lib/validators';
export default {
  data() {
    return {
      form: {
        url: null,
      },
    };
  },
  validations: {
    form: {
      url: {
        required,
        url,
      },
    },
  },
  methods: {
    onSubmit() {
      if (this.$v.$invalid) return;

      this.$api.post('article/add', this.form).then(data => {
        this.$api.post('watch/fetch', data).then(() => {
          this.$meta.eventHub.$emit('articleChanged', { type: 'add', data });
          this.$f7.mainView.router.back();
        }).catch(() => {
          this.$meta.eventHub.$emit('articleChanged', { type: 'add', data });
          this.$f7.mainView.router.back();
        });
      });
    },
  },
};

</script>
<style scoped>


</style>

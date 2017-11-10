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

      }).catch(err => {
        this.$f7.addNotification({ message: err.message });
      });
    },
  },
};

</script>
<style scoped>


</style>

<template>
  <div>
    Creaate Arct
    <McvArticleForm
      :initialValues="initialValues"
      :errors="validationsErrors"
      :isSubmiting="isSubmiting"
      @articleSubmiting="onSubmit"
    />
  </div>
</template>
<script>
import McvArticleForm from '../components/ArticleForm.vue'
export default {
  name: 'McvCreateArticle',
  data() {
    return {
      initialValues: {
        title: '',
        description: '',
        body: '',
        tagList: [],
      },
      validationsErrors: null,
      isSubmiting: false,
    }
  },
  components: {
    McvArticleForm,
  },
  methods: {
    onSubmit(data) {
      console.log(data);
    }
  }
}
</script>

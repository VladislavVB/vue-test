<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <McvValidationErrors v-if="errors" />
          <form @submit.prevent="onSubmit">
            <fieldset>
              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-controll form-controll-lg"
                  placeholder="Article Title"
                  v-model="title"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-controll form-controll-lg"
                  placeholder="Description"
                  v-model="description"
                />
              </fieldset>

              <fieldset class="form-group">
                <textarea
                  type="text"
                  class="form-controll form-controll-lg"
                  placeholder="Body"
                  v-model="body"
                />
              </fieldset>

              <fieldset class="form-group">
                <input
                  type="text"
                  class="form-controll form-controll-lg"
                  placeholder="Enter tags"
                  v-model="tagList"
                />
              </fieldset>

              <fieldset class="form-group">
                <button
                  type="submit"
                  :disabled="isSubmiting"
                  class="btn btn-lg pull=xs=right btn-primary"
                >Publish</button>
              </fieldset>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvValidationErrors from '../components/ValidationErrors.vue'
export default {
  name: 'McvArticleForm',
  props: ['initialValues', 'errors', 'isSubmiting'],
  data() {
    return {
      title: '',
      description: '',
      body: '',
      tagList: '',

    }
  },
  components: {
    McvValidationErrors,
  },
  methods: {
    onSubmit() {
      const form = {
        title: this.title,
        description: this.description,
        body: this.body,
        tagList: this.tagList,
      }
      this.$emit('articleSubmiting', form)
    },
  },
}
</script>

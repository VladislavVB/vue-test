<template>
  <div>
    <McvLoading v-if="isLoading"></McvLoading>
    <McvErrors v-if="McvErrors" :message="error"></McvErrors>
    <div class="sidebar" v-if="popularTags">
      <p>Popular Tags</p>
      <div class="tag-list">
        <router-link
          v-for="popularTag in popularTags"
          :key="popularTag"
          :to="{name: 'tag', params: {slug: popularTag}}"
          class="tag-default tag-pill"
        >
          {{ popularTag }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionsTypes} from '../store/modules/popularTags'
import McvLoading from '../components/Loading.vue'
import McvErrors from '../components/Errors.vue'
export default {
  name: 'McvPopularTags',
  computed: {
    ...mapState({
      isLoading: (state) => state.popularTags.isLoading,
      error: (state) => state.popularTags.error,
      popularTags: (state) => state.popularTags.data,
    }),
  },
  components: {
    McvLoading,
    McvErrors
  },
  mounted() {
    this.$store.dispatch(actionsTypes.getPopularTags)
  },
}
</script>

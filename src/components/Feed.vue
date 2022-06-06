<template>
  <div>
    <McvLoading v-if="isLoading"></McvLoading>
    <McvErrors v-if="McvErrors" :message="error"></McvErrors>
    <div v-if="feed">
      <div
        v-for="(article, index) in feed.articles"
        :key="index"
        class="article-preview"
      >
        <div class="article-meta">
          <router-link
            :to="{
              name: 'userProfile',
              params: {slug: article.author.username},
            }"
            ><img
              :src="article.author.image"
              :alt="article.author.username"
          /></router-link>
          <div class="info">
            <router-link
              class="author"
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
              >{{ article.author.username }}</router-link
            >
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <div class="pull-xs-right">ADD TO FAcorites</div>
        </div>
        <router-link
          class="preview-link"
          :to="{name: 'article', params: {slug: article.slug}}"
        >
          <h1>{{ article.title }}</h1>
          <p>{{ article.description }}</p>
          <span>Read more</span>
          TAG LIST
        </router-link>
      </div>
      <McvPagination
        :total="feed.articlesCount"
        :current-page="currentPage"
        :url="baseUrl"
      ></McvPagination>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {actionsTypes} from '../store/modules/feed'
import McvPagination from './Pagination.vue'
import {stringify, parseUrl} from 'query-string'
import McvLoading from '../components/Loading.vue'
import McvErrors from '../components/Errors.vue'
// import limit from '../helpers/vars'
// тут должен был быть лимит, но он выебывается поэтому он компоненте пагинации
export default {
  name: 'McvFeed',
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      url: '/',
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.feed.isLoading,
      feed: (state) => state.feed.data,
      error: (state) => state.feed.error,
    }),
    currentPage() {
      return Number(this.$route.query.page || '1')
    },
    baseUrl() {
      return this.$route.path
    },
    offset() {
      //тут должен был быть лимит, но он выебывается поэтому он компоненте пагинации и тут
      return this.currentPage * 1 - 1
    },
  },
  watch: {
    currentPage() {
      this.fethFeed()
    },
  },
  methods: {
    fethFeed() {
      const parsedUrl = parseUrl(this.apiUrl)
      const stringifieldParams = stringify({
        limit: 1,
        //тут должен был быть лимит, но он выебывается поэтому он компоненте пагинации и тут
        offset: this.offset,
        ...parsedUrl.query,
      })
      const apiUrlWidthParams = `${parsedUrl.url}?${stringifieldParams}`
      this.$store.dispatch(actionsTypes.getFeed, {
        apiUrl: apiUrlWidthParams,
      })
    },
  },
  mounted() {
    this.fethFeed()
  },
  components: {
    McvPagination,
    McvLoading,
    McvErrors,
  },
}
</script>

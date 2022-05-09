<template>
  <div class="article-page">
    <div class="banner">
      <div v-if="article" class="container">
        <h1>{{ article.title }}</h1>
        <div class="article-meta">
          <router-link
            :to="{
              name: 'userProfile',
              params: {slug: article.author.username},
            }"
          >
            <img
              :src="article.author.image"
              :alt="article.author.username"
            />
          </router-link>
          <div class="info">
            <router-link
              :to="{
                name: 'userProfile',
                params: {slug: article.author.username},
              }"
            >
              {{ article.author.username }}
            </router-link>
            <span class="date">{{ article.createdAt }}</span>
          </div>
          <span
            ><router-link
              class="btn btn-outline-secondary btn-sm"
              :to="{
                name: 'editArticle',
                params: {slug: article.slug},
              }"
              ><i class="ion-edit"></i> Edit Article</router-link
            >
            <button class="btn btn-outline-danger btn-sm">
              <i class="ion-trash-a"></i>Delite Article
            </button>
          </span>
        </div>
      </div>
    </div>
    <div>
      <div class="container page">
        <McvLoading v-if="isLoading"></McvLoading>
        <McvErrors v-if="McvErrors" :message="error"></McvErrors>
        <div class="row article-content" v-if="article">
          <div class="col-xs-12">
            <div>
              <p>{{article.body}}</p>
            </div>
            TAGLIST
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import McvLoading from '../components/Loading.vue'
import McvErrors from '../components/Errors.vue'

import {mapState} from 'vuex'
import {actionsTypes} from '../store/modules/article'
export default {
  name: 'McvArticle',
  mounted() {
    this.$store.dispatch(actionsTypes.getArticle, {
      slug: this.$route.params.slug,
    })
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.article.isLoading,
      error: (state) => state.article.error,
      article: (state) => state.article.data,
    }),
  },
  component: {
    McvLoading,
    McvErrors,
  },
}
</script>

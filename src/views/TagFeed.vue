<template>
  <div class="hpme-page">
    <MvcBanner></MvcBanner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
          <McvFeedToggler :tag-name="tagName"></McvFeedToggler>
          <McvFeed :api-url="apiUrl"></McvFeed>
        </div>
        <div class="col-md-3">
          <McvPopularTags></McvPopularTags>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import McvFeed from '../components/Feed.vue'
import McvPopularTags from '../components/PopularTags.vue'
import MvcBanner from '../components/Banner.vue'
import McvFeedToggler from '../components/FeedToggler.vue'
export default {
  name: 'McvTagFeed',
  components: {
    McvFeed,
    McvPopularTags,
    MvcBanner,
    McvFeedToggler,
  },
  computed: {
    tagName() {
      return this.$route.params.slug
    },
    apiUrl() {
      return `/articles?tag=${this.tagName}`
    },
  },
}
</script>

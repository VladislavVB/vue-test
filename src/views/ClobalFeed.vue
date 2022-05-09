<template>
  <div class="hpme-page">
    <MvcBanner></MvcBanner>
    <div class="container page">
      <div class="row">
        <div class="col-md-9">
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
export default {
  name: 'McvClobalFeed',
  components: {
    McvFeed,
    McvPopularTags,
    MvcBanner,
  },
  data() {
    return {
      apiUrl: '/articles',
    }
  },
}
</script>

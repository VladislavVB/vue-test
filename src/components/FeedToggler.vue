<template>
  <div class="feed-toggle">
    <ul class="nav nav-pills outline-active">
      <li class="nav-item" v-if="isLoggedIn">
        <router-link
          class="nav-link"
          :to="{name: 'yourFeed'}"
          :class="{active: routeName === 'yourFeed'}"
          >Your Feed</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          class="nav-link"
          :to="{name: 'globalFeed'}"
          :class="{active: routeName === 'globalFeed'}"
          >Global Feed</router-link
        >
      </li>
      <li v-if="tagName" class="nav-item">
        <router-link
          class="nav-link"
          :to="{name: 'tag'}"
          :class="{active: routeName === 'tag'}"
          ><i class="ion-pound"></i>{{ tagName }}</router-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'McvFeedToggler',
  props: {
    tagName: {
      type: String,
      required: false,
    },
  },
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    routeName() {
      return this.$route.name
    },
  },
}
</script>

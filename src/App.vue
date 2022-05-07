<template>
  <div>
    <McvTopbar></McvTopbar>
    <router-view />
  </div>
</template>
<script>
import McvTopbar from '@/components/Topbar'
export default {
  name: 'McvApp',
  components: {
    McvTopbar,
  },
  mounted() {
    this.$store.dispatch('getCurrentUser')
  },
}
</script>

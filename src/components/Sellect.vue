<template>
  <div class="select">
    <div class="selected">
    </div>
    <div class="items">
      <div v-for="option in options" :key="option">{{option.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: {
    options: {
      type: Array,
      required: true,
    },
    default: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>

<style scoped></style>

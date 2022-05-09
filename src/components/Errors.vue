<template>
  <div>
    {{message}}
  </div>
</template>
<script>
export default {
  name: 'McvErrors',
  props: {
    message: {
      type: String,
      required: false,
      default: 'Error backend :('
    }
  }
}
</script>

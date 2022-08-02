<template>
  <ul class="pagination">
    <li
      v-for="page in pages"
      :key="page"
      class="page-item"
      :class="{active: currentPage === page}"
    >
      <router-link class="page-link" :to="{path: url, query: {page: page}}">
        {{ page }}
      </router-link>
    </li>
  </ul>
</template>
<script>
import {range} from '../helpers/utils'
export default {
  name: 'McvPagination',
  data() {
    return {
      limit: 1
    }
  },
  props: {
    total: {
      type: Number,
      required: true,
    },
   
    currentPage: {
      type: Number,
      required: true,
    },
    url: {
      type: Number,
      required: true,
    },
  },
  computed: {
    pages() {
      const pagesCount = Math.ceil(this.total / this.limit)
      return range(1, pagesCount)
    },
  },
}
</script>

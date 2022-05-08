import axios from './axios.js'

const getPopularTags = () => {
  return axios.get('/tags').then(res => res.data.tags)
}

export default {
  getPopularTags
}

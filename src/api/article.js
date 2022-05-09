import axios from './axios.js'

const getArticle = (slug) => {
  return axios
    .get(`/articles/${slug}`)
    .then((res) => res.data.article)
}
export default {
  getArticle,
}

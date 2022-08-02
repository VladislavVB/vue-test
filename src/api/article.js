import axios from './axios.js'

const getArticle = (slug) => {
  return axios
    .get(`/articles/${slug}`)
    .then((res) => res.data.article)
}

const deliteArticle = (slug) => {
  return axios.delete(`/articles/${slug}`)
}
export default {
  getArticle,
  deliteArticle
}

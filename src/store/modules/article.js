import articleApi from '@/api/article'

const state = {
  data: null,
  isLoading: false,
  error: null,
}

export const mutationsTypes = {
  getArticleStart: '[article] Get article start',
  getArticleSuccess: '[article] Get article success',
  getArticleFailure: '[article] Get article failure',
}

export const actionsTypes = {
  getArticle: '[article] Get article',
}

const mutations = {
  [mutationsTypes.getArticleStart](state) {
    state.isLoading = true
    state.data = null
  },
  [mutationsTypes.getArticleSuccess](state, payload) {
    state.isLoading = false
    state.data = payload
  },
  [mutationsTypes.getArticleFailure](state) {
    state.isLoading = false
  },
}
const actions = {
  [actionsTypes.getArticle](context, {slug}) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.getArticleStart, slug)
      articleApi
        .getArticle(slug)
        .then((article) => {
          context.commit(mutationsTypes.getArticleSuccess, article)
          resolve(article)
        })
        .catch(() => {
          context.commit(mutationsTypes.getArticleFailure)
        })
    })
  },
}
export default {
  state,
  actions,
  mutations,
}

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

  deleteArticleStart: '[article] Delete article start',
  deleteArticleSuccess: '[article] Delete article success',
  deleteArticleFailure: '[article] Delete article failure',
}

export const actionsTypes = {
  getArticle: '[article] Get article',

  deleteArticle: '[article] Delete article',
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

  [mutationsTypes.deleteArticleStart]() { },
  [mutationsTypes.deleteArticleSuccess]() { },
  [mutationsTypes.deleteArticleFailure]() { },
}
const actions = {
  [actionsTypes.getArticle](context, { slug }) {
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
  [actionsTypes.deleteArticle](context, { slug }) {
    return new Promise((resolve) => {
      context.commit(mutationsTypes.deleteArticleStart, slug)
      articleApi
        .deliteArticle(slug)
        .then(() => {
          context.commit(mutationsTypes.deleteArticleSuccess)
          resolve()
        })
        .catch(() => {
          context.commit(mutationsTypes.deleteArticleFailure)
        })
    })
  },
}


export default {
  state,
  actions,
  mutations,
}

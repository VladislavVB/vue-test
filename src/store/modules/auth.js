import authApi from '@/api/auth'
import {setItem} from '@/helpers/persistanceStorage.js'

const state = {
  isloading: false,
  isSubmiting: false,
  currentUser: null,
  validationErrors: null,
  isLoggedIn: null,
}

const getters = {
  currentUser: (state) => {
    return state.currentUser
  },
  isLoggedIn: (state) => {
    return Boolean(state.isLoggedIn)
  },
  isAnonymous: (state) => {
    return state.isLoggedIn === false
  },
}

const mutations = {
  registerStart(state) {
    state.isSubmiting = true
    state.validationErrors = null
  },
  registerSuccess(state, payload) {
    state.isSubmiting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  registerFailure(state, payload) {
    state.isSubmiting = false
    state.validationErrors = payload
  },

  loginStart(state) {
    state.isSubmiting = true
    state.validationErrors = null
  },
  loginSuccess(state, payload) {
    state.isSubmiting = false
    state.currentUser = payload
    state.isLoggedIn = true
  },
  loginFailure(state, payload) {
    state.isSubmiting = false
    state.validationErrors = payload
  },

  getCurrentUserStart(state) {
    state.isloading = true
  },
  getCurrentUserSuccess(state, payload) {
    state.currentUser = payload
    state.isloading = false
    state.isLoggedIn = true
  },
  getCurrentUserFailure(state) {
    state.isloading = false
    state.isLoggedIn = false
  },

  resetForm(state) {
    state.isSubmiting = false
    state.validationErrors = null
    state.currentUser = null
  },
}
const actions = {
  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          context.commit('registerSuccess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit('registerFailure', result.response.data.errors)
        })
    })
  },
  login(context, credentials) {
    return new Promise((resolve) => {
      context.commit('loginStart')
      authApi
        .login(credentials)
        .then((response) => {
          context.commit('loginSuccess', response.data.user)
          setItem('accessToken', response.data.user.token)
          resolve(response.data.user)
        })
        .catch((result) => {
          context.commit('loginFailure', result.response.data.errors)
        })
    })
  },
  getCurrentUser(context) {
    return new Promise((resolve) => {
      context.commit('getCurrentUserStart')
      authApi
        .getCurrentUser()
        .then((response) => {
          context.commit('getCurrentUserSuccess', response.data.user)
          resolve(response.data.user)
        })
        .catch(() => {
          context.commit('getCurrentUserFailure')
        })
    })
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}

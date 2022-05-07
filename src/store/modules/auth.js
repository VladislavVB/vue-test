import authApi from '@/api/auth'

const state = {
  isSubmiting: false,
}

const mutations = {
  registerStart(state) {
    state.isSubmiting = true
  },
  registerSuccess(state) {
    state.isSubmiting = false
  },
  registerFailure(state) {
    state.isSubmiting = false
  },
}
const actions = {
  register(context, credentials) {
    return new Promise((resolve) => {
      context.commit('registerStart')
      authApi
        .register(credentials)
        .then((response) => {
          console.log('res', response)
          context.commit('registerSuccess', response.data.user)
          resolve(response.data.user)
        })
        .catch((result) => {
          console.log('resErr', result)
          context.commit('registerFailure', result.response.data.errors)
        })
    })
    // setTimeout(() => {
    //   context.commit('registerStart')
    // }, 1000);
  },
}

export default {
  state,
  mutations,
  actions,
}

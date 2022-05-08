<template>
  <div class="auth_page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <router-link :to="{name: 'register'}">Need an account?</router-link>
          </p>
          <McvValidationErrors
            v-if="validationErrors"
            :validation-errors="validationErrors"
          ></McvValidationErrors>
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                v-model="email"
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                v-model="password"
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
            <button
              :disabled="isSubmiting"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import McvValidationErrors from '@/components/ValidationsErrors.vue'
export default {
  name: 'McvLogin',
  components: {
    McvValidationErrors,
  },
  data() {
    return {
      email: '',
      password: '',
    }
  },

  computed: {
    isSubmiting() {
      return this.$store.state.auth.isSubmiting
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors
    },
  },
  methods: {
    onSubmit() {
      this.$store
        .dispatch('login', {
          email: this.email,
          password: this.password,
        })
        .then(() => {
          this.$router.push({name: 'globalFeed'})
        })
    },
  },
  mounted() {
    this.$store.commit('resetForm')
  },
}
</script>

<template>
  <div class="auth_page">
    <div class="container page">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Sign Up</h1>
          <p class="text-xs-center">
            <!-- <router-link :to="{name: 'login'}">Need an account?</router-link> -->
          </p>
          VALID ERRORS
          <form @submit.prevent="onSubmit">
            <fieldset class="form-group">
              <input
                type="text"
                class="form-control form-control-lg"
                placeholder="Username"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="email"
                class="form-control form-control-lg"
                placeholder="Email"
              />
            </fieldset>
            <fieldset class="form-group">
              <input
                type="password"
                class="form-control form-control-lg"
                placeholder="Password"
              />
            </fieldset>
            {{ isSubmiting }}
            <button
              :disabled="isSubmiting"
              class="btn btn-lg btn-primary pull-xs-right"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'McvRegister',
  computed: {
    isSubmiting() {
      return this.$store.state.auth.isSubmiting
    },
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        email: 'qazxsddafsdfvsd@.mail.ru',
        username: 'sdfasdcsfnamaeq',
        password: '123455788',
      }).then(user => {
        console.log('zbs user', user);
      })
    },
  },
}
</script>

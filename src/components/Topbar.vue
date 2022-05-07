<template>
  <nav class="navbar navbar-light">
    <div class="container">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        MediunClone
      </router-link>
      <ul class="nav navbar-nav pull-xs-right">
        <li class="nav-item">
          <router-link
            active-class="active"
            class="nav-link"
            :to="{name: 'home'}"
            >Home</router-link
          >
        </li>
        <template v-if="isLoggedIn">
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{name: 'home'}"
            >
              <i class="ion-compose"></i> &nbsp; New Article
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{name: 'home'}"
            >
              <i class="ion-gear-a"></i> &nbsp; Settings
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{name: 'home'}"
            >
              <img
                class="user-pic"
                :src="currentUser.image"
                alt="currentUser.image"
              />
              &nbsp; {{ currentUser.username }}
            </router-link>
          </li>
        </template>
        <template v-if="isAnonymous">
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{name: 'login'}"
            >
              Sign in
            </router-link>
          </li>
          <li class="nav-item">
            <router-link
              active-class="active"
              class="nav-link"
              :to="{name: 'register'}"
            >
              Sign up
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'McvTopbar',
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
    isAnonymous() {
      return this.$store.getters.isAnonymous
    },
  },
}
</script>

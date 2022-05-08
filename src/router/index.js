import {createRouter, createWebHashHistory} from 'vue-router'
import ClobalFeed from '../views/ClobalFeed.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'globalFeed',
    component: ClobalFeed,
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/feed',
    name: 'yourFeed',
    component: ClobalFeed,
  },
  {
    path: '/tags/:slug',
    name: 'tag',
    component: ClobalFeed,
  },
  {
    path: '/articles/new',
    name: 'createArticle',
    component: ClobalFeed,
  },
  {
    path: '/articles/:slug',
    name: 'article',
    component: ClobalFeed,
  },
  {
    path: '/articles/:slug/edit',
    name: 'editArticle',
    component: ClobalFeed,
  },
  {
    path: '/settings',
    name: 'settings',
    component: ClobalFeed,
  },
  {
    path: '/profiles/:slug',
    name: 'userProfile',
    component: ClobalFeed,
  },
  {
    path: '/profiles/:slug/favorites',
    name: 'userProfileFavorites',
    component: ClobalFeed,
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router

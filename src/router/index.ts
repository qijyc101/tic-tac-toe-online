import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: 'main', component: import('src/pages/GamePage.vue') },
  { path: '/:notMatches(.*)*', redirect: { name: 'main' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

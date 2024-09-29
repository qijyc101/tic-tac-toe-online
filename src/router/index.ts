import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/1', name: 'main', component: import('src/pages/LoadingBuffer.vue') },
  { path: '/2', name: 'main2', component: import('src/pages/HomePage.vue') },
  { path: '/3', name: 'main3', component: import('src/pages/GamePage.vue') },
  { path: '/:notMatches(.*)*', redirect: { name: 'main' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

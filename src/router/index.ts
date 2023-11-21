import { createRouter, createWebHistory } from 'vue-router'
import RecentView from '../views/RecentView.vue'
import RandomView from '@/views/RandomView.vue'
import ComicView from '@/views/ComicView.vue'
import SearchView from '@/views/SearchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: RecentView
    },
    {
      path: '/random',
      name: 'random',
      component: RandomView
    },
    {
      path: '/search',
      name: 'search',
      component: SearchView
    },
    {
      path: '/comic/:id',
      name: 'comic',
      props: true,
      component: ComicView
    }
  ]
})

export default router

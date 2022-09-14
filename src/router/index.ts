import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import GamesView from '../views/GamesView.vue'
import ReviewsView from '../views/ReviewsView.vue'
import DevelopmentView from '../views/DevelopmentView.vue'

const routes: Array<RouteRecordRaw> = [
  // Home
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // Games
  {
    path: '/games',
    name: 'games',
    component: GamesView
  },
  // Reviews
  {
    path: '/reviews',
    name: 'reviews',
    component: ReviewsView
  },
  // Development
  {
    path: '/development',
    name: 'development',
    component: DevelopmentView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

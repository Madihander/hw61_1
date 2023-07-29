import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/MainPage.vue'
import BlockView from "../views/BlockView.vue";
import TransactionView from "@/views/TransactionView.vue";
const routes = [
  {
    path: '/',
    name: 'home',
    component: Main,
  },
  {
    path: '/block/:blockNumberOrHash',
    name: 'block',
    component: BlockView,
  },

  {
    path: '/tx/:txHash',
    name: 'tx',
    component: TransactionView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

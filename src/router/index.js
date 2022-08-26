import { createRouter, createWebHistory } from 'vue-router'
import SiteAdmin from '../views/SiteAdministration.vue'
import SignIn from '../views/AccountSignin.vue'

const routes = [
  {
    path: '/',
    name: 'site-administration',
    component: SiteAdmin
  },
  {
    path: '/Sign-in',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/vendors-administration',
    name: 'vendors-administration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "vendors-administration" */ '../views/VendorsAdministration.vue')
  },
  {
    path: '/purchase-requisitions',
    name: 'purchase-requisitions',
    component: () => import(/* webpackChunkName: "purchase-requisitions" */ '../views/PurchaseRequisitions.vue')
  },
  {
    path: '/request-for-quotes',
    name: 'request-for-quotes',
    component: () => import(/* webpackChunkName: "request-for-quotes" */ '../views/RequestForQuotes.vue')
  },
  {
    path: '/purchase-order',
    name: 'purchase-order',
    component: () => import(/* webpackChunkName: "purchase-order" */ '../views/PurchaseOrder.vue')
  },
  {
    path: '/purchase-document',
    name: 'purchase-document',
    component: () => import(/* webpackChunkName: "purchase-document" */ '../views/PurchaseDocument.vue')
  },
  {
    path: '/create-new-rfq',
    name: 'create-new-rfq',
    component: () => import(/* webpackChunkName: "create-new-rfq" */ '../views/admin-views/CreateNewRfq.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

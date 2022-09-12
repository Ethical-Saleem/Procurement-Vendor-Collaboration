import { createRouter, createWebHistory } from 'vue-router'
import AdminDashboard from '../views/admin-views/AdminDashboard'
import VendorDashboard from '../views/vendor-views/VendorDashboard'
import SiteAdmin from '../views/admin-views/SiteAdministration.vue'
import SignIn from '../views/AccountSignin.vue'
import TeamRequisitions from '../views/user-views/TeamsRequisitions.vue'

const routes = [
  {
    path: '/',
    name: 'admin-dashboard',
    component: AdminDashboard
  },
  {
    path: '/vendor-dashboard',
    name: 'vendor-dashboard',
    component: VendorDashboard
  },
  {
    path: '/site-administration',
    name: 'SiteAdministration',
    component: SiteAdmin
  },
  {
    path: '/Sign-in',
    name: 'sign-in',
    component: SignIn
  },
  {
    path: '/vendors-administration',
    name: 'VendorsAdministration',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "VendorsAdministration" */ '../views/admin-views/VendorsAdministration.vue')
  },
  {
    path: '/vendor-profile/:company_name',
    name: 'VendorProfile',
    component: () => import(/* webpackChunkName: "VendorAdministration" */ '../views/admin-views/VendorProfile.vue'),
    props: true
  },
  {
    path: '/purchase-requisitions',
    name: 'PurchaseRequisitions',
    component: () => import(/* webpackChunkName: "PurchaseRequisitions" */ '../views/admin-views/PurchaseRequisitions.vue')
  },
  {
    path: '/request-for-quotes',
    name: 'RequestForQuotes',
    component: () => import(/* webpackChunkName: "RequestForQuotes" */ '../views/admin-views/RequestForQuotes.vue')
  },
  {
    path: '/purchase-order',
    name: 'PurchaseOrder',
    component: () => import(/* webpackChunkName: "PurchaseOrder" */ '../views/admin-views/PurchaseOrder.vue')
  },
  {
    path: '/purchase-document',
    name: 'PurchaseDocument',
    component: () => import(/* webpackChunkName: "purchase-document" */ '../views/admin-views/PurchaseDocument.vue')
  },
  {
    path: '/request-for-quotes/create-new-rfq',
    name: 'create-new-rfq',
    component: () => import(/* webpackChunkName: "create-new-rfq" */ '../views/admin-views/CreateNewRfq.vue')
  },
  {
    path: '/request-for-quotes/:bid_num',
    name: 'RfqFullDetail',
    component: () => import(/* webpackChunkName: "RfqFullDetail" */ '../views/admin-views/RfqFullDetails.vue'),
    props: true
  },
  {
    path: '/request-for-quotes/vendor-bid-detail/:vendor_name?',
    name: 'VendorBidDetail',
    component: () => import(/* webpackChunkName: "VendorBidDetail" */ '../views/admin-views/VendorBidDetails.vue')
  },
  {
    path: '/purchase-order/:purchase_code',
    name: 'PurchaseOrderDetail',
    component: () => import(/* webpackChunkName: "PurchaseOrderDetail" */ '../views/admin-views/PurchaseOrderDetail.vue')
  },
  {
    path: '/team-requisitions',
    name: 'team-requisitions',
    component: TeamRequisitions
  },
  {
    path: '/user-requisitions',
    name: 'user-requisitions',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "user-requisitions" */ '@/views/user-views/UserRequisitions.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

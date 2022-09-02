<template>
  <Header>
    <template #brand>
      <span class="navbar-brand text-white"><i class="fa-solid fa-house"></i></span>
      <span class="navbar-text title text-white">
        <router-link :to="{name: 'admin-dashboard'}">
          PROCUREMENT ADMIN PORTAL
        </router-link>
      </span>
    </template>
  </Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content">
    <div class="row">
      <div class=" my-2">
      <a href="#" class="btn btn-sm whiteButton shadow px-3">
        Publish
      </a>
      <button class="btn btn-sm whiteButton shadow mx-4 px-3"
      data-bs-toggle="modal" data-bs-target="#importPermission">
        Rate Vendor Performance
      </button>
      </div>
    </div>
    <div class="container-fluid px-0">
      <div class="row">
        <div class="col-sm-12 col-lg-9 col-xl-9 mb-4">
          <purchase-order-invoice></purchase-order-invoice>
        </div>
        <div class="col-sm-12 col-lg-3 col-xl-3">
          Hello
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader'
import Navbar from '@/components/admin/AdminNavBar'
import purchaseOrderInvoice from '@/components/admin/PurchaseOrderInvoice'

export default {
  name: 'PurchaseOrderDetail',
  components: {
    Header,
    Navbar,
    purchaseOrderInvoice
  }
}
</script>

<style>

</style>

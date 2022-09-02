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
  <navbar></navbar>
  <div class="container-fluid main-content">
    <div class="row">
      <ul class="nav tabs mb-0" id="vendors-tab" role="tablist">
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('waybills')" :class="{ active: isActive('waybills') }"
           id="pending-reqs" href="#waybills" role="tab"
           aria-controls="suppliers-list" aria-selected="true">
            Waybills
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('invoices')" :class="{ active: isActive('invoices') }"
           id="accepted-reqs" href="#invoices" role="tab"
           aria-controls="new-supplier" aria-selected="false">
           Invoices
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('paymentReceipts')" :class="{ active: isActive('paymentReceipts') }"
           id="accepted-reqs" href="#paymentReceipts" role="tab"
           aria-controls="new-supplier" aria-selected="false">
           Payment Receipts
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('certificateOfCompletion')" :class="{ active: isActive('certificateOfCompletion') }"
           id="accepted-reqs" href="#certificateOfCompletion" role="tab"
           aria-controls="new-supplier" aria-selected="false">
            Certificte of Completion
          </a>
        </li>
      </ul>
    </div>
    <div class="container-fluid my-4">
      <div class="tab-content" id="vendors-content">
        <div class="tab-pane fade" :class="{ 'active show': isActive('waybills') }"
         id="waybills" role="tabpanel" aria-labelledby="waybills">
           <div class="container-fluid px-0">
            <way-bills></way-bills>
           </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('invoices') }"
         id="invoices" role="tabpanel" aria-labelledby="invoices">
          <div class="container-fluid px-0">
            <purchase-invoice></purchase-invoice>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('paymentReceipts') }"
         id="paymentReceipts" role="tabpanel" aria-labelledby="payment-receipts">
          <div class="container-fluid px-0">
            <payment-receipt></payment-receipt>
          </div>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('certificateOfCompletion') }"
         id="certificateOfCompletion" role="tabpanel" aria-labelledby="certificate-of-completion">
          <div class="container-fluid px-0">
            <certificate-of-completion></certificate-of-completion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'
import wayBills from '@/components/admin/WayBills'
import purchaseInvoice from '@/components/admin/PurchaseInvoices'
import paymentReceipt from '@/components/admin/PaymentReceipts'
import certificateOfCompletion from '@/components/admin/CertificateOfCompletion'

export default {
  name: 'purchase-document',
  components: {
    Header,
    Navbar,
    wayBills,
    purchaseInvoice,
    paymentReceipt,
    certificateOfCompletion
  },
  data () {
    return {
      activeItem: 'waybills'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style>

</style>

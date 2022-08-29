<template>
  <Header></Header>
  <navbar></navbar>
  <div class="container-fluid main-content">
    <div class="">
      <div class="rfq-actions my-2">
        <button class="btn btn-sm rgbButton shadow px-3">
          Create New RFQ
        </button>
        <button class="btn btn-sm whiteButton shadow px-3">
          Save
        </button>
        <button class="btn btn-sm whiteButton shadow px-3">
          Add Vendors
        </button>
        <button class="btn btn-sm whiteButton shadow px-3">
          Compare Quotes
        </button>
        <button class="btn btn-sm whiteButton shadow px-3">
          Finalize RFQ
        </button>
      </div>
    </div>
    <div class="container-fluid">
      <div class="my-4">
        <div class="row mb-2">
          <generalBid></generalBid>
        </div>
        <div class="row mb-2">
          <rfqLine></rfqLine>
        </div>
        <div class="row mb-2">
          <nominated-vendor></nominated-vendor>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'
import generalBid from '@/components/admin/GeneralBidDetails.vue'
import rfqLine from '@/components/admin/RfqLineDetails.vue'
import nominatedVendor from '@/components/admin/NominatedVendors.vue'

export default {
  name: 'RfqFullDetail',
  components: {
    Header,
    Navbar,
    generalBid,
    rfqLine,
    nominatedVendor
  }
}
</script>

<style scoped>
.rfq-actions .btn {
  margin-right: 25px;
}
</style>

<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content">
    <div class="row">
      <div class=" my-2">
        <button class="btn btn-sm rgbButton shadow px-3">
          Create New RFQ
        </button>
        <button class="btn btn-sm whiteButton shadow mx-4 px-3">
          Save
        </button>
        <button class="btn btn-sm whiteButton shadow px-3"
        data-bs-toggle="modal" data-bs-target="#addVendor">
          Add Vendors
        </button>
      </div>
    </div>
    <div class="container-fluid">
      <div class="my-4">
        <div class="row mb-2">
          <generalBid></generalBid>
        </div>
        <div class="row">
          <rfqLine></rfqLine>
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

export default {
  name: 'create-new-rfq',
  components: {
    Header,
    Navbar,
    generalBid,
    rfqLine
  }
}
</script>

<style scoped>
</style>

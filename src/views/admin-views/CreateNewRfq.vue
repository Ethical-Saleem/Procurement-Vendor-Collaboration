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
  <div class="">
    <div class="modal" id="addVendor" tabindex="-1">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body">
            <div class="text-center m-5">
              <h5 class="">Add Vendor in RFQ</h5>
              <div class="d-flex justify-content-between my-4">
                <p class="col-5 label text-end fw-bold mb-1" style="font-size:20px;">
                Select Vendors:
                </p>
                <select class="col-6 ">
                  <option value="1" class="" selected>ABC Nigeria Limited</option>
                  <option value="2" class="">Laplace Infosys Limited</option>
                  <option value="3" class="">Lodash & Co Nig Plc</option>
                  <option value="4" class="">Mikton Technology Solutions Ltd</option>
                  <option value="5" class="">XYZ Corporations</option>
                </select>
              </div>
              <button class="btn btn-sm rgbButton">
                Send Bid Invitation
              </button>
            </div>
          </div>
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

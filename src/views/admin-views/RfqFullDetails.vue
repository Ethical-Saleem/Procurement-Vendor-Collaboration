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
        <button class="btn btn-sm whiteButton shadow px-3"
        data-bs-toggle="modal" data-bs-target="#addVendor">
          Add Vendors
        </button>
        <button class="btn btn-sm whiteButton shadow px-3"
        data-bs-toggle="modal" data-bs-target="#compareQuote">
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
    <div class="modal" id="compareQuote" tabindex="-1">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body compare-quote">
            <div class="my-4">
              <compare-quote></compare-quote>
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
import nominatedVendor from '@/components/admin/NominatedVendors.vue'
import compareQuote from '@/components/admin/CompareQuotes.vue'

export default {
  name: 'RfqFullDetail',
  components: {
    Header,
    Navbar,
    generalBid,
    rfqLine,
    nominatedVendor,
    compareQuote
  }
}
</script>

<style scoped>
.rfq-actions .btn {
  margin-right: 25px;
}
.compare-quote {
  background-color: #dadada;
}
</style>

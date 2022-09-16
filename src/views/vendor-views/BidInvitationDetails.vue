<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content px-0">
    <actionNav
    title="Bid Invitation Details"
    >
      <!--<template #countdown>
        <p class="warning">EXPIRES</p>
      </template>-->
      <template #button>
        <button
        class="btn btn-sm shadow m-2 rgbButton"
        type="button"
        data-bs-toggle="modal" data-bs-target="#acceptModal"
        @click="toggleModal">
          Accept
        </button>
        <button class="btn btn-sm shadow m-2 whiteButton" type="button">
          Reject
        </button>
        <router-link :to="{ name: 'BidInvitationUploads', params:{ bid_num: $route.params.bid_num } }">
          <button class="btn btn-sm shadow m-2 rgbButton" type="button">
            Submit Purchase Quote
          </button>
        </router-link>
        <button class="btn btn-sm shadow m-2 rgbButton" type="button">
          <i class="fa-solid fa-print"></i>
        </button>
        <button class="btn btn-sm shadow m-2 rgbButton" type="button">
          <i class="material-icons">download</i>
        </button>
      </template>
    </actionNav>
    <div class="container-fluid">
      <div class="my-4 mx-2">
        <div class="row mb-2">
          <generalBid></generalBid>
        </div>
        <div class="row mb-2">
          <rfqLine></rfqLine>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/vendor/VendorHeader'
import Navbar from '@/components/vendor/VendorNavbar'
import actionNav from '@/components/vendor/ActionNav'
import generalBid from '@/components/admin/GeneralBidDetails'
import rfqLine from '@/components/vendor/VendorRfqLineDetails'

export default {
  name: 'BidInvitationDetails',
  components: {
    Header,
    Navbar,
    actionNav,
    generalBid,
    rfqLine
  }
}
</script>

<style scoped>
.main-content{
  padding-top: 100px;
  overflow-x: auto;
  font-size: 16px;
}
</style>

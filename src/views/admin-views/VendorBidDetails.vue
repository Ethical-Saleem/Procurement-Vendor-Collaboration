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
    <div class="container-fluid my-3 header px-0">
      <div class="float-end">
        <button class="btn btn-sm shadow whiteButton fw-bold px-3"
        data-bs-toggle="modal" data-bs-target="#commentsModal">
          View Comment
        </button>
      </div>
      <div class="d-flex">
        <p class="mb-0 fw-bold head">
          Vendor:
          <span class="fw-normal">{{ vendorName }}</span>
        </p>
        <p class="mb-0 fw-bold mx-3">
          Address:
          <span class="fw-normal">{{ vendorAddress }}</span>
        </p>
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
          <bidUpload></bidUpload>
        </div>
      </div>
    </div>
    <div class="redirect-btn float-end">
      <!--<router-link :to="{name: 'RfqFullDetail'}">-->
      <button
      class="btn btn-sm px-3 rgbButton"
      @click="$router.go(-1)"
      >
        Close
      </button>
      <!--</router-link>-->
    </div>
  </div>
  <div class="">
    <div class="modal" id="commentsModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body">
            <p class="modal-title mt-3 mx-3" style="font-size:20px;font-weight:700;">
              Comments Feed
            </p>
            <div class="content my-4 mx-3">
              <Comments></Comments>
            </div>
            <div class="float-end">
              <button class="btn btn-sm rgbButton px-3" data-bs-dismiss="modal">Close</button>
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
import bidUpload from '@/components/admin/BidUploads.vue'
import Comments from '@/components/Comments.vue'

export default {
  name: 'VendorBidDetail',
  components: {
    Header,
    Navbar,
    generalBid,
    rfqLine,
    bidUpload,
    Comments
  },
  data () {
    return {
      vendorName: 'XYZ Corporations',
      vendorAddress: 'Ikeja, Lagos, Nigeria'
    }
  },
  methods: {
    returnToDetails () {
      this.$route.push('/request-for-quotes/vendor-bid-details')
    }
  }
}
</script>

<style scoped>
.header p {
  font-size: 20px;
}
.header p span {
  font-size: 18px;
}
.redirect-btn {
  height: 280px;
}
.redirect-btn a.btn {
  bottom: 0;
}
</style>

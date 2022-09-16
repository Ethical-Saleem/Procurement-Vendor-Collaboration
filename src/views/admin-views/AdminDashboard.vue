<template>
  <Header>
    <template #brand>
      <span class="navbar-brand text-white">
        <i class="fa-solid fa-house"></i>
      </span>
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
      <p class="h4">Activity Cues</p>
      <div class="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
        <div class="row mb-2">
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-one">
              <h5 class="card-title"><i class="fa-solid fa-file-pen"></i> 54</h5>
              <p class="card-text mb-0">Quotes</p>
              <a href="bidInvitation.html" class="stretched-link"></a>
            </quotes-card>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-two">
              <h5 class="card-title"><i class="fa-solid fa-triangle-exclamation"></i> 54</h5>
              <p class="card-text mb-0">Pending Quotes</p>
              <a href="bidInvitation.html" class="stretched-link"></a>
            </quotes-card>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-three">
              <h5 class="card-title"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-check-circle">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg> 54</h5>
              <p class="card-text mb-0">Approved Quotes</p>
              <a href="bidInvitation.html" class="stretched-link"></a>
            </quotes-card>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-four">
              <h5 class="card-title"><i class="fa-solid fa-circle-xmark"></i> 54</h5>
              <p class="card-text mb-0">Rejected Quotes</p>
              <a href="bidInvitation.html" class="stretched-link"></a>
            </quotes-card>
          </div>
        </div>
        <div class="row mb-2">
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-one">
              <h5 class="card-title"><i class="fa-solid fa-folder"></i> 54</h5>
              <p class="card-text mb-0">Purchase Orders</p>
              <a href="purchaseOrder.html" class="stretched-link"></a>
            </quotes-card>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-two">
              <h5 class="card-title"><i class="fa-solid fa-folder-open"></i> 54</h5>
              <p class="card-text mb-0">Opened Purchase Orders</p>
              <a href="purchaseOrder.html" class="stretched-link"></a>
            </quotes-card>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-three">
              <h5 class="card-title"><i class="fa-solid fa-file-circle-check"></i> 54</h5>
              <p class="card-text mb-0">Accepted Purchase Orders</p>
              <a href="purchaseOrder.html" class="stretched-link"></a>
            </quotes-card>
          </div>
          <div class="col-6 col-sm-4 col-md-3">
            <quotes-card class="card-four">
              <h5 class="card-title"><i class="fa-solid fa-file-circle-xmark"></i> 54</h5>
              <p class="card-text mb-0">Closed Purchase Orders</p>
              <a href="purchaseOrder.html" class="stretched-link"></a>
            </quotes-card>
          </div>
        </div>
      </div>
      <div class="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
        <quotes-card class="shadow">
          <div class="media d-flex g-0">
            <div class=" col-sm-1 p-1 text-primary" id="">
              <i class="fa-solid fa-message"></i>
            </div>
            <div class="media-body col-sm-11">
              <p class="card-text"><small>vendor portal &nbsp; <strong>.</strong> &nbsp; now</small></p>
              <h6 class="card-title mt-0 p-0" id="smsHead">New notification</h6>
              <p class="card-text small" id="smsText">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam, id repellat. Similique iste,
              consequatur exercitationem temporibus quia officia ea earum dolores in dellus topret seftoge tesup. Ne lip meto...</p>
            </div>
          </div>
        </quotes-card>
      </div>
    </div>
    <div class="row mt-2">
      <div class="col-12 col-sm-12 col-md-8">
        <recentActivities></recentActivities>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader'
import Navbar from '@/components/admin/AdminNavBar'
import quotesCard from '@/components/vendor/QuotesCard'
import recentActivities from '@/components/vendor/RecentActivitiesTable'
export default {
  name: 'AdminDashboard',
  components: {
    Header,
    Navbar,
    quotesCard,
    recentActivities
  }
}
</script>

<style scoped>
.col-6 {
  padding-right: 0;
}
.card-one {
  background-color: #b5e5ee;
  height: 100px;
}
.card-two {
  background-color: #fbe6ba;
  height: 100px;
}
.card-three {
  background-color: #cef2d1;
  height: 100px;
}
.card-four {
  background-color: #f9c5c1;
  height: 100px;
}
.card-text {
  font-size: 14px;
}
</style>

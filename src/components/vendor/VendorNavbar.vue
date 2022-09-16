<template>
  <div class="secondNav">
    <div id="container-fluid">
      <div class="navbar navbar-expand-sm navbar-info m-0 p-0">
        <button class="navbar-toggler text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#sideNav"
        aria-controls="sideNav" aria-expanded="false" aria-label="Toggle side navigation">
          <i class="fa-solid fa-bars text-dark"></i>
        </button>
        <!-- <div class="container"> -->
        <div class="collapse navbar-collapse" id="sideNav">
          <ul class="navbar-nav w-100 justify-content-between mx-2" id="sideNav">
            <li class="nav-item">
              <router-link :to="{name: 'vendor-dashboard'}" class="nav-link">DASHBOARD</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'VendorRequestForQuotes'}" class="nav-link">REQUEST FOR QUOTES</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'VendorPurchaseOrders'}" class="nav-link">PURCHASE ORDER</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'IssueResolution'}" class="nav-link">ISSUE RESOLUTION</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'VendorPersonalDetails'}" class="nav-link">PROFILE</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.secondNav {
  margin-top: 60px;
  position: fixed;
  margin-top: 60px;
  height: 40px;
  left: 0;
  right: 0;
  z-index: 100;
}
@media(max-height:750px) {
  .secondNav {
  margin-top: 60px;
  position: fixed;
  margin-top: 60px;
  height: 30px;
  left: 0;
  right: 0;
  z-index: 100;
  }
}
.secondNav .navbar {
  background-color: rgb(9, 168, 197);
}
#sideNav {
  background-color: rgb(9, 168, 197);
}
#sideNav a.nav-link {
  font-size: 15px;
  color: rgb(215, 215, 215);
}
#sideNav a.router-link-active, #sideNav a.router-link-exact-active {
  color: #fff;
  font-weight: 700;
}
</style>

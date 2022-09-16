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
              <router-link :to="{name: 'SiteAdministration'}" class="nav-link fw-bold">SITE ADMINISTRATION</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'VendorsAdministration'}" class="nav-link fw-bold">VENDORS</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'PurchaseRequisitions'}" class="nav-link fw-bold">PURCHASE REQUISITIONS</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'RequestForQuotes'}" class="nav-link fw-bold">REQUEST FOR QUOTES</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'PurchaseOrder'}" class="nav-link fw-bold">PURCHASE ORDER</router-link>
            </li>
            <li class="nav-item">
              <router-link :to="{name: 'PurchaseDocument'}" class="nav-link fw-bold">PURCHASE DOCUMENT</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav-bar'
}
</script>

<style scoped>
.secondNav {
  margin-top: 60px;
  position: fixed;
  margin-top: 60px;
  height: 50px;
  left: 0;
  right: 0;
  z-index: 100;
}
.secondNav .navbar {
  background-color: rgb(218, 218, 218);
}
#sideNav {
  background-color: rgb(218, 218, 218);
}
#sideNav a.nav-link {
  font-size: 15px;
}
#sideNav a.router-link-active, #sideNav a.router-link-exact-active {
  color: rgb(9, 168, 197);
  border-bottom: 4px solid rgb(9, 168, 197);
}
</style>

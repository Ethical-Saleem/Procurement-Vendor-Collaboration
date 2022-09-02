<template>
  <div class="secondNav">
    <div id="container-fluid">
      <div class="navbar navbar-expand-sm navbar-info m-0 p-0">
        <button class="navbar-toggler text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#sideNav"
        aria-controls="sideNav" aria-expanded="false" aria-label="Toggle side navigation">
          <i class="fa-solid fa-bars"></i>
        </button>
        <!-- <div class="container"> -->
        <div class="collapse navbar-collapse" id="sideNav">
          <ul class="navbar-nav w-100 mx-3" id="sideNav">
            <li class="nav-item">
              <router-link to="/team-requisitions" class="nav-link fw-bold">TEAM'S REQUISITIONS</router-link>
            </li>
            <li class="nav-item mx-5">
              <router-link to="/user-requisitions" class="nav-link fw-bold">MY REQUISITIONS</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserNavbar'
}
</script>

<style>
.secondNav {
  margin-top: 60px;
  position: fixed;
  margin-top: 60px;
  left: 0;
  right: 0;
  z-index: 100;
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

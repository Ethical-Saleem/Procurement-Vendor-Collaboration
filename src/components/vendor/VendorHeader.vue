<template>
  <div class="navbar-header">
    <div class="navbar navbar-expand-sm navbar-dark h-100 py-0" id="firstNav">
      <!-- Container wrapper -->
      <div class="container-fluid h-100">
        <div class="container-fluid w-sm-75 px-0">
          <span class="navbar-brand text-white"><i class="fa-solid fa-house"></i></span>
          <span class="navbar-text title text-white">
            VENDOR COLLABORATION PORTAL
          </span>
          <button class="navbar-toggler text-white ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <!-- Collapsible wrapper -->
        <div class="collapse navbar-collapse w-50 h-100" id="navbarSupportedContent">
          <!-- Right links -->
          <ul class="navbar-nav w-100 h-100 mt-lg-0 d-flex" id="firstList">
            <li class="nav-item dropdown text-center mx-lg-1 h-100" id="navItem">
              <a class="nav-link dropdown-toggle text-white mt-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
                <i class="fa-solid fa-circle-plus"></i>
              </a>
              <!-- Dropdown menu -->
              <ul class="dropdown-menu dropdown-menu-center dropdown-menu-dark border p-1" aria-labelledby="navbarDropdown" style="width:99%">
                <li>
                  <a href="" class="dropdown-item small" type="button" data-bs-toggle="modal"
                   data-bs-target="#newRequisition">
                    Waybill
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item small" type="button">
                    Invoice
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item small" type="button">
                    Payment Receipt
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item small" type="button">
                    Certificate of <br>Completion
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item small" type="button">
                    Add New User
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item text-center mx-lg-1" id="navItem">
              <router-link to="/user-notifications" class="nav-link text-white mt-2">
                <i class="fas fa-bell fa-lg mb-1"></i>
              </router-link>
            </li>
            <li class="nav-item dropdown text-center mx-lg-1 text-white" id="navItem">
              <a class="nav-link dropdown-toggle text-white mt-2" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
              aria-expanded="false">
                <i class="fa-solid fa-user"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-center dropdown-menu-dark" aria-labelledby="navbarDropdown" style="width:99%;">
                <li>
                  <a href="#" class="dropdown-item small">
                   Company Profile
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item small" data-bs-toggle="modal">
                   User Profile
                  </a>
                </li>
                <li>
                  <a href="#" class="dropdown-item small" data-bs-toggle="modal">
                   Change Password
                  </a>
                </li>
                <li>
                  <router-link to="/Sign-in" class="dropdown-item small">Sign out</router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      <!-- Collapsible wrapper -->
      </div>
    <!-- Container wrapper -->
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar-header {
  height: 60px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1002;
}
.navbar-dark, .navbar-header .navbar-collapse {
  background-color: rgb(0, 0, 0);
  color: #fff;
}
.navbar-brand, .title {
  font-size: 20px;
}
.navbar-text a {
  text-decoration: none;
}
#navItem {
  border-left: 1px solid #ccc;
  width: 33.33%
}
</style>

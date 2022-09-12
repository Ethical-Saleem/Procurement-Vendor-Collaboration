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
      <ul class="nav tabs mb-0" id="vendors-tab" role="tablist">
        <li class="nav-item fw-bold mx-3">
          <router-link class="nav-link router-link-active" :to="{name: 'VendorsAdministration'}">
            Supplier List
          </router-link>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" href="#createNewSupplier" data-bs-toggle="modal"
           role="button" aria-controls="new-supplier">
            Create New Supplier
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" href="#addUserSupplier" data-bs-toggle="modal"
           role="button" aria-controls="add-user-for-supplier">
            Add User For Supplier
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" href="#passwordReset" data-bs-toggle="modal"
           role="button" aria-controls="password-reset">
            User Password Reset
          </a>
        </li>
      </ul>
    </div>
    <div class="container-fluid my-3 px-0">
      <div class="d-sm-flex">
        <div class="col-sm-3 col-lg-3 col-xl-3">
          <div class="card" id="supplierCard">
            <div class="card-body users-card">
              <p class="fw-bold mb-0" style="font-size:18px;">
                {{ companyName }}
              </p>
              <div class="my-4">
                <p class="title my-4">Address</p>
                <p class="detail">{{ companyAddress }}</p>
                <hr>
              </div>
              <div class="my-4">
                <p class="title my-4">Email Address</p>
                <p class="detail">{{ companyEmail }}</p>
                <hr>
              </div>
              <div class="my-4">
                <p class="title my-4">Phone Number</p>
                <p class="detail">{{ companyPhone }}</p>
              </div>
              <hr>
              <div class="my-4">
                <div class="card" id="rgbButton">
                  <div class="card-body rgbCard">
                    <p class="card-title">Users</p>
                    <p class="card-text">6</p>
                  </div>
                </div>
              </div>
              <div class="mt-4 mb-5">
                <div class="card" id="rgbButton">
                  <div class="card-body rgbCard">
                    <p class="card-title">User Request</p>
                    <p class="card-text">4</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-sm-9 col-lg-8 col-xl-8">
          <div class="card">
            <div class="card-body users-card">
              <div class="container-fluid">
                <p class="fw-bold">Users List</p>
                <div class="table-responsive">
                  <vendor-user-list></vendor-user-list>
                </div>
              </div>
              <div class="container-fluid mt-5">
                <p class="fw-bold">New User Creation Request</p>
                <div class="table-responsive">
                  <user-creation-list></user-creation-list>
                </div>
              </div>
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
import vendorUserList from '@/components/admin/VendorUsersList'
import userCreationList from '@/components/admin/VendorUserCreationList.vue'
import supplierData from '@/data/suppliers.json'

export default {
  name: 'VendorProfile',
  components: {
    Header,
    Navbar,
    vendorUserList,
    userCreationList
  },
  props: {
    company_name: {
      type: String
    }
  },
  data () {
    return {
      activeItem: 'supplierList',
      suppliers: supplierData,
      companyName: 'XYZ Corporations',
      companyAddress: 'God\'s Grace Plaza, 65 Allen Ave, Allen 101233, Ikeja, Lagos, Nigeria',
      companyEmail: 'xyzcorporations@gmail.com',
      companyPhone: '08033256967'
    }
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style scoped>
.users-card {
  background: #dadada;
}
.users-card table {
  background-color: #fff;
}
#supplierCard {
  margin-right: 20px;
}
.card .users-card p.title {
  font-size: 16px;
  font-weight: 700;
}
.card .users-card p.detail {
  font-size: 13px;
}
.rgbCard {
  background-color: rgb(9, 168, 197);
  color: #fff;
  border-radius: 8px;
}
p.card-title {
  font-size: 16px;
}
p.card-text {
  font-size: 14px;
}
</style>

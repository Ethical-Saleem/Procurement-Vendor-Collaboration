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
    <div class="row">
      <ul class="nav tabs mb-0" id="vendors-tab" role="tablist">
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('supplierList')" :class="{ active: isActive('supplierList') }"
           id="pending-reqs" href="#supplierList" role="tab"
           aria-controls="suppliers-list" aria-selected="true">
            Supplier List
          </a>
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
    <div class="container-fluid my-4">
      <div class="tab-content" id="vendors-content">
        <div class="tab-pane fade" :class="{ 'active show': isActive('supplierList') }"
         id="supplierList" role="tabpanel" aria-labelledby="admin-users">
           <suppliers-list></suppliers-list>
        </div>
      </div>
    </div>
  </div>
  <div class="container-fluid">
    <div class="modal" id="createNewSupplier" tabindex="-1" aria-labelledby="new-supplier" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body default">
            <div class="mx-4">
              <h5 class="text-center new-supplier-text mt-4 mb-3">
                Add New Supplier
              </h5>
              <create-supplier></create-supplier>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="modal" id="addUserSupplier" tabindex="-1" aria-labelledby="new-supplier" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-body default">
            <div class="mx-4">
              <h5 class="text-center new-supplier-text mt-4 mb-3">
                Add User Information
              </h5>
              <add-user-supplier></add-user-supplier>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--<div class="modal" tabindex="-1" id="passwordReset" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body new-requisition">
            <div class="">
              <div class="mx-4 mb-2 py-3">
                <p class="fw-bold text-center" style="font-size:20px">
                  User Password Change
                </p>
                <div class="">
                  <password-reset></password-reset>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'
import suppliersList from '@/components/admin/SupplierList.vue'
import createSupplier from '@/components/admin/NewSupplier.vue'
import addUserSupplier from '@/components/admin/AddUserSupplier.vue'
// import passwordReset from '@/components/PasswordChange.vue'

export default {
  name: 'vendors-administration',
  components: {
    Header,
    Navbar,
    suppliersList,
    createSupplier,
    addUserSupplier
    // passwordReset
  },
  data () {
    return {
      activeItem: 'supplierList'
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

<style>
h5.new-supplier-text {
  font-size: 22px;
  font-weight: 700
}
.default {
  background-color: #f8f8f8;
}
</style>

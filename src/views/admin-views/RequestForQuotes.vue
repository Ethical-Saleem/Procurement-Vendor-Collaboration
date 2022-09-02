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
      <div class=" my-2">
      <router-link to="/request-for-quotes/create-new-rfq" class="btn btn-sm whiteButton shadow px-3">
        Create New RFQ
      </router-link>
      <button class="btn btn-sm whiteButton shadow mx-4 px-3"
      data-bs-toggle="modal" data-bs-target="#importPermission">
        Upload Bulk RFQs
      </button>
      </div>
    </div>
    <div class="container-fluid px-0 my-4">
      <quote-list></quote-list>
    </div>
  </div>
  <div class="">
    <div class="modal" tabindex="-1" id="importPermission" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="width:400px;">
        <div class="modal-content">
          <div class="modal-body import text-center">
            <div class="">
              <import-permission></import-permission>
            </div>
          </div>
          <div class="modal-footer" style="background-color:#dadada;">
            <div class="float-end">
              <button class="btn btn-sm shadow mx-2 whiteButton" data-bs-dismiss="modal">
                Cancel
              </button>
              <button class="btn btn-sm shadow mx-2 rgbButton">
                Submit
              </button>
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
import quoteList from '@/components/admin/QuotesList.vue'
import importPermission from '@/components/admin/ImportPermissionForm.vue'

export default {
  name: 'request-for-quotes',
  components: {
    Header,
    Navbar,
    quoteList,
    importPermission
  }
}
</script>

<style>

</style>

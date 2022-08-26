<template>
  <Header></Header>
  <navbar></navbar>
  <div class="container-fluid main-content">
    <div class="row">
      <div class=" my-2">
      <router-link to="/create-new-rfq" class="btn btn-sm whiteButton shadow px-3">
        Create New RFQ
      </router-link>
      <button class="btn btn-sm whiteButton shadow mx-4 px-3">
        Upload Bulk RFQs
      </button>
      </div>
    </div>
    <div class="container-fluid px-0 my-4">
      <quote-list></quote-list>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'
import quoteList from '@/components/QuotesList.vue'

export default {
  name: 'request-for-quotes',
  components: {
    Header,
    Navbar,
    quoteList
  }
}
</script>

<style>

</style>

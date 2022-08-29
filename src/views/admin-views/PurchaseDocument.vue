<template>
  <Header></Header>
  <navbar></navbar>
  <div class="main-content">
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'

export default {
  name: 'purchase-document',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>

</style>

<template>
  <Header></Header>
  <navbar></navbar>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'

export default {
  name: 'purchase-order',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>

</style>

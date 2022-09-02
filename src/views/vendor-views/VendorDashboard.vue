<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content"></div>
</template>

<script>
import Header from '@/components/vendor/VendorHeader'
import Navbar from '@/components/vendor/VendorNavbar'

export default {
  name: 'VendorDashboard',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>

</style>

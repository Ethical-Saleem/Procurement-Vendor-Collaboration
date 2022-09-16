<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="conatiner-fluid main-content px-0">
    <actionNav
    title="Change Password"
    ></actionNav>
  </div>
</template>

<script>
import Header from '@/components/vendor/VendorHeader'
import Navbar from '@/components/vendor/VendorNavbar'
import actionNav from '@/components/vendor/ActionNav'

export default {
  name: 'ChangePassword',
  components: {
    Header,
    Navbar,
    actionNav
  }
}
</script>

<style scoped>
.main-content{
  padding-top: 100px;
  overflow-x: auto;
  font-size: 16px;
}
</style>

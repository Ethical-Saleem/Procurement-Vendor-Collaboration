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
  <div class="container-fluid main-content"></div>
</template>

<script>
import Header from '@/components/admin/AdminHeader'
import Navbar from '@/components/admin/AdminNavBar'
export default {
  name: 'AdminDashboard',
  components: {
    Header,
    Navbar
  }
}
</script>

<style>

</style>

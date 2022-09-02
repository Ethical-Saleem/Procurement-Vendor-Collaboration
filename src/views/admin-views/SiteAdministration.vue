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
          <a class="nav-link" @click.prevent="setActive('adminUsers')" :class="{ active: isActive('adminUsers') }"
           id="pending-reqs" href="#adminUsers" role="tab"
           aria-controls="suppliers-list" aria-selected="true">
            Admin Users
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('userRoles')" :class="{ active: isActive('userRoles') }"
           id="accepted-reqs" href="#userRoles" role="tab"
           aria-controls="new-supplier" aria-selected="false">
            User Roles
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('userPermissions')" :class="{ active: isActive('userPermissions') }"
           id="accepted-reqs" href="#userPermissions" role="tab"
           aria-controls="new-supplier" aria-selected="false">
            User Permissions
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <button class="btn btn-sm shadow whiteButton px-3 mt-2" role="button"
           aria-controls="approval-workflow">
            Approval Workflow
          </button>
        </li>
      </ul>
    </div>
    <div class="container-fluid my-4">
      <div class="tab-content" id="vendors-content">
        <div class="tab-pane fade" :class="{ 'active show': isActive('adminUsers') }"
         id="adminUsers" role="tabpanel" aria-labelledby="admin-users">
           <admin-user></admin-user>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('userRoles') }"
         id="userRoles" role="tabpanel" aria-labelledby="user-roles">
           <user-role></user-role>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('userPermissions') }"
         id="userPermissions" role="tabpanel" aria-labelledby="user-permissions">
           <user-permission></user-permission>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'
import userRole from '@/components/admin/UserRoles.vue'
import adminUser from '@/components/admin/AdminUsers.vue'
import userPermission from '@/components/admin/UserPermission.vue'

export default {
  name: 'site-administration',
  components: {
    Header,
    Navbar,
    userRole,
    adminUser,
    userPermission
  },
  data () {
    return {
      activeItem: 'userPermissions'
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
.tabs a {
  color: #000;
  font-size: 14px;
}
.tabs a.active {
  color: rgb(9, 168, 197);
  border-bottom: 4px solid rgb(9, 168, 197);
}
.tabs a:hover {
  color: #000;
}
</style>

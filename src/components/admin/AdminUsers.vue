<template>
  <b-table
  bordered
  hover
  :items="adminUsers"
  :fields="fields">
  </b-table>
</template>

<script>

export default {
  name: 'admin-users',
  data () {
    return {
      fields: [
        {
          key: 'admin_users',
          label: 'ADMIN USERS',
          sortable: true
        },
        {
          key: 'user_role',
          label: 'USER ROLE',
          sortable: false
        },
        {
          key: 'user_type',
          label: 'USER TYPE',
          sortable: false
        }
      ],
      adminUsers: [
        {
          admin_users: 'Oluwaseyi Yetunde',
          user_role: 'Basic',
          user_type: 'Vendor'
        },
        {
          admin_users: 'Alabi Tobi',
          user_role: 'Approver',
          user_type: 'Vendor'
        },
        {
          admin_users: 'Oluwaseyi Yetunde',
          user_role: 'Uploader',
          user_type: 'Employee'
        },
        {
          admin_users: 'Alabi Tobi',
          user_role: 'Sys Admin',
          user_type: 'Vendor'
        },
        {
          admin_users: 'Alabi Tobi',
          user_role: 'Manager',
          user_type: 'Employee'
        },
        {
          admin_users: 'Alabi Tobi',
          user_role: 'Lead',
          user_type: 'Employee'
        },
        {
          admin_users: 'Oluwaseyi Yetunde',
          user_role: 'Supervisor',
          user_type: 'Vendor'
        }
      ]
    }
  }
}
</script>

<style>

</style>

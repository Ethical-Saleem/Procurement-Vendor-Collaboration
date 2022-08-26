<template>
  <b-table
  responsive
  bordered
  hover
  :items="userRoles"
  :fields="fields"
  >
  </b-table>
</template>

<script>

export default {
  name: 'user-role',
  data () {
    return {
      fields: [
        {
          key: 'role_id',
          label: 'ROLE ID',
          sortable: false
        },
        {
          key: 'role_description',
          label: 'DESCRIPTION',
          sortable: false
        },
        {
          key: 'user_type',
          label: 'USER TYPE',
          sortable: false
        }
      ],
      userRoles: [
        {
          role_id: 'Basic',
          role_description: 'Basic User',
          user_type: 'Vendor'
        },
        {
          role_id: 'Approver',
          role_description: 'An approver of all results',
          user_type: 'Vendor'
        },
        {
          role_id: 'Uploader',
          role_description: 'Uploader of Documents',
          user_type: 'Vendor'
        },
        {
          role_id: 'Sys Admin',
          role_description: 'System Administrator',
          user_type: 'Employee'
        },
        {
          role_id: 'Manager',
          role_description: 'To approve',
          user_type: 'Employee'
        },
        {
          role_id: 'Lead',
          role_description: 'Super User',
          user_type: 'Employee'
        },
        {
          role_id: 'Supervisor',
          role_description: 'To review',
          user_type: 'Vendor'
        }
      ]
    }
  }
}
</script>

<style>

</style>

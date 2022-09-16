<template>
  <div class="">
    <p class="h4">Recent Activities</p>
    <b-table
    responsive
    border
    small
    :fields="fields"
    :items="activities"
    ></b-table>
  </div>
</template>

<script>
export default {
  name: 'RecentActivities',
  data () {
    return {
      fields: [
        {
          key: 'activity',
          label: 'Activities',
          sortable: true
        },
        {
          key: 'purchase_code',
          label: 'Purchase Code',
          sortable: true
        },
        {
          key: 'status',
          label: 'Status'
        },
        {
          key: 'date',
          label: 'Date'
        },
        {
          key: 'bidding',
          label: 'Bidding'
        }
      ],
      activities: []
    }
  }
}
</script>

<style scoped>

</style>

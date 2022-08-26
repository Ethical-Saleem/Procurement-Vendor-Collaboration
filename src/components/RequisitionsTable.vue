<template>
  <div class="table-responsive">
    <b-table responsive bordered hover :items="requisitions" :fields="fields"></b-table>
  </div>
</template>

<script>
export default {
  name: 'RequisitionTable',
  props: {
    requisitions: Array
  },
  data () {
    return {
      fields: [
        {
          key: 'num',
          label: 'NO',
          sortable: true
        },
        {
          key: 'date',
          label: 'DATE',
          sortable: true
        },
        {
          key: 'requester',
          label: 'REQUESTER NAME',
          sortable: true
        },
        {
          key: 'unit_code',
          label: 'UNIT CODE',
          sortable: true
        },
        {
          key: 'description',
          label: 'DESCRIPTION',
          sortable: false
        },
        {
          key: 'status',
          label: 'STATUS',
          sortable: true
        }
      ]
    }
  }
}
</script>

<style>

</style>

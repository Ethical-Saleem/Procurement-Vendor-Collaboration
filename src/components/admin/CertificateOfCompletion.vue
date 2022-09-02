<template>
  <b-table
  responsive
  hover
  bordered
  :fields="fields"
  :items="certificateOfCompletion"
  >
  </b-table>
</template>

<script>
export default {
  name: 'CertificateOfCompletion',
  data () {
    return {
      fields: [
        {
          key: 'upload_against',
          label: 'Upload Against',
          sortable: true
        },
        {
          key: 'reference_num',
          label: 'Reference No.',
          sortable: true
        },
        {
          key: 'last_viewed',
          label: 'Last Viewed',
          sortable: true
        },
        {
          key: 'vendor_name',
          label: 'Vendor Name',
          sortable: true
        },
        {
          key: 'purchase_order_num',
          label: 'Purchase Order No.',
          sortable: true
        },
        {
          key: 'action',
          label: 'Action'
        }
      ],
      certificateOfCompletion: []
    }
  }
}
</script>

<style>

</style>

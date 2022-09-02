<template>
  <b-table
  responsive
  hover
  bordered
  :fields="fields"
  :items="paymentReceipts"
  >
  </b-table>
</template>

<script>
export default {
  name: 'PaymentReceipts',
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
      paymentReceipts: []
    }
  }
}
</script>

<style>

</style>

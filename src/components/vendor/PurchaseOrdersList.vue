<template>
  <b-table
  responsive
  bordered
  hover
  small
  :fields="fields"
  :items="purchaseOrders"
  >
    <template #cell(purchase_code) = data>
      <div class="">
        <router-link :to="{name: 'BidPurchaseOrder', params: {purchase_code: data.item.purchase_code} }">
          {{ data.item.purchase_code }}
        </router-link>
      </div>
    </template>
    <template #cell(description) = data>
      <div class="">
        {{ data.item.description }}
      </div>
    </template>
    <template #cell(posting_date) = data>
      <div class="">
        {{ data.item.posting_date }}
      </div>
    </template>
    <template #cell(order_date) = data>
      <div class="">
        {{ data.item.order_date }}
      </div>
    </template>
    <template #cell(status) = data>
      <div class="">
        {{ data.item.status }}
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'PurchaseOrders',
  data () {
    return {
      fields: [
        {
          key: 'purchase_code',
          label: 'PURCHASE CODE',
          sortable: true
        },
        {
          key: 'description',
          label: 'POSTING DESCRIPTION',
          sortable: true
        },
        {
          key: 'posting_date',
          label: 'POSTING DATE',
          sortable: true
        },
        {
          key: 'order_date',
          label: 'ORDER DATE',
          sortable: true
        },
        {
          key: 'status',
          label: 'STATUS',
          sortable: true
        }
      ],
      purchaseOrders: [
        {
          purchase_code: 'PO2201001',
          description: 'Supply of Laptops',
          posting_date: '2022-01-28',
          order_date: '2022-02-05',
          status: 'Accepted'
        },
        {
          purchase_code: 'PO4235417',
          description: 'Supply of Printers',
          posting_date: '2022-01-28',
          order_date: '2022-02-05',
          status: 'Accepted'
        },
        {
          purchase_code: 'PO0009861',
          description: 'Supply of Furnitures',
          posting_date: '2022-01-28',
          order_date: '2022-02-05',
          status: 'Accepted'
        },
        {
          purchase_code: 'PO2209324',
          description: 'Supply of Stationaries',
          posting_date: '2022-01-28',
          order_date: '2022-02-05',
          status: 'Accepted'
        },
        {
          purchase_code: 'PO4230547',
          description: 'Supply of Printers',
          posting_date: '2022-01-28',
          order_date: '2022-02-05',
          status: 'Accepted'
        }
      ]
    }
  }
}
</script>

<style scoped>
a, a:hover {
  text-decoration: none;
  color: #000;
}
</style>

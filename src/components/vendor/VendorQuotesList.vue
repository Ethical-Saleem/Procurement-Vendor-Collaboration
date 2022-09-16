<template>
  <b-table
  responsive
  bordered
  hover
  small
  :fields="fields"
  :items="bidInvitations"
  >
    <template #cell(bid_num) = data>
      <div class="">
        <router-link :to="{name: 'BidInvitationDetails', params:{ bid_num: data.item.bid_num } }">
          {{ data.item.bid_num }}
        </router-link>
      </div>
    </template>
    <template #cell(document) = data>
      <div class="">
        {{ data.item.document }}
      </div>
    </template>
    <template #cell(expiry) = data>
      <div class="">
        {{ data.item.expiry }}
      </div>
    </template>
    <template #cell(status) = data>
      <div class="">
        {{ data.item.status }}
      </div>
    </template>
    <template #cell(bid_value) = data>
      <div class="">
        {{ data.item.bid_value }}
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'BidInvitation',
  data () {
    return {
      fields: [
        {
          key: 'bid_num',
          label: 'BID NO',
          sortable: true
        },
        {
          key: 'document',
          label: 'DOCUMENT TITLE',
          sortable: true
        },
        {
          key: 'expiry',
          label: 'EXPIRATION DATE & TIME',
          sortable: true
        },
        {
          key: 'status',
          label: 'STATUS',
          sortable: true
        },
        {
          key: 'bid_value',
          label: 'BID VALUE',
          sortable: true
        }
      ],
      bidInvitations: [
        {
          bid_num: 'RFQ0109',
          document: 'Supply of Stationaries',
          expiry: '2022-01-28 14:53 GMT',
          status: 'Accepted',
          bid_value: 'NGN39,595'
        },
        {
          bid_num: 'RFQ0038',
          document: 'Supply of Printers',
          expiry: '2022-01-28 14:53 GMT',
          status: 'Accepted',
          bid_value: 'NGN102,680'
        },
        {
          bid_num: 'RFQ0820',
          document: 'Supply of Laptops',
          expiry: '2022-01-28 14:53 GMT',
          status: 'Accepted',
          bid_value: 'NGN189,500'
        },
        {
          bid_num: 'RFQ1833',
          document: 'Supply of Furnitures',
          expiry: '2022-01-28 14:53 GMT',
          status: 'Pending',
          bid_value: 'NGN97,600'
        },
        {
          bid_num: 'RFQ2098',
          document: 'Supply of Toiletries',
          expiry: '2022-01-28 14:53 GMT',
          status: 'Pending',
          bid_value: 'NGN45,975'
        }
      ]
    }
  }
}
</script>

<style>
a, a:hover {
  text-decoration: none;
  color: #000;
}
</style>

<template>
  <b-table responsive bordered hover :items="quotes" :fields="fields" >
    <template #cell(bid_num)="data">
      <div @click="display(data.item)" class="bid-num">
        <router-link :to="{name: 'RfqFullDetail', params:{bid_num: data.item.bid_num} }">
          <span class="">{{ data.item.bid_num }}</span>
        </router-link>
      </div>
    </template>
    <template #cell(supplier_name)="data">
      {{data.item.supplier_name}}
    </template>
    <template #cell(description)="data">
      {{data.item.description}}
    </template>
    <template #cell(expiry)="data">
      {{data.item.expiry}}
    </template>
    <template #cell(status)="data">
      {{data.item.status}}
    </template>
    <template #cell(bid_value)="data">
      {{data.item.bid_value}}
    </template>
  </b-table>
</template>

<script>

export default {
  name: 'quotes-list',
  data () {
    return {
      fields: [
        {
          key: 'bid_num',
          label: 'BID NO',
          sortable: true
        },
        {
          key: 'supplier_name',
          label: 'SUPPLIER NAME',
          sortable: true
        },
        {
          key: 'description',
          label: 'DESCRIPTION',
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
      quotes: [
        {
          bid_num: 'SD1546',
          supplier_name: 'Mikton Technology Dolutions Limited',
          description: 'Supply of Laptops',
          expiry: '22-01-28 14:53 GMT',
          status: 'Accepted',
          bid_value: '2,000,000'
        },
        {
          bid_num: 'SD1546',
          supplier_name: 'Lodash & Co Nigeria Plc',
          description: 'Supply of Laptops',
          expiry: '22-01-28 14:53 GMT',
          status: 'Pending',
          bid_value: '1,850,000'
        },
        {
          bid_num: 'SD1546',
          supplier_name: 'XYZ Corporations',
          description: 'Supply of Laptops',
          expiry: '22-01-28 14:53 GMT',
          status: 'Accepted',
          bid_value: '2,405,870'
        },
        {
          bid_num: 'SP4381',
          supplier_name: 'Laplace Infosys Limited',
          description: 'Supply of Stationaries',
          expiry: '22-01-28 14:53 GMT',
          status: 'Pending',
          bid_value: '3,790,100'
        },
        {
          bid_num: 'SP4381',
          supplier_name: 'ABC Nigeria Limited',
          description: 'Supply of Stationaries',
          expiry: '22-01-28 14:53 GMT',
          status: 'Accepted',
          bid_value: '3,547,000'
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

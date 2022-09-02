<template>
  <b-table
  responsive
   bordered
   hover
   :items="pendingRequisitions"
   :fields="fields"
   >
    <template #cell(num)="data">
      {{data.item.num}}
    </template>
    <template #cell(date)="data">
      {{data.item.date}}
    </template>
    <template #cell(requester)="data">
      {{data.item.requester}}
    </template>
    <template #cell(unit_code)="data">
      {{data.item.unit_code}}
    </template>
    <template #cell(description)="data">
      {{data.item.description}}
    </template>
    <template #cell(status)="data">
      {{data.item.status}}
    </template>
  </b-table>
</template>

<script>

export default {
  name: 'pending-requisitions',
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
      ],
      pendingRequisitions: [
        {
          num: 'RFQ0015',
          date: '2022-02-03',
          requester: 'Oluwatobi Yetunde',
          unit_code: '0152',
          description: 'Supply of Printers',
          status: 'Pending'
        },
        {
          num: 'RFQ0027',
          date: '2022-02-03',
          requester: 'Oluwaseyi Yetunde',
          unit_code: '0078',
          description: 'Supply of Toileteries',
          status: 'Pending'
        },
        {
          num: 'RFQ0032',
          date: '2022-02-03',
          requester: 'Oluwatobi Yetunde',
          unit_code: '0149',
          description: 'Supply of Laptops',
          status: 'Pending'
        },
        {
          num: 'RFQ0081',
          date: '2022-02-03',
          requester: 'Oluwaseyi Yetunde',
          unit_code: '0634',
          description: 'Supply of Stationaries',
          status: 'Pending'
        },
        {
          num: 'RFQ0107',
          date: '2022-02-03',
          requester: 'Oluwatobi Yetunde',
          unit_code: '1098',
          description: 'Supply of Furnitures',
          status: 'Pending'
        }
      ]
    }
  }
}
</script>

<style>

</style>

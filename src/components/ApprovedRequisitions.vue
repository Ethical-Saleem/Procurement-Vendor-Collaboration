<template>
  <b-table
  responsive
   bordered
   hover
   :items="approvedRequisitions"
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
  name: 'approved-requisitions',
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
      approvedRequisitions: [
        {
          num: 'RFQ0015',
          date: '2022-02-03',
          requester: 'Oluwatobi Yetunde',
          unit_code: '0152',
          description: 'Supply of Printers',
          status: 'Approved'
        },
        {
          num: 'RFQ0027',
          date: '2022-02-03',
          requester: 'Oluwaseyi Yetunde',
          unit_code: '0078',
          description: 'Supply of Toileteries',
          status: 'Approved'
        },
        {
          num: 'RFQ0032',
          date: '2022-02-03',
          requester: 'Oluwatobi Yetunde',
          unit_code: '0149',
          description: 'Supply of Laptops',
          status: 'Approved'
        },
        {
          num: 'RFQ0081',
          date: '2022-02-03',
          requester: 'Oluwaseyi Yetunde',
          unit_code: '0634',
          description: 'Supply of Stationaries',
          status: 'Approved'
        },
        {
          num: 'RFQ0107',
          date: '2022-02-03',
          requester: 'Oluwatobi Yetunde',
          unit_code: '1098',
          description: 'Supply of Furnitures',
          status: 'Approved'
        }
      ]
    }
  }
}
</script>

<style>
.table thead td {
  font-size: 14px;
}
.table tbody td {
  font-size: 12px;
}
</style>

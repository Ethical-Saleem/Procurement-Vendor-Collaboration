<template>
  <base-table>
    <template #details>
      <thead>
        <tr class="table-active">
          <td v-for="field in fields" :key="field.text" @click="sortTable(field.text)">{{ field.value }}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in tableData" :key="item.num">
          <td v-for="field in fields" :key="field.text">{{ item[field.text] }}</td>
        </tr>
      </tbody>
    </template>
  </base-table>
</template>

<script>
import BaseTable from '@/components/BaseTable.vue'
export default {
  name: 'approved-team-requisitions',
  components: {
    BaseTable
  },
  data () {
    return {
      fields: [
        { text: 'num', value: 'NO' },
        { text: 'date', value: 'DATE' },
        { text: 'requester', value: 'REQUESTER NAME' },
        { text: 'unit_code', value: 'UNIT CODE' },
        { text: 'description', value: 'DESCRIPTION' },
        { text: 'status', value: 'STATUS' }
      ],
      tableData: [
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

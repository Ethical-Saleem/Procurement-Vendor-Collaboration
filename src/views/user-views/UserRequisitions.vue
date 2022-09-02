<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content">
    <div class="container-fluid my-3">
      <button class="btn btn-sm whiteButton shadow fw-bold px-3"
      data-bs-toggle="modal" data-bs-target="#newRequisition">
        Add New Requisition
      </button>
    </div>
    <div class="container-fluid my-4">
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
    </div>
  </div>
  <div class="modal" tabindex="-1" id="newRequisition" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-body new-requisition">
          <div class="">
            <div class="mx-4 mb-5 py-5">
              <p class="fw-bold text-center" style="font-size:20px">
                Add New Requisition
              </p>
              <div class="">
                <requisitionForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/user/UserHeader.vue'
import Navbar from '@/components/user/UserNavBar.vue'
import BaseTable from '@/components/BaseTable.vue'
import requisitionForm from '@/components/RequisitionForm.vue'

export default {
  name: 'user-requisitions',
  components: {
    Header,
    Navbar,
    BaseTable,
    requisitionForm
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
          status: 'Approved'
        }
      ]
    }
  }
}
</script>

<style>

</style>

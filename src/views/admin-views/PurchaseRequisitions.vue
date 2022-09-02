<template>
  <Header></Header>
  <navbar></navbar>
  <div class="container-fluid main-content">
    <div class="row">
      <ul class="nav tabs mb-0" id="vendors-tab" role="tablist">
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('pendingRequisitions')" :class="{ active: isActive('pendingRequisitions') }"
           id="pending-reqs" href="#pendingRequisitions" role="tab"
           aria-controls="suppliers-list" aria-selected="true">
            Pending Requisitions
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('approvedRequisitions')" :class="{ active: isActive('approvedRequisitions') }"
           id="accepted-reqs" href="#approvedRequisitions" role="tab"
           aria-controls="new-supplier" aria-selected="false">
            Approved Requisitions
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('pendingMyApproval')" :class="{ active: isActive('pendingMyApproval') }"
           id="accepted-reqs" href="#pendingMyApproval" role="tab"
           aria-controls="new-supplier" aria-selected="false">
            Requisitions Pending My Approval
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('myRequisitions')" :class="{ active: isActive('myRequisitions') }"
           role="tab" href="#myRequisitions" aria-controls="my-requisitions" aria-selected="false">
            My Requisitions
          </a>
        </li>
      </ul>
    </div>
    <div class="container-fluid my-4">
      <div class="tab-content" id="vendors-content">
        <div class="tab-pane fade" :class="{ 'active show': isActive('pendingRequisitions') }"
         id="pendingRequisitions" role="tabpanel" aria-labelledby="pending-requisitions">
           <pending-requisition></pending-requisition>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('approvedRequisitions') }"
         id="approvedRequisitions" role="tabpanel" aria-labelledby="approved-requisitions">
           <approved-requisition></approved-requisition>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('pendingMyApproval') }"
         id="pendingMyApproval" role="tabpanel" aria-labelledby="requsiitions-pending-my-approval">
           <requisitions-pending-approval></requisitions-pending-approval>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('myRequisitions') }"
         id="myRequisitions" role="tabpanel" aria-labelledby="my-requisitions">
           <my-requisition></my-requisition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/admin/AdminHeader.vue'
import Navbar from '@/components/admin/AdminNavBar.vue'
import pendingRequisition from '@/components/admin/PendingRequisitions.vue'
import approvedRequisition from '@/components/ApprovedRequisitions.vue'
import requisitionsPendingApproval from '@/components/admin/RequisitionsPendingMyApproval.vue'
import myRequisition from '@/components/admin/MyRequisitions.vue'

export default {
  name: 'purchase-requisitions',
  components: {
    Header,
    Navbar,
    pendingRequisition,
    approvedRequisition,
    requisitionsPendingApproval,
    myRequisition
  },
  data () {
    return {
      activeItem: 'pendingRequisitions',
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
  },
  methods: {
    isActive (menuItem) {
      return this.activeItem === menuItem
    },
    setActive (menuItem) {
      this.activeItem = menuItem
    }
  }
}
</script>

<style>

</style>

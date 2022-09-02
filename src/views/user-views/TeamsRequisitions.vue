<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content">
    <div class="row">
      <ul class="nav tabs mt-2 mb-0" id="vendors-tab" role="tablist">
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('pendingTeamRequisitions')" :class="{ active: isActive('pendingTeamRequisitions') }"
           id="pending-reqs" href="#pendingTeamRequisitions" role="tab"
           aria-controls="suppliers-list" aria-selected="true">
            Requisitions Pending My Approval
          </a>
        </li>
        <li class="nav-item fw-bold mx-3">
          <a class="nav-link" @click.prevent="setActive('approvedTeamRequisitions')" :class="{ active: isActive('approvedTeamRequisitions') }"
           id="accepted-reqs" href="#approvedTeamRequisitions" role="tab"
           aria-controls="new-supplier" aria-selected="false">
            My Approved Requisitions
          </a>
        </li>
      </ul>
    </div>
    <div class="container-fluid my-4">
      <div class="tab-content" id="vendors-content">
        <div class="tab-pane fade" :class="{ 'active show': isActive('pendingTeamRequisitions') }"
         id="pendingTeamRequisitions"
        role="tabpanel" aria-labelledby="pending-requisitions">
          <pending-requisitions></pending-requisitions>
        </div>
        <div class="tab-pane fade" :class="{ 'active show': isActive('approvedTeamRequisitions') }"
         id="approvedTeamRequisitions"
        role="tabpanel" aria-labelledby="accepted-requisitions">
          <approved-requisitions></approved-requisitions>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/user/UserHeader.vue'
import Navbar from '@/components/user/UserNavBar.vue'
import PendingRequisitions from '@/components/user/PendingTeamRequisitions.vue'
import ApprovedRequisitions from '@/components/user/ApprovedTeamRequisitions'

export default {
  name: 'teams-requisitions',
  components: {
    Header,
    Navbar,
    PendingRequisitions,
    ApprovedRequisitions
  },
  data () {
    return {
      activeItem: 'pendingTeamRequisitions'
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
.tabs a {
  color: #000;
}
.tabs a.active {
  color: rgb(9, 168, 197);
  border-bottom: 4px solid rgb(9, 168, 197);
}
.tabs a:hover {
  color: #000;
}
</style>

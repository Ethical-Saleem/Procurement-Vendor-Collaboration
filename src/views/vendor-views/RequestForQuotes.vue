<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content px-0">
    <actionNav
    title="Bid Invitation"
    ></actionNav>
    <div class="container-fluid d-sm-flex">
      <div class="col-sm-3 col-lg-2 h-100 my-2">
        <div class="card bidCard h-100">
          <div class="statuses my-2 mx-2">
            <div class="card status-card mb-2">
              <div class="card-body">
                <p class="title mb-1">Accepted</p>
                <p class="text mb-0">25</p>
              </div>
            </div>
            <div class="card status-card mb-2">
              <div class="card-body">
                <p class="title mb-1">Rejected</p>
                <p class="text mb-0">10</p>
              </div>
            </div>
            <div class="card status-card mb-2">
              <div class="card-body">
                <p class="title mb-1">Pending</p>
                <p class="text mb-0">5</p>
              </div>
            </div>
          </div>
          <div class="filters mb-2 mx-2">
            <div class="filter d-flex mb-2">
              <i class="fa-solid fa-filter-list"></i>
              <p class="mb-0">Filter</p>
            </div>
            <b-form-group
            label="Status"
            label-for="status-select"
            >
              <b-form-select
                id="status-select"
                v-model="status"
                :options="statusOptions"
                :aria-describedby="ariaDescribedby"
                class="w-100"
              >
                <template #first>
                  <option value="" disabled hidden>Any</option>
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group
            label="Data Range"
            label-for="data-range"
            >
              <b-form-select
                id="data-range"
                v-model="dataRange"
                :options="dataRangeOptions"
                :aria-describedby="ariaDescribedby"
                class="w-100"
              >
                <template #first>
                  <option value="" disabled hidden>Any</option>
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group
            label="Bid Value"
            label-for="bid-value"
            >
              <b-form-select
                id="bid-value"
                v-model="bidValue"
                :options="bidValueOptions"
                :aria-describedby="ariaDescribedby"
                class="w-100"
              >
                <template #first>
                  <option value="" disabled hidden>Any</option>
                </template>
              </b-form-select>
            </b-form-group>
            <div class="action float-end mb-4">
              <button class="btn btn-sm px-3 rgbButton shadow">
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-9 col-lg-10 h-100 my-2">
        <div class="container-fluid bid-table">
          <bidInvitation></bidInvitation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/vendor/VendorHeader'
import Navbar from '@/components/vendor/VendorNavbar'
import actionNav from '@/components/vendor/ActionNav'
import bidInvitation from '@/components/vendor/VendorQuotesList'

export default {
  name: 'RequestForQuotes',
  components: {
    Header,
    Navbar,
    actionNav,
    bidInvitation
  },
  data () {
    return {
      status: '',
      dataRange: '',
      bidValue: '',
      statusOptions: [
        { value: 'accepted', text: 'Accepted' },
        { value: 'rejected', text: 'Rejected' },
        { value: 'submitted', text: 'Submitted' },
        { value: 'pending', text: 'Pending' }
      ],
      dataRangeOptions: [
        { value: 'today', text: 'Today' },
        { value: 'yesterday', text: 'Yesterday' },
        { value: 'days ago', text: '7 days ago' },
        { value: 'last month', text: 'Last Month' }
      ],
      bidValueOptions: [
        { value: '1', text: 'NGN100,000 - NGN499,999' },
        { value: '2', text: 'NGN500,000 - NGN999,999' },
        { value: '3', text: 'NGN1,000,000 - NGN1,499,999' },
        { value: '4', text: 'NGN1,500,000 - NGN1,999,999' }
      ]
    }
  }
}
</script>

<style scoped>
.main-content{
  padding-top: 100px;
  overflow-x: auto;
  font-size: 16px;
}
.bidCard {
  background-color: #dadada;
}
.status-card {
  background-color: rgb(9, 168, 197);
  color: #fff;
  margin-top: 10px;
}
.status-card .title {
  font-size: 14px;
}
.status-card .text {
  font-size: 18px;
  font-weight: 700;
}
.filter {
  border: 2px solid rgb(9, 168, 197);
  border-radius: 5px;
}
.filter p {
  color: rgb(9, 168, 197);
  font-weight: 700;
}
.filters select {
  font-size: 13px;
}
.bid-table {
  padding-right: 0;
}
</style>

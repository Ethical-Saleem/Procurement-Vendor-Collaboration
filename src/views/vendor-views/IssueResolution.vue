<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content px-0">
    <actionNav
    title="Complaint Form"
    ></actionNav>
    <div class="container-fluid">
      <div class="card form-card my-4 m-3">
        <div class="col-7 mx-auto">
          <p class="h6 mb-4 mt-3">
            Please fill out the following form with your complaint.
            We will review your request and follow up with you as soon as possible.
          </p>
          <b-form class="mb-4">
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="First Name:"
                label-for="firstName"
                >
                  <b-form-input
                  id="firstName"
                  v-model="formData.firstName"
                  type="text"
                  placeholder="First Name"
                  required
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Last Name:"
                label-for="lastName"
                >
                  <b-form-input
                  id="lastName"
                  v-model="formData.lastName"
                  type="text"
                  placeholder="Last Name"
                  required
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <b-form-group
            label="Email Address:"
            label-for="email"
            >
              <b-form-input
              id="email"
              v-model="formData.email"
              type="email"
              placeholder="Email Address"
              required
              ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Phone Number:"
            label-for="phoneNumber"
            >
              <b-form-input
              id="phoneNumber"
              v-model="formData.phoneNumber"
              type="number"
              placeholder="Phone Number"
              required
              ></b-form-input>
            </b-form-group>
            <b-form-group
            label="Reason For Complaint:"
            label-for="justification"
            >
              <b-form-select
              id="justification"
              v-model="formData.justification"
              :options="complaintReason"
              class=""
              >
                <template #first>
                  <option value="" hidden>Reason For Complaint</option>
                </template>
              </b-form-select>
            </b-form-group>
            <b-form-group
            label="Please provide any details:"
            label-for="detailsTextarea"
            >
              <b-form-textarea
              id="detailsTextarea"
              v-model="formData.complaintDescription"
              placeholder="please provide any details"
              rows="4"
              max-rows="6"
              ></b-form-textarea>
            </b-form-group>
            <div class="mb-3">
              <button class="btn mb-4 px-3 rgbButton shadow">
                Save
              </button>
              <button class="btn mb-4 mx-3 px-3 whiteButton shadow">
                Cancel
              </button>
            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/vendor/VendorHeader'
import Navbar from '@/components/vendor/VendorNavbar'
import actionNav from '@/components/vendor/ActionNav'

export default {
  name: 'IssueResolution',
  components: {
    Header,
    Navbar,
    actionNav
  },
  data () {
    return {
      formData: {
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        justification: '',
        complaintDescription: ''
      },
      complaintReason: [
        { value: 'late-supply', text: 'Late Supply' },
        { value: 'payment-issue', text: 'Payment Issue' },
        { value: 'product-quality', text: 'Product Quality' },
        { value: 'others', text: 'Others' }
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
.form-card {
  background-color: #dadada;
}
</style>

<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content px-0">
    <actionNav
    title="Personal Information"
    ></actionNav>
    <div class="container-fluid">
      <div class="card form-card mx-3 my-2">
        <div class="card-body">
          <p class="h5 mb-3">
            Personal Details
          </p>
          <b-form class="profile-form mb-4">
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="User No:"
                label-for="userNo"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="userNo"
                  type="text"
                  v-model="vendorProfile.userNo"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Last Name:"
                label-for="lastName"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="lastName"
                  type="text"
                  v-model="vendorProfile.lastName"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="First Name:"
                label-for="firstName"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="firstName"
                  type="text"
                  v-model="vendorProfile.firstName"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Middle Name:"
                label-for="middleName"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="middleName"
                  type="text"
                  v-model="vendorProfile.middleName"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Date Of Birth:"
                label-for="dateOfBirth"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="dateOfBirth"
                  type="text"
                  v-model="vendorProfile.dateOfBirth"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Gender:"
                label-for="gender"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="gender"
                  type="text"
                  v-model="vendorProfile.gender"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Job Title:"
                label-for="jobTitle"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="jobTitle"
                  type="text"
                  v-model="vendorProfile.jobTitle"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Designation:"
                label-for="designation"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="designation"
                  type="text"
                  v-model="vendorProfile.designation"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Cadre:"
                label-for="cadre"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="cadre"
                  type="text"
                  v-model="vendorProfile.cadre"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Personal Email:"
                label-for="email"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="email"
                  type="email"
                  v-model="vendorProfile.email"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Phone Number:"
                label-for="phoneNumber"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="phoneNumber"
                  type="number"
                  v-model="vendorProfile.phoneNumber"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Mobile Number:"
                label-for="mobileNumber"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="mobileNumber"
                  type="number"
                  v-model="vendorProfile.mobileNumber"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Address 1:"
                label-for="addressOne"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="addressOne"
                  type="text"
                  v-model="vendorProfile.addressOne"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Address 2:"
                label-for="text"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="addressTwo"
                  type="text"
                  v-model="vendorProfile.addressTwo"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="City:"
                label-for="text"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="city"
                  type="text"
                  v-model="vendorProfile.city"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <b-form-group
                label="Post Code:"
                label-for="postCode"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="postCode"
                  type="number"
                  v-model="vendorProfile.postCode"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6">
                <b-form-group
                label="Company ID:"
                label-for="companyId"
                label-cols-sm="3"
                >
                  <b-form-input
                  id="companyId"
                  type="text"
                  v-model="vendorProfile.companyId"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="mt-2">
              <button class="btn px-3 rgbButton">
                Save
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
  name: 'VendorPersonalDetails',
  components: {
    Header,
    Navbar,
    actionNav
  },
  data () {
    return {
      vendorProfile: {
        userNo: 'USER0064',
        lastName: 'Oluwaseyi',
        firstName: 'Yetunde',
        middleName: 'Biola',
        dateOfBirth: '02-07-1984',
        gender: 'Female',
        jobTitle: 'Asst Manager',
        designation: 'HR',
        cadre: '',
        email: 'Oluwaseyi.Y@gmail.com',
        phoneNumber: '08023871007',
        mobileNumber: '',
        addressOne: '',
        addressTwo: '',
        city: 'Lagos',
        postCode: '100001',
        companyId: 'ED1233FGX7'
      }
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
.profile-form label {
  font-size: 13px;
}
.profile-form input {
  font-size: 13px;
}
</style>

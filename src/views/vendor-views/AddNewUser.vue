<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content px-0">
    <actionNav
    title="Add New User"
    ></actionNav>
    <div class="container-fluid">
      <div class="card form-card mx-3 my-3">
        <div class="card-body">
          <p class="h5 mb-3">
            New User Creation Request Form
          </p>
          <b-form class="new-user-form mb-4 mt-4">
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Gender:"
                label-for="gender"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="gender"
                  type="text"
                  v-model="newUser.gender"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="User Permission Group:"
                label-for="userPermissionGroup"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="userPermissionGroup"
                  type="text"
                  v-model="newUser.userPermissionGroup"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Last Name:"
                label-for="lastName"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="lastName"
                  type="text"
                  v-model="newUser.lastName"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="First Name:"
                label-for="firsttName"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="firstName"
                  type="text"
                  v-model="newUser.firstName"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Middle Name"
                label-for="middleName"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="middleName"
                  type="text"
                  v-model="newUser.middleName"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Telephone:"
                label-for="telephone"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="telephone"
                  type="number"
                  v-model="newUser.telephone"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Job Title:"
                label-for="jobTitle"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="jobTitle"
                  type="text"
                  v-model="newUser.jobTitle"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Manager"
                label-for="manager"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="manager"
                  type="text"
                  v-model="newUser.manager"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Requested By:"
                label-for="requestedBy"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="requestedBy"
                  type="text"
                  v-model="newUser.requestedBy"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="User Type:"
                label-for="userType"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="userType"
                  type="text"
                  v-model="newUser.userType"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Company Email:"
                label-for="companyEmail"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="companyEmail"
                  type="email"
                  v-model="newUser.companyEmail"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Company Name:"
                label-for="companyName"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="companyName"
                  type="text"
                  v-model="newUser.companyName"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="User Email:"
                label-for="userEmail"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="userEmail"
                  type="email"
                  v-model="newUser.userEmail"
                  ></b-form-input>
                </b-form-group>
              </div>
              <div class="col-sm-6 col-lg-4 mb-3">
                <b-form-group
                label="Comapny ID:"
                label-for="companyId"
                label-size="sm"
                label-cols-sm="5"
                >
                  <b-form-input
                  id="companyId"
                  type="text"
                  v-model="newUser.companyId"
                  ></b-form-input>
                </b-form-group>
              </div>
            </div>
            <div class="mt-2">
              <button
              class="btn px-3 rgbButton"
              >
                Request User Creation
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
  name: 'AddNewUser',
  components: {
    Header,
    Navbar,
    actionNav
  },
  data () {
    return {
      newUser: {
        gender: '',
        userPermissionGroup: '',
        lastName: '',
        firstName: '',
        middleName: '',
        telephone: '',
        jobTitle: '',
        Manager: '',
        requestedBy: '',
        userType: '',
        companyEmail: '',
        companyName: '',
        userEmail: '',
        companyId: ''
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
.new-user-form label {
  font-size: 13px;
}
.new-user-form input {
  font-size: 13px;
}
</style>

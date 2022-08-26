<template>
  <form action="" class="mb-5">
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">First Name</label>
        <form-input
        class="form-control"
        v-model="credentials.user_firstName"
        type="text"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Last Name</label>
        <form-input
        class="form-control"
        v-model="credentials.user_lastName"
        type="text"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Email Address</label>
        <form-input
        class="form-control"
        v-model="credentials.user_email"
        type="email"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Phone Number</label>
        <form-input
        class="form-control"
        v-model="credentials.user_phone"
        type="number"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Supplier ID</label>
        <form-input
        class="form-control"
        v-model="credentials.supplier_id"
        type="text"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Address</label>
        <form-input
        class="form-control"
        v-model="credentials.user_address"
        type="text"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Job Title</label>
        <form-input
        class="form-control"
        v-model="credentials.user_jobTitle"
        type="text"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Gender</label>
        <form-input
        class="form-control"
        v-model="credentials.user_gender"
        type="text"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">Default Password</label>
        <form-input
        class="form-control"
        v-model="credentials.user_password"
        type="password"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 mb-3">
        <label for="">User Role</label>
        <form-input
        class="form-control"
        v-model="credentials.user_role"
        type="text"
        ></form-input>
      </div>
    </div>
    <div class="float-end mt-3 mb-5">
      <button class="btn btn-sm rgbButton px-3">
        Submit
      </button>
    </div>
  </form>
</template>

<script>
import formInput from '@/components/FormInput.vue'

export default {
  name: 'add-user-for-supplier',
  components: {
    formInput
  },
  data () {
    return {
      credentials: {
        user_firstName: '',
        user_lastName: '',
        user_email: '',
        user_phone: '',
        supplier_id: '',
        user_address: '',
        user_jobTitle: '',
        user_gender: '',
        user_password: '',
        user_role: ''
      }
    }
  }
}
</script>

<style>

</style>

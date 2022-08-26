<template>
  <form action="" class="">
    <div class="form-row d-flex mb-3">
      <label for="" class="col-sm-6">Email Address:</label>
      <div class="col-sm-6">
        <form-input
        v-model="credentials.email"
        class="form-control"
        type="email"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex mb-3">
      <label for="" class="col-sm-6">New Default Password:</label>
      <div class="col-sm-6">
        <form-input
        v-model="credentials.new_password"
        class="form-control"
        type="password"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex mb-3">
      <label for="" class="col-sm-6">Confirm New Password:</label>
      <div class="col-sm-6">
        <form-input
        v-model="credentials.confirm_password"
        class="form-control"
        type="password"
        ></form-input>
      </div>
    </div>
    <div class="text-center mt-3">
      <button class="btn btn-sm shadow rgbButton" id=""
      type="submit">Submit</button>
    </div>
  </form>
</template>

<script>
import formInput from '@/components/FormInput'
export default {
  name: 'password-reset',
  components: {
    formInput
  },
  data () {
    return {
      credentials: {
        email: '',
        new_password: '',
        confirm_password: ''
      }
    }
  }
}
</script>

<style>

</style>

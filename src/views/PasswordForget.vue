<template>
  <div class="container-fluid px-0 d-flex vh-100">
    <div class="col-sm-6 col-md-6 col-lg-6 h-100" id="welcomeCol">
      <div class="container d-flex justify-content-center align-items-center vh-100" id="imgCol">
        <img src="/Capture.PNG" class="img-fluid" alt="Sample image">
        <div class="text-center text-white">
        <h3 class="col-text text-white mx-auto text-align-center" id="colText">Welcome Back</h3>
        <p class="col-text text-white mx-auto fw-light">Just a couple of clicks and you are in </p>
        </div>
      </div>
    </div>
    <div class="col-sm-6 col-md-6 col-lg-6 h-100">
      <div class="container d-flex justify-content-center align-items-center vh-100" id="formCol">
        <form class="mt-2 w-75" id="signinForm">
          <p class="lead fw-bold mb-0 me-3 mb-4 mt-3">
            Reset Password
          </p>
          <br>
          <p class="instruction mb-0 me-3" id="todo">
            Enter the email address associated to your account,
            and we'll send you a link to reset your password
          </p> <br>
          <div class="form-outline my-3">
            <base-input
              v-model="credentials.email"
              type="email"
              label="Email Address*"
              placeholder="Enter Email Address"
            ></base-input>
          </div>
          <div class="my-2">
            <router-link to="/Sign-in" class="btn btn-block text-center w-100" id="rgbButton">
              Reset Password
            </router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import baseInput from '@/components/BaseInput.vue'
export default {
  name: 'forget-password',
  components: {
    baseInput
  },
  data () {
    return {
      credentials: {
        email: ''
      }
    }
  }
}
</script>

<style>
#signinForm {
  padding-right:60px;
}
#welcomeCol {
    background: rgb(9, 168, 197);
}
#imgCol {
    flex-direction: column;
}
.img-fluid {
    height: 300px;
    width: 300px;
    display: block;
}
#formCol {
  padding-right: 60px;
  flex-direction: column;
}
#colText {
  margin: auto;
}
.col-text {
  margin: auto;
  display: block;
}
form a {
  text-decoration: none;
  font-size: 12px;
}
</style>

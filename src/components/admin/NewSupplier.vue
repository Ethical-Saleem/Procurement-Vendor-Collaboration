<template>
  <form action="" class="">
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-md-5 col-lg-5 mb-3">
        <label for="">Company Name</label>
        <form-input
        class="form-control"
        v-model="credentials.company_name"
        ></form-input>
      </div>
      <div class="col-sm-5 col-md-5 col-lg-5 mb-3">
        <label for="">Company Email Address</label>
        <form-input
        class="form-control"
        v-model="credentials.company_email"
        type="email"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 col-xl-5 mb-3">
        <label for="">Phone Number</label>
        <form-input
        class="form-control"
        v-model="credentials.company_phone"
        type="number"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 col-xl-5 mb-3">
        <label for="">TIN/VAT Number</label>
        <form-input
        class="form-control"
        v-model="credentials.vat_number"
        type="number"
        placeholder="Enter TIN/VAT Number"
        ></form-input>
      </div>
    </div>
    <div class="form-row">
      <div class="col-sm-12 col-lg-12 col-xl-12 mb-3">
        <label for="">Address</label>
        <form-input
        class="form-control"
        v-model="credentials.company_address"
        type="text"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 col-xl-5 mb-3">
        <label for="">Supplier Bank Country</label>
      </div>
      <div class="col-sm-5 col-lg-5 col-xl-5 mb-3">
        <label for="">Bank Name</label>
        <form-input
        class="form-control"
        v-model="credentials.bank_name"
        type="text"
        ></form-input>
      </div>
    </div>
    <div class="form-row d-flex justify-content-between">
      <div class="col-sm-5 col-lg-5 col-xl-5 mb-3">
        <label for="">Account Number</label>
        <form-input
        class="form-control"
        v-model="credentials.company_account"
        type="number"
        placeholder="00******00"
        ></form-input>
      </div>
      <div class="col-sm-5 col-lg-5 col-xl-5 mb-3">
        <label for="">BIC/Swift Code</label>
        <form-input
        class="form-control"
        v-model="credentials.bic_swift"
        type="text"
        placeholder="Enter BIC/Swift code"
        ></form-input>
      </div>
    </div>
    <div class="form-row">
      <div class="col-12 mb-3">
        <label for="">Upload Relevant Documents</label>
        <div class="text-center bg-white border">
          <input type="file" class="form-control">
          <i class="fa-solid fa-cloud-arrow-up fs-1 my-2"></i>
          <p class="small mb-1 fw-bold">Drag Files here to attach them or</p>
          <button class="btn btn-sm my-2 border border-dark" type="button">
            ADD FILE
          </button>
        </div>
      </div>
    </div>
  </form>
  <div class="float-end my-3">
    <button class="btn btn-sm rgbButton mx-4 py-1 px-3">
      Submit
    </button>
    <button class="btn btn-sm rgbButton py-1 px-3"
     data-bs-toggle="modal" data-bs-target="#addUserSupplier">
      Add User for Supplier
    </button>
  </div>
</template>

<script>
import formInput from '@/components/FormInput.vue'

export default {
  name: 'new-supplier',
  components: {
    formInput
  },
  data () {
    return {
      credentials: {
        company_name: '',
        company_email: '',
        company_phone: '',
        vat_number: '',
        company_address: '',
        bank_country: '',
        bank_name: '',
        company_account: '',
        bic_swift: ''
      },
      bank_countries: []
    }
  }
}
</script>

<style>

</style>

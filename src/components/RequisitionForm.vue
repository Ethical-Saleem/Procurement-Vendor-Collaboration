<template>
  <form class="mb-5" action="">
    <div class="form-row d-flex mb-3">
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex">
        <label class="fw-bold" for="">Requisition No:</label>
        <div class="mx-3">
          <form-input
           v-model="credentials.requisition_num"
           type="text"
           readonly=""
          ></form-input>
        </div>
      </div>
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex">
        <label class="fw-bold" for="">Requisition Date:</label>
        <div class="mx-3">
          <form-input
           v-model="credentials.requisition_date"
           type="text"
           readonly=""
           :value="currentDate()"
          ></form-input>
        </div>
      </div>
    </div>
    <div class="form-row mb-5">
      <div class="col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex">
        <label for="" class="fw-bold">Requester:</label>
        <div class="mx-3">
          <form-input
           v-model="credentials.requester"
           type="text"
           readonly=""
          ></form-input>
        </div>
      </div>
    </div>
    <div class="my-3">
      <div class="form-group">
        <div class="mb-4">
          <label for="" class="fw-bold">Justification:</label>
          <div class="">
            <form-input
            v-model="credentials.justification"
            type="text"
            class="form-control"
            ></form-input>
          </div>
        </div>
      </div>
      <div class="form-group">
        <div class="mb-4">
          <label for="status" class="fw-bold">Status:</label>
          <base-select
          formClass="form-control"
          :options="statuses"
          v-model="credentials.status"
          ></base-select>
        </div>
      </div>
      <div class="form-group">
        <div class="mb-4">
          <label for="status" class="fw-bold">Description:</label>
          <textarea
          class="form-control"
          v-model="credentials.description"
          ></textarea>
        </div>
      </div>
    </div>
    <div class="float-end my-4 mt-5">
      <button class="btn shadow rgbButton" id="" type="button"
      data-bs-toggle="modal" data-bs-target="#requisitionSuccess">
        Send for Approval
      </button>
    </div>
  </form>
</template>

<script>
import { format } from 'date-fns'
import formInput from '@/components/FormInput.vue'
import baseSelect from '@/components/BaseSelect.vue'

export default {
  name: 'new-requisition',
  components: {
    formInput,
    baseSelect
  },
  data () {
    return {
      format,
      credentials: {
        requisition_num: 'RFQ0348',
        requester: 'Oluwaseyi Tobi',
        requisition_date: '',
        justification: '',
        status: '',
        description: ''
      },
      statuses: [
        '',
        'New',
        'Pending'
      ]
    }
  },
  methods: {
    currentDate () {
      return this.format(new Date(), 'yyyy/MM/dd')
    }
  }
}
</script>

<style>

</style>

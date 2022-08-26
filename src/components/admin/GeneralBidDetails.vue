<template>
  <b-button
    class="align-items-center py-3"
    :class="visible ? null : 'collapsed'"
    :aria-expanded="visible ? 'true' : 'false'"
    aria-controls="general"
    @click="visible = !visible"
    >
    <i class="fas-solid fa-caret-down float-end"></i>
    <p class="text-start fw-bold mb-0">General</p>
  </b-button>
  <b-collapse class="general-bid border border-top-0 px-0" id="general" v-model="visible">
    <div class="">
      <div class="table-responsive m-4">
        <table class="table rfq-table table-sm table-bordered">
          <tbody>
            <tr class="">
              <td class="">
                <div class="d-flex">
                  <p class="mb-0 fw-bold">RFQ No:</p>
                  <span class="mx-3"></span>
                </div>
              </td>
              <td class="table-active">
                <div class="d-flex">
                  <p class="mb-0 fw-bold">Office Use:</p>
                  <span class="mx-3"></span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="">
                <div class="d-flex mb-2">
                  <p class="mb-0 fw-bold">Date:</p>
                  <span class="mx-3">{{currentDate()}}</span>
                </div>
                <div class="d-flex">
                  <p class="mb-0 fw-bold">Requester:</p>
                  <span class="mx-3">Alabi Tobi</span>
                </div>
              </td>
              <td class="">
                <div class="d-flex mb-2">
                  <p class="mb-0 fw-bold">PO Number:</p>
                  <span class="mx-3"></span>
                </div>
                <div class="d-flex">
                  <p class="mb-0 fw-bold">Date:</p>
                  <span class="mx-3"></span>
                </div>
              </td>
            </tr>
            <tr>
              <td class="">
                <div class="d-flex mb-2">
                  <p class="mb-0 fw-bold">Unit:</p>
                  <span class="mx-3"></span>
                </div>
                <div class="d-flex">
                  <p class="mb-0 fw-bold">Department:</p>
                  <span class="mx-3"></span>
                </div>
              </td>
              <td class="">
                <div class="d-flex mb-2">
                  <p class="mb-0 fw-bold">Requisition Status:</p>
                  <span class="mx-3"></span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mb-3">
        <div class="rfq-desc mx-4">
          <p class="table-active fw-bold mb-0 p-1" style="background-color:#ccc;">Description</p>
          <b-form-textarea
          id="textarea"
          v-model="rfqDesc"
          rows="3"
          max-rows="6"
          ></b-form-textarea>
        </div>
      </div>
    </div>
  </b-collapse>
</template>

<script>
import { format } from 'date-fns'
export default {
  name: 'GeneralBidDetails',
  data () {
    return {
      format,
      visible: false,
      rfqDesc: ''
    }
  },
  methods: {
    currentDate () {
      return this.format(new Date(), 'yyyy/MM/dd')
    }
  }
}
</script>

<style scoped>
.rfq-table tbody {
  font-size: 14px;
  background-color: #fff;
}
.general-bid {
  background-color: #f8f8f8;
}
</style>

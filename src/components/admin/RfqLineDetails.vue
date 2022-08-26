<template>
  <b-button
    class="align-items-center py-3 rfq-btn"
    :class="visible ? null : 'collapsed'"
    :aria-expanded="visible ? 'true' : 'false'"
    aria-controls="rfq-line"
    @click="visible = !visible"
    >
    <i class="fas-solid fa-caret-down float-end"></i>
    <p class="text-start fw-bold mb-0">RFQ Line</p>
    </b-button>
    <b-collapse class="rfq-line border border-top-0 px-0" id="rfq-line" v-model="visible">
    <div class="">
      <div class="table-responsive m-4">
        <b-table
        hover
        responsive
        bordered
        :fields="fields"
        >
          <template></template>
        </b-table>
      </div>
    </div>
    </b-collapse>
</template>

<script>
export default {
  name: 'RfqLine',
  data () {
    return {
      visible: true,
      fields: [
        {
          key: 'quantity',
          label: 'QUANTITY'
        },
        {
          key: 'unit_cost',
          label: 'UNIT COST'
        },
        {
          key: 'total_cost',
          label: 'TOTAL COST'
        },
        {
          key: 'description',
          label: 'DESCRIPTION OF SERVICE OR MATERIAL'
        }
      ]
    }
  }
}
</script>

<style scoped>
.rfq-line {
  background-color: #f8f8f8;
}
.rfq-btn {
  background-color: rgb(9, 168, 197);
}
</style>

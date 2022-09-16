<template>
  <b-button
    class="align-items-center py-3 rfq-btn"
    :class="visible ? null : 'collapsed'"
    :aria-expanded="visible ? 'true' : 'false'"
    aria-controls="rfq-line"
    @click="visible = !visible"
    >
    <i class="fa-solid fa-caret-down float-end"></i>
    <p class="text-start fw-bold mb-0">RFQ Line</p>
    </b-button>
    <b-collapse class="rfq-line border border-top-0 px-0" id="rfq-line" v-model="visible">
    <div class="m-4">
      <div class="table-responsive my-5 mx-0">
        <b-table
        class="detail-table mt-4"
        hover
        responsive
        bordered
        :fields="fields"
        :items="requestDetails"
        >
          <template #cell(quantity)="data">
            <div class="">
              {{data.item.quantity}}
            </div>
          </template>
          <template #cell(unit_cost)="data">
            <div class="" contenteditable="true">
              {{data.item.unit_cost}}
            </div>
          </template>
          <template #cell(total_cost)="data">
            <div class="" contenteditable="true">
              {{data.item.total_cost}}
            </div>
          </template>
          <template #cell(description)="data">
            <div class="">
              {{data.item.description}}
            </div>
          </template>
        </b-table>
      </div>
    </div>
    <div class="modal" id="rfqDetailTable" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-body">
            <form action="" class="">
              <div class="mb-3">
                <label for="quantity" class="">Quantity</label>
                <input type="text" name="quantity" id="quantity" class="form-control" v-model="quantity" readonly>
              </div>
              <div class="mb-3">
                <label for="unitCost" class="">Unit Cost</label>
                <input type="text" name="unitCost" id="unitCost" class="form-control" v-model="unitCost">
              </div>
              <div class="mb-3">
                <label for="totalCost" class="">Total Cost</label>
                <input type="text" name="totalCost" id="totalCost" class="form-control" v-model="totalCost">
              </div>
              <div class="mb-3">
                <label for="description" class="">Description</label>
                <input type="text" name="description" id="description" class="form-control" v-model="description" readonly>
              </div>
              <div class="float-end my-3">
                <button class="btn btn-sm rgbButton px-3">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </b-collapse>
</template>

<script>
export default {
  name: 'VendorRfqLine',
  data () {
    return {
      visible: false,
      quantity: '',
      unitCost: '',
      totalCost: '',
      description: '',
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
      ],
      requestDetails: [
        {
          quantity: '100',
          unit_cost: '',
          total_cost: '',
          description: 'Hard-Cover Notebooks'
        }
      ]
    }
  },
  methods: {
    addNewRow () {
      this.requestDetails.push({
        quantity: '',
        unit_cost: '',
        total_cost: '',
        description: ''
      })
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
.detail-table {
  background: #fff
}
</style>

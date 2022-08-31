<template>
  <div class="">
    <p class="fw-bold" style="font-size:18px">
      Compare Quotes
    </p>
    <div class="quote-detail">
        <p class="rfq-num mb-0 fw-bold">
        RFQ No.:
        <span class="fw-normal"></span>
        </p>
        <p class="num-vendor mb-0 fw-bold">
        No. of Vendors:
        <span class="fw-normal">3</span>
        </p>
    </div>
    <div class="table-responsive my-3">
        <b-table
        class="table-compare"
        responsive
        hover
        outlined
        :fields="fields"
        :items="bidQuotes"
        >
        <template #cell(item_desc)="data">
            <div class="">
            {{data.item.item_desc}}
            </div>
        </template>
        <template #cell(item_qty)="data">
            <div class="">
            {{data.item.item_qty}}
            </div>
        </template>
        <template #cell(item_vendor)="data">
            <div class="">
            {{data.item.item_vendor}}
            </div>
        </template>
        <template #cell(unit_cost)="data">
            <div class="">
            {{data.item.unit_cost}}
            </div>
        </template>
        <template #cell(amount)="data">
            <div class="">
            {{data.item.amount}}
            </div>
        </template>
        <template #cell(preference)="item">
            <div class="">
            <b-form-select
            v-model="selected"
            :options="options"
            v-if="item.value === true"
            ></b-form-select>
            </div>
        </template>
        </b-table>
    </div>
    <div class="float-end">
      <button class="btn btn-sm rgbButton mx-2">
        Save
      </button>
      <button class="btn btn-sm whiteButton px-3">
        Cancel
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompareQuote',
  data () {
    return {
      rfqNo: 'RFQ00001',
      noOfVendors: '3',
      selected: null,
      fields: [
        {
          key: 'item_desc',
          label: 'Description'
        },
        {
          key: 'item_qty',
          label: 'Quantity'
        },
        {
          key: 'vendor',
          label: 'Vendors'
        },
        {
          key: 'unit_cost',
          label: 'Unit Cost'
        },
        {
          key: 'amount',
          label: 'Total Amount'
        },
        {
          key: 'preference',
          label: 'Preference'
        }
      ],
      bidQuotes: [
        {
          item_desc: 'Supply of Laptops',
          item_qty: '2',
          vendor: 'XYZ Corporations',
          unit_cost: '1,000.00',
          amount: '2,000.00'
        },
        {
          item_desc: 'Supply of Laptops',
          item_qty: '2',
          vendor: 'ABC Nigeria Limited',
          unit_cost: '2,500.00',
          amount: '5,000.00'
        },
        {
          item_desc: 'Supply of Laptops',
          item_qty: '2',
          vendor: 'Lodash & Co. Nigeria Plc',
          unit_cost: '3,000.00',
          amount: '6,000.00'
        },
        {
          item_desc: 'Supply of Stationaries',
          item_qty: '2',
          vendor: 'XYZ Corporations',
          unit_cost: '2,000.00',
          amount: '4,000.00'
        },
        {
          item_desc: 'Supply of Printers',
          item_qty: '2',
          vendor: 'ABC Nigeria Limited',
          unit_cost: '1,800.00',
          amount: '3,600.00'
        },
        {
          item_desc: 'Supply of Printers',
          item_qty: '2',
          vendor: 'Lodash & Co. Nigeria Plc',
          unit_cost: '1,000.00',
          amount: '2,000.00'
        }
      ],
      options: [
        {
          value: null,
          text: ''
        },
        {
          value: 'yes',
          text: 'Yes'
        },
        {
          value: 'no',
          text: 'No'
        }
      ]
    }
  }
}
</script>

<style scoped>
p.rfq-num, p.num-vendor {
  font-size: 15px;
}
.quote-detail p span {
  font-size: 13px
}
.table-compare {
  background-color: #fff;
}
</style>

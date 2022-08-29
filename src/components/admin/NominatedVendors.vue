<template>
  <b-button
    class="align-items-center py-3 rfq-btn"
    :class="visible ? null : 'collapsed'"
    :aria-expanded="visible ? 'true' : 'false'"
    aria-controls="rfq-line"
    @click="visible = !visible"
    >
    <i class="fa-solid fa-caret-down float-end"></i>
    <p class="text-start fw-bold mb-0">Nominated Vendors</p>
    </b-button>
    <b-collapse class="rfq-line border border-top-0 px-0" id="rfq-line" v-model="visible">
    <div class="m-4">
      <div class="table-responsive m-4">
        <b-table
        class="detail-table"
        hover
        responsive
        bordered
        :fields="fields"
        :items="nominatedVendorsDetails"
        head-variant="light"
        >
          <template #cell(vendor_code)="data">
            <div class="">
              {{data.item.vendor_code}}
            </div>
          </template>
          <template #cell(vendor_name)="data">
            <div class="">
              {{data.item.vendor_name}}
            </div>
          </template>
          <template #cell(invitation_status)="data">
            <div class="">
              {{data.item.invitation_status}}
            </div>
          </template>
          <template #cell(accepted)="data">
            <div class="">
              {{data.item.accepted}}
            </div>
          </template>
          <template #cell(bid_submitted)="data">
            <div class="">
              {{data.item.bid_submitted}}
            </div>
          </template>
          <template #cell(bid_reference)="data">
            <div class="">
              {{data.item.bid_reference}}
            </div>
          </template>
          <template #cell(total_bid_value)="data">
            <div class="">
              {{data.item.total_bid_value}}
            </div>
          </template>
        </b-table>
      </div>
    </div>
    </b-collapse>
</template>

<script>
export default {
  name: 'NominatedVendors',
  data () {
    return {
      visible: true,
      headVariant: 'light',
      fields: [
        {
          key: 'vendor_code',
          label: 'VENDOR CODE'
        },
        {
          key: 'vendor_name',
          label: 'VENDOR NAME'
        },
        {
          key: 'invitation_status',
          label: 'INVITATION SENT'
        },
        {
          key: 'accepted',
          label: 'ACCEPTED'
        },
        {
          key: 'bid_submitted',
          label: 'SUBMITTED'
        },
        {
          key: 'bid_reference',
          label: 'BID REFERENCE NO'
        },
        {
          key: 'total_bid_value',
          label: 'TOTAL BID VALUE'
        }
      ],
      nominatedVendorsDetails: [
        {
          vendor_code: 'VEND021',
          vendor_name: 'XYZ Corporations',
          invitation_status: 'Yes',
          accepted: 'Yes',
          bid_submitted: 'Yes',
          bid_reference: 'BID00001',
          total_bid_value: '2,000,000.00'
        },
        {
          vendor_code: 'VEND022',
          vendor_name: 'ABC Nigeria Limited',
          invitation_status: 'Yes',
          accepted: 'Yes',
          bid_submitted: 'Yes',
          bid_reference: 'BID00001',
          total_bid_value: '2,100,000.00'
        },
        {
          vendor_code: 'VEND023',
          vendor_name: 'Laplace Infosys Limited',
          invitation_status: 'No',
          accepted: 'No',
          bid_submitted: 'No',
          bid_reference: 'BID00001',
          total_bid_value: ''
        },
        {
          vendor_code: 'VEND024',
          vendor_name: 'Mikton Technology Solutions Limited',
          invitation_status: 'Yes',
          accepted: 'No',
          bid_submitted: 'No',
          bid_reference: 'BID00001',
          total_bid_value: ''
        },
        {
          vendor_code: 'VEND025',
          vendor_name: 'Lodash & Co. Nigeria Plc',
          invitation_status: 'Yes',
          accepted: 'Yes',
          bid_submitted: 'No',
          bid_reference: 'BID00001',
          total_bid_value: ''
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
.detail-table {
  background: #fff
}
</style>

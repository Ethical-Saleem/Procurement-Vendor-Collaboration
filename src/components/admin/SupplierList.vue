<template>
  <b-table
  responsive
  bordered
  hover
  :items="suppliers"
  :fields="fields"
  >
    <template #cell(company_name)="data">
      <router-link class="route-link" :to="{name: 'VendorProfile', params:{company_name: data.item.company_name} }">
        {{data.item.company_name}}
      </router-link>
    </template>
    <template #cell(company_email)="data">
      {{data.item.company_email}}
    </template>
    <template #cell(company_phone)="data">
      {{data.item.company_phone}}
    </template>
    <template #cell(company_address)="data">
      {{data.item.company_address}}
    </template>
  </b-table>
</template>

<script>
import suppliers from '@/data/suppliers.json'

export default {
  name: 'suppliers-list',
  props: {
    company_name: {
      type: String
    }
  },
  data () {
    return {
      fields: [
        {
          key: 'company_name',
          label: 'COMPANY NAME',
          sortable: true
        },
        {
          key: 'company_email',
          label: 'COMPANY EMAIL ADDRESS',
          sortable: true
        },
        {
          key: 'company_phone',
          label: 'PHONE NUMBER',
          sortable: false
        },
        {
          key: 'company_address',
          label: 'ADDRESS',
          sortable: true
        }
      ],
      suppliers: suppliers
    }
  },
  computed: {
    getSuppliers () {
      return this.$store.state.suppliers
    }
  }
}
</script>

<style scoped>
.route-link {
  text-decoration: none;
  color: #000;
}
</style>

<template>
  <b-table
  responsive
  bordered
  hover
  :items="suppliers"
  :fields="fields"
  >
    <template #cell(company_name)="data">
      {{data.item.company_name}}
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

export default {
  name: 'suppliers-list',
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
      suppliers: [
        {
          company_name: 'XYZ Corporations',
          company_email: 'xyzcorporations@gmail.com',
          company_phone: '08033256967',
          company_address: 'Ikeja, Lagos'
        },
        {
          company_name: 'ABC Nigeria Limited',
          company_email: 'abcnigeria@gmail.com',
          company_phone: '08123451209',
          company_address: 'Ota ,Ogun'
        },
        {
          company_name: 'Laplace Infosys Limited',
          company_email: 'info@laplace.com',
          company_phone: '07088325639',
          company_address: 'Surulere, Lagos'
        },
        {
          company_name: 'Mikton Technology Solutions Limited',
          company_email: 'miktontechs@gmail.com',
          company_phone: '09134667429',
          company_address: 'Ikeja, Lagos'
        },
        {
          company_name: 'Lodash & Co Nigeria Plc',
          company_email: 'corporations_lodash@gmail.com',
          company_phone: '01-2345789',
          company_address: 'Ibadan, Oyo'
        }
      ]
    }
  }
}
</script>

<style>

</style>

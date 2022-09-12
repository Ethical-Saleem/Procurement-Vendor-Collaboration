<template>
  <b-table
  class="user-table"
  responsive
  bordered
  hover
  small
  :fields="fields"
  :items="usersList"
  >
    <template #cell(index)="data">
      <div class="">
        {{ data.index + 1 }}
      </div>
    </template>
    <template #cell(sex)="data">
      <div class="">
        {{ data.item.sex}}
      </div>
    </template>
    <template #cell(user_name)="data">
      <div class="">
        {{ data.value.last }} {{ data.value.first }}
      </div>
    </template>
    <template #cell(user_email)="data">
      <div class="">
        {{ data.item.user_email }}
      </div>
    </template>
    <template #cell(user_permission_group)="data">
      <div class="">
        {{ data.item.user_permission_group }}
      </div>
    </template>
    <template #cell(user_phone)="data">
      <div class="">
        {{ data.item.user_phone}}
      </div>
    </template>
    <template #cell(manager)="data">
      <div class="">
        {{ data.item.manager}}
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      fields: [
        {
          key: 'index',
          label: 'S/N'
        },
        {
          key: 'sex',
          label: 'SEX'
        },
        {
          key: 'user_name',
          label: 'FULL NAME'
        },
        {
          key: 'user_email',
          label: 'EMAIL ADDRESS'
        },
        {
          key: 'user_permission_group',
          label: 'USER PERMISSION GROUP'
        },
        {
          key: 'user_phone',
          label: 'TELEPHONE'
        },
        {
          key: 'manager',
          label: 'MANAGER'
        }
      ],
      usersList: [
        {
          sex: 'M',
          user_name: { first: 'Babalola', last: 'Oluwaseyi' },
          user_email: 'Oluwaseyi.B@gmail.com',
          user_permission_group: 'Asst Manager',
          user_phone: '08032091372',
          manager: 'self'
        },
        {
          sex: 'F',
          user_name: { first: 'Yetunde', last: 'Oluwatobi' },
          user_email: 'Oluwatobi.Y@gmail.com',
          user_permission_group: 'Product Manager',
          user_phone: '07034091572',
          manager: 'self'
        },
        {
          sex: 'F',
          user_name: { first: 'Yetunde', last: 'Oluwatobi' },
          user_email: 'Oluwatobi.Y@gmail.com',
          user_permission_group: 'Product Manager',
          user_phone: '07034091572',
          manager: 'self'
        },
        {
          sex: 'F',
          user_name: { first: 'Yetunde', last: 'Oluwatobi' },
          user_email: 'Oluwatobi.Y@gmail.com',
          user_permission_group: 'Product Manager',
          user_phone: '07034091572',
          manager: 'self'
        },
        {
          sex: 'F',
          user_name: { first: 'Yetunde', last: 'Oluwatobi' },
          user_email: 'Oluwatobi.Y@gmail.com',
          user_permission_group: 'Product Manager',
          user_phone: '07034091572',
          manager: 'self'
        },
        {
          sex: 'F',
          user_name: { first: 'Yetunde', last: 'Oluwatobi' },
          user_email: 'Oluwatobi.Y@gmail.com',
          user_permission_group: 'Product Manager',
          user_phone: '07034091572',
          manager: 'self'
        }
      ]
    }
  }
}
</script>

<style scoped>
.user-table {
  max-height: 12.25rem;
  background-color: #fff;
}
</style>

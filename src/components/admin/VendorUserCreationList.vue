<template>
  <b-table
  class="users-table"
  responsive
  hover
  bordered
  small
  :sticky-header="stickyHeader"
  :fields="fields"
  :items="userCreationList"
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
        {{ data.value.last }} {{data.value.first}}
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
        {{ data.item.user_phone }}
      </div>
    </template>
    <template #cell(job_title)="data">
      <div class="">
        {{ data.item.job_title }}
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  data () {
    return {
      stickyHeader: true,
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
          key: 'job_title',
          label: 'Asst Manager'
        }
      ],
      userCreationList: [
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        },
        {
          sex: 'M',
          user_name: { first: 'Tobi', last: 'Alabi' },
          user_email: 'alabitobi@xyzcorporations.com',
          user_permission_group: 'Team Lead',
          user_phone: '08032091377',
          job_title: 'Asst Manager'
        }
      ]
    }
  }
}
</script>

<style scoped>
.users-table {
  background-color: #fff;
  max-height: 12.25rem;
}
</style>

<template>
  <div class="row">
      <div class="col-12 col-sm-4 d-flex">
        <p for="" class="filter py-2">
          Permission Set:
        </p>
        <div class="col-7 col-sm-7 mx-2">
          <base-select
          :options="permissions"
          v-model="rolePermission"
          class="w-100 py-2"
          ></base-select>
          <!--<select v-model="rolePermission">
          <option
           v-for="permission in permissions"
           :value="permission"
           :key="permission"
           :selected="permission === rolePermission"
           @click="selectedRole = rolePermissions"
          >{{ permission }}</option>
          </select>-->
        </div>
      </div>
      <div class="col-12 col-sm-8">
        <div class="mx-sm-3 d-flex">
          <button class="btn btn-sm whiteButton shadow my-2 px-3"
          data-bs-toggle="modal" data-bs-target="#importPermission">
            Import Permission Set
          </button>
          <button class="btn btn-sm whiteButton shadow my-2 mx-3 px-3">
            Export Permission Set
          </button>
        </div>
      </div>
  </div>
  <div class="container-fluid px-0">
    <div class="responsive-table">
      <b-table
      responsive
      bordered
      :items="rolePermissions"
      :fields="fields"
      head-variant="light"
      ></b-table>
    </div>
  </div>
  <div class="">
    <div class="modal" tabindex="-1" id="importPermission" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="width:400px;">
        <div class="modal-content">
          <div class="modal-body import text-center">
            <div class="">
              <import-permission></import-permission>
            </div>
          </div>
          <div class="modal-footer" style="background-color:#dadada;">
            <div class="float-end">
              <button class="btn btn-sm shadow mx-2 whiteButton" data-bs-dismiss="modal">
                Cancel
              </button>
              <button class="btn btn-sm shadow mx-2 rgbButton">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import baseSelect from '@/components/BaseSelect.vue'
import importPermission from '@/components/admin/ImportPermissionForm.vue'

export default {
  name: 'user-permission',
  components: {
    baseSelect,
    importPermission
  },
  data () {
    return {
      rolePermission: 'Basic',
      headVariant: 'light',
      permissions: [
        'Basic',
        'Approver',
        'Uploader',
        'Sys Admin',
        'Manager',
        'Lead',
        'Supervisor'
      ],
      fields: [
        {
          key: 'pages',
          label: 'PAGES',
          sortable: 'false'
        },
        {
          key: 'read_perm',
          label: 'READ PERMISSION'
        },
        {
          key: 'insert_perm',
          label: 'INSERT PERMISSION'
        },
        {
          key: 'modify_perm',
          label: 'MODIFY PERMISSION'
        },
        {
          key: 'delete_perm',
          label: 'DELETE PERMISSION'
        }
      ],
      rolePermissions: [
        {
          pages: 'Request for Quotes',
          read_perm: 'YES',
          insert_perm: 'NO',
          modify_perm: 'NO',
          delete_perm: 'NO'
        },
        {
          pages: 'Purchase Order',
          read_perm: 'YES',
          insert_perm: 'NO',
          modify_perm: 'NO',
          delete_perm: 'NO'
        },
        {
          pages: 'Waybill',
          read_perm: 'YES',
          insert_perm: 'NO',
          modify_perm: 'NO',
          delete_perm: 'NO'
        },
        {
          pages: 'Invoice',
          read_perm: 'YES',
          insert_perm: 'NO',
          modify_perm: 'NO',
          delete_perm: 'INDIRECT'
        },
        {
          pages: 'Issue Resolution',
          read_perm: 'YES',
          insert_perm: 'INDIRECT',
          modify_perm: '',
          delete_perm: 'YES'
        },
        {
          pages: 'Payment Receipt',
          read_perm: 'YES',
          insert_perm: 'NO',
          modify_perm: 'NO',
          delete_perm: 'INDIRECT'
        }
      ]
    }
  }
}
</script>

<style scoped>
p.filter {
  font-size: 20px;
}
.modal-footer {
  border-top: 1px dashed #000;
}
</style>

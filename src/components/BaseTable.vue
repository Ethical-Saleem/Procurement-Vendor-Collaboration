<template>
  <div class="responsible-table">
    <table class="table data-table table-bordered" :class="classObject">
      <slot name="details"></slot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'table-component',
  props: {
    tableData: {
      type: Array
    },
    fields: {
      type: Array
    },
    classObject: {
      type: Object
    }
  }
}
</script>

<style>
.table {
  background: white;
  font-size: 12px;
}
</style>

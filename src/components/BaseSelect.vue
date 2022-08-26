<template>
  <div class="select form-group">
    <select
     :class="formClass"
     :placeholder="placeholder"
     :value="modelValue"
     v-bind="{
      ...$attrs,
      onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
     }"
     >
      <option
      class="option"
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
      > {{ option }} </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String
    },
    formClass: {
      type: String
    }
  },
  data () {
    return {
      selectOption: ''
      /* selectOptions: [''] */
    }
  }
}
</script>

<style>
::option {
  font-size: 12px;
}
option {
  background: rgb(218, 218, 218);
  border: 1px solid #f8f8f8;
}
select, option {
  font-size: 14px;
}
</style>

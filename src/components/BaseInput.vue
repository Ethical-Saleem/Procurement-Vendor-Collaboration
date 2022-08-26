<template>
  <div class="row">
    <div class="form-group">
      <label>{{ label }}</label>
      <div class="">
        <input
        class="form-control"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        v-bind="$attrs"
        >
      </div>
    </div>
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
    }
  }
}
</script>

<style>

</style>

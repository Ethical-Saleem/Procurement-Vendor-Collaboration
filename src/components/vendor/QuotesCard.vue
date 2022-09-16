<template>
  <div class="card">
    <div class="card-body">
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.card-body {
  padding-top: 1rem;
  padding-bottom: 0.5rem;
  padding-right: 0.5rem;
}
</style>

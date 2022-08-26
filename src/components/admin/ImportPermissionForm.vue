<template>
  <form action="" class="">
    <input type="file" class="form-control">
    <img src="@/assets/Web/cloud-upload-50.png" alt="" class="">
    <p class="mb-1 mt-2">Select a file or drag and drop here</p>
    <p class="small mb-1" style="color:#ccc;">
      .xlsx, .xslm or .xml, file size no more than 10MB
    </p>
    <div class="">
      <button class="btn btn-sm whiteButton">
        Select File
      </button>
      <button class="btn btn-sm whiteButton mx-2 shadow">
        Download Template
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'ImportPermission'
}
</script>

<style>

</style>

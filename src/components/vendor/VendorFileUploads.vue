<template>
  <b-button
    class="align-items-center py-3 rfq-btn"
    :class="visible ? null : 'collapsed'"
    :aria-expanded="visible ? 'true' : 'false'"
    aria-controls="rfq-line"
    @click="visible = !visible"
    >
    <i class="fa-solid fa-caret-down float-end"></i>
    <p class="text-start fw-bold mb-0">Uploads</p>
  </b-button>
  <b-collapse class="files-upload border border-top-0 px-0" id="rfq-line" v-model="visible">
    <div class="col-sm-4 mx-auto">
      <div class="uploads my-3 text-center">
        <b-form-file
        multiple
        v-model="bidFileUploads"
        placeholder="Choose a file or drop it here..."
        drop-placeholder="Drop file here..."
        >
        </b-form-file>
        <img src="@/assets/Web/cloud-upload-50.png" class="mt-3 mb-2" alt="">
        <p class="mb-1">
          Select a file or drag and drop here
        </p>
        <p class="small">
          JPG, PNG or PDF, file size no more than 10MB
        </p>
        <button class="btn whiteButton px-3 mb-2">
          Select File
        </button>
      </div>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'BidUpload',
  data () {
    return {
      visible: true,
      bidFileUploads: []
    }
  }
}
</script>

<style scoped>
.files-upload {
  background-color: #f8f8f8;
}
.rfq-btn {
  background-color: rgb(9, 168, 197);
}
.files-upload .uploads {
  border: 1px dashed #ccc;
}
.uploads p.small {
  font-size: 11px;
  color: #ccc;
}
</style>

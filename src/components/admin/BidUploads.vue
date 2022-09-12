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
  <b-collapse class="rfq-line border border-top-0 px-0" id="rfq-line" v-model="visible">
    <div class="m-4">
      <ul class="list-unstyled">
        <li class="file-list">
          <div class="upload-area p-3">
            <div class="float-end">
              <span class="size">5.7MB</span>
            </div>
            <div class="d-flex mx-2">
              <i class="fa-solid fa-file"></i>
              <div class="details mx-3 d-flex align-items-center justify-content-center">
                <p class="file-name mb-2">
                  Document.pdf
                </p>
                <span class="mb-2 px-2">
                  <strong class="px-1">.</strong>
                  preview
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="file-list">
          <div class="upload-area p-3">
            <div class="float-end">
              <span class="size">5.7MB</span>
            </div>
            <div class="d-flex mx-2">
              <i class="fa-solid fa-file-image"></i>
              <div class="details mx-3 d-flex align-items-center justify-content-center">
                <p class="file-name mb-2">
                  Image.jpeg
                </p>
                <span class="mb-2 px-2">
                  <strong class="px-1">.</strong>
                  preview
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="file-list">
          <div class="upload-area p-3">
            <div class="float-end">
              <span class="size">5.7MB</span>
            </div>
            <div class="d-flex mx-2">
              <i class="fa-solid fa-file-csv"></i>
              <div class="details mx-3 d-flex align-items-center justify-content-center">
                <p class="file-name mb-2">
                  Document.csv
                </p>
                <span class="mb-2 px-2">
                  <strong class="px-1">.</strong>
                  preview
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </b-collapse>
</template>

<script>
export default {
  name: 'BidUpload',
  data () {
    return {
      visible: true
    }
  }
}
</script>

<style scoped>
.rfq-line {
  background-color: #f8f8f8;
}
.rfq-btn {
  background-color: rgb(9, 168, 197);
}
li.file-list {
  background-color: #fff;
  margin: 8px 0px;
  cursor: pointer;
}

li.file-list:hover {
  background-color: rgb(9, 168, 197);
  color: #fff;
}
li.file-list:hover .upload-area i {
  font-size: 30px;
  color: #fff;
}
li.file-list:hover .upload-area .details span {
  color: #fff;
  font-weight: 400;
}
.upload-area i {
  font-size: 30px;
  color: rgb(9, 168, 197);
}
.upload-area .details p.file-name {
  font-size: 18px;
  font-weight: 400;
}
.upload-area .details span {
  font-size: 14px;
  color: rgb(9, 168, 197);
}
.upload-area .details span strong {
  font-weight: 800;
  font-size: 18px;
}
.upload-area .size {
  font-size: 13px;
}
</style>

<template>
  <Header></Header>
  <Navbar></Navbar>
  <div class="container-fluid main-content px-0">
    <actionNav
    title="PO2201001 Supply of Laptops"
    >
      <template #button>
        <router-link
        :to="{name: 'ConfirmedBidPurchaseOrder', params: {purchase_code: $route.params.purchase_code} }"
        class="btn btn-sm shadow m-2 rgbButton"
        type="button"
        >
          Accept
        </router-link>
        <button class="btn btn-sm shadow m-2 whiteButton" type="button">
          Reject
        </button>
        <button class="btn btn-sm shadow m-2 rgbButton" type="button">
          <i class="fa-solid fa-print"></i>
        </button>
        <button class="btn btn-sm shadow m-2 rgbButton" type="button">
          <i class="material-icons">download</i>
        </button>
      </template>
    </actionNav>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-12 col-lg-9 col-xl-9 mb-4">
          <purchase-order-invoice></purchase-order-invoice>
        </div>
        <div class="col-sm-12 col-lg-3 col-xl-3 mb-4">
          <p class="fw-bold mb-0">Comment</p>
          <div class="action">
            <b-form-textarea
            class="comment-area"
            id="textarea"
            v-model="comment"
            placeholder="Add Comment..."
            rows="14"
            max-rows="14"
            no-resize
            ></b-form-textarea>
            <div class="w-100 my-3">
              <button
                class="btn btn-block w-100 text-white"
                style="background-color: #04ba16"
              >
                Save Comment
              </button>
              <button
                class="btn btn-block w-100 my-2 text-white"
                style="background-color: #ea3d2f"
              >
                Delete Comment
              </button>
              <button
                class="btn btn-block w-100 text-white"
                data-bs-toggle="modal"
                data-bs-target="#commentsModal"
                style="background-color: #1565d8"
              >
                View Comment
                <span><i class="fa-solid fa-chevron-right"></i></span>
              </button>
            </div>
          </div>
          <div class="files">
            <div class="card upload-card">
              <div class="card-body py-1">
                <p class="list-title mb-0 mt-2 mb-3">
                  <i class="fa-solid fa-cloud-arrow-up"></i>
                  <span class="">Files</span>
                </p>
                <ul class="list-unstyled uploaded-files mb-0">
                  <li class="file-list">
                    <div class="upload-area-list mx-2">
                      <div class="float-end align-items-center py-3">
                        <span class="size" style="font-size: 12px">5.7MB</span>
                      </div>
                      <div class="d-flex">
                        <i class="fa-solid fa-file py-2"></i>
                        <div class="details d-flex py-2">
                          <p class="file-name mb-0">
                            Document.pdf <strong class="dot">.</strong>
                            <span>preview</span>
                          </p>
                          <span class="time">2m ago</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="file-list">
                    <div class="upload-area-list mx-2">
                      <div class="float-end py-3">
                        <span class="size" style="font-size: 12px">5.7MB</span>
                      </div>
                      <div class="d-flex">
                        <i class="fa-solid fa-file-image py-2"></i>
                        <div class="details d-flex py-2">
                          <p class="file-name mb-0">
                            File.jpg <strong class="dot">.</strong>
                            <span>preview</span>
                          </p>
                          <span class="time">2m ago</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="file-list">
                    <div class="upload-area-list mx-2">
                      <div class="float-end py-3">
                        <span class="size" style="font-size: 12px">5.7MB</span>
                      </div>
                      <div class="d-flex">
                        <i class="fa-solid fa-file-image py-2"></i>
                        <div class="details d-flex py-2">
                          <p class="file-name mb-0">
                            Image.png <strong class="dot">.</strong>
                            <span>preview</span>
                          </p>
                          <span class="time">2m ago</span>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="file-list">
                    <div class="upload-area-list mx-2">
                      <div class="float-end py-3">
                        <span class="size" style="font-size: 12px">5.7MB</span>
                      </div>
                      <div class="d-flex">
                        <i class="fa-solid fa-file-image py-2"></i>
                        <div class="details d-flex py-2">
                          <p class="file-name mb-0">
                            Image.png <strong class="dot">.</strong>
                            <span>preview</span>
                          </p>
                          <span class="time">2m ago</span>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="">
      <div class="modal" id="commentsModal">
        <div class="modal-dialog modal-lg">
          <div class="modal-content">
            <div class="modal-body">
              <p class="modal-title mt-3 mx-3" style="font-size:20px;font-weight:700;">
                Comments Feed
              </p>
              <div class="content my-4 mx-3">
                <comments></comments>
              </div>
              <div class="float-end">
                <button class="btn btn-sm rgbButton px-3" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/vendor/VendorHeader'
import Navbar from '@/components/vendor/VendorNavbar'
import actionNav from '@/components/vendor/ActionNav'
import purchaseOrderInvoice from '@/components/admin/PurchaseOrderInvoice'
import Comments from '@/components/Comments'

export default {
  name: 'BidPurchaseOrder',
  components: {
    Header,
    Navbar,
    actionNav,
    purchaseOrderInvoice,
    Comments
  },
  data () {
    return {
      comment: ''
    }
  }
}
</script>

<style scoped>
.main-content{
  padding-top: 100px;
  overflow-x: auto;
  font-size: 16px;
}
.action .comment-area {
  font-size: 13px;
}
.upload-card .card-body {
  background-color: #dadada;
}
.upload-card .card-body .uploaded-files {
  height: 150px;
  overflow-y: auto;
}
.upload-card .card-body p i {
  font-size: 25px;
}
.upload-card .card-body p span {
  font-size: 18px;
  margin-left: 5px;
  font-weight: 700;
}
li.file-list {
  background-color: #fff;
  margin: 8px 0px;
  cursor: pointer;
}
.upload-area-list i {
  margin-top: 8px;
  font-size: 32px;
  color: rgb(0, 0, 0);
}
.upload-area-list .details {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
.upload-area-list .details p.file-name {
  font-size: 14px;
  font-weight: 400;
}
.upload-area-list .details p.file-name strong.dot {
  font-size: 18px;
  font-weight: 800;
}
.upload-area-list .details p.file-name span {
  font-size: 12px;
  color: rgb(9, 168, 197);
}
.upload-area-list .details .time {
  font-size: 12px;
}
.upload-area-list .size {
  font-size: 13px;
}
</style>

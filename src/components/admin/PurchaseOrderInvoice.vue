<template>
  <div class="col-sm-12 col-lg-12 col-xl-12">
    <div class="text-end">
      <p class="fw-bold my-0">
        Status: <span class="small fw-normal">{{ orderStatus }}</span>
      </p>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <div class="card" id="invoiceCard">
          <div class="card-body">
            <div class="invoice-title">
              <h4 class="text-center fs-5 fw-bold">PURCHASE ORDER</h4>
            </div>
            <div class="row justify-content-between">
              <div class="col-6">
                <address>
                  <p class="mb-0">&lt;Company Name&gt;</p>
                  <p class="mb-0">&lt;Street Address&gt;</p>
                  <p class="mb-0">&lt;City&gt;, &lt;State&gt; &lt;Zip&gt;</p>
                </address>
              </div>
              <div class="col-6 col-lg-4">
                <div class="d-flex justify-content-between">
                  <p class="mb-0">PO Number:</p>
                  <span class="">&lt;12345&gt;</span>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-0">PO Date:</p>
                  <span class="">&lt;7/15/2009&gt;</span>
                </div>
                <div class="d-flex justify-content-between">
                  <p class="mb-0">Vendor ID:</p>
                  <span class="">&lt;Vendor ID&gt;</span>
                </div>
              </div>
            </div>
            <div class="card text-dark">
              <div class="d-flex col-12" id="purchaseID">
                <div class="col-6">
                  <p class="fw-bold mb-0 mx-2">Purchase From</p>
                </div>
                <div class="col-6">
                  <p class="fw-bold mb-0">Ship To:</p>
                </div>
              </div>
              <div class="row">
                <div class="container d-flex mx-5">
                  <div class="col-6">
                    <address>
                      <p class="mb-0 detail">&lt;Vendor Name&gt;</p>
                      <p class="mb-0 detail">&lt;Vendor Street Address&gt;</p>
                      <p class="mb-0 detail">
                        &lt;City&gt;, &lt;State&gt; &lt;Zip&gt;
                      </p>
                    </address>
                  </div>
                  <div class="col-6">
                    <address>
                      <p class="mb-0 detail">&lt;Company Name&gt;</p>
                      <p class="mb-0 detail">&lt;Company Street Address&gt;</p>
                      <p class="mb-0 detail">
                        &lt;City&gt;, &lt;State&gt; &lt;Zip&gt;
                      </p>
                    </address>
                  </div>
                </div>
                <div class="container d-flex mx-5">
                  <div class="col-6">
                    <address>
                      <p class="fw-bold mb-0 detail">Contact Name:</p>
                      <p class="mb-0 detail">&lt;Name&gt;</p>
                    </address>
                  </div>
                  <div class="col-6">
                    <address>
                      <p class="fw-bold mb-0 detail">Conatct Name:</p>
                      <p class="mb-0 detail">&lt;Name&gt;</p>
                    </address>
                  </div>
                </div>
              </div>
              <div class="d-flex col-12" id="purchaseID">
                <div class="col-4 text-center">
                  <p class="fw-bold mb-0 mx-2">Shipping Method</p>
                </div>
                <div class="col-3 text-center">
                  <p class="fw-bold mb-0">Payment Terms</p>
                </div>
                <div class="col-4 text-center">
                  <p class="fw-bold mb-0">Required By Date</p>
                </div>
              </div>
              <div class="d-flex col-12">
                <div class="col-4 text-center">
                  <p class="detail mb-0 mx-2">&lt;UPS&gt;</p>
                </div>
                <div class="col-3 text-center border-start">
                  <p class="detail mb-0">&lt;Net 30 Days&gt;</p>
                </div>
                <div class="col-4 text-center border-start">
                  <p class="detail mb-0">&lt;Date&gt;</p>
                </div>
              </div>
              <div class="d-flex col-12" id="purchaseID">
                <div class="col-7 d-flex">
                  <div class="col-7">
                    <p class="fw-bold mb-0 mx-2">Item Description</p>
                  </div>
                  <div class="col-5 text-center">
                    <p class="fw-bold mb-0">Quantity</p>
                  </div>
                </div>
                <div class="col-5 d-flex">
                  <div class="col-6 text-center">
                    <p class="fw-bold mb-0">Unit Price</p>
                  </div>
                  <div class="col-6 text-center">
                    <p class="fw-bold mb-0">Amount</p>
                  </div>
                </div>
                <!--<Table
                            :fields="fields"
                            :tableData="tableData"
                            :classObject="classObject"
                                />-->
              </div>
              <div class="d-flex col-12 border-bottom">
                <div class="col-7 d-flex">
                  <div class="col-7">
                    <div class="container m-4">
                      <ul class="list-unstyled">
                        <li class="detail">&lt;Item 1&gt;</li>
                        <li class="detail">&lt;Item 2&gt;</li>
                        <li class="detail">&lt;Item 3&gt;</li>
                        <li class="detail">&lt;Item 4&gt;</li>
                        <li class="detail">&lt;Item 5&gt;</li>
                        <li class="detail">&lt;Item 6&gt;</li>
                        <li class="detail">&lt;Item 7&gt;</li>
                        <li class="detail">&lt;Item 8&gt;</li>
                        <li class="detail">&lt;Item 9&gt;</li>
                        <li class="detail">&lt;Item 10&gt;</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-5 border-start text-center">
                    <p class="mb-0"></p>
                  </div>
                </div>
                <div class="col-5 d-flex">
                  <div class="col-6 border-start text-center">
                    <p class="mb-0"></p>
                  </div>
                  <div class="col-6 border-start text-center">
                    <p class="mb-0"></p>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="container d-flex mt-3 justify-content-between">
                  <div class="col-6 mx-3">
                    <p class="fw-bold">Approved By:</p>
                    <div class="d-flex mt-2">
                      <span class="fw-bold mt-1">&times;</span>
                      <hr />
                    </div>
                  </div>
                  <div class="col-6 col-lg-6 d-flex mx-2">
                    <div class="col-6 text-end">
                      <p class="mb-0">Subtotal:</p>
                      <p class="mb-0">Freight:</p>
                      <p class="mb-0">Sales Tax:</p>
                    </div>
                    <div class="col-6 text-start mx-2">
                      <p class="mb-0">$</p>
                      <p class="mb-0"></p>
                      <p class="mb-0"></p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="">
                <div class="col-6 d-flex ms-auto mx-2">
                  <div class="col-6 text-end mx-5">
                    <p class="fw-bold mb-0">Order Total:</p>
                  </div>
                  <div class="col-6 mx-2">
                    <p class="mb-0"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PurchaseOrderInvoice',
  data () {
    return {
      orderStatus: 'Accepted'
    }
  }
}
</script>

<style scoped>
#invoiceCard {
  background: #718a8b;
  color: white;
}
#purchaseID {
  background: #d3e0b5;
}
p, span, li {
  font-size: 14px;
}
.detail {
  font-size: 12px;
}
#detailCard {
  color: dark;
}
</style>

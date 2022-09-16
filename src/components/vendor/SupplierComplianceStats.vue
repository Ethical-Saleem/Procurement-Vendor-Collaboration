<template>
  <div class="row justify-content-between">
    <p class="h4">Supplier Compliance Stats</p>
    <div class="col-5 col-sm-5 col-md-3 col-lg-2">
      <doughnut-chart
      :chartData="{
        labels: ['Color1', 'Color2'],
        datasets: [{
          data: [90, 270],
          backgroundColor: ['rgb(91, 211, 102)', 'rgb(207, 216, 220)'],
          borderColor: ['rgb(91, 211, 102)', 'rgb(207, 216, 220)'],
          borderWidth: 1,
          cutout: '80%'
          }]
        }"
        height=205
        width=205
      ></doughnut-chart>
    </div>
    <div class="col-5 col-sm-5 col-md-3 col-lg-2">
      <doughnut-chart
      :chartData="{
        labels: ['Color1', 'Color2'],
        datasets: [{
              data: [270, 90],
              backgroundColor: ['rgb(234, 61, 47)', 'rgb(207, 216, 220)'],
              borderColor: ['rgb(234, 61, 47)', 'rgb(207, 216, 220)'],
              borderWidth: 1,
              cutout: '80%'
            }]
        }"
        height=205
        width=205
      ></doughnut-chart>
    </div>
    <div class="col-5 col-sm-5 col-md-3 col-lg-2">
      <doughnut-chart
      :chartData="{
        labels: ['Color1', 'Color2'],
        datasets: [{
              data: [180, 180],
              backgroundColor: ['rgb(249, 168, 38)', 'rgb(207, 216, 220)'],
              borderColor: ['rgb(249, 168, 38)', 'rgb(207, 216, 220)'],
              borderWidth: 1,
              cutout: '80%'
            }]
        }"
        height=205
        width=205
      ></doughnut-chart>
    </div>
    <div class="col-5 col-sm-5 col-md-3 col-lg-2">
      <doughnut-chart
      :chartData="{
        labels: ['Color1', 'Color2'],
        datasets: [{
              data: [225, 135],
              backgroundColor: ['rgb(21, 101, 216)', 'rgb(207, 216, 220)'],
              borderColor: ['rgb(21, 101, 216)', 'rgb(207, 216, 220)'],
              borderWidth: 1,
              cutout: '80%'
            }]
        }"
        height=205
        width=205
      ></doughnut-chart>
    </div>
    <div class="col-5 col-sm-5 col-md-3 col-lg-2">
      <doughnut-chart
      :chartData="{
        labels: ['Color1', 'Color2'],
        datasets: [{
              data: [135, 225],
              backgroundColor: ['rgb(139, 29, 162)', 'rgb(207, 216, 220)'],
              borderColor: ['rgb(139, 29, 162)', 'rgb(207, 216, 220)'],
              borderWidth: 1,
              cutout: '80%'
            }]
        }"
        height=205
        width=205
      ></doughnut-chart>
    </div>
  </div>
</template>

<script>
import doughnutChart from '@/components/vendor/DoughnutChart.vue'

export default {
  name: 'SupplierCompliance',
  components: {
    doughnutChart
  },
  data () {
    return {
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>

<style>

</style>

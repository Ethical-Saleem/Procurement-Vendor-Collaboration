<template>
  <Doughnut
  :chartData="chartData"
  :chartOptions="chartOptions"
  :height="height"
  :width="width"
  >
  </Doughnut>
</template>

<script>
import { Doughnut } from 'vue-chartjs'
import { Chart, registerables } from 'chart.js'
Chart.register(...registerables)

export default {
  name: 'DoughnutChart',
  components: {
    Doughnut
  },
  props: {
    chartData: {
      type: Object,
      required: true
    },
    chartOptions: {
      type: Object,
      default: () => {}
    },
    width: {
      type: Number,
      default: 400
    },
    height: {
      type: Number,
      default: 400
    }
  }
//   data () {
//     return {
//       chartOptions: {
//         responsive: true,
//         animations: false
//       }
//     }
//   }
}
</script>

<style scoped>
</style>

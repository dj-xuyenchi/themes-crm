<script setup lang="ts">
import { ref } from 'vue';
const chartOptions = ref({
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
  },
  tooltip: {
    fixed: {
      enabled: false,
      position: 'topRight',
    },
  },
});
const series = ref([
  {
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41],
  },
]);
</script>

<template>
  <div id="chart">
    <apexchart type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

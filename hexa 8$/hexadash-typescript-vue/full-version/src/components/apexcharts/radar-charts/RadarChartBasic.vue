<script setup lang="ts">
import { ref } from 'vue';
const series = ref([
  {
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  },
]);
const chartOptions = ref({
  chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Basic Radar Chart',
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June'],
  },
});
</script>

<template>
  <div id="chart">
    <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const series = ref([44, 55, 41, 17, 15]);
const chartOptions = ref({
  chart: {
    type: 'donut',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
});
</script>

<template>
  <div id="chart">
    <apexchart type="donut" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const series = ref([44, 55, 13, 43, 22]);
const chartOptions = ref({
  chart: {
    width: 380,
    type: 'pie',
  },
  labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
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
    <apexchart type="pie" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

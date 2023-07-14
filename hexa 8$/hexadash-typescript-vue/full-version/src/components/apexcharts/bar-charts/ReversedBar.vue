<script setup lang="ts">
import { ref } from 'vue';
const series = ref([
  {
    data: [400, 430, 448, 470, 540, 580, 690],
  },
]);
const chartOptions = ref({
  chart: {
    type: 'bar',
    height: 350,
  },
  annotations: {
    xaxis: [
      {
        x: 500,
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            color: '#fff',
            background: '#00E396',
          },
          text: 'X annotation',
        },
      },
    ],
    yaxis: [
      {
        y: 'July',
        y2: 'September',
        label: {
          text: 'Y annotation',
        },
      },
    ],
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: ['June', 'July', 'August', 'September', 'October', 'November', 'December'],
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
  },
  yaxis: {
    reversed: true,
    axisTicks: {
      show: true,
    },
  },
});
</script>

<template>
  <div id="chart">
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

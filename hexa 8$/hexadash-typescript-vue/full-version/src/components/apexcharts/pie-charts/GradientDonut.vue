<script setup lang="ts">
import { ref } from 'vue';
const series = ref([44, 55, 41, 17, 15]);
const chartOptions = ref({
  chart: {
    width: 380,
    type: 'donut',
  },
  plotOptions: {
    pie: {
      startAngle: -90,
      endAngle: 270,
    },
  },
  dataLabels: {
    enabled: false,
  },
  fill: {
    type: 'gradient',
  },
  legend: {
    formatter: function (val: any, opts: any) {
      return val + ' - ' + opts.w.globals.series[opts.seriesIndex];
    },
  },
  title: {
    text: 'Gradient Donut with custom Start-angle',
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

<template>
  <div id="chart">
    <apexchart type="radialBar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BasicPic',
  components: {},
  data() {
    return {
      series: [70],
      chartOptions: {
        chart: {
          height: 350,
          type: 'radialBar',
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            },
          },
        },
        labels: ['Cricket'],
      },
    };
  },
});
</script>

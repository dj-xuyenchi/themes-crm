<template>
  <div id="chart">
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
const colors = ['#008FFB', '#13D8AA', '#FF9800', '#E91E63', '#7D02EB', '#546E7A', '#1B998B', '#A300D6'];
export default defineComponent({
  name: 'DistributedColumns',
  components: {},
  data() {
    return {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
        },
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'bar',
          events: {
            click: function () {},
          },
        },
        colors: colors,
        plotOptions: {
          bar: {
            borderRadius: 6,
            columnWidth: '45%',
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        legend: {
          show: false,
        },
        xaxis: {
          categories: [
            ['John', 'Doe'],
            ['Joe', 'Smith'],
            ['Jake', 'Williams'],
            'Amber',
            ['Peter', 'Brown'],
            ['Mary', 'Evans'],
            ['David', 'Wilson'],
            ['Lily', 'Roberts'],
          ],
          labels: {
            style: {
              colors: colors,
              fontSize: '12px',
            },
          },
        },
      },
    };
  },
});
</script>

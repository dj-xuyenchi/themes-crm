<script setup lang="ts">
import PropTypes from 'vue-types';
import DashboardChart from './Chartjs.vue';

const props = defineProps({
  height: PropTypes.number.def(479),
  labels: PropTypes.arrayOf(PropTypes.string).def([
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]),
  datasets: PropTypes.arrayOf(PropTypes.object).def([
    {
      data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
      borderColor: '#001737',
      borderWidth: 1,
      fill: false,
    },
    {
      data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
      borderColor: '#1ce1ac',
      borderWidth: 1,
      fill: false,
    },
  ]),
  id: PropTypes.string.def('myChart'),
  className: PropTypes.string.def('myChart'),
  legend: PropTypes.object.def({
    display: false,
    labels: {
      display: false,
    },
  }),
  layout: PropTypes.object.def({}),
  elements: PropTypes.object.def({
    line: {
      tension: 0.5,
      borderCapStyle: 'round',
      borderJoinStyle: 'round',
      capBezierPoints: true,
    },
    point: {
      radius: 0,
      z: 5,
    },
  }),
  scales: PropTypes.object.def({
    y: {
      display: false,
    },
    x: {
      display: false,
    },
  }),
  tooltip: PropTypes.object.def({}),
  options: PropTypes.object.def({}),
});
</script>

<template>
  <div class="doughnutchart-inner">
    <div class="doughnutchart-inner-text">
      <span v-if="datasets[0].centerText === ''" class="doughnutchart-inner-content"
        >{{ datasets[0].data.reduce((a: number, b: number) => a + b, 0) }}%</span
      >
      <span v-else class="doughnutchart-inner-content">{{ datasets[0].centerText }}</span>
      <span class="doughnutchart-inner-label">{{ datasets[0].centerTextLabel }}</span>
    </div>

    <DashboardChart
      :tooltip="tooltip"
      type="doughnut"
      :datasets="datasets"
      :id="id"
      :className="className"
      :labels="labels"
      :height="height"
      :options="options"
      :legend="legend"
      :layout="layout"
      :elements="elements"
      :scales="scales"
    />
  </div>
</template>

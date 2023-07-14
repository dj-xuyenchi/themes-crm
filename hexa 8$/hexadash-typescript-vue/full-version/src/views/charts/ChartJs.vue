<script setup lang="tsx">
import { Main } from '../styled';
import Chart from '../../components/utilities/Chartjs.vue';
import { customTooltips } from '../../components/utilities/utilities';
import { ref } from 'vue';
import { ChartContainer } from '../dashboard/style';

const stackedOption = ref({
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    y: {
      stacked: true,
      gridLines: {
        color: '#e5e9f2',
      },
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: '#182b49',
      },
    },
    x: {
      stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: '#182b49',
      },
    },
  },
});
const horizontalOption = ref({
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    y: {
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        fontColor: '#182b49',
      },
    },
    x: {
      gridLines: {
        color: '#e5e9f2',
      },

      ticks: {
        beginAtZero: true,
        fontSize: 11,
        fontColor: '#182b49',
        max: 100,
      },
    },
  },
});
const lineChartOption = ref({
  responsive: true,
  maintainAspectRatio: true,
  layout: {
    padding: {
      left: '-10',
      right: 0,
      top: 0,
      bottom: '-10',
    },
  },
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  tooltips: {
    mode: 'label',
    intersect: false,
    position: 'average',
    enabled: false,
    custom: customTooltips,
    callbacks: {
      label(t: any, d: any) {
        const dstLabel = d.datasets[t.datasetIndex].label;
        const { yLabel } = t;
        return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
      },
      labelColor(tooltipItem: any, chart: any) {
        const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
        return {
          backgroundColor: dataset.borderColor,
          borderColor: 'transparent',
          usePointStyle: true,
        };
      },
    },
  },
});
const lineChartData = ref([
  {
    data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
    borderColor: '#001737',
    borderWidth: 1,
    fill: false,
    label: 'Lose',
  },
  {
    data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
    borderColor: '#1ce1ac',
    borderWidth: 1,
    fill: false,
    label: 'Profit',
  },
]);
const areaChartData = ref([
  {
    data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
    borderColor: '#001737',
    borderWidth: 1,
    fill: true,
    label: 'Lose',
    backgroundColor: '#00173750',
    pointHoverBorderColor: 'transparent',
  },
  {
    data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
    borderColor: '#1ce1ac',
    borderWidth: 1,
    fill: true,
    label: 'Profit',
    backgroundColor: '#1ce1ac50',
    pointHoverBorderColor: 'transparent',
  },
]);
const areaChartOption = ref({
  maintainAspectRatio: true,
  hover: {
    mode: 'nearest',
    intersect: false,
  },
  layout: {
    padding: {
      left: -10,
      right: 0,
      top: 2,
      bottom: -10,
    },
  },
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  elements: {
    point: {
      radius: 0,
    },
  },
  scales: {
    y: {
      stacked: true,
      gridLines: {
        display: false,
        color: '#e5e9f2',
      },
      ticks: {
        beginAtZero: true,
        fontSize: 10,
        display: false,
        stepSize: 20,
      },
    },
    x: {
      stacked: true,
      gridLines: {
        display: false,
      },

      ticks: {
        beginAtZero: true,
        fontSize: 11,
        display: false,
      },
    },
  },
  tooltips: {
    mode: 'label',
    intersect: false,
    position: 'average',
    enabled: false,
    custom: customTooltips,
    callbacks: {
      label(t: any, d: any) {
        const dstLabel = d.datasets[t.datasetIndex].label;
        const { yLabel } = t;
        return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
      },
      labelColor(tooltipItem: any, chart: any) {
        const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
        return {
          backgroundColor: dataset.borderColor,
          borderColor: 'transparent',
          usePointStyle: true,
        };
      },
    },
  },
});
const transparentChartData = ref([
  {
    data: [20, 60, 50, 45, 50, 60, 70, 40, 45, 35, 25, 30],
    backgroundColor: 'rgba(0,23,55, .5)',
    label: 'Profit',
    barPercentage: 0.6,
  },
  {
    data: [10, 40, 30, 40, 60, 55, 45, 35, 30, 20, 15, 20],
    backgroundColor: 'rgba(28,225,172, .5)',
    label: 'Lose',
    barPercentage: 0.6,
  },
]);
const transparentChartOption = ref({
  maintainAspectRatio: true,
  responsive: true,
  legend: {
    display: true,
    position: 'bottom',
    align: 'start',
    labels: {
      boxWidth: 6,
      display: true,
      usePointStyle: true,
    },
  },
  layout: {
    padding: {
      left: '0',
      right: 0,
      top: 0,
      bottom: '0',
    },
  },
  scales: {
    y: {
      gridLines: {
        color: '#e5e9f2',
      },
      ticks: {
        beginAtZero: true,
        fontSize: 13,
        fontColor: '#182b49',
        max: 80,
        stepSize: 20,
        callback(value: any) {
          return `${value}k`;
        },
      },
    },
    x: {
      gridLines: {
        display: false,
      },
      ticks: {
        beginAtZero: true,
        fontSize: 13,
        fontColor: '#182b49',
      },
    },
  },
  tooltips: {
    mode: 'label',
    intersect: false,
    position: 'average',
    enabled: false,
    custom: customTooltips,
    callbacks: {
      label(t: any, d: any) {
        const dstLabel = d.datasets[t.datasetIndex].label;
        const { yLabel } = t;
        return `<span class="chart-data">${yLabel}</span> <span class="data-label">${dstLabel}</span>`;
      },
      labelColor(tooltipItem: any, chart: any) {
        const dataset = chart.config.data.datasets[tooltipItem.datasetIndex];
        return {
          backgroundColor: dataset.backgroundColor,
          borderColor: 'transparent',
          usePointStyle: true,
        };
      },
    },
  },
});
</script>

<template>
  <div>
    <sdPageHeader
      title="ChartJs"
      class="ninjadash-page-header-main"
      :routes="[
        { path: '/', breadcrumbName: 'Charts' },
        { path: 'demo-four', breadcrumbName: 'Chartjs' },
      ]"
    ></sdPageHeader>
    <Main>
      <ChartContainer>
        <a-row :gutter="25">
          <a-col :md="12" :sm="24" :xs="24">
            <sdCards title="Bar Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="bar"
                  :options="{
                    maintainAspectRatio: true,
                    responsive: true,
                  }"
                  :height="200"
                  className="barChart"
                  id="barChart"
                />
              </div>
            </sdCards>
            <sdCards title="Stacked Chart">
              <div class="ninjadash-chart-container">
                <Chart type="bar" :height="200" className="stacked" id="stacked" :options="stackedOption" />
              </div>
            </sdCards>
            <sdCards title="Area Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="line"
                  :options="areaChartOption"
                  :datasets="areaChartData"
                  className="areaChart"
                  id="areaChart"
                  :height="200"
                />
              </div>
            </sdCards>
            <sdCards title="Donut Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="doughnut"
                  :label="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                  :options="{
                    cutoutPercentage: 70,
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                      display: false,
                      position: 'bottom',
                    },
                    animation: {
                      animateScale: true,
                      animateRotate: true,
                    },
                  }"
                  :datasets="[
                    {
                      data: [20, 20, 30, 5, 25],
                      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
                    },
                  ]"
                  className="donutChart"
                  id="donutChart"
                  :height="200"
                />
              </div>
            </sdCards>
          </a-col>
          <a-col :md="12" :sm="24" :xs="24">
            <sdCards title="Line Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="line"
                  className="lineChart"
                  id="lineChart"
                  :options="lineChartOption"
                  :datasets="lineChartData"
                  :height="200"
                />
              </div>
            </sdCards>
            <sdCards title="Transparent Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="bar"
                  className="transparentChart"
                  id="transparentChart"
                  :height="200"
                  :options="transparentChartOption"
                  :datasets="transparentChartData"
                />
              </div>
            </sdCards>
            <sdCards title="Pie Chart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="pie"
                  :label="['Jan', 'Feb', 'Mar', 'Apr', 'May']"
                  :options="{
                    maintainAspectRatio: true,
                    responsive: true,
                    legend: {
                      display: false,
                    },
                    animation: {
                      animateScale: true,
                      animateRotate: true,
                    },
                  }"
                  :datasets="[
                    {
                      data: [20, 20, 30, 5, 25],
                      backgroundColor: ['#560bd0', '#007bff', '#00cccc', '#cbe0e3', '#74de00'],
                    },
                  ]"
                  className="pieChart"
                  id="pieChart"
                />
              </div>
            </sdCards>
          </a-col>
        </a-row>
      </ChartContainer>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import DashboardChart from '@/components/utilities/Chartjs.vue';
import { CardBarChart, ChartContainer } from '../style';
import { BorderLessHeading } from '../../styled';
import chartData from '@/demoData/dashboardChartContent.json';

const profitGrowthData = chartData.profitGrowth;

const profitGrowthDataset = [
  {
    data: profitGrowthData.orders,
    backgroundColor: `rgba(130, 49, 211, 0.5)`,
    hoverBackgroundColor: '#8231D3',
    label: 'Orders',
    average: '50.8',
    maxBarThickness: 10,
    barThickness: 16,
    percent: 49,
  },
  {
    data: profitGrowthData.sales,
    backgroundColor: 'rgba(0, 170, 255, 0.5)',
    hoverBackgroundColor: '#00AAFF',
    label: 'Sales',
    average: '$28k',
    maxBarThickness: 10,
    barThickness: 16,
    percent: 60,
  },
];

const innerWidth = ref(0);
onMounted(() => {
  innerWidth.value = window.innerWidth;
});
</script>

<template>
  <BorderLessHeading>
    <sdCards>
      <template #title>
        <div class="ninjadash-card-title-wrap">
          <span class="ninjadash-card-title-text">{{ profitGrowthData.title }}</span>
          <span class="ninjadash-card-title-extra-text">
            <span class="ninjadash-total-chart-total">{{ profitGrowthData.total }}</span>
            <span
              :class="
                profitGrowthData.growthStatus === 'down'
                  ? 'ninjadash-total-chart-status ninjadash-total-chart-status-down'
                  : 'ninjadash-total-chart-status ninjadash-total-chart-status-up'
              "
            >
              <unicon :name="profitGrowthData.growthStatus === 'growth' ? 'arrow-up' : 'arrow-down'"></unicon>
              25.36%
            </span>
          </span>
        </div>
      </template>

      <div v-if="!profitGrowthData" class="sd-spin">
        <a-spin />
      </div>

      <CardBarChart v-else>
        <div class="profitGrowth-barChart">
          <div class="card-bar-top">
            <ul v-if="profitGrowthDataset" class="profitGrowth-list">
              <li v-for="(item, key) in profitGrowthDataset" :key="key + 1" class="custom-label">
                <span
                  :style="{
                    backgroundColor: item.hoverBackgroundColor,
                  }"
                />
                {{ item.label }}
              </li>
            </ul>
          </div>
        </div>
        <ChartContainer>
          <div class="ninjadash-chart-container">
            <DashboardChart
              className="ninjadash-profit-growth"
              id="ninjadash-profit-growth"
              :labels="profitGrowthData.labels"
              :datasets="profitGrowthDataset"
              type="bar"
              :layout="{
                padding: {
                  top: 20,
                },
              }"
              :tooltip="{
                callbacks: {
                  label(t: any) {
                    const dstLabel = t.dataset.label;
                    const { formattedValue } = t;
                    return `  ${formattedValue} ${dstLabel}`;
                  },
                  labelColor(t: any) {
                    return {
                      backgroundColor: t.dataset.hoverBackgroundColor,
                      borderColor: 'transparent',
                    };
                  },
                },
              }"
              :scales="{
                y: {
                  grid: {
                    color: '#485e9029',
                    borderDash: [3, 3],
                    zeroLineColor: '#485e9029',
                    zeroLineWidth: 1,
                    zeroLineBorderDash: [3, 3],
                  },
                  ticks: {
                    beginAtZero: true,
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                    max: Math.max(...profitGrowthData.orders),
                    stepSize: Math.max(...profitGrowthData.orders) / 5,
                    display: true,
                    min: 0,
                    padding: 10,
                  },
                },

                x: {
                  grid: {
                    display: true,
                    zeroLineWidth: 2,
                    zeroLineColor: '#fff',
                    color: 'transparent',
                    z: 1,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontSize: 12,
                    fontColor: '#182b49',
                    min: 0,
                  },
                },
              }"
              :height="innerWidth <= 575 ? 200 : 156"
            />
          </div>
        </ChartContainer>
      </CardBarChart>
    </sdCards>
  </BorderLessHeading>
</template>

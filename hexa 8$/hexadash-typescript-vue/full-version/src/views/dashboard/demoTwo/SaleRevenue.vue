<script setup lang="ts">
import { ref, computed } from 'vue';
import { customTooltips, chartLinearGradient } from '../../../components/utilities/utilities';
import Cards from '../../../components/cards/frame/CardsFrame.vue';
import { BorderLessHeading } from '../../styled';
import { SalesRevenueWrapper, ChartContainer } from '../style';
import Chart from '../../../components/utilities/Chartjs.vue';

const height =
  window.innerWidth <= 1367 ? (window.innerWidth <= 1199 ? (window.innerWidth <= 575 ? 300 : 150) : 210) : 120;
const revenue = ref('today');
const isLoading = ref(false);

const handleTabActivation = (event: Event, value: any) => {
  event.preventDefault();
  isLoading.value = true;
  revenue.value = value;
  setTimeout(() => {
    isLoading.value = false;
  }, 100);
};

const tooltip = {
  callbacks: {
    title() {
      return `Total Revenue`;
    },
    label(t: any) {
      const { formattedValue, dataset } = t;
      return `${formattedValue}k ${dataset.label}`;
    },
  },
};

const salesRevenue: any = {
  today: {
    users: [20, 36, 25, 50, 40, 55, 40, 75, 35, 40, 35, 58],
    labels: ['2h', '4h', '6h', '8h', '10h', '12h', '14h', '16h', '18h', '20h', '22h', '24h'],
  },
  week: {
    users: [40, 30, 35, 20, 25, 40, 35],
    labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  },
  month: {
    users: [45, 20, 35, 32, 50, 45, 55, 71, 36, 65, 55, 75],
    labels: ['Jan', 'Feb', 'Mar', 'App', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Nov', 'Oct', 'Dec'],
  },
};
const revenueData = salesRevenue[revenue.value];
const salesRevenueDatasets = computed(() => {
  return [
    {
      data: salesRevenue[revenue.value].users,
      borderColor: '#8231D3',
      borderWidth: 3,
      fill: true,
      backgroundColor: () =>
        chartLinearGradient(document.getElementById('ninjadash-sales-revenue'), 300, {
          start: '#8231D340',
          end: '#ffffff05',
        }),
      label: 'Current period',
      pointStyle: 'circle',
      pointRadius: '0',
      hoverRadius: '9',
      pointBorderColor: '#fff',
      pointBackgroundColor: '#8231D3',
      hoverBorderWidth: 5,
      amount: '$7,596',
      amountClass: 'current-amount',
      lineTension: 0.5,
    },
  ];
});

const scales = {
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
      suggestedMin: 50,
      suggestedMax: 80,
      stepSize: 20,
      callback(label: any) {
        return `${label}k`;
      },
    },
  },

  x: {
    grid: {
      display: true,
      zeroLineWidth: 1,
      zeroLineColor: 'transparent',
      color: 'transparent',
      z: 1,
      tickMarkLength: 0,
    },
    ticks: {
      padding: 10,
    },
  },
};
</script>

<template>
  <SalesRevenueWrapper>
    <BorderLessHeading v-if="revenueData">
      <ChartContainer>
        <Cards>
          <template #title>
            <div class="ninjadash-card-title-wrap">
              <span class="ninjadash-card-title-text"> Sales Revenue </span>
            </div>
          </template>
          <template #button>
            <div class="ninjadash-card-nav">
              <ul>
                <li :class="revenue === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
                  <router-link @click="(e: any) => handleTabActivation(e, 'today')" to="#"> Today </router-link>
                </li>
                <li :class="revenue === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                  <router-link @click="(e: any) => handleTabActivation(e, 'week')" to="#"> Week </router-link>
                </li>
                <li :class="revenue === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                  <router-link @click="(e: any) => handleTabActivation(e, 'month')" to="#"> Month </router-link>
                </li>
              </ul>
            </div>
          </template>
          <div class="ninjadash-chart-container ninjadash-sales-revenue-lineChart">
            <template v-if="!isLoading">
              <Chart
                type="line"
                id="ninjadash-sales-revenue"
                className="ninjadash-sales-revenue"
                :labels="salesRevenue[revenue].labels"
                :datasets="salesRevenueDatasets"
                :scales="scales"
                :tooltip="{
                  custom: customTooltips,
                  ...tooltip,
                }"
                :height="height"
              />
            </template>
            <div v-else class="ninjadash-sales-revenue-loading"><a-spin /></div>
          </div>
        </Cards>
      </ChartContainer>
    </BorderLessHeading>
  </SalesRevenueWrapper>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
import DashboardChart from '@/components/utilities/Chartjs.vue';
import { customTooltips } from '@/components/utilities/utilities';
import { BorderLessHeading } from '../../styled';
import { CardBarChart, ChartContainer, UserOverviewStyle } from '../style';

let salesGrowths: any = {
  today: {
    labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    orders: [35, 55, 25, 60, 42, 80, 35],
    sales: [10, 30, 8, 30, 22, 38, 45],
  },
  week: {
    labels: ['1-2', '2-3', '3-4', '4-5', '5-6', '6-7', '7-8'],
    orders: [12, 34, 76, 23, 48, 34, 78],
    sales: [34, 25, 34, 8, 45, 65, 18],
  },
  month: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    orders: [53, 55, 52, 6, 24, 8, 56],
    sales: [16, 54, 80, 37, 76, 78, 54],
  },
};

//const { salesGrowthsData } = salesGrowths;

export default defineComponent({
  components: {
    DashboardChart,
    BorderLessHeading,
    CardBarChart,
    ChartContainer,
    UserOverviewStyle,
  },
  setup() {
    const overviewTab = ref('today');
    const isLoading = ref(false);

    /* Tab Activation */
    const handleTabActivation = (value: any) => {
      isLoading.value = true;
      overviewTab.value = value;
      setTimeout(() => {
        isLoading.value = false;
      }, 0);
    };
    const height = window.innerWidth < 1399 ? (window.innerWidth < 575 ? 200 : 95) : 185;
    const salesGrowthsDataset = computed(() => [
      {
        data: salesGrowths[overviewTab.value].orders,
        backgroundColor: 'rgba(130, 49, 211, 0.5)',
        hoverBackgroundColor: '#8231D3',
        label: 'Target',
        maxBarThickness: 10,
        barThickness: 12,
        total: '5,875',
        growthRate: '25',
        growthStatus: 'up',
        labelType: 'primary',
      },
      {
        data: salesGrowths[overviewTab.value].sales,
        backgroundColor: 'rgba(0,170,255,0.5)',
        hoverBackgroundColor: '#00AAFF',
        label: 'Total Sales',
        maxBarThickness: 10,
        barThickness: 12,
        total: '2,435',
        growthRate: '17',
        growthStatus: 'down',
        labelType: 'info',
      },
    ]);

    return {
      customTooltips,
      salesGrowths,
      salesGrowthsDataset,
      handleTabActivation,
      height,
      overviewTab,
      isLoading,
    };
  },
});
</script>

<template>
  <BorderLessHeading v-if="salesGrowths[overviewTab] !== null">
    <UserOverviewStyle>
      <ChartContainer>
        <sdCards title="Sales Growth">
          <template #button>
            <div class="ninjadash-card-nav">
              <ul>
                <li :class="overviewTab === 'today' ? 'ninjadash-active' : 'ninjadash-today'">
                  <router-link @click="() => handleTabActivation('today')" to="#"> Today </router-link>
                </li>
                <li :class="overviewTab === 'week' ? 'ninjadash-active' : 'ninjadash-week'">
                  <router-link @click="() => handleTabActivation('week')" to="#"> Week </router-link>
                </li>
                <li :class="overviewTab === 'month' ? 'ninjadash-active' : 'ninjadash-month'">
                  <router-link @click="() => handleTabActivation('month')" to="#"> Month </router-link>
                </li>
              </ul>
            </div>
          </template>
          <CardBarChart class="ninjadash-chart-container">
            <div class="label-detailed">
              <div class="label-detailed__single" v-for="(item, index) in salesGrowthsDataset" :key="index">
                <strong class="label-detailed__total">${{ item.total }}</strong>
                <span :class="`label-detailed__status color-${item.growthStatus === 'up' ? 'success' : 'danger'}`">
                  <unicon name="arrow-up" width="16" v-if="item.growthStatus === 'up'"></unicon>
                  <unicon name="arrow-down" width="16" v-if="item.growthStatus === 'down'"></unicon>
                  <strong>{{ item.growthRate }}%</strong>
                </span>
              </div>
            </div>
            <DashboardChart
              v-if="!isLoading"
              className="userChanrt"
              id="userCharts"
              :labels="salesGrowths[overviewTab].labels"
              :datasets="salesGrowthsDataset"
              :height="height"
              :layout="{
                padding: {
                  top: 20,
                },
              }"
              type="bar"
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
                    max: Math.max(...salesGrowths[overviewTab].orders),
                    stepSize: Math.floor(Math.max(...salesGrowths[overviewTab].orders) / 5),
                    callback(label: any) {
                      return `${label}k`;
                    },
                  },
                },
                x: {
                  grid: {
                    display: true,
                    zeroLineWidth: 2,
                    zeroLineColor: '#485e9029',
                    color: 'transparent',
                    z: 1,
                  },
                  ticks: {
                    beginAtZero: true,
                    fontSize: 14,
                    fontFamily: 'Jost',
                    color: '#8C90A4',
                  },
                },
              }"
              :tooltip="{
                external: customTooltips,
                callbacks: {
                  label(t: any) {
                    const dstLabel = t.dataset.label;
                    const { formattedValue } = t;
                    return ` ${dstLabel}:${formattedValue}k`;
                  },
                  labelColor(t: any) {
                    return {
                      backgroundColor: t.dataset.hoverBackgroundColor,
                      borderColor: 'transparent',
                    };
                  },
                },
              }"
            />
          </CardBarChart>
        </sdCards>
      </ChartContainer>
    </UserOverviewStyle>
  </BorderLessHeading>
</template>

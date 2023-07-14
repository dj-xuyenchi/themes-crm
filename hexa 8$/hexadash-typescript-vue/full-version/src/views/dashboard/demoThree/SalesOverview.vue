<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import DoughnutChart from '@/components/utilities/DoughnutChart.vue';
import { SalesOverviewStyleWrap2 } from '../style';
import { themeColor } from '@/config/theme/themeVariables';
import { useStore } from 'vuex';

const themeColors: any = themeColor;
const SalesData: Record<string, number[]> = {
  today: [3233, 2344, 1304],
  week: [6955, 5644, 2347],
  month: [12345, 15567, 13590],
};

const labels = ['Shirt', 'Pant', 'Footwear'];

const overviewTab = ref('today');
const salesOverviewData = ref<number[] | null>(null);
const totalSale = ref(0);
const isLoading = ref(false);
const height = 200;
const { state } = useStore();
const mainContent = computed(() => state.themeLayout.main);

const handleTabActivation = (value: any, event: any) => {
  event.preventDefault();
  isLoading.value = true;
  overviewTab.value = value;
  salesOverviewData.value = SalesData[overviewTab.value];
  totalSale.value = salesOverviewData.value !== null && salesOverviewData.value.reduce((a: any, b: any) => a + b, 0);
  setTimeout(() => {
    isLoading.value = false;
  }, 0);
};

onMounted(() => {
  salesOverviewData.value = SalesData[overviewTab.value];
  totalSale.value = SalesData[overviewTab.value].reduce((a: any, b: any) => a + b, 0);
});

const datasets = computed(() => {
  return [
    {
      data: salesOverviewData.value,
      backgroundColor: ['#FA8B0C', '#8231D3', '#5840FF'],
      centerText: '$7.9K',
      centerTextLabel: 'Revenue',
    },
  ];
});

const options = {
  cutout: 62,
  borderWidth: 2,
  maintainAspectRatio: false,
  responsive: false,
  borderColor: `${themeColors[mainContent.value]['white-background']}`,
  plugins: {
    legend: {
      display: false,
    },
    labels: {
      display: false,
    },
  },
  animation: {
    animateScale: true,
    animateRotate: true,
  },
};
</script>

<template>
  <SalesOverviewStyleWrap2>
    <sdCards v-if="salesOverviewData !== null" title="Sales Overview">
      <template #button>
        <div class="ninjadash-card-nav">
          <ul>
            <li :class="overviewTab === 'today' ? 'ninjadash-active' : 'ninjadash-deactivate'">
              <router-link type="button" @click="(e: any) => handleTabActivation('today', e)" to="#">
                Today
              </router-link>
            </li>
            <li :class="overviewTab === 'week' ? 'ninjadash-active' : 'ninjadash-deactivate'">
              <router-link @click="(e: any) => handleTabActivation('week', e)" to="#"> Week </router-link>
            </li>
            <li :class="overviewTab === 'month' ? 'ninjadash-active' : 'ninjadash-deactivate'">
              <router-link @click="(e: any) => handleTabActivation('month', e)" to="#"> Month </router-link>
            </li>
          </ul>
        </div>
      </template>
      <div class="ninjadash-overview-wrap">
        <div class="ninjadash-overview-wrap__inner" :style="{ height: height + 'px' }">
          <DoughnutChart
            v-if="!isLoading"
            type="doughnut"
            id="salesOverview"
            className="salesOverview"
            :labels="labels"
            :datasets="datasets"
            :height="height"
            :options="options"
            :tooltip="{
              backgroundColor: '#FFF',
              titleFontSize: 16,
              titleFontColor: '#0066ff',
              bodyFontColor: '#000',
              bodyFontSize: 14,
              displayColors: false,

              callbacks: {
                title(t: any) {
                  console.log(t);
                },
              },
            }"
          />
        </div>

        <div class="ninjadash-overview-percentage">
          <div v-for="(value, index) in salesOverviewData" class="ninjadash-overview-percentage__item" :key="index">
            <span
              class="ninjadash-overview-percentage__point"
              :style="{
                backgroundColor: datasets[0].backgroundColor[index],
              }"
            />
            <span class="ninjadash-overview-percentage__text">{{ Math.round((value / totalSale) * 100) }}%</span>
          </div>
        </div>

        <div class="ninjadash-overview-box align-center-v justify-content-between">
          <div v-for="(value, index) in salesOverviewData" class="ninjadash-overview-box-item" :key="index">
            <h4>{{ value.toLocaleString() }}</h4>
            <p>{{ labels[index] }}</p>
          </div>
        </div>
      </div>
    </sdCards>
  </SalesOverviewStyleWrap2>
</template>

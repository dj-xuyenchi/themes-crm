<script lang="ts">
import { defineComponent, ref, computed } from 'vue';
import { customTooltips, chartLinearGradient } from '@/components/utilities/utilities';
import Cards from '@/components/cards/frame/CardsFrame.vue';
import { BorderLessHeading } from '../../styled';
import { SalesReportWrapper, ChartContainer } from '../style';
import Chart from '@/components/utilities/Chartjs.vue';

const salesReport = defineComponent({
  name: 'SalesReport',
  components: {
    Cards,
    BorderLessHeading,
    SalesReportWrapper,
    ChartContainer,
    Chart,
  },
  setup() {
    const height = window.innerWidth <= 575 ? 200 : 100;
    const isLoading = ref(false);

    const tooltip = {
      usePointStyle: true,
      callbacks: {
        label(t: any) {
          const dstLabel = t.dataset.label;
          const { formattedValue } = t;
          return `  ${formattedValue} ${dstLabel}`;
        },
        labelColor(t: any) {
          return {
            backgroundColor: t.dataset.pointBackgroundColor,
            borderColor: 'transparent',
          };
        },
      },
    };

    const salesReportData = {
      title: 'Sales Report',
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      orders: [10, 55, 42, 30, 42, 80, 35, 10, 53, 62, 45, 78],
      sales: [30, 45, 35, 10, 5, 60, 8, 42, 30, 70, 54, 25],
      total: '8,550',
      growthRate: '25.36',
      growthStatus: 'down',
    };

    const salesRevenueDatasets = computed(() => {
      return [
        {
          data: salesReportData.orders,
          borderColor: '#8231D3',
          borderWidth: 3,
          fill: true,
          backgroundColor: () =>
            chartLinearGradient(document.getElementById('ninjadash-sales-revenue'), 300, {
              start: 'transparent',
              end: 'transparent',
            }),
          label: 'Orders',
          pointStyle: 'circle',
          pointRadius: '0',
          hoverRadius: '5',
          pointBorderColor: 'transparent',
          pointBackgroundColor: '#8231D3',
          hoverBorderWidth: 5,
          amount: '$7,596',
          amountClass: 'current-amount',
          growthStatus: 'up',
          labelType: 'primary',
          growthRate: '25',
          lineTension: 0.5,
        },
        {
          data: salesReportData.sales,
          borderColor: '#00AAFF',
          borderWidth: 3,
          fill: true,
          backgroundColor: () =>
            chartLinearGradient(document.getElementById('ninjadash-sales-revenue'), 300, {
              start: 'transparent',
              end: 'transparent',
            }),
          label: 'Sales',
          pointStyle: 'circle',
          pointRadius: '0',
          hoverRadius: '5',
          pointBorderColor: 'transparent',
          pointBackgroundColor: '#00AAFF',
          hoverBorderWidth: 5,
          amount: '$4,576',
          amountClass: 'current-amount',
          growthStatus: 'down',
          growthRate: '15',
          labelType: 'info',
          lineTension: 0.5,
        },
      ];
    });

    const scales = {
      y: {
        grid: {
          color: '#E3E6EF',
          borderDash: [3, 3],
          zeroLineColor: '#E3E6EF',
          zeroLineWidth: 1,
          zeroLineBorderDash: [3, 3],
          drawTicks: false,
          drawBorder: false,
          borderWidth: 0,
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 14,
            family: "'Jost', sans-serif",
          },
          color: '#747474',
          stepSize: 20,
          padding: 15,
          callback: function (value: any) {
            return value + 'k';
          },
        },
      },

      x: {
        offset: true,
        grid: {
          display: false,
          zeroLineWidth: 0,
          drawTicks: true,
          drawBorder: false,
          color: 'transparent',
          z: 1,
        },
        ticks: {
          beginAtZero: true,
          font: {
            size: 14,
            family: "'Jost', sans-serif",
          },
          color: '#747474',
        },
      },
    };

    return {
      salesReportData,
      customTooltips,
      salesRevenueDatasets,
      tooltip,
      scales,
      height,
      isLoading,
    };
  },
});
export default salesReport;
</script>

<template>
  <SalesReportWrapper>
    <BorderLessHeading v-if="salesReportData">
      <ChartContainer>
        <Cards more>
          <template #title>
            <div class="ninjadash-card-title-wrap">
              <span class="ninjadash-card-title-text"> Sales Report </span>
            </div>
          </template>
          <template #more>
            <router-link to="#">
              <unicon name="print" width="16"></unicon>
              <span>Printer</span>
            </router-link>
            <router-link to="#">
              <unicon name="book-open" width="16"></unicon>
              <span>PDF</span>
            </router-link>
            <router-link to="#">
              <unicon name="file-alt" width="16"></unicon>
              <span>Google Sheets</span>
            </router-link>
            <router-link to="#">
              <unicon name="x" width="16"></unicon>
              <span>Excel (XLSX)</span>
            </router-link>
            <router-link to="#">
              <unicon name="file" width="16"></unicon>
              <span>CSV</span>
            </router-link>
          </template>
          <div class="ninjadash-chart-container ninjadash-sales-revenue-lineChart">
            <div class="label-detailed">
              <div class="label-detailed__single" v-for="(item, index) in salesRevenueDatasets" :key="index">
                <span :class="`label-detailed__type label-detailed__type--${item.labelType}`">{{ item.label }}</span>
                <strong class="label-detailed__total">{{ item.amount }}</strong>
                <span :class="`label-detailed__status color-${item.growthStatus === 'up' ? 'success' : 'danger'}`">
                  <unicon name="arrow-up" width="16" v-if="item.growthStatus === 'up'"></unicon>
                  <unicon name="arrow-down" width="16" v-if="item.growthStatus === 'down'"></unicon>
                  <strong>{{ item.growthRate }}%</strong>
                </span>
              </div>
            </div>
            <template v-if="!isLoading">
              <Chart
                type="line"
                id="ninjadash-sales-revenue"
                className="ninjadash-sales-revenue"
                :labels="salesReportData.labels"
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
  </SalesReportWrapper>
</template>

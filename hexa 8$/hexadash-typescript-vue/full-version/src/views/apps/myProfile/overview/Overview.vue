<script setup lang="ts">
import { ProductOverviewTable } from './style';
import { CardBarChart2, EChartCard, PerformanceChartWrapper, ChartContainer } from '../../../dashboard/style';
import { chartLinearGradient, customTooltips } from '@/components/utilities/utilities';

import { computed, onMounted, defineComponent } from 'vue';
import Chart from '@/components/utilities/Chartjs.vue';
import { useStore } from 'vuex';

const chartOptions = {
  legend: {
    display: false,
    labels: {
      display: false,
    },
  },
  scales: {
    y: {
      display: false,
      stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      display: false,
      stacked: true,
      gridLines: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const dataSource = [
  {
    key: '1',
    name: 'Samsung Galaxy S8 256GB',
    price: '$280',
    sold: 126,
    revenue: '$38,536',
  },
  {
    key: '2',
    name: 'Half Sleeve Shirt',
    price: '$25',
    sold: 80,
    revenue: '$38,536',
  },
  {
    key: '3',
    name: 'Marco Shoes',
    price: '$32',
    sold: 58,
    revenue: '$38,536',
  },
  {
    key: '4',
    name: '15" Mackbook Pro        ',
    price: '$950',
    sold: 36,
    revenue: '$38,536',
  },
  {
    key: '5',
    name: 'Apple iPhone X',
    price: '$985',
    sold: 24,
    revenue: '$38,536',
  },
];

const columns = [
  {
    title: 'Products Name',
    dataIndex: 'name',
    key: 'name',
    class: 'p_name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    class: 'p_price',
  },
  {
    title: 'Sold',
    dataIndex: 'sold',
    key: 'sold',
  },
  {
    title: 'Revenue',
    dataIndex: 'revenue',
    key: 'revenue',
  },
];

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
      zeroLineWidth: 2,
      zeroLineColor: '#fff',
      color: 'transparent',
      z: 1,
      tickMarkLength: 0,
    },
    ticks: {
      padding: 10,
    },
  },
};

const { state, dispatch } = useStore();

const performanceState = computed(() => state.chartContent.performanceData);
onMounted(() => dispatch('performanceGetData'));

const performanceDatasets: any = computed(
  () =>
    performanceState.value !== null && [
      {
        data: performanceState.value.users[1],
        borderColor: '#5F63F2',
        borderWidth: 4,
        fill: true,
        backgroundColor: () =>
          chartLinearGradient(document.getElementById('performance'), 300, {
            start: '#5F63F230',
            end: '#ffffff05',
          }),
        label: 'Revenue',
        pointStyle: 'circle',
        pointRadius: '0',
        hoverRadius: '9',
        pointBorderColor: '#fff',
        pointBackgroundColor: '#5F63F2',
        hoverBorderWidth: 5,
      },
    ],
);

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

const height = window.innerWidth <= 575 ? 200 : 86;
</script>

<template>
  <ChartContainer>
    <a-row :gutter="25">
      <a-col :xxl="8" :lg="12" :md="24" :sm="12" :xs="24">
        <sdCards headless>
          <EChartCard>
            <div class="card-chunk">
              <CardBarChart2>
                <sdHeading as="h1">7,461</sdHeading>
                <span>Orders</span>
                <p>
                  <span class="growth-upward"> <unicon name="arrow-up"></unicon> 25% </span>
                  <span>Since last week</span>
                </p>
              </CardBarChart2>
            </div>
            <div class="card-chunk ninjadash-chart-container">
              <Chart
                type="bar"
                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                :height="180"
                className="card-chunk4"
                id="card-chunk4"
                :style="{
                  marginBottom: '-5',
                }"
                :datasets="[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70],
                    backgroundColor: '#EFEFFE',
                    hoverBackgroundColor: '#5F63F2',
                    label: 'Orders',
                    barPercentage: 1,
                  },
                ]"
                :scales="chartOptions.scales"
                :tooltip="tooltip"
              />
            </div>
          </EChartCard>
        </sdCards>
      </a-col>
      <a-col :xxl="8" :lg="12" :md="24" :sm="12" :xs="24">
        <sdCards headless>
          <EChartCard>
            <div class="card-chunk">
              <CardBarChart2>
                <sdHeading as="h1">$28,947</sdHeading>
                <span>Revenue</span>
                <p>
                  <span class="growth-downward"> <unicon name="arrow-down"></unicon> 25% </span>
                  <span>Since last week</span>
                </p>
              </CardBarChart2>
            </div>
            <div class="card-chunk ninjadash-chart-container">
              <Chart
                id="cardChunk2"
                className="cardChunk2"
                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                :height="180"
                :style="{
                  marginBottom: '-5',
                }"
                :datasets="[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70],
                    backgroundColor: '#FFF0F6',
                    hoverBackgroundColor: '#FF69A5',
                    label: 'Revenue',
                    barPercentage: 1,
                  },
                ]"
                type="bar"
                :scales="chartOptions.scales"
              />
            </div>
          </EChartCard>
        </sdCards>
      </a-col>
      <a-col :xxl="8" :lg="12" :md="24" :sm="12" :xs="24">
        <sdCards headless>
          <EChartCard>
            <div class="card-chunk">
              <CardBarChart2>
                <sdHeading as="h1">$3,241</sdHeading>
                <span>Avg. order value</span>
                <p>
                  <span class="growth-upward"> <unicon name="arrow-up"></unicon> 25% </span>
                  <span>Since last week</span>
                </p>
              </CardBarChart2>
            </div>
            <div class="card-chunk ninjadash-chart-container">
              <Chart
                className="card-chunk3"
                id="card-chunk3"
                :labels="['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']"
                :height="180"
                :style="{
                  marginBottom: '-5',
                }"
                :datasets="[
                  {
                    data: [20, 60, 50, 45, 50, 60, 70],
                    backgroundColor: '#E8FAF4',
                    hoverBackgroundColor: '#01B81A',
                    label: 'Avg Orders',
                    barPercentage: 1,
                  },
                ]"
                type="bar"
                :scales="chartOptions.scales"
              />
            </div>
          </EChartCard>
        </sdCards>
      </a-col>
      <a-col :xs="24">
        <PerformanceChartWrapper v-if="performanceState !== null">
          <sdCards more title="General Statistics">
            <template #more>
              <a to="#">
                <unicon name="print" width="16"></unicon>
                <span>Printer</span>
              </a>
              <a to="#">
                <unicon name="book-open" width="16"></unicon>
                <span>PDF</span>
              </a>
              <a to="#">
                <unicon name="file-alt" width="16"></unicon>
                <span>Google Sheets</span>
              </a>
              <a to="#">
                <unicon name="times" width="16"></unicon>
                <span>Excel (XLSX)</span>
              </a>
              <a to="#">
                <unicon name="file" width="16"></unicon>
                <span>CSV</span>
              </a>
            </template>
            <div class="performance-lineChart">
              <div class="ninjadash-chart-container">
                <Chart
                  type="line"
                  id="performance"
                  className="performance"
                  :labels="performanceState.labels"
                  :datasets="performanceDatasets"
                  :height="height"
                  :tooltip="{
                    custom: customTooltips,
                    ...tooltip,
                  }"
                  :scales="scales"
                />
              </div>
            </div>
          </sdCards>
        </PerformanceChartWrapper>
      </a-col>
      <a-col :xs="24">
        <ProductOverviewTable>
          <sdCards more title="My Products">
            <template #more>
              <a to="#">
                <unicon name="print" width="16"></unicon>
                <span>Printer</span>
              </a>
              <a to="#">
                <unicon name="book-open" width="16"></unicon>
                <span>PDF</span>
              </a>
              <a to="#">
                <unicon name="file-alt" width="16"></unicon>
                <span>Google Sheets</span>
              </a>
              <a to="#">
                <unicon name="times" width="16"></unicon>
                <span>Excel (XLSX)</span>
              </a>
              <a to="#">
                <unicon name="file" width="16"></unicon>
                <span>CSV</span>
              </a>
            </template>
            <a-table class="table-responsive" :pagination="false" :dataSource="dataSource" :columns="columns" />
          </sdCards>
        </ProductOverviewTable>
      </a-col>
    </a-row>
  </ChartContainer>
</template>

<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { Main } from '../styled';
import { CardChartStyle } from './Style';

const chartOptions = {
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
        display: false,
      },
      ticks: {
        display: false,
      },
    },
    x: {
      stacked: true,
      barPercentage: 1,
      gridLines: {
        display: false,
      },
      ticks: {
        display: false,
      },
    },
  },
};

const SaleRevenue = defineAsyncComponent(() => import('@/views/dashboard/demoTwo/SaleRevenue.vue'));

const MonthlyEarning = defineAsyncComponent(() => import('@/views/dashboard/demoThree/MonthlyEarning.vue'));

const ProfitGrowth = defineAsyncComponent(() => import('@/views/dashboard/demoThree/ProfitGrowth.vue'));

const SalesOverview = defineAsyncComponent(() => import('@/views/dashboard/demoThree/SalesOverview.vue'));

const PerformanceOverview = defineAsyncComponent(() => import('@/views/dashboard/demoFour/PerfomanceOverview.vue'));

const UserOverview = defineAsyncComponent(() => import('@/views/dashboard/demoFive/UserOverview.vue'));
</script>

<template>
  <div>
    <sdPageHeader title="Widgets Charts" class="ninjadash-page-header-main"></sdPageHeader>
    <Main>
      <CardChartStyle>
        <a-row :gutter="25">
          <a-col :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <SaleRevenue /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <MonthlyEarning /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <ProfitGrowth /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <SalesOverview /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <PerformanceOverview /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="16" :md="24" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <UserOverview /> </template>
            </Suspense>
          </a-col>
        </a-row>
      </CardChartStyle>
    </Main>
  </div>
</template>

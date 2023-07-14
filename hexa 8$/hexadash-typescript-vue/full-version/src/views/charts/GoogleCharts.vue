<script setup lang="ts">
import { Main } from '../styled';
import { PageHeader } from '@/components/pageHeaders/PageHeaders.vue';
import googleChartsData from '@/demoData/google-charts.json';

const {
  barChartData,
  materialDesignChart,
  comboChartData,
  lineChartData,
  MultilineChartData,
  pieChartData,
  bubbleChart,
} = googleChartsData;
</script>

<template>
  <div>
    <PageHeader title="Chart Js" class="ninjadash-page-header-main"> </PageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Bar Chart">
            <sdGoogleBasicBarChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              chartArea="50%"
            />
          </sdCards>
          <sdCards title="Bubble Chart">
            <sdBubbleChart :data="bubbleChart" width="100%" :height="300" />
          </sdCards>
          <sdCards title="Stacked bar chart with multiple series">
            <sdGoogleStackedChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              chartArea="50%"
            />
          </sdCards>
          <sdCards title="Combo Chart">
            <sdGoogleComboChart
              :data="comboChartData"
              width="100%"
              :height="300"
              title="Monthly Coffee Production by Country"
              chartArea="50%"
              :colors="['#b0120a', '#ffab91', '#e0120a', '#afab91']"
            />
          </sdCards>
          <sdCards title="Basic Pie Chart">
            <sdGoogle3dPieChart :data="pieChartData" width="100%" :height="300" chartArea="100%" />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Material Design">
            <sdGoogleMaterialBarChart :data="materialDesignChart" width="100%" :height="300" />
          </sdCards>
          <sdCards title="Custom Colors Bar Chart">
            <sdGoogleCustomColorChart
              :data="barChartData"
              width="100%"
              :height="300"
              title="Population of Largest U.S. Cities"
              subtitle="Sales, Expenses, and Profit: 2014-2017"
              chartArea="50%"
              :colors="['#b0120a', '#ffab91']"
            />
          </sdCards>
          <sdCards title="Line Chart">
            <sdGoogleLineChart :data="lineChartData" width="100%" :height="300" />
          </sdCards>
          <sdCards title="Multiple Line Chart">
            <sdGoogleMultiLineChart :data="MultilineChartData" width="100%" :height="300" />
          </sdCards>
          <sdCards title="3d Pie Chart">
            <sdGoogleBasicPieChart :data="pieChartData" width="100%" :height="300" chartArea="100%" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

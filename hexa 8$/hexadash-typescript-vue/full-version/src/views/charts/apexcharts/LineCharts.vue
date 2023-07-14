<script setup lang="ts">
import { Main } from '../../styled';
import LineChart from '../../../components/apexcharts/line-chart/BasicLine.vue';
import LineWithData from '../../../components/apexcharts/line-chart/LineWithData.vue';
import Gradient from '../../../components/apexcharts/line-chart/Gradient.vue';
import Dashed from '../../../components/apexcharts/line-chart/Dashed.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Line Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Line Chart">
            <line-chart />
          </sdCards>
          <sdCards title="Gradient Line Chart">
            <gradient />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Line Chart with Data Labels">
            <line-with-data />
          </sdCards>
          <sdCards title="Dashed Line Chart">
            <dashed />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import Basic from '../../../components/apexcharts/radialbar-charts/RadialBarChartBasic.vue';
import AngleCircle from '../../../components/apexcharts/radialbar-charts/AngleCircle.vue';
import Gradient from '../../../components/apexcharts/radialbar-charts/RadialGradient.vue';
import StrokedGauge from '../../../components/apexcharts/radialbar-charts/StrokedGauge.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Radialbar Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Radialbar Chart">
            <basic />
          </sdCards>
          <sdCards title="Custom Angle Circle Chart">
            <angle-circle />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Gradient Circle Chart">
            <gradient />
          </sdCards>
          <sdCards title="Stroked Circle Chart">
            <stroked-gauge />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

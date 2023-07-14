<script setup lang="ts">
import { Main } from '../../styled';
import Basic from '../../../components/apexcharts/radar-charts/RadarChartBasic.vue';
import RadarMultipleSeries from '../../../components/apexcharts/radar-charts/RadarMultipleSeries.vue';
import RadarWithPolygonFill from '../../../components/apexcharts/radar-charts/RadarWithPolygonFill.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Radar Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Radialbar Chart">
            <basic />
          </sdCards>
          <sdCards title="Radar Multiple Series Chart">
            <radar-multiple-series />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Radar With Polygon Fill Chart">
            <radar-with-polygon-fill />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

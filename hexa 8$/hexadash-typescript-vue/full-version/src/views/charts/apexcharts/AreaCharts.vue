<script setup lang="ts">
import { Main } from '../../styled';
import Basic from '../../../components/apexcharts/area-charts/AreaChartBasic.vue';
import Spline from '../../../components/apexcharts/area-charts/Spline.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Area Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Area Chart">
            <basic />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Spline Area Chart">
            <spline />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

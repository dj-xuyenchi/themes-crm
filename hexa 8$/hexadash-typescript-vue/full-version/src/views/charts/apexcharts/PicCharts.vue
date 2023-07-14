<script setup lang="ts">
import { Main } from '../../styled';
import Basic from '../../../components/apexcharts/pie-charts/BasicPic.vue';
import DonutPic from '../../../components/apexcharts/pie-charts/DonutPic.vue';
import GradientDonut from '../../../components/apexcharts/pie-charts/GradientDonut.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Bar Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Simple Pie Chart">
            <basic />
          </sdCards>
          <sdCards title="Gradient Donut">
            <gradient-donut />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Simple Donut">
            <donut-pic />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

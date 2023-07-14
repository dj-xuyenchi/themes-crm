<script setup lang="ts">
import { Main } from '../../styled';
import Basic from '../../../components/apexcharts/bar-charts/BasicBar.vue';
import Reverse from '../../../components/apexcharts/bar-charts/ReversedBar.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Bar Charts" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic Bar Chart">
            <basic />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Reverse Bar Chart">
            <reverse />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

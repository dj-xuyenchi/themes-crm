<script setup lang="ts">
import OverviewCard from '@/components/cards/OverviewCard.vue';
//import { OverviewDataStyleWrap } from "../../style";
import OverviewData from '@/demoData/overviewCard.json';

const OverviewDataSorted = OverviewData.slice(0, 4);
</script>

<template>
  <a-row :gutter="25">
    <a-col v-for="(item, i) in OverviewDataSorted" :lg="12" :md="12" :sm="12" :xs="24" :key="i">
      <Suspense>
        <template #default>
          <OverviewCard :ocData="item" />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
          </sdCards>
        </template>
      </Suspense>
    </a-col>
  </a-row>
</template>

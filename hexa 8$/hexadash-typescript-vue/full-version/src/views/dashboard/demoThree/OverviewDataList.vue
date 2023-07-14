<script setup lang="ts">
import OverviewCardMesh from '@/components/cards/OverviewCardMesh.vue';
import { OverviewDataStyleWrap } from '../style';
import OverviewData from '@/demoData/overviewMeshData.json';
</script>

<template>
  <OverviewDataStyleWrap class="card-mesh-wrap card-mesh-wrap--two align-center-v">
    <OverviewCardMesh v-for="(item, i) in OverviewData" :data="item" :key="i" />
  </OverviewDataStyleWrap>
</template>

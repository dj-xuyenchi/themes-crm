<template>
  <sdPageHeader class="ninjadash-page-header-main" title="Drag & Drop"> </sdPageHeader>
  <Main>
    <a-row :gutter="15">
      <a-col :xs="24">
        <DragAndDropTable />
      </a-col>
    </a-row>
  </Main>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import DragAndDropTable from '../table/DragTable.vue';
</script>

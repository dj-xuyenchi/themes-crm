<template>
  <sdPopover placement="bottomLeft" action="click">
    <template v-slot:content>
      <a to="#">
        <unicon name="print"></unicon>
        <span>Printer</span>
      </a>
      <a to="#">
        <unicon name="book-open"></unicon>
        <span>PDF</span>
      </a>
      <a to="#">
        <unicon name="file-alt"></unicon>
        <span>Google Sheets</span>
      </a>
      <a to="#">
        <unicon name="x"></unicon>
        <span>Excel (XLSX)</span>
      </a>
      <a to="#">
        <unicon name="file"></unicon>
        <span>CSV</span>
      </a>
    </template>
    <sdButton size="sm" type="white">
      <unicon name="import"></unicon>
      <span>Export</span>
    </sdButton>
  </sdPopover>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ExportButton',
  components: {},
});
</script>

<script lang="ts">
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';
import { onMounted, toRefs, defineComponent } from 'vue';
import svgMapDataGPD from '@/demoData/vectorMap';

export default defineComponent({
  name: 'WorldMap',
  props: {
    id: {
      type: String,
      default: 'svgMap',
    },
    options: {
      type: Object,
      default: () => svgMapDataGPD,
    },
  },
  setup(props) {
    const { id, options } = toRefs(props);
    onMounted(() => {
      new svgMap({
        targetElementID: id.value,
        initialZoom: 1.06,
        initialPan: { x: 30, y: 60 },
        flagType: 'emoji',
        colorMax: '#DBE1E8',
        colorMin: '#DBE1E8',
        colorNoData: '#DBE1E8',
        data: { ...options.value },
      });
    });
  },
});
</script>

<template>
  <div :id="id"></div>
</template>

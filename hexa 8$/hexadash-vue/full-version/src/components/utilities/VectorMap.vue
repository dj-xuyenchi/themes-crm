<template>
  <div :id="id"></div>
</template>

<script>
import svgMap from 'svgmap';
import 'svgmap/dist/svgMap.min.css';
import { onMounted, toRefs, defineComponent } from 'vue';
import VueTypes from 'vue-types';
import svgMapDataGPD from '@/demoData/vectorMap.js';
export default defineComponent({
  name: 'WorldMap',
  props: {
    id: VueTypes.string.def('svgMap'),
    options: VueTypes.object.def(svgMapDataGPD),
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

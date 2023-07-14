<script setup lang="ts">
import { GoogleMap, Rectangle } from 'vue3-google-map';

const props = defineProps({
  apiKey: {
    type: String,
    default: '',
  },
  center: {
    type: Object,
    default: () => ({ lat: 33.678, lng: -116.243 }),
  },
  rectangle: {
    type: Object,
    default: () => ({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
      bounds: {
        north: 33.685,
        south: 33.671,
        east: -116.234,
        west: -116.251,
      },
    }),
  },
});
</script>

<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" mapTypeId="terrain" :center="center" :zoom="11">
    <Rectangle :options="rectangle" />
  </GoogleMap>
</template>

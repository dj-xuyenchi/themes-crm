<script setup lang="ts">
import { toRefs } from 'vue';
import { GoogleMap, Polygon } from 'vue3-google-map';

const props = defineProps({
  apiKey: {
    type: String,
    default: '',
  },
  center: {
    type: Object,
    default: () => ({ lat: 37.09, lng: -95.712 }),
  },
  triangleCoords: {
    type: Array,
    default: () => [
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ],
  },
});

const { triangleCoords } = toRefs(props);
const bermudaTriangle = {
  paths: triangleCoords.value,
  strokeColor: '#FF0000',
  strokeOpacity: 0.8,
  strokeWeight: 2,
  fillColor: '#FF0000',
  fillOpacity: 0.35,
};
</script>

<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="3">
    <Polygon :options="bermudaTriangle" />
  </GoogleMap>
</template>

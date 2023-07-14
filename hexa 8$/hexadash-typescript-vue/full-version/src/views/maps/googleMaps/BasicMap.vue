<script setup lang="ts">
import { GoogleMap, Marker } from 'vue3-google-map';

const props = defineProps({
  apiKey: {
    type: String,
    default: '',
  },
  center: {
    type: Object,
    default: () => ({ lat: 40.689247, lng: -74.044502 }),
  },
  position: {
    type: Object,
    default: () => ({
      lat: 50.797897,
      lng: -1.077641,
    }),
  },
});
</script>

<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="position" :zoom="15">
    <Marker :options="{ position }" />
  </GoogleMap>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';
import { GoogleMap, Circle } from 'vue3-google-map';

const props = defineProps({
  apiKey: {
    type: String,
    default: '',
  },
  center: {
    type: Object,
    default: () => ({ lat: 37.09, lng: -95.712 }),
  },
  cities: {
    type: Object,
    default: () => ({
      chicago: {
        center: { lat: 41.878, lng: -87.629 },
        population: 2714856,
      },
      newyork: {
        center: { lat: 40.714, lng: -74.005 },
        population: 8405837,
      },
      losangeles: {
        center: { lat: 34.052, lng: -118.243 },
        population: 3857799,
      },
      vancouver: {
        center: { lat: 49.25, lng: -123.1 },
        population: 603502,
      },
    }),
  },
});
const circles: any = {};
const { cities } = toRefs(props);

for (const key in cities.value) {
  circles[key] = {
    center: cities.value[key].center,
    radius: Math.sqrt(cities.value[key].population) * 100,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
  };
}
</script>

<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" mapTypeId="terrain" :center="center" :zoom="2">
    <Circle v-for="(circle, $key) in circles" :options="circle" :key="$key" />
  </GoogleMap>
</template>

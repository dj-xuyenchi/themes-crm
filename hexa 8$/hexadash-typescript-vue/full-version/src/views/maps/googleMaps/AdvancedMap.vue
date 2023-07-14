<script setup lang="ts">
import { GoogleMap } from 'vue3-google-map';

const props = defineProps({
  apiKey: {
    type: String,
    default: '',
  },
});

const center = { lat: 39.50024, lng: -98.350891 };
</script>

<template>
  <GoogleMap :api-key="apiKey" :center="center" :zoom="4" style="width: 100%; height: 500px" />
</template>

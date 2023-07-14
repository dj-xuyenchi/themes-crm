<template>
  <GoogleMap :api-key="apiKey" :center="center" :zoom="4" style="width: 100%; height: 500px" />
</template>

<script>
import { defineComponent } from 'vue';
import { GoogleMap } from 'vue3-google-map';
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'AdvancedMap',
  components: {
    GoogleMap,
  },
  props: {
    apiKey: VueTypes.string.def(''),
  },
  setup() {
    const center = { lat: 39.50024, lng: -98.350891 };

    return { center };
  },
});
</script>

<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="1">
    <Polyline :options="flightPath" />
  </GoogleMap>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import { GoogleMap, Polyline } from 'vue3-google-map';
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'PolylineMaps',
  components: {
    GoogleMap,
    Polyline,
  },
  props: {
    apiKey: VueTypes.string.def(''),
    center: VueTypes.object.def({ lat: 0, lng: -180 }),
    flightPlanCoordinates: VueTypes.array.def([
      { lat: 37.772, lng: -122.214 },
      { lat: 21.291, lng: -157.821 },
      { lat: -18.142, lng: 178.431 },
      { lat: -27.467, lng: 153.027 },
    ]),
  },
  setup(props) {
    const { flightPlanCoordinates } = toRefs(props);
    const flightPath = {
      path: flightPlanCoordinates.value,
      geodesic: true,
      strokeColor: '#FF0000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    };

    return { flightPath };
  },
});
</script>

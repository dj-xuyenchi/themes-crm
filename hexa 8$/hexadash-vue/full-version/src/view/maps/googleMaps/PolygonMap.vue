<template>
  <GoogleMap :api-key="apiKey" style="width: 100%; height: 500px" :center="center" :zoom="3">
    <Polygon :options="bermudaTriangle" />
  </GoogleMap>
</template>

<script>
import { defineComponent, toRefs } from 'vue';
import { GoogleMap, Polygon } from 'vue3-google-map';
import VueTypes from 'vue-types';
export default defineComponent({
  name: 'PolygonMap',
  components: {
    GoogleMap,
    Polygon,
  },
  props: {
    apiKey: VueTypes.string.def(''),
    center: VueTypes.object.def({ lat: 37.09, lng: -95.712 }),
    triangleCoords: VueTypes.array.def([
      { lat: 25.774, lng: -80.19 },
      { lat: 18.466, lng: -66.118 },
      { lat: 32.321, lng: -64.757 },
      { lat: 25.774, lng: -80.19 },
    ]),
  },
  setup(props) {
    const { triangleCoords } = toRefs(props);
    const bermudaTriangle = {
      paths: triangleCoords.value,
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.35,
    };

    return { bermudaTriangle };
  },
});
</script>

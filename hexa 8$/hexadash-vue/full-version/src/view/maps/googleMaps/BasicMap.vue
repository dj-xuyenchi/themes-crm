<template>
  <GoogleMap
    :api-key="apiKey"
    style="width: 100%; height: 500px"
    :center="position"
    :zoom="15"
  >
    <Marker :options="{ position }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";
import VueTypes from "vue-types";
export default defineComponent({
  name: "BasicMap",
  components: {
    GoogleMap,
    Marker,
  },
  props: {
    apiKey: VueTypes.string.def(""),
    center: VueTypes.object.def({ lat: 40.689247, lng: -74.044502 }),
    position: VueTypes.object.def({
      lat: 50.797897,
      lng: -1.077641,
    }),
  },
});
</script>

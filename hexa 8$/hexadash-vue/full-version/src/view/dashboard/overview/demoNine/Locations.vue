<template>
  <div class="full-width-table">
    <BorderLessHeading>
      <sdCards title="Location" more>
        <template #more>
          <router-link to="#">
            <unicon name="print" width="16"></unicon>
            <span>Printer</span>
          </router-link>
          <router-link to="#">
            <unicon name="book-open" width="16"></unicon>
            <span>PDF</span>
          </router-link>
          <router-link to="#">
            <unicon name="file-alt" width="16"></unicon>
            <span>Google Sheets</span>
          </router-link>
          <router-link to="#">
            <unicon name="x" width="16"></unicon>
            <span>Excel (XLSX)</span>
          </router-link>
          <router-link to="#">
            <unicon name="file" width="16"></unicon>
            <span>CSV</span>
          </router-link>
        </template>
        <GoogleMaps
          :apiKey="apiKey"
          :center="{ lat: 40.689247, lng: -74.044502 }"
          :position="{
            lat: 50.797897,
            lng: -1.077641,
          }"
          style="width: 100%; height: 265px"
        />
      </sdCards>
    </BorderLessHeading>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import GoogleMaps from "@/view/maps/googleMaps/BasicMap.vue";
import { BorderLessHeading } from "../../../styled";

export default defineComponent({
  components: { GoogleMaps, BorderLessHeading },
  setup() {
    return {
      apiKey: process.env.VUE_APP_GOOGLE_MAP_API,
    };
  },
});
</script>

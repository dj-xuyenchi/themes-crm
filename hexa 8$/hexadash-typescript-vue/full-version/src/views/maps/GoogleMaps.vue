<script setup lang="ts">
import { Main } from '../styled';
import BasicMap from './googleMaps/BasicMap.vue';
import PolylineMap from './googleMaps/PolylineMap.vue';
import PolygonMap from './googleMaps/PolygonMap.vue';
import RectangleMap from './googleMaps/RectangleMap.vue';
import CircleMap from './googleMaps/CircleMap.vue';
import AdvancedMap from './googleMaps/AdvancedMap.vue';

const apiKey = import.meta.env.VITE_GOOGLE_MAP_API;
</script>

<template>
  <div>
    <sdPageHeader title="Google Map" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Google Basic Map">
            <BasicMap
              :apiKey="apiKey"
              :center="{ lat: 40.689247, lng: -74.044502 }"
              :position="{
                lat: 50.797897,
                lng: -1.077641,
              }"
            />
          </sdCards>
        </a-col>

        <a-col :md="12" :xs="24">
          <sdCards title="Google Polyline Map">
            <PolylineMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Polygon Map">
            <PolygonMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Rectangle Map">
            <RectangleMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Circle Map">
            <CircleMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Google Advanced Map">
            <AdvancedMap :apiKey="apiKey" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<style scoped>
.map-wrapper {
  height: 600px;
}
</style>

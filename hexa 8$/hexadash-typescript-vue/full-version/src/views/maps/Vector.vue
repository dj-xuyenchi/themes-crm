<script setup lang="ts">
import { Main } from '../styled';
import WorldMap from '@/components/utilities/VectorMap.vue';

const options = {
  data: {
    gdp: {
      name: 'GDP per capita',
      format: '{0} USD',
      thousandSeparator: ',',
      thresholdMax: 50000,
      thresholdMin: 1000,
    },
    change: {
      name: 'Change to year before',
      format: '{0} %',
    },
  },
  applyData: 'gdp',
  values: {
    AF: { gdp: 587, change: 4.73 },
    AL: { gdp: 4583, change: 11.09 },
    DZ: { gdp: 4293, change: 10.02 },
  },
};
</script>

<template>
  <div>
    <sdPageHeader title="Google Map" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24" :xs="24">
          <sdCards title="World Map">
            <WorldMap />
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

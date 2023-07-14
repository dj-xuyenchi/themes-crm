<script setup lang="ts">
import { GalleryCard } from '../style';
import GlightBox from '@/components/utilities/GlightBox.vue';

const props = defineProps({
  item: {
    type: Object,
    default: () => ({}),
  },
  index: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <GalleryCard :style="{ marginBottom: '25px' }">
    <figure>
      <GlightBox v-if="index <= 12" type="image" :src="`/src/${item.img}`">
        <img :style="{ width: '100%' }" :src="`/src/${item.img}`" alt="" />
      </GlightBox>
      <figcaption>
        <div class="gallery-single-content">
          <sdHeading class="gallery-single-title" as="h4">
            {{ item.name }}
          </sdHeading>
          <p>{{ item.category }}</p>
        </div>
      </figcaption>
    </figure>
  </GalleryCard>
</template>

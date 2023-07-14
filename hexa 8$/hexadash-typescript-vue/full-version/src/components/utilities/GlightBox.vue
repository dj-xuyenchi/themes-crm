<script setup lang="ts">
import GLightBox from 'glightbox';
import { onMounted, ref } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: 'https://vimeo.com/115041822',
  },
  class: {
    type: String,
    default: 'video',
  },
  width: {
    type: String,
    default: '900px',
  },
  zoomable: {
    type: Boolean,
    default: true,
  },
  draggable: {
    type: Boolean,
    default: true,
  },
  type: {
    type: String,
    validator: (value: string) => {
      return ['image', 'video'].includes(value);
    },
    default: 'image',
  },
});
const vueClass = ref(props.class);
onMounted(() => {
  GLightBox({
    touchNavigation: false,
    loop: false,
    autoplayVideos: false,
    selector: '.glightbox3',
  });
});
</script>

<template>
  <a
    :data-type="type"
    data-effect="fade"
    :data-width="width"
    data-height="auto"
    :data-zoomable="zoomable"
    :data-draggable="draggable"
    :href="src"
    :class="`glightbox3 ${vueClass}`"
    data-gallery="gallery1"
  >
    <slot><img src="/src/assets/img/gallery/1.png" alt="image" /></slot>
  </a>
</template>

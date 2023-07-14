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
    <slot><img src="../../static/img/gallery/1.png" alt="image" /></slot>
  </a>
</template>
<script>
import GLightBox from 'glightbox';
import { onMounted, defineComponent } from 'vue';
import PropTypes from 'vue-types';

export default defineComponent({
  name: 'GlightBox',
  props: {
    src: PropTypes.string.def('https://vimeo.com/115041822'),
    class: PropTypes.string.def('video'),
    width: PropTypes.string.def('900px'),
    zoomable: PropTypes.bool.def(true),
    draggable: PropTypes.bool.def(true),
    type: PropTypes.oneOf(['image', 'video']).def('image'),
  },
  data() {
    return {
      vueClass: this.class,
    };
  },
  setup() {
    onMounted(() => {
      GLightBox({
        touchNavigation: false,
        loop: false,
        autoplayVideos: false,
        selector: '.glightbox3',
      });
    });
  },
});
</script>

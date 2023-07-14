<template>
  <GalleryCard :style="{ marginBottom: '25px' }">
    <figure>
      <GlightBox
        v-if="index <= 12"
        type="image"
        :src="require(`../../../${item.img}`)"
      >
        <img
          :style="{ width: '100%' }"
          :src="require(`../../../${item.img}`)"
          alt=""
        />
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
<script>
import { GalleryCard } from "../style";
import VueTypes from "vue-types";
import GlightBox from "@/components/utilities/GlightBox.vue";
import { defineComponent } from "vue";
const GalleryCards = defineComponent({
  name: "GalleryCards",
  props: { item: VueTypes.object, index: VueTypes.number },
  components: { GalleryCard, GlightBox },
});

export default GalleryCards;
</script>

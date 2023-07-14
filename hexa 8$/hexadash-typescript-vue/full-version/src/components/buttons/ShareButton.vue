<template>
  <sdPopover placement="bottomLeft" action="click">
    <template v-slot:content>
      <a to="#">
        <unicon name="facebook-f"></unicon>
        <span>Facebook</span>
      </a>
      <a to="#">
        <unicon name="twitter-alt"></unicon>
        <span>Twitter</span>
      </a>
      <a to="#">
        <unicon name="rss"></unicon>
        <span>Feed</span>
      </a>
      <a to="#">
        <unicon name="linkedin"></unicon>
        <span>Linkedin</span>
      </a>
      <a to="#">
        <unicon name="instagram"></unicon>
        <span>Instagram</span>
      </a>
    </template>
    <sdButton size="sm" type="white">
      <unicon name="share-alt" width="14"></unicon>
      <span>Share</span>
    </sdButton>
  </sdPopover>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ShareButton',
  components: {},
});
</script>

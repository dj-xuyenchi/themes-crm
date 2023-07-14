<template>
  <ListStyle class="list-single">
    <span class="icon">
      <unicon name="check" width="14"></unicon>
    </span>
    <span>{{ text }}</span>
  </ListStyle>
</template>

<script setup lang="ts">
import { ListStyle } from './style';

const props = defineProps({
  text: {
    type: [String, Object, Node],
    default: '',
  },
});
</script>

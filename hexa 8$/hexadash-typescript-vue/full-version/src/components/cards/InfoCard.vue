<script setup lang="ts">
import { InfoCardStyle } from './style';

const props = defineProps({
  counter: {
    type: String,
    default: '21k',
  },
  text: {
    type: String,
    default: 'Total Products',
  },
  icon: {
    type: String,
    default: 'briefcase',
  },
  type: {
    type: String,
    default: 'primary',
    validator: (value: any) => ['primary', 'secondary'].includes(value),
  },
});
</script>

<template>
  <InfoCardStyle :type="type">
    <span class="ninjadash-infocard-icon">
      <unicon :name="icon"></unicon>
    </span>
    <p class="ninjadash-infocard-text">{{ text }}</p>
    <h2 class="ninjadash-infocard-label">{{ counter }}</h2>
  </InfoCardStyle>
</template>

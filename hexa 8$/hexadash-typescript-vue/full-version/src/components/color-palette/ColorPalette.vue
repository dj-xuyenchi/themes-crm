<template>
  <ColorPalette
    :isgrad="gradient"
    :direction="direction"
    :isbg="bg"
    :iscontent="content"
    :isbordered="bordered"
    :type="colorCode"
  >
    <span><slot></slot></span>
    <span v-if="content">{{ !gradient ? colorCode : colorCode[1] }}</span>
  </ColorPalette>
  <span style="display: block; text-align: center; margin-top: 5px" v-if="!content">{{ colorCode }}</span>
</template>

<script setup lang="ts">
import { ColorPalette } from './style';

const props = defineProps({
  colorCode: {
    type: [String, Array],
    default: '',
  },
  bordered: {
    type: Boolean,
    default: false,
  },
  content: {
    type: Boolean,
    default: false,
  },
  bg: {
    type: Boolean,
    default: false,
  },
  gradient: {
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    default: '',
  },
  children: {
    type: [Object, String, Node],
    default: '',
  },
});
</script>

<script setup lang="ts">
import { toRefs } from 'vue';
import 'emoji-picker-element';
import PropTypes from 'vue-types';

const props = defineProps({
  emojiClick: PropTypes.func.def((emoji) => console.log(emoji)),
});
const { emojiClick }: any = toRefs(props);
const OnEmojiClick = (e: any) => {
  emojiClick.value(e.detail.emoji.unicode);
};
</script>
<template>
  <emoji-picker @emoji-click="OnEmojiClick" class="emoji-picker-react"></emoji-picker>
</template>

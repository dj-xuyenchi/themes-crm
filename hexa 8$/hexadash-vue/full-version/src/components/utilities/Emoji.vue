<template>
  <emoji-picker @emoji-click="OnEmojiClick" class="emoji-picker-react"></emoji-picker>
</template>
<script>
import { defineComponent, toRefs } from 'vue';
import 'emoji-picker-element';
import PropTypes from 'vue-types';

export default defineComponent({
  props: {
    emojiClick: PropTypes.func.def((emoji) => console.log(emoji)),
  },
  setup(props) {
    const { emojiClick } = toRefs(props);
    const OnEmojiClick = (e) => {
      emojiClick.value(e.detail.emoji.unicode);
    };

    return {
      OnEmojiClick,
    };
  },
});
</script>

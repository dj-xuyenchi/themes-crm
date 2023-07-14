<script setup lang="ts">
import { MailBox } from './style';
import MailComposer from './MailComposer.vue';
import { ref } from 'vue';

const props = defineProps({
  close: {
    type: Function as () => void,
    default: () => {},
  },
});

const tags = ref([]);
let size = ref('small');
const toggleSize = () => {
  size.value = size.value === 'small' ? 'big' : 'small';
};
</script>

<template>
  <MailBox :size="size">
    <div class="header">
      <p>New Message</p>
      <div class="icon-right">
        <unicon @click="toggleSize" name="expand-alt" width="18"></unicon>
        <unicon @click="close" name="times" width="18"></unicon>
      </div>
    </div>

    <div class="body">
      <div class="group">
        <a-input placeholder="Subject" type="text" />
      </div>
      <MailComposer />
    </div>
  </MailBox>
</template>

<script setup lang="ts">
import { MessageAction } from './style';

const props = defineProps({
  refreshState: {
    type: Function,
    required: true,
  },
});
</script>

<template>
  <MessageAction>
    <a-tooltip placement="bottom" title="Refresh">
      <router-link @click="refreshState" to="#">
        <unicon name="redo" width="18"></unicon>
      </router-link>
    </a-tooltip>
    <a-tooltip placement="bottom" title="Archive">
      <router-link to="#">
        <unicon name="archive" width="18"></unicon>
      </router-link>
    </a-tooltip>
    <a-tooltip placement="bottom" title="Info">
      <router-link to="#">
        <unicon name="exclamation-octagon" width="18"></unicon>
      </router-link>
    </a-tooltip>
    <a-tooltip placement="bottom" title="Delete">
      <router-link to="#">
        <unicon name="trash-alt" width="18"></unicon>
      </router-link>
    </a-tooltip>
    <a-tooltip placement="bottom" title="Read">
      <router-link to="#">
        <unicon name="book-open" width="18"></unicon>
      </router-link>
    </a-tooltip>
    <a-tooltip placement="bottom" title="Folder">
      <router-link to="#">
        <unicon name="folder" width="18"></unicon>
      </router-link>
    </a-tooltip>
  </MessageAction>
</template>

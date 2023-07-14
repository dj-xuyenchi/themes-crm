<template>
  <TabBasic
    v-model:activeKey="activeKey"
    :color="color && color"
    :tabPosition="tabPosition !== undefined ? tabPosition : 'top'"
  >
    <Child v-for="(item, index) in data" :key="index + 1" :color="color && color">
      <template #tab>
        <span v-if="item.icon && item.icon !== 'undefined'">
          <unicon :name="item.icon" width="18"></unicon>
          <span>{{ item.tabTitle }}</span>
        </span>
        <span v-if="!item.icon">
          {{ item.tabTitle }}
        </span>
      </template>
      <h2>{{ item.title }}</h2>
      <p>{{ item.content }}</p>
    </Child>
  </TabBasic>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PropType } from 'vue';
import { TabBasic, Child } from './Style';

const props = defineProps({
  color: String,
  tabPosition: {
    type: String,
    validator: (value) => ['top', 'right', 'bottom', 'left'].includes(value as string),
    default: 'top',
  },
  data: {
    type: Array as PropType<{ title: string; content: string; icon?: string; tabTitle: string }[]>,
    required: true,
  },
});
let activeKey = ref(1);
</script>

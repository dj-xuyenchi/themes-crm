<script lang="ts">
import { defineComponent } from 'vue';
import { CardFrame } from './style';

export default defineComponent({
  name: 'Cards',
  components: {
    CardFrame,
  },
  props: {
    title: [String, Object, Node],
    size: {
      type: String,
      default: 'default',
    },
    more: {
      type: Boolean,
      default: false,
    },
    bodyStyle: Object,
    headStyle: Object,
    headless: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    caption: String,
    bodypadding: String,
    moreText: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template>
  <CardFrame
    v-if="!headless"
    :cardSize="size"
    :title="title"
    :bodyStyle="bodyStyle"
    :headStyle="headStyle"
    :bordered="border"
    :bodypadding="bodypadding"
    :style="{ width: '100%' }"
  >
    <template #title>
      <slot name="title" />
    </template>
    <slot name="caption" />
    <template v-slot:extra>
      <slot name="button" />
      <sdDropdown v-if="more" :action="['click']" placement="bottomRight">
        <template v-slot:overlay>
          <slot name="more" />
        </template>
        <router-link class="card-extra-link" v-if="!moreText" to="#"
          ><unicon name="ellipsis-h" width="24"></unicon
        ></router-link>
        <router-link v-else to="#">More</router-link>
      </sdDropdown>
    </template>
    <slot />
  </CardFrame>

  <CardFrame
    :bodypadding="bodypadding"
    :bodyStyle="bodyStyle"
    :cardSize="size"
    :style="{ width: '100%' }"
    :bordered="border"
    :headless="true"
    v-else
  >
    <sdHeading v-if="title" as="h4">{{ title }}</sdHeading>
    <p v-if="caption">{{ caption }}</p>
    <slot />
  </CardFrame>
</template>

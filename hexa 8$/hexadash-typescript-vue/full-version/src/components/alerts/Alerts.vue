<template>
  <Style
    :message="message"
    :type="type"
    :description="description"
    :closable="closable && closable"
    :showIcon="showIcon && showIcon"
    :outlined="outlined"
    :closeText="closeText && closeText"
  >
    <template v-slot:description>
      <div>
        <slot name="description"></slot>
      </div>
    </template>
  </Style>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Style } from './styled';

export default defineComponent({
  name: 'Alerts',
  components: {
    Style,
  },
  props: {
    type: {
      type: String,
      validation: (value: any) => ['success', 'info', 'warning', 'error'].includes(value as string),
      default: 'success',
    },
    message: {
      type: String,
      default: 'Hello there! A simple success alert—check it out!',
    },
    description: String,
    showIcon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    closable: {
      type: Boolean,
      default: false,
    },
    closeText: String,
    icon: Node,
  },
});
</script>

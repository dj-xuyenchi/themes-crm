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

<script>
import { Style } from './styled';
import VueTypes from 'vue-types';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Alerts',
  components: {
    Style,
  },
  props: {
    type: VueTypes.oneOf(['success', 'info', 'warning', 'error']).def('success'),
    message: VueTypes.string.def('Hello there! A simple success alert—check it out!'),
    description: VueTypes.oneOfType([VueTypes.string]),
    showIcon: VueTypes.bool.def(false),
    outlined: VueTypes.bool.def(false),
    closable: VueTypes.bool.def(false),
    closeText: VueTypes.oneOfType([VueTypes.string]),
    icon: VueTypes.node,
  },
});
</script>

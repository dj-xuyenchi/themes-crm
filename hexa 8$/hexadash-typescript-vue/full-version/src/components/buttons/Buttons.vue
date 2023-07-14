<script lang="ts">
import { ButtonStyled } from './styled';
import { defineComponent, ref } from 'vue';

const Button = defineComponent({
  name: 'Button',
  components: {
    ButtonStyled,
  },
  props: {
    type: {
      type: String,
      validator: (value) =>
        [
          'primary',
          'secondary',
          'success',
          'info',
          'warning',
          'danger',
          'link',
          'dark',
          'light',
          'white',
          'dashed',
          'error',
          'default',
        ].includes(value as string),
      required: false,
      default: 'default',
    },
    shape: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      validator: (value) => ['lg', 'default', 'sm'].includes(value as string),
      default: 'default',
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    ghost: {
      type: Boolean,
      default: false,
    },
    transparent: {
      type: Boolean,
      default: false,
    },
    raised: {
      type: Boolean,
      default: false,
    },
    squared: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: '',
    },
    social: {
      type: String,
      default: '',
    },
    loading: {
      type: Boolean,
      default: false,
    },
    load: {
      type: Boolean,
      default: false,
    },
    block: {
      type: Boolean,
      default: false,
    },
    transparented: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const loading = ref(false);

    function enterLoading() {
      loading.value = true;
    }

    return {
      enterLoading,
      ...props,
    };
  },
});

export default Button;
</script>

<template>
  <ButtonStyled
    :squared="squared"
    :outlined="outlined"
    :ghost="ghost"
    :transparent="transparented"
    :raised="raised"
    :data="type"
    :size="size"
    :shape="shape"
    :type="type"
    :icon="icon"
    :color="color"
    :social="social"
    :click="() => load && enterLoading"
    :loading="loading"
    :block="block"
    :disabled="disabled"
    :class="`ant-btn ant-btn-${type} ant-btn-${size} ${shape && `ant-btn-${shape}`} ${
      block && `ant-btn-block custom-btn`
    }`"
  >
    <slot></slot>
  </ButtonStyled>
</template>

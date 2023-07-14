<script lang="ts">
import { Contents, TitleStyle } from './style';
import { defineComponent, ref, reactive } from 'vue';

export default defineComponent({
  name: 'Popover',
  components: {
    Contents,
    TitleStyle,
  },
  props: {
    placement: {
      type: String,
      default: 'bottom',
    },
    title: {
      type: String,
      default: '',
    },
    class: {
      type: String,
      default: '',
    },
    action: {
      type: String,
      default: 'hover',
    },
  },
  setup() {
    const visible = ref(false);
    const className = reactive({ value: '' });
    const classRef = (value: any) => {
      className.value = value;
    };
    return {
      visible,
      className,
      classRef,
    };
  },
});
</script>

<template>
  <a-popover :class="className" v-model="visible" :placement="placement" :title="title && title" :trigger="action">
    <template v-if="title" v-slot:title>
      <TitleStyle>{{ title }}</TitleStyle>
    </template>
    <template v-slot:content>
      <Contents>
        <slot name="content">
          <a to="#">
            <unicon name="check" width="16"></unicon>
            <span>Btn Dropdown one</span>
          </a>
          <a to="#">
            <unicon name="check" width="16"></unicon>
            <span>Btn Dropdown two</span>
          </a>
          <a to="#">
            <unicon name="check" width="16"></unicon>
            <span>Btn Dropdown three</span>
          </a>
        </slot>
      </Contents>
    </template>
    <slot></slot>
  </a-popover>
</template>

<style>
@import './style.css';
</style>

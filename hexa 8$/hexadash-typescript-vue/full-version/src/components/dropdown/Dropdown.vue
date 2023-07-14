<script lang="ts">
import { Contents } from './dropdown-style';
import { defineComponent, reactive } from 'vue';
export default defineComponent({
  name: 'Dropdown',
  components: {
    Contents,
  },
  props: {
    placement: {
      type: String,
      default: 'bottomRight',
    },
    title: {
      type: String,
      default: '',
    },
    action: {
      type: Array,
      default: () => ['hover'],
    },
    class: {
      type: String,
      default: 'ninjadash-dropdown',
    },
  },
  setup() {
    const className = reactive({ value: '' });
    const classRef = (value: any) => {
      className.value = value;
    };

    return {
      className,
      classRef,
    };
  },
});
</script>

<template>
  <a-dropdown :class="className" :placement="placement" :title="title" :trigger="action">
    <template v-slot:overlay>
      <Contents>
        <slot name="overlay">
          <a to="#">
            <span>Export to CSV</span>
          </a>
          <a to="#">
            <span>Export to XML</span>
          </a>
          <a to="#">
            <span>Export to Drive</span>
          </a>
        </slot>
      </Contents>
    </template>
    <slot></slot>
  </a-dropdown>
</template>

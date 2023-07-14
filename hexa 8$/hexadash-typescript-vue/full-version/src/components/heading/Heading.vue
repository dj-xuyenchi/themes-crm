<script lang="ts">
import { H1, H2, H3, H4, H5, H6 } from './style';
import { defineComponent } from 'vue';
import type { PropType } from 'vue';

export default defineComponent({
  name: 'Heading',
  props: {
    as: {
      type: String as PropType<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'>,
      default: 'h1',
      validator: (value: any) => ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(value),
    },
    className: {
      type: String,
      default: '',
    },
    id: {
      type: String,
      default: '',
    },
    styles: {
      type: Object as PropType<Record<string, any>>,
      default: () => ({}),
    },
  },
  components: {
    H1,
    H2,
    H3,
    H4,
    H5,
    H6,
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>

<template>
  <H1 :style="styles" :className="className" :id="id" v-if="as.toUpperCase() === 'H1'"><slot></slot></H1>
  <H2 :style="styles" :className="className" :id="id" v-else-if="as.toUpperCase() === 'H2'"><slot></slot></H2>
  <H3 :style="styles" :className="className" :id="id" v-else-if="as.toUpperCase() === 'H3'"><slot></slot></H3>
  <H4 :style="styles" :className="className" :id="id" v-else-if="as.toUpperCase() === 'H4'"><slot></slot></H4>
  <H5 :style="styles" :className="className" :id="id" v-else-if="as.toUpperCase() === 'H5'"><slot></slot></H5>
  <H6 :style="styles" :className="className" :id="id" v-else><slot></slot></H6>
</template>

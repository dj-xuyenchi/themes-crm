<template>
  <CascaderStyle>
    <a-cascader
      :size="size"
      :options="options"
      :expandTrigger="trigger"
      :defaultValue="defaultValue"
      @change="onChangeEvent"
      :show-search="isShowSearch && { filter }"
      :placeholder="placeholder"
      :load-data="loadData"
      change-on-select
    />
  </CascaderStyle>
</template>

<script>
import VueTypes from 'vue-types';
import { CascaderStyle } from './style';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Cascader',
  components: {
    CascaderStyle,
  },
  data() {
    return {
      options: this.data,
    };
  },
  methods: {
    onChangeEvent(value, selectedOptions) {
      !this.loading ? this.onChange(value) : this.onChange(value, selectedOptions);
    },
    filter(inputValue, path) {
      return path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    },
    loadData(selectedOptions) {
      const targetOption = selectedOptions[selectedOptions.length - 1];
      targetOption.loading = true;

      // load options lazily
      setTimeout(() => {
        targetOption.loading = false;
        targetOption.children = [
          {
            label: `${targetOption.label} Dynamic 1`,
            value: 'dynamic1',
          },
          {
            label: `${targetOption.label} Dynamic 2`,
            value: 'dynamic2',
          },
        ];
        this.options = [...this.options];
      }, 1000);
    },
  },
  props: {
    data: VueTypes.arrayOf(VueTypes.object).def([
      {
        value: 'zhejiang',
        label: 'Zhejiang',
        children: [
          {
            value: 'hangzhou',
            label: 'Hangzhou',
            children: [
              {
                value: 'xihu',
                label: 'West Lake',
              },
            ],
          },
        ],
      },
      {
        value: 'jiangsu',
        label: 'Jiangsu',
        children: [
          {
            value: 'nanjing',
            label: 'Nanjing',
            children: [
              {
                value: 'zhonghuamen',
                label: 'Zhong Hua Men',
              },
            ],
          },
        ],
      },
    ]),
    defaultValue: VueTypes.arrayOf(VueTypes.string).def([]),
    trigger: VueTypes.string.def('click'),
    placeholder: VueTypes.string.def('Please select'),
    onChange: VueTypes.func,
    isShowSearch: VueTypes.bool.def(false),
    loading: VueTypes.bool.def(false),
    size: VueTypes.oneOf(['large', 'default', 'small']).def('default'),
  },
});
</script>

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

<script lang="ts">
import { CascaderStyle } from './style';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Cascader',
  components: {
    CascaderStyle,
  },
  props: {
    data: {
      type: Array,
      default: () => [
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
      ],
    },
    defaultValue: {
      type: Array,
      default: () => [''],
    },
    trigger: {
      type: String,
      default: 'click',
    },
    placeholder: {
      type: String,
      default: 'Please select',
    },
    onChange: Function,
    isShowSearch: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: (value) => ['large', 'default', 'small'].includes(value as string),
      default: 'default',
    },
  },
  setup(props) {
    let options = ref(props.data);

    function onChangeEvent(value: any, selectedOptions: any) {
      if (props.onChange) {
        !props.loading ? props.onChange(value) : props.onChange(value, selectedOptions);
      }
    }
    function filter(inputValue: any, path: any) {
      return path.some((option: any) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);
    }
    function loadData(selectedOptions: any) {
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
        options.value = [...options.value];
      }, 1000);
    }

    return {
      options,
      onChangeEvent,
      filter,
      loadData,
      ...props,
    };
  },
});
</script>

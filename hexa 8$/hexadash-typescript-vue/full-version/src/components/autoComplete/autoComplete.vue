<script lang="ts">
import { AutoCompleteStyled } from './style';
import { toRefs, ref, computed, defineComponent } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  name: 'AutoComplete',
  components: {
    AutoCompleteStyled,
  },
  props: {
    customComponent: {
      type: Boolean,
      default: false,
    },
    patterns: {
      type: Boolean,
      default: false,
    },
    patternButtons: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '350px',
    },
    dataSource: Array,
    placeholder: {
      type: String,
      default: 'Input Here',
    },
  },
  setup(props) {
    const { dataSource } = toRefs(props);
    const { state } = useStore();
    let value = ref('');
    const myData = ref(dataSource.value);
    const rtl = computed(() => state.themeLayout.rtlData);

    const filterOption = (input: string, option: any) => {
      return option.value.toUpperCase().startsWith(input.toUpperCase());
    };

    const onSelect = () => {};

    return {
      value,
      myData,
      rtl,
      onSelect,
      filterOption,
    };
  },
});
</script>

<template>
  <AutoCompleteStyled
    v-if="customComponent"
    :style="{ width }"
    @select="onSelect"
    :options="myData"
    :filter-option="filterOption"
  >
    <slot></slot>
  </AutoCompleteStyled>
  <AutoCompleteStyled
    v-else-if="patterns"
    v-model:value="value"
    class="certain-category-search"
    dropdownClassName="certain-category-search-dropdown"
    :dropdownMatchSelectWidth="false"
    :dropdownStyle="{ width: 300 }"
    :style="{ width }"
    :placeholder="placeholder"
    :options="myData"
    :filter-option="filterOption"
  >
    <a-input>
      <template #suffix
        ><sdButton
          v-if="patternButtons"
          class="search-btn"
          :style="{ [rtl ? 'marginLeft' : 'marginRight']: -20 }"
          type="primary"
        >
          <unicon name="search"></unicon> </sdButton
        ><unicon v-else name="search"></unicon
      ></template>
    </a-input>
  </AutoCompleteStyled>

  <AutoCompleteStyled
    :style="{ width }"
    @select="onSelect"
    :placeholder="placeholder"
    :value="value"
    :options="myData"
    :filter-option="filterOption"
    v-else
  >
  </AutoCompleteStyled>
</template>

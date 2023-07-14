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

<script>
import { AutoCompleteStyled } from "./style";
import VueTypes from "vue-types";
import { toRefs, ref, computed, defineComponent } from "vue";
import { useStore } from "vuex";

export default defineComponent({
  name: "AutoComplete",
  components: {
    AutoCompleteStyled,
  },
  props: {
    customComponent: VueTypes.bool.def(false),
    patterns: VueTypes.bool.def(false),
    patternButtons: VueTypes.bool.def(false),
    width: VueTypes.string.def("350px"),
    dataSource: VueTypes.array,
    placeholder: VueTypes.string.def("Input here"),
  },
  setup(props) {
    const { dataSource } = toRefs(props);
    const { state } = useStore();
    const value = ref("");
    const myData = ref(dataSource.value);
    const rtl = computed(() => state.themeLayout.rtlData);

    const filterOption = (input, option) => {
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

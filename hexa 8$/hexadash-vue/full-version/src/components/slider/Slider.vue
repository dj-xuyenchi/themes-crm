<template>
  <div>
    <a-row v-if="input">
      <a-col :xl="20" :xs="24">
        <a-slider
          :marks="marks"
          :min="min"
          :max="max"
          @change="onChanges"
          v-model:value="inputValue"
          :step="step"
        />
      </a-col>
      <a-col :xl="4" :xs="24">
        <a-input-number
          :min="min"
          :max="max"
          v-model:value="inputValue"
          @change="onChanges"
          :step="step"
        />
      </a-col>
    </a-row>
    <IconWrapper v-else-if="icon">
      <FrownOutlined :style="{ color: preColor }" />
      <a-slider
        :marks="marks"
        :min="mini"
        :max="maxi"
        @change="handleChange"
        :v-model="value"
      />
      <FrownOutlined :style="{ color: nextColor }" />
    </IconWrapper>
    <div
      v-else-if="vertical"
      style="display: inline-block; height: 300px; margin-left: 70px"
    >
      <a-slider
        :range="range"
        :marks="marks"
        :step="step"
        :max="maxi"
        :min="mini"
        @change="onChanges"
        vertical
        v-model:value="multipleValue"
      />
    </div>

    <a-slider
      :marks="marks"
      :range="range"
      :step="step"
      v-else
      id="test"
      v-model:value="multipleValue"
      :max="maxi"
      :min="mini"
      @change="onChanges"
    />
  </div>
</template>

<script>
import { toRefs, ref, defineComponent } from "vue";
import VueTypes from "vue-types";
import { IconWrapper } from "./style";
import { FrownOutlined } from "@ant-design/icons-vue";
export default defineComponent({
  name: "Slider",
  components: {
    IconWrapper,
    FrownOutlined,
  },
  props: {
    defaultValue: VueTypes.number,
    defaultValues: VueTypes.array,
    range: VueTypes.bool.def(false),
    step: VueTypes.number.def(1),
    input: VueTypes.bool.def(false),
    icon: VueTypes.bool.def(false),
    marks: VueTypes.object,
    vertical: VueTypes.bool.def(false),
    min: VueTypes.number.def(0),
    max: VueTypes.number.def(100),
  },
  setup(props, { emit }) {
    const { defaultValues, defaultValue, min, max } = toRefs(props);
    const inputValue = ref(1);
    const value = ref("");
    const multipleValue = ref(defaultValue.value || defaultValues.value);
    const mini = ref(min.value);
    const maxi = ref(max.value);
    const mid = ref(((maxi.value - mini.value) / 2).toFixed(5));
    const preColor = ref(value.value >= mid.value ? "" : "rgba(0, 0, 0, .45)");
    const nextColor = ref(value.value >= mid.value ? "rgba(0, 0, 0, .45)" : "");

    function onChanges(v) {
      inputValue.value = v;
      emit("onChange", v);
    }
    function handleChange(v) {
      inputValue.value = v;
      value.value = v;
      preColor.value = value.value >= mid.value ? "" : "rgba(0, 0, 0, .45)";
      nextColor.value = value.value >= mid.value ? "rgba(0, 0, 0, .45)" : "";
      emit("onChange", v);
    }
    function onAfterChanges(v) {
      emit("onAfterChange", v);
    }

    return {
      onAfterChanges,
      handleChange,
      onChanges,
      inputValue,
      multipleValue,
      mini,
      maxi,
      value,
      mid,
      preColor,
      nextColor,
    };
  },
});
</script>

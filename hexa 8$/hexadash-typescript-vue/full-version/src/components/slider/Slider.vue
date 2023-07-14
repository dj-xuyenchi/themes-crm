<script setup lang="ts">
import { toRefs, ref, defineEmits } from 'vue';
import { IconWrapper } from './style';
import { FrownOutlined } from '@ant-design/icons-vue';

const props = defineProps({
  defaultValue: Number,
  defaultValues: Object,
  range: { type: Boolean, default: false },
  step: { type: Number, default: 1 },
  input: { type: Boolean, default: false },
  icon: { type: Boolean, default: false },
  marks: Object,
  vertical: { type: Boolean, default: false },
  min: { type: Number, default: 0 },
  max: { type: Number, default: 100 },
});

const emit = defineEmits(['onChange', 'onAfterChange']);

const { defaultValues, defaultValue, min, max }: any = toRefs(props);
const inputValue = ref(1);
let value = ref('');
const multipleValue = ref(defaultValue.value || defaultValues.value);
const mini = ref(min.value);
const maxi = ref(max.value);
const mid = ref(((maxi.value - mini.value) / 2).toFixed(5));
const preColor = ref(value.value >= mid.value ? '' : 'rgba(0, 0, 0, .45)');
const nextColor = ref(value.value >= mid.value ? 'rgba(0, 0, 0, .45)' : '');

function onChanges(v: any) {
  inputValue.value = v;
  emit('onChange', v);
}
function handleChange(v: any) {
  inputValue.value = v;
  value.value = v;
  preColor.value = value.value >= mid.value ? '' : 'rgba(0, 0, 0, .45)';
  nextColor.value = value.value >= mid.value ? 'rgba(0, 0, 0, .45)' : '';
  emit('onChange', v);
}
function onAfterChanges(v: any) {
  emit('onAfterChange', v);
}
</script>

<template>
  <div>
    <a-row v-if="input">
      <a-col :xl="20" :xs="24">
        <a-slider :marks="marks" :min="min" :max="max" @change="onChanges" v-model:value="inputValue" :step="step" />
      </a-col>
      <a-col :xl="4" :xs="24">
        <a-input-number :min="min" :max="max" v-model:value="inputValue" @change="onChanges" :step="step" />
      </a-col>
    </a-row>
    <IconWrapper v-else-if="icon">
      <FrownOutlined :style="{ color: preColor }" />
      <a-slider :marks="marks" :min="mini" :max="maxi" @change="handleChange" :v-model="value" />
      <FrownOutlined :style="{ color: nextColor }" />
    </IconWrapper>
    <div v-else-if="vertical" style="display: inline-block; height: 300px; margin-left: 70px">
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

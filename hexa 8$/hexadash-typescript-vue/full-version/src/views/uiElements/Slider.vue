<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Slider"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic" caption="The simplest use of slider">
            <Sliders :min="0" :max="100" :defaultValue="30" />
            <Sliders @onChange="onChange" range :defaultValues="[20, 50]" />
          </sdCards>
          <sdCards title="With Input" caption="The simplest use of slider">
            <div class="slider-with-input">
              <div class="slider-with-input__single">
                <h3>With integer</h3>
                <Sliders input :min="1" :max="100" />
              </div>
              <div class="slider-with-input__single">
                <h3>With Decimal</h3>
                <Sliders input :min="0" :max="1" :step="0.01" />
              </div>
            </div>
          </sdCards>

          <sdCards title="Range" caption="The simplest use of slider">
            <Sliders range :step="10" :defaultValues="[20, 500]" @onChange="onChange" @onAfterChange="onAfterChange" />
          </sdCards>
          <sdCards title="Graduated slider vertical" caption="The simplest use of slider">
            <div>
              <div style="display: inline-block; height: 300px">
                <Sliders vertical :defaultValue="30" />
              </div>

              <div :style="style">
                <Sliders vertical :min="0" :max="100" range :step="10" :defaultValues="[20, 50]" />
              </div>
              <div :style="style">
                <Sliders vertical range :marks="marks" :defaultValues="[20, 50]" />
              </div>
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="with Icon" caption="The simplest use of slider">
            <Sliders @onChange="onChange" icon :min="1" :max="100" />
          </sdCards>
          <sdCards title="Graduated slider" caption="The simplest use of slider">
            <div>
              <h4>included=true</h4>
              <Sliders :marks="marks" :default-value="37" />
              <Sliders range :marks="marks" :default-values="[26, 37]" />

              <h4>included=false</h4>
              <Sliders :marks="marks" :included="false" :default-value="37" />

              <h4>marks & step</h4>
              <Sliders :marks="marks" :step="10" :default-value="37" />

              <h4>step=null</h4>
              <Sliders :marks="marks" :step="0" :default-value="37" />
            </div>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="tsx">
import { Main } from '../styled';
import Sliders from '../../components/slider/Slider.vue';
import { ref } from 'vue';

const onChangeValue = ref(null);
const afterChangeValue = ref(null);
function onChange(value: any) {
  onChangeValue.value = value;
}
function onAfterChange(value: any) {
  afterChangeValue.value = value;
}
const style = {
  display: 'inline-block',
  height: 300,
  marginLeft: 70,
};
const marks = {
  0: '0°C',
  26: '26°C',
  37: '37°C',
  100: {
    style: {
      color: '#f50',
    },
    label: <strong>100°C</strong>,
  },
};
</script>

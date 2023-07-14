<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Radio"> </sdPageHeader>

    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-radio>Radio</a-radio>
          </sdCards>
          <sdCards title="Disabled">
            <a-radio :default-checked="false" :disabled="true"> Disabled </a-radio>
            <br />
            <a-radio default-checked :disabled="true"> Disabled </a-radio>
          </sdCards>
          <sdCards title="Vertical Radio">
            <a-radio-group v-model:value="value" @change="onChange">
              <a-radio :style="radioStyle" :value="1"> Option A </a-radio>
              <a-radio :style="radioStyle" :value="2"> Option B </a-radio>
              <a-radio :style="radioStyle" :value="3"> Option C </a-radio>
              <a-radio :style="radioStyle" :value="4">
                Others..
                <a-input v-if="value === 4" :style="{ width: 100, marginLeft: 10 }" />
              </a-radio>
            </a-radio-group>
          </sdCards>
          <sdCards title="Radio Size">
            <div>
              <a-radio-group v-model:value="size" size="large">
                <a-radio-button value="a"> Hangzhou </a-radio-button>
                <a-radio-button value="b"> Shanghai </a-radio-button>
                <a-radio-button value="c"> Beijing </a-radio-button>
                <a-radio-button value="d"> Chengdu </a-radio-button>
              </a-radio-group>
            </div>
            <div :style="{ marginTop: '16px' }">
              <a-radio-group v-model:value="size2">
                <a-radio-button value="a"> Hangzhou </a-radio-button>
                <a-radio-button value="b"> Shanghai </a-radio-button>
                <a-radio-button value="c"> Beijing </a-radio-button>
                <a-radio-button value="d"> Chengdu </a-radio-button>
              </a-radio-group>
            </div>
            <div :style="{ marginTop: '16px' }">
              <a-radio-group v-model:value="size3" size="small">
                <a-radio-button value="a"> Hangzhou </a-radio-button>
                <a-radio-button value="b"> Shanghai </a-radio-button>
                <a-radio-button value="c"> Beijing </a-radio-button>
                <a-radio-button value="d"> Chengdu </a-radio-button>
              </a-radio-group>
            </div>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Radio Style">
            <div>
              <a-radio-group v-model:value="value2" @change="onChange">
                <a-radio-button value="a"> Hangzhou </a-radio-button>
                <a-radio-button value="b"> Shanghai </a-radio-button>
                <a-radio-button value="c"> Beijing </a-radio-button>
                <a-radio-button value="d"> Chengdu </a-radio-button>
              </a-radio-group>
            </div>
            <div :style="{ marginTop: '16px' }">
              <a-radio-group v-model:value="size5" @change="onChange">
                <a-radio-button value="a"> Hangzhou </a-radio-button>
                <a-radio-button value="b" disabled> Shanghai </a-radio-button>
                <a-radio-button value="c"> Beijing </a-radio-button>
                <a-radio-button value="d"> Chengdu </a-radio-button>
              </a-radio-group>
            </div>
            <div :style="{ marginTop: '16px' }">
              <a-radio-group disabled v-model:value="size4" @change="onChange">
                <a-radio-button value="a"> Hangzhou </a-radio-button>
                <a-radio-button value="b"> Shanghai </a-radio-button>
                <a-radio-button value="c"> Beijing </a-radio-button>
                <a-radio-button value="d"> Chengdu </a-radio-button>
              </a-radio-group>
            </div>
          </sdCards>
          <sdCards title="Horizontal Radio">
            <a-radio-group v-model:value="value" @change="onChange">
              <a-radio :value="1"> A </a-radio>
              <a-radio :value="2"> B </a-radio>
              <a-radio :value="3"> C </a-radio>
              <a-radio :value="4"> D </a-radio>
            </a-radio-group>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';

let value = 1;
let value2 = 'a';
let size = 'a';
let size2 = 'a';
let size3 = 'a';
let size4 = 'a';
let size5 = 'a';
const radioStyle = {
  display: 'block',
  height: '30px',
  lineHeight: '30px',
};
const onChange = (e: any) => {
  console.log('radio checked', e.target.value);
};
</script>

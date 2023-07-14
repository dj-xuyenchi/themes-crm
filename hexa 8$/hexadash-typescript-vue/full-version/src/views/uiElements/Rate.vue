<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Rate"> </sdPageHeader>

    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-rate v-model:value="value" />
          </sdCards>
          <sdCards title="Half Star">
            <a-rate v-model:value="halfStar" allow-half />
          </sdCards>
          <sdCards title="Show copywriting">
            <span>
              <a-rate v-model:value="value" :tooltips="desc" />
              <span class="ant-rate-text">{{ desc[value - 1] }}</span>
            </span>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Read Only">
            <a-rate v-model:value="readOnly" disabled />
          </sdCards>
          <sdCards title="Clear Start">
            <a-rate v-model:value="clearStar" />
            <span class="ant-rate-text">allowClear: true</span>
            <br />
            <a-rate :allow-clear="false" v-model:value="clearStar2" />
            <span class="ant-rate-text">allowClear: false</span>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';

let value = 2;
let halfStar = 2.5;
let readOnly = 3;
let clearStar = 3;
let clearStar2 = 3;
let desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
</script>

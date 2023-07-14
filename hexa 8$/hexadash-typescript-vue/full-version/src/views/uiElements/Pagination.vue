<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="pagination"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-pagination v-model="current" :total="50" show-less-items />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="More Pages">
            <a-pagination :default-current="6" :total="500" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Page Size">
            <a-pagination show-size-changer :default-current="3" :total="500" @showSizeChange="onShowSizeChange" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Quick Jump">
            <a-pagination show-size-changer show-quick-jumper :default-current="2" :total="500" @change="onChange" />
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { watch, ref } from 'vue';

let current = ref(2);
let pageSize = ref(20);
const onShowSizeChange = (current: number, pageSize: number) => {
  console.log(current, pageSize);
};
const onChange = (pageNumber: number | string) => {
  console.log('Page: ', pageNumber);
};

watch(pageSize, (val) => {
  console.log('pageSize', val);
});
watch(current, (val) => {
  console.log('current', val);
});
</script>

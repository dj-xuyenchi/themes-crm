<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Empty"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Basic" caption="The simplest use of Empty">
            <a-empty />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Chose image" caption="The simplest use of Empty">
            <a-empty :image="simpleImage" />
          </sdCards>
        </a-col>
        <a-col :md="12" :sm="12" :xs="24">
          <sdCards title="Customize" caption="The simplest use of Empty">
            <a-empty
              image="https://gw.alipayobjects.com/mdn/miniapp_social/afts/img/A*pevERLJC9v0AAAAAAAAAAABjAQAAAQ/original"
              :image-style="{
                height: '60px',
              }"
            >
              <template v-slot:description>
                <span> Customize <a href="#API">Description</a> </span>
              </template>
              <sdButton size="sm" type="primary"> Create Now </sdButton>
            </a-empty>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Empty } from 'ant-design-vue';
import { Main } from '../styled';
const simpleImage = Empty.PRESENTED_IMAGE_SIMPLE;
</script>

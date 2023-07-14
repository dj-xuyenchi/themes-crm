<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Spin"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic" caption="The simplest use of Spin">
            <a-spin />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Size" caption="The simplest use of Spin">
            <a-spin size="small" />
            <a-spin />
            <a-spin size="large" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Inside a container" caption="The simplest use of Spin">
            <SpinerWraperStyle>
              <a-spin />
            </SpinerWraperStyle>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom Indicator" caption="The simplest use of Spin">
            <SpinerWraperStyle>
              <a-spin indicator="{antIcon}" />
            </SpinerWraperStyle>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { SpinerWraperStyle } from './ui-elements-styled';
</script>

<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="List"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Simple list">
            <a-list size="small" bordered :data-source="data">
              <template #renderItem="{ item }">
                <a-list-item>{{ item }}</a-list-item>
              </template>
              <template #header>
                <div>Header</div>
              </template>
              <template #footer>
                <div>Footer</div>
              </template>
            </a-list>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'Man charged over missing wedding girl.',
  'Los Angeles battles huge wildfires.',
];
</script>

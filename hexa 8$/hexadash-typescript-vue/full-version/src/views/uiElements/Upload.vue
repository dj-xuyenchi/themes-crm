<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Upload"> </sdPageHeader>
    <Main>
      <a-row :gutter="15">
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Basic"> <basic-upload /></sdCards>
          <sdCards title="Avatar"> <avatar-upload /></sdCards>
        </a-col>
        <a-col :md="12" :sm="24" :xs="24">
          <sdCards title="Complete Control"><complete-control-upload /></sdCards>
          <sdCards title="Upload Default"> <default-upload /></sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import BasicUpload from './upload/Basic.vue';
import AvatarUpload from './upload/Avatar.vue';
import CompleteControlUpload from './upload/CompleteControl.vue';
import DefaultUpload from './upload/Default.vue';
</script>

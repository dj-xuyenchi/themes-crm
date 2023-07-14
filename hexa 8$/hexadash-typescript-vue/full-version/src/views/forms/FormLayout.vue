<script setup lang="ts">
import { Main } from '../styled';
import HorizontalForm from './overview/HorizontalForm.vue';
import HorizontalIconForm from './overview/HorizontalIconForm.vue';
import VerticalForm from './overview/VerticalForm.vue';
import VerticalIconForm from './overview/VerticalIconForm.vue';
import MultiColumnForm from './overview/MultiColumnForm.vue';
</script>

<template>
  <div>
    <sdPageHeader title="Form Layout" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :lg="12" :xs="24">
          <HorizontalForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <HorizontalIconForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <VerticalForm />
        </a-col>
        <a-col :lg="12" :xs="24">
          <VerticalIconForm />
        </a-col>
        <a-col :xs="24">
          <MultiColumnForm />
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

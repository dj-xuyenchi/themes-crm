<script setup lang="ts">
import { WizardBlock } from './Style';
import { Main } from '../styled';
</script>

<template>
  <sdPageHeader title="Wizards" class="ninjadash-page-header-main"> </sdPageHeader>
  <Main>
    <a-row :gutter="25">
      <a-col :sm="24" :xs="24">
        <WizardBlock>
          <sdCards headless>
            <a-row justify="center">
              <a-col :xxl="20" :xs="24"><router-view name="child"></router-view> </a-col>
            </a-row>
          </sdCards>
        </WizardBlock>
      </a-col>
    </a-row>
  </Main>
</template>

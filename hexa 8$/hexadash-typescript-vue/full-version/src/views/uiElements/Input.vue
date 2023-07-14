<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Input"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <a-input placeholder="Basic usage" />
          </sdCards>
          <sdCards title="Textarea">
            <a-textarea :rows="4" />
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Three sizes of Input">
            <a-input size="large" placeholder="Large size">
              <template v-slot:prefix>
                <unicon name="user" width="24"></unicon>
              </template>
              /></a-input
            >
            <br />
            <br />
            <a-input placeholder="default size">
              <template v-slot:prefix>
                <unicon name="user" width="20"></unicon>
              </template>
              /></a-input
            >
            <br />
            <br />
            <a-input size="small" placeholder="small size">
              <template v-slot:prefix>
                <unicon name="user" width="16"></unicon>
              </template>
              />
            </a-input>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';

const handleButtonClick: any = () => {
  // this.$message.info("Click on left button.");
};
</script>

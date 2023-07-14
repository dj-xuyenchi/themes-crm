<script setup lang="ts">
import { BasicFormWrapper } from '../../styled';
</script>

<template>
  <BasicFormWrapper class="mb-25">
    <sdCards title="Sizes">
      <a-form name="ninjadash_sized-form" layout="vertical">
        <a-row :gutter="30">
          <a-col :xs="24">
            <a-form-item class="large-input" label="Large Input">
              <a-input size="large" placeholder="Large size"> </a-input>
            </a-form-item>
            <a-form-item class="small-input" label="Default Input">
              <a-input placeholder="default size"></a-input>
            </a-form-item>
            <a-form-item class="mb-25" label="Small Input">
              <a-input size="small" placeholder="small size"></a-input>
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </sdCards>
  </BasicFormWrapper>
</template>

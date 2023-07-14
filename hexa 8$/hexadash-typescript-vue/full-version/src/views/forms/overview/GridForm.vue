<script setup lang="ts">
import { BasicFormWrapper } from '../../styled';
</script>

<template>
  <BasicFormWrapper class="mb-25">
    <sdCards title="Form Group in Grid">
      <a-form name="ninjadash_grid-form" layout="vertical">
        <a-row :gutter="30">
          <a-col :md="8" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-3-1" placeholder="One of Three Columns" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-3-2" placeholder="One of Three Columns" />
            </a-form-item>
          </a-col>
          <a-col :md="8" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-3-3" placeholder="One of Three Columns" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="30">
          <a-col :md="6" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-4-1" placeholder="One of Four Columns" />
            </a-form-item>
          </a-col>
          <a-col :md="6" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-4-2" placeholder="One of Four Columns" />
            </a-form-item>
          </a-col>
          <a-col :md="6" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-4-3" placeholder="One of Four Columns" />
            </a-form-item>
          </a-col>
          <a-col :md="6" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-4-4" placeholder="One of Four Columns" />
            </a-form-item>
          </a-col>
        </a-row>
        <a-row :gutter="30">
          <a-col :md="12" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-2-1" placeholder="One of Two Columns" />
            </a-form-item>
          </a-col>
          <a-col :md="12" :xs="24" class="mb-25">
            <a-form-item>
              <a-input name="grid-2-1" placeholder="One of Two Columns" />
            </a-form-item>
          </a-col>
        </a-row>
      </a-form>
    </sdCards>
  </BasicFormWrapper>
</template>

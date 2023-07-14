<script setup lang="ts">
import { BasicFormWrapper } from '../../styled';
</script>

<template>
  <div>
    <BasicFormWrapper class="mb-25">
      <sdCards title="Multiple Column">
        <a-form name="multi-form" layout="vertical">
          <a-row :gutter="30">
            <a-col :sm="12" :xs="24" class="mb-25">
              <a-form-item>
                <a-input placeholder="Username" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="City" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="Company" />
              </a-form-item>
            </a-col>
            <a-col :sm="12" :xs="24" class="mb-25">
              <a-form-item>
                <a-input placeholder="Last Name" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="Country" />
              </a-form-item>
              <a-form-item>
                <a-input placeholder="Email" />
              </a-form-item>
            </a-col>
          </a-row>
          <a-row>
            <a-col :sm="12" :xs="24">
              <div class="ninjadash_form-action">
                <sdButton class="btn-signin" html-type="submit" type="light" style="margin-right: 15px">
                  Cancel
                </sdButton>
                <sdButton class="btn-signin" type="primary"> Save </sdButton>
              </div>
            </a-col>
          </a-row>
        </a-form>
      </sdCards>
    </BasicFormWrapper>
  </div>
</template>

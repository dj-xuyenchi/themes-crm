<template>
  <ChangePasswordWrapper>
    <sdCards>
      <template v-slot:title>
        <div class="setting-card-title">
          <sdHeading as="h4">Password Settings</sdHeading>
          <span>Change or reset your account password</span>
        </div>
      </template>
      <a-row type="flex" justify="center">
        <a-col :lg="12" :sm="20" :xs="24">
          <BasicFormWrapper>
            <a-form :model="formState" @finish="handleFinish" @finishFailed="handleFinishFailed" layout="vertical">
              <a-form-item label="Old Password">
                <a-input v-model:value="formState.old" />
              </a-form-item>
              <a-form-item name="new" label="New Password">
                <a-input-password v-model:value="formState.new" />
              </a-form-item>
              <p class="input-message">Minimum 6 characters</p>
              <a-form-item>
                <div class="setting-form-actions">
                  <sdButton @click="handleFinish" htmlType="submit" type="primary"> Change Password </sdButton>
                  &nbsp; &nbsp;
                  <sdButton size="default" @click="handleCancel" type="light"> Cancel </sdButton>
                </div>
              </a-form-item>
            </a-form>
          </BasicFormWrapper>
        </a-col>
      </a-row>
    </sdCards>
  </ChangePasswordWrapper>
</template>

<script setup lang="ts">
import { ChangePasswordWrapper } from './style';
import { BasicFormWrapper } from '../../../styled';
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  old: string;
  new: string;
}

const formState: UnwrapRef<FormState> = reactive({
  old: '',
  new: '',
});

const handleFinish = (values: any) => {
  values = { ...values };
  console.log(values, formState);
};

const handleFinishFailed = (errors: any) => {
  console.log(errors);
};
const handleCancel = (e: Event) => {
  e.preventDefault();
  //form.resetFields();
};
</script>

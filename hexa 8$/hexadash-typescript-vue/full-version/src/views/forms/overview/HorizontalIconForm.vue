<script setup lang="ts">
import { reactive } from 'vue';
import { HorizontalFormStyleWrap } from './Style';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: string;
  name: string;
  emailAddress: string;
  password: string;
}

const formState: UnwrapRef<FormState> = reactive({
  layout: 'horizontal',
  name: 'Duran Clayton',
  emailAddress: 'username@email.com',
  password: '123456',
});

const labelCol = {
  lg: 8,
  md: 9,
  xs: 24,
};
const wrapperCol = {
  lg: 16,
  md: 15,
  xs: 24,
};
</script>

<template>
  <HorizontalFormStyleWrap>
    <sdCards title="Horizontal Form With Icons">
      <a-form
        :layout="formState.layout"
        :model="formState"
        :label-col="labelCol"
        :wrapper-col="wrapperCol"
        labelAlign="left"
      >
        <a-form-item label="Name">
          <a-input v-model:value="formState.name" placeholder="input placeholder">
            <template #prefix>
              <unicon name="user" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Email Address">
          <a-input v-model:value="formState.emailAddress" placeholder="input placeholder">
            <template #prefix>
              <unicon name="envelope" width="14"></unicon>
            </template>
          </a-input>
        </a-form-item>
        <a-form-item label="Password">
          <a-input-password v-model:value="formState.password" placeholder="input placeholder">
            <template #prefix>
              <unicon name="lock" width="14"></unicon>
            </template>
          </a-input-password>
        </a-form-item>
        <a-row>
          <a-col :lg="{ span: 16, offset: 8 }" :md="{ span: 15, offset: 9 }" :xs="{ span: 24, offset: 0 }">
            <div class="ninjadash_form-action">
              <sdButton class="btn-signin" html-type="submit" type="light"> Cancel </sdButton>
              <sdButton class="btn-signin" type="primary"> Save </sdButton>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </sdCards>
  </HorizontalFormStyleWrap>
</template>

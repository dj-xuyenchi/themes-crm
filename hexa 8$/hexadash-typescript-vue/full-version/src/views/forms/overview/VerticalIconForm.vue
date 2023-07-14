<script setup lang="ts">
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';
</script>

<template>
  <BasicFormWrapper>
    <VerticalFormStyleWrap>
      <sdCards title="Vertical Form With Icons">
        <a-form name="ninjadash_vertical-form-with-icon" layout="vertical">
          <a-form-item label="Name">
            <a-input value="Duran Clayton" placeholder="input placeholder">
              <template #prefix>
                <unicon name="user" width="14"></unicon>
              </template>
            </a-input>
          </a-form-item>
          <a-form-item label="Email Address">
            <a-input name="email" value="username@email.com" placeholder="input placeholder">
              <template #prefix>
                <unicon name="envelope" width="14"></unicon>
              </template>
            </a-input>
          </a-form-item>

          <a-form-item label="Password">
            <a-input-password name="password" value="12345678" placeholder="with input password">
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
    </VerticalFormStyleWrap>
  </BasicFormWrapper>
</template>

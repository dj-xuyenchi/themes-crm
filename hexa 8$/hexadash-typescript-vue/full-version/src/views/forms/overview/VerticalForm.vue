<script setup lang="ts">
import { VerticalFormStyleWrap } from './Style';
import { BasicFormWrapper } from '../../styled';
import { reactive } from 'vue';
import type { UnwrapRef } from 'vue';

interface FormState {
  layout: string;
}
const formState: UnwrapRef<FormState> = reactive({
  layout: 'vertical',
});
</script>

<template>
  <BasicFormWrapper>
    <VerticalFormStyleWrap>
      <sdCards title="Vertical Form">
        <a-form name="ninjadash_vertical-form" :layout="formState.layout">
          <a-form-item label="Name">
            <a-input value="Duran Clayton" placeholder="input placeholder" />
          </a-form-item>
          <a-form-item label="Email Address">
            <a-input name="email" value="username@email.com" placeholder="input placeholder" />
          </a-form-item>
          <a-form-item label="Password">
            <a-input-password name="password" value="12345678" placeholder="with input password" />
          </a-form-item>
          <a-row>
            <a-col :xs="24">
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

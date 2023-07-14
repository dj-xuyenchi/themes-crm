<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Message"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Basic">
            <MessageStyleWrapper>
              <sdButton type="primary" size="lg" :raised="true" @click="info"> Display normal message </sdButton>
            </MessageStyleWrapper>
          </sdCards>
          <sdCards title="Other types of message">
            <MessageStyleWrapper>
              <a-space>
                <sdButton :outlined="true" type="white" size="lg" @click="success"> Success </sdButton>
                <sdButton :outlined="true" type="white" size="lg" @click="error"> Error </sdButton>
                <sdButton :outlined="true" type="white" size="lg" @click="warning"> Warning </sdButton>
              </a-space>
            </MessageStyleWrapper>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Custom Message">
            <MessageStyleWrapper>
              <sdButton type="primary" size="lg" :raised="true" @click="displayDuration">
                Customized display duration
              </sdButton>
            </MessageStyleWrapper>
          </sdCards>
          <sdCards title="Loading">
            <MessageStyleWrapper>
              <sdButton type="white" size="lg" :outlined="true" @click="loading">
                Display a loading indicator
              </sdButton>
            </MessageStyleWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main, MessageStyleWrapper } from '../styled';
import { message } from 'ant-design-vue';

const info = () => {
  message.info('This is a normal message');
};
const success = () => {
  message.success('This is a success message');
};
const error = () => {
  message.error('This is an error message');
};
const warning = () => {
  message.warning('This is a warning message');
};
const displayDuration = () => {
  message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
};
const loading = () => {
  const hide = message.loading('Action in progress..', 0);
  setTimeout(hide, 2500);
};
</script>

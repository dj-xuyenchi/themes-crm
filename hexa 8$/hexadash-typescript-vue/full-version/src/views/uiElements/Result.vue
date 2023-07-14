<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="Results"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="12" :xs="24">
          <sdCards title="Success" caption="The simplest use of Results">
            <a-result
              status="success"
              title="Successfully Purchased Cloud Server ECS!"
              sub-title="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
              style="padding: 0"
            >
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
                <a-button key="buy"> Buy Again </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="Warning" caption="The simplest use of Results">
            <a-result status="warning" title="There are some problems with your operation." style="padding: 0">
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="404" caption="The simplest use of Results">
            <a-result
              status="404"
              title="404"
              sub-title="Sorry, the page you visited does not exist."
              style="padding: 0"
            >
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="Error" caption="The simplest use of Results">
            <a-result
              status="error"
              title="Submission Failed"
              sub-title="Please check and modify the following information before resubmitting."
              style="padding: 0"
            >
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
                <a-button key="buy"> Buy Again </a-button>
              </template>

              <div class="desc ant-typography">
                <p class="ant-typography" style="font-size: 16px">
                  <strong>The content you submitted has the following error:</strong>
                </p>
                <p class="ant-typography">
                  <CloseCircleOutlined :style="{ color: 'red' }" /> Your account has been frozen
                  <a>Thaw immediately &gt;</a>
                </p>
                <p class="ant-typography">
                  <CloseCircleOutlined :style="{ color: 'red' }" /> Your account is not yet eligible to apply
                  <a>Apply Unlock &gt;</a>
                </p>
              </div>
            </a-result>
          </sdCards>
        </a-col>
        <a-col :md="12" :xs="24">
          <sdCards title="Info" caption="The simplest use of Results">
            <a-result title="Your operation has been executed" style="padding: 0">
              <template #extra>
                <a-button key="console" type="primary"> Go Console </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="403" caption="The simplest use of Results">
            <a-result
              status="403"
              title="403"
              sub-title="Sorry, you are not authorized to access this page."
              style="padding: 0"
            >
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
          </sdCards>
          <sdCards title="500" caption="The simplest use of Results">
            <a-result status="500" title="500" sub-title="Sorry, the server is wrong." style="padding: 0">
              <template #extra>
                <a-button type="primary"> Back Home </a-button>
              </template>
            </a-result>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { mapState } from 'vuex';
import { CloseCircleOutlined } from '@ant-design/icons-vue';
import { Main } from '../styled';

const rtl = mapState(['rtl']);
</script>

<style scoped>
.desc p {
  margin-bottom: 1em;
}
</style>

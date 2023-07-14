<script setup lang="ts">
import { Main, BasicFormWrapper } from '../../styled';
import { JobApplicationWrap } from './Style';
import { message } from 'ant-design-vue';

const pageRoutes = [
  {
    path: 'app',
    breadcrumbName: 'Apps',
  },
  {
    path: 'first',
    breadcrumbName: 'Tickets',
  },
];

const props = {
  name: 'file',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info: any) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const onBack = (e: Event) => {
  e.preventDefault();
  window.history.back();
};
</script>

<template>
  <sdPageHeader
    class="ninjadash-page-header-main ninjadash-pageheader-with-back"
    :routes="pageRoutes"
    title="Job Application"
  >
    <template>
      <span class="back-link">
        <router-link @click="onBack" to="#">
          <unicon name="arrow-left"></unicon>
          Go back
        </router-link>
      </span>
    </template>
  </sdPageHeader>

  <Main>
    <a-row :gutter="15">
      <a-col :xxl="{ span: 12, offset: 6 }" :xl="{ span: 16, offset: 4 }" :lg="16" :xs="24">
        <JobApplicationWrap>
          <sdCards headless>
            <h2 class="ninjadash-application-title">Submit your application</h2>
            <BasicFormWrapper class="mb-25">
              <a-form name="ninjadash-vertical-form" layout="vertical">
                <a-form-item name="name" label="Full Name">
                  <a-input size="large" placeholder="e.g. John Smith" />
                </a-form-item>
                <a-form-item name="email" label="Email Address">
                  <a-input size="large" placeholder="Enter Email" />
                </a-form-item>

                <a-form-item name="phone" label="Phone">
                  <a-input size="large" placeholder="e.g. +8811111111111" />
                </a-form-item>
                <a-form-item name="about" label="About you">
                  <a-textarea placeholder="Tell us about yourself" />
                </a-form-item>
                <a-form-item name="website" label="Website URL (optional)">
                  <a-input size="large" placeholder="e.g. www.ninjadash.com" />
                </a-form-item>
                <a-form-item name="portfolio" label="Portfolio URL (Optional)">
                  <a-input size="large" placeholder="e.g. Portfolio" />
                </a-form-item>
                <a-form-item name="github" label="Github URL (Optional)">
                  <a-input size="large" placeholder="e.g. Github" />
                </a-form-item>
                <a-form-item name="newRole" label="What are you looking for in a new role?">
                  <a-textarea placeholder="What can we help with?" />
                </a-form-item>
                <a-form-item name="interested" label="Why are you interested in working with us?">
                  <a-textarea placeholder="What can we help with?" />
                </a-form-item>
                <a-form-item name="past" label="What has been your most challenging experience in a past role? ">
                  <a-textarea placeholder="What can we help with?" />
                </a-form-item>
                <a-form-item name="salary" label="Salary Expectation">
                  <a-input size="large" placeholder="" />
                </a-form-item>
                <a-form-item name="file" label="Please upload your CV">
                  <a-upload-dragger v-bind="props">
                    <sdButton type="secondary" size="sm">Browse</sdButton>
                  </a-upload-dragger>
                </a-form-item>

                <div class="ninjadash-form-action">
                  <sdButton htmlType="submit" class="btn-signin" type="primary"> Submit Application </sdButton>
                </div>
              </a-form>
            </BasicFormWrapper>
          </sdCards>
        </JobApplicationWrap>
      </a-col>
    </a-row>
  </Main>
</template>

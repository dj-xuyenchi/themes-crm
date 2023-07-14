<template>
  <div>
    <sdPageHeader class="ninjadash-page-header-main" title="PageHeader"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :md="24" :xs="24">
          <sdCards title="Basic Header">
            <PageHeaderWrapper>
              <sdPageHeader title="Title" subTitle="This is a subtitle" />
            </PageHeaderWrapper>
          </sdCards>
        </a-col>
        <a-col :md="24" :xs="24">
          <sdCards title="Custom header">
            <PageHeaderWrapper>
              <sdPageHeader title="Title">
                <template v-slot:buttons>
                  <div class="page-header-actions">
                    <sdCalendarButton />
                    <sdExportButton />
                    <sdShareButton />
                    <sdButton size="sm" type="primary">
                      <unicon name="plus" width="14"></unicon>
                      <span>Add New</span>
                    </sdButton>
                  </div>
                </template>
              </sdPageHeader>
            </PageHeaderWrapper>
          </sdCards>
        </a-col>
        <a-col :md="24" :xs="24">
          <sdCards title="Breadcrumb header">
            <PageHeaderWrapper>
              <sdPageHeader title="Title" :breadcrumb="{ routes }" subTitle="This is a subtitle" />
            </PageHeaderWrapper>
          </sdCards>
        </a-col>
        <a-col :md="24" :xs="24">
          <sdCards title="Extra Content header">
            <PageHeaderWrapper>
              <sdPageHeader :breadcrumb="{ routes }" title="Title" subTitle="This is a subtitle">
                <template v-slot:buttons>
                  <a-space>
                    <sdButton size="sm" class="btn-outlined" type="light" :outlined="true"> Operation </sdButton>
                    <sdButton size="sm" class="btn-outlined" type="light" :outlined="true"> Operation </sdButton>
                    <sdButton size="sm" type="primary" :outlined="true"> Primary </sdButton>
                  </a-space>
                </template>
              </sdPageHeader>
            </PageHeaderWrapper>
          </sdCards>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main, PageHeaderWrapper } from '../styled';

const routes = [
  {
    path: 'index',
    breadcrumbName: 'First-level Menu',
  },
  {
    path: 'first',
    breadcrumbName: 'Second-level Menu',
  },
  {
    path: 'second',
    breadcrumbName: 'Third-level Menu',
  },
];
</script>

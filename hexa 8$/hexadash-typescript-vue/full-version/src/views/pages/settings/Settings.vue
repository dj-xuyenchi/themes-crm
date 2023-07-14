<template>
  <div>
    <sdPageHeader title="Profile Settings" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xxl="6" :lg="8" :md="10" :xs="24">
          <ProfileAuthorBox>
            <author-box />
          </ProfileAuthorBox>
        </a-col>
        <a-col :xxl="18" :lg="16" :md="14" :xs="24">
          <SettingWrapper>
            <CoverSection />
            <Suspense>
              <template #default>
                <router-view></router-view>
              </template>
              <template #fallback>
                <div class="spin">
                  <a-spin />
                </div>
              </template>
            </Suspense>
          </SettingWrapper>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../../styled';
import { SettingWrapper } from './overview/style';
import CoverSection from './overview/CoverSection.vue';
import AuthorBox from './overview/ProfileAuthorBox.vue';
import { ProfileAuthorBox } from './overview/style';
</script>

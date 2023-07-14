<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { useRoute } from 'vue-router';
import { Main } from '../../styled';
import { SettingWrapper } from './overview/style';

const UserCards = defineAsyncComponent(() => import('../../pages/overview/UserCard.vue'));
const CoverSection = defineAsyncComponent(() => import('./overview/CoverSection.vue'));
const UserBio = defineAsyncComponent(() => import('./overview/UserBio.vue'));

const { matched } = useRoute();
const { path } = matched[1];
</script>

<template>
  <sdPageHeader title="My Profile" class="ninjadash-page-header-main"> </sdPageHeader>

  <Main>
    <a-row :gutter="25">
      <a-col :xxl="6" :lg="8" :md="10" :xs="24">
        <Suspense>
          <template #default>
            <UserCards
              :user="{
                name: 'Duran Clyton',
                designation: 'UI/UX Designer',
                img: 'assets/img/users/1.png',
              }"
            />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active :paragraph="{ rows: 3 }" />
            </sdCards>
          </template>
        </Suspense>
        <Suspense>
          <template #default>
            <UserBio />
          </template>
          <template #fallback>
            <sdCards headless>
              <a-skeleton avatar active :paragraph="{ rows: 3 }" />
            </sdCards>
          </template>
        </Suspense>
      </a-col>
      <a-col :xxl="18" :lg="16" :md="14" :xs="24">
        <SettingWrapper>
          <Suspense>
            <template #default>
              <div class="coverWrapper">
                <CoverSection />
                <nav class="profileTab-menu">
                  <ul>
                    <li>
                      <router-link :to="`${path}/overview`">Overview</router-link>
                    </li>
                    <li>
                      <router-link :to="`${path}/timeline`">Timeline</router-link>
                    </li>
                    <li>
                      <router-link :to="`${path}/activity`">Activity</router-link>
                    </li>
                  </ul>
                </nav>
              </div>
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
          <router-view name="child"></router-view>
        </SettingWrapper>
      </a-col>
    </a-row>
  </Main>
</template>

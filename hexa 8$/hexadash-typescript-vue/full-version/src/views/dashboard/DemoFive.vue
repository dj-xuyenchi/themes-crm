<script setup lang="ts">
import { Main } from '../styled';
import { defineAsyncComponent } from 'vue';
import { PageHeaderBanner } from '@/components/banners/Banners.vue';
import cardData from '@/demoData/sampleCards.json';

const UserOverview = defineAsyncComponent(() => import('./demoFive/UserOverview.vue'));
const Calender = defineAsyncComponent(() => import('./demoFive/Calender.vue'));
const MemberProgress = defineAsyncComponent(() => import('./demoFive/MemberProgress.vue'));
const UpcomingEvents = defineAsyncComponent(() => import('./demoFive/UpcomingEvents.vue'));
const KnowledgeBase = defineAsyncComponent(() => import('./demoFive/KnowledgeBase.vue'));
const Timelines = defineAsyncComponent(() => import('./demoFive/Timeline.vue'));
const Inbox = defineAsyncComponent(() => import('./demoFive/Inbox.vue'));
const BlogCard = defineAsyncComponent(() => import('../../components/cards/BlogCard.vue'));

const { BlogCardData } = cardData;
</script>

<template>
  <div>
    <Main>
      <a-row :gutter="25">
        <a-col :xs="24" :md="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <PageHeaderBanner /> </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :md="24" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <UserOverview /> </template>
          </Suspense>
        </a-col>
        <a-col :xxl="8" :md="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <Calender /> </template>
          </Suspense>
        </a-col>
        <a-col :xxl="12" :md="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <MemberProgress /> </template>
          </Suspense>
        </a-col>
        <a-col :xxl="12" :md="24" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <UpcomingEvents /> </template>
          </Suspense>
        </a-col>

        <a-col :xxl="8" :md="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <KnowledgeBase /> </template>
          </Suspense>
        </a-col>
        <a-col :xxl="8" :md="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <Timelines /> </template>
          </Suspense>
        </a-col>
        <a-col :xxl="8" :md="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <Inbox /> </template>
          </Suspense>
        </a-col>
        <template :key="blog.id" v-for="(blog, index) in BlogCardData">
          <a-col v-if="index < 3" :xxl="8" :md="12" :xs="24">
            <BlogCard :item="blog" />
          </a-col>
        </template>
      </a-row>
    </Main>
  </div>
</template>

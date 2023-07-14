<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { Main } from '../styled';
import { MixedCardWrap } from './Style';

const OverviewDataList = defineAsyncComponent(() => import('@/views/dashboard/demoOne/OverviewDataList.vue'));

const SalesOverview = defineAsyncComponent(() => import('@/views/dashboard/demoThree/SalesOverview.vue'));

const SalesByLocation = defineAsyncComponent(() => import('@/views/dashboard/demoOne/SalesByLocation.vue'));
const InfoCard = defineAsyncComponent(() => import('@/components/cards/InfoCard.vue'));
const Newsletter = defineAsyncComponent(() => import('@/components/cards/Newsletter.vue'));

const TeamList = defineAsyncComponent(() => import('@/views/dashboard/demoFour/TeamList.vue'));

const KnowledgeBase = defineAsyncComponent(() => import('@/views/dashboard/demoFive/KnowledgeBase.vue'));

const Timeline = defineAsyncComponent(() => import('@/views/dashboard/demoFive/Timeline.vue'));

const UpcomingEvents = defineAsyncComponent(() => import('@/views/dashboard/demoFive/UpcomingEvents.vue'));

const Inbox = defineAsyncComponent(() => import('@/views/dashboard/demoFive/Inbox.vue'));

const Calender = defineAsyncComponent(() => import('@/views/dashboard/demoFive/Calender.vue'));
</script>

<template>
  <div>
    <sdPageHeader title="Widgets Mixed" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <MixedCardWrap>
        <a-row :gutter="25">
          <a-col :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <OverviewDataList /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <SalesOverview /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="16" :md="24" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <SalesByLocation /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default>
                <a-row :gutter="15">
                  <a-col :xs="12">
                    <InfoCard icon="briefcase-alt" />
                  </a-col>
                  <a-col :xs="12">
                    <InfoCard text="Total Awards" icon="award" type="secondary" counter="15k" />
                  </a-col>
                  <a-col :xs="24">
                    <Newsletter />
                  </a-col>
                </a-row>
              </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <TeamList /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <KnowledgeBase /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <Timeline /> </template>
            </Suspense>
          </a-col>
          <a-col :lg="8" :md="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <KnowledgeBase /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <UpcomingEvents /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <Inbox /> </template>
            </Suspense>
          </a-col>
          <a-col :xxl="8" :xl="8" :lg="12" :xs="24">
            <Suspense>
              <template #fallback>
                <sdCards headless>
                  <a-skeleton active />
                </sdCards>
              </template>
              <template #default> <Calender /> </template>
            </Suspense>
          </a-col>
        </a-row>
      </MixedCardWrap>
    </Main>
  </div>
</template>

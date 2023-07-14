<script setup lang="ts">
import { Main } from '../styled';
import { defineAsyncComponent } from 'vue';

const DragAndDropTable = defineAsyncComponent(() => import('../table/DragTable.vue'));
const BasicTable = defineAsyncComponent(() => import('./overview/BasicTable.vue'));

const TopSellingProduct = defineAsyncComponent(() => import('@/views/dashboard/demoOne/TopSellingProduct.vue'));

const BrowserState = defineAsyncComponent(() => import('@/views/dashboard/demoOne/BrowserState.vue'));

const ActiveUser = defineAsyncComponent(() => import('@/views/dashboard/demoThree/ActiveUser.vue'));

const TopProduct = defineAsyncComponent(() => import('@/views/dashboard/demoThree/TopProduct.vue'));

const MemberProgress = defineAsyncComponent(() => import('@/views/dashboard/demoFive/MemberProgress.vue'));
</script>

<template>
  <div>
    <sdPageHeader title="Tables" class="ninjadash-page-header-main"> </sdPageHeader>
    <Main>
      <a-row :gutter="15">
        <a-col :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default>
              <sdCards title="Basic Usage">
                <BasicTable />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <DragAndDropTable /> </template>
          </Suspense>
        </a-col>
        <a-col :lg="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <TopSellingProduct /> </template>
          </Suspense>
        </a-col>
        <a-col :lg="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <BrowserState /> </template>
          </Suspense>
        </a-col>
        <a-col :lg="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <ActiveUser /> </template>
          </Suspense>
        </a-col>
        <a-col :lg="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <TopProduct /> </template>
          </Suspense>
        </a-col>
        <a-col :lg="12" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
            <template #default> <MemberProgress /> </template>
          </Suspense>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

<script setup lang="ts">
import { Main } from '../styled';
import { defineAsyncComponent } from 'vue';

const OverviewDataList = defineAsyncComponent(() => import('./demoTwo/OverviewDataList.vue'));
const SaleRevenue = defineAsyncComponent(() => import('./demoTwo/SaleRevenue.vue'));
const SourceRevenueGenerated = defineAsyncComponent(() => import('./demoTwo/SourceRevenueGenerated.vue'));
const BestSeller = defineAsyncComponent(() => import('./demoTwo/BestSeller.vue'));
const NewProduct = defineAsyncComponent(() => import('./demoTwo/NewProduct.vue'));

const pageRoutes = [
  {
    path: '/',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'demo-two',
    breadcrumbName: 'Demo Two',
  },
];
</script>

<template>
  <div>
    <sdPageHeader title="Demo Two" class="ninjadash-page-header-main" :routes="pageRoutes"></sdPageHeader>
    <Main>
      <a-row :gutter="25">
        <a-col :xxl="24"><OverviewDataList /></a-col>
        <a-col :xxl="12" :xl="12" :xs="24">
          <Suspense>
            <template #default>
              <SaleRevenue />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="12" :xl="12" :xs="24">
          <Suspense>
            <template #default>
              <SourceRevenueGenerated />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="8" :xl="24" :xs="24">
          <Suspense>
            <template #default>
              <NewProduct />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="16" :xl="24" :xs="24">
          <Suspense>
            <template #default>
              <BestSeller />
            </template>
            <template #fallback>
              <sdCards headless>
                <a-skeleton active />
              </sdCards>
            </template>
          </Suspense>
        </a-col>
      </a-row>
    </Main>
  </div>
</template>

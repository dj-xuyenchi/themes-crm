<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue';
import { Main, TopToolBox } from '../../styled';
import { JobLandingStyle } from './Style';
import { useStore } from 'vuex';

const Filters = defineAsyncComponent(() => import('./overview/Filters.vue'));
const pageRoutes = [
  {
    path: 'index',
    breadcrumbName: 'Dashboard',
  },
  {
    path: 'job',
    breadcrumbName: 'Job Search',
  },
];
const { dispatch, state } = useStore();
const jobs = computed(() => {
  return state.jobSearch.jobs;
});
const handleSort = (value: any) => {
  dispatch('sorting', { sortBy: value, oldState: jobs.value });
};
function isInputElement(element: HTMLElement | null): element is HTMLInputElement {
  return element instanceof HTMLInputElement;
}
const handleSearch = () => {
  const titleElement = document.getElementById('title');
  const locationElement = document.getElementById('location');
  const title = isInputElement(titleElement) ? titleElement.value : '';
  const location = isInputElement(locationElement) ? locationElement.value : '';

  dispatch('filterWithTitleLocation', { title, location });
};
const innerWidth = window.innerWidth;
</script>

<template>
  <sdPageHeader title="Search Job" :routes="pageRoutes" class="ninjadash-page-header-main"></sdPageHeader>
  <Main>
    <JobLandingStyle>
      <div class="ninjadash-joblanding-top align-center-v">
        <a-input size="large" class="ninjadash-title-search" id="title" placeholder="Job title, skills, or company">
          <template #prefix>
            <unicon name="search"></unicon>
          </template>
        </a-input>
        <a-input id="location" size="large" class="ninjadash-location-search" placeholder="Location">
          <template #prefix>
            <unicon name="location-point"></unicon>
          </template>
        </a-input>
        <sdButton @click="handleSearch" type="primary"><unicon name="search"></unicon> Search</sdButton>
      </div>
      <a-row :gutter="25">
        <a-col :xxl="6" :lg="8" :md="10" :xs="24">
          <Suspense>
            <template #fallback>
              <sdCards headless>
                <a-skeleton :paragraph="{ rows: 22 }" active />
              </sdCards>
            </template>
            <template #default>
              <Filters />
            </template>
          </Suspense>
        </a-col>
        <a-col :xxl="18" :lg="16" :md="14" :xs="24">
          <TopToolBox>
            <div class="ninjadash-showcase-top d-flex justify-content-between align-items-center">
              <div class="ninjadash-showcase-top__text">
                <p class="search-result">Showing 1–8 of 86 results</p>
              </div>

              <div
                v-if="(innerWidth <= 991 && innerWidth >= 768) || innerWidth > 575"
                class="ninjadash-showcase-top__action"
              >
                <div class="ninjadash-showcase-top__action--filter">
                  <span class="toolbox-menu-title"> Sort By:</span>
                  <a-select @change="handleSort" :style="{ width: '150px' }" defaultValue="latest">
                    <a-select-option value="Latest">Latest</a-select-option>
                    <a-select-option value="Old">Old</a-select-option>
                  </a-select>
                </div>
                <div class="ninjadash-showcase-top__action--viewmode">
                  <router-link :to="`./grid`">
                    <unicon name="apps" width="16"></unicon>
                  </router-link>
                  <router-link :to="`./list`">
                    <unicon name="list-ul" width="16"></unicon>
                  </router-link>
                </div>
              </div>
            </div>
          </TopToolBox>

          <router-view></router-view>
          <!-- <Suspense
                  fallback={
                    <div class="spin d-flex align-center-v">
                      <Spin />
                    </div>
                  }
                >
                  <Routes>
                      <Route index element={<Grid />} />
                      <Route path={`grid`} element={<Grid />} />
                      <Route path={`list`} element={<List />} />
                  </Routes>
                </Suspense> -->
        </a-col>
      </a-row>
    </JobLandingStyle>
  </Main>
</template>

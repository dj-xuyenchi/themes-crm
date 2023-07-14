<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { Main } from '../../styled';
import { JobDetailsWrap, AdditionalInfoStyle } from './Style';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';

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

const { state, dispatch } = useStore();
const { params } = useRoute();
const router = useRouter();
const dataState = computed(() => state.jobSearch.job);
onMounted(() => {
  dispatch('singleJobPageReade', params.id);
});

const navigateToApply = () => {
  router.replace('/app/job/apply');
};
const onBack = (e: any) => {
  e.preventDefault();
  window.history.back();
};
</script>

<template>
  <JobDetailsWrap>
    <sdPageHeader
      class="ninjadash-page-header-main ninjadash-pageheader-with-back"
      :routes="pageRoutes"
      title="Job Details"
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
      <a-row v-if="dataState.length" :gutter="15" class="mt-sm-10">
        <a-col :xl="18" :lg="16" :xs="24">
          <sdCards headless>
            <div class="ninjadash-media align-center-v">
              <div class="ninjadash-media__figure">
                <img :src="`/src/${dataState[0].icon}`" alt="" />
              </div>
              <div class="ninjadash-media__body">
                <sdHeading as="h4">
                  {{ dataState[0].title }}
                </sdHeading>
                <p>{{ dataState[0].location }}</p>
              </div>
            </div>

            <article>
              <h2>Job Description</h2>
              <p>
                There are have a many variations of passages of Lorem Ipsum available, but the randomised words which
                don't look even slightly believable. If you are going to sdsss embarrassing hidden in the middle of
                text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary,
                making which don't first true generator on the Internet.
              </p>
            </article>
            <article>
              <h2>Requirements</h2>
              <ul>
                <li>At least 3+ years of working experience in PHP/WordPress.</li>
                <li>
                  Solid PHP knowledge and a good understanding of advanced PSP concepts eg. OOP, Namespace, Taits ,etc
                </li>
                <li>HTMl/CSS</li>
                <li>Intermediate to Advanced JavaScript knowledge.</li>
                <li>
                  Solid understanding of WordPress core features eg. action/hooks,restAPI,post type,taxonomies,post
                  meta, database stuctures,etc.
                </li>
                <li>Good understanding of PHP/WordPress coding standard</li>
                <li>Must be able to write quality code following the coding standards and best practice.</li>
                <li>Ability to work without supervision.</li>
                <li>must be polite and should have good interpersonal communication skills.</li>
                <li>Fast learner, self motivated , eager to learn new technologies.</li>
              </ul>
            </article>
            <article>
              <h2>Preferable Skills</h2>
              <ul>
                <li>Fluency in English.</li>
                <li>Experience in other PHP framework.</li>
                <li>HTMl/CSS</li>
                <li>Knowledge in Software design patterns.</li>
                <li>Experience in Vue / React.</li>
                <li>VPS/Server knowledge.</li>
              </ul>
            </article>
          </sdCards>
        </a-col>
        <a-col :xl="6" :lg="8" :xs="24">
          <sdCards headless>
            <AdditionalInfoStyle>
              <h2 class="ninjadash-additional-info__title">Information</h2>
              <ul class="ninjadash-additional-info__list">
                <li>
                  <span class="ninjadash-list-label">Job Type:</span>
                  <span class="ninjadash-list-text">{{ dataState[0].jobType }}</span>
                </li>
                <li>
                  <span class="ninjadash-list-label">Industry:</span>
                  <span class="ninjadash-list-text">Development</span>
                </li>
                <li>
                  <span class="ninjadash-list-label">Salary:</span>
                  <span class="ninjadash-list-text">{{ dataState[0].salary }}</span>
                </li>
                <li>
                  <span class="ninjadash-list-label">Location:</span>
                  <span class="ninjadash-list-text">{{ dataState[0].location }}</span>
                </li>
                <li>
                  <span class="ninjadash-list-label">Deadline:</span>
                  <span class="ninjadash-list-text">{{ dataState[0].deadline }}</span>
                </li>
              </ul>
              <sdButton @click="navigateToApply" size="default" type="primary" block>Apply Now </sdButton>
            </AdditionalInfoStyle>
          </sdCards>
        </a-col>
      </a-row>

      <sdCards v-else headless>
        <a-spin />
      </sdCards>
    </Main>
  </JobDetailsWrap>
</template>

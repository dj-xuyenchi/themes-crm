<script setup lang="ts">
import { JobsCard } from '../Style';
import { useRouter } from 'vue-router';

const props = defineProps({
  job: Object,
});
const router = useRouter();
const navigatePage = (url: string) => {
  router.replace(url);
};
</script>

<template>
  <JobsCard>
    <div class="ninjadash-job-card align-center-v">
      <div class="ninjadash-job-card__content">
        <div class="ninjadash-media align-center-v">
          <div class="ninjadash-media__figure">
            <img :src="`/src/${job?.icon}`" alt="" />
          </div>
          <div class="ninjadash-media__body">
            <sdHeading as="h4">
              <router-link :to="`/app/jobDetails/${job?.id}`">{{ job?.title }}</router-link>
            </sdHeading>
            <p>{{ job?.location }}</p>
          </div>
        </div>
        <ul class="ninjadash-jobinfo-meta">
          <li>
            <span class="ninjadash-jobinfo-meta__label">Deadline:</span>
            <span class="ninjadash-jobinfo-meta__info">{{ job?.deadline }}</span>
          </li>
          <li>
            <span class="ninjadash-jobinfo-meta__label">Job Type:</span>
            <span class="ninjadash-jobinfo-meta__info">{{ job?.jobType }}</span>
          </li>
          <li>
            <span class="ninjadash-jobinfo-meta__label">Salary:</span>
            <span class="ninjadash-jobinfo-meta__info">{{ job?.salary }}</span>
          </li>
        </ul>
      </div>
      <div class="ninjadash-job-card__action">
        <sdButton size="sm" type="primary" shape="round" @click="navigatePage(`/app/jobDetails/${job?.id}`)"
          >View Details</sdButton
        >
      </div>
    </div>
  </JobsCard>
</template>

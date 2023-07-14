<script setup lang="ts">
import { toRefs } from 'vue';
import { textRefactor } from '@/components/utilities/utilities';
import { ProjectCard } from '../style';

const props = defineProps({
  value: Object,
});
const { value }: any = toRefs(props);
const { id, title, status, content, percentage }: any = value.value;
</script>

<template>
  <ProjectCard>
    <sdCards headless>
      <div class="project-top">
        <div class="project-title">
          <h1>
            <router-link :to="`/app/project/projectDetails/${id}`">{{ title }}</router-link>
            <a-tag :class="status">{{ status }}</a-tag>
          </h1>
          <sdDropdown>
            <template #overly>
              <a to="#">Total Income</a>
              <a to="#">Total Expense</a>
              <a to="#">Total Tax</a>
              <a to="#">Net Profit</a>
            </template>
            <a to="#">
              <unicon name="ellipsis-h" width="18"></unicon>
            </a>
          </sdDropdown>
        </div>
        <p class="project-desc">{{ textRefactor(content, 13) }}</p>
        <div class="project-timing">
          <div>
            <span>Start Date</span>
            <strong>26 Dec 2019</strong>
          </div>
          <div>
            <span>Deadline</span>
            <strong>18 Mar 2021</strong>
          </div>
        </div>
        <div class="project-progress">
          <a-progress
            :percent="status === 'complete' ? 100 : percentage"
            :stroke-width="5"
            :status="status === 'complete' ? 'success' : 'active'"
            class="progress-primary"
          />
          <p>12/15 Task Completed</p>
        </div>
      </div>
      <div class="project-bottom">
        <div class="project-assignees">
          <p>Assigned To</p>
          <ul>
            <li>
              <img :src="`/src/assets/img/users/1.png`" alt="" />
            </li>
            <li>
              <img :src="`/src/assets/img/users/2.png`" alt="" />
            </li>
            <li>
              <img :src="`/src/assets/img/users/3.png`" alt="" />
            </li>
            <li>
              <img :src="`/src/assets/img/users/4.png`" alt="" />
            </li>
            <li>
              <img :src="`/src/assets/img/users/5.png`" alt="" />
            </li>
            <li>
              <img :src="`/src/assets/img/users/6.png`" alt="" />
            </li>
            <li>
              <img :src="`/src/assets/img/users/7.png`" alt="" />
            </li>
          </ul>
        </div>
      </div>
    </sdCards>
  </ProjectCard>
</template>

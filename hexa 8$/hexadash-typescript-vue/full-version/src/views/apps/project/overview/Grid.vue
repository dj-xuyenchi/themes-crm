<script setup lang="ts">
import { computed, defineAsyncComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { ProjectPagination } from '../style';
const GridCard = defineAsyncComponent(() => import('./GridCard.vue'));

const { state } = useStore();
const projects = computed(() => state.project.data);
let current = ref(0);
const pageSize = ref(0);

const onShowSizeChange = (c: any, p: any) => {
  current.value = c;
  pageSize.value = p;
};

const onHandleChange = (c: any, p: any) => {
  current.value = c;
  pageSize.value = p;
};
</script>

<template>
  <a-row :gutter="25" v-if="projects.length">
    <a-col v-for="value in projects" :key="value.id" :xl="8" :md="12" :xs="24">
      <Suspense>
        <template #default>
          <GridCard :value="value" />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
          </sdCards>
        </template>
      </Suspense>
    </a-col>
    <a-col :xs="24" class="pb-30">
      <ProjectPagination>
        <a-pagination
          @change="onHandleChange"
          showSizeChanger
          @showSizeChange="onShowSizeChange"
          :pageSize="10"
          :defaultCurrent="1"
          :total="40"
        />
      </ProjectPagination>
    </a-col>
  </a-row>
  <a-row :gutter="25" v-else>
    <a-col :md="24">
      <sdCards headless>
        <sdHeading>Data Not Found!</sdHeading>
      </sdCards>
    </a-col>
  </a-row>
</template>

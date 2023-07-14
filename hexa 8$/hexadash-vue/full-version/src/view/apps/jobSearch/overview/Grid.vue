<template>
  <a-row :gutter="30">
    <a-col v-if="isLoader" :xs="24">
      <div class="spin">
        <a-spin />
      </div>
    </a-col>
    <template v-else-if="jobs.length">
      <a-col
        v-for="(job, key) in jobs"
        :xxl="12"
        :lg="12"
        :xs="24"
        :key="key + 1"
      >
        <JobCardView :job="job" />
      </a-col>
    </template>

    <a-col v-else :md="24">
      <NotFoundWrapper>
        <sdHeading as="h1">Data Not Found</sdHeading>
      </NotFoundWrapper>
    </a-col>

    <a-col :xs="24" class="pb-30">
      <PaginationWrapper :style="{ marginTop: 10 }">
        <a-pagination
          v-if="jobs.length"
          @change="onHandleChange"
          showSizeChanger
          :onShowSizeChange="onShowSizeChange"
          :page-size="10"
          :default-current="1"
          :total="40"
        />
      </PaginationWrapper>
    </a-col>
  </a-row>
</template>
<script>
import { computed, defineComponent, onMounted, ref } from "vue";
import JobCardView from "./JobCardView";
import { useStore } from "vuex";
import { PaginationWrapper, NotFoundWrapper } from "../Style";

export default defineComponent({
  components: {
    PaginationWrapper,
    NotFoundWrapper,
    JobCardView,
  },
  setup() {
    const { state, dispatch } = useStore();
    const jobs = computed(() => {
      return state.jobSearch.jobs;
    });

    const isLoader = computed(() => {
      return state.jobSearch.loading;
    });

    const current = ref(0);
    const pageSize = ref(0);

    onMounted(() => {
      dispatch("jobsReadData");
    });

    const onShowSizeChange = (cur, size) => {
      current.value = cur;
      pageSize.value = size;
    };

    const onHandleChange = (cur, size) => {
      current.value = cur;
      pageSize.value = size;
    };

    return {
      jobs,
      isLoader,
      onShowSizeChange,
      onHandleChange,
      current,
      pageSize,
    };
  },
});
</script>

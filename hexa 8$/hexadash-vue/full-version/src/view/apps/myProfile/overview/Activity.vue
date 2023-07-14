<template>
  <a-row :gutter="25">
    <a-col :md="16" :xs="24">
      <Suspense>
        <template #default>
          <ActivityContent />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active :paragraph="{ rows: 10 }" />
          </sdCards>
        </template>
      </Suspense>
    </a-col>
    <a-col :md="8">
      <Suspense>
        <template #default>
          <RightAside />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active :paragraph="{ rows: 10 }" />
          </sdCards>
        </template>
      </Suspense>
    </a-col>
  </a-row>
</template>
<script>
import { defineAsyncComponent } from 'vue';
const RightAside = defineAsyncComponent(() => import('./RightAside'));
const ActivityContent = defineAsyncComponent(() => import('./ActivityContent'));

const Activity = {
  name: 'Activity',
  components: { RightAside, ActivityContent },
};

export default Activity;
</script>

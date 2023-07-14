<template>
  <a-row :gutter="25">
    <a-col :md="16">
      <Suspense>
        <template #default>
          <CreatePost />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
          </sdCards>
        </template>
      </Suspense>
      <Suspense v-for="(post, key) in posts" :key="key + 1">
        <template #default>
          <AllPosts v-bind="post" />
        </template>
        <template #fallback>
          <sdCards headless>
            <a-skeleton active />
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
const RightAside = defineAsyncComponent(() => import('../overview/RightAside'));
const CreatePost = defineAsyncComponent(() => import('./timeline/CreatePost'));
const AllPosts = defineAsyncComponent(() => import('./timeline/Posts'));

import { computed } from 'vue';
import { useStore } from 'vuex';

const Timeline = {
  name: 'Timeline',
  components: { RightAside, CreatePost, AllPosts },
  setup() {
    const { state } = useStore();
    const posts = computed(() => state.profile.posts.sort((a, b) => b.time - a.time));
    return {
      posts,
    };
  },
};

export default Timeline;
</script>

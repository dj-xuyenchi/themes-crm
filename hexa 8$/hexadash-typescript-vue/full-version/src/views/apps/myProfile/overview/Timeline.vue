<script setup lang="ts">
import { defineAsyncComponent } from 'vue';
import { computed } from 'vue';
import { useStore } from 'vuex';
const RightAside = defineAsyncComponent(() => import('../overview/RightAside.vue'));
const CreatePost = defineAsyncComponent(() => import('./timeline/CreatePost.vue'));
const AllPosts = defineAsyncComponent(() => import('./timeline/Posts.vue'));
const { state } = useStore();
function sortPosts(posts: any[]) {
  return posts.sort((a: any, b: any) => b.time - a.time);
}
const posts = computed(() => sortPosts(state.profile.posts));
</script>

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

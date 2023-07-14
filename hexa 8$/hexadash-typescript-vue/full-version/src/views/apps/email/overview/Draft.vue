<script setup lang="ts">
import { computed } from 'vue';
import { useStore } from 'vuex';
import Content from './Content.vue';

const { state } = useStore();
const email = computed(() => state.email.allMessage);
const searchData = computed(() => state.headerSearchData.data);
const isLoading = computed(() => state.email.sLoading);
</script>

<template>
  <p v-if="isLoading">Loading</p>
  <Content
    v-else
    :email="
      email.filter((value: any) => {
        return value.type === 'draft';
      })
    "
    :searchData="searchData"
  />
</template>

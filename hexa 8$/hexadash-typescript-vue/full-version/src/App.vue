<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ThemeProvider } from 'vue3-styled-components';
import { themeColor } from './config/theme/themeVariables';
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import 'v-calendar/dist/style.css';

const { state } = useStore();
const rtl = computed(() => state.themeLayout.rtlData);
const isLoading = computed(() => state.themeLayout.loading);
const darkMode = computed(() => state.themeLayout.data);
const topMenu = computed(() => state.themeLayout.topMenu);
const mainContent = computed(() => state.themeLayout.main);

onMounted(() => {
  window.addEventListener('load', () => {
    const domHtml = document.getElementsByTagName('html')[0];
    rtl.value ? domHtml.setAttribute('dir', 'rtl') : domHtml.setAttribute('dir', 'ltr');
    darkMode.value ? document.body.classList.add('dark-mode') : '';
  });
});
</script>
<template>
  <div v-if="isLoading" class="spin">
    <a-spin />
  </div>
  <ThemeProvider
    v-else
    :theme="{
      rtl,
      topMenu,
      darkMode,
      mainContent,
      ...themeColor,
    }"
  >
    <Suspense>
      <template #default>
        <RouterView />
      </template>
      <template #fallback>
        <div class="spin">
          <a-spin />
        </div>
      </template>
    </Suspense>
  </ThemeProvider>
</template>

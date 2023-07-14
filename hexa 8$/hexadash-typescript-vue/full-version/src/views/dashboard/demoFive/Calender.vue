<script setup lang="ts">
import { computed, ref } from 'vue';
import { CalendarWrapper } from '@/views/apps/calendar/Style';
import { useStore } from 'vuex';

const date = ref(new Date());
const { state } = useStore();
const darkMode = computed(() => state.themeLayout.data);
const onChange = (date: any) => (date.value = date);
</script>
<template>
  <CalendarWrapper>
    <div class="ninjadash-calendar-widget">
      <v-calendar :is-dark="darkMode" is-expanded v-model="date" trim-weeks :locale="{ masks: { weekdays: 'WWW' } }" />
    </div>
  </CalendarWrapper>
</template>

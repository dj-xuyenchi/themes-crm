<template>
  <CalendarWrapper>
    <div class="ninjadash-calendar-widget">
      <v-calendar
        :is-dark="darkMode"
        is-expanded
        v-model="date"
        trim-weeks
        :locale="{ masks: { weekdays: 'WWW' } }"
      />
    </div>
  </CalendarWrapper>
</template>
<script>
import { computed, defineComponent, ref } from "vue";
import { CalendarWrapper } from "@/view/apps/calendar/Style";
import { useStore } from "vuex";

export default defineComponent({
  components: { CalendarWrapper },
  setup() {
    const date = ref(new Date());
    const { state } = useStore();

    const darkMode = computed(() => state.themeLayout.data);

    const onChange = (date) => (date.value = date);

    return {
      onChange,
      date,
      darkMode,
    };
  },
});
</script>

<script setup lang="ts">
import { Aside, CalendarWrapper } from './Style';
import { Main } from '../../styled';
import { useStore } from 'vuex';
import { computed, reactive, ref } from 'vue';
import './overview/style.css';

const { state, dispatch } = useStore();
const isVisible = computed(() => state.calendar.eventVisible);
const events = computed(() => state.calendar.events);
const date = ref(new Date());
const visible = ref(false);
const onChange = (dt: any) => (date.value = dt);
const onHandleVisible = () => {
  dispatch('eventVisible', !isVisible.value);
};
const darkMode = computed(() => state.themeLayout.data);
const calendarData = reactive({});
const calendarConfigs = reactive({
  sundayStart: false,
  dateFormat: 'dd/mm/yyyy',
  isDatePicker: false,
  isDateRange: false,
});
</script>

<template>
  <sdPageHeader title="Calendar" class="ninjadash-page-header-main"> </sdPageHeader>

  <Main>
    <CalendarWrapper>
      <a-row :gutter="25">
        <a-col :xxl="6" :xl="9" :xs="24">
          <Aside>
            <sdButton @click="onHandleVisible" class="btn-create" size="lg" type="primary">
              <unicon name="plus" width="14"></unicon>
              <span>Create New Event</span>
            </sdButton>
            <div class="calendar-display">
              <v-calendar
                :is-dark="darkMode"
                is-expanded
                v-model="date"
                trim-weeks
                :locale="{ masks: { weekdays: 'WWW' } }"
              />
            </div>
            <br />
            <sdCards headless>
              <h3 class="listHeader">
                My Calendars
                <a @click="onHandleVisible" class="add-label" to="#">
                  <unicon name="plus" width="14"></unicon>
                </a>
              </h3>
              <ul class="event-list">
                <li v-for="{ id, title, label } in events" :key="id">
                  <a to="#">
                    <span :class="`bullet ${label}`" />
                    {{ title }}
                  </a>
                </li>
              </ul>
            </sdCards>
          </Aside>
        </a-col>
        <a-col :xxl="18" :xl="15" :xs="24">
          <router-view name="child"></router-view>
        </a-col>
      </a-row>
    </CalendarWrapper>
  </Main>
</template>

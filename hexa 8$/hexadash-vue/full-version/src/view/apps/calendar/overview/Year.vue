<template>
  <sdCards headless>
    <sdModal
      class="addEvent-modal"
      :footer="null"
      type="primary"
      title="Create Event"
      :visible="isVisible"
      :onCancel="handleCancel"
    >
      <AddNewEvent :onHandleAddEvent="addNew" :defaultValue="defaultValue" />
    </sdModal>
    <div class="calendar-header">
      <div class="calendar-header__left">
        <sdButton class="btn-today" type="light" outlined>
          <router-link to="./day">Today</router-link>
        </sdButton>
        <div class="calender-head__navigation">
          <sdButton
            onClick="{onDecrement}"
            class="btn-navigate"
            type="light"
            outlined
          >
            <unicon name="angle-left"></unicon>
          </sdButton>
          <span class="date-label">
            <a-select
              class="year-select"
              @change="(value) => setState({ ...state, currentYear: value })"
              v-model:value="currentYear"
              :style="{ width: '90px' }"
            >
              <a-select-option v-for="i in option" :key="i" :value="i">{{
                i
              }}</a-select-option>
            </a-select>
          </span>
          <sdButton
            class="btn-navigate"
            @click="onIncrement"
            type="light"
            outlined
          >
            <unicon name="angle-right"></unicon>
          </sdButton>
        </div>
      </div>
      <div class="calendar-header__right">
        <ul>
          <li>
            <router-link to="./day">Day</router-link>
          </li>
          <li>
            <router-link to="./week">Week</router-link>
          </li>
          <li>
            <router-link to="./month">Month</router-link>
          </li>
          <li>
            <router-link to="./year">Year</router-link>
          </li>
        </ul>
        <router-link class="schedule-list" to="./schedule">
          <unicon name="list-ul"></unicon>
          Schedule
        </router-link>
      </div>
    </div>
    <BlockViewCalendarWrapper>
      <a-calendar
        :headerRender="
          () => {
            return '';
          }
        "
        mode="year"
        class="table-responsive"
      />
    </BlockViewCalendarWrapper>
  </sdCards>
</template>
<script>
import dayjs from "dayjs";
import { computed, onMounted, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import AddNewEvent from "./AddNewEvent";
import { BlockViewCalendarWrapper } from "../Style";

const YearCalendar = defineComponent({
  name: "YearCalendar",
  components: { BlockViewCalendarWrapper, AddNewEvent },
  setup() {
    const { state, dispatch } = useStore();

    const events = computed(() => state.calendar.events);
    const isVisible = computed(() => state.calendar.eventVisible);

    const currentYear = ref(new Date().getFullYear());
    const maxYear = ref(2025);
    const minYear = ref(2018);
    const defaultValue = ref(dayjs().format("YYYY-MM-DD"));

    onMounted(() => {
      const calenderDom = document.querySelectorAll(
        ".ant-fullcalendar-content"
      );
      calenderDom.forEach((element) => {
        element.addEventListener("click", () => {
          dispatch("eventVisible", true);
        });
      });
    });

    const onIncrement = () => {
      if (currentYear.value < maxYear.value)
        currentYear.value = currentYear.value + 1;
    };
    const onDecrement = () => {
      if (currentYear.value < maxYear.value)
        currentYear.value = currentYear.value - 1;
    };

    const option = ref([]);
    onMounted(() => {
      for (let i = minYear.value; i <= maxYear.value; i += 1) {
        option.value.push(i);
      }
    });

    const handleCancel = () => {
      dispatch("eventVisible", false);
    };

    const addNew = (event) => {
      console.log(event);
      const arrayData = [];
      events.value.map((data) => {
        return arrayData.push(data.id);
      });
      const max = Math.max(...arrayData);
      dispatch("addNewEvents", [...events.value, { ...event, id: max + 1 }]);
      dispatch("eventVisible", false);
    };

    return {
      events,
      isVisible,
      currentYear,
      maxYear,
      minYear,
      defaultValue,
      onIncrement,
      onDecrement,
      option,
      handleCancel,
      addNew,
      dayjs,
    };
  },
});

export default YearCalendar;
</script>

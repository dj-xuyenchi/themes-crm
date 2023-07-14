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
        <sdButton class="btn-today" type="light" size="sm" outlined>
          <router-link to="./day">Today</router-link>
        </sdButton>
        <div class="calender-head__navigation">
          <sdButton
            @click="decrementYear"
            class="btn-navigate"
            type="light"
            outlined
            ><unicon name="angle-left"></unicon
          ></sdButton>
          <span class="date-label">
            <sdDropdown :action="['click']">
              <template #overlay>
                <sdCards>
                  <a-row>
                    <a-col v-for="item in months" :sm="8" :key="item.id">
                      <span
                        @click="() => setMonth(item.id)"
                        style="
                          display: block;
                          text-align: center;
                          cursor: pointer;
                        "
                        >{{ item.month }}</span
                      >
                    </a-col>
                  </a-row>
                </sdCards>
              </template>

              <template v-for="item in months" :key="item.id">
                <a href="#" v-if="item.id == month"
                  >{{ item.month }} {{ year }}</a
                >
              </template>
            </sdDropdown>
          </span>
          <sdButton
            @click="incrementYear"
            class="btn-navigate"
            type="light"
            outlined
            ><unicon name="angle-right"></unicon
          ></sdButton>
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
    <div class="table-responsive">
      <table class="table-event" width="100%">
        <thead>
          <tr>
            <th>&nbsp;</th>
            <th>
              <p>{{ dayjs(defaultValue).format("dddd") }}</p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(time, key) in eventTimes" :key="key + 1">
            <td :style="{ width: '60px' }">{{ time }}</td>
            <td
              :class="`ant-picker-calendar-date-content ${
                dayjs().format('h A') === time ? 'current-data' : null
              }`"
            >
              <span
                v-if="dayjs().format('h A') === time"
                class="currentTime secondary"
              />

              <template v-for="event in events" :key="event.id">
                <sdDropdown
                  v-if="
                    dayjs(defaultValue).format('MM/DD/YYYY') ===
                      event.date[0] &&
                    time === dayjs(event.time[0], 'h:mm a').format('h A')
                  "
                  class="event-dropdown"
                  style="padding: 0px"
                  placement="bottomLeft"
                  :action="['click']"
                >
                  <template #overlay>
                    <ProjectUpdate
                      :onEventDelete="onEventDelete"
                      v-bind="event"
                    />
                  </template>
                  <a to="#" :class="`${event.label} day-event-item`">
                    <span class="event-title">{{ event.title }}</span>
                    <span>{{ `${event.time[0]} - ${event.time[1]}` }}</span>
                  </a>
                </sdDropdown>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </sdCards>
</template>
<script>
import dayjs from "dayjs";
import { computed, onMounted, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import AddNewEvent from "./AddNewEvent";
import ProjectUpdate from "./ProjectUpdate";
import "./style.css";

const eventTimes = [
  "12 AM",
  "1 AM",
  "2 AM",
  "3 AM",
  "4 AM",
  "5 AM",
  "6 AM",
  "7 AM",
  "8 AM",
  "9 AM",
  "10 AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
  "8 PM",
  "9 PM",
  "10 PM",
  "11 PM",
];

const DayCalendar = defineComponent({
  name: "DayCalendar",
  components: { AddNewEvent, ProjectUpdate },
  setup() {
    const { state, dispatch } = useStore();
    const events = computed(() => state.calendar.events);
    const isVisible = computed(() => state.calendar.eventVisible);
    const date = ref(new Date());
    const container = ref(null);
    const defaultValue = ref(dayjs().format("YYYY-MM-DD"));
    const year = ref(new Date().getFullYear());
    const month = ref(parseInt(dayjs().format("M")));
    const currentLabel = ref(
      dayjs(`${month.value}-12-${year.value}`).format("MMMM YYYY")
    );

    const setMonth = (m) => {
      month.value = m;
      currentLabel.value = dayjs(`${month.value}-12-${year.value}`).format(
        "MMMM YYYY"
      );
    };

    const incrementYear = () => {
      month.value = month.value + 1;
      if (month.value > 12) {
        month.value = 1;
        year.value = year.value + 1;
      }
      currentLabel.value = dayjs(`${month.value}-12-${year.value}`).format(
        "MMMM YYYY"
      );
    };

    const decrementYear = () => {
      month.value = month.value - 1;
      if (month.value < 1) {
        month.value = 12;
        year.value = year.value - 1;
      }
      currentLabel.value = dayjs(`${month.value}-12-${year.value}`).format(
        "MMMM YYYY"
      );
    };

    onMounted(() => {
      const button = document.querySelector(
        ".calendar-header__left .react-calendar__navigation .react-calendar__navigation__label"
      );
      const containers = document.querySelector(
        ".calendar-header__left .react-calendar__viewContainer"
      );
      const calenderDom = document.querySelectorAll(
        ".ant-picker-calendar-date-content"
      );
      calenderDom.forEach((element) => {
        element.addEventListener("click", (e) => {
          if (e.target.classList[0] === "ant-picker-calendar-date-content") {
            container.value = containers;
            dispatch("eventVisible", true);
          }
        });
      });
      button &&
        button.addEventListener("click", () =>
          containers.classList.add("show")
        );
      container.value = containers;
    });
    const onEventDelete = (id) => {
      const data = events.value.filter((item) => item.id !== id);
      dispatch("calendarDeleteData", data);
    };

    const handleCancel = () => {
      dispatch("eventVisible", false);
    };

    const addNew = (event) => {
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
      eventTimes,
      isVisible,
      date,
      container,
      currentLabel,
      defaultValue,
      onEventDelete,
      handleCancel,
      addNew,
      incrementYear,
      decrementYear,
      year,
      month,
      months: [
        { id: 1, month: "January" },
        { id: 2, month: "February" },
        { id: 3, month: "March" },
        { id: 4, month: "April" },
        { id: 5, month: "May" },
        { id: 6, month: "Jun" },
        { id: 7, month: "July" },
        { id: 8, month: "August" },
        { id: 9, month: "September" },
        { id: 10, month: "October" },
        { id: 11, month: "November" },
        { id: 12, month: "December" },
      ],
      setMonth,
      dayjs,
    };
  },
});

export default DayCalendar;
</script>

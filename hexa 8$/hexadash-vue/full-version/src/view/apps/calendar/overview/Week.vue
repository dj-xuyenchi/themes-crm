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
        <sdButton class="btn-today" size="sm" type="light" outlined>
          <router-link to="./day">Today</router-link>
        </sdButton>
        <div class="calender-head__navigation">
          <sdButton
            @click="onDecrement"
            class="btn-navigate"
            type="light"
            outlined
          >
            <unicon name="angle-left"></unicon>
          </sdButton>
          <span class="date-label">
            {{
              `${dayjs(
                dayjs().day("Sunday").year(year).week(currentWeek).toDate()
              ).format("MMM DD")}`
            }}
            -
            <template
              v-if="
                parseInt(
                  dayjs(
                    dayjs().day('Sunday').year(year).week(currentWeek).toDate()
                  ).format('DD'),
                  10
                ) +
                  6 <=
                dayjs(
                  dayjs().day('Sunday').year(year).week(currentWeek).toDate()
                ).daysInMonth()
              "
              >{{
                dayjs(
                  dayjs().day("Sunday").year(year).week(currentWeek).toDate()
                ).format("MMM")
              }}</template
            ><template v-else>{{
              dayjs(
                dayjs()
                  .day("Sunday")
                  .year(year)
                  .week(currentWeek + 1)
                  .toDate()
              ).format("MMM")
            }}</template
            ><template
              v-if="
                parseInt(
                  dayjs(
                    dayjs().day('Sunday').year(year).week(currentWeek).toDate()
                  ).format('DD'),
                  10
                ) +
                  6 <=
                dayjs(
                  dayjs().day('Sunday').year(year).week(currentWeek).toDate()
                ).daysInMonth()
              "
              >{{
                parseInt(
                  dayjs(
                    dayjs().day("Sunday").year(year).week(currentWeek).toDate()
                  ).format("DD"),
                  10
                ) + 6
              }}</template
            >
            <template v-else>{{
              parseInt(
                dayjs(
                  dayjs().day("Sunday").year(year).week(currentWeek).toDate()
                ).format("DD"),
                10
              ) +
              6 -
              parseInt(
                dayjs(
                  dayjs().day("Sunday").year(year).week(currentWeek).toDate()
                ).daysInMonth(),
                10
              )
            }}</template
            >, {{ year }}
          </span>
          <sdButton
            @click="onIncrement"
            class="btn-navigate"
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
    <table class="table-event event-week table-responsive" width="100%">
      <thead>
        <tr>
          <th>&nbsp;</th>
          <th v-for="day in daysOfWeek()" :key="day">
            <p class="week-dayName">{{ dayjs(day).format("dddd") }}</p>
            <p
              :class="
                dayjs().format('MM/DD/YYYY') === day
                  ? 'week-date primary'
                  : 'week-date deactivate'
              "
            >
              {{ dayjs(day).format("DD MMM") }}
            </p>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="time in eventTimes" :key="time">
          <td>{{ time }}</td>
          <td
            v-for="day in daysOfWeek()"
            :key="day"
            :class="`ant-picker-calendar-date-content ${
              dayjs().format('h A') === time &&
              dayjs().format('MM/DD/YYYY') === day
                ? 'current-data'
                : null
            }`"
            :title="day"
          >
            <span
              v-if="
                dayjs().format('h A') === time &&
                dayjs().format('MM/DD/YYYY') === day
              "
              class="currentTime secondary"
            />

            <template v-for="event in events" :key="event.id">
              <sdDropdown
                v-if="
                  day === event.date[0] &&
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
  </sdCards>
</template>
<script>
import dayjs from "dayjs";
import { computed, onMounted, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import AddNewEvent from "./AddNewEvent";
import ProjectUpdate from "./ProjectUpdate";
import "./style.css";

const WeekCalendar = defineComponent({
  name: "WeekCalendar",
  components: { AddNewEvent, ProjectUpdate },
  setup() {
    const { state, dispatch } = useStore();
    const events = computed(() => state.calendar.events);
    const isVisible = computed(() => state.calendar.eventVisible);

    const currentWeek = ref(dayjs().week());
    const maxWeek = ref(dayjs("04-05-2021", "MM-DD-YYYY").isoWeek());
    const minWeek = ref(1);
    const year = ref(dayjs().format("YYYY"));
    const defaultValue = ref(dayjs().format("YYYY-MM-DD"));

    onMounted(() => {
      const calenderDom = document.querySelectorAll(
        ".ant-picker-calendar-date-content"
      );
      calenderDom.forEach((element) => {
        element.addEventListener("click", (e) => {
          if (e.target.classList[0] === "ant-picker-calendar-date-content") {
            defaultValue.value = dayjs(
              e.currentTarget.getAttribute("title")
            ).format("YYYY-MM-DD");
            dispatch("eventVisible", true);
          }
        });
      });
    });

    const onIncrement = () => {
      if (currentWeek.value < maxWeek.value) {
        currentWeek.value = currentWeek.value + 1;
      } else {
        year.value = year.value + 1;
        currentWeek.value = 1;
      }
    };

    const onDecrement = () => {
      if (currentWeek.value > minWeek.value) {
        currentWeek.value = currentWeek.value - 1;
      } else {
        year.value = year.value - 1;
        currentWeek.value = maxWeek.value;
      }
    };

    const option = ref([]);
    onMounted(() => {
      for (let i = minWeek.value; i <= maxWeek.value; i += 1) {
        option.value.push(i);
      }
    });

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

    const maximumDate = () => {
      return parseInt(
        dayjs(
          dayjs()
            .day("Sunday")
            .year(year.value)
            .week(currentWeek.value)
            .toDate()
        ).format("DD"),
        10
      ) +
        6 <=
        dayjs(
          dayjs()
            .day("Sunday")
            .year(year.value)
            .week(currentWeek.value)
            .toDate()
        ).daysInMonth()
        ? parseInt(
            dayjs(
              dayjs()
                .day("Sunday")
                .year(year.value)
                .week(currentWeek.value)
                .toDate()
            ).format("DD"),
            10
          ) + 6
        : parseInt(
            dayjs(
              dayjs()
                .day("Sunday")
                .year(year.value)
                .week(currentWeek.value)
                .toDate()
            ).format("DD"),
            10
          ) +
            6 -
            parseInt(
              dayjs(
                dayjs()
                  .day("Sunday")
                  .year(year.value)
                  .week(currentWeek.value)
                  .toDate()
              ).daysInMonth(),
              10
            );
    };

    const daysOfMonth = dayjs(
      dayjs().day("Sunday").year(year.value).week(currentWeek.value).toDate()
    ).daysInMonth();

    const minimumDate = () => {
      return parseInt(
        dayjs(
          dayjs()
            .day("Sunday")
            .year(year.value)
            .week(currentWeek.value)
            .toDate()
        ).format("DD"),
        10
      );
    };

    const daysOfWeek = () => {
      const days = [];
      if (minimumDate() + 6 <= daysOfMonth) {
        for (let i = minimumDate(); i <= maximumDate(); i += 1) {
          days.push(
            `${dayjs(
              dayjs()
                .day("Sunday")
                .year(year.value)
                .week(currentWeek.value)
                .toDate()
            ).format("MM")}/${i}/${year.value}`
          );
        }
      } else {
        for (let i = minimumDate(); i <= daysOfMonth; i += 1) {
          days.push(
            `${dayjs(
              dayjs()
                .day("Sunday")
                .year(year.value)
                .week(currentWeek.value)
                .toDate()
            ).format("MM")}/${i}/${year.value}`
          );
        }
        for (let j = 1; j <= minimumDate() + 6 - daysOfMonth; j += 1) {
          days.push(
            `${
              parseInt(
                dayjs(
                  dayjs()
                    .day("Sunday")
                    .year(year.value)
                    .week(currentWeek.value)
                    .toDate()
                ).format("MM"),
                10
              ) < 12
                ? parseInt(
                    dayjs(
                      dayjs()
                        .day("Sunday")
                        .year(year.value)
                        .week(currentWeek.value)
                        .toDate()
                    ).format("MM"),
                    10
                  ) + 1
                : 1
            }/${j}/${year.value}`
          );
        }
      }
      return days;
    };

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

    const onEventDelete = (id) => {
      const data = events.value.filter((item) => item.id !== id);
      dispatch("calendarDeleteData", data);
    };

    return {
      events,
      onEventDelete,
      eventTimes,
      daysOfWeek,
      maximumDate,
      daysOfMonth,
      minimumDate,
      addNew,
      isVisible,
      handleCancel,
      currentWeek,
      maxWeek,
      minWeek,
      year,
      defaultValue,
      dayjs,
      onIncrement,
      onDecrement,
    };
  },
});

export default WeekCalendar;
</script>

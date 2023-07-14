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
            @click="decrementYear"
            class="btn-navigate"
            type="light"
            outlined
            ><unicon name="angle-left"></unicon
          ></sdButton>
          <span class="date-label">
            <sdDropdown :action="['click']" class="date-label">
              <template #overlay>
                <sdCards>
                  <a-row>
                    <a-col v-for="item in months" :sm="8" :key="item.id"
                      ><span
                        @click="() => setMonth(item.id)"
                        style="
                          display: block;
                          text-align: center;
                          cursor: pointer;
                        "
                        >{{ item.month }}</span
                      ></a-col
                    >
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
    <BlockViewCalendarWrapper>
      <div class="table-responsive">
        <a-calendar
          :headerRender="
            () => {
              return false;
            }
          "
          mode="month"
          v-model:value="defaultValues"
          class="ant-picker-calendar ant-picker-calendar-responsive"
          ><template #dateCellRender="{ current: value }">
            <ul class="events">
              <sdDropdown
                v-for="item in getListData(value)"
                class="event-dropdown"
                :key="item.id"
                :style="{ padding: 0 }"
                placement="bottomLeft"
                :action="['click']"
              >
                <template #overlay>
                  <ProjectUpdate :onEventDelete="onEventDelete" v-bind="item" />
                </template>
                <li ref="getInput">
                  <a :class="item.label" to="#">
                    {{ item.title }}
                  </a>
                </li>
              </sdDropdown>
            </ul>
          </template>
        </a-calendar>
      </div>
    </BlockViewCalendarWrapper>
  </sdCards>
</template>
<script>
import ProjectUpdate from "./ProjectUpdate";
import AddNewEvent from "./AddNewEvent";
import { BlockViewCalendarWrapper } from "../Style";
import "./style.css";
import { computed, onMounted, ref, defineComponent } from "vue";
import { useStore } from "vuex";
import dayjs from "dayjs";

const MonthCalendar = defineComponent({
  name: "MonthCalendar",
  components: { AddNewEvent, BlockViewCalendarWrapper, ProjectUpdate },
  setup() {
    const { state, dispatch } = useStore();
    const events = computed(() => state.calendar.events);
    const isVisible = computed(() => state.calendar.eventVisible);
    const date = ref(dayjs().format("MMM YYYY"));
    const container = ref(null);
    const width = ref(0);
    const defaultValue = ref(dayjs().format("YYYY-MM-DD"));
    const defaultValues = ref();
    const getInput = ref(null);
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

    onMounted(() => {
      const button = document.querySelector(
        ".calendar-header__left .react-calendar__navigation .react-calendar__navigation__label"
      );
      const containers = document.querySelector(
        ".calendar-header__left .react-calendar__viewContainer"
      );
      const calenderDom = document.querySelectorAll(
        ".ant-fullcalendar-content"
      );
      calenderDom.forEach((element) => {
        element.addEventListener("click", (e) => {
          if (e.target.classList[0] === "ant-fullcalendar-content") {
            const getDate = dayjs(
              e.currentTarget.closest("td").getAttribute("title")
            ).format("YYYY-MM-DD");

            container.value = containers;
            width.value =
              getInput.value !== null ? getInput.value.clientWidth : 130;
            defaultValue.value = getDate;

            dispatch("eventVisible", true);
          }
        });
      });
      button &&
        button.addEventListener("click", () =>
          containers.classList.add("show")
        );
      container.value = containers;
      width.value = getInput.value !== null ? getInput.value.clientWidth : 130;
    });

    const onEventDelete = (id) => {
      const data = events.value.filter((item) => item.id !== id);
      dispatch("calendarDeleteData", data);
    };

    function getListData(value) {
      let listData;
      const data = [];
      events.value.map((event) => {
        if (dayjs(event.date[0]).format("MMMM YYYY") === currentLabel.value) {
          const { label, title, id, description, time, date, type } = event;
          const a = dayjs(dayjs(event.date[1]).format("DD MMMM YYYY"));
          const b = dayjs(dayjs(event.date[0]).format("DD MMMM YYYY"));
          const totalDays = a.diff(b, "days");

          switch (value.date()) {
            case parseInt(dayjs(event.date[0]).format("DD"), 10):
              data.push({
                label,
                title,
                id,
                totalDays,
                description,
                time,
                date,
                type,
              });
              listData = data;
              break;
            default:
          }
        }
        return listData;
      });
      return listData || [];
    }

    const handleCancel = () => {
      dispatch("eventVisible", false);
    };

    const addNew = (event) => {
      const arrayData = [];
      events.value.map((data) => {
        return arrayData.push(data.id);
      });
      const max = Math.max(...arrayData);
      console.log(event);
      dispatch("addNewEvents", [...events.value, { ...event, id: max + 1 }]);
      dispatch("eventVisible", false);
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

    return {
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
      dayjs,
      events,
      isVisible,
      getListData,
      addNew,
      handleCancel,
      date,
      container,
      currentLabel,
      width,
      defaultValue,
      defaultValues,
      getInput,
      onEventDelete,
      setMonth,
    };
  },
});

export default MonthCalendar;
</script>
